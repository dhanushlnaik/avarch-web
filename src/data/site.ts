export const site = {
  name: "Avarch",
  legalName: "Avarch LLC",
  url: "https://avarch.org",
  tagline: "Building tools, media and education for the Ethereum ecosystem.",
  description:
    "Avarch is a blockchain software studio behind EtherWorld, EIPsInsight, BlobLens and EthShala — building open tools, publishing research and helping the next generation of Ethereum contributors get started.",
  email: "contact@etherworld.co",
  founded: 2017,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Founder", href: "/founder" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export type Social = { label: string; href: string; icon: string };

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/AvarchLLC", icon: "github" },
  { label: "X (Twitter)", href: "https://twitter.com/ether_world", icon: "x" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCnceAY-vAQsO8TgGAj5SGFA", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/etherworld/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/etherworld.co/", icon: "instagram" },
];

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: "Active" | "New" | "Archived";
  category: string;
  summary: string;
  description: string;
  href: string;
  internal?: string;
  logo: string;
  cover: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "etherworld",
    name: "EtherWorld",
    year: "2017",
    status: "Active",
    category: "Media & Research",
    summary: "Ethereum news, technical deep dives and explainer videos since 2017.",
    description:
      "Avarch's first project and one of the longest-running independent Ethereum publications. EtherWorld covers network upgrades, testnets, EIPs and research — written for builders and curious newcomers alike.",
    href: "https://etherworld.co",
    internal: "/projects/etherworld",
    logo: "/img/icons/etherworld_badge.png",
    cover: "/img/portfolio/etherworld.png",
    links: [
      { label: "X", href: "https://x.com/ether_world" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/etherworld/" },
    ],
  },
  {
    slug: "eipsinsight",
    name: "EIPsInsight",
    year: "2022",
    status: "Active",
    category: "Data & Analytics",
    summary: "The research and tracking hub for Ethereum Improvement Proposals.",
    description:
      "Dashboards, monthly reports and status tracking for every EIP, ERC and RIP — helping editors, authors and client teams see where proposals stand. Supported by the Ethereum Foundation ESP and Gitcoin Grants.",
    href: "https://eipsinsight.com",
    logo: "/img/icons/eipsinsight_icon.png",
    cover: "/img/portfolio/eipsinsight_logo.png",
    links: [
      { label: "X", href: "https://x.com/EIPsInsight" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/eipsinsight/" },
    ],
  },
  {
    slug: "bloblens",
    name: "BlobLens",
    year: "2026",
    status: "New",
    category: "Analytics",
    summary: "Specialised analytics for Ethereum blob space and rollup data.",
    description:
      "Since EIP-4844, rollups post their data in blobs. BlobLens tracks blob usage, fees and per-rollup activity so researchers and L2 teams can see how data availability is really being used.",
    href: "https://bloblens.com",
    logo: "/img/icons/bloblens_logo.png",
    cover: "/img/portfolio/bloblens.png",
    links: [
      { label: "X", href: "https://twitter.com/bloblens" },
      { label: "GitHub", href: "https://github.com/EIPsInsight/bloblens" },
    ],
  },
  {
    slug: "ethshala",
    name: "EthShala",
    year: "2026",
    status: "New",
    category: "Education",
    summary: "An education platform that makes Ethereum's core concepts approachable.",
    description:
      "Structured learning paths that take builders from first principles to protocol-level understanding — the next step in Avarch's long-running commitment to education.",
    href: "https://www.etherworld.co",
    logo: "/img/icons/ethshala_logo.png",
    cover: "/img/portfolio/ethshala_logo.png",
    links: [
      { label: "X", href: "https://x.com/ethsh_ala" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/ethshala/" },
    ],
  },
  {
    slug: "blockaction",
    name: "BlockAction",
    year: "2020",
    status: "Archived",
    category: "Explorer & Wallet",
    summary: "A browser-based wallet and explorer that supported the Beacon Chain multi-client testnet.",
    description:
      "Built with BitsBeat, BlockAction offered client-side wallet creation and real-time transaction tracking for Ethereum and Bitcoin, and served as an explorer for early Beacon Chain testnets.",
    href: "/projects/blockaction",
    internal: "/projects/blockaction",
    logo: "/img/general/blockaction1.png",
    cover: "/img/general/blockaction1.png",
    links: [],
  },
];

export const stats = [
  { value: "2017", label: "Founded" },
  { value: "50+", label: "Student contributors since 2020" },
  { value: "15+", label: "Academic & ecosystem partners" },
  { value: "5", label: "Products shipped" },
];

export const services = [
  {
    title: "Products & tooling",
    body: "Open-source dashboards, explorers and analytics that make Ethereum's data legible — EIPsInsight and BlobLens are used by editors, researchers and L2 teams.",
    icon: "code",
  },
  {
    title: "Media & research",
    body: "Technical articles, network-upgrade coverage and in-depth research reports on blockchain protocols, published through EtherWorld.",
    icon: "pen",
  },
  {
    title: "Education",
    body: "ELI5 videos, the PEEPanEIP series and EthShala learning paths that turn complex protocol changes into something anyone can follow.",
    icon: "book",
  },
  {
    title: "Developer pipeline",
    body: "Paid internships that give students real, on-the-job blockchain experience across development, writing and video production.",
    icon: "users",
  },
];

export const testimonials = [
  {
    name: "Dan Finlay",
    role: "Co-founder, MetaMask",
    avatar: "/img/avatars/danfinlay.jpg",
    quote: "Great job here. @ether_world explains @MobyMask faster than anyone yet and at a surprising depth.",
    href: "https://twitter.com/danfinlay/status/1603040177194401793",
  },
  {
    name: "Christine Kim",
    role: "VP Research, Galaxy",
    avatar: "/img/avatars/christine_dkim.jpg",
    quote: "This is a cool report and great graphics!",
    href: "https://twitter.com/christine_dkim/status/1560746596962385921",
  },
  {
    name: "Ben Edgington",
    role: "Author & Teku Lead",
    avatar: "/img/avatars/benjaminion_xyz.jpg",
    quote: "If you want to know what a shadow fork is, this article is good.",
    href: "https://twitter.com/benjaminion_xyz/status/1517778040855670785",
  },
  {
    name: "Marius van der Wijden",
    role: "Core Ethereum Developer",
    avatar: "/img/avatars/vdwijden.jpg",
    quote: "@YashKamalChatu1 wrote a really nice explainer on how to get some testnet ether on Kintsugi.",
    href: "https://twitter.com/vdwijden/status/1472875513622503427",
  },
  {
    name: "EF JavaScript Team",
    role: "@EFJavaScript",
    avatar: "/img/avatars/EFJavaScript.png",
    quote: "Some nice and detailed third-party (@ether_world 🙏❤️) Shandong instructions.",
    href: "https://twitter.com/EFJavaScript/status/1584829805144395776",
  },
  {
    name: "bloXroute Labs",
    role: "@bloXrouteLabs",
    avatar: "/img/avatars/bloXrouteLabs.png",
    quote: "Thanks to @ether_world for including us in the latest research overview.",
    href: "https://twitter.com/bloXrouteLabs/status/1513726500196990978",
  },
  {
    name: "Francesco Ciulla",
    role: "Developer Advocate",
    avatar: "/img/avatars/FrancescoCiull4.jpg",
    quote: "An Ethereum educational resource in the form of blogs and video guides.",
    href: "https://twitter.com/FrancescoCiull4/status/1536532388574011392",
  },
  {
    name: "WatBug",
    role: "@WatBug",
    avatar: "/img/avatars/WatBug.jpg",
    quote: "Neat! test results: faucet worked, and I successfully sent some ETH using the guide.",
    href: "https://twitter.com/WatBug/status/1473029714575036419",
  },
];

export const ecosystemPartners = [
  { name: "Devcon", href: "https://devcon.org/", logo: "/img/partners/devcon_new.png" },
  { name: "Giveth", href: "https://giveth.io/", logo: "/img/partners/giveth_new.png" },
  { name: "Mempool", href: "https://mempool.space/", logo: "/img/partners/mempool_new.png" },
  {
    name: "EDCON",
    href: "https://etherworld.co/2020/07/27/edcon-the-community-ethereum-development-conference-to-take-place-virtually-on-august-9-11/",
  },
];

export const academicPartners = [
  { name: "IIT Goa", place: "Goa" },
  { name: "NIT Hamirpur", place: "Himachal Pradesh" },
  { name: "IIIT Dharwad", place: "Karnataka" },
  { name: "NMAM Institute of Technology", place: "Karnataka", logo: "/img/partners/nmamit.png" },
  { name: "Heritage Institute of Technology", place: "Kolkata", logo: "/img/partners/heritage.png" },
  { name: "HETC", place: "Hooghly", logo: "/img/partners/hetc.png" },
  { name: "SRM University", place: "Haryana" },
  { name: "MDU Rohtak", place: "Haryana" },
  { name: "Sri Aurobindo College", place: "University of Delhi" },
  { name: "Sri Venkateswara College", place: "University of Delhi" },
  { name: "Sri Ramakrishna Engineering College", place: "Coimbatore" },
  { name: "Dr. B.C. Roy Engineering College", place: "Durgapur" },
  { name: "GITA", place: "Bhubaneswar" },
  { name: "BMIIT", place: "Gujarat" },
  { name: "LIT Mainpuri", place: "Uttar Pradesh" },
  { name: "Smith School of Business", place: "Queen's University" },
];

export const grants = [
  {
    name: "Ethereum Foundation — Ecosystem Support Program",
    period: "Q2 2025",
    logo: "/img/partners/ethereum.svg",
    body: "Funding to maintain EIPsInsight's data pipelines, improve charts and analytics, and keep the project open-source and community-driven.",
    tags: ["Significant", "Infrastructure"],
  },
  {
    name: "Gitcoin Grants Round 23",
    period: "GG23",
    logo: "/img/partners/gitcoin.svg",
    body: "Community contributions supporting continued open-source development and maintenance.",
    tags: ["Community"],
  },
  {
    name: "Gitcoin Grants Round 21 — Asia",
    period: "GG21",
    logo: "/img/partners/gitcoin.svg",
    body: "Support for ecosystem and community-driven initiatives across Asia.",
    tags: ["Community", "Asia"],
  },
  {
    name: "Gitcoin Grants Round 18 — Core",
    period: "GG18",
    logo: "/img/partners/gitcoin.svg",
    body: "Covering Web3 open-source software, community & education, and Ethereum infrastructure.",
    tags: ["Community", "Open source"],
  },
];

export const collaborations = [
  {
    title: "Blockchain in Agriculture",
    body: "A webinar and interview with Sabarish Nair of BirthVenue on how blockchain is being adopted in India's agriculture system.",
    image: "https://etherworld.co/content/images/size/w1000/2020/10/Agriculture-blockchain.jpg",
    href: "https://etherworld.co/2020/10/23/how-is-blockchain-going-to-change-agriculture-interview/",
    date: "Oct 2020",
  },
  {
    title: "EDCON 2020 — Community Conference",
    body: "Media partner for EDCON, the Community Ethereum Development Conference, streamed virtually on August 9–11, 2020.",
    image: "https://etherworld.co/content/images/size/w1000/2020/07/Screen-Shot-2020-07-27-at-10.11.18-AM-1.png",
    href: "https://etherworld.co/2020/07/27/edcon-the-community-ethereum-development-conference-to-take-place-virtually-on-august-9-11/",
    date: "Jul 2020",
  },
];

export const playlists = [
  { title: "Ethereum Explained", image: "/img/portfolio/Ethereum-video.jpeg", body: "Accounts, transactions, gas and smart contracts — the complete beginner's guide." },
  { title: "Ethereum Development", image: "/img/portfolio/Ethereum.jpeg", body: "Hands-on walkthroughs for developers building on Ethereum." },
  { title: "Web3 & Blockchain Basics", image: "/img/portfolio/Blockchain.jpeg", body: "The fundamentals of decentralised systems, without the jargon." },
  { title: "MetaMask", image: "/img/portfolio/Metamask.jpeg", body: "Set up, secure and get the most out of the most popular wallet." },
  { title: "Blockipedia", image: "/img/portfolio/Blockipedia.jpeg", body: "Bite-sized definitions of the terms you'll meet in the ecosystem." },
];

export const youtubePlaylists = "https://www.youtube.com/channel/UCnceAY-vAQsO8TgGAj5SGFA/playlists";
