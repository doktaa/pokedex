(this["webpackJsonpapi-practice"]=this["webpackJsonpapi-practice"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setPokemon",(function(){return g})),n.d(a,"setSelectedMove",(function(){return f})),n.d(a,"closeMove",(function(){return m})),n.d(a,"imgNext",(function(){return b})),n.d(a,"imgPrev",(function(){return j}));var c=n(0),r=n.n(c),i=n(6),o=n.n(i),s=(n(25),n(5)),l=n.n(s),d=n(7),u=(n.p,n(27),n(4)),p=n(3),g=function(e){return console.log("setpokemon",e),function(t){t({type:"setPokemon",payload:e})}},f=function(e){return function(t){t({type:"setSelectedMove",payload:e})}},m=function(){return function(e){e({type:"closeMove",payload:null})}},b=function(e){return function(t){t({type:"next",payload:e})}},j=function(e){return function(t){t({type:"prev",payload:e})}},v=n.p+"static/media/left-arrow.9238e593.png",h=n.p+"static/media/right-arrow.bdbba4bf.png",y=n(1),x=function(e){var t=Object(u.c)((function(e){return e.imgCntr})),n=Object(u.b)(),c=Object(p.b)(a,n),r=c.imgNext,i=c.imgPrev,o=[];function s(t){for(var n=e,a=0,c=(t=t.split(".")).length;a<c;a++)n=n[t[a]];return n}console.log("props",e);for(var l=["data.other.official-artwork.front_default","data.back_default","data.back_female","data.back_shiny","data.back_shiny_female","data.front_default","data.front_female","data.front_shiny","data.front_shiny_female"],d=0;d<l.length;d++){var g=s(l[d]);void 0!==g&&null!=g&&o.push(g)}return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"w-full bg-gray-100 border-8 border-gray-400 rounded-3xl",src:o[t]}),Object(y.jsx)("img",{className:"h-24 inline-block",src:v,onClick:function(){return i(o.length)}}),Object(y.jsx)("img",{className:"h-24 inline-block",src:h,onClick:function(){return r(o.length)}})]})},O=n.p+"static/media/bug.204df919.svg",k=n.p+"static/media/dark.27fdc7ed.svg",w=n.p+"static/media/dragon.9d32757b.svg",N=n.p+"static/media/electric.bc35c5a3.svg",P=n.p+"static/media/fairy.767c2f56.svg",C=n.p+"static/media/fighting.f20d1bd2.svg",_=n.p+"static/media/fire.e0bd7fca.svg",M=n.p+"static/media/flying.d1778503.svg",S=n.p+"static/media/ghost.ddf26831.svg",F=n.p+"static/media/grass.e09623e3.svg",I=n.p+"static/media/ground.e567f4fc.svg",L=n.p+"static/media/ice.cd2f9043.svg",B=n.p+"static/media/normal.2ba66dd5.svg",D=n.p+"static/media/poison.43956925.svg",E=n.p+"static/media/psychic.67439878.svg",G=[{id:1,name:"Normal",code:"normal",url:{normal:B}},{id:2,name:"Fighting",code:"fighting",url:{fighting:C}},{id:3,name:"Flying",code:"flying",url:{flying:M}},{id:4,name:"Poison",code:"poison",url:{poison:D}},{id:5,name:"Ground",code:"ground",url:{ground:I}},{id:6,name:"Rock",code:"rock",url:{rock:n.p+"static/media/rock.61a8428d.svg"}},{id:7,name:"Bug",code:"bug",url:{bug:O}},{id:8,name:"Ghost",code:"ghost",url:{ghost:S}},{id:9,name:"Steel",code:"steel",url:{steel:n.p+"static/media/steel.cb91a92a.svg"}},{id:10,name:"Fire",code:"fire",url:{fire:_}},{id:11,name:"Water",code:"water",url:{water:n.p+"static/media/water.b6d13329.svg"}},{id:12,name:"Grass",code:"grass",url:{grass:F}},{id:13,name:"Electric",code:"electric",url:{electric:N}},{id:14,name:"Psychic",code:"psychic",url:{psychic:E}},{id:15,name:"Ice",code:"ice",url:{ice:L}},{id:16,name:"Dragon",code:"dragon",url:{dragon:w}},{id:17,name:"Dark",code:"dark",url:{dark:k}},{id:18,name:"Fairy",code:"fairy",url:{fairy:P}}],A=function(e){var t=e.data,n=e.data.stats,a=G;console.log("typeobj",G);var c=[];return t.types.forEach((function(e){console.log("poketype",e.type.name),console.log("uwu",a.filter((function(t){return t.code===e.type.name}))),a.filter((function(t){return t.code===e.type.name})).map((function(e){c.push({url:e.url,code:e.code})}))})),console.log("typelisturl",c),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"",children:c.map((function(e){return Object(y.jsx)("img",{title:e.code,src:e.url[e.code],className:"icon-poke inline-block mx-2 my-4 h-20 object-contain "+e.code})}))}),Object(y.jsx)("div",{className:"grid grid-cols-2 gap-2 h-48",children:n.map((function(e){return Object(y.jsxs)("div",{children:[e.stat.name.replace("-"," ").toUpperCase()," : ",e.base_stat]})}))})]})},J=function(e){var t=e.data;return Object(y.jsxs)("div",{className:"fixed z-50 top-2/4 bg-white w-4/5 lg:w-1/5 mx-auto inset-x-0 p-8 "+(null!=e.data?"visible":"invisible"),children:[Object(y.jsxs)("p",{children:["Move: ",null!=t?t.name:""]}),Object(y.jsxs)("p",{children:["Power: ",null!=t?t.power:""]}),Object(y.jsxs)("p",{children:["PP: ",null!=t?t.pp:""]}),Object(y.jsxs)("p",{children:["Accuracy: ",null!=t?t.accuracy:""]}),Object(y.jsx)("button",{onClick:e.clickfunc,children:"Close"})]})},T=function(e){var t=Object(u.c)((function(e){return e.move})),c=Object(u.b)(),r=Object(p.b)(a,c).setSelectedMove,i=e,o=n(11);function s(){return(s=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get(t);case 2:n=e.sent,r(n.data),console.log("move click",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(y.jsxs)("div",{children:[Object(y.jsx)(J,{data:t,clickfunc:function(){r(null)}}),Object(y.jsx)("table",{className:"table-auto w-full",children:i.data.map((function(e,t){return Object(y.jsx)("tr",{className:""+t%2==0?"bg-gray-300":"bg-gray-200",children:Object(y.jsx)("td",{onClick:function(){return function(e){return s.apply(this,arguments)}(e.url)},children:e.name.replace("-"," ").toUpperCase()})})}))})]})},U=function(e){var t=e.data;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-72",children:[Object(y.jsx)("div",{children:Object(y.jsx)(x,{data:t.sprites})}),Object(y.jsx)("div",{className:"col-span-2 bg-gray-50",children:Object(y.jsx)(A,{data:t})})]}),Object(y.jsx)("div",{className:"col-span-3 lg:mx-72 bg-gray-600",children:Object(y.jsx)(T,{data:t.moves.map((function(e){return e.move}))})})]})};var z=function(){var e=Object(u.c)((function(e){return e.pokemon})),t=Object(u.b)(),c=Object(p.b)(a,t),r=c.setPokemon,i=c.setSelectedMove,o="https://pokeapi.co/api/v2/",s=n(11);function g(){return(g=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("".concat(o,"pokemon/").concat(n));case 3:a=t.sent,console.log("wat",a.data),r({isLoaded:!0,data:a.data}),console.log("pokeData...?",e),i(null),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),r({isLoaded:!0,data:null}),i(null),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(y.jsxs)("div",{className:"App bg-red-700",children:[Object(y.jsxs)("div",{className:"h-24 my-8",children:[Object(y.jsx)("input",{id:"searchInput",className:" text-center h-full w-3/5 text-3xl rounded-full border-4 border-gray-300",type:"text"}),Object(y.jsx)("button",{className:"",onClick:function(){console.log(),function(e){g.apply(this,arguments)}(document.getElementById("searchInput").value)},children:"Search"})]}),Object(y.jsx)("div",{children:null!=e?null==e.data?"Not found":Object(y.jsx)(U,{data:e.data}):""})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPokemon":return{isLoaded:t.payload.isLoaded,data:t.payload.data};default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelectedMove":return t.payload;case"closeMove":case"setPokemon":return null;default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPokemon":return 0;case"next":return e>=t.payload-1?0:e+1;case"prev":return 0==e?t.payload-1:e-1;default:return 0}},K=Object(p.c)({pokemon:W,move:q,imgCntr:H}),Q=n(20),V=Object(p.d)(K,{},Object(p.a)(Q.a));o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(u.a,{store:V,children:Object(y.jsx)(z,{})})}),document.getElementById("root")),R()}},[[51,1,2]]]);
//# sourceMappingURL=main.40051e58.chunk.js.map