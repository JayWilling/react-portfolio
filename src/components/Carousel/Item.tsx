import React from "react";
import {
	Flex,
	VStack,
	Heading,
	HStack,
	Tag,
	Box,
	Text,
	Button,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Project } from "../../pages/Portfolio";
import { ImageCarousel } from "../ImageCarousel";
import { Mazes } from "../MiniProjects/Mazes";

interface ItemProps extends PropsWithChildren {
	itemWidth: number;
	project: Project;
	images: string[];
	gap: number;
}

export const Item = (props: ItemProps) => {
	const renderProjectMedia = () => {
		if (props.project.title === "Maze") {
			return <Mazes pageHeight={60} />;
		}
		return <ImageCarousel images={props.images} />;
	};

	return (
		<Flex
			boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
			backgroundColor={"white"}
			justifyContent="space-between"
			flexDirection="column"
			bg="base.d100"
			rounded={5}
			flex={1}
			padding={5}
			// width={"50vw"}
			height={"100%"}
			justify={"center"}
			overflowY={"hidden"}
		>
			{/* The following container can either be a VStack or Flex */}
			<Flex
				w={"70vw"}
				justifyContent="space-between"
				flex={1}
				flexDirection={"column"}
				alignContent={"space-between"}
				// overflowY={"scroll"}
			>
				<Heading
					fontSize={{ base: "xl", md: "2xl" }}
					textAlign="center"
					w="full"
					mb={2}
				>
					{props.project.title}
				</Heading>

				<HStack justifyContent={"center"}>
					{props.project.languages.map((lang) => (
						<Tag key={lang} size="sm" colorScheme="green">
							{lang}
						</Tag>
					))}
					{props.project.technologies.map((tech) => (
						<Tag key={tech} size="sm" colorScheme="red">
							{tech}
						</Tag>
					))}
				</HStack>

				{renderProjectMedia()}
				{/* <ImageCarousel images={props.images} /> */}

				<Text w="full">{props.project.description}</Text>
				<HStack spacing={3} justifyContent={"center"}>
					<Button size="sm">More Detail</Button>
					<Button size="sm" colorScheme="green">
						Demo
					</Button>
					<Button size="sm">Source Code</Button>
				</HStack>
			</Flex>
		</Flex>
	);
};
