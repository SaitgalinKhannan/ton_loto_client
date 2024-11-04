// Определяем интерфейс BigIntFraction
import {CountOfLotteryParticipants} from "./model/CountOfLotteryParticipants.ts";
import {lotteryParticipantsCount} from "./api/Connect.ts";
import {Lottery} from "./model/Lottery.ts";

export interface BigIntFraction {
    integerPart: string;
    fractionalPart: string;
}

export function splitBigIntFraction(value: bigint): BigIntFraction {
    const strValue = value.toString();
    let integerPart = "0";
    let fractionalPart = "0";

    if (strValue.length > 9) {
        integerPart = strValue.slice(0, strValue.length - 9);
        fractionalPart = strValue.slice(strValue.length - 9).slice(0, 5);
    } else if (strValue.length === 9) {
        fractionalPart = strValue.slice(0, 5);
    } else {
        fractionalPart = strValue.padStart(9, "0").slice(0, 5);
    }

    return {
        integerPart,
        fractionalPart
    };
}

export async function lotteryParticipants(): Promise<CountOfLotteryParticipants> {
    const [oneTenthTon, halfTon, oneTon] = await Promise.all([
        lotteryParticipantsCount(Lottery.ONE_TENTH_TON),
        lotteryParticipantsCount(Lottery.HALF_TON),
        lotteryParticipantsCount(Lottery.ONE_TON),
    ]);

    return {
        oneTenthTon: oneTenthTon,
        halfTon: halfTon,
        oneTon: oneTon,
    };
}
