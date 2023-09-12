import React, { useEffect, useRef, useState } from "react";

import "./LandingPage.css";
import { LoadingIcon } from "../components/LoadingIcon";
import Typewriter from "../components/TypeWriter";
import imageTest from "./../assets/photos/DSC00395-1.jpg";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Photography from "./Photography";
import { Box, Text } from "@chakra-ui/react";

import "./BackgroundAnimation.scss";
import { Nameplate } from "../components/Namplate";
import { SectionTitle } from "../components/SectionTitle";
import { ContactSection } from "../components/ContactSection";
import { Waves } from "../components/Waves";
import { Interests } from "../components/Interests";

export const LandingPage = () => {
	const [loading, setLoading] = useState(true);

	const cursorRef = useRef(null);
	const photographyHeaderRef = useRef(null);

	const afterPortfolioRef = useRef(null);
	const afterNameplateRef = useRef(null);

	// Elements to animate on scroll;
	const animateInElements = useRef(null);

	useEffect(() => {
		// https://cssanimation.rocks/scroll-animations/
		//      For animating things in as we scroll by

		if (animateInElements.current) {
			const observer = new IntersectionObserver(scrollCallback);
			const parentContainer = animateInElements.current as HTMLDivElement;
			const targets =
				parentContainer.querySelectorAll<HTMLDivElement>(
					".showOnScroll"
				);
			targets.forEach((target) => {
				observer.observe(target);
			});
		}

		// if (afterPortfolioRef.current && photographyHeaderRef.current) {
		// 	const portfolioGap = afterPortfolioRef.current as HTMLDivElement;
		// 	const photographySectionObserver = new IntersectionObserver(
		// 		photographySectionStartCallback
		// 	);
		// 	photographySectionObserver.observe(portfolioGap);
		// 	// const rect = portfolioGap.getBoundingClientRect();
		// }
	}, []);

	// Callback for showing elements as we scroll through the page
	const scrollCallback = function (entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("isVisible");
			} else {
				entry.target.classList.remove("isVisible");
			}
		});
	};

	// Callback for animating background elements as we scroll
	const photographySectionStartCallback = (
		entries: IntersectionObserverEntry[]
	) => {
		console.log("scrolled");
		entries.forEach((entry) => {
			if (entry.isIntersecting && photographyHeaderRef.current) {
				// Take the ref to our photography header
				const header =
					photographyHeaderRef.current as HTMLParagraphElement;
				// Define a new Typewriter and start it
				const typewriter = new Typewriter(header, {});
				typewriter.pauseFor(500).typeString("Photography").start();
			} else if (!entry.isIntersecting && photographyHeaderRef.current) {
				// Clear the header text so we can retype it when we scroll back past
				const header =
					photographyHeaderRef.current as HTMLParagraphElement;
				header.innerHTML = "";
			}
		});
	};

	const renderParticles = () => {
		const particles: JSX.Element[] = [];
		for (let i = 0; i < 100; i++) {
			particles.push(
				<div className="circleContainer">
					<div className="circle"></div>
				</div>
			);
		}
		return (
			<Box
				position={"absolute"}
				width={"100%"}
				height={"100%"}
				top={0}
				overflow={"hidden"}
			>
				{particles}
			</Box>
		);
	};

	const renderBubbles = () => {
		const particles: JSX.Element[] = [];
		for (let i = 0; i < 100; i++) {
			particles.push(
				<div className="bubbleContainer">
					<div className="bubble"></div>
				</div>
			);
		}
		return (
			<Box
				position={"absolute"}
				width={"100%"}
				height={"100%"}
				top={0}
				overflow={"hidden"}
			>
				{particles}
			</Box>
		);
	};

	// if (loading) {
	// 	return (
	// 		<div className="LoadingIconContainer">
	// 			<LoadingIcon isLoaded={loading} />
	// 		</div>
	// 	);
	// }

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				zIndex: 1,
			}}
		>
			<Nameplate />
			<Box width={"100%"} position={"relative"} overflow={"visible"}>
				<Waves />
			</Box>
			<Box
				height={"200vh"}
				width={"100%"}
				zIndex={0}
				position={"relative"}
				ref={afterNameplateRef}
				className="afterNameplate"
			>
				<Interests />
				<SectionTitle
					text="Portfolio"
					background={true}
					sectionRef={afterNameplateRef}
				/>
				{renderBubbles()}
			</Box>
			<Box width={"100%"} ref={animateInElements}>
				<Portfolio timelineOnly={true} isObserved={true} />
				<Box
					height={"100vh"}
					position={"relative"}
					zIndex={0}
					ref={afterPortfolioRef}
				>
					<Box
						className="timelineEnd"
						height={"100%"}
						textAlign={"center"}
						left={"50%"}
						transform={"translate(-50%  , 0)"}
						position={"absolute"}
						backgroundImage={
							"linear-gradient(180deg, white, gray.800, gray.800)"
						}
						width={"6px"}
						backgroundColor={""}
					></Box>
					<SectionTitle
						text="Photography"
						background={true}
						sectionRef={afterPortfolioRef}
					/>
					{renderParticles()}
				</Box>
				<Photography />
				<ContactSection showOnScroll={true} />
			</Box>
		</div>
	);
};
