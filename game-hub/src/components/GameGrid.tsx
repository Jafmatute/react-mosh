import useGames from "../hooks/useGames.ts";
import {Box, Button, SimpleGrid, Spinner} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Fragment} from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {
    
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (error) return <p className="text-danger">{error.message}</p>;

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <Box padding="10px">
            <InfiniteScroll next={() => fetchNextPage()} hasMore={!!hasNextPage} loader={<Spinner/>}
                            dataLength={fetchedGamesCount}>
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
            </InfiniteScroll>
            {hasNextPage &&
                <Button marginY={5}
                        onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>}
        </Box>


    )
}
export default GameGrid;
