import {
    Contract,
    ContractProvider,
    Sender,
    Address,
    Cell,
    contractAddress,
    beginCell,
    toNano, Builder
} from "@ton/core";

interface Add {
    $$type: string;
    amount: bigint;
}

export function storeAdd(src: Add) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2278832834, 32);
        b_0.storeUint(src.amount, 32);
    };
}

export default class TonLotoContract implements Contract {

    static createForDeploy(code: Cell, initialCounterValue: number): TonLotoContract {
        const data = beginCell()
            .storeUint(initialCounterValue, 64)
            .endCell();
        const workchain = 0; // deploy to workchain 0
        const address = contractAddress(workchain, {code, data});
        return new TonLotoContract(address, {code, data});
    }

    constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {
    }

    async sendDeploy(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: "0.01", // send 0.01 TON to contract for rent
            bounce: false
        });
    }

    async sendIncrement(provider: ContractProvider, via: Sender) {
        const messageBody = beginCell()
            .storeUint(1, 32) // op (op #1 = increment)
            .storeUint(0, 64) // query id
            .endCell();
        await provider.internal(via, {
            value: "0.002", // send 0.002 TON for gas
            body: messageBody
        });
    }

    async sendOneTenthTon(provider: ContractProvider, via: Sender) {
        let message: Add = {
            $$type: 'Add',
            amount: toNano("0.1"),
        }
        let body = beginCell().store(storeAdd(message)).endCell();
        await provider.internal(via, {
            value: toNano(0.1),
            bounce: true,
            body: body
        });
    }

    async sendOneTon(provider: ContractProvider, via: Sender) {
        let message: Add = {
            $$type: 'Add',
            amount: 1n,
        }
        let body = beginCell().store(storeAdd(message)).endCell();
        await provider.internal(via, {
            value: toNano(1.0),
            bounce: true,
            body: body
        });
    }

    async sendWithdrawSafe(provider: ContractProvider, via: Sender) {
        let message = "withdraw safe"
        let body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendWithdrawAll(provider: ContractProvider, via: Sender) {
        let message = "withdraw all"
        let body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendLoto(provider: ContractProvider, via: Sender) {
        let message = "loto"
        let body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendLotoOneTon(provider: ContractProvider, via: Sender) {
        let message = "lotoOneTon"
        let body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendClear(provider: ContractProvider, via: Sender) {
        let message = "clear"
        let body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.05),
            bounce: true,
            body: body
        });
    }

    async getBalance(provider: ContractProvider) {
        const {stack} = await provider.get("myy_balance", []);
        return stack.readString();
    }
}