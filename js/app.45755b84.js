(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],a[r]&&f.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a={app:0},o=[];function s(t){return c.p+"js/"+({settings:"settings"}[t]||t)+"."+{"chunk-2d838918":"2e6df0ce",settings:"02327b95"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-2d838918":1,settings:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var i="css/"+({settings:"settings"}[t]||t)+"."+{"chunk-2d838918":"defd6dce",settings:"70a13161"}[t]+".css",r=c.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===i||u===r))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],u=s.getAttribute("data-href");if(u===i||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.request=i,n(a)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=a[t]=[e,n]});e.push(i[2]=o);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(t),u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");o.type=i,o.request=r,n[1](o)}a[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bitcoin-clicker/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0245":function(t,e,n){"use strict";var i=n("f44c"),r=n.n(i);r.a},"05ce":function(t,e,n){},"0bfd":function(t,e,n){"use strict";var i=n("600c"),r=n.n(i);r.a},"22d7":function(t,e,n){"use strict";var i=n("6650"),r=n.n(i);r.a},2856:function(t,e,n){},3402:function(t,e,n){},3440:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return o});var i=n("a322"),r=n("c93e"),a=(n("456d"),n("ac6a"),n("cadf"),n("551c"),n("097d"),n("4f15")),o={firstComputer:{title:"First computer",message:"Congratulations, you just bough your first computer!\n    Research ".concat(a["a"].computer[0].title," to set up your computer\n    for Bitcoin mining."),watch:function(t){return 1===t.inventory.computer}},firstMiner:{title:"First miner deployed",message:"You can sell mined coins to pay your bills.\n    Mind, that the Bitcoin price varys over time.",watch:function(t){return 1===t.deployment.computer}},fullFlat:{title:"No space left",message:"You can rent more space to deploy additional miner.",watch:function(t,e){return 10===e.usedSpace}}};function s(t){Object.keys(o).forEach(function(e){o[e].unwatch=t.watch(o[e].watch,function(n,i){o[e].unwatch(),delete o[e].watch,delete o[e].unwatch,t.commit("log",o[e].message),t.commit("achieve",e)})})}var c={state:Object(r["a"])({},Object.keys(o).reduce(function(t,e){return Object(r["a"])({},t,Object(i["a"])({},e,0))},{})),getters:{goalsReached:function(t){return Object.keys(t).filter(function(e){return t[e]}).map(function(e){return Object(r["a"])({},t[e],{id:e})})},goalsOpen:function(t){return Object.keys(t).filter(function(e){return!t[e]}).map(function(e){return Object(r["a"])({},t[e],{id:e})})}},mutations:{achieve:function(t,e){e in t?t[e]++:console.warn("[achievements] unregistered achievement",e)}}}},3664:function(t,e,n){"use strict";var i=n("bff9"),r=n.n(i);r.a},3779:function(t,e,n){},"3ef3":function(t,e,n){},"40fb":function(t,e,n){"use strict";var i=n("e420"),r=n.n(i);r.a},"47df":function(t,e,n){"use strict";var i=n("05ce"),r=n.n(i);r.a},"4f15":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("f644"),r={computer:[{title:"Basic computer skills",duration:5*i["a"]},{title:"Advanced computer skills",duration:10*i["a"]},{title:"Pro computer skills",duration:20*i["a"]}],cpuMiner:[{title:"Tweak miner configuration",duration:5*i["a"],require:{computer:1},effect:{computer:{hps:2}}},{title:"Overclock CPU",duration:10*i["a"],require:{computer:2},effect:{computer:{hps:2,watt:1.5}}},{title:"Improve CPU mining algorithm",duration:20*i["a"],require:{computer:3},effect:{computer:{hps:2}}},{title:"Rewrite CPU miner in assembly",duration:50*i["a"],effect:{computer:{hps:2}}}],gpuMiner:[{title:"Develop GPU mining",duration:20*i["a"],require:{computer:3}},{title:"Overclock GPU",duration:30*i["a"],effect:{gpu:{hps:2}}},{title:"Optimize GPU driver",duration:40*i["a"],effect:{gpu:{hps:2}}},{title:"Improve GPU mining algorithm",duration:50*i["a"],effect:{gpu:{hps:2}}},{title:"Improve GPU mining algorithm again",duration:70*i["a"],effect:{gpu:{hps:2.5}}}],multiGPU:[{title:"Develop multi GPU support - 2x",duration:20*i["a"],require:{gpuMiner:3},effect:{computer:{gpuSlots:2}}},{title:"Develop multi GPU support - 5x",duration:20*i["a"],require:{rig:1},effect:{rig:{gpuSlots:5/3}}},{title:"Develop multi GPU support - 7x",duration:20*i["a"],effect:{rig:{gpuSlots:1.4}}},{title:"Develop multi GPU support - 10x",duration:20*i["a"],effect:{rig:{gpuSlots:10/7}}}],rig:[{title:"Invent a GPU RIG",duration:30*i["a"],require:{multiGPU:1}},{title:"Decrease RIG size",duration:20*i["a"],effect:{rig:{space:1/3}}},{title:"Improve GPU airflow",duration:20*i["a"],effect:{gpu:{watt:.8}}}],fpga:[{title:"Invent FPGA miner",duration:30*i["a"],require:{rig:2}},{title:"Optimize FPGA chip layout",duration:20*i["a"],effect:{fpga:{hps:2}}},{title:"Improve FPGA supply chain",duration:20*i["a"],effect:{fpga:{buyDuration:1/6}}}],usbMiner:[{title:"Invent USB miner",duration:30*i["a"],require:{fpga:2}},{title:"Increase USB miner hashrate",duration:20*i["a"],effect:{usbMiner:{hps:2}}}],asic:[{title:"Develop Bitcoin ASIC",duration:300*i["a"],require:{usbAsic:1}},{title:"Improve Bitcoin ASIC",duration:100*i["a"]},{title:"Implement ASIC Boost",duration:100*i["a"]}]};e["a"]=r},"568f":function(t,e,n){"use strict";var i=n("e2fd"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme",class:t.getTheme()},[n("div",{attrs:{id:"app"}},[n("router-view")],1)])},a=[],o=n("2f62"),s=n("3440"),c={name:"App",computed:Object(o["e"])({theme:function(t){return t.game.theme}}),mounted:function(){console.log("App started"),Object(s["c"])(this.$store)},methods:{getTheme:function(){return"theme-".concat(this.theme)}}},u=c,l=(n("5c0b"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Mining")],1),n("div",{staticClass:"col-xl col-md-6"},[n("Production")],1),n("div",{staticClass:"col-xl col-md-6"},[n("Research")],1),n("div",{staticClass:"col-xl col-md-6"},[n("Deployment")],1),n("div",{staticClass:"col-xl col-md-6"},[n("History")],1)]),n("Modal")],1)},v=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",[n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._v("\n            "+t._s(t.title)+"\n          ")]),n("div",{staticClass:"modal-body"},[t._v("\n            "+t._s(t.message)+"\n          ")]),n("div",{staticClass:"modal-footer"},[n("button",{on:{click:t.hideModal}},[t._v("OK")])])])])])])],1):t._e()},g=[],b={name:"Modal",computed:Object(o["e"])({title:function(t){return t.modal.title},message:function(t){return t.modal.message},show:function(t){return t.modal.show}}),methods:{hideModal:function(){this.$store.commit("hideModal")}}},y=b,_=(n("22d7"),Object(l["a"])(y,p,g,!1,null,null,null));_.options.__file="Modal.vue";var w=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view mining"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-md-3"},[n("h4",[t._v("Hashrate")]),n("div",{staticClass:"stats"},[t._v(t._s(t.hashrateText))])]),n("div",{staticClass:"col-6  col-md-3"},[n("h4",[t._v("Network")]),n("div",{staticClass:"stats"},[n("Stats",{attrs:{format:function(e){return t.prefix(e)},offset:t.networkHashrate,rate:t.networkHashrateDerivation}})],1)]),n("div",{staticClass:"col-6  col-md-3"},[n("h4",[t._v("Date")]),n("div",{staticClass:"stats"},[t._v(t._s(t.gameTime))])]),n("div",{staticClass:"col-6  col-md-3"},[n("h4",[t._v("Monthly Expenses")]),n("div",{staticClass:"stats danger"},[t._v("$ -"+t._s(t.monthlyExpenses.toFixed(2))+" USD")])]),n("div",{staticClass:"col-6  col-md-3"},[n("router-link",{attrs:{to:{name:"settings"}}},[n("span",{staticClass:"spanlink"},[t._v("Settings")])]),n("span",{staticClass:"spacer"}),n("router-link",{attrs:{to:{name:"achievements"}}},[n("span",{staticClass:"spanlink"},[t._v("Achievements")])]),n("div",{staticClass:"stats"},[n("Nav")],1)],1)])])},O=[],C=n("c93e"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("ThemeSwitch"),n("span",{staticClass:"version"},[t._v(" v"+t._s(t.version))]),n("GameTime")],1)},S=[],x=n("9224"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"time-control"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.started,expression:"started"}],staticClass:"spanlink",on:{click:t.pause}},[t._v("◼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.started,expression:"!started"}],staticClass:"spanlink",on:{click:t.resume}},[t._v("►")])])},P=[],T=(n("7f7f"),n("c665")),U=n("aa9a"),M=function(){function t(e,n,i){Object(T["a"])(this,t),this._interval=e,this.cb=n,this.handler=null,this.name="linear-".concat(Date.now())}return Object(U["a"])(t,[{key:"start",value:function(){var t=this;return this.handler?this:(console.log("[lclock] START ".concat(this.name," (").concat(this._interval,"ms)")),this.handler=setInterval(function(){return t.cb(t._interval)},this._interval),this)}},{key:"stop",value:function(){return this.handler&&(console.log("[lclock] STOP ".concat(this.name," (").concat(this._interval,"ms)")),clearInterval(this.handler),this.handler=null),this}},{key:"interval",set:function(t){this.handler?(this.stop(),this._interval=t,this.start()):this._interval=t}}]),t}();function I(t,e,n){return new M(t,e,n)}var A=I;var E=function(){function t(){Object(T["a"])(this,t),this.clocks={},this.started=!0}return Object(U["a"])(t,[{key:"start",value:function(){for(var t in this.started=!0,this.clocks)this.clocks[t].start()}},{key:"stop",value:function(){for(var t in this.started=!1,this.clocks)this.clocks[t].stop()}},{key:"create",value:function(t,e){var n="LC-".concat(Date.now()),i=A(t,e);return this.started&&i.start(),this.clocks[n]=i,n}},{key:"destroy",value:function(t){if(t&&t in this.clocks)return this.clocks[t].stop(),void delete this.clocks[t];for(var e in this.clocks)this.clocks[e].stop(),delete this.clocks[e]}}]),t}(),B=new E,$={name:"GameTime",data:function(){return{started:B.started}},methods:{resume:function(){B.start(),this.started=B.started},pause:function(){B.stop(),this.started=B.started}}},G=$,H=(n("0bfd"),Object(l["a"])(G,D,P,!1,null,null,null));H.options.__file="GameTime.vue";var N=H.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"themeswitch"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.theme,expression:"theme === 'dark'"}],staticClass:"spanlink",on:{click:function(e){t.setTheme("light")}}},[t._v("☀")]),n("span",{directives:[{name:"show",rawName:"v-show",value:"dark"!==t.theme,expression:"theme !== 'dark'"}],staticClass:"spanlink",on:{click:function(e){t.setTheme("dark")}}},[t._v("☾")])])},F=[],q={name:"ThemeSwitch",computed:Object(o["e"])({theme:function(t){return t.game.theme}}),methods:Object(o["d"])(["setTheme"])},J=q,Y=(n("0245"),Object(l["a"])(J,R,F,!1,null,null,null));Y.options.__file="ThemeSwitch.vue";var L=Y.exports,z={name:"Nav",components:{GameTime:N,ThemeSwitch:L},data:function(){return{version:x["a"]}}},W=z,K=(n("a4e1"),Object(l["a"])(W,j,S,!1,null,null,null));K.options.__file="Navigation.vue";var V=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"stats"},[t._v(t._s(t.format(t.value)))])},X=[],Z=(n("c5f6"),25),tt=1e3/Z,et={name:"Stats",props:{offset:{type:Number,default:0},rate:{type:Number,default:0},format:{type:Function,default:function(t){return t}}},data:function(){return{value:this.offset}},watch:{offset:function(t){this.value=t}},created:function(){var t=this;this.clock=B.create(tt,function(){t.value+=t.rate/Z})},mounted:function(){},beforeDestroy:function(){B.destroy(this.clock)}},nt=et,it=(n("bc97"),Object(l["a"])(nt,Q,X,!1,null,null,null));it.options.__file="Stats.vue";var rt=it.exports,at=n("6d02"),ot=n.n(at),st=ot()({unit:"H/s"}),ct={name:"Mining",components:{Nav:V,Stats:rt},computed:Object(C["a"])({},Object(o["e"])({hashrateText:function(t,e){return e.hashrateText},networkHashrate:function(t,e){return e.networkHashrate},networkHashrateDerivation:function(t,e,n){return e.networkHashrate/t.game.speed*800},chainheight:function(t,e){return e.chainheight},gameTime:function(t){return new Date(1e3*t.game.time).toLocaleDateString()},btc:function(t){return t.inventory.btc.toFixed(4)},usd:function(t){return t.inventory.usd.toFixed(2)},btcPrice:function(t,e){return e.btcInUSD},kwhPrice:function(t){return.19},powerConsumption:function(t,e){return e.watt},utilityBill:function(t){return t.mining.utilityBill}}),Object(o["c"])(["monthlyExpenses"])),methods:{prefix:function(t){return st(t)}}},ut=ct,lt=(n("a68d"),Object(l["a"])(ut,k,O,!1,null,null,null));lt.options.__file="Mining.vue";var ft=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view production"},[n("h4",[t._v("Savings")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col stats",class:{danger:t.usd<0}},[t._v("$ "+t._s(t.usd.toFixed(2))+" USD")]),n("div",{staticClass:"col stats"},[t._v("₿ "+t._s(t.prefix(t.btc,{unit:"BTC"})))])]),t._l(t.market,function(e,i){return t.isAvailable[i]?n("div",{key:i,staticClass:"row"},[n("div",{staticClass:"col-6"},[n("Action",{attrs:{duration:e.buyDuration,enabled:t.isAffordable[i],context:i,title:JSON.stringify(e,null,4),action:t.buy}},[t._v("Buy "+t._s(e.title))])],1),n("div",{staticClass:"col-6"},[n("Action",{attrs:{duration:e.deployDuration,enabled:t.inventory[i]>t.deployments[i],context:i,title:JSON.stringify(e,null,4),action:t.deploy}},[t._v("Deploy "+t._s(e.title))])],1)]):t._e()}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h4",[t._v("BTC Price")]),n("div",{staticClass:"stats"},[n("Stats",{attrs:{format:function(t){return"$"+t.toFixed(2)+" USD"},offset:t.btcInUSD,rate:t.btcInUsdDerivation}})],1)]),n("div",{staticClass:"col-6"},[n("Action",{staticClass:"align-bottom",attrs:{duration:t.btcSellDuration,enabled:t.btc>0,action:t.sell,context:"btc"}},[t._v("Sell BTC")])],1)])],2)},ht=[],mt=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-action",class:{disabled:!t.enabled},style:{background:"linear-gradient(to left, "+t.buttonColor+" "+t.progress+"% , "+t.progressColor+" "+t.progress+"% )"},attrs:{title:t.title},on:{click:function(e){t.trigger()}}},[t._t("default")],2)}),vt=[],pt=n("f644"),gt={name:"Action",props:{duration:{type:Number,default:pt["a"]},enabled:{type:Boolean,default:!0},context:{type:String,default:""},action:{type:Function,default:function(){}},title:{type:String,default:null}},data:function(){return{millis:this.duration}},computed:{progress:function(){return 100*this.millis/this.duration},buttonColor:function(t){var e=t.$store;return"light"===e.state.game.theme?"WHITE":"#222"},progressColor:function(t){var e=t.$store;return"light"===e.state.game.theme?"SILVER":"#888"}},methods:{trigger:function(){if(this.$root.$emit("bv::hide::tooltip"),this.enabled&&(this.millis>=this.duration&&(this.millis=0),0===this.millis)){this.action(this),console.log("sound");var t=new Audio("audio/click.mp3");t.play()}}}},bt=gt,yt=(n("3664"),Object(l["a"])(bt,mt,vt,!1,null,null,null));yt.options.__file="Action.vue";var _t=yt.exports,wt={btc:{title:"Bitcoin",tech:{NYI:1},sellPrice:500,sellDuration:1*pt["a"]},computer:{title:"PC",buyPrice:200,buyDuration:1*pt["a"],gpuSlots:1,space:1,watt:100,hps:1e6},gpu:{title:"GPU",tech:{gpuMiner:1},buyPrice:600,buyDuration:1*pt["a"],space:0,watt:130,hps:1e8},rig:{title:"Mining RIG",tech:{rig:1},buyPrice:300,buyDuration:3*pt["a"],gpuSlots:3,space:3,watt:80},fpga:{title:"FPGA",tech:{fpga:1},buyPrice:2e3,buyDuration:6*pt["a"],space:1,watt:800,hps:1e8},usbAsic:{title:"USB Miner",tech:{usbMiner:1},buyPrice:35,buyDuration:5*pt["a"],space:0,watt:2.5,hps:1e8},asic:{title:"Bitcoin ASIC",tech:{asic:1},buyPrice:2300,buyDuration:14*pt["a"],space:1,watt:1500,hps:1e12}},kt=wt,Ot=n("6d02"),Ct=Ot.prefix,jt={name:"Production",components:{Action:_t,Stats:rt},data:function(){return{market:kt,vm:this}},computed:Object(C["a"])({},Object(o["e"])(Object.keys(kt).reduce(function(t,e){return t[e]=function(t){return t.inventory[e]||0},t},{})),Object(o["e"])({usd:function(t){return t.inventory.usd},btc:function(t){return t.inventory.btc},btcPrice:function(t,e){return e.btcInUSD.toFixed(2)}}),Object(o["c"])(["isAvailable","isAffordable","inventory","deployments","btcInUSD","btcInUsdDerivation","dailyExpenses","monthlyExpenses"]),{btcSellDuration:function(){return kt.btcSellDuration}}),methods:Object(C["a"])({},Object(o["b"])(["buy","sell","deploy"]),{prefix:Ct})},St=jt,xt=(n("5bf1"),Object(l["a"])(St,dt,ht,!1,null,null,null));xt.options.__file="Production.vue";var Dt=xt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view research"},[n("h4",[t._v("Research")]),t._l(t.techtree,function(e,i){return t.show[i]?n("Action",{key:i,attrs:{duration:e[t.vm[i]].duration,enabled:!0,context:i,title:JSON.stringify(e[t.vm[i]],null,4),action:t.research}},[t._v(t._s(e[t.vm[i]].title))]):t._e()})],2)},Tt=[],Ut=n("4f15"),Mt={name:"Research",components:{Action:_t},data:function(){return{techtree:Ut["a"],vm:this}},computed:Object(C["a"])({},Object(o["e"])(Object.keys(Ut["a"]).reduce(function(t,e){return t[e]=function(t){return t.technology[e]},t},{})),Object(o["e"])({show:function(t){return Object.keys(Ut["a"]).reduce(function(e,n){var i=t.technology[n];if(Ut["a"][n].length<=i)return e[n]=!1,e;var r=Ut["a"][n][i];return void 0===r.require?e[n]=!0:e[n]=Object.keys(r.require).every(function(e){return t.technology[e]>=r.require[e]}),e},{})}})),methods:Object(o["b"])(["research"])},It=Mt,At=(n("a612"),Object(l["a"])(It,Pt,Tt,!1,null,null,null));At.options.__file="Research.vue";var Et=At.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view history"},[n("h4",[t._v("History")]),n("transition-group",{staticClass:"content",attrs:{name:"history-list",tag:"p"}},t._l(t.history,function(e,i){return n("p",{key:e.id,staticClass:"history-record",style:{color:"hsl(120, 0%, "+(t.foreground+(t.background-t.foreground)*i/10)+"%)"}},[t._v(t._s(e.msg))])}))],1)},$t=[],Gt={name:"History",computed:Object(o["e"])({history:function(t){return t.game.history},foreground:function(t){return"light"===t.game.theme?0:100},background:function(t){return console.log("background",t.game.theme),"light"===t.game.theme?100:0}})},Ht=Gt,Nt=(n("40fb"),Object(l["a"])(Ht,Bt,$t,!1,null,null,null));Nt.options.__file="History.vue";var Rt=Nt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view inventory"},[n("h2",[t._v("Inventory")]),n("div",{staticClass:"content"},[t._l(t.inventory,function(e,i){return n("p",{key:i},[n("span",{staticClass:"item-amount"},[t._v(t._s(e))]),n("span",{staticClass:"item-title"},[t._v(t._s(i))])])}),n("p",[n("span",{staticClass:"item-amount"},[t._v(t._s(t.usedSpace)+" / "+t._s(t.$store.state.inventory.space))]),n("span",{staticClass:"item-title"},[t._v("space")])])],2)])},qt=[],Jt={name:"Inventory",computed:Object(C["a"])({inventory:function(){return Object(pt["c"])(Object(pt["b"])(this.$store.state.inventory),["usd","btc","space"])}},Object(o["c"])(["watt","usedSpace"]))},Yt=Jt,Lt=(n("ed68"),Object(l["a"])(Yt,Ft,qt,!1,null,null,null));Lt.options.__file="Inventory.vue";var zt=Lt.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view technology"},[n("h2",[t._v("Technology")]),t._l(t.technology,function(e,i){return n("p",{key:i},[t._v(t._s(i)+": "+t._s(e))])})],2)},Kt=[],Vt={name:"Technology",data:function(){return Ut["a"]},computed:Object(o["e"])({technology:function(t){return Object(pt["b"])(t.technology)}})},Qt=Vt,Xt=(n("47df"),Object(l["a"])(Qt,Wt,Kt,!1,null,null,null));Xt.options.__file="Technology.vue";var Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.achievements.firstMiner?n("div",{staticClass:"view deployment"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h4",[t._v("Space")]),n("div",{staticClass:"stats"},[t._v(t._s(t.usedSpace)+" / "+t._s(t.totalSpace))])]),n("div",{staticClass:"col-6"},[n("h4",[t._v("GPU Slots")]),n("div",{staticClass:"stats"},[t._v(t._s(t.gpusDeployed)+" / "+t._s(t.gpuSlots))])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h4",[t._v("Monthly Rent")]),n("div",{staticClass:"stats danger"},[t._v("$"+t._s(t.monthlyRental.toFixed(2)))])]),n("div",{staticClass:"col-6"},[n("h4",[t._v("Current Utility Bill")]),n("div",{staticClass:"stats danger"},[t._v("$"+t._s(t.utilityBill.toFixed(2))+" USD")])])]),n("Action",{attrs:{duration:t.contracts.flat.duration,enabled:!0,action:t.rentSpace,title:JSON.stringify(t.contracts.flat,null,4),context:"flat"}},[t._v("Rent a flat")]),t._m(0),t._l(t.miners,function(e){var i=e.id,r=e.title,a=e.stock,o=e.deployed,s=e.hashrate;return a>0?n("div",{key:i,staticClass:"row"},[n("div",{staticClass:"col-4"},[n("div",{staticClass:"stats"},[t._v(t._s(r))])]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"stats"},[t._v(t._s(o)+" / "+t._s(a))])]),n("div",{staticClass:"col-4"},[t._v("\n      "+t._s(s)+"\n      ")])]):t._e()})],2):t._e()},ee=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("h4",[t._v("Device")])]),n("div",{staticClass:"col-4"},[n("h4",[t._v("Mining")])]),n("div",{staticClass:"col-4"},[n("h4",[t._v("Status")])])])}],ne={flat:{title:"small flat",duration:1*pt["a"],rentalPrice:800,space:10},office:{title:"office",duration:20*pt["a"],rentalPrice:5e3,space:50},datacenter:{title:"datacenter",duration:30*pt["a"],rentalPrice:2e4,space:300}},ie=ne,re=ot()({unit:"H/s"}),ae={name:"Deployment",components:{Action:_t},computed:Object(C["a"])({},Object(o["e"])({achievements:function(t){return t.achievements},space:function(t){return t.inventory.space},contracts:function(t){return ie},miners:function(t,e){return e.miners.map(function(t){return{id:t,title:kt[t].title,stock:e.inventory[t],deployed:e.deployments[t],hashrate:re(e.deviceTypeHashrate[t]),duration:kt[t].deployDuration||1*pt["a"]}})},utilityBill:function(t){return t.accounting.utility}}),Object(o["c"])(["totalSpace","usedSpace","gpuSlots","gpusDeployed","monthlyRental","monthlyUtilityBill","deployments","inventory","deviceTypeHashrate"])),methods:Object(o["b"])(["rentSpace","deploy"])},oe=ae,se=(n("7bb5"),Object(l["a"])(oe,te,ee,!1,null,null,null));se.options.__file="Deployment.vue";var ce=se.exports,ue={name:"Game",components:{Production:Dt,Modal:w,History:Rt,Mining:ft,Inventory:zt,Technology:Zt,Research:Et,Deployment:ce},state:function(){return{clock:null}},computed:Object(o["e"])({hashrate:function(t,e){return e.hashrate},gamePaused:function(t){var e=t.game.gamePaused;console.log("[Game] state:",e?"running":"paused")}}),created:function(){var t=this;this.$store.dispatch("beginningOfMonth");var e=function(e){return t.$store.dispatch("tick",e)},n=this.$store.state.game.frameDuration;this.clock=B.create(n,e)},mounted:function(){},beforeDestroy:function(){console.log("game clock should stop"),B.destroy(this.clock)}},le=ue,fe=(n("568f"),Object(l["a"])(le,m,v,!1,null,null,null));fe.options.__file="Game.vue";var de=fe.exports;i["a"].use(h["a"]);var he=new h["a"]({mode:"history",base:"/bitcoin-clicker/",routes:[{path:"/",name:"game",component:de},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"/achievements",name:"achievements",component:function(){return n.e("chunk-2d838918").then(n.bind(null,"4e79"))}}]}),me=1380585600,ve=20,pe={state:{time:me,speed:1*pt["a"],frameDuration:1e3,history:[],theme:"dark"},mutations:{log:function(t,e){t.history.splice(0,0,{id:Date.now(),msg:e});var n=t.history.length;n>8&&t.history.splice(n-1,1)},setTheme:function(t,e){t.theme=e},updateGameTime:function(t,e){t.time=e}},getters:{theme:function(t){return t.theme||"light"}},actions:{tick:function(t,e){var n=t.commit,i=t.state,r=(t.getters,i.frameDuration),a=i.speed,o=e/r*a,s=i.time+o,c=ge(i.time,s),u=c.newMonth;u&&this.dispatch("endOfMonth"),n("updateGameTime",s),this.dispatch("mine",o),u&&this.dispatch("beginningOfMonth")},work:function(t,e){t.commit;var n=t.state;return new Promise(function(t){var i=B.create(ve,function(){e.millis+=ve/1e3*n.speed,e.millis>=e.duration&&(e.millis=1e16,B.destroy(i),t())})})}}};function ge(t,e){var n=new Date(1e3*t),i=new Date(1e3*e);return{newDay:n.getDay()!==i.getDay(),newMonth:n.getMonth()!==i.getMonth(),newYear:n.getYear()!==i.getYear(),newHalfing:!1}}var be=pe,ye={state:{show:!1,title:"asdf",message:"foo",footer:""},mutations:{showModal:function(t,e){var n=e.title,i=e.message;console.log("[modal] showModal",n),t.title=n,t.message=i,t.show=!0},hideModal:function(t){console.log("[modal] hideModal"),t.title="",t.message="",t.show=!1}}},_e=ye,we=(n("7872"),n("ed50"),n("f576"),1231006505);function ke(t){return Math.floor((t-we)/600)}function Oe(t){return 5e4*Math.exp(63786e-9*t)}var Ce=n("1a39"),je=n.n(Ce),Se=function(t){return je()(t,"H/s",3)},xe=.19,De={state:{difficulty:1,chainheight:25e4,networkHashrate:0,kWhPrice:xe,joules:0},getters:{foreignHashrate:function(t,e,n){n.game;return Oe(e.chainheight)},networkHashrate:function(t,e){return e.hashrate+e.foreignHashrate},chainheight:function(t,e,n){var i=n.game;return ke(i.time)},hashrateText:function(t,e){var n=e.hashrate;return Se(n)},dailyUtilityBill:function(t,e){return e.watt/1e3*xe*24},monthlyUtilityBill:function(t,e){return e.dailyUtilityBill/12*356}},mutations:{consumeEnergy:function(t,e){t.joules+=e}},actions:{mine:function(t,e){var n=t.commit,i=(t.state,t.getters),r=e/600,a=i.hashrate/i.networkHashrate,o=12.5*a*r;n("addToInventory",{item:"btc",amount:o}),n("consumeEnergy",i.watt*e),n("chargeCosts",{position:"utility",amount:i.watt/1e3*e/3600*xe})}}},Pe=De,Te=n("70cb"),Ue={state:{btcInUSD:6.28},getters:{btcInUSD:function(t,e,n){return Object(Te["btcPrice"])(n.game.time)},btcInUsdDerivation:function(t,e,n){var i=n.game.speed,r=n.game.time;return Object(Te["btcPrice"])(r)-Object(Te["btcPrice"])(r-i)}},actions:{sellBtc:function(t,e){var n=t.commit,i=t.state,r=t.getters;if(e>i.btc||e<=0)return console.log("Won't sell %s BTC!",e);n("addBtc",-e),n("addUsd",e*r.btcInUSD)}}},Me=Ue;function Ie(t,e){return Object.keys(t).filter(function(t){return kt[t]}).reduce(function(n,i){return n+t[i]*(kt[i][e]||0)},0)}function Ae(t,e){return Object.keys(t).filter(function(t){return t in kt&&e in kt[t]})}var Ee={state:Object(C["a"])({},Object.keys(kt).reduce(function(t,e){return t[e]=0,t},{}),{usd:2e3,space:10,flat:1,office:0,datacenter:0,btc:0,computer:0}),getters:{inventory:function(t){return t},dailyExpenses:function(t,e){return e.dailyRental+e.dailyUtilityBill},monthlyExpenses:function(t,e){return e.monthlyRental+e.monthlyUtilityBill},watt:function(t){return Ie(t,"watt")},gpuSlots:function(t,e){return Ae(t,"gpuSlots").reduce(function(t,n){var i=e.deployments[n]||0;return t+kt[n].gpuSlots*i},0)},usedSpace:function(t){return Ie(t,"space")},totalSpace:function(t){return Object.keys(ie).reduce(function(e,n){return e+ie[n].space*t[n]},0)},miners:function(t){return Ae(t,"hps")},isAvailable:function(t,e,n){var i=n.technology;return Object.keys(kt).reduce(function(t,e){var n=kt[e];return void 0===n.tech?t[e]=!0:t[e]=Object.keys(n.tech).every(function(t){var e=i[t];return e>=n.tech[t]}),t},{})},isAffordable:function(t,e){var n=e.usedSpace,i=e.totalSpace,r=e.gpuSlots;return Object.keys(kt).reduce(function(e,a){return e[a]=kt[a].buyPrice<=t.usd&&i>=n+(kt[a].space||0)&&("gpu"!==a||r>t.gpu),e},{})}},mutations:{addToInventory:function(t,e){var n=e.item,i=e.amount,r=void 0===i?1:i;return t[n]+=r},buy:function(t,e){var n=e.item,i=e.amount,r=e.price;t[n]+=i,t["usd"]-=r},sell:function(t,e){var n=e.item,i=e.amount,r=e.price;t[n]-=i,t["usd"]+=r*i}},actions:{buy:function(t,e){var n=t.commit,i=(t.state,e.context);this.dispatch("work",e).then(function(){var t={item:e.context,price:kt[i].buyPrice,amount:1};n("buy",t),n("log","bought ".concat(t.amount," ").concat(t.item))})},sell:function(t,e){var n=t.commit,i=t.state,r=t.getters,a=e.context;this.dispatch("work",e).then(function(){var t={item:e.context,price:kt[a].sellPrice,amount:i.btc};"btc"===t.item&&(t.price=r.btcInUSD),n("sell",t),n("log","sold ".concat(t.amount.toFixed(4)," ").concat(t.item.toUpperCase()," for $").concat((t.price*t.amount).toFixed(2)," USD"))})}}},Be=Ee,$e={state:{utility:0,rent:0,salary:0},actions:{endOfMonth:function(t){var e=t.state,n=t.commit,i=Object.keys(e).reduce(function(t,n){return t+e[n]},0);n("addToInventory",{item:"usd",amount:-i}),n("clearCharges")},beginningOfMonth:function(t){t.state,t.commit}},mutations:{chargeCosts:function(t,e){var n=e.position,i=e.amount;if(!n||!(n in t))throw new Error("Unknown accounting position: ".concat(n));if("number"!==typeof i)throw new Error("amount must be a number!");t[n]+=i},clearCharges:function(t){for(var e in t)t[e]=0}}},Ge=$e,He={state:Object(C["a"])({},Object.keys(Ut["a"]).reduce(function(t,e){return t[e]=0,t},{})),mutations:{addToTechnology:function(t,e){var n=e.item,i=e.amount;return t[n]+=i},research:function(t,e){var n=t[e]++;if(Ut["a"][e][n].effect){var i=Ut["a"][e][n].effect;for(var r in i)for(var a in i[r]){var o=kt[r][a];kt[r][a]*=i[r][a],console.log("[technology] ended research ".concat(e," level ").concat(n," changed ").concat(r,".").concat(a," from ").concat(o," to ").concat(kt[r][a]))}}}},actions:{research:function(t,e){var n=t.commit,i=t.state,r=e.context,a=i[r];this.dispatch("work",e).then(function(){n("research",r),n("log","researched: ".concat(Ut["a"][r][a].title," (").concat(a+1,")"))})}}},Ne=He,Re=n("a322");function Fe(t,e){return Object.keys(t).filter(function(t){return t in kt&&e in kt[t]})}var qe={state:Object(C["a"])({},Fe(kt,"hps").reduce(function(t,e){return Object(C["a"])({},t,Object(Re["a"])({},e,0))},{}),Fe(kt,"gpuSlots").reduce(function(t,e){return Object(C["a"])({},t,Object(Re["a"])({},e,0))},{})),getters:{deviceTypeHashrate:function(t,e){return Object.keys(t).reduce(function(e,n){return e[n]=t[n]*kt[n].hps,e},{})},hashrate:function(t,e){return Object.keys(t).reduce(function(t,n){return t+(e.deviceTypeHashrate[n]||0)},0)},deployments:function(t){return t},gpusDeployed:function(t,e,n){return t.gpu},monthlyRental:function(t,e,n){return Object.keys(ie).reduce(function(t,e){var i=n.inventory[e],r=ie[e].rentalPrice;return t+i*r},0)},dailyRental:function(t,e){return e.monthlyRental/356*12}},mutations:{deploy:function(t,e){t[e]++}},actions:{deploy:function(t,e){var n=t.commit,i=(t.state,e.context);this.dispatch("work",e).then(function(){n("deploy",i),n("log","deployed ".concat(i))})},rentSpace:function(t,e){var n=t.commit,i=(t.state,e.context);this.dispatch("work",e).then(function(){n("addToInventory",{item:i}),n("log","rented ".concat(i))})},beginningOfMonth:function(t){var e=t.getters,n=t.commit;n("chargeCosts",{position:"rent",amount:e.monthlyRental})}}},Je=qe;i["a"].use(o["a"]);var Ye=new o["a"].Store({modules:{game:be,modal:_e,mining:Pe,exchange:Me,inventory:Be,accounting:Ge,technology:Ne,deployment:Je,achievements:s["a"]},strict:!1}),Le=n("9483");Object(Le["a"])("".concat("/bitcoin-clicker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ze=n("9f7b"),We=n("0284"),Ke=n.n(We);i["a"].use(ze["a"]),i["a"].use(Ke.a,{id:"UA-126957541-1",debug:{sendHitTask:!0},router:he}),i["a"].config.productionTip=!1,new i["a"]({router:he,store:Ye,render:function(t){return t(d)}}).$mount("#app")},"5bf1":function(t,e,n){"use strict";var i=n("3402"),r=n.n(i);r.a},"5c0b":function(t,e,n){"use strict";var i=n("2856"),r=n.n(i);r.a},"600c":function(t,e,n){},6650:function(t,e,n){},"70cb":function(t,e){var n=1279411200,i=1537292940,r=[.13,.72,8.2,29.6,10.94,7.11,6.5,13.5,13.7,230,154.2,200.62,1147.25,703.57,665.73,513.47,376.04,290.38,309.98,465.5,453.37,768.24,742.46,1129.87,2055.62,4648.13,16858.02,19343.04,9826.6,8397.63],a=(i-n)/(r.length-1);function o(t){var e=t-n,i=Math.floor(e/a),o=e/a-i,s=1-o,c=r[i],u=r[i+1];return c*s+u*o}function s(t){return t<n?r[0]:t>i?r[r.length-1]+(t-i)/2500:o(t)}function c(t){return t<n?0:t>i?(t-i)/2500:o(t)-o(t-86400)}t.exports={btcPrice:s,btcPriceDerivation:c}},"7bb5":function(t,e,n){"use strict";var i=n("ea9b"),r=n.n(i);r.a},"800f":function(t,e,n){},9224:function(t){t.exports={a:"0.4.0"}},a4e1:function(t,e,n){"use strict";var i=n("a8f7"),r=n.n(i);r.a},a612:function(t,e,n){"use strict";var i=n("3ef3"),r=n.n(i);r.a},a68d:function(t,e,n){"use strict";var i=n("e7fb"),r=n.n(i);r.a},a8f7:function(t,e,n){},bc97:function(t,e,n){"use strict";var i=n("3779"),r=n.n(i);r.a},bff9:function(t,e,n){},e2fd:function(t,e,n){},e420:function(t,e,n){},e7fb:function(t,e,n){},ea9b:function(t,e,n){},ed68:function(t,e,n){"use strict";var i=n("800f"),r=n.n(i);r.a},f44c:function(t,e,n){},f644:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i});n("ac6a"),n("456d");var i=86400;function r(t,e){return Object.keys(t).filter(e).reduce(function(e,n){return e[n]=t[n],e},{})}function a(t){return r(t,function(e){return t[e]})}function o(t,e){return r(t,function(t){return e.indexOf(t)<0})}}});
//# sourceMappingURL=app.45755b84.js.map