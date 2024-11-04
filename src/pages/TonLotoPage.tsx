import {Box, Button, Stack, Typography} from "@mui/material";
import {useTonWallet} from "@tonconnect/ui-react";
import {useTonContract} from "../hooks/useTonContract.ts";
import {useContext, useEffect, useState} from "react";
import {Context} from "../provider/LotteryProvider.tsx";
import "../App.css"
import NavigationBar from "../components/NavigationBar.tsx";
import {lotteryParticipants} from "../utils.ts";
import {CountOfLotteryParticipants} from "../model/CountOfLotteryParticipants.ts";
import {useNavigate} from "react-router-dom";

export default function TonLottery() {
    // @ts-ignore
    const wallet = useTonWallet();
    const {tonLotteryContract, sender} = useTonContract();
    // @ts-ignore
    const {initData, isAdmin, connected, tonBalance, usdtBalance, notBalance} = useContext(Context)
    const [lotteryParticipantsCount, setLotteryParticipantsCount] = useState<CountOfLotteryParticipants>({
        oneTenthTon: 0,
        halfTon: 0,
        oneTon: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        lotteryParticipants()
            .then(r => setLotteryParticipantsCount(r))
            .catch(e => console.log(e));
    }, []);

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
                {tonLotteryContract ? (
                    <>
                        <Typography fontSize={"24px"} fontWeight={"bold"} letterSpacing="0.3em"
                                    fontFamily="monospace" color={"white"} alignSelf={"center"}>
                            ЛОТОРЕИ
                        </Typography>

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
                            <Typography fontSize={"20px"} fontWeight={"bold"} fontFamily="monospace" color={"primary"}
                                        alignSelf={"center"}>
                                0.1 TON
                            </Typography>
                            <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"} fontFamily="monospace">
                                Всего участников: {lotteryParticipantsCount.oneTenthTon} / 100
                            </Typography>
                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => tonLotteryContract?.sendOneTenthTon(sender)}
                            >
                                Участвовать
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
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em"
                                        fontFamily="monospace"
                                        color={"primary"} alignSelf={"center"}>
                                0.5 TON
                            </Typography>
                            <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"} fontFamily="monospace">
                                Всего участников: {lotteryParticipantsCount.halfTon} / 100
                            </Typography>
                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendHalfTon(sender)
                                }}
                            >
                                Участвовать
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
                            <Typography fontSize={"20px"} fontWeight={"bold"} letterSpacing="0.3em"
                                        fontFamily="monospace" color={"primary"} alignSelf={"center"}>
                                1 TON
                            </Typography>
                            <Typography fontSize={"20px"} fontWeight={"bold"} color={"#9fc0fd"} fontFamily="monospace">
                                Всего участников: {lotteryParticipantsCount.oneTon} / 100
                            </Typography>
                            <Button
                                sx={{
                                    width: "90%",
                                    alignSelf: "center",
                                    border: "2px solid #9fc0fd",
                                    borderRadius: "10px"
                                }}
                                onClick={() => {
                                    tonLotteryContract?.sendOneTon(sender)
                                }}
                            >
                                Участвовать
                            </Button>
                        </Stack>

                        {!isAdmin && (
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
                                    Проведение розыгрыша
                                </Typography>

                                <Button
                                    sx={{
                                        width: "90%",
                                        alignSelf: "center",
                                        border: "2px solid #9fc0fd",
                                        borderRadius: "10px"
                                    }}
                                    onClick={() => {
                                        navigate("/ton/admin")
                                    }}
                                >
                                    Перейти
                                </Button>
                            </Stack>
                        )}
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