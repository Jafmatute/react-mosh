import useScreenShots from "../hooks/useScreenShots.ts";
import {Image, SimpleGrid, Spinner} from "@chakra-ui/react";

interface Props {
    gameId : number;
}

const GameScreenShot = ({gameId} : Props) => {
    const {data, isLoading, error} = useScreenShots(gameId);

    if (isLoading) return <Spinner/>;

    if (error) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
        </SimpleGrid>
    )
}
export default GameScreenShot
