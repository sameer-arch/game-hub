import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
	return (
		<HStack padding={"10px"}>
			<Image src={logo} blockSize="60px"></Image>
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
