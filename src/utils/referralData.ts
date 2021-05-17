import ReferralsAbi from '../config/abi/referral.json'
import { getContract } from './web3'

// contract addresses
const RefferalContractAddress="0x8afdd969617Dcf55312afeA7f66064E1a4c9599c";
// constract
const RefferalContract = getContract(ReferralsAbi,RefferalContractAddress);

export const getReferralCount =async (address: string)=>{
    const response=  await RefferalContract.methods.referralsCount(address).call();
    return response;
}
export const gettotalReferralCommissions = async (address:string)=>{
    const response =  await RefferalContract.methods.totalReferralCommissions(address).call();
    return response;
}
export const getReferralData=async(account:string)=>{
    let redirect ='false';
    if(account){
    if(window.location.href.includes("?ref")){
      const refAddress = window.location.href.split("=")[1];
      const response=  await RefferalContract.methods.recordReferral(account,refAddress);      
      redirect = 'true';
    }
    }
    return redirect;

  }
