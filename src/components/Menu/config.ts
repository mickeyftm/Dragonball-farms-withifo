import { MenuEntry } from 'mountaindefi-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy COAL',
    icon: 'CoalIcon',
    href: 'https://exchange.mountaindefi.finance/#/swap?inputCurrency=0xA6227a81CC18b35fEdd709F7FC9d1f3e0acDAdf8',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.mountaindefi.org/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.mountaindefi.org/#/pool',
      },
    ],
  },
  {
    label: 'Mines',
    icon: 'MinesIcon',
    href: '/farms',
  },
  {
    label: 'Nodes',
    icon: 'NodesIcon',
    href: '/pools',
  },
  {
    label: "Referral",
    icon: "ReferralIcon",
    href: "/referral",
  },
  //  {
  //    label: 'Layer 1',
  //    icon: 'LayerIcon',
  //    href: '/layer/info',
  //  },
  //  {
  //    label: 'Super Mount Pool',
  //    icon: 'PoolIcon',
  //    href: '/supersaiyanpool',
  //  },
  //  {
  //    label: 'IFO',
  //    icon: 'IfoIcon',
  //    href: '/ifo',
  //  },
  //  {
  //    label: 'Nft',
  //    icon: 'NftIcon',
  //    href: '/Nft',
  //  },
  //  {
  //    label: 'Lottery',
  //    icon: 'TicketIcon',
  //    href: '/Lottery',
  //  },
  //  {
  //    label: 'Gaming App',
  //    icon: 'NftIcon',
  //    href: '/Gaming',
  //  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://mountaindefi.org/Roadmap',
  },
  {
    label: 'Coal Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Price Graph',
        href: 'https://dex.guru/token/0x7bc6b82abd69248943c156dc7e96d6a58f8c5daf-bsc',
      },
      {
        label: 'DApp Radar',
        href: 'https://dappradar.com/binance-smart-chain/defi/mountaindefi-finance',
      },
    ],
  },

  {
    label: "BSC Scan",
    icon: "BSCscanIcon",
    items: [
      {
        label: 'COAL',
        href: "https://bscscan.com/address/0x7bc6b82abd69248943c156dc7e96d6a58f8c5daf",
      },
    ],
  },
  //  {
  //    label: 'SENZU Info',
  //    icon: 'InfoIcon',
  //    items: [
  //      {
  //        label: 'BSC Scan',
  //        href: 'https://bscscan.com/token/0xA6227a81CC18b35fEdd709F7FC9d1f3e0acDAdf8',
  //      },
  //     {
  //        label: 'Price Graph',
  //        href: 'https://dex.guru/token/0xcBA1813Ede683333020cedea7C3b63FbaC28e78e-bsc',
  //      },
      //  {
      //    label: 'DApp Radar',
      //    href: 'https://dappradar.com/binance-smart-chain/defi/Mountain DeFi-finance',
      //  },
  //    ],
  //  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MountainDefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.mountaindefi.com',
      },
      {
        label: 'Blog',
        href: 'https://mountaindefi.medium.com/',
      },
      {
        label: 'Whitepaper',
        href: 'https://mountaindefi.org/Whitepaper.pdf',
      },
    ],
  },

  //  {
  //    label: 'coal Audit',
  //    icon: 'AuditIcon',
  //    href: 'https://mountaindefi.org/coal.pdf',
  //  },
  //  {
  //    label: 'SENZU Audit',
  //    icon: 'AuditIcon',
  //    href: 'https://Mountain DeFifinance.org/Senzu.pdf',
  //  },
]

export default config
