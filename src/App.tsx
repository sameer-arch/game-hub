import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
function App() {
	return (
		<Grid
			templateAreas={{ base: `"nav" "dmain"`, lg: `"nav nav" "aside main"` }}
		>
			<GridItem area="nav">
				<Navbar></Navbar>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside">Aside</GridItem>
			</Show>
			<GridItem area="main">Main</GridItem>
		</Grid>
	);
}

export default App;
