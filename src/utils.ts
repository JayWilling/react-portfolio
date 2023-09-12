export interface imageContainer {
	image: string;
	thumbnail: string;
}

export const loadImages = () => {
	const imageModules = require.context(
		"./../assets/photos",
		false
		// /.*\.(jpg)$/
	);
	const imageList: imageContainer[] = [];
	// const imageList: string[] = [];
	imageModules.keys().forEach((item, index) => {
		if (!item.toLowerCase().endsWith("-small.jpg")) {
			const thumbnailSrc = item.replace(/.jpg|.JPG/, "-small.jpg");
			const newImage: imageContainer = {
				image: imageModules(item),
				thumbnail: imageModules(thumbnailSrc),
			};
			imageList.push(newImage);
			// imageList.push(imageModules(item));
		}
	});
	return imageList;
};