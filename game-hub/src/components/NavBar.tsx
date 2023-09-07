import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="70px"/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}
export default NavBar;
