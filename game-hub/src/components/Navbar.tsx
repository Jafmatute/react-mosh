import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const Navbar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="70px" />
            <ColorModeSwitch />
        </HStack>
    )
}
export default Navbar;
