import {Platform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGoogle} from 'react-icons/bs';
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGoogle,
        android: FaAndroid,
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.500'/>)}
        </HStack>
    )
}
export default PlatformIconList;
