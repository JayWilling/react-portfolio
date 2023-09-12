import { Flex } from "@chakra-ui/react";
import P5 from "p5";
import React, { useEffect, useRef } from "react";
import { Star } from "./Star";
// import ubuntuFont from './../../../assets/fonts/Ubuntu-Regular.ttf';

export const NoteSystem = () => {
	// Basic p5.js setup
	const NoteSystemSketch = (p: P5) => {
		// let star: Planet;
		// let selectedPlanet: Planet;
		// const planets: Planet[] = new Array<Planet>();

		const notePressed: number[] = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		]; // Tracking which keys have been pressed
		const pitchFrequencies: number[] = [
			415.3, 440.0, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25,
			659.25, 698.46, 739.99, 783.99, 830.61, 880.0,
		];
		// let offset: P5.Vector;
		// let selected: boolean = false;

		// Globals for the sketch
		const stars: Star[] = Array(400);
		let booting: boolean;
		let rst: boolean;
		let rstMultiplier: number;
		let introText: P5.Graphics;
		let ubuntu: P5.Font;

		p.disableFriendlyErrors = true;

		// p.preload = () => {
		// 	ubuntu = p.loadFont("./../../../assets/fonts/Ubuntu-Regular.ttf");
		// };

		p.setup = () => {
			p.createCanvas(1280, 720, p.WEBGL);
			// introText = p.createGraphics(200, 200);
			// introText.background(255);
			booting = true;
			rst = false;
			// offset = p.createVector(0, 0);
			// planets = Planet[];
			// selectedPlanet = planets.get(0)

			// Set framerate to lower than the expected average
			p.frameRate(30);
			p.colorMode(p.HSB, 360, 100, 100);
			p.background(0);
			for (let i = 0; i < stars.length; i++) {
				stars[i] = new Star(p);
			}
		};

		const buildIntroText = () => {
			p.textSize(32);
			p.textAlign(p.CENTER);
			p.fill(255);
			// p.textFont(ubuntu);
			p.text("You are God, a musician", 0, 150);
			// p.text("Before you, there was nothing", 0, -100);
			// p.stroke(255);
			// p.line(-200, 0, 200, 0);
			// p.text("Create planets by selecting a point in space", 0, 50);
			// p.text("Select a planet by clicking it", 0, 100);
			// p.text("Use the top row of keys to create moons", 0, 150);
			// p.text("Use your arrow keys to alter parameters", 0, 200);
			// p.text("Press enter to traverse the stars", 0, 250);
			// p.text("Click to get started...", 0, 350);
		};

		p.draw = () => {
			p.background(0, 0, 0);

			p.stroke(0);
			p.fill(0, 100);
			// p.rect(0, 0, p.width, p.height);
			// p.textSize(32);
			// p.textAlign(p.CENTER, p.CENTER);
			// buildIntroText();
			// p.texture(introText);
			// p.lights();

			// Check if a planet has been selected & move to position
			// if (selectedPlanet != null) {
			//     Translate(p.width/2 - selectedPlanet.position.x, p.height/2 - selectedPlanet.position.y);
			// } else {
			//     Translate(p.width/2, p.height/2);
			// }

			// Displays instructions whilst booting
			if (!booting) {
				if (rst && rstMultiplier > 10) {
					rst = false;
					// Planet temp = planets.get(0);
					// planets.clear();
					// planets.add(temp);
				} else if (rst == true && rstMultiplier > 0) {
					rstMultiplier += 0.05;
				} else if (rstMultiplier > 0) {
					rstMultiplier -= 0.05;
				} else if (rstMultiplier < 0) {
					rstMultiplier = 0;
				}
			} else {
				buildIntroText();
				rstMultiplier = 10;
				// selectedPlanet.reset();
			}

			// Update and draw all stars in the background
			for (let i = 0; i < stars.length; i++) {
				if (rst || rstMultiplier > 0) {
					stars[i].update(rstMultiplier * 3);
				}
				stars[i].draw();
				// console.log("drawing");
			}

			// Update and draw the main solar system in the foreground
		};
	};

	// Typical react functional elements
	const noteSystemRef = useRef(null);

	useEffect(() => {
		if (noteSystemRef.current != null) {
			// const newSketch = new P5(NoteSystemSketch, noteSystemRef.current);
			new P5(NoteSystemSketch, noteSystemRef.current);
		}
	}, []);

	return (
		<Flex
			ref={noteSystemRef}
			justifyContent={"center"}
			alignItems={"center"}
			// width={"100%"}
			// height={"100%"}
		></Flex>
	);
};
