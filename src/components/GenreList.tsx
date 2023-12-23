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
import useGenres from "../assets/hooks/useGenres";
const GenreList = () => {
	const { data } = useGenres();

	return (
		<ul>
			{data.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};

export default GenreList;
