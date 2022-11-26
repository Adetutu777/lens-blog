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