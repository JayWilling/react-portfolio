import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BrushIcon from "@mui/icons-material/Brush";

// Socials
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Sidebar.css";
import { SidebarItem } from "./SidebarItem";
import { Flex } from "@chakra-ui/react";

// Animating Sidebar Selection
// https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

interface hoverProps {
	imagePath: string;
}

const icons = {
	home: HomeIcon,
	homeInactive: HomeOutlinedIcon,
	portfolio: LibraryBooksIcon,
	portfolioInactive: LibraryBooksOutlinedIcon,
};

const Sidebar = (props: {
	updateHeader: (title: string) => void;
	isPinned: boolean;
	setIsPinned: (state: boolean) => void;
	sidebarExpanded: boolean;
	setSidebarExpanded: (state: boolean) => void;
}) => {
	const [isCollapsed, setIsCollapsed] = useState(props.sidebarExpanded);
	// const [isPinned, setIsPinned] = useState(true);

	const ImageHoverZoom = (props: hoverProps) => {
		return (
			<div className="profile">
				<div className="profile-img-container">
					<img
						className="profile-img"
						src={require("../../assets/images/ProfilePic.jpg")}
					/>
				</div>
				<div className="profile-text-container">
					<div className="profile-text">About Me</div>
				</div>
			</div>
		);
	};

	return (
		<div
			className={
				props.isPinned
					? "sidebar-container"
					: "sidebar-container-unpinned"
			}
		>
			<div
				className={
					props.sidebarExpanded ? "sidebar-expanded" : "sidebar"
				}
				onMouseEnter={() => setIsCollapsed(false)}
				onMouseLeave={() => {
					setIsCollapsed(true);
					props.setSidebarExpanded(false);
				}}
			>
				{/* <div className="burger"> */}
				<Flex
					width={"100%"}
					color={"white"}
					minHeight="var(--minHeaderHeight)"
					maxHeight="var(--maxHeaderHeight)"
				>
					<Flex className="socialsBtn">
						{" "}
						<button
							onClick={() => {
								props.setIsPinned(!props.isPinned);
							}}
							className="mainButton"
						>
							<i className="fa-solid fa-thumbtack"></i>
						</button>
					</Flex>
				</Flex>
				{/* </div> */}
				{/* <ImageHoverZoom imagePath="../../assets/images/ProfilePic.jpg" /> */}
				<div className="socials">
					<button className="mainButton">
						<i className="fa-brands fa-github"></i>
					</button>
					<button className="mainButton">
						<i className="fa-brands fa-instagram"></i>
					</button>
					<button className="mainButton">
						<i className="fa-brands fa-linkedin"></i>
					</button>
				</div>
				{/* <span className="signature">Jack Wiling</span> */}
				<SidebarItem
					title="Home"
					iconName="fa-home"
					linkLocation="/home"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/>
				{/* <SidebarItem
					title="About Me"
					iconName="fa-home"
					linkLocation="/aboutMe"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/> */}
				<SidebarItem
					title="Portfolio"
					iconName="fa-book"
					linkLocation="/portfolio"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/>
				{/* <SidebarItem
					title="Active"
					iconName="fa-person-running"
					linkLocation="/active"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/> */}
				<SidebarItem
					title="Photography"
					iconName="fa-camera"
					linkLocation="/photography"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/>
				{/* <SidebarItem
					title="Drawing"
					iconName="fa-pencil"
					linkLocation="/drawing"
					isActive
					isCollapsed={!props.sidebarExpanded && isCollapsed}
					updateHeader={props.updateHeader}
				/> */}
			</div>
		</div>
	);
};

export default Sidebar;
