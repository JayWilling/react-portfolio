import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { LicenceCard } from "./LicenceCard";

// Potential Pallette:
//      https://coolors.co/282c34-343943-b0413e-e5beed-9593d9

// Wallet needs to handle all animations, removals and re-additions

// Click an item in the wallet:
//      Currently displayed card returns to position in the wallet
//      Card doppelganger in wallet is shown
//      Displayed card is removed/hidden
//      Displayed card swapped to the new selection
//      Displayed card returns to display position
//      Selected card doppelganger is moved out of the wallet into the displayed position
//      Displayed card is shown

const cards = [<LicenceCard zIndex={1} isSelected={false} key={"card0"} />];

const WalletCard = () => {
	return (
		// <div>
		// 	<div className="walletCard">
		// 		<LicenceCard isSelected={false} />
		// 	</div>{" "}
		// 	<div className="walletCard">
		// 		<LicenceCard isSelected={false} />
		// 	</div>{" "}
		// 	<div className="walletCard">
		// 		<LicenceCard isSelected={false} />
		// 	</div>
		// </div>

		<div>
			<div
				style={{
					height: "100px",
					overflow: "visible",
				}}
			>
				<LicenceCard zIndex={1} isSelected={false} />
				<div
					className="walletCard"
					style={{ zIndex: "1", top: "20%" }}
				/>
			</div>
			<div
				style={{
					height: "100px",
					overflow: "visible",
				}}
			>
				<LicenceCard zIndex={3} isSelected={false} />
				<div
					className="walletCard"
					style={{ zIndex: "4", top: "40%" }}
				/>
			</div>
			<div
				style={{
					height: "100px",
					overflow: "visible",
				}}
			>
				<LicenceCard zIndex={5} isSelected={false} />
				<div className="walletCard" style={{ zIndex: "6", top: "60%" }}>
					<span className="embossed">
						IF FOUND CONTACT
						<br />
						JWILLING123@GMAIL.COM
					</span>
				</div>
			</div>
		</div>
	);
};

export const Wallet = () => {
	return (
		<Box
			rounded={5}
			width={"container.lg"}
			overflow={"visible"}
			className={"wallet"}
		>
			{/* {cards} */}
			<WalletCard />
		</Box>
	);
};
