!function e(t,n,r){function a(i,s){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return a(n||e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("../utils/request"),o=(r=a,r&&r.__esModule?r:{default:r});var i="AIzaSyB2D-Cmek8ifPd0bHOFzKsdFTofnXBWoIE";n.default=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventBus=t,this.eventBus.on("map:clicked",function(e){n.getPlaceName(e.lat,e.lng).then(function(t){n.eventBus.trigger("google:cityFound",t,e)},function(t){var r=prompt("Unknown place. Enter the name","Hollywood");r&&n.eventBus.trigger("google:cityFound",r,e)})}),this.getLatLng=function(e){return(0,o.default)("https://maps.googleapis.com/maps/api/geocode/json?address="+e+"&key="+i).then(function(e){return e.results[0].geometry.location})},this.getPlaceName=function(e,t){return(0,o.default)("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&result_type=locality&language=ru&key="+i).then(function(e){return e.results[0].address_components[0].short_name})}}},{"../utils/request":11}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=e("../utils/lsStorage"),i=(r=o,r&&r.__esModule?r:{default:r});var s=function(){function e(t,n,r,a,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.maxItemAmount=n||0,this.allowRemove=t,this.items={},this.storageName=r,this.htmlElement=a,this.eventBus=o,this.init(),"Favorites"===this.storageName&&this.addRemoval()}return a(e,[{key:"init",value:function(){var e=this;"Favorites"===this.storageName&&this.eventBus.on("google:cityFound",this.addItem.bind(this)),i.default.getData(this.storageName).then(function(t){e.items=JSON.parse(t)||{},e.render()})}},{key:"render",value:function(){this.htmlElement.innerHTML="";var e=document.createElement("ul");for(var t in this.items){var n=document.createElement("li"),r=document.createElement("a");r.href="Favorites"===this.storageName?"#center="+this.items[t].lat+","+this.items[t].lng:"#city="+t,r.innerHTML=t+(this.allowRemove?'<span class="glyphicon glyphicon-remove cross-align-right"/>':""),n.appendChild(r),e.insertBefore(n,e.firstChild)}this.htmlElement.appendChild(e)}},{key:"addRemoval",value:function(){var e=this;this.allowRemove&&this.htmlElement.addEventListener("click",function(t){if(t.target.matches(".glyphicon-remove")){t.preventDefault();var n=t.target.parentElement.innerText;e.eventBus.trigger("list:removeFav",e.items[n]),delete e.items[n],i.default.setData(e.storageName,JSON.stringify(e.items)),e.render()}})}},{key:"addItem",value:function(e,t){void 0===this.items[e]&&(this.items[e]=t||{},"Favorites"===this.storageName&&this.eventBus.trigger("list:addFav",this.items[e]),0!==this.maxItemAmount&&Object.keys(this.items).length>this.maxItemAmount&&delete this.items[Object.keys(this.items)[0]],this.render(),i.default.setData(this.storageName,JSON.stringify(this.items)))}}]),e}();n.default=s},{"../utils/lsStorage":10}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlElement=t,this.eventBus=n,this.init()}return r(e,[{key:"init",value:function(){var e=this;this.render(),this.htmlElement.addEventListener("keypress",function(t){t.target.matches("input")&&13==t.keyCode&&e.goToCity()}),this.htmlElement.addEventListener("click",function(t){t.target.matches("button")&&e.goToCity()})}},{key:"goToCity",value:function(){""!==this.input.value&&(this.eventBus.trigger("search:city",this.input.value),this.input.value="")}},{key:"render",value:function(){this.htmlElement.innerHTML="",this.input=document.createElement("input"),this.input.className="form-control input__city",this.input.placeholder="city",this.htmlElement.appendChild(this.input);var e=document.createElement("span");e.className="input-group-btn";var t=document.createElement("button");t.className="btn btn-default search button__search_city",t.type="button";var n=document.createElement("span");n.className="glyphicon glyphicon-search",t.appendChild(n),e.appendChild(t),this.htmlElement.appendChild(e)}}]),e}();n.default=a},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(e("../utils/skycons")),o=i(e("../utils/request"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.eventBus=n}return r(e,[{key:"getForecastByLatLng",value:function(e,t,n){var r=this;this.cityName=n,(0,o.default)("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5031e075946739a76f0e37598086d0a3/"+e+","+t+"?lang=ru&units=si").then(function(e){r.render(e.daily.data)})}},{key:"render",value:function(e){this.element.innerHTML="";var t=document.createElement("span");t.innerHTML="Place: "+this.cityName,this.element.appendChild(t);var n=document.createElement("table");n.className="weatherTable table";var r=document.createElement("tr"),o=document.createElement("th");o.innerHTML="Date";var i=new Date;r.appendChild(o);for(var s=0;s<7;s++){var u=document.createElement("th");u.innerHTML=i.getDate()+"."+(i.getMonth()+1),r.appendChild(u),i.setDate(i.getDate()+1)}n.appendChild(r),r=document.createElement("tr");var c=document.createElement("th");r.appendChild(c);for(var l=0;l<7;l++){var d=document.createElement("td");d.innerHTML='<canvas class="'+e[l].icon+'" width="30" height="30"></canvas>',r.appendChild(d)}n.appendChild(r),n.appendChild(this.createRow(e,"Day temperature, &#8451","temperatureHigh")),n.appendChild(this.createRow(e,"Night temperature, &#8451","temperatureLow")),n.appendChild(this.createRow(e,"Wind speed, m/s","windSpeed")),this.element.appendChild(n),(0,a.default)()}},{key:"createRow",value:function(e,t,n){var r=document.createElement("tr"),a=document.createElement("th");a.innerHTML=t,r.appendChild(a);for(var o=0;o<7;o++){var i=document.createElement("td");i.innerHTML=e[o][n],r.appendChild(i)}return r}}]),e}();n.default=s},{"../utils/request":11,"../utils/skycons":13}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(e("../utils/debounce")),o=i(e("../utils/lsStorage"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=u.getCenter();this.eventBus.trigger("map:moved",t[0],t[1])}var u,c={},l=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startLat=n,this.startLng=r,this.eventBus=t,this.storageName=a,this.init()}return r(e,[{key:"moveTo",value:function(e,t){u.panTo([+e,+t],{duration:2e3})}},{key:"init",value:function(){var e=this;ymaps.ready(function(){e.createMap([e.startLat,e.startLng]),o.default.getData(e.storageName).then(function(e){var t=JSON.parse(e)||{};for(var n in t){var r=new ymaps.Placemark([t[n].lat,t[n].lng],{},{preset:"islands#yellowGlyphIcon",iconGlyph:"star"});c[t[n].lat+","+t[n].lng]=r,u.geoObjects.add(r)}}),e.eventBus.on("list:addFav",function(e){var t=new ymaps.Placemark([e.lat,e.lng],{},{preset:"islands#yellowGlyphIcon",iconGlyph:"star"});c[e.lat+","+e.lng]=t,u.geoObjects.add(t)}),e.eventBus.on("list:removeFav",function(e){u.geoObjects.remove(c[e.lat+","+e.lng]),delete c[e.lat+","+e.lng]})})}},{key:"createMap",value:function(e){var t=this;(u=new ymaps.Map("map",{center:[e[0],e[1]],zoom:12,controls:["zoomControl"]},{suppressMapOpenBlock:!0})).events.add("click",function(e){var n=e.get("coords"),r={lat:n[0],lng:n[1]};t.eventBus.trigger("map:clicked",r)}),u.events.add("actionend",(0,a.default)(s,700).bind(this))}}]),e}();n.default=l},{"../utils/debounce":8,"../utils/lsStorage":10}],6:[function(e,t,n){"use strict";var r=a(e("./routes"));function a(e){return e&&e.__esModule?e:{default:e}}new(a(e("./utils/router")).default)(r.default)},{"./routes":7,"./utils/router":12}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=d(e("./components/listComponent")),a=d(e("./components/googleSearch")),o=d(e("./components/yandexMap")),i=d(e("./components/weatherForecast")),s=d(e("./utils/eventBus")),u=d(e("./utils/userLocation")),c=d(e("./utils/request")),l=d(e("./components/searchComponent"));function d(e){return e&&e.__esModule?e:{default:e}}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}document.querySelector(".myradio").addEventListener("click",function(e){c.default.type=document.querySelector('input[name="request__option"]:checked').value});var f=void 0,m=void 0,p=void 0,v=void 0,y=void 0,g=document.querySelector("#map"),w=document.querySelector("#weather"),b=[{match:"",onEnter:function(){u.default.then(function(e){window.location.hash="center="+e.latitude+","+e.longitude})}},{match:/city=(.+)/,onEnter:function(e){_()?(v.addItem(decodeURI(e)),m.getLatLng(e).then(function(e){p.moveTo(e.lat,e.lng)})):(L(e),v.addItem(decodeURI(e)),m.getLatLng(e).then(function(e){window.location.hash="center="+e.lat+","+e.lng}))}},{match:/^([+|-]?\d*\.?\d+)\,([+|-]?\d*\.?\d+)/,onEnter:function(e){var t;_()||L.apply(void 0,h(e)),(t=m).getPlaceName.apply(t,h(e)).then(function(t){var n;return(n=y).getForecastByLatLng.apply(n,h(e).concat([t]))}).catch(function(t){var n;return(n=y).getForecastByLatLng.apply(n,h(e).concat(["Unknown place"]))})}},{match:/center=([+|-]?\d*\.?\d+)\,([+|-]?\d*\.?\d+)/,onBeforeEnter:function(e){if(_()){var t;(t=p).moveTo.apply(t,h(e))}else{var n;L.apply(void 0,h(e)),(n=m).getPlaceName.apply(n,h(e)).then(function(t){var n;return(n=y).getForecastByLatLng.apply(n,h(e).concat([t]))}).catch(function(t){var n;return(n=y).getForecastByLatLng.apply(n,h(e).concat(["Unknown place"]))})}}},{match:"author",onEnter:function(){E(),w.hidden="true",document.querySelector(".active").className="",document.querySelector('[href="#author"]').parentElement.className="active",g.innerHTML="<div class='about'><h2>Author - <a href='https://github.com/Citrinin'>Kate Kuzkina</a></h2></div>"}},{match:"about",onEnter:function(){E(),w.hidden="true",document.querySelector(".active").className="",document.querySelector('[href="#about"]').parentElement.className="active",g.innerHTML="<div class='about'><h2>Wezzard</h2><h4>Wezzard is the weather site with daily forecast, search history and favorite places</h4></div>"}}];function _(){return!!(v&&m&&p&&y)}function E(){f=null,m=null,p=null,null,v=null,y=null,null}function L(e,t){w.removeAttribute("hidden"),g.innerHTML="",document.querySelector(".active").className="",document.querySelector('li [href="#"]').parentElement.className="active",f=new s.default,m=new a.default(f),Number.isNaN(+e)?m.getLatLng(e).then(function(e){p=new o.default(f,e.lat,e.lng,"Favorites")}):p=new o.default(f,e,t,"Favorites"),new r.default(!0,0,"Favorites",document.querySelector(".favorites__list"),f),v=new r.default(!1,5,"History",document.querySelector(".history__list")),y=new i.default(document.querySelector(".weather__forecast"),f),new l.default(document.querySelector(".input-group"),f),f.on("search:city",function(e){window.location.hash="city="+e}),f.on("map:moved",function(e,t){window.location.hash=e+","+t})}n.default=b},{"./components/googleSearch":1,"./components/listComponent":2,"./components/searchComponent":3,"./components/weatherForecast":4,"./components/yandexMap":5,"./utils/eventBus":9,"./utils/request":11,"./utils/userLocation":14}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(e,t){var n;return function(){var r=this,a=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(r,a)},t)}}},{}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});function r(){this.listeners={}}r.prototype.trigger=function(e){for(var t=0;t<(this.listeners[e]||[]).length;t++){var n=this.listeners[e][t];if("function"==typeof n){var r=[].slice.call(arguments,1);n.apply(null,r),-1!==n.toString().indexOf("self.off")&&t--}}},r.prototype.on=function(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},r.prototype.off=function(e,t){if(void 0!=this.listeners[e]){var n=this.listeners[e].indexOf(t);this.listeners[e].splice(n,1)}},r.prototype.once=function(e,t){var n=this;n.on(e,function r(){t.apply(null,arguments),n.off(e,r)})},n.default=r},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={getData:function(e){return Promise.resolve(window.localStorage.getItem(e))},setData:function(e,t){return Promise.resolve(window.localStorage.setItem(e,t))}};n.default=r},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});function r(e){return"XHR"===r.type?(t=e,new Promise(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.onload=function(){this.status>=200&&this.status<300?e(JSON.parse(r.response)):n({status:this.status,statusText:r.statusText})},r.onerror=function(){n({status:this.status,statusText:r.statusText})},r.send()})):fetch(e).then(function(e){return e.json()});var t}r.type="XHR";n.default=r},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});function r(e){var t=this;this.routes=e||[],this.currentRoute,this.previousRoute,this.currentParams,this.previousParams,window.addEventListener("hashchange",function(e){t.handler(window.location.hash)}),this.handler(window.location.hash)}r.prototype={handler:function(e){this.previousRoute=this.currentRoute,this.previousParams=this.currentParams,this.currentRoute=this.findNewRoute(e),this.launchHandlers()},findNewRoute:function(e){e=e.slice(1);for(var t=0;t<this.routes.length;t++){var n=this.routes[t];if("string"==typeof n.match&&n.match===e)return this.currentParams="",n;if("function"==typeof n.match&&n.match(e))return this.currentParams="",n;if(n.match instanceof RegExp&&n.match.test(e))return this.currentParams=e.match(n.match)||[],this.currentParams.splice(0,1),n}},launchHandlers:function(){var e=this;Promise.resolve().then(function(){e.previousRoute&&e.previousRoute.onLeave&&e.previousRoute.onLeave(e.previousParams)}).then(function(){e.currentRoute&&e.currentRoute.onBeforeEnter&&e.currentRoute.onBeforeEnter(e.currentParams)}).then(function(){e.currentRoute&&e.currentRoute.onEnter&&e.currentRoute.onEnter(e.currentParams)})}},n.default=r},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=document.querySelectorAll("canvas"),t=0;t<e.length;t++)r.set(e[t],Skycons[e[t].className.toUpperCase().replace(/-/g,"_")])};var r=new Skycons;!function(){for(var e=document.querySelectorAll("canvas"),t=0;t<e.length;t++)r.add(e[t],Skycons[e[t].className.toUpperCase().replace(/-/g,"_")]);r.play()}()},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("./request");var o=(0,(r=a,r&&r.__esModule?r:{default:r}).default)("https://api.userinfo.io/userinfos").then(function(e){return e.position});n.default=o},{"./request":11}]},{},[6]);