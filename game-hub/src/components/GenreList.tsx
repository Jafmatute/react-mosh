import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {

    const {data: genres, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner/>;

    return (
        <List>
            {genres.map(genre =>
                <ListItem key={genre.id} padding="10px">
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectedGenre(genre)} variant="link"
                                fontSize="lg">{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}
export default GenreList;