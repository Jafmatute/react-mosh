import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import './App.css';
import GameHeading from "./components/GameHeading.tsx";
import {GameQuery} from "./store.ts";

function App() {

    const [gameQuery, setGameQuery] = useState({} as GameQuery);

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
              templateColumns={{
                  base: '1fr',
                  lg: '200px 1fr',
              }}
        >
            <GridItem area='nav'>
                <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
            </GridItem>
            <Show above="lg">
                <GridItem area='aside' paddingX={5}>
                    <GenreList selectedGenreId={gameQuery.genreId}
                               onSelectedGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
                </GridItem>
            </Show>

            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery}/>
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                              onSelectPlatform={(platform) => setGameQuery({
                                                  ...gameQuery,
                                                  platformId: platform.id
                                              })}/>
                        </Box>
                        <SortSelector sortOrder={gameQuery.sortOrder}
                                      onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App;