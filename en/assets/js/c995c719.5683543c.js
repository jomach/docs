"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9215],{48663:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=r(85893),s=r(11151);const c={sidebar_position:11},d="tariffs",o={id:"reference/configuration/tariffs",title:"tariffs",description:"Here you can specify your energy tariff and, if applicable, your feed-in remuneration. evcc uses these values for a rough Einsparungsberechnung displayed in the web UI.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/tariffs.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/tariffs",permalink:"/en/docs/reference/configuration/tariffs",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/tariffs.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"log, levels",permalink:"/en/docs/reference/configuration/log"},next:{title:"messaging",permalink:"/en/docs/reference/configuration/messaging"}},t={},l=[{value:"<code>currency</code>",id:"currency",level:2},{value:"<code>grid</code>",id:"grid",level:2},{value:"<code>type:</code> <strong><code>fixed</code></strong>",id:"type-fixed",level:3},{value:"<code>price</code>",id:"price",level:4},{value:"<code>type:</code> <strong><code>awattar</code></strong>",id:"type-awattar",level:3},{value:"<code>region</code>",id:"region",level:4},{value:"<code>type:</code> <strong><code>tibber</code></strong>",id:"type-tibber",level:3},{value:"<code>token</code>",id:"token",level:4},{value:"<code>homeid</code>",id:"homeid",level:4},{value:"<code>type:</code> <strong><code>octopusenergy</code></strong>",id:"type-octopusenergy",level:3},{value:"<code>tariff</code>",id:"tariff",level:4},{value:"<code>region</code>",id:"region-1",level:4},{value:"<code>type:</code> <strong><code>elering</code></strong>",id:"type-elering",level:3},{value:"<code>type:</code> <strong><code>energinet</code></strong>",id:"type-energinet",level:3},{value:"<code>type:</code> <strong><code>ENTSO-E</code></strong>",id:"type-entso-e",level:3},{value:"<code>feedin</code>",id:"feedin",level:2},{value:"<code>type:</code> <strong><code>fixed</code></strong>",id:"type-fixed-1",level:3},{value:"<code>price</code>",id:"price-1",level:4},{value:"<code>type:</code> <strong><code>octopusenergy</code></strong>",id:"type-octopusenergy-1",level:3},{value:"<code>tariff</code>",id:"tariff-1",level:4},{value:"<code>region</code>",id:"region-2",level:4},{value:"<code>co2</code>",id:"co2",level:2},{value:"<code>type:</code> <strong><code>gr\xfcnstromindex</code></strong>",id:"type-gr\xfcnstromindex",level:3},{value:"<code>type:</code> <strong><code>electricitymaps</code></strong>",id:"type-electricitymaps",level:3},{value:"<code>type:</code> <strong><code>ngeso</code></strong>",id:"type-ngeso",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tariffs",children:(0,i.jsx)(n.code,{children:"tariffs"})}),"\n",(0,i.jsxs)(n.p,{children:["Here you can specify your energy tariff and, if applicable, your feed-in remuneration. evcc uses these values for a rough ",(0,i.jsx)(n.a,{href:"/docs/faq#statistical-data",children:"Einsparungsberechnung"})," displayed in the web UI."]}),"\n",(0,i.jsx)(n.p,{children:'Furthermore, the planner uses these settings for price- or CO\u2082-optimised target charging. These settings are taken into account in the following order: "flexible grid tariff" before "CO\u2082 tariff" before "constant grid tariff".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Structure"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"tariffs:\n  grid:\n    type: ...\n  feedin:\n    type: ...\n  co2:\n    type: ...\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example: Constant Energy Price"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    # static grid price\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    # rate for feeding excess (pv) energy to the grid\n    type: fixed\n    price: 0.08 # [currency]/kWh\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example: Constant Energy Price with Time-dependent Tariffs"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    # static grid price with price zones)\n    type: fixed\n    price: 0.294 # EUR/kWh\n    zones:\n      - days: Mo-Fr\n        hours: 2-5\n        price: 0.2 # EUR/kWh\n      - days: Sa,So\n        price: 0.15 # EUR/kWh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["evcc supports the use of flexible electricity tariffs from ",(0,i.jsx)(n.a,{href:"https://www.awattar.de",children:"Awattar"}),", ",(0,i.jsx)(n.a,{href:"https://tibber.com",children:"Tibber"}),", or ",(0,i.jsx)(n.a,{href:"https://octopus.energy",children:"Octopus Energy"}),'. The configuration allows defining "cheap" prices (see ',(0,i.jsx)(n.code,{children:"smartCostLimit"})," in site), where charging from the grid with the maximum possible power is enabled even if there is not enough PV power available."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example: Flexible Energy Price"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tariffs:\n  grid:\n    # either\n    type: tibber\n    token: "476c477d8a039529478ebd690d35ddd80e3308ffc49b59c65b142321aee963a4" # access token\n    homeid: "cc83e83e-8cbf-4595-9bf7-c3cf192f7d9c" # optional if multiple homes associated with account\n\n    # or\n    type: awattar\n    region: de # optional, choose at for Austria\n    charges: 0 # optional, additional charges per kWh\n    tax: 0 # optional, additional tax (0.1 for 10%)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Below, the various parameters are explained:"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"currency",children:(0,i.jsx)(n.code,{children:"currency"})}),"\n",(0,i.jsx)(n.p,{children:"Currency in which energy prices are presented and calculated."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"EUR"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values:"})," ",(0,i.jsx)(n.code,{children:"EUR|CHF|USD|NOK|GBP|..."})," Currency codes according to ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_4217",children:"ISO 4217"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"grid",children:(0,i.jsx)(n.code,{children:"grid"})}),"\n",(0,i.jsxs)(n.p,{children:["The following tariff types (",(0,i.jsx)(n.code,{children:"type"}),") are supported:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values:"})," ",(0,i.jsx)(n.code,{children:"fixed|awattar|tibber|octopusenergy"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-fixed",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"fixed"})})]}),"\n",(0,i.jsx)(n.p,{children:"Fixed energy price for grid consumption."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: fixed\nprice: 0.297 # 0.297 [currency]/kWh\n"})}),"\n",(0,i.jsx)(n.h4,{id:"price",children:(0,i.jsx)(n.code,{children:"price"})}),"\n",(0,i.jsx)(n.p,{children:"The price in [currency]/kWh that you pay to your electricity supplier. Used for savings calculation."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"0.30"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-awattar",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"awattar"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://www.awattar.de",children:"Awattar"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: awattar\nregion: de # optional\ncharges: 0 # optional, additional charges per kWh\ntax: 0 # optional, additional tax (0.1 for 10%)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"region",children:(0,i.jsx)(n.code,{children:"region"})}),"\n",(0,i.jsx)(n.p,{children:"The region you are located in."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"de"})}),": Germany"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"at"})}),": Austria"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-tibber",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"tibber"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://www.tibber.com",children:"Tibber"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'type: tibber\ntoken: "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"\nhomeid: "12345678-90ab-cdef-1234-567890abcdef" # optional\n'})}),"\n",(0,i.jsx)(n.h4,{id:"token",children:(0,i.jsx)(n.code,{children:"token"})}),"\n",(0,i.jsx)(n.p,{children:"The access token of the provider."}),"\n",(0,i.jsx)(n.h4,{id:"homeid",children:(0,i.jsx)(n.code,{children:"homeid"})}),"\n",(0,i.jsx)(n.p,{children:"The ID of the location, if there are multiple locations associated with the account."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-octopusenergy",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"octopusenergy"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://octopus.energy",children:"Octopus Energy"})," in the United Kingdom."]}),"\n",(0,i.jsx)(n.admonition,{title:"Tariff and Regional Codes",type:"tip",children:(0,i.jsx)(n.p,{children:"Determining the tariff and regional codes is not covered in this documentation."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: octopusenergy\ntariff: AGILE-FLEX-22-11-25 # Tariff code\nregion: A # optional\n"})}),"\n",(0,i.jsx)(n.h4,{id:"tariff",children:(0,i.jsx)(n.code,{children:"tariff"})}),"\n",(0,i.jsx)(n.p,{children:"The tariff code for your energy contract."}),"\n",(0,i.jsx)(n.h4,{id:"region-1",children:(0,i.jsx)(n.code,{children:"region"})}),"\n",(0,i.jsxs)(n.p,{children:["The DNO region you are in: ",(0,i.jsx)(n.a,{href:"https://www.energy-stats.uk/dno-region-codes-explained/",children:"More information"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"A"})}),": Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"B"})}),": East Midlands"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"C"})}),": London"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"D"})}),": Merseyside and Northern Wales"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"E"})}),": West Midlands"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"F"})}),": North Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"G"})}),": North Western England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"H"})}),": Southern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"J"})}),": South Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"K"})}),": Southern Wales"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"L"})}),": South Western England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"M"})}),": Yorkshire"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"N"})}),": Southern Scotland"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"P"})}),": Northern Scotland"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-elering",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"elering"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://elering.ee",children:"Nordpool Estonia"})," in Estonia."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: elering # Nordpool\nregion: ee # or lt, lv, fi\ncharges: # optional, additional charges per kWh\ntax: # optional, additional tax (0.1 for 10%)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-energinet",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"energinet"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://energinat.dk",children:"Energinet"})," in Denmark."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: energinet # Energinet using the price in DKK\nregion: dk1 # or dk2\ncharges: # optional, additional charges per kWh\ntax: # optional, additional tax (0.1 for 10%)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-entso-e",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ENTSO-E"})})]}),"\n",(0,i.jsx)(n.p,{children:"European market date"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: entsoe # Entso-E european market data\ndomain: BZN|DE-LU # https://transparency.entsoe.eu/content/static_content/Static%20content/web%20api/Guide.html#_areas\nsecuritytoken: # api token\ncharges: # optional, additional charges per kWh\ntax: # optional, additional tax (0.1 for 10%)\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"feedin",children:(0,i.jsx)(n.code,{children:"feedin"})}),"\n",(0,i.jsx)(n.p,{children:"Feed-in tariffs. For older German installations (before 1.4.2012), enter the difference between the feed-in and self-use tariff here."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values:"})," ",(0,i.jsx)(n.code,{children:"fixed|octopusenergy"})]}),"\n",(0,i.jsxs)(n.h3,{id:"type-fixed-1",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"fixed"})})]}),"\n",(0,i.jsx)(n.p,{children:"Fixed feed-in remuneration."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: fixed\nprice: 0.12 # 0.12 [currency]/kWh\n"})}),"\n",(0,i.jsx)(n.h4,{id:"price-1",children:(0,i.jsx)(n.code,{children:"price"})}),"\n",(0,i.jsx)(n.p,{children:"The price in [currency]/kWh that you receive from the grid operator. Used for savings calculation."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"0.08"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"type-octopusenergy-1",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"octopusenergy"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The electricity provider ",(0,i.jsx)(n.a,{href:"https://octopus.energy",children:"Octopus Energy"})," in the United Kingdom."]}),"\n",(0,i.jsx)(n.admonition,{title:"Tariff and Regional Codes",type:"tip",children:(0,i.jsx)(n.p,{children:"Determining the tariff and regional codes is not covered in this documentation."})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: octopusenergy\ntariff: AGILE-FLEX-22-11-25 # Tariff code\nregion: A # optional\n"})}),"\n",(0,i.jsx)(n.h4,{id:"tariff-1",children:(0,i.jsx)(n.code,{children:"tariff"})}),"\n",(0,i.jsxs)(n.p,{children:["The tariff code for your energy contract. Make sure this is set to your ",(0,i.jsx)(n.strong,{children:"import tariff code"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"region-2",children:(0,i.jsx)(n.code,{children:"region"})}),"\n",(0,i.jsxs)(n.p,{children:["The DNO region you are in: ",(0,i.jsx)(n.a,{href:"https://www.energy-stats.uk/dno-region-codes-explained/",children:"More information"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Possible values"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"A"})}),": Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"B"})}),": East Midlands"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"C"})}),": London"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"D"})}),": Merseyside and Northern Wales"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"E"})}),": West Midlands"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"F"})}),": North Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"G"})}),": North Western England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"H"})}),": Southern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"J"})}),": South Eastern England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"K"})}),": Southern Wales"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"L"})}),": South Western England"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"M"})}),": Yorkshire"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"N"})}),": Southern Scotland"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"P"})}),": Northern Scotland"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"co2",children:(0,i.jsx)(n.code,{children:"co2"})}),"\n",(0,i.jsxs)(n.p,{children:["In addition to optimising the charging schedule based on costs, optimisation can also be done based on other criteria, such as CO",(0,i.jsx)("sub",{children:"2"})," emissions. This enables CO\u2082-optimised charging even when a variable tariff is not used. Optimisation can be done using the Gr\xfcnstromindex or ElectricityMaps."]}),"\n",(0,i.jsxs)(n.h3,{id:"type-gr\xfcnstromindex",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"gr\xfcnstromindex"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Uses ",(0,i.jsx)(n.a,{href:"https://gruenstromindex.de",children:"Gr\xfcnstromindex"})," forecast data.\nOnly available in Germany."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'co2:\n  type: gr\xfcnstromindex\n  zip: my post code # For post codes with leading zeros, enclose in ""\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"type-electricitymaps",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"electricitymaps"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Uses ",(0,i.jsx)(n.a,{href:"https://app.electricitymaps.com/",children:"Electricity Maps"})," forecast data.\n",(0,i.jsx)(n.a,{href:"https://api-portal.electricitymaps.com",children:"API access"}),' is required for this feature.\nThe "Free Personal Tier" is not sufficient, since it does not provide forecast data.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"co2:\n  type: electricitymaps\n  uri: <uri>\n  token: <token>\n  zone: DE\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"type-ngeso",children:[(0,i.jsx)(n.code,{children:"type:"})," ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ngeso"})})]}),"\n",(0,i.jsx)(n.p,{children:"National Grid Electricity System Operator Data (GB Only)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"co2:\n  type: ngeso # provides national data if both region and postcode are omitted - Choose ONE only!\n  region: 1 # optional, coarser than using a postcode - The region details are at https://carbon-intensity.github.io/api-definitions/#region-list\n  postcode: SW1 # optional - Outward postcode i.e. RG41 or SW1 or TF8. Do not include full postcode, outward postcode only\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>d});var i=r(67294);const s={},c=i.createContext(s);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);