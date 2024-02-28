import * as web3 from '@solana/web3.js'

export async function conditionalAirdrop(conn: web3.Connection, recipient: web3.PublicKey, amount: number = 0.01 * web3.LAMPORTS_PER_SOL) {
    const balance = await conn.getBalance(recipient)
    if ( balance === 0 ) {
        const transaction = await conn.requestAirdrop(recipient, amount)
        const transactionSignature = await conn.confirmTransaction(transaction, 'confirmed')
        return transactionSignature
    }
}