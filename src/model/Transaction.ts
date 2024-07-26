export interface Transaction {
    id: number,
    userId: number,
    userWalletAddress: string,
    contractAddress: string,
    amount: number
}