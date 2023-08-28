import {HStack, Image} from "@chakra-ui/react";

import logo from '../assets/game-hub.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="70px"/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    )
}
export default Navbar;
