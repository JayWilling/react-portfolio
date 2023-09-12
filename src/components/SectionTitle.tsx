import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Typewriter from "./TypeWriter";

interface SectionTitleProps {
	text: string;
	background: boolean;
	sectionRef: React.MutableRefObject<null>;
}

export const SectionTitle = (props: SectionTitleProps) => {
	const titleRef = useRef(null);

	useEffect(() => {
		if (titleRef.current) {
			// Do stuff in here
		}

		if (props.sectionRef.current && titleRef.current) {
			const portfolioGap = props.sectionRef.current as HTMLDivElement;
			const photographySectionObserver = new IntersectionObserver(
				sectionIntersectionCallback
			);
			photographySectionObserver.observe(portfolioGap);
			// const rect = portfolioGap.getBoundingClientRect();
		}
	}, []);

	const sectionIntersectionCallback = (
		entries: IntersectionObserverEntry[]
	) => {
		console.log("scrolled");
		entries.forEach((entry) => {
			if (entry.isIntersecting && titleRef.current) {
				// Take the ref to our photography header
				const header = titleRef.current as HTMLParagraphElement;
				// Define a new Typewriter and start it
				const typewriter = new Typewriter(header, {});
				typewriter.pauseFor(500).typeString(props.text).start();
			} else if (!entry.isIntersecting && titleRef.current) {
				// Clear the header text so we can retype it when we scroll back past
				const header = titleRef.current as HTMLParagraphElement;
				header.innerHTML = "";
			}
		});
	};

	return (
		<Box position={"sticky"} top={"50vh"} width={"100%"}>
			<Text
				textAlign={"center"}
				alignContent={"center"}
				color={"white"}
				fontSize={"32"}
				className="Nameplate"
				ref={titleRef}
			></Text>
		</Box>
	);
};
