(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{427:function(r,e,t){"use strict";t.r(e);var n=t(40),o=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"_2-常見翻牆工具的盤點"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-常見翻牆工具的盤點"}},[r._v("#")]),r._v(" 2. 常見翻牆工具的盤點")]),r._v(" "),t("h2",{attrs:{id:"_1-依赖-vps-的代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖-vps-的代理"}},[r._v("#")]),r._v(" 1 依赖 VPS 的代理")]),r._v(" "),t("p",[t("strong",[r._v("Shadowsocks、"),t("a",{attrs:{href:"https://www.v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[r._v("V2Ray"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://github.com/trojan-gfw/trojan",target:"_blank",rel:"noopener noreferrer"}},[r._v("Trojan"),t("OutboundLink")],1),r._v(" 可被歸類於適用於中國特殊網絡環境、依賴虛擬專用伺服器（Virtual Private Server, VPS）的輕量級網絡代理工具。這三者的設計初衷就是【突破網絡封鎖】，在【隱蔽性】和【抗封鎖】能力上相比傳統翻牆工具有著顯著優勢。")])]),r._v(" "),t("p",[r._v("Shadowsocks（俗稱 ss）是中國大陸最流行的翻牆工具之一，可以理解為加密版的 Socks 代理。Shadowsocks 作者 "),t("a",{attrs:{href:"https://github.com/clowwindy",target:"_blank",rel:"noopener noreferrer"}},[r._v("clowwindy"),t("OutboundLink")],1),r._v(" 迫於警方壓力在 2015 年 8 月 22 日在 Github 上刪除項目並停止開發，之後"),t("a",{attrs:{href:"https://github.com/madeye",target:"_blank",rel:"noopener noreferrer"}},[r._v("madeye"),t("OutboundLink")],1),r._v(" 和 "),t("a",{attrs:{href:"https://github.com/linusyang",target:"_blank",rel:"noopener noreferrer"}},[r._v("linusyang"),t("OutboundLink")],1),r._v(" 在 Shadowsocks 的基礎上持續開發和維護 "),t("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-libev",target:"_blank",rel:"noopener noreferrer"}},[r._v("Shadowsocks-libev"),t("OutboundLink")],1),r._v(" 至今。（破娃醬 (breakwa11) 開發了另一流行分支 ShdowsocksR (SSR)，在原版基礎上提高了安全性並加入了混淆。2017年7月27日，breakwa11 遭到自稱「ESU.TV」的不明身份人士的人身攻擊，被迫刪除 SSR 刪除項目、停止開發並解散相關 Telegram 交流群組，後 Akkariiin 宣佈接手 SSR 項目並開發 "),t("a",{attrs:{href:"https://github.com/shadowsocksrr",target:"_blank",rel:"noopener noreferrer"}},[r._v("ShadowsocksRR"),t("OutboundLink")],1),r._v(" 分支）")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[r._v("V2Ray"),t("OutboundLink")],1),r._v("（Project V）是繼 Shadowsocks 之後的又一流行翻牆工具，定位為一個功能強大的模塊化代理軟件包，而非單純的協議或軟體。V2Ray 擁有自己的加密代理協議 Vmess，同時也支援 Shadowsocks、Trojan 等其他協議，允许用户自行選擇各種模式和組合，通過不同的設定來達到不同的代理效果。V2Ray 原開發者 Victoria Raymond 自 2019 年 3 月後失聯至今，没有完整權限的其他維護者創建了新的 organization "),t("a",{attrs:{href:"https://github.com/v2fly",target:"_blank",rel:"noopener noreferrer"}},[r._v("v2fly"),t("OutboundLink")],1),r._v(" 並持續開發。")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/trojan-gfw/trojan",target:"_blank",rel:"noopener noreferrer"}},[r._v("Trojan"),t("OutboundLink")],1),r._v(" 是一款新興的專用於突破 GFW 網絡封鎖的工具。Trojan/「特洛伊木馬」 是一種翻牆理念，即通過使用 TLS 偽裝 HTTPS，將翻牆流量混進正常網絡服務中穿透 GFW。Trojan 類似於 V2Ray 的 Vmess+WebSocket+TLS 模式，但在速度上有明顯優勢，原因是 V2Ray 有 Vmess 和 TLS 兩層加密，而 Trojan 只有一層 TLS，加密運算更少。")]),r._v(" "),t("p",[r._v("V2Ray (v2fly) 的主要維護者 "),t("a",{attrs:{href:"https://github.com/rprx",target:"_blank",rel:"noopener noreferrer"}},[r._v("rprx"),t("OutboundLink")],1),r._v(" 引入了無加密的數據傳輸協議 "),t("a",{attrs:{href:"https://www.v2fly.org/config/protocols/vless.html#outboundconfigurationobject",target:"_blank",rel:"noopener noreferrer"}},[r._v("Vless"),t("OutboundLink")],1),r._v("，之後開發出了 "),t("a",{attrs:{href:"https://github.com/rprx/v2ray-vless/releases/tag/xtls",target:"_blank",rel:"noopener noreferrer"}},[r._v("XTLS"),t("OutboundLink")],1),r._v(" 協議（拼接網站和代理的內外兩層 TLS，進一步減少冗余加密）。後 XTLS 因許可證等"),t("a",{attrs:{href:"https://github.com/XTLS/Go/issues/9",target:"_blank",rel:"noopener noreferrer"}},[r._v("爭議"),t("OutboundLink")],1),r._v("經項目組投票表決後被移除，rprx 創建了 "),t("a",{attrs:{href:"https://github.com/XTLS",target:"_blank",rel:"noopener noreferrer"}},[r._v("Project X"),t("OutboundLink")],1),r._v(" 項目，提供「v2ray 的超集 X-ray，含更好的整体性能和 XTLS 等一系列增强，且完全兼容 v2ray-core 的功能及配置」。")]),r._v(" "),t("p",[r._v("優點：")]),r._v(" "),t("ul",[t("li",[r._v("速度快")]),r._v(" "),t("li",[r._v("連接穩定")]),r._v(" "),t("li",[r._v("相對省電")]),r._v(" "),t("li",[r._v("支援智能分流")]),r._v(" "),t("li",[r._v("抗封鎖能力強\n"),t("ul",[t("li",[r._v("協議特徵小")]),r._v(" "),t("li",[r._v("抗主動探測")])])]),r._v(" "),t("li",[r._v("協議開源")])]),r._v(" "),t("p",[r._v("缺點：")]),r._v(" "),t("ul",[t("li",[r._v("學習成本高")]),r._v(" "),t("li",[r._v("使用門檻高")]),r._v(" "),t("li",[r._v("匿名不友好\n"),t("ul",[t("li",[r._v("無論購買商業服務還是租用 VPS 自建服務均涉及【在線交易】")])])]),r._v(" "),t("li",[r._v("存在安全隱患\n"),t("ul",[t("li",[r._v("VPS 難以被加固")])])])]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v(" "),t("a",{attrs:{href:"https://github.com/KeiKinn/ShadowsocksBio",target:"_blank",rel:"noopener noreferrer"}},[r._v("Shadowsocks 筆記"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://congcong0806.github.io/2018/04/20/SS",target:"_blank",rel:"noopener noreferrer"}},[r._v("聰聰：SS/SSR 簡介"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"_2-迷霧通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-迷霧通"}},[r._v("#")]),r._v(" 2 迷霧通")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://geph.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("迷霧通"),t("OutboundLink")],1),r._v("是一款新興的翻牆工具。")]),r._v(" "),t("p",[r._v("特性：")]),r._v(" "),t("ul",[t("li",[r._v("抗封鎖能力強\n"),t("ul",[t("li",[r._v("使用自研的 sosistab 協議，使用類似 Tor 的高強度混淆和加密")])])]),r._v(" "),t("li",[r._v("學習成本低\n"),t("ul",[t("li",[r._v("客戶端集成服務，體驗與傳統商業 VPN 客戶端類似")])])]),r._v(" "),t("li",[r._v("前後端開源")]),r._v(" "),t("li",[r._v("支援 Android/Windows/macOS/Linux")]),r._v(" "),t("li",[r._v("支援全局 VPN 模式")]),r._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/geph-official/geph2/wiki/Service-SLA-(%E5%B0%81%E4%B8%80%E5%A4%A9%E8%B3%A0%E4%B8%80%E5%A4%A9%E6%94%BF%E7%AD%96)",target:"_blank",rel:"noopener noreferrer"}},[r._v("SLA 服務保證"),t("OutboundLink")],1),r._v("，"),t("strong",[r._v("【封一天賠一天】")])]),r._v(" "),t("li",[r._v("私隱友好\n"),t("ul",[t("li",[r._v("提供免費版")]),r._v(" "),t("li",[t("strong",[r._v("無需手機號或電子郵箱註冊")])]),r._v(" "),t("li",[r._v("服務條款承諾伺服器【"),t("strong",[r._v("零日誌")]),r._v("】 ("),t("a",{attrs:{href:"https://github.com/geph-official/geph2/wiki/Policies-and-terms#no-logging-policy",target:"_blank",rel:"noopener noreferrer"}},[r._v("No-logging policy"),t("OutboundLink")],1),r._v(")")]),r._v(" "),t("li",[r._v("服務條款承諾除非愛沙尼亞法律強制要求，不向第三方披露用戶信息 ("),t("a",{attrs:{href:"https://github.com/geph-official/geph2/wiki/Policies-and-terms#non-cooperation-policy",target:"_blank",rel:"noopener noreferrer"}},[r._v("Non-cooperation policy"),t("OutboundLink")],1),r._v(")")]),r._v(" "),t("li",[r._v("運營公司註冊地是隱私法嚴格的愛沙尼亞")])])])]),r._v(" "),t("p",[r._v("迷霧通提供免費版與付費版，免費版有節點限制和限速（Geph 4 的限速是 1.6 Mbps，可基本滿足網頁瀏覽需求）；付費版每月 5 欧元，無節點和速度限制，支持國際信用卡和支付寶付款。")]),r._v(" "),t("p",[r._v("（有能力的用家也可以使用迷霧通的混淆協議"),t("a",{attrs:{href:"https://github.com/geph-official/geph2/wiki/Advanced-usage#building-your-own-server",target:"_blank",rel:"noopener noreferrer"}},[r._v("在自己的 VPS 部署服務"),t("OutboundLink")],1),r._v("，不過自建的服務無法使用多路混淆和橋接，只是一個類似 Shadowsocks 的單層代理，而非迷霧通的兩層洋蔥路由式網絡，抗封鎖能力會打上折扣）")]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v("\n迷霧通官網：https://geph.io/（已被 GFW 封鎖）｜"),t("a",{attrs:{href:"https://is.gd/getmwt",target:"_blank",rel:"noopener noreferrer"}},[r._v("免翻牆下載鏡像"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://community.geph.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("迷霧通用戶論壇"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://pincong.rocks/article/10365",target:"_blank",rel:"noopener noreferrer"}},[r._v("品蔥｜nullchinchilla：我开发的开源翻墙软件—「迷雾通」"),t("OutboundLink")],1),r._v(" (2019-12-04)"),t("br"),r._v(" "),t("a",{attrs:{href:"https://community.geph.io/t/4-geph-4-is-out-of-beta-for-all-platforms/1176",target:"_blank",rel:"noopener noreferrer"}},[r._v("迷霧通用戶論壇｜nullchinchilla：所有平台的迷雾通4正式化啦！ / Geph 4 is out of beta for ALL PLATFORMS!"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"_3-vpn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-vpn"}},[r._v("#")]),r._v(" 3 VPN")]),r._v(" "),t("p",[r._v("VPN（Virtual Private Network, 虛擬專用網絡）本意是指在本地創建虛擬網卡，與 VPN 伺服器之間建立加密隧道協議進行通信，最初被設計用於保護通信安全與私隱。由於 VPN 本身就是代理的一種，所以早期也能被用於【突破網絡封鎖】，令「VPN」成為了翻牆工具的代名詞。不少人會把 Shadowsocks 當成「VPN」，嚴格說起來這是「VPN」概念的誤用。")]),r._v(" "),t("p",[t("strong",[r._v("時至今日 VPN 本身已成為封鎖對象，實際上並不適合用作翻牆工具——PPTP、L2TP、IPSec、OpenVPN 等 VPN 協議特徵明顯，已被 GFW 精準識別和封鎖。目前僅有 Express VPN 等少數幾家商業 VPN 服務商開發了針對中國市場的產品，通過加入混淆的自有協議實現翻牆")]),r._v("（如 Express VPN 的 Lightway，Nord VPN 的 NordLynx）。")]),r._v(" "),t("p",[r._v("（WireGuard 是一種新型的 VPN 協議，具有輕量、高速、穩定、省電等諸多特性。雖然暫無 WireGuard 被 GFW 封鎖的媒體報道，但考慮到 WireGuard 協議無偽裝，也未被廣泛用於突破 GFW，故推斷其不適合作翻牆之用）")]),r._v(" "),t("p",[r._v("VPN 的優點：")]),r._v(" "),t("ul",[t("li",[r._v("全局代理")]),r._v(" "),t("li",[r._v("產業成熟，商業服務使用門檻低")])]),r._v(" "),t("p",[r._v("VPN 的缺點：")]),r._v(" "),t("ul",[t("li",[r._v("速度慢")]),r._v(" "),t("li",[r._v("不穩定")]),r._v(" "),t("li",[r._v("協議特徵明顯")])]),r._v(" "),t("p",[r._v("可翻牆的商業 VPN 服務的優點：")]),r._v(" "),t("ul",[t("li",[r._v("運營公司多為國際大廠\n"),t("ul",[t("li",[r._v("相對「機場」（Shadowsocks 服務商）而言\n"),t("ul",[t("li",[r._v("跑路風險低")]),r._v(" "),t("li",[r._v("輿論壓力大")])])])])])]),r._v(" "),t("p",[r._v("可翻牆的商業 VPN 服務的缺點：")]),r._v(" "),t("ul",[t("li",[r._v("價格昂貴")])]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v("\n– 部分可翻牆 VPN 測速"),t("br"),r._v(" "),t("a",{attrs:{href:"https://cc.greatfire.org/en",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://cc.greatfire.org/en"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://10beasts.net",target:"_blank",rel:"noopener noreferrer"}},[r._v("https://10beasts.net"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"_4-外國手機卡漫遊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-外國手機卡漫遊"}},[r._v("#")]),r._v(" 4 外國手機卡漫遊")]),r._v(" "),t("p",[r._v("外國手機卡開啟國際漫遊後會將數據轉「送回 SIM 卡所属运营商接入互联网」，所以在中國大陸等網絡封鎖地區實現無縫「翻牆」。")]),r._v(" "),t("p",[r._v("優點：")]),r._v(" "),t("ul",[t("li",[r._v("學習成本極低")]),r._v(" "),t("li",[r._v("被封鎖可能性較低")])]),r._v(" "),t("p",[r._v("缺點：")]),r._v(" "),t("ul",[t("li",[r._v("價格高昂")])]),r._v(" "),t("h2",{attrs:{id:"_5-其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他"}},[r._v("#")]),r._v(" 5 其他")]),r._v(" "),t("p",[r._v("被歸類於「其他」的翻牆工具均得到過編程隨想的推薦或介紹（編程隨想推薦/使用這類工具作為 Tor 的【前置代理】是因為他對【網絡匿名】有更高的要求，而這類工具都是【免費軟件】——不涉及【線上支付】環節，同時在中國有較大的用戶基數——混跡其中可以提高當局的排查難度）")]),r._v(" "),t("h3",{attrs:{id:"_5-1-vpn-gate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-vpn-gate"}},[r._v("#")]),r._v(" 5.1 VPN Gate")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.vpngate.net/cn/",target:"_blank",rel:"noopener noreferrer"}},[r._v("VPN Gate"),t("OutboundLink")],1),r._v(" 項目是日本筑波大學研究生院提供的在線服務，研究目的是推廣「全球分布式公共 VPN 中繼伺服器」的知識。任何用家可以從項目官網下載安裝伺服器端應用，志願將自己的計算機貢獻成為 VPN 中繼伺服器。")]),r._v(" "),t("p",[r._v("VPN Gate 基於筑波大學的另一個開源項目 SoftEther VPN，後者是一個跨平台、兼容多種 VPN 協議的 VPN 客戶端。")]),r._v(" "),t("p",[r._v("優點：")]),r._v(" "),t("ul",[t("li",[r._v("分布式伺服器和動態 IP")]),r._v(" "),t("li",[r._v("免費")]),r._v(" "),t("li",[r._v("無流量限制")]),r._v(" "),t("li",[r._v("無需註冊")])]),r._v(" "),t("p",[r._v("缺點：")]),r._v(" "),t("ul",[t("li",[r._v("使用傳統 VPN 協議，抗封鎖能力差")])]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v(" "),t("a",{attrs:{href:"https://program-think.blogspot.com/2013/04/gfw-vpngate.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("編程隨想的博客｜“如何翻牆”系列：掃盲 VPN Gate——分布式的 VPN 服務器"),t("OutboundLink")],1),r._v(" (2013-04-19)")]),r._v(" "),t("h3",{attrs:{id:"_5-2-psiphon-賽風"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-psiphon-賽風"}},[r._v("#")]),r._v(" 5.2 Psiphon 賽風")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://psiphon.ca/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Psiphon"),t("OutboundLink")],1),r._v(" 是一個開源免費的翻牆軟體，最新版的 Psiphon 綜合使用了 VPN、SSH、HTTP 和 Socks 代理技術，支持 Android、Windows 和 iOS 平台。")]),r._v(" "),t("h3",{attrs:{id:"_5-3-lantern-藍燈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-lantern-藍燈"}},[r._v("#")]),r._v(" 5.3 Lantern 藍燈")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://getlantern.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Lantern"),t("OutboundLink")],1),r._v("（藍燈）是一款開源的翻牆軟體，支持全平台。Lantern 提供付費版和免費版兩種版本，免費版超出流量上限後仍可翻牆，但會被限速。")]),r._v(" "),t("p",[r._v("Lantern 的客戶端下載地址可以從"),t("a",{attrs:{href:"https://github.com/getlantern/lantern",target:"_blank",rel:"noopener noreferrer"}},[r._v("藍燈的 Github 倉庫"),t("OutboundLink")],1),r._v("免翻牆獲取。")]),r._v(" "),t("h3",{attrs:{id:"_5-4-自由門、無界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-自由門、無界"}},[r._v("#")]),r._v(" 5.4 自由門、無界")]),r._v(" "),t("p",[r._v("自由門和無界是較為流行的閉源、不記名的免費翻牆軟體，二者都有法輪功背景，也受到美國之音（VOA）的運營方美國全球媒體署國際廣播局的資助。")]),r._v(" "),t("p",[r._v("缺點：")]),r._v(" "),t("ul",[t("li",[r._v("閉源")]),r._v(" "),t("li",[r._v("支持平台有限（Windows、Android）")]),r._v(" "),t("li",[r._v("存在內容審查（如限制色情內容等）")])]),r._v(" "),t("p",[r._v("動態網 - 自由門下載地址 http://us.dongtaiwang.com/loc/download.php"),t("br"),r._v("\n無界英文官網 https://ultrasurf.us/"),t("br"),r._v("\nGitHub 免翻牆下載地址導航：https://github.com/sglfree/freesky")]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v(" "),t("a",{attrs:{href:"https://projects.voanews.com/circumvention/chinese/freegate",target:"_blank",rel:"noopener noreferrer"}},[r._v("VOA - 互聯網翻牆指南 - 自由門"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://projects.voanews.com/circumvention/chinese/ultrasurf",target:"_blank",rel:"noopener noreferrer"}},[r._v("VOA - 互聯網翻牆指南 - 無界瀏覽"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"_5-5-tor-meek"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-tor-meek"}},[r._v("#")]),r._v(" 5.5 Tor + Meek")]),r._v(" "),t("p",[r._v("Tor Browser 加入 Meek 流量混淆插件，通過將 Tor 流量偽裝成訪問 Microsoft Azure 雲服務的正常流量來欺騙 GFW，使用家得以將 Tor + Meek 組合用於翻牆。")]),r._v(" "),t("p",[r._v("缺點：")]),r._v(" "),t("ul",[t("li",[r._v("速度很慢，用家體驗不佳\n"),t("ul",[t("li",[r._v("原因：Meek 網橋所依賴的 Microsoft Azure CDN 價格很貴，Tor 對其設置了流量上限。Meek 網橋因過載而速度變慢。")])])])]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v(" "),t("a",{attrs:{href:"https://program-think.blogspot.com/2018/04/GFW-tor-browser-7.5-meek.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("編程隨想：「如何翻牆」系列：掃盲 TOR Browser 7.5——關於 meek 插件的配置、優化、原理"),t("OutboundLink")],1),t("br"),r._v("\nTor 項目組正在開發新的網橋以對抗網絡審查，參見："),t("a",{attrs:{href:"https://blog.torproject.org/anti-censorship-challenges-priorities-progress",target:"_blank",rel:"noopener noreferrer"}},[r._v("Tor Blog｜Challenges, priorities, and progress in anti-censorship technology at Tor"),t("OutboundLink")],1),r._v(" (2020-08-27)")]),r._v(" "),t("p",[r._v("參見："),t("br"),r._v(" "),t("a",{attrs:{href:"https://zh.wikibooks.org/wiki/%E7%AA%81%E7%A0%B4%E7%BD%91%E7%BB%9C%E5%AE%A1%E6%9F%A5",target:"_blank",rel:"noopener noreferrer"}},[r._v("維基教科書 - 突破網絡審查"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);