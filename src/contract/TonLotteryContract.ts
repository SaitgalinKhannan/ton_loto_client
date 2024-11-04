import {Contract, ContractProvider, Sender, Address, Cell, beginCell, toNano} from "@ton/core";

export default class TonLotteryContract implements Contract {

    constructor(readonly address: Address, readonly init?: { code: Cell, data: Cell }) {
    }

    async sendOneTenthTon(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: toNano(0.1),
            bounce: true
        });
    }

    async sendHalfTon(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: toNano(0.5),
            bounce: true
        });
    }

    async sendOneTon(provider: ContractProvider, via: Sender) {
        await provider.internal(via, {
            value: toNano(1.0),
            bounce: true
        });
    }

    async sendWithdrawSafe(provider: ContractProvider, via: Sender) {
        const message = "withdraw safe"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendWithdrawAll(provider: ContractProvider, via: Sender) {
        const message = "withdraw all"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendLottery(provider: ContractProvider, via: Sender) {
        const message = "loto"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendLotteryHalfTon(provider: ContractProvider, via: Sender) {
        const message = "lotoHalfTon"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendLotteryOneTon(provider: ContractProvider, via: Sender) {
        const message = "lotoOneTon"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.01),
            bounce: true,
            body: body
        });
    }

    async sendClear(provider: ContractProvider, via: Sender) {
        const message = "clear"
        const body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();

        await provider.internal(via, {
            value: toNano(0.05),
            bounce: true,
            body: body
        });
    }

    async getBalance(provider: ContractProvider) {
        const {stack} = await provider.get("my_balance", []);
        return stack.readString();
    }
}