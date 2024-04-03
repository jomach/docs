"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8720],{99663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(74848),r=n(28453);const a={title:"v0.124 - New Tesla Integration",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},s=void 0,o={permalink:"/en/blog/2024/02/01/v0.124-new-tesla-api",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2024-02-01/v0.124-new-tesla-api.mdx",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024-02-01/v0.124-new-tesla-api.mdx",title:"v0.124 - New Tesla Integration",description:"Banner with overview of new features",date:"2024-02-01T00:00:00.000Z",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:5.14,hasTruncateMarker:!1,authors:[{name:"Michael Geers",title:"Core-Team, UI",url:"https://github.com/naltatis",imageURL:"https://github.com/naltatis.png",key:"naltatis"}],frontMatter:{title:"v0.124 - New Tesla Integration",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Feature Highlights 10/2023",permalink:"/en/blog/2023/10/05/feature-highlights-10-2023"}},l={authorsImageUrls:[void 0]},h=[{value:"New Tesla Integration",id:"new-tesla-integration",level:2},{value:"What does this mean for me?",id:"what-does-this-mean-for-me",level:3},{value:"Privacy &amp; Security",id:"privacy--security",level:3},{value:"Costs",id:"costs",level:3},{value:"Active Battery Control",id:"active-battery-control",level:2},{value:"Passive Control",id:"passive-control",level:3},{value:"Prevent discharge during fast charging",id:"prevent-discharge-during-fast-charging",level:3},{value:"Next step: Charging the battery with cheap grid power",id:"next-step-charging-the-battery-with-cheap-grid-power",level:3},{value:"Update: Migration to browser configuration",id:"update-migration-to-browser-configuration",level:2},{value:"Small improvements and bug fixes",id:"small-improvements-and-bug-fixes",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Banner with overview of new features",src:n(68608).A+"",width:"2000",height:"1000"})}),"\n",(0,i.jsx)(t.p,{children:"The days are getting longer and solar charging is starting to be fun again.\nA good time for a short update on the latest developments at evcc."}),"\n",(0,i.jsx)(t.h2,{id:"new-tesla-integration",children:"New Tesla Integration"}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.a,{href:"https://www.notateslaapp.com/news/1653/tesla-creates-official-apis-for-third-party-services-to-start-charging-for-usage",children:"October"})," Tesla introduced a new ",(0,i.jsx)(t.a,{href:"https://developer.tesla.com/docs/fleet-api",children:"official API"}),".\nIn addition, they announced that the old, ",(0,i.jsx)(t.a,{href:"https://www.teslaapi.io",children:"unofficial API"})," will be shut down at the beginning of 2024."]}),"\n",(0,i.jsx)(t.h3,{id:"what-does-this-mean-for-me",children:"What does this mean for me?"}),"\n",(0,i.jsxs)(t.p,{children:["To use the new API, you need to make two adjustments to the ",(0,i.jsx)(t.code,{children:"evcc.yaml"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"New template name:"})," Since the old API still works for some users today, we have decided to offer both implementations in parallel for the time being. Change the template name from ",(0,i.jsx)(t.code,{children:"tesla"})," to ",(0,i.jsx)(t.code,{children:"tesla-command"})," to use the new API."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Generate new tokens:"})," With the new API it is now possible to generate the required ",(0,i.jsx)(t.code,{children:"accessToken"})," and ",(0,i.jsx)(t.code,{children:"refreshToken"})," directly in the browser.\nFor this we have provided a small website at ",(0,i.jsx)(t.a,{href:"https://tesla.evcc.io",children:"tesla.evcc.io"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The configuration should then look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"vehicles:\n - name: mytesla\n   type: template\n   template: tesla-command # change `tesla` to `tesla-command`\n   accessToken: ... # generetad by tesla.evcc.io\n   refreshToken:  ... # generetad by tesla.evcc.io\n   ...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The tokens generated via ",(0,i.jsx)(t.a,{href:"https://tesla.evcc.io",children:"tesla.evcc.io"})," can ",(0,i.jsx)(t.strong,{children:"only be used with the official evcc builds"})," (stable & nightly).\nThe reason for this is that the tokens from Tesla's new Developer API are always bound to a 3rd-party app."]}),"\n",(0,i.jsxs)(t.p,{children:["You can of course still build evcc yourself.\nHowever, you will need your own Tesla Developer Account and have to generate the tokens yourself.\nMore details can be found in the corresponding ",(0,i.jsx)(t.a,{href:"https://github.com/evcc-io/evcc/pull/10802",children:"Pull Request"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"privacy--security",children:"Privacy & Security"}),"\n",(0,i.jsx)(t.p,{children:"As with the old API, the communication for data retrieval (charge level, status, ...) and control (wake up) runs directly between your local evcc instance and the Tesla infrastructure.\nOnly the token generation runs once via our website.\nTokens are not stored, but only displayed to you in the browser."}),"\n",(0,i.jsxs)(t.p,{children:["For an extended control of the vehicle (start and stop charging directly at the vehicle) an additional signed request to Tesla is required.\nToday this affects the users of a Tesla Wall Connector.\nSince we cannot and may not pack our private 3rd party app key into the evcc binary, we will probably provide our ",(0,i.jsx)(t.a,{href:"https://github.com/evcc-io/evcc/pull/11893",children:"own service"})," for this application, which signs these requests and forwards them to Tesla.\nBut more on that in a later release."]}),"\n",(0,i.jsx)(t.h3,{id:"costs",children:"Costs"}),"\n",(0,i.jsxs)(t.p,{children:["Tesla is currently offering the new API ",(0,i.jsx)(t.a,{href:"https://developer.tesla.com/docs/fleet-api#membership-tiers",children:"free of charge"}),".\nHowever, they have already announced that they will charge fees for using the API in the future.\nUnfortunately, we do not yet know how open source friendly this model will be."]}),"\n",(0,i.jsx)(t.p,{children:"It's quite possible that we won't be able to offer token generation for free in the future.\nWe may link it to the existing evcc sponsorship model.\nBut more on that when there is new information from Tesla."}),"\n",(0,i.jsx)(t.h2,{id:"active-battery-control",children:"Active Battery Control"}),"\n",(0,i.jsxs)(t.p,{children:["A big new feature that comes with the Christmas release is the active battery control.\nThis function is no longer marked as experimental.\nIn addition, some new supported battery inverters have been added in recent weeks.\nIn the documentation you can now see ",(0,i.jsx)(t.a,{href:"/docs/devices/meters#features",children:"if your inverter is supported"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"passive-control",children:"Passive Control"}),"\n",(0,i.jsxs)(t.p,{children:["Passive battery control has been available in evcc for some time now.\nHere evcc regulates the solar charging so that the house battery is not discharged unintentionally.\nLast year we introduced a ",(0,i.jsx)(t.a,{href:"/blog/2023/10/05/feature-highlights-10-2023#battery-settings",children:"configuration dialog"})," where you can set the priority between vehicle and house battery charging.\nThis model works very well for solar charging.\nevcc knows the current state of charge of the house battery and only regulates the charging power of the vehicle.\nHowever, this mechanism does not work for fast charging.\nAn active battery control is required for this."]}),"\n",(0,i.jsx)(t.h3,{id:"prevent-discharge-during-fast-charging",children:"Prevent discharge during fast charging"}),"\n",(0,i.jsxs)(t.p,{children:["By default, the house battery tries to cover the entire energy consumption of the house (including charging stations).\nDepending on the current electricity price or expected PV generation, however, it may be desirable to obtain the energy for ",(0,i.jsx)(t.strong,{children:"fast vehicle charging"})," directly from the grid and not from the house battery.\nThis way the collected solar energy remains in the house battery and can be used for the house consumption at night, for example."]}),"\n",(0,i.jsx)(t.p,{children:"This is our first use case for active battery control.\nIf your inverter supports this feature, a corresponding option will appear in the battery settings dialog."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Battery control: Prevent battery discharge when fast charging",src:n(12164).A+"",width:"569",height:"661"})}),"\n",(0,i.jsxs)(t.p,{children:["When this option is active, the house battery is put into a lock mode during fast charging.\nIn this time it is neither discharged nor charged.\nThis lock is also active during ",(0,i.jsx)(t.a,{href:"/blog/2023/10/05/feature-highlights-10-2023#charging-planner-visualization",children:"scheduled charging"})," and ",(0,i.jsx)(t.a,{href:"/blog/2023/10/05/feature-highlights-10-2023#smart-grid-charging",children:"smart grid charging"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"next-step-charging-the-battery-with-cheap-grid-power",children:"Next step: Charging the battery with cheap grid power"}),"\n",(0,i.jsx)(t.p,{children:"The next stage of development for active battery control is the possibility to charge the house battery with cheap grid power.\nThis is especially interesting for users of dynamic electricity tariffs on darker days.\nThe goal here is to fill the house battery with energy from the grid during low price phases and then use this energy in-house during high price phases.\nWe have already implemented the necessary hardware integrations.\nTherefore we expect this feature to be available in one of the next releases."}),"\n",(0,i.jsx)(t.h2,{id:"update-migration-to-browser-configuration",children:"Update: Migration to browser configuration"}),"\n",(0,i.jsxs)(t.p,{children:["evcc is a very flexible and powerful system for your own energy optimization.\nOur biggest challenge is still to combine this flexibility with an easy setup process.\nIn the last months we have made great progress in the area of configuration.\nOur goal is to enable a pure browser-based commissioning, without ",(0,i.jsx)(t.code,{children:"evcc.yaml"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'If you have activated the option "Show experimental UI features" in the settings dialog, you can see our current development progress under "\ud83e\uddea Device Configuration".\nCurrently you can add and edit vehicles, grid meters, PV and battery systems there.\nCharging stations and tariffs will follow in the next iteration.\nEven though this is still a "work in progress", we look forward to your feedback.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Device configuration",src:n(22853).A+"",width:"985",height:"750"})}),"\n",(0,i.jsx)(t.h2,{id:"small-improvements-and-bug-fixes",children:"Small improvements and bug fixes"}),"\n",(0,i.jsxs)(t.p,{children:["As always, this release also contains a number of smaller improvements and bug fixes.\nFor more details, have a look at the ",(0,i.jsx)(t.a,{href:"https://github.com/evcc-io/evcc/releases/tag/0.124.0",children:"Release Notes"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["All the best",(0,i.jsx)("br",{}),"\nyour evcc core team"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},12164:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/batterycontrol-en-10c503feedb2528ddab305e38a124ce4.webp"},22853:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/config-ui-f3c3d0ceada6701e4d56ebe6774e5022.webp"},68608:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/v0.124-banner-ed22d3f533af892387ab582183914039.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);