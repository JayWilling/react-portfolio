import {
	Container,
	Heading,
	VStack,
	Text,
	Flex,
	HStack,
	Tag,
	Slider,
	SliderThumb,
	SliderTrack,
	SliderFilledTrack,
	ChakraProvider,
	SimpleGrid,
	Box,
	Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChakraCarousel } from "../components/Carousel/ChakraCarousel";
import projectsJson from "../components/MiniProjects/projects.json";
import "./Portfolio.css";

// Import the known images for each project here
import {
	InstrumentFeedback,
	OnTimeTable,
	Novulis,
	SatelliteLRP,
	PuzzleBox,
	NoteSystem,
} from "../assets/images";

// Tech stack and architecture enum
enum Language {
	JS = "JavaScript",
	TS = "TypeScript",
	Java = "Java",
	React = "React",
	Cpp = "C++",
	CS = "C#",
	HtmlCss = "HTML/CSS",
	SQL = "SQL",
	Python = "Python",
	VBNet = "VB.Net",
}

enum Technology {
	Processing = "Processing",
	P5js = "P5.js",
	Librosa = "Librosa",
	Essentia = "Essentia",
	Keras = "Keras",
	PyTorch = "PyTorch",
	Unity = "Unity",
	Arduino = "Arduino",
}

// Create a list of the projects that we will map to each card in our carousel
export interface Project {
	id: number;
	year: string;
	title: string;
	description: string;
	images: string[];
	icon: string;
	backgroundColour: string;
	link: string;
	languages: Language[];
	technologies: Technology[];
}

// const projects: Project[] = projectsJson as Project[];
const projects: Project[] = (projectsJson as Project[]).sort((a, b) =>
	a.year < b.year ? 1 : b.year < a.year ? -1 : 0
);

const ProjectCard = (props: {
	project: Project;
	id: number;
	onClick: (projectId: number) => void;
	timelineClass: string;
	timelineView: boolean;
	isObserved: boolean;
}) => {
	const cardClass: string =
		(props.timelineView ? "timelineCard" : "portfolioCard") +
		(props.isObserved ? " showOnScroll" : "");
	return (
		<Box className={props.timelineView ? props.timelineClass : ""}>
			<Flex
				// aspectRatio={2 / 1}
				width={"100%"}
				height={"100%"}
				borderRadius="xl"
				// mb={"5vh"}
				// flexDirection={"column"}
				// justifyContent={"center"}
				// alignItems={"center"}
				// display="table"
				backgroundColor={props.project.backgroundColour}
				// paddingTop={"20%"}
				// paddingBottom={"20%"}
				zIndex={1}
				className={cardClass}
				onClick={() => {
					props.onClick(props.id);
				}}
				animation={"1s ease-in-out 0s 1 popIn"}
			>
				<i
					className={`fa-solid ${props.project.icon} fa-2xl`}
					style={{ color: "white" }}
				></i>
				<Text
					fontSize={"20px"}
					color={"white"}
					noOfLines={[1]}
					margin={"10px"}
				>
					{props.project.title}
				</Text>
				{props.timelineView ? (
					<>
						<Text
							fontSize={"30px"}
							color={"white"}
							noOfLines={[1]}
							margin={"10px"}
						>
							{props.project.year}
						</Text>

						{/* Background colour to ensure the slide appears underneath */}
						<Box
							position={"absolute"}
							width={"100%"}
							height={"100%"}
							top={0}
							zIndex={-1}
							borderRadius="xl"
							mb={"5vh"}
							backgroundColor={props.project.backgroundColour}
							// className="timelineCard"
						></Box>

						{/* Information slide under the project card */}
						<Box
							position={"absolute"}
							width={"100%"}
							height={"100%"}
							borderRadius="xl"
							mb={"5vh"}
							className={"timelineSlide"}
							color={"white"}
							padding={"30px"}
						>
							<Flex
								justifyContent={"space-between"}
								flexDirection={"column"}
								height={"100%"}
							>
								<Text
									height={"80%"}
									textOverflow={"ellipsis"}
									overflow={"hidden"}
								>
									{props.project.description}
								</Text>
								<Text noOfLines={[1]} padding={"5px"}>
									Click for more detail...
								</Text>
							</Flex>
						</Box>
					</>
				) : (
					<></>
				)}
			</Flex>
		</Box>
	);
};

interface PortfolioProps {
	timelineOnly?: boolean;
	isObserved?: boolean;
}

const Portfolio = ({
	timelineOnly = false,
	isObserved = false,
}: PortfolioProps) => {
	const [selectedProject, setSelectedProject] = useState(0);
	const [showProject, setShowProject] = useState(false);
	const [viewTimeline, setViewTimeline] = useState(timelineOnly);

	const updateCurrentProject = (selectionId: number) => {
		setSelectedProject(selectionId);
		setProjectImages(loadProjectImages(selectionId));
	};

	const openProjectCarousel = (projectId: number) => {
		updateCurrentProject(projectId);
		setShowProject(true);
	};

	const loadProjectImages = (selectionId: number): string[] => {
		const imageSet: string[] = [];
		const currentProject = projects[selectionId].title;
		switch (currentProject) {
			case "Instrument Education Tool":
				return InstrumentFeedback;
			case "On-Time Table":
				return OnTimeTable;
			case "Novulis - The Reading Companion":
				return Novulis;
			case "Satellite Image Layerwise Relevance Propagation (LRP)":
				return SatelliteLRP;
			case "Puzzle Box":
				return PuzzleBox;
			case "Note System":
				return NoteSystem;
			default:
				return imageSet;
		}
		return imageSet;
	};

	const [projectImages, setProjectImages] = useState(loadProjectImages(0));

	return (
		// Main page heading

		// Chakra carousel that loads in a collection of past projects
		//    Each card in the carousel will include the same information
		//    Function provided by each card may be somewhat different: i.e.
		//    some of the projects could be run in the browser, whilst others
		//    will need to be downloaded/installed.
		<div>
			<ChakraCarousel
				projects={projects}
				selectedProject={selectedProject}
				selectedProjectImages={projectImages}
				setSelectedProject={updateCurrentProject}
				show={showProject}
				setShow={setShowProject}
			/>
			{/* <ChakraProvider> */}
			{!timelineOnly ? (
				<Button
					onClick={() => {
						setViewTimeline(!viewTimeline);
					}}
					color={"white"}
					backgroundColor={"var(--headerColour)"}
					borderTopRadius={0}
					width={"15ch"}
				>
					{viewTimeline ? "Show grid" : "Show timeline"}
				</Button>
			) : (
				<></>
			)}

			<Box
				p={4}
				maxWidth={viewTimeline ? "" : "32rem"}
				width={viewTimeline ? "" : "100%"}
				maxW={viewTimeline ? "" : "100%"}
				paddingLeft={viewTimeline ? "" : "5vw"}
				paddingRight={viewTimeline ? "" : "5vw"}
				sx={
					viewTimeline
						? {}
						: { columnCount: [1, 2, 3], columnGap: "5vw" }
				}
				mx={viewTimeline ? "" : "auto"}
				className={viewTimeline ? "timeline" : "portfolioGrid"}
				zIndex={1}
			>
				{projects.map((project, index) => {
					const timelineSide =
						index % 2 === 1
							? "timelineContainer right"
							: "timelineContainer left";
					return (
						<ProjectCard
							key={index}
							id={index}
							project={project}
							timelineClass={timelineSide}
							onClick={openProjectCarousel}
							timelineView={viewTimeline}
							isObserved={isObserved}
						/>
					);
				})}
			</Box>
			{/* <SimpleGrid columns={3}>
				
			</SimpleGrid> */}
			{/* </ChakraProvider> */}
		</div>
	);
};

export default Portfolio;
