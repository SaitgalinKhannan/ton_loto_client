import {Box, Stack, Typography} from "@mui/material";
import {TonConnectButton, useTonWallet} from "@tonconnect/ui-react";
import {useTonContract} from "../hooks/useTonContract.ts";
import {useContext, useEffect} from "react";
import {Context} from "../provider/LotteryProvider.tsx";
import "../App.css"
import NavigationBar from "../components/NavigationBar.tsx";
import {Address} from "@ton/core";

export const tg = window.Telegram.WebApp;

export default function WalletConnectPage() {
    // @ts-ignore
    const wallet = useTonWallet();
    // @ts-ignore
    const {tonLotoContract, sender} = useTonContract();
    // @ts-ignore
    const {initData, isAdmin, connected, tonBalance, usdtBalance, notBalance} = useContext(Context)

    useEffect(() => {
        console.log(isAdmin)
    }, [isAdmin]);

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <NavigationBar text={"Wallet"} navigateTo={"/"}/>

            <Stack
                direction="column"
                padding="10px"
                spacing={1}
                justifyContent="center"
                alignContent="center"
                height="100%"
            >
                {
                    !wallet && <>
                        <Typography
                            fontSize={"20px"}
                            fontWeight={"bold"}
                            letterSpacing="0.3em"
                            fontFamily="monospace"
                            color={"white"}
                            alignSelf={"center"}
                        >
                            Подключите кошелек
                        </Typography>
                        <TonConnectButton style={{
                            alignSelf: "center"
                        }}/>
                    </>
                }

                {
                    wallet && <>
                        <Typography
                            fontSize={"16px"}
                            fontWeight={"bold"}
                            fontFamily="monospace"
                            color={"white"}
                            alignSelf={"center"}
                        >
                            Подключён кошелёк:
                        </Typography>
                        <Typography
                            fontSize={"12px"}
                            fontWeight={"bold"}
                            fontFamily="monospace"
                            color={"white"}
                            alignSelf={"center"}
                        >
                            {Address.parse(wallet.account.address).toString({urlSafe: true, bounceable: false})}
                        </Typography>
                        <TonConnectButton style={{
                            alignSelf: "center"
                        }}/>
                    </>
                }
            </Stack>
        </Box>
    );
}