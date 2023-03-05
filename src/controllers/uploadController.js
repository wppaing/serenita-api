const cloudinary = require('../config/cloudinary');

exports.upload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const content = Buffer.from(req.file.buffer).toString('base64');
  const uri = `data:${req.file.mimetype};base64,${content}`;

  cloudinary.uploader.upload(
    uri,
    {
      folder: `serenita/images/${req.body.folder_name}`,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: 'Error uploading file to Cloudinary' });
      }

      res.status(200).json({
        message: 'success',
        result,
      });
    }
  );
};
