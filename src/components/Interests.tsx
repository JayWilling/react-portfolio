// Section for interests and experience

import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import "./Interests.css";

export const Interests = () => {
	return (
		<Flex
			width={"100%"}
			height={"100vh"}
			backgroundColor={"white"}
			justifyContent={"space-evenly"}
			alignItems={"center"}
		>
			<Flex
				width={"40%"}
				height={"50%"}
				direction={"column"}
				// backgroundColor={"var(--backgroundColour)"}
				backgroundColor={"white"}
				boxShadow={"1px"}
				dropShadow={"lg"}
				paddingRight={"2vw"}
				paddingLeft={"2vw"}
				paddingBottom={"2vw"}
				className="interestCard"
			>
				<Box height={"5vw"}>
					<Text>Hobbies</Text>
				</Box>
				<Box
					color={"white"}
					backgroundColor={"var(--backgroundColour)"}
					textAlign={"left"}
					paddingLeft={"5vw"}
					paddingRight={"5vw"}
					height={"100%"}
				>
					<UnorderedList>
						<ListItem>Running</ListItem>
						<ListItem>Photography</ListItem>
						<ListItem>Rock Climbing</ListItem>
						<ListItem>Hiking</ListItem>
					</UnorderedList>
					<br />
					<Text>Anything that keeps me active and moving.</Text>
				</Box>
			</Flex>
			<Flex
				direction={"column"}
				width={"40%"}
				height={"50%"}
				backgroundColor={"white"}
				dropShadow={"lg"}
				paddingRight={"2vw"}
				paddingLeft={"2vw"}
				paddingBottom={"2vw"}
				className="interestCard"
			>
				<Box height={"5vw"}>
					<Text>Professional Interests</Text>
				</Box>
				<Box
					color={"white"}
					backgroundColor={"var(--backgroundColour)"}
					textAlign={"left"}
					paddingLeft={"5vw"}
					paddingRight={"5vw"}
					height={"100%"}
				>
					<UnorderedList>
						<ListItem>Web development</ListItem>
						<ListItem>Typescript & React</ListItem>
						<ListItem>Algorithms</ListItem>
						<ListItem>Creative coding</ListItem>
						<ListItem>New frameworks and languages</ListItem>
					</UnorderedList>
					<br />
					<Text>The sky is the limit</Text>
				</Box>
			</Flex>
		</Flex>
	);
};
