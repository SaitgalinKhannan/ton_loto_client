import {Box, Button, Stack, Typography} from "@mui/material";
import {useContext} from "react";
import {Context} from "../provider/LotteryProvider.tsx";
import "../App.css"
import NavigationBar from "../components/NavigationBar.tsx";
import {useTonContract} from "../hooks/useTonContract.ts";

export default function HoldTonLottery() {
    const {isAdmin} = useContext(Context);
    const {tonLotteryContract, sender} = useTonContract();

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
        >
            <NavigationBar text={"Ton lottery"} navigateTo={"/ton"}/>

            <Stack
                direction="column"
                padding="10px"
                spacing={1}
                justifyContent="center"
                height="100%"
            >
                {tonLotteryContract && !isAdmin ? (
                    <>
                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Провести розыгрыш 0.1 TON
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendLottery(sender)
                                }}
                            >
                                Start
                            </Button>
                        </Stack>

                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Провести розыгрыш 0.5 TON
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendLotteryHalfTon(sender)
                                }}
                            >
                                Start
                            </Button>
                        </Stack>

                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Провести розыгрыш 1 TON
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendLotteryOneTon(sender)
                                }}
                            >
                                Start
                            </Button>
                        </Stack>

                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Хо-ба, но на контракте останется немного TON, чтобы он работал
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendWithdrawSafe(sender)
                                }}
                            >
                                Make a Ho-ba
                            </Button>
                        </Stack>

                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Хо-ба
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendWithdrawAll(sender)
                                }}
                            >
                                Make a Ho-ba
                            </Button>
                        </Stack>

                        <Stack
                            direction={"column"}
                            justifyContent="space-evenly"
                            padding="5px"
                            paddingBottom={"16px"}
                            borderRadius="10px"
                            spacing={"5px"}
                            sx={{
                                backgroundColor: "white",
                                border: "2px solid black"
                            }}
                        >
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em" fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                Очистить всё
                            </Typography>

                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendClear(sender)
                                }}
                            >
                                Clear
                            </Button>
                        </Stack>
                    </>
                ) : (
                    <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"} fontFamily="monospace"
                                align={"center"}>
                        Загрузка...
                    </Typography>
                )}

            </Stack>
        </Box>
    );
}