(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(122),t.b),u=i()(o()),l=s()(d);u.push([n.id,`html,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Nunito', sans-serif;\n  color: white;\n}\n\nbody::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: -1;\n}\n\nbody {\n  background-image: url(${l});\n  background-size: cover;\n  background-position: center 100%;\n  background-attachment: fixed;\n  padding: 30px 30px 0 30px;\n  overflow: hidden;\n}\n\n/* Styling for top half */\n.top {\n  height: 65%;\n}\n\nnav {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\nnav div {\n  display: flex;\n  align-items: center;\n}\n\nnav img {\n  height: 60px;\n}\n\nnav div div {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.searchBar {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.navbuttons {\n  justify-content: end;\n  gap: 10px;\n\n}\n\n.navbuttons button {\n  width: 80px;\n  height: 40px;\n  background: rgb(61, 1, 129);\n  border: 2px solid rgb(61, 1, 129);\n  border-radius: 40px;\n  font-weight: 800;\n  font-size: 15px;\n  color: white;\n  transition: border 0.3s ease-in-out;\n}\n\n.navbuttons button:hover {\n  border: 2px solid white;\n}\n\n.navbuttons button.active {\n  border: 2px solid white;\n}\n\n/* Styling for bottom half */\n.bottom {\n  height: 35%;\n}\n\n/* Searchbar Styling */\n.searchBar {\n  display: block;\n  width: 325px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n#searchQueryInput {\n  font-family: 'Nunito', sans-serif;\n  width: 100%;\n  height: 2.2rem;\n  background: rgb(61, 1, 129);\n  color: white;\n  font-weight: 800;\n  outline: none;\n  border: 2px solid rgb(61, 1, 129);\n  border-radius: 1.625rem;\n  padding: 0 3rem 0 1rem;\n  font-size: 1.1rem;\n  transition: border 0.3s ease-in-out;\n}\n\n#searchQueryInput:focus {\n  border: 2px solid white;\n}\n\n::placeholder {\n  color: rgba(255,255,255, .6);\n}\n\n#searchQuerySubmit {\n  width: 3.5rem;\n  height: 2.8rem;\n  margin-left: -3.5rem;\n  background: none;\n  border: none;\n  outline: none;\n}\n\nsvg {\n  margin-top: 3px;\n}\n\n#searchQuerySubmit:hover {\n  cursor: pointer;\n}\n\n/* Styling for scrollbars */\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n  background: #785095;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgba(71, 0, 153, 0.5);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(71, 0, 153, 0.9)\n}`,""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},122:(n,e,t)=>{n.exports=t.p+"b971af26f28f32a4d02e.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),p=t.n(l),f=t(28),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let m="garden-grove",g=`https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${m}`,b=`http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${m}`;(async function(){try{const n=await fetch(g,{mode:"cors"});if(!n.ok)throw new Error(`${n.status}`);return await n.json()}catch(n){throw console.error(n),n}})().then((n=>{n instanceof Error?console.log("An error occurred in getCurrentWeatherData:",n):function(n){let e={city:n.location.name,country:n.location.country,localTime:n.location.localtime,tempC:n.current.temp_c,tempF:n.current.temp_f,condition:n.current.condition.text,humidity:n.current.humidity,windMPH:n.current.wind_mph,windKPH:n.current.wind_kph};console.log(e)}(n)})).catch((n=>{console.log("An error occurred:",n)})),async function(){try{const n=await fetch(b,{mode:"cors"});if(!n.ok)throw new Error(`${n.status}`);return await n.json()}catch(n){throw console.error(n),n}}().then((n=>{n instanceof Error?console.log("An error occurred in getForecastWeatherData:",n):function(n){let e={dailyChanceOfrain:n.forecast.forecastday[0].day.daily_chance_of_rain,dailyHighestTempC:n.forecast.forecastday[0].day.maxtemp_c,dailyHighestTempF:n.forecast.forecastday[0].day.maxtemp_f,dailyLowestTempC:n.forecast.forecastday[0].day.mintemp_c,dailyLowestTempF:n.forecast.forecastday[0].day.mintemp_f};console.log(e)}(n)})).catch((n=>{console.log("An error occurred:",n)}))})()})();