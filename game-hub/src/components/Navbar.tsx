import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

const Navbar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="70px"/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}
export default Navbar;
