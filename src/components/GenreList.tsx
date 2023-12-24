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
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../assets/hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
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
						<Text fontSize="large">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
