import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'COAL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x176F792CE67C7f21323DeeefC734cca960795780',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0xa6227a81cc18b35fedd709f7fc9d1f3e0acdadf8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'COAL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x176F792CE67C7f21323DeeefC734cca960795780',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0xa6227a81cc18b35fedd709f7fc9d1f3e0acdadf8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'COAL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC3F322118e9C06A123B388a685E5cA963D52E642',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0xa6227a81cc18b35fedd709f7fc9d1f3e0acdadf8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  

]

export default farms