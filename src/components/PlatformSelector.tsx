import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../assets/hooks/usePlatforms";
import { Platform } from "../assets/hooks/useGames";
interface Props {
	onSelectedPlatform: (Platform: Platform) => void;
	selectedPlatform: Platform | null;
}
export const PlatformSelector = ({
	onSelectedPlatform,
	selectedPlatform,
}: Props) => {
	const { data, error } = usePlatforms();
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platform"}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => {
							onSelectedPlatform(platform);
						}}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
