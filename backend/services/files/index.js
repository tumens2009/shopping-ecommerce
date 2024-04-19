const { Product } = require("../../models");
const { Op } = require("sequelize");
const files = require("../../models/files");

const upload = async (data) => {
  try {
    res.success.Created('file.created', {
        name: data.file.filename,
        path: `${process.env.PUBLIC_URL}/posts/${data.file.filename}`,
    });
    const newFiles = await files.create(id,data);
    res.status(201).json({
        message: 'File uploaded successfully',
        file: newFile
      });
    return newFiles;
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  upload
};
