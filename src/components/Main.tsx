import {Box, Button, Typography} from "@mui/material";
import {useTonWallet} from "@tonconnect/ui-react";
import {useTonContract} from "../hooks/useTonContract.ts";
import {useContext, useEffect} from "react";
import {Context} from "../provider/LotteryProvider.tsx";

export const tg = window.Telegram.WebApp;

export function Main() {
    const wallet = useTonWallet();
    const {tonLotoContract, sender} = useTonContract();
    const {initData, isAdmin, connected} = useContext(Context)

    useEffect(() => {
        console.log(isAdmin)
    }, [isAdmin]);

    return (
        <Box
            width="100%"
            height="100%"
            flexDirection="row"
        >
            <Box
                display="flex"
                width="100%"
            >
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="space-between"
                    margin="10px 10px 10px 10px"
                >
                    <Button
                        onClick={() => {
                        }}
                        sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                    >
                    </Button>
                    <Typography fontSize={"32px"} color={"white"}>LOTOTON</Typography>
                    <Button
                        onClick={() => {
                        }}
                        sx={{background: "#32A6FBFF", borderRadius: "8px"}}
                    >
                    </Button>
                </Box>
            </Box>

            <Box
                display="flex"
                width="100%"
                flexDirection="row"
            >
                
            </Box>

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