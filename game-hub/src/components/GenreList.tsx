import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner/>;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} padding="10px">
                        <HStack>
                            <Image objectFit="cover" boxSize="32px" borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace="normal" textAlign="left"
                                    fontWeight={genre.id === selectedGenre?.id ? "Bold" : "Normal"}
                                    onClick={() => onSelectedGenre(genre)} variant="link"
                                    fontSize="lg">{genre.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}
export default GenreList;