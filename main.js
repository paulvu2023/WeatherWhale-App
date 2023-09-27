(()=>{"use strict";var n={35:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: 'Nunito', sans-serif;\n  color: white;\n}\n\nbody::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: -1;\n}\n\nbody {\n  background-image: url(https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg);\n  background-size: cover;\n  background-position: center 100%;\n  background-attachment: fixed;\n  padding: 30px 30px 0 30px;\n  overflow: hidden;\n}\n\n/* Styling for top half */\n.top {\n  height: 65%;\n}\n\n/* Styling for navbar and navitems */\nnav {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n}\n\nnav div {\n  display: flex;\n  align-items: center;\n}\n\nnav img {\n  height: 60px;\n}\n\nnav div div {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.searchBar {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.navbuttons {\n  justify-content: end;\n  gap: 10px;\n\n}\n\n.navbuttons button {\n  width: 80px;\n  height: 40px;\n  background: rgb(61, 1, 129);\n  border: 2px solid rgb(61, 1, 129);\n  border-radius: 40px;\n  font-weight: 800;\n  font-size: 15px;\n  color: white;\n  transition: border 0.3s ease-in-out;\n}\n\n.navbuttons button:hover {\n  border: 2px solid white;\n}\n\n.navbuttons button.active {\n  border: 2px solid white;\n}\n\n/* Styling for location related info */\n.location-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 30px;\n  gap: 5px;\n}\n\n.location {\n  display: flex;\n  gap: 15px;\n}\n\n.city, .country {\n  font-size: 40px;\n  font-weight: 800;\n}\n\n.localTime {\n  font-size: 23px;\n}\n\n/* Styling for the main content on the top half */\n.container {\n  padding-top: 40px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.left, .right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.tempItem {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.tempIcon {\n  font-size: 30px;\n}\n\n.tempItem div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-weight: 800;\n}\n\n.tempItem span {\n  font-size: 25px;\n  font-weight: 800;\n}\n\n/* Styling for bottom half */\n.bottom {\n  height: 35%;\n}\n\n.middle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.condition-container {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.condition-icon {\n  font-size: 70px;\n}\n\n.temperature {\n  font-size: 50px;\n  font-weight: 800;\n}\n\n.condition {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n/* Searchbar Styling */\n.searchBar {\n  display: block;\n  width: 325px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n#searchQueryInput {\n  font-family: 'Nunito', sans-serif;\n  width: 100%;\n  height: 2.2rem;\n  background: rgb(61, 1, 129);\n  color: white;\n  font-weight: 800;\n  outline: none;\n  border: 2px solid rgb(61, 1, 129);\n  border-radius: 1.625rem;\n  padding: 0 3rem 0 1rem;\n  font-size: 1.1rem;\n  transition: border 0.3s ease-in-out;\n}\n\n#searchQueryInput:focus {\n  border: 2px solid white;\n}\n\n::placeholder {\n  color: rgba(255,255,255, .6);\n}\n\n#searchQuerySubmit {\n  width: 3.5rem;\n  height: 2.8rem;\n  margin-left: -3.5rem;\n  background: none;\n  border: none;\n  outline: none;\n}\n\nsvg {\n  margin-top: 3px;\n}\n\n#searchQuerySubmit:hover {\n  cursor: pointer;\n}\n\n/* Styling for scrollbars */\n/* width */\n::-webkit-scrollbar {\n  width: 10px;\n  background: #023365\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: rgba(157, 214, 224, .85);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(157, 214, 224);\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var f=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=r(p,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),f=t.n(u),p=t(35),m={};function h(n){return"sunny"===(n=n.toLowerCase())?'<i class="fa-regular fa-sun condition-icon"></i></i>':"clear"===n?'<i class="fa-solid fa-moon condition-icon"></i>':n.includes("cloud")||"mist"===n||"overcast"===n?'<i class="fa-solid fa-cloud condition-icon"></i>':n.includes("rain")||n.includes("drizzle")?'<i class="fa-solid fa-cloud-rain condition-icon"></i>':n.includes("snow")?'<i class="fa-solid fa-snowflake condition-icon"></i>':n.includes("sleet")?'<i class="fa-solid fa-icicles condition-icon"></i>':n.includes("thunder")?'<i class="fa-solid fa-cloud-bolt condition-icon"></i>':n.includes("blowing snow")||"blizzard"===n?'<i class="fa-solid fa-cloud-showers-heavy condition-icon"></i>':!!n.includes("ice pellets")&&'<i class="fa-solid fa-icicles condition-icon"></i>'}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;let y="Huntington-Beach",g=`https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${y}`,v=`http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${y}`;function b(){return document.querySelector(".fahrenheitButton").classList.contains("active")}async function x(){try{const n=await async function(){try{const n=await fetch(g,{mode:"cors"});if(!n.ok)throw new Error(`${n.status}`);return await n.json()}catch(n){throw console.error(n),n}}();if(n instanceof Error)console.log("An error occurred in getCurrentWeatherData:",n);else{const e=function(n){let e={city:n.location.name,country:n.location.country,localTime:n.location.localtime,tempC:n.current.temp_c,tempF:n.current.temp_f,condition:n.current.condition.text,conditionIcon:n.current.condition.icon,humidity:n.current.humidity,windMPH:n.current.wind_mph,windKPH:n.current.wind_kph};return console.log(e),e}(n);!function(n,e){const t=document.querySelector(".city"),o=document.querySelector(".country"),r=document.querySelector(".localTime"),i=document.querySelector(".humidity span"),a=document.querySelector(".wind span"),c=document.querySelector(".condition"),s=document.querySelector(".condition-icon-div"),d=document.querySelector(".temperature");t.textContent=`${n.city},`,o.textContent=n.country,r.textContent=n.localTime,c.textContent=n.condition,i.textContent=`${n.humidity} %`,e?(d.textContent=`${n.tempF} °F`,a.textContent=`${n.windMPH} mph`):(d.textContent=`${n.tempC} °C`,a.textContent=`${n.windKPH} kph`),h(n.condition)?s.innerHTML=h(n.condition):s.innerHTML=`<img class='condition-icon' src='${n.conditionIcon}'>`}(e,b())}}catch(n){console.log("An error occurred:",n)}}async function w(){try{const n=await async function(){try{const n=await fetch(v,{mode:"cors"});if(!n.ok)throw new Error(`${n.status}`);return await n.json()}catch(n){throw console.error(n),n}}();if(n instanceof Error)console.log("An error occurred in getForecastWeatherData:",n);else{const e=function(n){let e={dailyChanceOfRain:n.forecast.forecastday[0].day.daily_chance_of_rain,dailyHighestTempC:n.forecast.forecastday[0].day.maxtemp_c,dailyHighestTempF:n.forecast.forecastday[0].day.maxtemp_f,dailyLowestTempC:n.forecast.forecastday[0].day.mintemp_c,dailyLowestTempF:n.forecast.forecastday[0].day.mintemp_f,uv:n.forecast.forecastday[0].day.uv};return console.log(e),e}(n);!function(n,e){const t=document.querySelector(".uv span"),o=document.querySelector(".dailyChanceOfRain span"),r=document.querySelector(".dailyHigh span"),i=document.querySelector(".dailyLow span");t.textContent=`${n.uv}`,o.textContent=`${n.dailyChanceOfRain} %`,e?(r.textContent=`${n.dailyHighestTempF} °F`,i.textContent=`${n.dailyLowestTempF} °F`):(r.textContent=`${n.dailyHighestTempC} °C`,i.textContent=`${n.dailyLowestTempC} °C`)}(e,b())}}catch(n){console.log("An error occurred:",n)}}const C=document.querySelector("form.searchBar"),S=document.querySelectorAll(".navbuttons button");C.addEventListener("submit",(n=>{const e=document.getElementById("searchQueryInput");var t;n.preventDefault(),t=e.value.trim().replace(" ","-"),y=t,g=`https://api.weatherapi.com/v1/current.json?key=f565f05ebecc44d0b0d25131232309&q=${t}`,v=`http://api.weatherapi.com/v1/forecast.json?key=f565f05ebecc44d0b0d25131232309&q=${t}`,x(),w(),e.value=""})),S.forEach((n=>{n.addEventListener("click",(()=>{document.querySelector(".active").classList.remove("active"),n.classList.add("active")}))})),x(),w()})()})();