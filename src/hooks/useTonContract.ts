import TonLotoContract from '../contract/TonLotoContract';
import {useTonClient} from './useTonClient';
import {useAsyncInitialize} from './useAsyncInitialize';
import {Address, OpenedContract} from '@ton/core';
import {useContext, useEffect} from "react";
import {useTonConnect} from "./useTonConnect.ts";
import {ContractAddress} from "../main.tsx";
import {Context} from "../provider/LotteryProvider.tsx";

export function useTonContract() {
    const client = useTonClient();
    const address = Address.parse(ContractAddress)
    const { sender } = useTonConnect();
    const lotteryContext = useContext(Context);

    const tonLotoContract = useAsyncInitialize(async () => {
        if (!client) return;
        const contract = new TonLotoContract(address);
        return client.open(contract) as OpenedContract<TonLotoContract>;
    }, [client, lotteryContext]);

    useEffect(() => {

    }, [tonLotoContract]);

    return {
        tonLotoContract,
        sender
    };
}
