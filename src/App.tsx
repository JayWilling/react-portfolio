import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Drawing from "./pages/Drawing";
import Photography from "./pages/Photography";
import Active from "./pages/Active";
import Sidebar from "./components/Sidebar/Sidebar";
import { JsxElement } from "typescript";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header/Header";
import { Flex } from "@chakra-ui/react";
import { ContactSection } from "./components/ContactSection";

interface PageProps {
	title: string;
	Page: () => JSX.Element;
	isPinned: boolean;
	sidebarExpanded: boolean;
	setSidebarExpanded: (state: boolean) => void;
}

const PageWithHeader = (props: PageProps) => {
	// const [isPinned, setIsPinned] = useState(true);
	// const [isSticky, setIsSticky] = useState(false);
	// const headerRef = useRef(null);

	// useEffect(() => {
	// 	window.addEventListener("scroll", scrollDown);

	// 	return () => {
	// 		window.removeEventListener("scroll", scrollDown);
	// 	};
	// }, []);

	// const scrollDown = () => {
	// 	if (headerRef.current) {
	// 		const header = headerRef.current as HTMLDivElement;
	// 		if (header.getBoundingClientRect()) {
	// 			setIsSticky(
	// 				header.getBoundingClientRect().top <= window.scrollY
	// 			);
	// 		}
	// 	}
	// };

	return (
		<>
			{/* <header className="app-header" ref={headerRef}>
				<div className={"sticky"}>
					<div className="sticky-inner burger">
						<button
							onClick={() =>
								props.setSidebarExpanded(!props.sidebarExpanded)
							}
							className="squareButton"
						>
							<i className="fa-solid fa-bars"></i>
						</button>
						{props.title}
					</div>
				</div>
			</header> */}
			<Header
				title={props.title}
				setSidebarExpanded={props.setSidebarExpanded}
				sidebarExpanded={props.sidebarExpanded}
				sidebarPinned={props.isPinned}
			/>
			<Flex direction={"row"}>
				{props.isPinned ? (
					<div className="sidebar-margin"></div>
				) : (
					<></>
				)}
				<div
					// className={
					// 	props.isPinned ? "pageContainer-sidebar" : "pageContainer"
					// }
					className="pageContainer"
				>
					<props.Page />
				</div>
			</Flex>
		</>
	);
};

function App() {
	const [title, setTitle] = useState("");
	const [isPinned, setIsPinned] = useState(true);
	const [sidebarExpanded, setSidebarExpanded] = useState(false);

	return (
		<div className="app">
			{/* <Header title={title} /> */}
			{/* <header className="app-header">{"Title"}</header> */}
			<Sidebar
				updateHeader={setTitle}
				isPinned={isPinned}
				setIsPinned={setIsPinned}
				sidebarExpanded={sidebarExpanded}
				setSidebarExpanded={setSidebarExpanded}
			/>
			<div className="container">
				<Routes>
					<Route
						path="/contact"
						element={
							<PageWithHeader
								title="Contact"
								Page={() => (
									<ContactSection showOnScroll={false} />
								)}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
						}
					/>
					<Route
						path="/"
						element={
							<PageWithHeader
								title="Landing Page"
								Page={LandingPage}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
							// <div
							// 	style={{
							// 		height: "100vh",
							// 		marginLeft: "5vw",
							// 		overflowY: "scroll",
							// 	}}
							// >
							// 	<LandingPage />
							// </div>
						}
					/>
					{/* <Route
						path="/aboutMe"
						element={
							<div style={{ height: "100vh", marginLeft: "5vw" }}>
								<Home />
							</div>
							// <PageWithHeader title="About Me" Page={Home} />
						}
					/> */}
					<Route
						path="/portfolio"
						element={
							<PageWithHeader
								title="Portfolio"
								Page={() => <Portfolio />}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
						}
					/>
					{/* <Route
						path="/drawing"
						element={
							<PageWithHeader
								title="Drawing"
								Page={Drawing}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
						}
					/> */}
					<Route
						path="/photography"
						element={
							<PageWithHeader
								title="Photography"
								Page={Photography}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
						}
					/>
					{/* <Route
						path="/active"
						element={
							<PageWithHeader
								title="Active"
								Page={Active}
								isPinned={isPinned}
								sidebarExpanded={sidebarExpanded}
								setSidebarExpanded={setSidebarExpanded}
							/>
						}
					/> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
