import useGames from "../hooks/useGames.ts";
import {Box, Button, SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import {Fragment} from "react";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (error) return <p className="text-danger">{error.message}</p>;

    return (
        <Box padding="10px">
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>)}
                {data?.pages.map((page, index) => <Fragment key={index}>
                    {page.results.map(game => <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>)}
                </Fragment>)}
            </SimpleGrid>
            {hasNextPage &&
                <Button marginY={5}
                        onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>}
        </Box>


    )
}
export default GameGrid;
