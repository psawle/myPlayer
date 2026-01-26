const ImageKit = require("imagekit")

const imageKit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
    urlEndpoint:process.env.IMAGEKIT_URL_KEY,
});
console.log("KEYS:", {
    pub: process.env.IMAGEKIT_PUBLIC_KEY,
    priv: process.env.IMAGEKIT_PRIVATE_KEY,
    url: process.env.IMAGEKIT_URL_KEY,
  });

const uploadFile = async (file) => {
    try {
      const result = await imageKit.upload({
        file: file.buffer.toString("base64"), // ✅ MUST
        fileName: file.originalname,          // ✅ MUST
        folder: "/songs",
        useUniqueFileName: true,
      });
  
      console.log("ImageKit Success:", result); // ✅ DEBUG
  
      return result;
  
    } catch (err) {
      console.error("ImageKit Error:", err); // ✅ SHOW REAL ERROR
      throw err;
    }
  };
  
  module.exports = uploadFile;

