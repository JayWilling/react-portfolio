import React from "react";
import { NavLink } from "react-router-dom";

import Icon from "@mui/material/Icon";

import * as MuiIcons from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BrushIcon from "@mui/icons-material/Brush";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { useEffect, useState } from "react";

interface SidebarItemProps {
	title: string;
	updateHeader: (title: string) => void;
	iconName: string;
	linkLocation: string;
	isActive: boolean;
	isCollapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
	const [iconType, setIconType] = useState(
		props.isActive ? "fa-solid" : "fa-regular"
	);
	const [title, setTitle] = useState(props.isCollapsed ? "" : props.title);

	if (props.isCollapsed) {
		return (
			<NavLink
				className={({ isActive }) => "sidebar-navitem-collapsed"}
				to={props.linkLocation}
			>
				<i
					className={
						iconType +
						" " +
						props.iconName +
						" sidebar-navitem-icon"
					}
				></i>
				<h3></h3>
			</NavLink>
		);
	} else {
		return (
			<NavLink
				className={({ isActive }) => {
					if (isActive) {
						props.updateHeader(title);
						return "sidebar-navitem-active";
					}
					return "sidebar-navitem-inactive";
				}}
				to={props.linkLocation}
			>
				<i
					className={
						iconType +
						" " +
						props.iconName +
						" sidebar-navitem-icon"
					}
				></i>
				<h3>{props.title}</h3>
			</NavLink>
		);
	}
};
