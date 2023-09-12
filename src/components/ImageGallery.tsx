import React from "react";

interface ImageGalleryProps {
	imageList: string[];
}

export const ImageGallery = (props: ImageGalleryProps) => {
	const imageListLength = props.imageList.length;

	const columnCount = 4;
	const columnLength = Math.floor(imageListLength / columnCount);
	const columnRemainder = imageListLength % columnCount;
	const columnContents = [];

	for (let i: number = 0; i < columnCount; i++) {
		let currentColLength = columnLength;
		if (i < columnRemainder) currentColLength++;
		const startIndex = currentColLength * i;
		const endIndex = currentColLength * (i + 1);
		const columnImages = props.imageList.slice(startIndex, endIndex);

		columnContents.push(
			<div key={i} className="photoGridColumn">
				{columnImages.map((image, imageIndex) => (
					<img key={imageIndex} src={image} />
				))}
			</div>
		);
	}

	return (
		<div className="photoGridRow">
			{columnContents.map((column, index) => column)}
		</div>
	);
};
