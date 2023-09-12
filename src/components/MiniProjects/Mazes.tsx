import React, { useEffect, useRef, useState } from "react";

import "./Mazes.css";
import {
	Button,
	Text,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Tooltip,
} from "@chakra-ui/react";

// const height = 99;
// const width = 99;

let maze: number[][] = new Array(25);

let colStart = 0;
let rowStart = 0;
let finished = false;

interface CellProps {
	cellType: number;
	cellSideLength: string;
}

const Cell = (props: CellProps) => {
	function joinCssClasses(cellType: number) {
		if (cellType === 0) {
			return "mazeCell mazeCorridor";
		} else if (cellType === 2) {
			return "mazeCell player";
		} else if (cellType === 3) {
			return "mazeCell finishCell";
		}
		return "mazeCell mazeWall";
	}

	return (
		<div
			className={joinCssClasses(props.cellType)}
			style={{
				height: props.cellSideLength,
				width: props.cellSideLength,
			}}
		></div>
	);
};

export const Mazes = (props: { pageHeight: number }) => {
	const [height, setHeight] = useState(25);
	const [width, setWidth] = useState(25);
	const [playerX, setPlayerX] = useState(0);
	const [playerY, setPlayerY] = useState(0);
	const [newGame, setNewGame] = useState(true);
	const [newMaze, setNewMaze] = useState(new Array(height));

	// Finish position
	const [finishPosition, setFinishPosition] = useState<null | number[]>(null);

	const [showTooltip, setShowTooltip] = useState(false);
	const [sliderValue, setSliderValue] = useState(height);

	const mazeRef = useRef(null);

	const cellSideLength = props.pageHeight / height + "vh";

	const setDimensions = (val: number) => {
		setHeight(val);
		setWidth(val);
	};

	useEffect(() => {
		if (mazeRef.current) {
			const mazeComponent = mazeRef.current as HTMLDivElement;
			mazeComponent.addEventListener("keypress", (e) => movePlayer(e));
		}
	}, []);

	useEffect(() => {
		generateMaze();
	}, [height, width]);

	function movePlayer(event: KeyboardEvent) {
		console.log("ArrowPress");
		// switch (event.key) {
		// 	case "ArrowUp":
		// 		setPlayerY(playerY + 1);
		// 		break;
		// 	case "ArrowDown":
		// 		setPlayerY(playerY - 1);
		// 		break;
		// 	case "ArrowLeft":
		// 		setPlayerX(playerX - 1);
		// 		break;
		// 	case "ArrowRight":
		// 		setPlayerX(playerX + 1);
		// 		break;
		// }
		event.preventDefault();
	}

	async function generateMaze() {
		maze = new Array(height);
		// Initialize the maze array as empty
		for (let i = 0; i < height; i++) {
			const newRow: number[] = [];
			maze[i] = newRow;
			for (let j = 0; j < width; j++) {
				maze[i][j] = 1;
			}
		}

		// Define a random starting position if there is no finish position
		let row = 0;
		let col = 0;

		if (finishPosition != null) {
			row = finishPosition[0];
			col = finishPosition[1];
		} else {
			row = Math.floor(Math.random() * (height - 2)) + 1;
			col = Math.floor(Math.random() * (width - 2)) + 1;
		}

		rowStart = row;
		colStart = col;

		maze[row][col] = 2;

		await pathing(rowStart, colStart);

		setPlayerX(row);
		setPlayerY(col);
		// setNewMaze(maze);
	}

	async function pathing(rowPos: number, colPos: number) {
		const randDir: number[] = directions();
		let dirChecked = false;

		while (dirChecked === false) {
			dirChecked = true;
			for (let i = 0; i < 4; i++) {
				switch (randDir[i]) {
					case 1:
						// Check up
						if (
							rowPos + 2 > height - 2 ||
							maze[rowPos + 2][colPos] === 0
						) {
							continue;
						}
						if (maze[rowPos + 2][colPos] === 1) {
							maze[rowPos + 1][colPos] = 0;
							maze[rowPos + 2][colPos] = 0;
							await pathing(rowPos + 2, colPos);
							dirChecked = false;
							break;
						}
						break;
					case 2:
						// checks down
						if (rowPos - 2 <= 0 || maze[rowPos - 2][colPos] === 0) {
							// If there is a corridor through the next wall, do nothing and move on
							// to the next case/direction
							continue;
						}
						if (maze[rowPos - 2][colPos] === 1) {
							maze[rowPos - 1][colPos] = 0;
							maze[rowPos - 2][colPos] = 0;
							await pathing(rowPos - 2, colPos);
							dirChecked = false;
							break;
							// A new corridor is created and it's directions are inspected recursively
							// In the current recursion, we step out of the case and move on to the
							// next direction
						}
						break;
					case 3:
						// checks right
						if (
							colPos + 2 > height - 2 ||
							maze[rowPos][colPos + 2] === 0
						) {
							// If there is a corridor through the next wall, do nothing and move on
							// to the next case/direction
							continue;
						}
						if (maze[rowPos][colPos + 2] === 1) {
							maze[rowPos][colPos + 1] = 0;
							maze[rowPos][colPos + 2] = 0;
							await pathing(rowPos, colPos + 2);
							dirChecked = false;
							break;
							// A new corridor is created and it's directions are inspected recursively
							// In the current recursion, we step out of the case and move on to the
							// next direction
						}
						break;
					case 4:
						// checks left
						if (colPos - 2 <= 0 || maze[rowPos][colPos - 2] === 0) {
							// If there is a corridor through the next wall (open space), do nothing and move on
							// to the next case/direction
							continue;
						}
						if (maze[rowPos][colPos - 2] === 1) {
							maze[rowPos][colPos - 1] = 0;
							maze[rowPos][colPos - 2] = 0;
							await pathing(rowPos, colPos - 2);
							dirChecked = false;
							break;
							// A new corridor is created and it's directions are inspected recursively
							// In the current recursion, we step out of the case and move on to the
							// next direction
						}
						break;
					default:
				}
			}
			if (finished === false) {
				maze[rowPos][colPos] = 3;
				setFinishPosition([rowPos, colPos]);
				finished = true;
				// The maze has reached a dead-end and places the exit at this point
				// Sometimes this base case will initiate in the first recursion and
				// place the exit right next to the starting point.
				//
				// Sometimes it doesn't even place the exit. Why??
			}
		}
	}

	function directions() {
		const randDir: number[] = [];
		randDir[0] = 1;
		randDir[1] = 2;
		randDir[2] = 3;
		randDir[3] = 4;

		for (let i = 0; i < 4; i++) {
			const index = Math.floor(Math.random() * 4);
			const temp = randDir[i];
			randDir[i] = randDir[index];
			randDir[index] = temp;
		}
		return randDir;
	}

	return (
		<div
			style={{
				display: "flex",
				height: props.pageHeight + "vh",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div style={{ width: "100%" }}>
				<Button
					onClick={() => {
						finished = false;
						generateMaze();
					}}
				>
					Re-Generate
				</Button>
			</div>
			<div
				ref={mazeRef}
				// onKeyUp={(event) => movePlayer(event)}
				style={{
					display: "flex",
					height: props.pageHeight + "vh",
					aspectRatio: 1,
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "black",
				}}
			>
				{maze.map((row, rowIndex) => (
					<div
						key={rowIndex}
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${height}, ${cellSideLength})`,
							rowGap: "0px",
							columnGap: "0px",
						}}
					>
						{row.map((col: number, colIndex: number) => (
							<Cell
								key={colIndex}
								cellType={col}
								cellSideLength={cellSideLength}
							/>
						))}
					</div>
				))}
			</div>
			<div style={{ width: "100%" }}>
				<Slider
					aria-label="slider-ex-3"
					defaultValue={30}
					orientation="vertical"
					minH="32"
					onChange={(val) => setSliderValue(val)}
					onChangeEnd={(val) => setDimensions(val)}
					onMouseEnter={() => setShowTooltip(true)}
					onMouseLeave={() => setShowTooltip(false)}
					min={7}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<Tooltip
						hasArrow
						bg="teal.500"
						color="white"
						placement="top"
						isOpen={showTooltip}
						label={`${sliderValue}`}
					>
						<SliderThumb />
					</Tooltip>
				</Slider>
				<Text>Side Length</Text>
			</div>
		</div>
	);
};
