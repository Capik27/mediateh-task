(function(){"use strict";var e={1742:function(e,t,n){var r=n(9242),a=(n(7658),n(7139)),i=(0,a.MT)({state:{cart:{items:[]}},getters:{},mutations:{addItem(e,t){e.cart.items.push(t)},reset(e){e.cart.items.length=0}},actions:{}}),c=n(3396);function s(e,t,n,r,a,i){const s=(0,c.up)("NavBar"),o=(0,c.up)("ContentLayout");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c.Wm)(s),(0,c.Wm)(o)],64)}const o={class:"navbar"},u={class:"navbar__wrapper"};function d(e,t,n,r,a,i){const s=(0,c.up)("CartLayout");return(0,c.wg)(),(0,c.iD)("header",null,[(0,c._)("div",o,[(0,c._)("div",u,[(0,c.Wm)(s)])])])}var l=n(2268),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB1ZVPbtNAFMa/5z8lYkHMlibBPQHpgrQ70hP0CHAEblA4AcoJgBuUJTsvowQJ34AppIgdLivUsefxxk1S09hp41qV+pOSeS8zyvdm3jc2cN+hReB3n78yoITYJOnsS4SGWAps9QbfmBHmCfNIz6av0QDOIjj/PtmBy7sSKpDTRkM4xUSracwgBZgdNIR39QcCn8j3od/de49amERrPcKvWJUKzAmkDweoA9FT3/f7GjgoFZBGK5LW69kkRA28zuANER0tcmelAMckeRD0A9SB8AzEcaWAySgXaD1+2F5Xpd8d8OLzoLdXsDTJ8eJsuXalAHKVyCDV59ZJJ2UC5PExp3RZlGuiyw2Yvgh8rBTwPKgss72gEBVYO8sQr0yEcqyZ3YG1+gUOGsRLW307MmXVPfirxsqO4oQQG8JkcmMQX/SxVGCOWJVfYEMc8KEd9el0uYPyi0Y0kka9sw7BhsgdevtfXrXQ6+wPxR9DbIQTpbNxhLvErZqQy3Tktrc/+EGHsrPTMdbg9wYv3Ufbx277SWj+/PxcnCs/IvGzn239nmdK/5isfXxLMV/l7HOLwvBuscnlLlJxIu+FKI+ZP+EayKH85opIXPzza2mF++FN1wbhsN7D8bb8A/lln8oc8wxtAAAAAElFTkSuQmCC";const p=e=>((0,c.dD)("data-v-e3d4e770"),e=e(),(0,c.Cn)(),e),m=p((()=>(0,c._)("img",{src:A,class:"cart__icon",alt:"cart"},null,-1))),v={class:"cart__sum"};function _(e,t,n,r,a,i){const s=(0,c.up)("RedBudge");return(0,c.wg)(),(0,c.iD)("div",{class:"cart",onClick:t[0]||(t[0]=(...t)=>e.reset&&e.reset(...t))},[m,(0,c._)("span",v,(0,l.zw)(e.nws(e.sumPrice))+" $",1),(0,c.Wm)(s,{value:e.itemCount},null,8,["value"])])}function g(e){return(new Intl.NumberFormat).format(e)}function f(e,t,n,r,a,i){return(0,c.wg)(),(0,c.iD)("div",{class:(0,l.C_)({budge_cube:"cube"===n.type,budge:"cube"!=n.type})},[(0,c._)("span",null,(0,l.zw)("undefined"!==n.value?n.value:""),1)],2)}var w={name:"RedBudge",props:{value:{required:!1},type:{type:String,required:!1}}},h=n(89);const b=(0,h.Z)(w,[["render",f],["__scopeId","data-v-34998480"]]);var C=b,y=(0,c.aZ)({name:"CartLayout",components:{RedBudge:C},setup(){const e=(0,a.oR)(),t=g,n=()=>{e.commit("reset")},r=(0,c.Fl)((()=>e.state.cart.items.length)),i=(0,c.Fl)((()=>e.state.cart.items.reduce(((e,t)=>t?t.discountPercentage?e+Math.round(t.price-t.discountPercentage*t.price/100):e+Math.round(t.price):e),0)));return{sumPrice:i,itemCount:r,reset:n,nws:t}}});const B=(0,h.Z)(y,[["render",_],["__scopeId","data-v-e3d4e770"]]);var k=B,R={name:"NavBar",components:{CartLayout:k}};const S=(0,h.Z)(R,[["render",d]]);var D=S;const I={class:"container"},P={key:0,class:"content"},E=(0,c._)("h3",{class:"content__title"},"Новинки",-1),x={class:"content__items"},L={key:1,class:"content__load"},O={key:2,class:"content__load"};function Z(e,t,n,r,a,i){const s=(0,c.up)("ItemCard"),o=(0,c.up)("LoadSpinner");return(0,c.wg)(),(0,c.iD)("section",null,[(0,c._)("div",I,[e.items?((0,c.wg)(),(0,c.iD)("div",P,[E,(0,c._)("div",x,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.items,(e=>((0,c.wg)(),(0,c.j4)(s,{key:e.id,item:e},null,8,["item"])))),128))])])):(0,c.kq)("",!0),e.items||e.error?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",L,[(0,c.Wm)(o)])),e.error?((0,c.wg)(),(0,c.iD)("div",O,[(0,c._)("h2",null,(0,l.zw)(e.error),1)])):(0,c.kq)("",!0)])])}var Q=n(4870),F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgBpVLLTcNAEJ3ZhRwiH0wFLCQN0IFNCiBUAFSAqAA6IFQAdGBOHEgwHeA7P3fg8AlISN5hlhhj7LUtkSdZ65198zRvZgBa8DJWwzaOaHpMLpWSKE9hEZHljvT4cF+v+t6/RZBo/5skaKeRV/dgrHQ68im7Tj9Furbix9NakbdJb5c0qbw8gatEoBDBKxADAIpTDc95TGDsDB7OlsxFivSGUIYmMSeUaiSAoZESvw0IuiId5ZX8YDbpHzH9EFpAgAfO4H70x04RxhoHj/nXLb9xdbFGse34d1ExXpmO8cjkCCzQmi7KAlYRMxXujWcTQUTrqCsi2YJlSRRxQ/eMjSxkXTxhCWyZk5NPupuPG3N7qc/Vnc8ZuiJSwfv1+m3dmpumz8a9oFEgCZVL/DVxPkKlkhLnC4OraMFqzvjyAAAAAElFTkSuQmCC";const j=e=>((0,c.dD)("data-v-6f498e25"),e=e(),(0,c.Cn)(),e),H={key:0,class:"card"},z={class:"card__wrapper"},M={class:"card__preview"},T=["src","alt"],N={class:"card__rating"},Y={class:"card__rating_stars"},U={class:"card__rating_stars-number"},X={class:"card__title"},W={class:"card__price-info"},K={class:"card__price-info_discount-wrapper"},q={key:0,class:"card__price-info_discount"},V={class:"card__price-info_discount_old-price"},G=j((()=>(0,c._)("div",{class:"card__price-info_discount-line"},null,-1)));function J(e,t,n,r,a,i){const s=(0,c.up)("RedBudge"),o=(0,c.up)("BButton");return e.item?((0,c.wg)(),(0,c.iD)("div",H,[(0,c._)("div",z,[(0,c._)("div",M,[(0,c._)("img",{src:e.item.thumbnail,alt:e.item.title},null,8,T)]),(0,c._)("div",N,[(0,c._)("div",Y,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(new Array(e.itemRating),((e,t)=>((0,c.wg)(),(0,c.iD)("img",{src:F,alt:"star",key:t})))),128))]),(0,c._)("span",U,(0,l.zw)(e.itemRating),1)]),(0,c._)("div",X,(0,l.zw)(e.item.title),1),(0,c._)("div",W,[(0,c._)("div",K,[e.item.discountPercentage>0?((0,c.wg)(),(0,c.iD)("div",q,[(0,c._)("div",V,[(0,c._)("span",null,(0,l.zw)(e.nws(Math.round(e.item.price)))+" $",1),G]),(0,c.Wm)(s,{value:`– ${Math.round(e.item.discountPercentage)}%`,type:"cube"},null,8,["value"])])):(0,c.kq)("",!0)]),(0,c._)("div",{class:(0,l.C_)(["card__price-info_current-price",{"card__price-info_current-price_hot":e.item.discountPercentage}])},(0,l.zw)(e.nws(e.currentPrice))+" $ ",3)]),(0,c.Wm)(o,{value:"В корзину",class:"card_buybutton",onClick:e.addItem},null,8,["onClick"])])])):(0,c.kq)("",!0)}const $={class:"bbtn"};function ee(e,t,n,r,a,i){return(0,c.wg)(),(0,c.iD)("button",$,(0,l.zw)(n.value),1)}var te={name:"BButton",props:{value:{type:String,required:!1}}};const ne=(0,h.Z)(te,[["render",ee],["__scopeId","data-v-752a3c3f"]]);var re=ne,ae=(0,c.aZ)({name:"ItemCard",components:{BButton:re,RedBudge:C},props:{item:{type:Object,required:!0}},setup(e){const t=(0,a.oR)(),n=(0,c.Fl)((()=>Math.round(e.item.rating))),r=(0,c.Fl)((()=>{let t=e.item.price;return e.item.discountPercentage&&(t=e.item.price-e.item.discountPercentage*e.item.price/100),Math.round(t)})),i=g,s=()=>{t.commit("addItem",e.item)};return{currentPrice:r,itemRating:n,addItem:s,nws:i}}});const ie=(0,h.Z)(ae,[["render",J],["__scopeId","data-v-6f498e25"]]);var ce=ie;const se={class:"loader"};function oe(e,t,n,r,a,i){return(0,c.wg)(),(0,c.iD)("div",se)}var ue={name:"LoadSpinner"};const de=(0,h.Z)(ue,[["render",oe],["__scopeId","data-v-364e00ea"]]);var le=de,Ae=(0,c.aZ)({name:"ContentLayout",components:{ItemCard:ce,LoadSpinner:le},setup(){const e=(0,Q.iH)(),t=(0,Q.iH)(),n=async()=>{const n="https://dummyjson.com/products?limit=10";let r=await fetch(n);if(r.ok){let t=await r.json();t.products[0].discountPercentage=0,t.products[0].title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",t.products[2].discountPercentage=0,t.products[4].title="Супер длинное название, чтобы не влезало в эту сроку, однако этого может не достаточно ;) ",e.value=t.products}else t.value="Error: "+r.status};return(0,c.wF)((()=>{const e=1e3*Math.random();setTimeout((()=>{n()}),e)})),{items:e,error:t}}});const pe=(0,h.Z)(Ae,[["render",Z]]);var me=pe,ve={name:"App",components:{NavBar:D,ContentLayout:me}};const _e=(0,h.Z)(ve,[["render",s]]);var ge=_e;(0,r.ri)(ge).use(i).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var c=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],i=e[d][2];for(var s=!0,o=0;o<r.length;o++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[o])}))?r.splice(o--,1):(s=!1,i<c&&(c=i));if(s){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,c=r[0],s=r[1],o=r[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var d=o(n)}for(t&&t(r);u<c.length;u++)i=c[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkmediateh_task"]=self["webpackChunkmediateh_task"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1742)}));r=n.O(r)})();
//# sourceMappingURL=app.c580d722.js.map