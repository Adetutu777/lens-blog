import { ethers } from "ethers";
// import {ContractAddress, rpcUrl} from "./constant"
// import ABI from "./abi.json"


// const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
// const signerOrProvider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = signerOrProvider.getSigner()

// export const getContract = (isSigner=false, contractAddress = ContractAddress, abi=ABI,)=>{
//     const newProvider = isSigner ? signer : provider;
//     return new ethers.Contract(contractAddress, ABI, newProvider);
// }

export const formatIpfdImg =(ipfs)=>{
    const CID = ipfs
     const getCid =  CID? CID.split('').slice(7).join('') : 'bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m'
   const url =  CID?.length === (66 || 53)? 'https://ipfs.io/ipfs/'+ getCid : !CID?.length ?  'https://ipfs.io/ipfs/bafkreigfkue3cdeve7pa23vvsmp2lcmj32flksdvlrllt44gpl25bqhp6m' : CID

   return url
}

// Captures 0x + 4 characters, then the last 4 characters.
const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateEthAddress = (address) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};


export const convertBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })
}