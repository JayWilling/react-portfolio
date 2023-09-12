import React, { useEffect, useRef, useState } from "react";
import { ImageGallery } from "../components/ImageGallery";
import { Box, ChakraProvider, Flex, Image } from "@chakra-ui/react";

// Images
// import Img1 from "./../assets/photos/DSC_0908.jpg";
// import Img2 from "./../assets/photos/DSC_0980.jpg";
// import Img3 from "./../assets/photos/DSC_0981.jpg";
// import Img4 from "./../assets/photos/DSC_0982-2.jpg";
// import Img5 from "./../assets/photos/DSC_0994.jpg";
// import * from "./../assets/photos";

// To generate smaller thumbnails of each image in cmd:
// for %i in (*.jpg) do ffmpeg -i "%i" -vf scale=20:-1 "%~ni-small.jpg"

interface imageContainer {
	image: string;
	thumbnail: string;
}

const loadImages = () => {
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

const Photography = () => {
	// Just map a preset number of images for display
	//    will make it auto-update as new images are added
	// const imageList = [...new Array(9)].map((number, index) => {
	// 	return `./../assets/photos/image-${index}.jpg`;
	// });

	const [imageList, setImageList] = useState(loadImages());

	const [pictureDisplay, setPictureDisplay] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
		const img = event.currentTarget;
		if (img.complete) {
			img.style.opacity = "1";
			img.style.filter = "blur(0)";
		} else {
			img.addEventListener("load", (e) => {
				imageLoadComplete(e);
			});
		}
	};

	const imageLoadComplete = (event: Event) => {
		const img = event.currentTarget as HTMLImageElement;
		if (img.complete && img != null) {
			img.style.opacity = "1";
			img.style.filter = "blur(0)";
			img.removeEventListener("load", (e) => {
				imageLoadComplete(e);
			});
		}
	};

	const imageClicked = (imgSrc: string) => {
		setSelectedImage(imgSrc);
		setPictureDisplay(!pictureDisplay);
	};

	const PictureOverlay = () => {
		if (!pictureDisplay) {
			return <></>;
		}
		return (
			<Box
				position={"fixed"}
				display={"block"}
				top={0}
				left={0}
				right={0}
				zIndex={999}
				height={"100vh"}
				width={"100vw"}
				justifyContent={"center"}
				alignItems={"center"}
				background={"rgba(0, 0, 0, 0.4)"}
			>
				<img
					className="imageClicked"
					src={selectedImage}
					onClick={() => {
						imageClicked("");
					}}
				/>
			</Box>
		);
	};

	return (
		<ChakraProvider>
			<PictureOverlay />
			<Box
				// paddingLeft={"5px"}
				paddingRight={"10px"}
				paddingBottom={"10px"}
				w="100%"
				mx="auto"
				bg="gray.800"
				sx={{ columnCount: [1, 2, 3], columnGap: "5px" }}
			>
				{imageList.map((imageSrc, index) => {
					return (
						<div
							key={index}
							style={{
								backgroundSize: "cover",
								backgroundPosition: "center",
								// backgroundImage: `url(${imageSrc.thumbnail})`,
								overflow: "hidden",
							}}
							className="blur-load"
						>
							<img
								loading="lazy"
								src={imageSrc.image}
								onLoad={(event) => {
									imageLoaded(event);
								}}
								style={{
									position: "absolute",
									objectFit: "cover",
									objectPosition: "center",
									zIndex: "1",
									margin: "10px 5px 5px 5px",
								}}
								onClick={() => {
									imageClicked(imageSrc.image);
								}}
							/>
							<img
								src={imageSrc.thumbnail}
								style={{
									width: "100%",
									// height: "auto",
									objectFit: "cover",
									filter: "blur(10px)",
									zIndex: "-1",
									margin: "10px 0px 0px 5px",
									backgroundColor: "white",
								}}
							/>
							{/* <Image
								// w="100%"
								width="auto"
								borderRadius="xl"
								mb={1}
								// display="inline-block"
								display={"block"}
								objectPosition={"center"}
								objectFit={"cover"}
								alt="Alt"
								src={imageSrc.image}
								loading="lazy"
							/> */}
						</div>
					);
				})}
			</Box>
		</ChakraProvider>
		// <div>
		// 	<div
		// 		className={pictureDisplay ? "picture open" : "picture"}
		// 		onClick={() => setPictureDisplay(false)}
		// 	>
		// 		<img src={selectedImage} />
		// 	</div>
		// 	<ImageGallery imageList={imageList} />
		// 	<div className="photoGridRow">
		// 		<div className="photoGridColumn">
		// 			{imageList.map((imageSrc, index) => {
		// 				return <img key={index} src={imageSrc} />;
		// 			})}
		// 		</div>
		// 	</div>
		// 	<div className="photo-gallery"></div>
		// </div>
	);
};

export default Photography;
