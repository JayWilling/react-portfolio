import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
	title: string;
	sidebarExpanded: boolean;
	sidebarPinned: boolean;
	setSidebarExpanded: (state: boolean) => void;
}

export const Header = (props: HeaderProps) => {
	const getClassName = (isActive: boolean) => {
		let className = "topbar-navitem ";
		if (props.sidebarExpanded || props.sidebarPinned)
			return (className += "hidden ");
		isActive ? (className += "active ") : (className += "inactive ");
		return className;
	};

	const Topbar = () => {
		return (
			<>
				<NavLink
					className={({ isActive }) => {
						return getClassName(isActive);
					}}
					to={"/home"}
				>
					<i
						className={
							"fa-solid " + "fa-home" + " sidebar-navitem-icon"
						}
					></i>
					<h3>{"Home"}</h3>
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return getClassName(isActive);
					}}
					to={"/portfolio"}
				>
					<i
						className={
							"fa-solid " + "fa-book" + " sidebar-navitem-icon"
						}
					></i>
					<h3>{"Portfolio"}</h3>
				</NavLink>
				<NavLink
					className={({ isActive }) => {
						return getClassName(isActive);
					}}
					to={"/photography"}
				>
					<i
						className={
							"fa-solid " + "fa-camera" + " sidebar-navitem-icon"
						}
					></i>
					<h3>{"Photography"}</h3>
				</NavLink>
			</>
		);
	};

	return (
		<header className="app-header">
			<div className={"sticky"}>
				<Flex
					flexDirection={"row"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<div className="sticky-inner burger">
						<button
							onClick={() =>
								props.setSidebarExpanded(!props.sidebarExpanded)
							}
							className="squareButton"
						>
							<i className="fa-solid fa-bars"></i>
						</button>
					</div>
					{/* {props.sidebarExpanded || props.sidebarPinned ? (
						<>{props.title}</>
					) : (
						<Topbar />
                        )} */}
					<Topbar />
					<div className="sticky-inner burger">
						<NavLink to={"/contact"}>
							<button className="squareButton">
								<i className="fa-solid fa-paper-plane"></i>
							</button>
						</NavLink>
					</div>
				</Flex>
			</div>
		</header>
	);
};
