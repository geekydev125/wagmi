import { Web3Button } from "@web3modal/react";
import { chainId, useAccount, useNetwork, useSwitchNetwork } from "wagmi";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from "react";

const HomePage = () => {
    const { address } = useAccount();
    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    const [chainName, setChainName] = useState("");
    useEffect(() => {
        switch (chain?.id) {
            case 1:
                setChainName("Ethereum");
                return;
            case 137:
                setChainName("Polygon");
                return;
            case 42161:
                setChainName("Arbitrum");
                return;
            case 421613:
                setChainName("Arb Görli");
                return;
            default:
                setChainName("Unsupported");
                return;
        }
    }, [chain?.id])

    return(
        <>
            <Web3Button />
            <p>{address}</p>
            <p>{chain?.id}</p>
            <Menu>
                <MenuButton as={Button} colorScheme='black' borderWidth={"1px"} borderColor={"white"} marginRight={"10px"}>
                    <p>{chainName}</p>
                </MenuButton>
                <MenuList bgColor={"black"} minWidth={"-webkit-fit-content"}>
                    <MenuItem onClick={() => switchNetwork?.(137)} _focus={{ bg: "black" }} _active={{ bg: "black" }} >
                        <p>Polygon</p>
                        <img src={"assets/images/polygon.png"} alt="" className="image" width={20} height={20} style={{ marginLeft: "10px" }} />
                    </MenuItem>
                    <MenuItem onClick={() => switchNetwork?.(42161)} _focus={{ bg: "black" }} _active={{ bg: "black" }} >
                        <p>Arbitrum</p>
                        <img src={"assets/images/arb.png"} alt="" className="image" width={20} height={20} style={{ marginLeft: "10px" }} />
                    </MenuItem>
                    <MenuItem onClick={() => switchNetwork?.(421613)} _focus={{ bg: "black" }} _active={{ bg: "black" }} >
                        <p>Arb Görli</p>
                        <img src={"assets/images/arbtest.png"} alt="" className="image" width={20} height={20} style={{ marginLeft: "10px" }} />
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default HomePage;