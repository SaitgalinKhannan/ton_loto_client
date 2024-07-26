import {Box, Button, Stack, Typography} from "@mui/material";
import {useTonWallet} from "@tonconnect/ui-react";
import {useTonContract} from "../hooks/useTonContract.ts";
import {useContext, useEffect} from "react";
import {Context} from "../provider/LotteryProvider.tsx";
import "../App.css"

export const tg = window.Telegram.WebApp;

export function Main() {
    // @ts-ignore
    const wallet = useTonWallet();
    // @ts-ignore
    const {tonLotoContract, sender} = useTonContract();
    // @ts-ignore
    const {initData, isAdmin, connected} = useContext(Context)

    useEffect(() => {
        console.log(isAdmin)
    }, [isAdmin]);

    return (
        <Box
            width="100%"
            height="100%"
            flexDirection="column"
        >
            <Stack
                paddingX="10px"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    paddingY="30px"
                >
                    <Button
                        onClick={() => {
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="header-button-svg">
                            <path fill="white"
                                  d="M11.7 2.805a.75.75 0 0 1 .6 0A60.7 60.7 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 50 50 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0l-.343-.182A50 50 0 0 0 7.5 12.174v-.224a.36.36 0 0 1 .172-.311 55 55 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56 56 0 0 0-4.78 2.589 1.86 1.86 0 0 0-.859 1.228 50 50 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.7 60.7 0 0 1 11.7 2.805"></path>
                            <path fill="white"
                                  d="M13.06 15.474a48.5 48.5 0 0 1 7.666-3.283q.202 2.122.255 4.285a.75.75 0 0 1-.46.71 48 48 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 48 48 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71q.053-2.162.255-4.286A48 48 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11q.678.32 1.346.661a6.7 6.7 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a49 49 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0"></path>
                            <path fill="white"
                                  d="M4.462 19.462c.42-.419.753-.89 1-1.394q.68.32 1.347.661a6.7 6.7 0 0 1-1.286 1.794.75.75 0 1 1-1.06-1.06"></path>
                        </svg>
                    </Button>

                    <Typography fontSize={"26px"} color={"white"} alignSelf="center">{"LOTOTON"}</Typography>

                    <Button
                        onClick={() => {
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="header-button-svg">
                            <path fill="white"
                                  d="M2.273 5.625A4.48 4.48 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625"></path>
                            <path fill="white"
                                  d="M2.273 8.625A4.48 4.48 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625"></path>
                            <path fill="white"
                                  d="M5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9z"></path>
                        </svg>
                    </Button>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                >
                    <Typography fontSize={"16px"} color={"white"} alignSelf="center">TOTAL BALANCE</Typography>

                        <Typography fontSize={"16px"} color={"white"} alignSelf="center">{"LOTOTON"}</Typography>
                </Box>
            </Stack>

            {/*<Box
                sx={{
                    height: "90vh",
                    width: "100%"
                }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
            >
                <Button
                    onClick={() => {
                        tonLotoContract?.sendOneTenthTon(sender)
                    }}
                    sx={{background: "#32A6FBFF", borderRadius: "8px", margin: "10px"}}
                >
                    <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Участвовать в розыгрыше (0.1 TON)</Typography>
                </Button>

                <Button
                    onClick={() => {
                        tonLotoContract?.sendOneTon(sender)
                    }}
                    sx={{background: "#32A6FBFF", borderRadius: "8px", margin: "10px"}}
                >
                    <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Участвовать в розыгрыше (1 TON)</Typography>
                </Button>

                {
                    isAdmin && <>
                        <Button
                            onClick={() => {
                                tonLotoContract?.sendLoto(sender)
                            }}
                            sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                        >
                            <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Loto!</Typography>
                        </Button>

                        <Button
                            onClick={() => {
                                tonLotoContract?.sendLotoOneTon(sender)
                            }}
                            sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                        >
                            <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Loto 1 TON!</Typography>
                        </Button>

                        <Button
                            onClick={() => {
                                tonLotoContract?.sendWithdrawSafe(sender)
                            }}
                            sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                        >
                            <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Withdraw safe</Typography>
                        </Button>

                        <Button
                            onClick={() => {
                                tonLotoContract?.sendWithdrawAll(sender)
                            }}
                            sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                        >
                            <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Withdraw all</Typography>
                        </Button>

                        <Button
                            onClick={() => {
                                tonLotoContract?.sendClear(sender)
                            }}
                            sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                        >
                            <Typography fontSize={"24px"} color={"white"} sx={{":hover": {color: "#32A6FBFF"}}}>Clear</Typography>
                        </Button>
                    </>
                }
            </Box>

            {wallet ? <Box
                    position={"absolute"}
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    padding={"10px"}
                    boxSizing={"border-box"}
                    top={0}
                >
                    <TonConnectButton/>
                </Box> :
                <Box
                    position={"absolute"}
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    padding={"10px"}
                    boxSizing={"border-box"}
                    bottom={0}
                >
                    <TonConnectButton/>
                </Box>
            }*/}
        </Box>
    );
}