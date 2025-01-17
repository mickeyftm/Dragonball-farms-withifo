import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'COAL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x347EA5b8f0c128E75CDFb802E14aaC1E6a8FC900',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0x5BfB4726A1f74EbA0C324ca2f1827795e2277c47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'COAL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe50A6480Ef04db8a6f63FE9069ebFC63A44282C1',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0x5BfB4726A1f74EbA0C324ca2f1827795e2277c47',
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
  /*  {
    pid: 13,
    risk: 5,
    lpSymbol: 'BTCB-WBNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, */
  /*  {
    pid: 4,
    risk: 5,
    lpSymbol: 'ETH-WBNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  */
  /*  {
    pid: 5,
    risk: 5,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, */
    {
      pid: 3,
      risk: 5,
      lpSymbol: 'CAKE-BNB LP',
      lpAddresses: {
        97: '',
        56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
     },
      tokenSymbol: 'CAKE',
      tokenAddresses: {
        97: '',
        56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      },
      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
    },
    {
      pid: 4,
      risk: 5,
      lpSymbol: 'BUSD-T-BNB LP',
      lpAddresses: {
        97: '',
        56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
     },
      tokenSymbol: 'BUSD-T',
      tokenAddresses: {
        97: '',
        56: '0x55d398326f99059fF775485246999027B3197955',
      },
      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
    },
    {
      pid: 5,
      risk: 5,
      lpSymbol: 'PANTHER-BUSD LP',
      lpAddresses: {
        97: '',
        56: '0x9287F5Ad55D7eE8EAE90B865718EB9A7cF3fb71A',
     },
      tokenSymbol: 'PANTHER',
      tokenAddresses: {
        97: '',
        56: '0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
      },
      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
    },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'COAL',
    lpAddresses: {
      97: '',
      56: '0x347EA5b8f0c128E75CDFb802E14aaC1E6a8FC900',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      97: '',
      56: '0x5BfB4726A1f74EbA0C324ca2f1827795e2277c47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x347EA5b8f0c128E75CDFb802E14aaC1E6a8FC900', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  // {
  //   pid: 14,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  //  {
  //    pid: 10,
  //    risk: 2,
  //    isTokenOnly: true,
  //    lpSymbol: 'ETH',
  //    lpAddresses: {
  //      97: '',
  //      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //    },
  //    tokenSymbol: 'ETH',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //    },
   //   quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //  },


  {
     pid: 9,
     risk: 4,
     isTokenOnly: true,
     lpSymbol: 'CAKE',
     lpAddresses: {
       97: '',
       56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // CAKE-BUSD LP
     },
     tokenSymbol: 'CAKE',
     tokenAddresses: {
       97: '',
       56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
     },
     quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
   },
   /* {
    pid: 10,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'BUSD-T',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // BUSD-BUSD-T address or**********
    },
    tokenSymbol: 'BUSD-T',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, */
  {
    pid: 11,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'PANTHER',
    lpAddresses: {
      97: '',
      56: '0x9287f5ad55d7ee8eae90b865718eb9a7cf3fb71a', // CAKE-BUSD LP
    },
    tokenSymbol: 'PANTHER',
    tokenAddresses: {
      97: '',
      56: '0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  
  

]

export default farms