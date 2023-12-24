// import { Text } from "@chakra-ui/react";
// import useGenres from "../assets/hooks/useGenres";
// export const GenreList = () => {
// 	const { genres } = useGenres();
// 	return (
// 		<>
// 			<ul>
// 				{genres.map((genre) => (
// 					<li key={genre.id}>{genre.name}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// };
import {
	Button,
	HStack,
	Image,
	Link,
	List,
	ListItem,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../assets/hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <Spinner />;
	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY={"5px"}>
					<HStack>
						<Image
							boxSize={"32px"}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						></Image>{" "}
						<Button
							fontSize="md"
							variant={"link"}
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
