import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";

const PlatformSelector = () => {

    const {data: platform, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Platforms
            </MenuButton>
            <MenuList>
                {platform.map(p => <MenuItem>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}
export default PlatformSelector;
