"use client";

import React, { useEffect, useState } from "react";
import { Flex, Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// And react-slick as our Carousel Lib
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import imagedsd from "./../assets/photos/DSC01958.jpg";
import { useImage } from "./ImageImporter";

import img1 from "./../assets/photos/DSC01910.jpg";

// Props for the carousel
interface ImageCarouselProps {
	images: string[];
}

// Settings for the slider
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

// const baseImagePath = "./../assets/photos/";

export function ImageCarousel(props: ImageCarouselProps) {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	// const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	// Helper function to import the required images
	// const loadImages = () => {
	// 	// const imageList: typeof import("*.jpg")[] = [];

	// 	// props.images.forEach((imagePath, index) => {
	// 	// 	import("./../assets/photos/DSC01958.jpg").then((image) => {
	// 	// 		imageList.push(image);
	// 	// 	});
	// 	// });

	// 	const imageList: string[] = [];
	// 	props.images.forEach((imageName, index) => {
	// 		const { loading, error, image } = useImage(imageName);
	// 		if (error || !image) return;
	// 		imageList.push(image);
	// 		console.log(image);
	// 	});
	// 	return imageList;
	// };

	const renderMedia = (src: string, key: number) => {
		let media: JSX.Element;
		console.log(src);
		if (src.toLowerCase().includes("youtube")) {
			media = (
				<iframe
					src={src}
					style={{
						// background: "rgba(0, 0, 0)",
						objectFit: "contain",
						width: "100%",
						height: "40vh",
					}}
				></iframe>
			);
		} else {
			media = (
				<img
					src={src}
					style={{
						// background: "rgba(0, 0, 0)",
						objectFit: "contain",
						width: "100%",
						height: "40vh",
					}}
				/>
			);
		}
		return (
			<Slide key={key} index={key}>
				{media}
			</Slide>
		);
	};

	// const [imageList, setImageList] = useState(loadImages());
	// These are the images used in the slide
	const cards = [
		img1,
		img1,
		// "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
		// "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
		// "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
	];
	// const cards = props.images;

	return (
		<Box
			position={"relative"}
			height={"40vh"}
			width={"100%"}
			justifyContent={"center"}
		>
			<CarouselProvider
				naturalSlideHeight={50}
				naturalSlideWidth={100}
				totalSlides={props.images.length}
			>
				<Slider>
					{props.images.map((src, index) => renderMedia(src, index))}
				</Slider>

				<ButtonBack className="pureReactCarouselButtonLeft">
					<ChevronLeftIcon
						width={"40px"}
						height={"40px"}
						backgroundColor={"gray.100"}
						borderRadius={"100%"}
					/>
					{/* <IconButton
						aria-label="left-arrow"
						borderRadius="full"
						zIndex={1}
						icon={<ChevronLeftIcon />}
					/> */}
				</ButtonBack>
				<ButtonNext className="pureReactCarouselButtonRight">
					<ChevronRightIcon
						width={"40px"}
						height={"40px"}
						backgroundColor={"gray.100"}
						borderRadius={"100%"}
					/>
					{/* <IconButton
						aria-label="right-arrow"
						borderRadius="full"
						zIndex={1}
						icon={<ChevronRightIcon />}
					/> */}
				</ButtonNext>
			</CarouselProvider>
		</Box>
		// <Box
		// 	position={"relative"}
		// 	height={"100%"}
		// 	width={"full"}
		// 	overflow={"hidden"}
		// >
		// 	{/* CSS files for react-slick */}
		// 	<link
		// 		rel="stylesheet"
		// 		type="text/css"
		// 		href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
		// 	/>
		// 	<link
		// 		rel="stylesheet"
		// 		type="text/css"
		// 		href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
		// 	/>
		// 	{/* Left Icon */}
		// 	<IconButton
		// 		aria-label="left-arrow"
		// 		// colorScheme="messenger"
		// 		borderRadius="full"
		// 		position="absolute"
		// 		left={side}
		// 		top={top}
		// 		transform={"translate(0%, -50%)"}
		// 		zIndex={1}
		// 		onClick={() => slider?.slickPrev()}
		// 	>
		// 		<ChevronLeftIcon />
		// 	</IconButton>
		// 	{/* Right Icon */}
		// 	<IconButton
		// 		aria-label="right-arrow"
		// 		// colorScheme="messenger"
		// 		borderRadius="full"
		// 		position="absolute"
		// 		right={side}
		// 		top={top}
		// 		transform={"translate(0%, -50%)"}
		// 		zIndex={1}
		// 		onClick={() => slider?.slickNext()}
		// 	>
		// 		<ChevronRightIcon />
		// 	</IconButton>
		// 	{/* Slider */}
		// 	<Slider {...settings} ref={(slider: Slider) => setSlider(slider)}>
		// 		{cards.map((url, index) => (
		// 			<Box
		// 				key={index}
		// 				height={"2xl"}
		// 				// zIndex={2}
		// 				position="relative"
		// 				backgroundPosition="center"
		// 				backgroundRepeat="no-repeat"
		// 				backgroundSize="cover"
		// 				backgroundImage={`url(${url})`}
		// 			/>
		// 		))}
		// 	</Slider>
		// </Box>
	);
}
