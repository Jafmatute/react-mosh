import {HStack, Image, Text} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="70px" />
            <Text>Navbar</Text>
        </HStack>
    )
}
export default Navbar;
