import React from "react";
import {
	Container,
	Flex,
	Button,
	Box,
	useBreakpointValue,
	IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "../../pages/Portfolio";
import { Item } from "./Item";

import { ChevronRightIcon, ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
// import Slider from "react-slick";

const motionFlex = motion(Flex);

const transitionProps = {
	stiffness: 400,
	type: "spring",
	damping: 60,
	mass: 3,
};

interface CarouselProps {
	projects: Project[];
	selectedProject: number;
	selectedProjectImages: string[];
	setSelectedProject: (i: number) => void;
	show: boolean;
	setShow: (hide: boolean) => void;
}

const settings = {
	dots: true,
	infinite: true,
	lazyload: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: false,
};

export const ChakraCarousel = (props: CarouselProps) => {
	const [itemWidth, setItemWidth] = useState(500);
	// const [selectedProject, setSelectedProject] = useState(props.selectedProject);

	// React-slick stuff
	// const [slider, setSlider] = React.useState<Slider | null>(null);
	// const top = useBreakpointValue({ base: "90%", md: "50%" });
	// const side = useBreakpointValue({ base: "30%", md: "10px" });

	// Upper level components include:
	//      1. Item container
	//      2. Items (passed through as props)
	//      3. Item width
	//      4. Slider
	//      5. Buttons

	// Adapt this after we get a very basic example in:
	//  https://codesandbox.io/s/chakra-carousel-dd8vn?file=/src/ChakraCarousel.js

	//  We also need to track the active or current item selected
	//  as well as the location

	// Massively overthinking this. It just needs to have a current ID set, then we show the card
	//  for that ID. We can come up with some fancy animations later if we want but for now it
	//  just needs to display the info for each project at the right size.

	// We don't want everything loaded at once anyway. Depending on if any of them have something
	// embedded, we probably don't want it all loading at once.

	const handleDecrement = () => {
		if (props.selectedProject > 0) {
			props.setSelectedProject(props.selectedProject - 1);
		}
	};

	const handleIncrement = () => {
		if (props.selectedProject < props.projects.length - 1) {
			props.setSelectedProject(props.selectedProject + 1);
		}
	};

	// return (
	// 	<Box
	// 		position={"relative"}
	// 		height={"100%"}
	// 		justifyContent={"center"}
	// 		alignItems={"center"}
	// 	>
	// 		{/* CSS files for react-slick */}
	// 		<link
	// 			rel="stylesheet"
	// 			type="text/css"
	// 			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
	// 		/>
	// 		<link
	// 			rel="stylesheet"
	// 			type="text/css"
	// 			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
	// 		/>
	// 		{/* Left Icon */}
	// 		<IconButton
	// 			aria-label="left-arrow"
	// 			boxSize={9}
	// 			// colorScheme="messenger"
	// 			borderRadius="full"
	// 			position="absolute"
	// 			left={side}
	// 			top={top}
	// 			// transform={"translate(0%, -50%)"}
	// 			zIndex={1}
	// 			onClick={() => slider?.slickPrev()}
	// 		>
	// 			<ChevronLeftIcon boxSize={9} />
	// 		</IconButton>
	// 		{/* Right Icon */}
	// 		<IconButton
	// 			aria-label="right-arrow"
	// 			// colorScheme="messenger"
	// 			borderRadius="full"
	// 			position="absolute"
	// 			right={side}
	// 			top={top}
	// 			// transform={"translate(0%, -50%)"}
	// 			zIndex={1}
	// 			onClick={() => slider?.slickNext()}
	// 		>
	// 			<ChevronRightIcon boxSize={9} />
	// 		</IconButton>
	// 		{/* Slider */}
	// 		<Slider {...settings} ref={(slider: Slider) => setSlider(slider)}>
	// 			{props.projects.map((project, index) => (
	// 				<Flex key={index} height={"100%"}>
	// 					<Container
	// 						py={8}
	// 						px={0}
	// 						maxW="container.m"
	// 						centerContent
	// 						gap={30}
	// 					>
	// 						<Item
	// 							project={project}
	// 							itemWidth={itemWidth}
	// 							gap={32}
	// 						/>
	// 					</Container>
	// 				</Flex>
	// 			))}
	// 		</Slider>
	// 	</Box>
	// );

	if (!props.show) {
		return <></>;
	}

	return (
		<Box
			position={"fixed"}
			display={"block"}
			top={0}
			left={0}
			right={0}
			height={"100vh"}
			width={"100%"}
			zIndex={999}
			background={"rgba(0, 0, 0, 0.4)"}
			// overflowY={"scroll"}
		>
			<Button
				color={"gray.200"}
				variant={"link"}
				zIndex={0}
				position={"fixed"}
				right={"5%"}
				top={"5%"}
				onClick={() => props.setShow(false)}
			>
				<CloseIcon boxSize={9} />
			</Button>
			<Flex
				direction={"row"}
				height={"100%"}
				// width={"100%"}
				// position={"absolute"}
				// left={0}
				// right={0}
				justifyContent={"center"}
				alignItems={"center"}
				overflow={"hidden"}
			>
				<Button
					color="gray.200"
					variant="link"
					zIndex={0}
					minW={0}
					top={"50%"}
					left={"5%"}
					position={"fixed"}
					width={"10vw"}
					onClick={handleDecrement}
				>
					<ChevronLeftIcon boxSize={9} />
				</Button>
				<Container
					py={8}
					px={0}
					maxW="container.m"
					height={"100%"}
					centerContent
					gap={30}
					overflowY={"scroll"}
				>
					<Item
						key={props.selectedProject}
						project={props.projects[props.selectedProject]}
						images={props.selectedProjectImages}
						itemWidth={itemWidth}
						gap={32}
					/>
					{/* <Slider aria-label="slider-ex-1" defaultValue={30}>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
				</Slider> */}
				</Container>
				<Button
					color="gray.200"
					variant="link"
					zIndex={0}
					minW={0}
					top={"50%"}
					right={"5%"}
					width={"10vw"}
					position={"fixed"}
					onClick={handleIncrement}
				>
					<ChevronRightIcon boxSize={9} />
				</Button>
			</Flex>
		</Box>
	);
};
