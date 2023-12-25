import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./colorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
	return (
		<HStack padding={"10px"}>
			<Image src={logo} blockSize="60px"></Image>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
