import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

interface WalletCardProps {
	isSelected: boolean;
	zIndex: number;
}

interface LicenceCardContainerProps {
	card: JSX.Element;
}

const ImageHoverZoom = () => {
	return (
		<div className="profile">
			<div className="profile-img-container">
				<img
					className="profile-img"
					src={require("./../assets/images/ProfilePic.jpg")}
				/>
			</div>
			<div className="profile-text-container">
				<div className="profile-text">About Me</div>
			</div>
		</div>
	);
};

// export const LicenceCardContainer = (props: LicenceCardContainerProps) => {
//     <Box
// 			padding={"5vh"}
// 			justifyContent={"center"}
// 			overflow={"hidden"}
// 			className="licenceCard"
// 		>
// 			<Flex
// 				flexDirection={"column"}
// 				maxW={"container.lg"}
// 				width={"container.lg"}
// 				boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
// 				rounded={5}
// 				onMouseLeave={(event) => mouseOffCard(event)}
// 				onMouseMove={(event) => mousePositionChanged(event)}
// 				transition={"all 0.1s ease 0s"}
// 				backgroundColor={"white"}
// 			>
// 				<div>The Card</div>
// 			</Flex>
// 		</Box>
// }

export const LicenceCard = (props: WalletCardProps) => {
	// We're going for a 'drivers license'-esque joke
	// Include qualifications and follow the layout of a license
	//      This includes correct font as well
	//
	// To sell it we'll hve a 3D tilt/pop-out effect along with a
	// sheen on the background
	//      https://codepen.io/technokami/pen/abojmZa

	function mouseOffCard(event: React.SyntheticEvent) {
		if (props.isSelected) {
			// Revert transform
			const newTransform =
				"perspective(500px) scale(1) rotateX(0) rotateY(0)";
			(event.currentTarget as HTMLDivElement).style.transform =
				newTransform;

			// Remove gradient shine from the card
			const gradientOverlay = document.querySelector(
				".cardShine"
			) as HTMLDivElement;
			gradientOverlay.style.mask = "";
			gradientOverlay.style.background = "";
		}
	}

	function mouseOverCard(event: React.MouseEvent) {
		if (!props.isSelected) {
			/* Lift card out of wallet on mouse over*/
			const newTransform = "translate(20px)";

			(event.currentTarget as HTMLDivElement).style.transform =
				newTransform;
		}
	}

	function mousePositionChanged(event: React.MouseEvent) {
		if (props.isSelected) {
			const width = (event.currentTarget as HTMLDivElement).offsetWidth;
			const height = (event.currentTarget as HTMLDivElement).offsetHeight;
			/* Store the x position */
			const xVal = event.clientX;
			/* Store the y position */
			const yVal = event.clientY;
			/*
			 * Calculate rotation valuee along the Y-axis
			 * Here the multiplier 20 is to
			 * Control the rotation
			 * You can change the value and see the results
			 */
			const yRot = 5 * ((xVal - width / 2) / width);
			// setYRotation(yRot);

			/* Calculate the rotation along the X-axis */
			const xRot = -5 * ((yVal - height / 2) / height);

			const gradientScale = (yVal - height / 2) / width;

			const shineScale = (xVal - width / 2) / width;

			/* Generate string for CSS transform property */
			const newTransform =
				"perspective(500px) scale(1.01) rotateX(" +
				xRot +
				"deg) rotateY(" +
				yRot +
				"deg)";

			(event.currentTarget as HTMLDivElement).style.transform =
				newTransform;

			// Set a gradient shine to the card
			const gradientOverlay = document.querySelector(
				".cardShine"
			) as HTMLDivElement;
			gradientOverlay.style.mask = `linear-gradient(110deg, black ${
				shineScale * 100 * 2
			}%, transparent, black ${shineScale * 100 * 3}%)`;
			// gradientOverlay.style.maskMode = "alpha";
			gradientOverlay.style.background = `
                
            linear-gradient(${120}deg, transparent, white ${
				gradientScale * (100 * 4)
			}%),
                linear-gradient(${290}deg, transparent, white ${
				gradientScale * (100 * 4)
			}%),
                linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)
            `;

			// Change the header red to be darker as it moves
			const licenseHeader = document.querySelector(
				".licenceHeader"
			) as HTMLDivElement;
			licenseHeader.style.background = `
                
            linear-gradient(${120}deg, transparent, #B0413E ${
				gradientScale * (100 * 4)
			}%),
                linear-gradient(${290}deg, transparent, #B0413E ${
				gradientScale * (100 * 4)
			}%), #473335`;

			// const gradient =
			// 	"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)," +
			// 	"linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%)," +
			// 	"linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";
			// (event.currentTarget as HTMLDivElement).style.background = gradient;
			// (event.currentTarget as HTMLDivElement).style.background = gradient;
			// console.log(event.clientX + ", " + event.clientY);
		}
	}

	return (
		<Flex
			padding={"5vh"}
			justifyContent={"center"}
			overflow={"hidden"}
			className="licenceCardContainer"
			zIndex={props.zIndex}
		>
			<Flex
				flexDirection={"column"}
				maxW={"container.lg"}
				width={"container.lg"}
				boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
				rounded={5}
				onMouseLeave={(event) => mouseOffCard(event)}
				onMouseMove={(event) => mousePositionChanged(event)}
				transition={"all 0.1s ease 0s"}
				backgroundColor={"white"}
				className="licenceCard"
			>
				<div className="cardShine">
					<div className="licenceHeader">
						<Text fontSize={25} color={"white"} as={"b"}>
							Developer Licence
						</Text>
						<Text fontSize={20} color={"white"} as={"b"}>
							New South Wales, Australia
						</Text>
					</div>
					<Flex
						justifyContent={"space-between"}
						padding={"50px"}
						height={"100%"}
					>
						<VStack marginRight={"50px"} marginBottom={"50px"}>
							<ImageHoverZoom />
							<Text>Jack Willing</Text>
							<Text>Short sighted (Literally)</Text>
							<Text>Far sighted (Metaphorically)</Text>
						</VStack>
						<VStack>
							<Text align={"left"} as={"b"}>
								Who am I
							</Text>
							<Text align={"left"}>
								Graduate university student studying a Bachelor
								of Computing Science (Honours) at the University
								of Technology, Sydney (UTS).
								<br />
								Growing up I had quite a physical childhood,
								playing baseball and continuing to do Karate and
								rock climbing into my adult life, teaching me
								discipline and allowing me to operate in
								team-oriented environments.
								<br />
								<br />
								Throughout highschool and my personal life
								computers played a more prominent role both in
								work and relaxation. My fathers work as a senior
								systems engineer peaked my interest in the field
								from a young age and has carried itself all the
								way through into my career.
							</Text>
						</VStack>
					</Flex>
				</div>
			</Flex>
		</Flex>
	);
};
