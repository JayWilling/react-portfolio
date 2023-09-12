import React, { useEffect } from "react";

import "./LoadingIcon.css";

interface loadingProps {
	isLoaded: boolean;
}

export const LoadingIcon = (props: loadingProps) => {
	useEffect(() => {
		if (props.isLoaded) {
			//
		}
	}, []);

	return (
		<div className="lds-grid">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div className="expandCircle"></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
