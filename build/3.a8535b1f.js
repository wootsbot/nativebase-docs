(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1034:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(742),r=n(0),c=n.n(r),o=n(851),l=n(767),s=n(765);function i({label:e,to:t,docsPluginId:n,...r}){var i;const u=Object(l.useActiveVersion)(n),{preferredVersion:m}=Object(s.useDocsPreferredVersion)(n),d=Object(l.useLatestVersion)(n),f=null!==(i=null!=u?u:m)&&void 0!==i?i:d,b=null!=e?e:f.label,h=null!=t?t:(e=>e.docs.find(t=>t.id===e.mainDocId))(f).path;return c.a.createElement(o.a,Object(a.a)({},r,{label:b,to:h}))}},1035:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(742),r=n(0),c=n.n(r),o=n(851),l=n(767),s=n(765);const i=e=>e.docs.find(t=>t.id===e.mainDocId);function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:n,dropdownItemsBefore:r,dropdownItemsAfter:u,...m}){var d,f;const b=Object(l.useActiveDocContext)(t),h=Object(l.useVersions)(t),v=Object(l.useLatestVersion)(t),{preferredVersion:g,savePreferredVersionName:p}=Object(s.useDocsPreferredVersion)(t);const E=null!==(d=null!==(f=b.activeVersion)&&void 0!==f?f:g)&&void 0!==d?d:v,O=e?"Versions":E.label,j=e?void 0:i(E).path;return c.a.createElement(o.a,Object(a.a)({},m,{mobile:e,label:O,to:j,items:function(){const e=h.map(e=>{const t=(null==b?void 0:b.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==b?void 0:b.activeVersion),onClick:()=>{p(e.name)}}}),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:n?()=>!1:void 0}))}},1036:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(742),r=n(0),c=n.n(r),o=n(851),l=n(767),s=n(743),i=n(765);function u({docId:e,activeSidebarClassName:t,label:n,docsPluginId:r,...u}){var m;const{activeVersion:d,activeDoc:f}=Object(l.useActiveDocContext)(r),{preferredVersion:b}=Object(i.useDocsPreferredVersion)(r),h=Object(l.useLatestVersion)(r),v=null!==(m=null!=d?d:b)&&void 0!==m?m:h,g=v.docs.find(t=>t.id===e);if(!g)throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${v.name}.\nAvailable docIds=\n- ${v.docs.join("\n- ")}`);return c.a.createElement(o.a,Object(a.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:f&&f.sidebar===g.sidebar}),label:null!=n?n:g.id,to:g.path}))}},745:function(e,t,n){"use strict";var a=n(0),r=n(746);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},746:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},790:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},791:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[n,c]=Object(a.useState)(t);return Object(a.useEffect)(()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){c(t())}},[]),n}},792:function(e,t,n){"use strict";var a=n(742),r=n(0),c=n.n(r);t.a=({width:e=30,height:t=30,className:n,...r})=>c.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:n,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},r),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},796:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(743),o=n(67),l=n.n(o);var s=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:e=>{if(13!==e.keyCode)return;document.activeElement.blur();const t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}},"Skip to main content"))},i=n(765),u=n(745),m=n(68),d=n.n(m);var f=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(u.a)(),{announcementBar:n}=Object(i.useThemeConfig)();if(!n)return null;const{content:a,backgroundColor:o,textColor:l,isCloseable:s}=n;return!a||s&&e?null:r.a.createElement("div",{className:d.a.announcementBar,style:{backgroundColor:o,color:l},role:"banner"},r.a.createElement("div",{className:Object(c.a)(d.a.announcementBarContent,{[d.a.announcementBarCloseable]:s}),dangerouslySetInnerHTML:{__html:a}}),s?r.a.createElement("button",{type:"button",className:d.a.announcementBarClose,onClick:t,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(817),h=n(776),v=n(8);const g="light",p="dark",E=e=>e===p?p:g,O=()=>v.a.canUseDOM?E(document.documentElement.getAttribute("data-theme")):g,j=e=>{try{localStorage.setItem("theme",E(e))}catch(t){console.error(t)}};var k=()=>{const{colorMode:{disableSwitch:e,respectPrefersColorScheme:t}}=Object(i.useThemeConfig)(),[n,r]=Object(a.useState)(O),c=Object(a.useCallback)(()=>{r(g),j(g)},[]),o=Object(a.useCallback)(()=>{r(p),j(p)},[]);return Object(a.useEffect)(()=>{document.documentElement.setAttribute("data-theme",E(n))},[n]),Object(a.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&r(E(e))}catch(t){console.error(t)}},[r]),Object(a.useEffect)(()=>{e&&!t||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{r(e?p:g)})},[]),{isDarkTheme:n===p,setLightTheme:c,setDarkTheme:o}},w=n(820),y=n(752);function C(e){var t=e.children,n=e.isDarkTheme,r=Object(y.useColorMode)(),c=r.colorMode,o=r.toggleColorMode;return Object(a.useEffect)((function(){n&&"dark"!==c?o():n||"light"===c||o()}),[n,c]),t}var S=function(e){var t=k(),n=t.isDarkTheme,c=t.setLightTheme,o=t.setDarkTheme;return Object(a.useEffect)((function(){})),r.a.createElement(w.a.Provider,{value:{isDarkTheme:n,setLightTheme:c,setDarkTheme:o}},r.a.createElement(y.NativeBaseProvider,null,r.a.createElement(C,{isDarkTheme:n},e.children)))};var N=()=>{const[e,t]=Object(a.useState)({}),n=Object(a.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}},[]);return Object(a.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith("docusaurus.tab.")){e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t(t=>({...t,[e]:a})),n(e,a)}}};var L=()=>{const{announcementBar:e}=Object(i.useThemeConfig)(),[t,n]=Object(a.useState)(!0),r=Object(a.useCallback)(()=>{localStorage.setItem("docusaurus.announcement.dismiss","true"),n(!0)},[]);return Object(a.useEffect)(()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;localStorage.setItem("docusaurus.announcement.id",t),r&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(r||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&n(!1)},[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},D=n(746);var _=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=N(),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}=L();return r.a.createElement(D.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:c}},e.children)};function A({children:e}){return r.a.createElement(S,null,r.a.createElement(_,null,r.a.createElement(i.DocsPreferredVersionContextProvider,null,e)))}var I=n(742),P=n(24),T=n(22),B=n(778);function M({locale:e,version:t,tag:n}){const a=e;return r.a.createElement(P.a,null,a&&r.a.createElement("meta",{name:"docsearch:language",content:a}),t&&r.a.createElement("meta",{name:"docsearch:version",content:t}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}function V(e){const{siteConfig:t,i18n:{currentLocale:n}}=Object(T.default)(),{favicon:a,themeConfig:{image:c,metadatas:o},url:l}=t,{title:s,description:u,image:m,keywords:d,permalink:f,searchMetadatas:b}=e,h=Object(i.useTitleFormatter)(s),v=m||c,g=Object(B.a)(v,{absolute:!0}),p=Object(B.a)(a),E=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null,r.a.createElement("html",{lang:E}),h&&r.a.createElement("title",null,h),h&&r.a.createElement("meta",{property:"og:title",content:h}),a&&r.a.createElement("link",{rel:"shortcut icon",href:p}),u&&r.a.createElement("meta",{name:"description",content:u}),u&&r.a.createElement("meta",{property:"og:description",content:u}),d&&d.length&&r.a.createElement("meta",{name:"keywords",content:d.join(",")}),v&&r.a.createElement("meta",{property:"og:image",content:g}),v&&r.a.createElement("meta",{name:"twitter:image",content:g}),v&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),f&&r.a.createElement("meta",{property:"og:url",content:l+f}),f&&r.a.createElement("link",{rel:"canonical",href:l+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(M,Object(I.a)({tag:i.DEFAULT_SEARCH_TAG,locale:n},b)),r.a.createElement(P.a,null,o.map((e,t)=>r.a.createElement("meta",Object(I.a)({key:"metadata_"+t},e)))))}n(70);var R=function(){Object(a.useEffect)(()=>{function e(e){"keydown"===e.type&&"Tab"===e.key&&document.body.classList.add("navigation-with-keyboard"),"mousedown"===e.type&&document.body.classList.remove("navigation-with-keyboard")}return document.addEventListener("keydown",e),document.addEventListener("mousedown",e),()=>{document.body.classList.remove("navigation-with-keyboard"),document.removeEventListener("keydown",e),document.removeEventListener("mousedown",e)}},[])};n(71);t.a=function(e){const{children:t,noFooter:n,wrapperClassName:a}=e;return R(),r.a.createElement(A,null,r.a.createElement(V,e),r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement(b.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",a)},t),!n&&r.a.createElement(h.a,null))}},797:function(e,t,n){"use strict";var a=n(742),r=n(0),c=n.n(r),o=n(756),l=n(743),s=n(22),i=n(749),u=n(69),m=n.n(u);var d=e=>{const{isClient:t}=Object(s.default)(),{isDarkTheme:n}=Object(i.a)(),{sources:r,className:o,alt:u="",...d}=e,f=t?n?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,f.map(e=>c.a.createElement("img",Object(a.a)({key:e,src:r[e],alt:u,className:Object(l.a)(m.a.themedImage,m.a["themedImage--"+e],o)},d))))},f=n(778),b=n(765),h=n(779);t.a=e=>{const{isClient:t}=Object(s.default)(),{navbar:{title:n,logo:r={src:""}}}=Object(b.useThemeConfig)(),{imageClassName:l,titleClassName:i,...u}=e,m=Object(f.a)(r.href||"/"),v=r.target?{target:r.target}:Object(h.a)(m)?{}:{rel:"noopener noreferrer",target:"_blank"},g={light:Object(f.a)(r.src),dark:Object(f.a)(r.srcDark||r.src)};return c.a.createElement(o.a,Object(a.a)({to:m},u,v),r.src&&c.a.createElement(d,{key:t,className:l,sources:g,alt:r.alt||n||"Logo"}),null!=n&&c.a.createElement("strong",{className:i},n))}},807:function(e,t,n){"use strict";var a=n(0),r=n(775),c=n(940);t.a=e=>{const t=Object(r.useLocation)(),[n,o]=Object(a.useState)(!e),l=Object(a.useRef)(!1),[s,i]=Object(a.useState)(0),[u,m]=Object(a.useState)(0),d=Object(a.useCallback)(e=>{null!==e&&m(e.getBoundingClientRect().height)},[]);return Object(c.a)(({scrollY:t})=>{if(!e)return;if(t<u)return;if(l.current)return l.current=!1,o(!1),void i(t);s&&0===t&&o(!0);const n=document.documentElement.scrollHeight-u,a=window.innerHeight;s&&t>=s?o(!1):t+a<n&&o(!0),i(t)},[s,u,l]),Object(a.useEffect)(()=>{e&&s&&o(!0)},[t.pathname]),Object(a.useEffect)(()=>{e&&(l.current=!0)},[t.hash]),{navbarRef:d,isNavbarVisible:n}}},816:function(e,t,n){"use strict";var a=n(742),r=n(0),c=n.n(r),o=n(25),l=n(22),s=n(775),i=n(778),u=n(756),m=n(24),d=n(938);function f(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var b=n(939);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=c.a.forwardRef((function(e,t){var n=v(Object(r.useState)(null),2),a=n[0],o=n[1];return Object(r.useEffect)((function(){"undefined"!=typeof navigator&&o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":"Ctrl")}),[]),c.a.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement("div",{className:"DocSearch-Button-Container"},c.a.createElement(b.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search")),null!==a?c.a.createElement("div",{className:"DocSearch-Button-Keys"},c.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===a?c.a.createElement(f,null):a),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K")):null)})),E=n(767),O=n(765);function j(){const{locale:e,tags:t}=function(){const{i18n:e}=Object(l.default)(),t=Object(E.useAllDocsData)(),n=Object(E.useActivePluginAndVersion)(),a=Object(O.useDocsPreferredVersionByPluginId)(),r=[O.DEFAULT_SEARCH_TAG,...Object.keys(t).map((function(e){var r,c;const o=(null==n||null===(r=n.activePlugin)||void 0===r?void 0:r.pluginId)===e?n.activeVersion:void 0,l=a[e],s=t[e].versions.find(e=>e.isLast),i=null!==(c=null!=o?o:l)&&void 0!==c?c:s;return Object(O.docVersionSearchTag)(e,i.name)}))];return{locale:e.currentLocale,tags:r}}();return["language:"+e,t.map(e=>"docusaurus_tag:"+e)]}let k=null;function w({hit:e,children:t}){return c.a.createElement(u.a,{to:e.url},t)}function y({state:e,onClose:t}){const{generateSearchPageLink:n}=Object(d.a)();return c.a.createElement(u.a,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function C({contextualSearch:e,...t}){var u,d;const{siteMetadata:f}=Object(l.default)(),b=j(),h=null!==(u=null===(d=t.searchParameters)||void 0===d?void 0:d.facetFilters)&&void 0!==u?u:[],v=e?[...b,...h]:h,g={...t.searchParameters,facetFilters:v},{withBaseUrl:E}=Object(i.b)(),O=Object(s.useHistory)(),C=Object(r.useRef)(null),[S,N]=Object(r.useState)(!1),[L,D]=Object(r.useState)(null),_=Object(r.useCallback)(()=>k?Promise.resolve():Promise.all([n.e(671).then(n.bind(null,1503)),Promise.all([n.e(0),n.e(672)]).then(n.bind(null,1501)),n.e(0).then(n.t.bind(null,740,7))]).then(([{DocSearchModal:e}])=>{k=e}),[]),A=Object(r.useCallback)(()=>{_().then(()=>{N(!0)})},[_,N]),I=Object(r.useCallback)(()=>{N(!1)},[N]),P=Object(r.useCallback)(e=>{_().then(()=>{N(!0),D(e.key)})},[_,N,D]),T=Object(r.useRef)({navigate({itemUrl:e}){O.push(e)}}).current,B=Object(r.useRef)(e=>e.map(e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:E(`${t.pathname}${t.hash}`)}})).current,M=Object(r.useMemo)(()=>e=>c.a.createElement(y,Object(a.a)({},e,{onClose:I})),[I]),V=Object(r.useCallback)(e=>(e.addAlgoliaAgent("docusaurus",f.docusaurusVersion),e),[f.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,o])}({isOpen:S,onOpen:A,onClose:I,onInput:P,searchButtonRef:C}),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),c.a.createElement(p,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:A,ref:C}),S&&Object(o.createPortal)(c.a.createElement(k,Object(a.a)({onClose:I,initialScrollY:window.scrollY,initialQuery:L,navigator:T,transformItems:B,hitComponent:w,resultsFooterComponent:M,transformSearchClient:V},t,{searchParameters:g})),document.body))}t.a=function(){const{siteConfig:e}=Object(l.default)();return c.a.createElement(C,e.themeConfig.algolia)}},819:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),c=n(851),o=n(742),l=n(22),s=n(775);function i({mobile:e,...t}){const{siteConfig:{baseUrl:n},i18n:{defaultLocale:a,currentLocale:i,locales:u,localeConfigs:m}}=Object(l.default)(),{pathname:d}=Object(s.useLocation)();function f(e){return m[e].label}const b=i===a?n:n.replace(`/${i}/`,"/"),h=d.replace(n,"");const v=u.map(e=>{const t=`${function(e){return e===a?""+b:`${b}${e}/`}(e)}${h}`;return{isNavLink:!0,label:f(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}}),g=e?"Languages":f(i);return r.a.createElement(c.a,Object(o.a)({},t,{mobile:e,label:g,items:v}))}const u={default:()=>c.a,localeDropdown:()=>i,docsVersion:()=>n(1034).default,docsVersionDropdown:()=>n(1035).default,doc:()=>n(1036).default};function m({type:e,...t}){const n=((e="default")=>{const t=u[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(n,t)}},851:function(e,t,n){"use strict";var a=n(742),r=n(0),c=n.n(r),o=n(743),l=n(756),s=n(778),i=n(775),u=n(765);function m({activeBasePath:e,activeBaseRegex:t,to:n,href:r,label:o,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...m}){const d=Object(s.a)(n),f=Object(s.a)(e),b=Object(s.a)(r,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(a.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:u?b:r}:{isNavLink:!0,activeClassName:i,to:d,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(f)}:null},m),o)}function d({items:e,position:t,className:n,...l}){const s=Object(r.useRef)(null),i=Object(r.useRef)(null),[u,d]=Object(r.useState)(!1);Object(r.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[s]);const f=(e,t=!1)=>Object(o.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{ref:s,className:Object(o.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},c.a.createElement(m,Object(a.a)({className:f(n)},l,{onClick:l.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),d(!u))}}),l.label),c.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map(({className:t,...n},r)=>c.a.createElement("li",{key:r},c.a.createElement(m,Object(a.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),d(!1);const e=s.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:f(t,!0)},n)))))):c.a.createElement(m,Object(a.a)({className:f(n)},l))}function f({items:e,className:t,position:n,...l}){var s,d;const f=Object(r.useRef)(null),{pathname:b}=Object(i.useLocation)(),[h,v]=Object(r.useState)(()=>{var t;return null===(t=!(null!=e&&e.some(e=>Object(u.isSamePath)(e.to,b))))||void 0===t||t}),g=(e,t=!1)=>Object(o.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(m,Object(a.a)({className:g(t)},l)));const p=null!==(s=f.current)&&void 0!==s&&s.scrollHeight?(null===(d=f.current)||void 0===d?void 0:d.scrollHeight)+"px":void 0;return c.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":h})},c.a.createElement(m,Object(a.a)({role:"button",className:g(t,!0)},l,{onClick:()=>{v(e=>!e)}}),l.label),c.a.createElement("ul",{className:"menu__list",ref:f,style:{height:h?void 0:p}},e.map(({className:e,...t},n)=>c.a.createElement("li",{className:"menu__list-item",key:n},c.a.createElement(m,Object(a.a)({activeClassName:"menu__link--active",className:g(e)},t,{onClick:l.onClick}))))))}t.a=function({mobile:e=!1,...t}){const n=e?f:d;return c.a.createElement(n,t)}},938:function(e,t,n){"use strict";var a=n(775),r=n(8),c=n(22);t.a=function(){const e=Object(a.useHistory)(),t=Object(a.useLocation)(),{siteConfig:{baseUrl:n}={}}=Object(c.default)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}},939:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},940:function(e,t,n){"use strict";var a=n(0),r=n(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,r]=Object(a.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(a.useEffect)(()=>{const e={passive:!0};return window.addEventListener("scroll",o,e),()=>window.removeEventListener("scroll",o,e)},t),n}}}]);