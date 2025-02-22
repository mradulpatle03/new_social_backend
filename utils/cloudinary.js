const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'cloudmp',
    api_secret: '5eKE9n5jC8yUgA2PmzNgD71ke0c',
    api_key: '466931482976763',
    
    timeout:60000
})

const uploadToCloudinary = async (fileUri) => {
    try{
        const response = await cloudinary.uploader.upload(fileUri);
        return response ;
    }catch(e){
        console.error(e);
        throw new Error("failed to upload image to cloudinary");
    }
}

module.exports = {uploadToCloudinary, cloudinary};