import * as web3 from '@solana/web3.js';

export function initializeKeypair() {
    if (!process.env.NEXT_PUBLIC_KEYPAIR) {
        console.log("generating keypair... 🗝️")
        const signer = web3.Keypair.generate()
        process.env.NEXT_PUBLIC_KEYPAIR = JSON.stringify(Array.from(signer.secretKey))
        console.log("generating .env file with keypair... 📁")
        return signer
    } else {
        console.log("loading keypair from .env file... 📁")
        return web3.Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.NEXT_PUBLIC_KEYPAIR??'') as number[]))
    }
}