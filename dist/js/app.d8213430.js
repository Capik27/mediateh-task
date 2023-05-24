(function(){"use strict";var t={1813:function(t,e,n){var r=n(9242),a=(n(7658),n(7139)),c=(0,a.MT)({state:{cart:{items:[]}},getters:{},mutations:{addItem(t,e){t.cart.items.push(e)},reset(t){t.cart.items.length=0}},actions:{}}),i=n(3396);function s(t,e,n,r,a,c){const s=(0,i.up)("NavBar"),o=(0,i.up)("ContentLayout");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),(0,i.Wm)(o)],64)}const o={class:"navbar"},u={class:"navbar_wrapper"};function d(t,e,n,r,a,c){const s=(0,i.up)("CartLayout");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("div",o,[(0,i._)("div",u,[(0,i.Wm)(s,{class:"navbar_cart"})])])])}var l=n(2268),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB1ZVPbtNAFMa/5z8lYkHMlibBPQHpgrQ70hP0CHAEblA4AcoJgBuUJTsvowQJ34AppIgdLivUsefxxk1S09hp41qV+pOSeS8zyvdm3jc2cN+hReB3n78yoITYJOnsS4SGWAps9QbfmBHmCfNIz6av0QDOIjj/PtmBy7sSKpDTRkM4xUSracwgBZgdNIR39QcCn8j3od/de49amERrPcKvWJUKzAmkDweoA9FT3/f7GjgoFZBGK5LW69kkRA28zuANER0tcmelAMckeRD0A9SB8AzEcaWAySgXaD1+2F5Xpd8d8OLzoLdXsDTJ8eJsuXalAHKVyCDV59ZJJ2UC5PExp3RZlGuiyw2Yvgh8rBTwPKgss72gEBVYO8sQr0yEcqyZ3YG1+gUOGsRLW307MmXVPfirxsqO4oQQG8JkcmMQX/SxVGCOWJVfYEMc8KEd9el0uYPyi0Y0kka9sw7BhsgdevtfXrXQ6+wPxR9DbIQTpbNxhLvErZqQy3Tktrc/+EGHsrPTMdbg9wYv3Ufbx277SWj+/PxcnCs/IvGzn239nmdK/5isfXxLMV/l7HOLwvBuscnlLlJxIu+FKI+ZP+EayKH85opIXPzza2mF++FN1wbhsN7D8bb8A/lln8oc8wxtAAAAAElFTkSuQmCC";const m=t=>((0,i.dD)("data-v-f3759050"),t=t(),(0,i.Cn)(),t),p=m((()=>(0,i._)("img",{src:A,class:"cart_icon",alt:"cart"},null,-1))),v={class:"cart_sum"};function g(t,e,n,r,a,c){const s=(0,i.up)("RedBudge");return(0,i.wg)(),(0,i.iD)("div",{class:"cart",onClick:e[0]||(e[0]=(...e)=>t.reset&&t.reset(...e))},[p,(0,i._)("span",v,(0,l.zw)(t.sumPrice)+" $",1),(0,i.Wm)(s,{value:t.itemCount},null,8,["value"])])}function f(t,e,n,r,a,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)("cube"===n.type?"budge_cube":"budge")},[(0,i._)("span",null,(0,l.zw)("undefined"!==n.value?n.value:""),1)],2)}var w={name:"RedBudge",props:{value:{required:!1},type:{type:String,required:!1}}},b=n(89);const h=(0,b.Z)(w,[["render",f],["__scopeId","data-v-2c5be992"]]);var _=h,B=(0,i.aZ)({name:"CartLayout",components:{RedBudge:_},setup(){const t=(0,a.oR)(),e=()=>{t.commit("reset")},n=(0,i.Fl)((()=>t.state.cart.items.length)),r=(0,i.Fl)((()=>t.state.cart.items.reduce(((t,e)=>e?e.discountPercentage?t+Math.round(e.price-e.discountPercentage*e.price/100):t+Math.round(e.price):t),0)));return{sumPrice:r,itemCount:n,reset:e}}});const C=(0,b.Z)(B,[["render",g],["__scopeId","data-v-f3759050"]]);var k=C,y={name:"NavBar",components:{CartLayout:k}};const D=(0,b.Z)(y,[["render",d]]);var R=D;const E={class:"container"},S={key:0,class:"content"},x=(0,i._)("h3",{class:"content_title"},"Новинки",-1),I={class:"content_items"},O={key:1,class:"content_load"},P=(0,i._)("div",{class:"loader"},null,-1),Q=[P],Z={key:2};function M(t,e,n,r,a,c){const s=(0,i.up)("ItemCard");return(0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("div",E,[t.items?((0,i.wg)(),(0,i.iD)("div",S,[x,(0,i._)("div",I,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.items,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t.id,item:t},null,8,["item"])))),128))])])):(0,i.kq)("",!0),t.items||t.error?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",O,Q)),t.error?((0,i.wg)(),(0,i.iD)("div",Z,(0,l.zw)(t.error),1)):(0,i.kq)("",!0)])])}var j=n(4870),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgBpVLLTcNAEJ3ZhRwiH0wFLCQN0IFNCiBUAFSAqAA6IFQAdGBOHEgwHeA7P3fg8AlISN5hlhhj7LUtkSdZ65198zRvZgBa8DJWwzaOaHpMLpWSKE9hEZHljvT4cF+v+t6/RZBo/5skaKeRV/dgrHQ68im7Tj9Furbix9NakbdJb5c0qbw8gatEoBDBKxADAIpTDc95TGDsDB7OlsxFivSGUIYmMSeUaiSAoZESvw0IuiId5ZX8YDbpHzH9EFpAgAfO4H70x04RxhoHj/nXLb9xdbFGse34d1ExXpmO8cjkCCzQmi7KAlYRMxXujWcTQUTrqCsi2YJlSRRxQ/eMjSxkXTxhCWyZk5NPupuPG3N7qc/Vnc8ZuiJSwfv1+m3dmpumz8a9oFEgCZVL/DVxPkKlkhLnC4OraMFqzvjyAAAAAElFTkSuQmCC";const z=t=>((0,i.dD)("data-v-df1db914"),t=t(),(0,i.Cn)(),t),L={key:0,class:"card"},T={class:"card_preview"},F=["src","alt"],Y={class:"card_rating"},N={class:"card_stars"},U={class:"card_stars-number"},X={class:"card_title"},K={class:"card_price-info"},W={key:0,class:"card_discount"},q={class:"card_discount-price"},V=z((()=>(0,i._)("div",{class:"card_discount-line"},null,-1))),G={class:"card_price"};function J(t,e,n,r,a,c){const s=(0,i.up)("RedBudge"),o=(0,i.up)("BButton");return t.item?((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",T,[(0,i._)("img",{src:t.item.thumbnail,alt:t.item.title},null,8,F)]),(0,i._)("div",Y,[(0,i._)("div",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(new Array(Math.round(this.item.rating)),((t,e)=>((0,i.wg)(),(0,i.iD)("img",{src:H,alt:"star",key:e})))),128))]),(0,i._)("span",U,(0,l.zw)(Math.round(t.item.rating)),1)]),(0,i._)("div",X,(0,l.zw)(t.item.title),1),(0,i._)("div",K,[t.item.discountPercentage>0?((0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("div",q,[(0,i._)("span",null,(0,l.zw)(Math.round(t.item.price))+" $",1),V]),(0,i.Wm)(s,{value:`-${Math.round(t.item.discountPercentage)}%`,type:"cube"},null,8,["value"])])):(0,i.kq)("",!0),(0,i._)("div",G,(0,l.zw)(t.item.discountPercentage?Math.round(t.item.price-t.item.discountPercentage*t.item.price/100):Math.round(t.item.price))+"  $ ",1)]),(0,i.Wm)(o,{value:"В корзину",class:"card_buybutton",onClick:t.addItem},null,8,["onClick"])])):(0,i.kq)("",!0)}const $={class:"bbtn"};function tt(t,e,n,r,a,c){return(0,i.wg)(),(0,i.iD)("button",$,(0,l.zw)(n.value),1)}var et={name:"BButton",props:{value:{type:String,required:!1}}};const nt=(0,b.Z)(et,[["render",tt],["__scopeId","data-v-023920fc"]]);var rt=nt,at=(0,i.aZ)({name:"ItemCard",components:{BButton:rt,RedBudge:_},props:{item:{type:Object,required:!0}},setup(t){const e=(0,a.oR)(),n=()=>{e.commit("addItem",t.item)};return{addItem:n}}});const ct=(0,b.Z)(at,[["render",J],["__scopeId","data-v-df1db914"]]);var it=ct,st=(0,i.aZ)({name:"ContentLayout",components:{ItemCard:it},setup(){const t=(0,j.iH)(),e=(0,j.iH)(),n=async()=>{const n="https://dummyjson.com/products?limit=10";let r=await fetch(n);if(r.ok){let e=await r.json();t.value=e.products}else e.value="Error: "+r.status};return(0,i.wF)((()=>{const t=1e3*Math.random();setTimeout((()=>{n()}),t)})),{items:t,error:e}}});const ot=(0,b.Z)(st,[["render",M]]);var ut=ot,dt={name:"App",components:{NavBar:R,ContentLayout:ut}};const lt=(0,b.Z)(dt,[["render",s]]);var At=lt;(0,r.ri)(At).use(c).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var c=e[r]={exports:{}};return t[r].call(c.exports,c,c.exports,n),c.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,c){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],c=t[d][2];for(var s=!0,o=0;o<r.length;o++)(!1&c||i>=c)&&Object.keys(n.O).every((function(t){return n.O[t](r[o])}))?r.splice(o--,1):(s=!1,c<i&&(i=c));if(s){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}c=c||0;for(var d=t.length;d>0&&t[d-1][2]>c;d--)t[d]=t[d-1];t[d]=[r,a,c]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,c,i=r[0],s=r[1],o=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(o)var d=o(n)}for(e&&e(r);u<i.length;u++)c=i[u],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(d)},r=self["webpackChunkmediateh_task"]=self["webpackChunkmediateh_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1813)}));r=n.O(r)})();
//# sourceMappingURL=app.d8213430.js.map