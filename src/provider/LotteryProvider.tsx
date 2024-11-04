import {createContext, ReactElement, ReactNode, useEffect, useMemo, useState} from "react";
import {InitData} from "../model/InitData.ts";
import {tg} from "../pages/Main.tsx";
import {checkIsAdmin, connect} from "../api/Connect.ts";
import {Wallet} from "../model/Wallet.ts";
import {useTonAddress, useTonWallet} from "@tonconnect/ui-react";
import {Address} from "@ton/core";
import {useTonClient} from "../hooks/useTonClient.ts";

interface LotteryContext {
    initData: InitData | null;
    isAdmin: boolean;
    connected: boolean;
    tonBalance: bigint;
    setTonBalance(balance: bigint): void;
    usdtBalance: number;
    notBalance: number;
}

const LotteryContext: LotteryContext = {
    initData: null,
    isAdmin: false,
    connected: false,
    tonBalance: BigInt(0),
    setTonBalance(): void {
    },
    usdtBalance: 0.0,
    notBalance: 0.0
}

export const Context = createContext<LotteryContext>(LotteryContext);

export default function LotteryProvider({children}: Readonly<{
    children: ReactNode
}>): ReactElement<string> {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
    const wallet = useTonWallet();
    const [initData, setInitData] = useState<InitData | null>(null)
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [connected, setConnected] = useState<boolean>(false);
    const [tonBalance, setTonBalance] = useState<bigint>(BigInt(0));
    // @ts-ignore
    const [usdtBalance, setUsdtBalance] = useState<number>(0.0);
    // @ts-ignore
    const [notBalance, setNotBalance] = useState<number>(0.0);
    const tonClient = useTonClient();

    useEffect(() => {
        tg.expand()

        if (tg.initData !== "") {
            const queryParams = new URLSearchParams(tg.initData);
            const queryData: InitData = {
                query_id: queryParams.get('query_id') || '',
                user: JSON.parse(queryParams.get('user') || '{}'),
                auth_date: parseInt(queryParams.get('auth_date') || '0', 10),
                hash: queryParams.get('hash') || ''
            };
            console.log(queryData)
            setInitData(queryData)
            tg.enableClosingConfirmation()
            //tg.requestWriteAccess()
        }
        tg.ready()
    }, []);

    useEffect(() => {
        if (initData) {
            checkIsAdmin(initData.user.id).then(r => {
                setIsAdmin(r);
            }).catch(e => {
                console.error(e);
            });
        }
        console.log(initData)
    }, [initData]);

    useEffect(() => {
        if (tonClient && wallet?.account.address) {
            tonClient.getContractState(Address.parse(wallet?.account.address))
                .then(r => setTonBalance(r.balance))
                .catch(e => console.error(e));
        }
    }, [tonClient, wallet]);

    useEffect(() => {
        console.log(userFriendlyAddress)
        console.log(rawAddress)
        console.log(wallet)

        if (wallet && initData) {
            const userWallet: Wallet = {
                userId: initData.user.id,
                address: userFriendlyAddress
            }

            connect(userWallet).then(r => {
                if (r) {
                    setConnected(true)
                    console.log("Successfully logged in");
                }
            }).catch(e => {
                console.log(e)
            });
        }
    }, [rawAddress, userFriendlyAddress, wallet, initData])

    const obj: LotteryContext = useMemo(() => ({
        initData: initData,
        isAdmin: isAdmin,
        connected: connected,
        tonBalance: tonBalance,
        setTonBalance: setTonBalance,
        usdtBalance: usdtBalance,
        notBalance: notBalance
    }), [initData, isAdmin, connected, tonBalance, usdtBalance, notBalance]);

    return (
        <Context.Provider value={obj}>
            {children}
        </Context.Provider>
    );
}