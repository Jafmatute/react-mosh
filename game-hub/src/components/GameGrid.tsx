import useGames from "../hooks/useGames.ts";
import {SimpleGrid} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
    const {data: games, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={3}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>)}
                {games.map(game => <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
export default GameGrid;
