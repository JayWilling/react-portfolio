import { Box, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const ContactSection = (props: { showOnScroll: boolean }) => {
	return (
		<Flex
			flexDirection={"column"}
			width={"100%"}
			height={
				"calc(var(--minHeaderHeight) + var(--minHeaderHeight) + var(--minHeaderHeight))"
			}
			// zIndex={0}
		>
			<Box
				opacity={props.showOnScroll ? 0 : 1}
				className="contactSocialsContainer showOnScroll"
				height={"var(--minHeaderHeight)"}
			>
				<Flex className="socialsBtn">
					<a
						href="https://github.com/jayWilling"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>
							<i className="fa-brands fa-github"></i>
						</button>
					</a>
				</Flex>
				<Flex className="socialsBtn">
					<a
						href="https://www.instagram.com/jwillingg/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>
							<i className="fa-brands fa-instagram"></i>
						</button>
					</a>
				</Flex>
				<Flex className="socialsBtn">
					<a
						href="https://www.linkedin.com/in/jack-willing-1401a5182/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button>
							<i className="fa-brands fa-linkedin"></i>
						</button>
					</a>
				</Flex>
				{/* <div className="socials" style={{ fontSize: "2vw" }}>
				</div> */}
			</Box>
			<Flex
				flexDirection={"column"}
				height={"100%"}
				justifyContent={"space-evenly"}
				backgroundColor={"var(--backgroundColour)"}
			>
				<Text
					verticalAlign={"center"}
					fontSize={"20"}
					color={"white"}
					height={"100%"}
					className="Nameplate"
				>
					Willing to do more
				</Text>
				<Text color={"white"} width={"80%"} margin={"0 auto"}>
					{" "}
					Feel free to reach out via email or LinkedIn if anything you
					saw interested you and I will respond as quickly as humanly
					possible!
				</Text>
				<Flex flexDirection={"row"} justifyContent={"space-evenly"}>
					<Text
						verticalAlign={"center"}
						fontSize={"16"}
						color={"white"}
						height={"100%"}
						className="Nameplate"
					>
						jwilling123@gmail.com
					</Text>
				</Flex>
			</Flex>
			<Box
				backgroundColor={"var(--headerColour)"}
				height={"var(--minHeaderHeight)"}
			>
				<Text color={"lightgray"}>© Jack Willing 2023</Text>
			</Box>
		</Flex>
	);
};
