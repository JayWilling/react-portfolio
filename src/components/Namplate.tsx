import React, { useEffect, useRef } from "react";
import Typewriter from "./TypeWriter";
import Home from "../pages/Home";
import { Waves } from "./Waves";

export const Nameplate = () => {
	const textElementRef = useRef(null);
	const aboutMeContainerRef = useRef(null);
	const cursorRef = useRef(null);
	const upperOverlayRef = useRef(null);
	const aboutMeOverlayRef = useRef(null);
	const aboutMeBlockRef = useRef(null);

	function changeWidthCallback() {
		if (
			textElementRef.current != null &&
			aboutMeContainerRef.current != null
		) {
			const nameplate = textElementRef.current as HTMLParagraphElement;
			const aboutMe = aboutMeContainerRef.current as HTMLDivElement;
			console.log(nameplate.clientWidth);
			// aboutMe.style.width = nameplate.clientWidth + 8 + "px";
			aboutMe.style.width = "100%";
			console.log(aboutMe.clientWidth);
		}
	}

	function shrinkCursor() {
		if (cursorRef.current != null) {
			const cursor = cursorRef.current as HTMLDivElement;
			cursor.style.overflow = "hidden";
			cursor.style.animation = "";
			cursor.style.transition = "all 2s ease";
			cursor.style.height = "8px";
		}
	}

	function showUnderline() {
		if (
			cursorRef.current != null &&
			upperOverlayRef.current != null &&
			aboutMeOverlayRef.current != null &&
			aboutMeBlockRef.current != null
		) {
			const cursor = cursorRef.current as HTMLDivElement;
			cursor.style.overflow = "hidden";
			cursor.style.animation = "";
			cursor.style.transition = "all 0.6s ease";
			cursor.style.height = "0px";

			const upperOverlay = upperOverlayRef.current as HTMLDivElement;
			upperOverlay.style.transition = "all 3s ease";
			upperOverlay.style.overflow = "hidden";
			upperOverlay.style.left = "-100%";

			const aboutMeBlock = aboutMeBlockRef.current as HTMLDivElement;
			aboutMeBlock.style.display = "block";
		}
	}

	function showAboutMe() {
		if (aboutMeOverlayRef.current != null) {
			const aboutMeOverlay = aboutMeOverlayRef.current as HTMLDivElement;
			aboutMeOverlay.style.transition = "all 3s ease";
			aboutMeOverlay.style.top = "+100%";
		}
	}

	useEffect(() => {
		if (textElementRef.current && aboutMeContainerRef.current) {
			const typewriter = new Typewriter(textElementRef.current, {});

			typewriter
				.pauseFor(1000)
				.typeString("Jack Willing")
				.addFunction(changeWidthCallback)
				.pauseFor(1000)
				.addFunction(shrinkCursor)
				.pauseFor(2000)
				.addFunction(showUnderline)
				.pauseFor(3600)
				.addFunction(showAboutMe)
				.pauseFor(3000)
				.start();
		}
	}, []);

	return (
		<>
			<div className="TextContainer">
				<p ref={textElementRef} className="Nameplate"></p>
				<div ref={cursorRef} className="cursor"></div>
			</div>
			<div ref={aboutMeContainerRef} className="AboutmeContainer">
				<div ref={aboutMeBlockRef} className="AboutmeBlock">
					<Home />
					{/* <img src={imageTest}></img>
					<p></p> */}
				</div>
				<div ref={aboutMeOverlayRef} className="AboutmeOverlay"></div>
				<div ref={upperOverlayRef} className="UpperOverlay"></div>
			</div>
		</>
	);
};
