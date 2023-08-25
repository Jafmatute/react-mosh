import useGames from "../hooks/useGames.ts";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={10}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid;
