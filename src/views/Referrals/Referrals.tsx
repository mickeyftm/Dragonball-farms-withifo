import React , {useEffect, useState}from 'react'
import styled from 'styled-components'
import { Card, CardBody,Text,Heading,Button,Link  } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { provider } from 'web3-core'
import {getReferralCount,gettotalReferralCommissions} from '../../utils/referralData';






const Hero = styled.div`
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? '#27262c' : '#FFFFFF;')}; ;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const ReferralContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  flex-direction: row;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  width:100% !important;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const TotalReferral = styled(Card)`
background-position: top center;
display: inline;
justify-content: center;
flex-direction: column;
margin: auto;
margin-bottom: 16px;
padding-top: 0px;
height: 140px;
width:45% !important;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
transition: 0.3s;

${({ theme }) => theme.mediaQueries.lg} {
  background-position: left center, right center;
  height: 140px;
}
`
const TotalReferralCommision = styled(Card)`
background-position: top center;
display: inline;
justify-content: center;
flex-direction: column;
margin: auto;
margin-bottom: 16px;
padding-top: 0px;
height: 140px;
width:45% !important;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
transition: 0.3s;

${({ theme }) => theme.mediaQueries.lg} {
  background-position: left center, right center;
  height: 140px;
}
`
const ReferralLink = styled(Card)`
background-position: top center;
display: block;
justify-content: center;
flex-direction: column;
margin: auto;
margin-bottom: 16px;
padding-top: 0px;
height: 165px;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
transition: 0.3s;

${({ theme }) => theme.mediaQueries.lg} {
  background-position: left center, right center;
  height: 165px;
}
`
const ReferralWalletCard = styled(Card)`
align-items: center;
background-position: top center;
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
margin-bottom: 16px;
padding-top: 0px;
text-align: center;
height: 165px;

${({ theme }) => theme.mediaQueries.lg} {
  background-position: left center, right center;
  height: 165px;
}
`
const TextWrapper=styled(Text)`
margin-top:24px;
`
const Actions = styled.div`
  margin-top: 24px;
`
const Line = styled.hr`
color: white;
width: 100%;
`;

const ReferralText=styled(Text)`
padding:24px;
`

const ReferralTextRight=styled(Text)`
padding:24px;
float:left;
`
const ValueText=styled(Text)`
padding:10px 30px;
`

const LinkData=styled.div`
display:inline-block;
width:100%;
`

const CopyButton=styled(Button)`
float:right;
margin: 12px 21px;
`

const LinkReferral=styled(Link)`
margin: 2% 4%;
`


const Referrals: React.FC = () => {
  const TranslateString = useI18n();
  const { account, ethereum }: { account: any; ethereum: provider } = useWallet()
  const link=`https://mountaindefi.com/?ref=${account}`;
  const [commission, setCommission] = useState(0)
  const [referralsCount, setReferralsCount] = useState(0)

  
  useEffect(()=>{
    async function fetchMyAPI(){
      if(account){
        const refcommison = await gettotalReferralCommissions(account);
        const refcount = await getReferralCount(account);
        setCommission(refcommison);
        setReferralsCount(referralsCount);
        console.log('refcomision,refcount',refcommison,refcount);
      }
    }
    fetchMyAPI()
  },[account,referralsCount])

  const copiedText = ()=>{
    const selectedlink = link;
    navigator.clipboard.writeText(selectedlink);
  }

  return (
      <div>
      <Hero>
        <CardBody>
          <Heading as="h1" size="xl" mb="22px">
          MountainDeFi Finance Referral Program
          </Heading> 
          <Text>Share the referral link below to invite your friends and earn 1.5% of your friends earnings FOREVER!
          </Text>
        </CardBody>
      </Hero>
      <Page>
        {account ? (
             <>
            <ReferralContainer>
            <TotalReferral>
              <ReferralText>Total Referrals</ReferralText>
              <Line/>
              <ValueText>{referralsCount}</ValueText>
            </TotalReferral>
            
            <TotalReferralCommision>
              <ReferralText>Total Referral Commissions</ReferralText>
              <Line/>
              <ValueText>{commission}</ValueText>
            </TotalReferralCommision>
            
            </ReferralContainer>
            <ReferralLink>
              <LinkData>
              <ReferralTextRight>Your Referral Link</ReferralTextRight>
              <CopyButton onClick={copiedText}>Copy</CopyButton>
              </LinkData>

              <Line/>
              <LinkReferral href={link} >{link}</LinkReferral>
            </ReferralLink>
            </>
          ) : (
            <ReferralWalletCard>
            <Actions><UnlockButton fullWidth /></Actions>
            <TextWrapper>Unlock wallet to get your unique referral link</TextWrapper>             
            </ReferralWalletCard>
          )}
        
      </Page>
    </div>
  )
}

export default Referrals
