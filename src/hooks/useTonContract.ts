import TonLotteryContract from '../contract/TonLotteryContract.ts';
import {useTonClient} from './useTonClient';
import {useAsyncInitialize} from './useAsyncInitialize';
import {Address, OpenedContract} from '@ton/core';
import {useContext} from "react";
import {useTonConnect} from "./useTonConnect.ts";
import {ContractAddress} from "../main.tsx";
import {Context} from "../provider/LotteryProvider.tsx";

export function useTonContract() {
    const client = useTonClient();
    const address = Address.parse(ContractAddress)
    const { sender } = useTonConnect();
    const lotteryContext = useContext(Context);

    const tonLotteryContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = new TonLotteryContract(address);
        return client.open(contract) as OpenedContract<TonLotteryContract>;
    }, [client, lotteryContext]);

    return {
        tonLotteryContract: tonLotteryContract,
        sender: sender
    };
}
