import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'mountaindefi-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png');
    background-position: left center;
    background-repeat: no-repeat;
    height: 260px;
    padding-top: 0;
  }
`


const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Cards2 = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  z-index: 5;

  & > div {
    grid-column: span 12 / auto;
    width: 100%;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  
  return (
    <Page>
      <Hero>
        <Text>{TranslateString(5780, 'Yield farming focused on growth and rewarding investors with')}</Text>
        <Text>{TranslateString(5780, 'Anti-Whale, Anti-bot, and Auto-Liquidity mechanisms.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
            
      </div>
    </Page>
  )
}

export default Home
