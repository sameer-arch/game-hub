import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
	rating: number;
}

export const Emoji = ({ rating }: Props) => {
	const emojieMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "25px" },
		4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
		5: { src: bullsEye, alt: "exemptional", boxSize: "35px" },
	};
	if (rating < 3) return null;
	return <Image {...emojieMap[rating]} marginTop={2}></Image>;
};
