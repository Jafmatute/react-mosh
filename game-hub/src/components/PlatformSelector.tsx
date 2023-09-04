import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map(p =>
                    <MenuItem key={p.id}
                              onClick={() => onSelectPlatform(p)}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}
export default PlatformSelector;
