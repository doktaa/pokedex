(this["webpackJsonpapi-practice"]=this["webpackJsonpapi-practice"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setPokemon",(function(){return m})),n.d(a,"setSelectedMove",(function(){return f})),n.d(a,"closeMove",(function(){return b})),n.d(a,"imgNext",(function(){return g})),n.d(a,"imgPrev",(function(){return v})),n.d(a,"setEvo",(function(){return h}));var c=n(1),r=n.n(c),o=n(8),i=n.n(o),s=(n(25),n(2)),l=n.n(s),d=n(6),u=(n.p,n(27),n(3)),p=n(4),m=function(e){return function(t){t({type:"setPokemon",payload:e})}},f=function(e){return function(t){t({type:"setSelectedMove",payload:e})}},b=function(){return function(e){e({type:"closeMove",payload:null})}},g=function(e){return function(t){t({type:"next",payload:e})}},v=function(e){return function(t){t({type:"prev",payload:e})}},h=function(e){return function(t){t({type:"setEvo",payload:e})}},j=n.p+"static/media/left-arrow.9238e593.png",x=n.p+"static/media/right-arrow.bdbba4bf.png",y=n(0),O=function(e){var t=Object(u.c)((function(e){return e.imgCntr})),n=Object(u.b)(),c=Object(p.b)(a,n),r=c.imgNext,o=c.imgPrev,i=[];function s(t){for(var n=e,a=0,c=(t=t.split(".")).length;a<c;a++)n=n[t[a]];return n}console.log("props",e);for(var l=["data.other.official-artwork.front_default","data.back_default","data.back_female","data.back_shiny","data.back_shiny_female","data.front_default","data.front_female","data.front_shiny","data.front_shiny_female"],d=0;d<l.length;d++){var m=s(l[d]);void 0!==m&&null!=m&&i.push(m)}return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"w-full bg-gray-100 border-8 border-gray-400 rounded-3xl",src:i[t]}),Object(y.jsx)("img",{className:"h-24 inline-block cursor-pointer transform hover:scale-110 m-4",src:j,onClick:function(){return o(i.length)}}),Object(y.jsx)("img",{className:"h-24 inline-block cursor-pointer transform hover:scale-110 m-4",src:x,onClick:function(){return r(i.length)}})]})},k=n.p+"static/media/bug.204df919.svg",w=n.p+"static/media/dark.27fdc7ed.svg",N=n.p+"static/media/dragon.9d32757b.svg",E=n.p+"static/media/electric.bc35c5a3.svg",_=n.p+"static/media/fairy.767c2f56.svg",C=n.p+"static/media/fighting.f20d1bd2.svg",P=n.p+"static/media/fire.e0bd7fca.svg",M=n.p+"static/media/flying.d1778503.svg",F=n.p+"static/media/ghost.ddf26831.svg",I=n.p+"static/media/grass.e09623e3.svg",L=n.p+"static/media/ground.e567f4fc.svg",S=n.p+"static/media/ice.cd2f9043.svg",B=n.p+"static/media/normal.2ba66dd5.svg",D=n.p+"static/media/poison.43956925.svg",G=n.p+"static/media/psychic.67439878.svg",T=[{id:1,name:"Normal",code:"normal",url:{normal:B}},{id:2,name:"Fighting",code:"fighting",url:{fighting:C}},{id:3,name:"Flying",code:"flying",url:{flying:M}},{id:4,name:"Poison",code:"poison",url:{poison:D}},{id:5,name:"Ground",code:"ground",url:{ground:L}},{id:6,name:"Rock",code:"rock",url:{rock:n.p+"static/media/rock.61a8428d.svg"}},{id:7,name:"Bug",code:"bug",url:{bug:k}},{id:8,name:"Ghost",code:"ghost",url:{ghost:F}},{id:9,name:"Steel",code:"steel",url:{steel:n.p+"static/media/steel.cb91a92a.svg"}},{id:10,name:"Fire",code:"fire",url:{fire:P}},{id:11,name:"Water",code:"water",url:{water:n.p+"static/media/water.b6d13329.svg"}},{id:12,name:"Grass",code:"grass",url:{grass:I}},{id:13,name:"Electric",code:"electric",url:{electric:E}},{id:14,name:"Psychic",code:"psychic",url:{psychic:G}},{id:15,name:"Ice",code:"ice",url:{ice:S}},{id:16,name:"Dragon",code:"dragon",url:{dragon:N}},{id:17,name:"Dark",code:"dark",url:{dark:w}},{id:18,name:"Fairy",code:"fairy",url:{fairy:_}}],U=function(){var e=Object(u.c)((function(e){return e.evo})),t=n(7),c=Object(u.b)(),r="h-40 inline-block transform hover:scale-110 cursor-pointer",o=Object(p.b)(a,c).setPokemon,i=null!=e.prevEvo,s=e.nextEvo.length>0;function m(e){return f.apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get("https://pokeapi.co/api/v2/pokemon/".concat(n));case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("2",e),Object(y.jsxs)("table",{className:"w-10/12 mx-auto border-2 border-black bg-gray-100 mb-5",children:[Object(y.jsxs)("tr",{children:[i&&Object(y.jsx)("td",{children:"Evolves From"}),s&&Object(y.jsx)("td",{children:"Evolves To"})]}),Object(y.jsxs)("tr",{children:[i&&Object(y.jsx)("td",{children:Object(y.jsx)("img",{className:r,src:e.prevEvo.img,alt:e.prevEvo.name,onClick:function(){m(e.prevEvo.name)}})}),s&&Object(y.jsx)("td",{children:e.nextEvo.map((function(e){return Object(y.jsx)("img",{className:r,src:e.img,alt:e.name,onClick:function(){m(e.name)}})}))})]})]})},A=function(){var e=Object(u.c)((function(e){return e.pokemon})),t=Object(u.b)(),c=Object(p.b)(a,t).setEvo,r=e.data.stats,o=T,i=[];e.data.types.forEach((function(e){console.log("poketype",e.type.name),console.log("uwu",o.filter((function(t){return t.code===e.type.name}))),o.filter((function(t){return t.code===e.type.name})).map((function(e){i.push({url:e.url,code:e.code})}))})),console.log("typelisturl",i);var s={prevEvo:null,nextEvo:[]},m=n(7);function f(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t);case 2:return n=e.sent,h(n.data.chain),e.next=7,g();case 7:console.log(s),c(s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<s.nextEvo.length)){e.next=10;break}return e.next=4,m.get("https://pokeapi.co/api/v2/pokemon/".concat(s.nextEvo[t].name));case 4:n=e.sent,console.log("repsonse testing",n),null!=n&&(s.nextEvo[t].img=n.data.sprites.other["official-artwork"].front_default);case 7:t++,e.next=1;break;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(t){t.species.name===e.data.species.name?s.nextEvo=t.evolves_to.map((function(e){return{name:e.species.name,img:null}})):t.evolves_to.map((function(e){return h(e)}))}function j(){return(j=Object(d.a)(l.a.mark((function e(t,n,a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("".concat(n).concat(t));case 2:null!=(c=e.sent)&&(s.prevEvo={name:t,img:c.data.sprites.other["official-artwork"].front_default}),f(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return m.get(e.data.species.url).then((function(e){null!=e.data.evolves_from_species?(console.log("repsonse debug",e),function(e,t,n){j.apply(this,arguments)}(e.data.evolves_from_species.name,"https://pokeapi.co/api/v2/pokemon/",e.data.evolution_chain.url)):f(e.data.evolution_chain.url)})).catch((function(e){console.log("error",e)})),Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{className:"mt-3 text-6xl tracking-wide",children:e.data.species.name.toUpperCase()}),Object(y.jsx)("div",{className:"",children:i.map((function(e){return Object(y.jsx)("img",{title:e.code,src:e.url[e.code],className:"icon-poke inline-block mx-2 my-4 h-20 object-contain "+e.code})}))}),Object(y.jsx)("div",{className:"grid grid-cols-2 gap-2 h-48",children:r.map((function(e){return Object(y.jsxs)("div",{className:"text-3xl",children:[e.stat.name.replace("-"," ").toUpperCase()," : ",e.base_stat]})}))}),Object(y.jsx)(U,{})]})},J=function(e){var t=e.data;return Object(y.jsxs)("div",{className:"fixed z-50 top-2/4 bg-white w-4/5 lg:w-1/5 mx-auto inset-x-0 p-8 "+(null!=e.data?"visible":"invisible"),children:[Object(y.jsxs)("p",{children:["Move: ",null!=t?t.name:""]}),Object(y.jsxs)("p",{children:["Power: ",null!=t?t.power:""]}),Object(y.jsxs)("p",{children:["PP: ",null!=t?t.pp:""]}),Object(y.jsxs)("p",{children:["Accuracy: ",null!=t?t.accuracy:""]}),Object(y.jsx)("button",{onClick:e.clickfunc,children:"Close"})]})},z=function(e){var t=Object(u.c)((function(e){return e.move})),c=Object(u.b)(),r=Object(p.b)(a,c).setSelectedMove,o=e,i=n(7);function s(){return(s=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(t);case 2:n=e.sent,r(n.data),console.log("move click",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(y.jsxs)("div",{children:[Object(y.jsx)(J,{data:t,clickfunc:function(){r(null)}}),Object(y.jsx)("table",{className:"table-auto w-full",children:o.data.map((function(e,t){return Object(y.jsx)("tr",{className:"cursor-pointer hover:bg-gray-500 ".concat(t%2==0?"bg-gray-300":"bg-gray-200"),children:Object(y.jsx)("td",{onClick:function(){return function(e){return s.apply(this,arguments)}(e.url)},children:e.name.replace("-"," ").toUpperCase()})})}))})]})},R=function(e){var t=e.data;return Object(y.jsxs)("div",{className:"font-sans",children:[Object(y.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-72",children:[Object(y.jsx)("div",{children:Object(y.jsx)(O,{data:t.sprites})}),Object(y.jsx)("div",{className:"col-span-2 bg-gray-50",children:Object(y.jsx)(A,{})})]}),Object(y.jsx)("div",{className:"col-span-3 lg:mx-72 bg-gray-600",children:Object(y.jsx)(z,{data:t.moves.map((function(e){return e.move}))})})]})},W=n.p+"static/media/search.d8392b48.png";var q=function(){var e=Object(u.c)((function(e){return e.pokemon})),t=Object(u.b)(),c=Object(p.b)(a,t),r=c.setPokemon,o=c.setSelectedMove,i="https://pokeapi.co/api/v2/",s=n(7);function m(){return(m=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("".concat(i,"pokemon/").concat(n));case 3:a=t.sent,console.log("wat",a.data),r({isLoaded:!0,data:a.data}),console.log("pokeData...?",e),o(null),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),r({isLoaded:!0,data:null}),o(null),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(y.jsxs)("div",{className:"App bg-red-700",children:[Object(y.jsxs)("div",{className:"h-24 my-8",children:[Object(y.jsx)("input",{id:"searchInput",className:"align-bottom text-center h-full w-3/5 text-3xl rounded-l-full border-4 border-gray-300 border-r-0 inline-block",type:"text"}),Object(y.jsx)("div",{className:"align-bottom pr-0 w-24 h-24 inline-block bg-white py-4 border-4 border-gray-300 border-l-0 rounded-r-full object-contain",children:Object(y.jsx)("img",{src:W,className:" filter hover:brightness-200 cursor-pointer max-w-full max-h-full ",alt:"search",onClick:function(){console.log(),function(e){m.apply(this,arguments)}(""===document.getElementById("searchInput").value.toLowerCase()?"bad result":document.getElementById("searchInput").value.toLowerCase())}})})]}),Object(y.jsx)("div",{children:null!=e?null==e.data?"Not found":Object(y.jsx)(R,{data:e.data}):""})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPokemon":return{isLoaded:t.payload.isLoaded,data:t.payload.data};default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelectedMove":return t.payload;case"closeMove":case"setPokemon":return null;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPokemon":return 0;case"next":return e>=t.payload-1?0:e+1;case"prev":return 0==e?t.payload-1:e-1;default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{prevEvo:null,nextEvo:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setEvo":return t.payload;default:return e}},Y=Object(p.c)({pokemon:K,move:Q,imgCntr:V,evo:X}),Z=n(20),$=Object(p.d)(Y,{},Object(p.a)(Z.a));i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(u.a,{store:$,children:Object(y.jsx)(q,{})})}),document.getElementById("root")),H()}},[[51,1,2]]]);
//# sourceMappingURL=main.83c9d0bb.chunk.js.map