import { Container, Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import { LicenceCard } from "../components/LicenceCard";
import ReactFullpage from "@fullpage/react-fullpage";
import { Wallet } from "../components/Wallet";
import Portfolio from "./Portfolio";
import Photography from "./Photography";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

const Home = () => {
	return (
		<Flex
			flexDirection={"row"}
			width={"100%"}
			height={"100%"}
			overflow={"hidden"}
			position={"relative"}
		>
			<HStack
				overflow={"hidden"}
				width={"100%"}
				justifyContent={"center"}
			>
				<LicenceCard zIndex={0} isSelected={true} />
				{/* <div className="walletContainer">
					<Wallet />
				</div> */}
			</HStack>
		</Flex>
	);
};

export default Home;
