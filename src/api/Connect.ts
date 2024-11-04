import axios, {AxiosResponse} from 'axios';
import {API_URL} from "../main.tsx";
import {Wallet} from "../model/Wallet.ts";
import {Transaction} from "../model/Transaction.ts";
import {Lottery} from "../model/Lottery.ts";

export async function connect(wallet: Wallet): Promise<boolean> {
    const response: AxiosResponse<boolean> = await axios.post(`${API_URL}/connect`, JSON.stringify(wallet), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export async function contractAddress(): Promise<string> {
    const response: AxiosResponse<string> = await axios.get(`${API_URL}/contractAddress`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export async function checkIsAdmin(id: number): Promise<boolean> {
    const response: AxiosResponse<boolean> = await axios.post(`${API_URL}/checkIsAdmin`, JSON.stringify(id), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export async function sendTransaction(transaction: Transaction): Promise<boolean> {
    const response: AxiosResponse<boolean> = await axios.post(`${API_URL}/transaction`, JSON.stringify(transaction), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export async function lotteryParticipantsCount(lottery: Lottery): Promise<number> {
    return axios
        .get<number>(`${API_URL}/counter/${lottery}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.data)
        .catch(e => {
            console.error(e);
            return 0;
        });
}

