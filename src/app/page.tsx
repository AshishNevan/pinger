'use client'
import * as web3 from '@solana/web3.js';
import { initializeKeypair } from '../../lib/initalizeKeypair';
import { conditionalAirdrop } from '../../lib/conditionalAirdrop';
import { ping } from '../../lib/ping';


export default function Home() {
  async function performPing(){
    const keypair = initializeKeypair();
    console.log(`pubkey: ${keypair.publicKey.toString()}`)
    const conn = new web3.Connection(web3.clusterApiUrl('testnet'), 'confirmed');
    const pubkey = keypair.publicKey;
    await conditionalAirdrop(conn, pubkey);
    const transactionSignature = await ping(conn, keypair);
    alert(`pinged! 🏓 https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`);
    console.log(`pinged! 🏓 https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={async() => await performPing()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ping 🏓</button>
    </main>
  );
}
