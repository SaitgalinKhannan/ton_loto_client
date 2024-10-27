import {Box, Button, Stack, Typography} from "@mui/material";
import {useTonWallet} from "@tonconnect/ui-react";
import {useTonContract} from "../hooks/useTonContract.ts";
import {useContext, useEffect} from "react";
import {Context} from "../provider/LotteryProvider.tsx";
import "../App.css"
import NavigationBar from "../components/NavigationBar.tsx";

export const tg = window.Telegram.WebApp;

export default function TonLoto() {
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
            <NavigationBar text={"TON"} navigateTo={"/"}/>

            <Stack
                direction="column"
                padding="10px"
                spacing={1}
                justifyContent="center"
                height="100%"
            >
                <Typography fontSize={"24px"} fontWeight={"bold"} letterSpacing="0.3em"
                            fontFamily="monospace" color={"white"} alignSelf={"center"}>
                    ЛОТОРЕИ
                </Typography>

                <Stack
                    direction={"column"}
                    justifyContent="space-evenly"
                    padding="5px"
                    borderRadius="10px"
                    spacing={"5px"}
                    sx={{
                        backgroundColor: "white",
                        border: "2px solid black"
                    }}
                >
                    <Typography fontSize={"20px"} fontWeight={"bold"} fontFamily="monospace" color={"primary"}
                                alignSelf={"center"}>
                        0.5 TON
                    </Typography>
                    <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"}
                                fontFamily="monospace">
                        Всего участников: 10 / 100
                    </Typography>
                    <Button
                        sx={{
                            width: "90%",
                            alignSelf: "center",
                            border: "2px solid #9fc0fd",
                            borderRadius: "10px"
                        }}
                        onClick={() => tonLotoContract?.sendOneTenthTon(sender)}
                    >
                        Участвовать
                    </Button>
                </Stack>

                <Stack
                    direction={"column"}
                    justifyContent="space-evenly"
                    padding="5px"
                    borderRadius="10px"
                    spacing={"5px"}
                    sx={{
                        backgroundColor: "white",
                        border: "2px solid black"
                    }}
                >
                    <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em"
                                fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                        1 TON
                    </Typography>
                    <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"}
                                fontFamily="monospace">
                        Всего участников: 10 / 100
                    </Typography>
                    <Button
                        sx={{
                            width: "90%",
                            alignSelf: "center",
                            border: "2px solid #9fc0fd",
                            borderRadius: "10px"
                        }}
                    >
                        Участвовать
                    </Button>
                </Stack>

                <Stack
                    direction={"column"}
                    justifyContent="space-evenly"
                    padding="5px"
                    borderRadius="10px"
                    spacing={"5px"}
                    sx={{
                        backgroundColor: "white",
                        border: "2px solid black"
                    }}
                >
                    <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em"
                                fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                        5 TON
                    </Typography>
                    <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"}
                                fontFamily="monospace">
                        Всего участников: 10 / 100
                    </Typography>
                    <Button
                        sx={{
                            width: "90%",
                            alignSelf: "center",
                            border: "2px solid #9fc0fd",
                            borderRadius: "10px"
                        }}
                    >
                        Участвовать
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}