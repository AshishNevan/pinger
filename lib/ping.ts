import * as web3 from '@solana/web3.js'

const PROGRAM_ID = new web3.PublicKey('ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa')
const PROGRAM_DATA_PUBKEY = new web3.PublicKey('Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod')

export async function ping(conn: web3.Connection, payer: web3.Keypair) {
    const transaction = new web3.Transaction()
    const instruction = new web3.TransactionInstruction(
        {
            keys: [{ pubkey: PROGRAM_DATA_PUBKEY, isSigner: false, isWritable: true }],
            programId: PROGRAM_ID,
        })
    transaction.add(instruction)
    const transactionSignature = await web3.sendAndConfirmTransaction(conn, transaction, [payer])
    return transactionSignature
}