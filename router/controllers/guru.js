const Guru = require('../../models/guru');

module.exports = {
  //get all
  index: async (req, res) => {
    try {
      const guru = await Guru.find();
      if (guru.length > 0) {
        res.status(200).json({
          status: true,
          data: guru,
          method: req.method,
          url: req.url
        });
      } else {
        res.status(404).json({ success: false, message: 'Tidak ada data' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Terjadi kesalahan' });
    }
  },
  //get
  show: async (req, res) => {
    try {
      const guru = await Guru.findById(req.params.id)
      res.json({
        status: true,
        data: guru,
        method: req.method,  
        url: req.url,
        message: "Data berhasil di dapat"
      })
    } catch (error) {
      res.status(400).json({success : false})
      
    }
  
  },
  //create
  store: async (req, res) => {
   try {
    const guru = await Guru.create(req.body)
    res.status(200).json({
      status : true,
      data : guru,
      method : req.method,
      url : req.url,
      message : "Data berhasil ditambahkan"
    })
   } catch (error) {
    res.status(400).json({success : error})
    
   }
  },
  //update
  update: async (req, res) => {
    try {
      const guru = await Guru.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      res.json({
        status: true,
        data: guru,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      })
    } catch (error) {
      res.status(400).json({success: error})
    }
  
  },
  //delete
  delete: async (req, res) => {
    try {
      await Guru.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      })
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
};
