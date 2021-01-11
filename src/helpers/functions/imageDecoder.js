class DecodedImage {
    static decodeImageBuffer(imageInput) {
        if (imageInput !== null) {
            const image = URL.createObjectURL(imageInput);
            return image;
        }
    }
}

export default DecodedImage;
