var devowlWp_utils;devowlWp_utils=function(){"use strict";var t={579:function(t,e,n){n.r(e),n.d(e,{AbstractCategory:function(){return Pt},AbstractCategoryCollection:function(){return Tt},AbstractPost:function(){return gt},AbstractPostCollection:function(){return xt},BaseOptions:function(){return s},Button:function(){return Ft},ButtonType:function(){return nt},ClientCollection:function(){return ft},ClientModel:function(){return yt},Notice:function(){return At},NoticeType:function(){return Dt},RouteHttpVerb:function(){return d},SuspenseChunkTranslation:function(){return jt},Url:function(){return y()},WP_REST_API_USE_GLOBAL_METHOD:function(){return b},commonRequest:function(){return R},commonUrlBuilder:function(){return k},createContextFactory:function(){return f},createLocalizationFactory:function(){return B},createRequestFactory:function(){return L},getWebpackPublicPath:function(){return l},handleCorrupRestApi:function(){return z},locationRestPluginGet:function(){return rt},parseResult:function(){return N},sprintf:function(){return M},trailingslashit:function(){return u},untrailingslashit:function(){return c},useChunkTranslation:function(){return Lt}}),n(884);var r=n(234),o=n.n(r),a=n(786),i=n.n(a),s=function(){function t(){o()(this,t),this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.publicUrl=void 0,this.chunkFolder=void 0,this.chunks=void 0}return i()(t,null,[{key:"slugCamelCase",value:function(t){return t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}},{key:"getPureSlug",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?t.slugCamelCase(e.slug):e.slug}}]),t}(),c=function t(e){return e.endsWith("/")||e.endsWith("\\")?t(e.slice(0,-1)):e},u=function(t){return"".concat(c(t),"/")},l=function(t){var e=window[t.slug.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))];return"".concat(e.publicUrl).concat(e.chunkFolder,"/")},h=n(804),p=n.n(h);function f(t){var e=(0,h.createContext)(t);return{StoreContext:e,StoreProvider:function(n){var r=n.children;return React.createElement(e.Provider,{value:t},r)},useStores:function(){return(0,h.useContext)(e)}}}var d,v=n(742),y=n.n(v);!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.DELETE="DELETE",t.PATCH="PATCH"}(d||(d={}));var m=n(566),w=n.n(m),b="wp-json/";function k(t){for(var e=t.location,n=t.params,r=void 0===n?{}:n,o=t.nonce,a=void 0===o||o,i=t.options,s=new(y())(i.restRoot,!0),l=s.query,h=l.rest_route||s.pathname,p=[],f=e.path.replace(/:([A-Za-z0-9-_]+)/g,(function(t,e){return p.push(e),r[e]})),v={},m=0,k=Object.keys(r);m<k.length;m++){var g=k[m];-1===p.indexOf(g)&&(v[g]=r[g])}var x=u(h)+c(e.namespace||i.restNamespace)+f,P=new(y())(window.location.href).protocol.slice(0,-1);return s.set("protocol",P),l.rest_route?l.rest_route=x:s.set("pathname",x),a&&i.restNonce&&(l._wpnonce=i.restNonce),s.toString().indexOf(b)>-1&&e.method&&e.method!==d.GET&&(l._method=e.method),s.set("query",w().all([i.restQuery,v,l])).toString()}var g=n(450),x=n.n(g),P=n(526),T=n.n(P),E=n(714),C=n.n(E),S=(n(661),n(689)),_=n.n(S);function N(t,e,n){return O.apply(this,arguments)}function O(){return(O=C()(x().mark((function t(e,n,r){var o,a,i,s,c,u;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.clone(),t.prev=1,t.next=4,n.json();case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,o.text();case 11:if(!(""===(a=t.sent)&&[d.DELETE,d.PUT].indexOf(r)>-1)){t.next=14;break}return t.abrupt("return",void 0);case 14:console.warn("The response of ".concat(e," contains unexpected JSON, try to resolve the JSON line by line..."),{body:a}),s=_()(a.split("\n")),t.prev=16,s.s();case 18:if((c=s.n()).done){t.next=30;break}if(!(u=c.value).startsWith("[")&&!u.startsWith("{")){t.next=28;break}return t.prev=21,t.abrupt("return",JSON.parse(u));case 25:t.prev=25,t.t1=t.catch(21),i=t.t1;case 28:t.next=18;break;case 30:t.next=35;break;case 32:t.prev=32,t.t2=t.catch(16),s.e(t.t2);case 35:return t.prev=35,s.f(),t.finish(35);case 38:throw i;case 39:case"end":return t.stop()}}),t,null,[[1,7],[16,32,35,38],[21,25]])})))).apply(this,arguments)}var D=n(680),F=n.n(D),A="application/json;charset=utf-8";function R(t){return q.apply(this,arguments)}function q(){return(q=C()(x().mark((function t(e){var n,r,o,a,i,s,c,u,l,h,p,f,v,m,g,P,E;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.location,r=e.options,o=e.request,a=e.params,i=e.settings,s=void 0===i?{}:i,c=e.multipart,u=void 0!==c&&c,(l=k({location:n,params:a,nonce:!1,options:r})).indexOf(b)>-1&&n.method&&n.method!==d.GET?s.method=d.POST:s.method=n.method||d.GET,h=new(y())(l,!0),!(p=-1===["HEAD","GET"].indexOf(s.method))&&o&&h.set("query",w()(h.query,o)),p&&(f=u?F()(o,"boolean"==typeof u?{}:u):JSON.stringify(o)),(v=w().all([s,{headers:T()(T()({},"string"==typeof f?{"Content-Type":A}:{}),void 0!==r.restNonce?{"X-WP-Nonce":r.restNonce}:{})}])).body=f,m=h.toString(),t.next=12,window.fetch(m,v);case 12:if((g=t.sent).ok){t.next=27;break}return P=void 0,t.prev=15,t.next=18,N(m,g,n.method);case 18:P=t.sent,t.next=23;break;case 21:t.prev=21,t.t0=t.catch(15);case 23:throw s.method===d.GET&&(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1),(E=g).responseJSON=P,E;case 27:return t.abrupt("return",N(m,g,n.method));case 28:case"end":return t.stop()}}),t,null,[[15,21]])})))).apply(this,arguments)}function L(t){return{urlBuilder:function(e){return k(T()(T()({},e),{},{options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot}}))},request:function(e){return R(T()(T()({},e),{},{options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot}}))}}}var j="notice-corrupt-rest-api";function z(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,setTimeout(C()(x().mark((function n(){var r,o,a,i,s;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=document.getElementById(j))||!(window.detectCorruptRestApiFailed>0||e)){n.next=19;break}o=0,a=Object.keys(t);case 3:if(!(o<a.length)){n.next=19;break}return i=a[o],n.prev=5,n.next=8,t[i]();case 8:n.next=16;break;case 10:n.prev=10,n.t0=n.catch(5),r.style.display="block",(s=document.createElement("li")).innerHTML="- <code>".concat(i,"</code>"),r.childNodes[1].appendChild(s);case 16:o++,n.next=3;break;case 19:case"end":return n.stop()}}),n,null,[[5,10]])}))),1e4)}var U=n(955),G=wp.i18n,W=wp,I=n.n(W);function M(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return G.sprintf.apply(G,[t].concat(n))}function B(t){var e=window.wpi18nLazy;if(e&&e[t]&&I()&&I().i18n){var n,r=_()(e[t]);try{for(r.s();!(n=r.n()).done;){var o=n.value;I().i18n.setLocaleData(o,t)}}catch(t){r.e(t)}finally{r.f()}}return{_n:function(e,n,r){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];return M.apply(void 0,[G._n(e,n,r,t)].concat(a))},_nx:function(e,n,r,o){for(var a=arguments.length,i=new Array(a>4?a-4:0),s=4;s<a;s++)i[s-4]=arguments[s];return M.apply(void 0,[G._nx(e,n,r,o,t)].concat(i))},_x:function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return M.apply(void 0,[G._x(e,n,t)].concat(o))},__:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return M.apply(void 0,[G.__(e,t)].concat(r))},_i:function(t,e){return(0,U.Z)({mixedString:t,components:e})}}}var H,Q,J,Y,Z,V,X,K,$,tt,et,nt,rt={path:"/plugin",method:d.GET},ot=n(985),at=n.n(ot),it=n(552),st=n.n(it),ct=n(830),ut=n.n(ct),lt=n(410),ht=n.n(lt),pt=(n(983),mobx),ft=(Z=Y=function t(){var e=this;o()(this,t),ut()(this,"entries",Q,this),ut()(this,"busy",J,this),this.annotated=void 0,this.get=(0,pt.flow)(x().mark((function t(e){var n,r,o,a,i,s,c,u,l,h,p,f,v;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(n=e||{}).request,o=n.params,a=n.clear,i=void 0===a||a,this.busy=!0,t.prev=2,s=this.annotated,c=s.path,u=s.namespace,t.next=6,this.annotated.request({location:{path:c,method:d.GET,namespace:u},request:r,params:o});case 6:l=t.sent,i&&this.entries.clear(),h=_()(l);try{for(h.s();!(p=h.n()).done;)f=p.value,v=this.instance(f),this.entries.set(v.key,v)}catch(t){h.e(t)}finally{h.f()}t.next=16;break;case 12:throw t.prev=12,t.t0=t.catch(2),console.log(t.t0),t.t0;case 16:return t.prev=16,this.busy=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[2,12,16,19]])}))),this.getSingle=(0,pt.flow)(x().mark((function t(e){var n,r,o,a,i,s,c,u;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.annotated.singlePath){t.next=2;break}throw new Error("There is no getSingle method allowed");case 2:return r=(n=e||{}).request,o=n.params,this.busy=!0,t.prev=4,a=this.annotated,i=a.singlePath,s=a.namespace,t.next=8,this.annotated.request({location:{path:i,method:d.GET,namespace:s},request:r,params:o});case 8:c=t.sent,u=this.instance(c),this.entries.set(u.key,u),t.next=17;break;case 13:throw t.prev=13,t.t0=t.catch(4),console.log(t.t0),t.t0;case 17:return t.prev=17,this.busy=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[4,13,17,20]])}))),setTimeout((function(){e.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)},Y.annotate=function(t){return function(e){return function(e){at()(r,e);var n=st()(r);function r(){var e;o()(this,r);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).annotated=t,e}return r}(e)}},H=Z,Q=ht()(H.prototype,"entries",[pt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),J=ht()(H.prototype,"busy",[pt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),H),dt=n(781),vt=n.n(dt),yt=(et=tt=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o()(this,t),ut()(this,"data",X,this),ut()(this,"collection",K,this),ut()(this,"busy",$,this),this.annotated=void 0,this.persist=(0,pt.flow)(x().mark((function t(e){var n,r,o,a,i,s;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.annotated.create){t.next=2;break}throw new Error("There is no persist method allowed");case 2:return this.busy=!0,t.prev=3,n=this.annotated,r=n.create,o=r.path,a=r.method,i=n.namespace,t.next=7,this.annotated.request({location:{path:o,method:a||d.POST,namespace:i},request:this.transformDataForPersist(),params:e||{}});case 7:s=t.sent,this.fromResponse(s),this.collection.entries.set(this.key,this),this.afterPersist(),t.next=17;break;case 13:throw t.prev=13,t.t0=t.catch(3),console.log(t.t0),t.t0;case 17:return t.prev=17,this.busy=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[3,13,17,20]])}))),this.patch=(0,pt.flow)(x().mark((function t(e){var n,r,o,a,i,s;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.annotated.patch){t.next=2;break}throw new Error("There is no patch method allowed");case 2:return this.busy=!0,t.prev=3,n=this.annotated,r=n.patch,o=r.path,a=r.method,i=n.namespace,t.next=7,this.annotated.request({location:{path:o,method:a||d.PATCH,namespace:i},request:this.transformDataForPatch(),params:T()(T()({},vt()({},this.annotated.keyId,this.key)),e||{})});case 7:s=t.sent,this.fromResponse(s),this.afterPatch(),t.next=16;break;case 12:throw t.prev=12,t.t0=t.catch(3),console.log(t.t0),t.t0;case 16:return t.prev=16,this.busy=!1,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[3,12,16,19]])}))),this.delete=(0,pt.flow)(x().mark((function t(e){var n,r,o,a,i,s;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.annotated.delete){t.next=2;break}throw new Error("There is no delete method allowed");case 2:return this.busy=!0,t.prev=3,n=this.annotated,r=n.delete,o=r.path,a=r.method,i=n.namespace,t.next=7,this.annotated.request({location:{path:o,method:a||d.DELETE,namespace:i},params:T()(T()({},vt()({},this.annotated.keyId,this.key)),e||{})});case 7:return s=t.sent,this.collection.entries.delete(this.key),this.afterDelete(),t.abrupt("return",s);case 13:throw t.prev=13,t.t0=t.catch(3),console.log(t.t0),t.t0;case 17:return t.prev=17,this.busy=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[3,13,17,20]])}))),setTimeout((function(){n.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,pt.runInAction)((function(){n.collection=e,n.data=r}))}return i()(t,[{key:"key",get:function(){var t;return null===(t=this.data)||void 0===t?void 0:t[this.annotated.keyId]}}]),i()(t,[{key:"fromResponse",value:function(t){return(0,pt.set)(this.data,t),this}},{key:"transformDataForPersist",value:function(){return this.data}},{key:"transformDataForPatch",value:function(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}},{key:"afterPersist",value:function(){}},{key:"afterPatch",value:function(){}},{key:"afterDelete",value:function(){}}]),t}(),tt.annotate=function(t){return function(e){return function(e){at()(r,e);var n=st()(r);function r(){var e;o()(this,r);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).annotated=t,e}return r}(e)}},V=et,X=ht()(V.prototype,"data",[pt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),K=ht()(V.prototype,"collection",[pt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=ht()(V.prototype,"busy",[pt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ht()(V.prototype,"key",[pt.computed],Object.getOwnPropertyDescriptor(V.prototype,"key"),V.prototype),V),mt=n(202),wt=n.n(mt),bt=n(807),kt=n.n(bt),gt=function(t){at()(n,t);var e=st()(n);function n(){return o()(this,n),e.apply(this,arguments)}return i()(n,[{key:"transformDataForPersist",value:function(){var t,e,r=T()({},wt()(kt()(n.prototype),"transformDataForPersist",this).call(this));return r.title=null===(t=r.title)||void 0===t?void 0:t.rendered,r.content=null===(e=r.content)||void 0===e?void 0:e.rendered,delete r._links,delete r.link,r}},{key:"transformDataForPatch",value:function(){return this.transformDataForPersist()}}]),n}(yt),xt=function(t){at()(n,t);var e=st()(n);function n(){return o()(this,n),e.apply(this,arguments)}return n}(ft),Pt=function(t){at()(n,t);var e=st()(n);function n(){return o()(this,n),e.apply(this,arguments)}return i()(n,[{key:"transformDataForPersist",value:function(){var t=T()({},wt()(kt()(n.prototype),"transformDataForPersist",this).call(this));return delete t._links,delete t.link,t}},{key:"transformDataForPatch",value:function(){return this.transformDataForPersist()}}]),n}(yt),Tt=function(t){at()(n,t);var e=st()(n);function n(){return o()(this,n),e.apply(this,arguments)}return n}(ft),Et=n(150),Ct=n.n(Et),St=n(518),_t=n.n(St),Nt=n(286),Ot=n.n(Nt);!function(t){t[t.Primary=0]="Primary",t[t.Secondary=1]="Secondary"}(nt||(nt={}));var Dt,Ft=function(t){var e=t.className,n=t.type,r=t.children,o=_t()(t,["className","type","children"]),a=Ot()(e,{"button-primary":n===nt.Primary,"button-secondary":n===nt.Secondary||!n});return p().createElement("button",Ct()({className:a},o),r)};!function(t){t.Error="Error",t.Info="Info",t.Success="Success"}(Dt||(Dt={}));var At=function(t){var e=t.type,n=t.children,r=Ot()({notice:!0,"notice-error":e===Dt.Error,"notice-info":e===Dt.Info,"notice-success":e===Dt.Success});return p().createElement("div",{className:r},p().createElement("p",null,n))},Rt=n(310),qt=n.n(Rt);function Lt(t,e){var n=e.chunks,r=e.publicUrl,o=e.textDomain,a=n[t.split("?")[0]],i=!!a,s=(0,h.useState)(!1),c=qt()(s,2),u=c[0],l=c[1],p=(0,h.useCallback)(function(){var t=C()(x().mark((function t(e){var n,a,s,c,u,l;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=window).wpi18nLazy=n.wpi18nLazy||{},n.wpi18nLazy.chunkUrls=n.wpi18nLazy.chunkUrls||[],a=n.wpi18nLazy.chunkUrls,s="".concat(r,"languages/json/").concat(o,"-").concat(e,".json"),!i||-1!==a.indexOf(s)){t.next=20;break}return a.push(s),t.prev=7,t.next=10,window.fetch(s);case 10:return c=t.sent,t.next=13,c.json();case 13:u=t.sent,l=u.locale_data.messages,I().i18n.setLocaleData(l,o),t.next=20;break;case 18:t.prev=18,t.t0=t.catch(7);case 20:case"end":return t.stop()}}),t,null,[[7,18]])})));return function(e){return t.apply(this,arguments)}}(),[r,o]);return(0,h.useEffect)((function(){i?Promise.all(a.map(p)).then((function(){l(!0)})):l(!0)}),[i,p]),u}var jt=function(t){var e=t.children,n=t.chunkFile,r=t.fallback,o=Lt(n,(0,t.options)());return React.createElement(React.Fragment,null,o?e:r)}},804:function(t){t.exports=React}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}return n.m=t,n.x=function(){},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={826:0},e=[[579,764]],r=function(){},o=function(o,a){for(var i,s,c=a[0],u=a[1],l=a[2],h=a[3],p=0,f=[];p<c.length;p++)s=c[p],n.o(t,s)&&t[s]&&f.push(t[s][0]),t[s]=0;for(i in u)n.o(u,i)&&(n.m[i]=u[i]);for(l&&l(n),o&&o(a);f.length;)f.shift()();return h&&e.push.apply(e,h),r()},a=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];function i(){for(var r,o=0;o<e.length;o++){for(var a=e[o],i=!0,s=1;s<a.length;s++){var c=a[s];0!==t[c]&&(i=!1)}i&&(e.splice(o--,1),r=n(n.s=a[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var s=n.x;n.x=function(){return n.x=s||function(){},(r=i)()}}(),n.x()}();
//# sourceMappingURL=index.js.map