import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Link to="/">
                <Image src={logo} boxSize="70px" objectFit="cover"/>
            </Link>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}
export default NavBar;
