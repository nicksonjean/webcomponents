var isIE = document.body.style.msTouchAction !== undefined;
var LoadScript = function(url){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.defer = true;
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function(t,r){"use strict";if(typeof define==="function"&&define.amd){define(r)}else if(typeof exports==="object"){module.exports=r()}else{t.returnExports=r()}})(this,function(){var t=Array;var r=t.prototype;var e=Object;var n=e.prototype;var i=Function;var a=i.prototype;var o=String;var f=o.prototype;var u=Number;var l=u.prototype;var s=r.slice;var c=r.splice;var v=r.push;var h=r.unshift;var p=r.concat;var y=r.join;var d=a.call;var g=a.apply;var w=Math.max;var b=Math.min;var T=n.toString;var m=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var D;var S=Function.prototype.toString,x=/^\s*class /,O=function isES6ClassFn(t){try{var r=S.call(t);var e=r.replace(/\/\/.*\n/g,"");var n=e.replace(/\/\*[.\s\S]*\*\//g,"");var i=n.replace(/\n/gm," ").replace(/ {2}/g," ");return x.test(i)}catch(a){return false}},E=function tryFunctionObject(t){try{if(O(t)){return false}S.call(t);return true}catch(r){return false}},j="[object Function]",I="[object GeneratorFunction]",D=function isCallable(t){if(!t){return false}if(typeof t!=="function"&&typeof t!=="object"){return false}if(m){return E(t)}if(O(t)){return false}var r=T.call(t);return r===j||r===I};var M;var U=RegExp.prototype.exec,F=function tryRegexExec(t){try{U.call(t);return true}catch(r){return false}},$="[object RegExp]";M=function isRegex(t){if(typeof t!=="object"){return false}return m?F(t):T.call(t)===$};var N;var C=String.prototype.valueOf,k=function tryStringObject(t){try{C.call(t);return true}catch(r){return false}},A="[object String]";N=function isString(t){if(typeof t==="string"){return true}if(typeof t!=="object"){return false}return m?k(t):T.call(t)===A};var R=e.defineProperty&&function(){try{var t={};e.defineProperty(t,"x",{enumerable:false,value:t});for(var r in t){return false}return t.x===t}catch(n){return false}}();var P=function(t){var r;if(R){r=function(t,r,n,i){if(!i&&r in t){return}e.defineProperty(t,r,{configurable:true,enumerable:false,writable:true,value:n})}}else{r=function(t,r,e,n){if(!n&&r in t){return}t[r]=e}}return function defineProperties(e,n,i){for(var a in n){if(t.call(n,a)){r(e,a,n[a],i)}}}}(n.hasOwnProperty);var J=function isPrimitive(t){var r=typeof t;return t===null||r!=="object"&&r!=="function"};var Y=u.isNaN||function isActualNaN(t){return t!==t};var Z={ToInteger:function ToInteger(t){var r=+t;if(Y(r)){r=0}else if(r!==0&&r!==1/0&&r!==-(1/0)){r=(r>0||-1)*Math.floor(Math.abs(r))}return r},ToPrimitive:function ToPrimitive(t){var r,e,n;if(J(t)){return t}e=t.valueOf;if(D(e)){r=e.call(t);if(J(r)){return r}}n=t.toString;if(D(n)){r=n.call(t);if(J(r)){return r}}throw new TypeError},ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return e(t)},ToUint32:function ToUint32(t){return t>>>0}};var z=function Empty(){};P(a,{bind:function bind(t){var r=this;if(!D(r)){throw new TypeError("Function.prototype.bind called on incompatible "+r)}var n=s.call(arguments,1);var a;var o=function(){if(this instanceof a){var i=g.call(r,this,p.call(n,s.call(arguments)));if(e(i)===i){return i}return this}else{return g.call(r,t,p.call(n,s.call(arguments)))}};var f=w(0,r.length-n.length);var u=[];for(var l=0;l<f;l++){v.call(u,"$"+l)}a=i("binder","return function ("+y.call(u,",")+"){ return binder.apply(this, arguments); }")(o);if(r.prototype){z.prototype=r.prototype;a.prototype=new z;z.prototype=null}return a}});var G=d.bind(n.hasOwnProperty);var H=d.bind(n.toString);var W=d.bind(s);var B=g.bind(s);if(typeof document==="object"&&document&&document.documentElement){try{W(document.documentElement.childNodes)}catch(X){var L=W;var q=B;W=function arraySliceIE(t){var r=[];var e=t.length;while(e-- >0){r[e]=t[e]}return q(r,L(arguments,1))};B=function arraySliceApplyIE(t,r){return q(W(t),r)}}}var K=d.bind(f.slice);var Q=d.bind(f.split);var V=d.bind(f.indexOf);var _=d.bind(v);var tt=d.bind(n.propertyIsEnumerable);var rt=d.bind(r.sort);var et=t.isArray||function isArray(t){return H(t)==="[object Array]"};var nt=[].unshift(0)!==1;P(r,{unshift:function(){h.apply(this,arguments);return this.length}},nt);P(t,{isArray:et});var it=e("a");var at=it[0]!=="a"||!(0 in it);var ot=function properlyBoxed(t){var r=true;var e=true;var n=false;if(t){try{t.call("foo",function(t,e,n){if(typeof n!=="object"){r=false}});t.call([1],function(){"use strict";e=typeof this==="string"},"x")}catch(i){n=true}}return!!t&&!n&&r&&e};P(r,{forEach:function forEach(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=-1;var i=Z.ToUint32(e.length);var a;if(arguments.length>1){a=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in e){if(typeof a==="undefined"){t(e[n],n,r)}else{t.call(a,e[n],n,r)}}}}},!ot(r.forEach));P(r,{map:function map(r){var e=Z.ToObject(this);var n=at&&N(this)?Q(this,""):e;var i=Z.ToUint32(n.length);var a=t(i);var o;if(arguments.length>1){o=arguments[1]}if(!D(r)){throw new TypeError("Array.prototype.map callback must be a function")}for(var f=0;f<i;f++){if(f in n){if(typeof o==="undefined"){a[f]=r(n[f],f,e)}else{a[f]=r.call(o,n[f],f,e)}}}return a}},!ot(r.map));P(r,{filter:function filter(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var f=0;f<n;f++){if(f in e){a=e[f];if(typeof o==="undefined"?t(a,f,r):t.call(o,a,f,r)){_(i,a)}}}return i}},!ot(r.filter));P(r,{every:function every(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in e&&!(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return false}}return true}},!ot(r.every));P(r,{some:function some(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in e&&(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return true}}return false}},!ot(r.some));var ft=false;if(r.reduce){ft=typeof r.reduce.call("es5",function(t,r,e,n){return n})==="object"}P(r,{reduce:function reduce(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=Z.ToUint32(e.length);if(!D(t)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in e){a=e[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in e){a=t(a,e[i],i,r)}}return a}},!ft);var ut=false;if(r.reduceRight){ut=typeof r.reduceRight.call("es5",function(t,r,e,n){return n})==="object"}P(r,{reduceRight:function reduceRight(t){var r=Z.ToObject(this);var e=at&&N(this)?Q(this,""):r;var n=Z.ToUint32(e.length);if(!D(t)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in e){i=e[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in e){i=t(i,e[a],a,r)}}while(a--);return i}},!ut);var lt=r.indexOf&&[0,1].indexOf(1,2)!==-1;P(r,{indexOf:function indexOf(t){var r=at&&N(this)?Q(this,""):Z.ToObject(this);var e=Z.ToUint32(r.length);if(e===0){return-1}var n=0;if(arguments.length>1){n=Z.ToInteger(arguments[1])}n=n>=0?n:w(0,e+n);for(;n<e;n++){if(n in r&&r[n]===t){return n}}return-1}},lt);var st=r.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;P(r,{lastIndexOf:function lastIndexOf(t){var r=at&&N(this)?Q(this,""):Z.ToObject(this);var e=Z.ToUint32(r.length);if(e===0){return-1}var n=e-1;if(arguments.length>1){n=b(n,Z.ToInteger(arguments[1]))}n=n>=0?n:e-Math.abs(n);for(;n>=0;n--){if(n in r&&t===r[n]){return n}}return-1}},st);var ct=function(){var t=[1,2];var r=t.splice();return t.length===2&&et(r)&&r.length===0}();P(r,{splice:function splice(t,r){if(arguments.length===0){return[]}else{return c.apply(this,arguments)}}},!ct);var vt=function(){var t={};r.splice.call(t,0,0,1);return t.length===1}();P(r,{splice:function splice(t,r){if(arguments.length===0){return[]}var e=arguments;this.length=w(Z.ToInteger(this.length),0);if(arguments.length>0&&typeof r!=="number"){e=W(arguments);if(e.length<2){_(e,this.length-t)}else{e[1]=Z.ToInteger(r)}}return c.apply(this,e)}},!vt);var ht=function(){var r=new t(1e5);r[8]="x";r.splice(1,1);return r.indexOf("x")===7}();var pt=function(){var t=256;var r=[];r[t]="a";r.splice(t+1,0,"b");return r[t]==="a"}();P(r,{splice:function splice(t,r){var e=Z.ToObject(this);var n=[];var i=Z.ToUint32(e.length);var a=Z.ToInteger(t);var f=a<0?w(i+a,0):b(a,i);var u=b(w(Z.ToInteger(r),0),i-f);var l=0;var s;while(l<u){s=o(f+l);if(G(e,s)){n[l]=e[s]}l+=1}var c=W(arguments,2);var v=c.length;var h;if(v<u){l=f;var p=i-u;while(l<p){s=o(l+u);h=o(l+v);if(G(e,s)){e[h]=e[s]}else{delete e[h]}l+=1}l=i;var y=i-u+v;while(l>y){delete e[l-1];l-=1}}else if(v>u){l=i-u;while(l>f){s=o(l+u-1);h=o(l+v-1);if(G(e,s)){e[h]=e[s]}else{delete e[h]}l-=1}}l=f;for(var d=0;d<c.length;++d){e[l]=c[d];l+=1}e.length=i-u+v;return n}},!ht||!pt);var yt=r.join;var dt;try{dt=Array.prototype.join.call("123",",")!=="1,2,3"}catch(X){dt=true}if(dt){P(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return yt.call(N(this)?Q(this,""):this,r)}},dt)}var gt=[1,2].join(undefined)!=="1,2";if(gt){P(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return yt.call(this,r)}},gt)}var wt=function push(t){var r=Z.ToObject(this);var e=Z.ToUint32(r.length);var n=0;while(n<arguments.length){r[e+n]=arguments[n];n+=1}r.length=e+n;return e+n};var bt=function(){var t={};var r=Array.prototype.push.call(t,undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!G(t,0)}();P(r,{push:function push(t){if(et(this)){return v.apply(this,arguments)}return wt.apply(this,arguments)}},bt);var Tt=function(){var t=[];var r=t.push(undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!G(t,0)}();P(r,{push:wt},Tt);P(r,{slice:function(t,r){var e=N(this)?Q(this,""):this;return B(e,arguments)}},at);var mt=function(){try{[1,2].sort(null)}catch(t){try{[1,2].sort({})}catch(r){return false}}return true}();var Dt=function(){try{[1,2].sort(/a/);return false}catch(t){}return true}();var St=function(){try{[1,2].sort(undefined);return true}catch(t){}return false}();P(r,{sort:function sort(t){if(typeof t==="undefined"){return rt(this)}if(!D(t)){throw new TypeError("Array.prototype.sort callback must be a function")}return rt(this,t)}},mt||!St||!Dt);var xt=!tt({toString:null},"toString");var Ot=tt(function(){},"prototype");var Et=!G("x","0");var jt=function(t){var r=t.constructor;return r&&r.prototype===t};var It={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true,$width:true,$height:true,$top:true,$localStorage:true};var Mt=function(){if(typeof window==="undefined"){return false}for(var t in window){try{if(!It["$"+t]&&G(window,t)&&window[t]!==null&&typeof window[t]==="object"){jt(window[t])}}catch(r){return true}}return false}();var Ut=function(t){if(typeof window==="undefined"||!Mt){return jt(t)}try{return jt(t)}catch(r){return false}};var Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var $t=Ft.length;var Nt=function isArguments(t){return H(t)==="[object Arguments]"};var Ct=function isArguments(t){return t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&!et(t)&&D(t.callee)};var kt=Nt(arguments)?Nt:Ct;P(e,{keys:function keys(t){var r=D(t);var e=kt(t);var n=t!==null&&typeof t==="object";var i=n&&N(t);if(!n&&!r&&!e){throw new TypeError("Object.keys called on a non-object")}var a=[];var f=Ot&&r;if(i&&Et||e){for(var u=0;u<t.length;++u){_(a,o(u))}}if(!e){for(var l in t){if(!(f&&l==="prototype")&&G(t,l)){_(a,o(l))}}}if(xt){var s=Ut(t);for(var c=0;c<$t;c++){var v=Ft[c];if(!(s&&v==="constructor")&&G(t,v)){_(a,v)}}}return a}});var At=e.keys&&function(){return e.keys(arguments).length===2}(1,2);var Rt=e.keys&&function(){var t=e.keys(arguments);return arguments.length!==1||t.length!==1||t[0]!==1}(1);var Pt=e.keys;P(e,{keys:function keys(t){if(kt(t)){return Pt(W(t))}else{return Pt(t)}}},!At||Rt);var Jt=new Date(-0xc782b5b342b24).getUTCMonth()!==0;var Yt=new Date(-0x55d318d56a724);var Zt=new Date(14496624e5);var zt=Yt.toUTCString()!=="Mon, 01 Jan -45875 11:59:59 GMT";var Gt;var Ht;var Wt=Yt.getTimezoneOffset();if(Wt<-720){Gt=Yt.toDateString()!=="Tue Jan 02 -45875";Ht=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Zt))}else{Gt=Yt.toDateString()!=="Mon Jan 01 -45875";Ht=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Zt))}var Bt=d.bind(Date.prototype.getFullYear);var Xt=d.bind(Date.prototype.getMonth);var Lt=d.bind(Date.prototype.getDate);var qt=d.bind(Date.prototype.getUTCFullYear);var Kt=d.bind(Date.prototype.getUTCMonth);var Qt=d.bind(Date.prototype.getUTCDate);var Vt=d.bind(Date.prototype.getUTCDay);var _t=d.bind(Date.prototype.getUTCHours);var tr=d.bind(Date.prototype.getUTCMinutes);var rr=d.bind(Date.prototype.getUTCSeconds);var er=d.bind(Date.prototype.getUTCMilliseconds);var nr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var ir=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var ar=function daysInMonth(t,r){return Lt(new Date(r,t,0))};P(Date.prototype,{getFullYear:function getFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Bt(this);if(t<0&&Xt(this)>11){return t+1}return t},getMonth:function getMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Bt(this);var r=Xt(this);if(t<0&&r>11){return 0}return r},getDate:function getDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Bt(this);var r=Xt(this);var e=Lt(this);if(t<0&&r>11){if(r===12){return e}var n=ar(0,t+1);return n-e+1}return e},getUTCFullYear:function getUTCFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);if(t<0&&Kt(this)>11){return t+1}return t},getUTCMonth:function getUTCMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);var r=Kt(this);if(t<0&&r>11){return 0}return r},getUTCDate:function getUTCDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);var r=Kt(this);var e=Qt(this);if(t<0&&r>11){if(r===12){return e}var n=ar(0,t+1);return n-e+1}return e}},Jt);P(Date.prototype,{toUTCString:function toUTCString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Vt(this);var r=Qt(this);var e=Kt(this);var n=qt(this);var i=_t(this);var a=tr(this);var o=rr(this);return nr[t]+", "+(r<10?"0"+r:r)+" "+ir[e]+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"}},Jt||zt);P(Date.prototype,{toDateString:function toDateString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();return nr[t]+" "+ir[e]+" "+(r<10?"0"+r:r)+" "+n}},Jt||Gt);if(Jt||Ht){Date.prototype.toString=function toString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();var i=this.getHours();var a=this.getMinutes();var o=this.getSeconds();var f=this.getTimezoneOffset();var u=Math.floor(Math.abs(f)/60);var l=Math.floor(Math.abs(f)%60);return nr[t]+" "+ir[e]+" "+(r<10?"0"+r:r)+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"+(f>0?"-":"+")+(u<10?"0"+u:u)+(l<10?"0"+l:l)};if(R){e.defineProperty(Date.prototype,"toString",{configurable:true,enumerable:false,writable:true})}}var or=-621987552e5;var fr="-000001";var ur=Date.prototype.toISOString&&new Date(or).toISOString().indexOf(fr)===-1;var lr=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";var sr=d.bind(Date.prototype.getTime);P(Date.prototype,{toISOString:function toISOString(){if(!isFinite(this)||!isFinite(sr(this))){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}var t=qt(this);var r=Kt(this);t+=Math.floor(r/12);r=(r%12+12)%12;var e=[r+1,Qt(this),_t(this),tr(this),rr(this)];t=(t<0?"-":t>9999?"+":"")+K("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<e.length;++n){e[n]=K("00"+e[n],-2)}return t+"-"+W(e,0,2).join("-")+"T"+W(e,2).join(":")+"."+K("000"+er(this),-3)+"Z"}},ur||lr);var cr=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(or).toJSON().indexOf(fr)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(t){return false}}();if(!cr){Date.prototype.toJSON=function toJSON(t){var r=e(this);var n=Z.ToPrimitive(r);if(typeof n==="number"&&!isFinite(n)){return null}var i=r.toISOString;if(!D(i)){throw new TypeError("toISOString property is not callable")}return i.call(r)}}var vr=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var hr=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var pr=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(pr||hr||!vr){var yr=Math.pow(2,31)-1;var dr=Y(new Date(1970,0,1,0,0,0,yr+1).getTime());Date=function(t){var r=function Date(e,n,i,a,f,u,l){var s=arguments.length;var c;if(this instanceof t){var v=u;var h=l;if(dr&&s>=7&&l>yr){var p=Math.floor(l/yr)*yr;var y=Math.floor(p/1e3);v+=y;h-=y*1e3}c=s===1&&o(e)===e?new t(r.parse(e)):s>=7?new t(e,n,i,a,f,v,h):s>=6?new t(e,n,i,a,f,v):s>=5?new t(e,n,i,a,f):s>=4?new t(e,n,i,a):s>=3?new t(e,n,i):s>=2?new t(e,n):s>=1?new t(e instanceof t?+e:e):new t}else{c=t.apply(this,arguments)}if(!J(c)){P(c,{constructor:r},true)}return c};var e=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(t,r){var e=r>1?1:0;return n[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)};var a=function toUTC(r){var e=0;var n=r;if(dr&&n>yr){var i=Math.floor(n/yr)*yr;var a=Math.floor(i/1e3);e+=a;n-=a*1e3}return u(new t(1970,0,1,0,0,e,n))};for(var f in t){if(G(t,f)){r[f]=t[f]}}P(r,{now:t.now,UTC:t.UTC},true);r.prototype=t.prototype;P(r.prototype,{constructor:r},true);var l=function parse(r){var n=e.exec(r);if(n){var o=u(n[1]),f=u(n[2]||1)-1,l=u(n[3]||1)-1,s=u(n[4]||0),c=u(n[5]||0),v=u(n[6]||0),h=Math.floor(u(n[7]||0)*1e3),p=Boolean(n[4]&&!n[8]),y=n[9]==="-"?1:-1,d=u(n[10]||0),g=u(n[11]||0),w;var b=c>0||v>0||h>0;if(s<(b?24:25)&&c<60&&v<60&&h<1e3&&f>-1&&f<12&&d<24&&g<60&&l>-1&&l<i(o,f+1)-i(o,f)){w=((i(o,f)+l)*24+s+d*y)*60;w=((w+c+g*y)*60+v)*1e3+h;if(p){w=a(w)}if(-864e13<=w&&w<=864e13){return w}}return NaN}return t.parse.apply(this,arguments)};P(r,{parse:l});return r}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var gr=l.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||(1000000000000000128).toFixed(0)!=="1000000000000000128");var wr={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(t,r){var e=-1;var n=r;while(++e<wr.size){n+=t*wr.data[e];wr.data[e]=n%wr.base;n=Math.floor(n/wr.base)}},divide:function divide(t){var r=wr.size;var e=0;while(--r>=0){e+=wr.data[r];wr.data[r]=Math.floor(e/t);e=e%t*wr.base}},numToString:function numToString(){var t=wr.size;var r="";while(--t>=0){if(r!==""||t===0||wr.data[t]!==0){var e=o(wr.data[t]);if(r===""){r=e}else{r+=K("0000000",0,7-e.length)+e}}}return r},pow:function pow(t,r,e){return r===0?e:r%2===1?pow(t,r-1,e*t):pow(t*t,r/2,e)},log:function log(t){var r=0;var e=t;while(e>=4096){r+=12;e/=4096}while(e>=2){r+=1;e/=2}return r}};var br=function toFixed(t){var r,e,n,i,a,f,l,s;r=u(t);r=Y(r)?0:Math.floor(r);if(r<0||r>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}e=u(this);if(Y(e)){return"NaN"}if(e<=-1e21||e>=1e21){return o(e)}n="";if(e<0){n="-";e=-e}i="0";if(e>1e-21){a=wr.log(e*wr.pow(2,69,1))-69;f=a<0?e*wr.pow(2,-a,1):e/wr.pow(2,a,1);f*=4503599627370496;a=52-a;if(a>0){wr.multiply(0,f);l=r;while(l>=7){wr.multiply(1e7,0);l-=7}wr.multiply(wr.pow(10,l,1),0);l=a-1;while(l>=23){wr.divide(1<<23);l-=23}wr.divide(1<<l);wr.multiply(1,1);wr.divide(2);i=wr.numToString()}else{wr.multiply(0,f);wr.multiply(1<<-a,0);i=wr.numToString()+K("0.00000000000000000000",2,2+r)}}if(r>0){s=i.length;if(s<=r){i=n+K("0.0000000000000000000",0,r-s+2)+i}else{i=n+K(i,0,s-r)+"."+K(i,s-r)}}else{i=n+i}return i};P(l,{toFixed:br},gr);var Tr=function(){try{return 1..toPrecision(undefined)==="1"}catch(t){return true}}();var mr=l.toPrecision;P(l,{toPrecision:function toPrecision(t){return typeof t==="undefined"?mr.call(this):mr.call(this,t)}},Tr);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";var r=Math.pow(2,32)-1;f.split=function(e,n){var i=String(this);if(typeof e==="undefined"&&n===0){return[]}if(!M(e)){return Q(this,e,n)}var a=[];var o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,u,l,s,c;var h=new RegExp(e.source,o+"g");if(!t){u=new RegExp("^"+h.source+"$(?!\\s)",o)}var p=typeof n==="undefined"?r:Z.ToUint32(n);l=h.exec(i);while(l){s=l.index+l[0].length;if(s>f){_(a,K(i,f,l.index));if(!t&&l.length>1){l[0].replace(u,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){l[t]=void 0}}})}if(l.length>1&&l.index<i.length){v.apply(a,W(l,1))}c=l[0].length;f=s;if(a.length>=p){break}}if(h.lastIndex===l.index){h.lastIndex++}l=h.exec(i)}if(f===i.length){if(c||!h.test("")){_(a,"")}}else{_(a,K(i,f))}return a.length>p?W(a,0,p):a}})()}else if("0".split(void 0,0).length){f.split=function split(t,r){if(typeof t==="undefined"&&r===0){return[]}return Q(this,t,r)}}var Dr=f.replace;var Sr=function(){var t=[];"x".replace(/x(.)?/g,function(r,e){_(t,e)});return t.length===1&&typeof t[0]==="undefined"}();if(!Sr){f.replace=function replace(t,r){var e=D(r);var n=M(t)&&/\)[*?]/.test(t.source);if(!e||!n){return Dr.call(this,t,r)}else{var i=function(e){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(e)||[];t.lastIndex=i;_(a,arguments[n-2],arguments[n-1]);return r.apply(this,a)};return Dr.call(this,t,i)}}}var xr=f.substr;var Or="".substr&&"0b".substr(-1)!=="b";P(f,{substr:function substr(t,r){var e=t;if(t<0){e=w(this.length+t,0)}return xr.call(this,e,r)}},Or);var Er="\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var jr="\u200b";var Ir="["+Er+"]";var Mr=new RegExp("^"+Ir+Ir+"*");var Ur=new RegExp(Ir+Ir+"*$");var Fr=f.trim&&(Er.trim()||!jr.trim());P(f,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return o(this).replace(Mr,"").replace(Ur,"")}},Fr);var $r=d.bind(String.prototype.trim);var Nr=f.lastIndexOf&&"abc\u3042\u3044".lastIndexOf("\u3042\u3044",2)!==-1;P(f,{lastIndexOf:function lastIndexOf(t){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var r=o(this);var e=o(t);var n=arguments.length>1?u(arguments[1]):NaN;var i=Y(n)?Infinity:Z.ToInteger(n);var a=b(w(i,0),r.length);var f=e.length;var l=a+f;while(l>0){l=w(0,l-f);var s=V(K(r,l,a+f),e);if(s!==-1){return l+s}}return-1}},Nr);var Cr=f.lastIndexOf;P(f,{lastIndexOf:function lastIndexOf(t){return Cr.apply(this,arguments)}},f.lastIndexOf.length!==1);if(parseInt(Er+"08")!==8||parseInt(Er+"0x16")!==22){parseInt=function(t){var r=/^[-+]?0[xX]/;return function parseInt(e,n){if(typeof e==="symbol"){""+e}var i=$r(String(e));var a=u(n)||(r.test(i)?16:10);return t(i,a)}}(parseInt)}if(1/parseFloat("-0")!==-Infinity){parseFloat=function(t){return function parseFloat(r){var e=$r(String(r));var n=t(e);return n===0&&K(e,0,1)==="-"?-0:n}}(parseFloat)}if(String(new RangeError("test"))!=="RangeError: test"){var kr=function toString(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var t=this.name;if(typeof t==="undefined"){t="Error"}else if(typeof t!=="string"){t=o(t)}var r=this.message;if(typeof r==="undefined"){r=""}else if(typeof r!=="string"){r=o(r)}if(!t){return r}if(!r){return t}return t+": "+r};Error.prototype.toString=kr}if(R){var Ar=function(t,r){if(tt(t,r)){var e=Object.getOwnPropertyDescriptor(t,r);if(e.configurable){e.enumerable=false;Object.defineProperty(t,r,e)}}};Ar(Error.prototype,"message");if(Error.prototype.message!==""){Error.prototype.message=""}Ar(Error.prototype,"name")}if(String(/a/gim)!=="/a/gim"){var Rr=function toString(){var t="/"+this.source+"/";if(this.global){t+="g"}if(this.ignoreCase){t+="i"}if(this.multiline){t+="m"}return t};RegExp.prototype.toString=Rr}});

/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function(e,t){"use strict";if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n=e.bind(t.propertyIsEnumerable);var o=e.bind(t.toString);var i;var c;var f;var a;var l=r(t,"__defineGetter__");if(l){i=e.bind(t.__defineGetter__);c=e.bind(t.__defineSetter__);f=e.bind(t.__lookupGetter__);a=e.bind(t.__lookupSetter__)}var u=function isPrimitive(e){return e==null||typeof e!=="object"&&typeof e!=="function"};if(!Object.getPrototypeOf){Object.getPrototypeOf=function getPrototypeOf(e){var r=e.__proto__;if(r||r===null){return r}else if(o(e.constructor)==="[object Function]"){return e.constructor.prototype}else if(e instanceof Object){return t}else{return null}}}var p=function doesGetOwnPropertyDescriptorWork(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){return false}};if(Object.defineProperty){var s=p({});var b=typeof document==="undefined"||p(document.createElement("div"));if(!b||!s){var O=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||O){var d="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(e,o){if(u(e)){throw new TypeError(d+e)}if(O){try{return O.call(Object,e,o)}catch(i){}}var c;if(!r(e,o)){return c}c={enumerable:n(e,o),configurable:true};if(l){var p=e.__proto__;var s=e!==t;if(s){e.__proto__=t}var b=f(e,o);var y=a(e,o);if(s){e.__proto__=p}if(b||y){if(b){c.get=b}if(y){c.set=y}return c}}c.value=e[o];c.writable=true;return c}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function getOwnPropertyNames(e){return Object.keys(e)}}if(!Object.create){var y;var j=!({__proto__:null}instanceof Object);var v=function shouldUseActiveX(){if(!document.domain){return false}try{return!!new ActiveXObject("htmlfile")}catch(e){return false}};var _=function getEmptyViaActiveX(){var e;var t;t=new ActiveXObject("htmlfile");var r="script";t.write("<"+r+"></"+r+">");t.close();e=t.parentWindow.Object.prototype;t=null;return e};var w=function getEmptyViaIFrame(){var e=document.createElement("iframe");var t=document.body||document.documentElement;var r;e.style.display="none";t.appendChild(e);e.src="javascript:";r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;return r};if(j||typeof document==="undefined"){y=function(){return{__proto__:null}}}else{y=function(){var e=v()?_():w();delete e.constructor;delete e.hasOwnProperty;delete e.propertyIsEnumerable;delete e.isPrototypeOf;delete e.toLocaleString;delete e.toString;delete e.valueOf;var t=function Empty(){};t.prototype=e;y=function(){return new t};return new t}}Object.create=function create(e,t){var r;var n=function Type(){};if(e===null){r=y()}else{if(e!==null&&u(e)){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}var m=function doesDefinePropertyWork(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){return false}};if(Object.defineProperty){var P=m({});var E=typeof document==="undefined"||m(document.createElement("div"));if(!P||!E){var h=Object.defineProperty,g=Object.defineProperties}}if(!Object.defineProperty||h){var z="Property description must be an object: ";var T="Object.defineProperty called on non-object: ";var x="getters & setters can not be defined on this javascript engine";Object.defineProperty=function defineProperty(e,r,n){if(u(e)){throw new TypeError(T+e)}if(u(n)){throw new TypeError(z+n)}if(h){try{return h.call(Object,e,r,n)}catch(o){}}if("value"in n){if(l&&(f(e,r)||a(e,r))){var p=e.__proto__;e.__proto__=t;delete e[r];e[r]=n.value;e.__proto__=p}else{e[r]=n.value}}else{var s="get"in n;var b="set"in n;if(!l&&(s||b)){throw new TypeError(x)}if(s){i(e,r,n.get)}if(b){c(e,r,n.set)}}return e}}if(!Object.defineProperties||g){Object.defineProperties=function defineProperties(e,t){if(g){try{return g.call(Object,e,t)}catch(r){}}Object.keys(t).forEach(function(r){if(r!=="__proto__"){Object.defineProperty(e,r,t[r])}});return e}}if(!Object.seal){Object.seal=function seal(e){if(Object(e)!==e){throw new TypeError("Object.seal can only be called on Objects.")}return e}}if(!Object.freeze){Object.freeze=function freeze(e){if(Object(e)!==e){throw new TypeError("Object.freeze can only be called on Objects.")}return e}}try{Object.freeze(function(){})}catch(S){Object.freeze=function(e){return function freeze(t){if(typeof t==="function"){return t}else{return e(t)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function preventExtensions(e){if(Object(e)!==e){throw new TypeError("Object.preventExtensions can only be called on Objects.")}return e}}if(!Object.isSealed){Object.isSealed=function isSealed(e){if(Object(e)!==e){throw new TypeError("Object.isSealed can only be called on Objects.")}return false}}if(!Object.isFrozen){Object.isFrozen=function isFrozen(e){if(Object(e)!==e){throw new TypeError("Object.isFrozen can only be called on Objects.")}return false}}if(!Object.isExtensible){Object.isExtensible=function isExtensible(e){if(Object(e)!==e){throw new TypeError("Object.isExtensible can only be called on Objects.")}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});

/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(e){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(e){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Map;var H=G&&G.prototype["delete"];var V=G&&G.prototype.get;var B=G&&G.prototype.has;var U=G&&G.prototype.set;var $=S.Symbol||{};var J=$.species||"@@species";var X=Number.isNaN||function isNaN(e){return e!==e};var K=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Z=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(X(t)){return t}return t<0?-1:1};var Y=function isArguments(e){return g(e)==="[object Arguments]"};var Q=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var ee=Y(arguments)?Y:Q;var te={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var re=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ne=typeof $==="function"&&typeof $["for"]==="function"&&te.symbol($());var oe=te.symbol($.iterator)?$.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){oe="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ie=S.Reflect;var ae=String;var ue=typeof document==="undefined"||!document?null:document.all;var fe=ue==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==ue};var se={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!se.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(fe(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===ue},ToObject:function(e,t){return Object(se.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return se.IsCallable(e)},ToInt32:function(e){return se.ToNumber(e)>>0},ToUint32:function(e){return se.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=se.ToNumber(e);if(X(t)){return 0}if(t===0||!K(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=se.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return se.TypeIsObject(e)&&(typeof e[oe]!=="undefined"||ee(e))},GetIterator:function(e){if(ee(e)){return new q(e,"value")}var t=se.GetMethod(e,oe);if(!se.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=se.Call(t,e);if(!se.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=se.ToObject(e)[t];if(fe(r)){return void 0}if(!se.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=se.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=se.Call(r,e)}catch(e){o=e}if(t){return}if(o){throw o}if(!se.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!se.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=se.IteratorNext(e);var r=se.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ie.construct){return ie.construct(e,t,o)}var i=o.prototype;if(!se.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=se.Call(e,a,t);return se.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!se.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[J];if(fe(n)){return t}if(!se.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=se.ToString(e);var i="<"+t;if(r!==""){var a=se.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!se.TypeIsObject(e)){return false}var t=e[$.match];if(typeof t!=="undefined"){return!!t}return te.regex(e)},ToString:function ToString(e){return ae(e)}};if(s&&ne){var ce=function defineWellKnownSymbol(e){if(te.symbol($[e])){return $[e]}var t=$["for"]("Symbol."+e);Object.defineProperty($,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!te.symbol($.search)){var le=ce("search");var pe=String.prototype.search;h(RegExp.prototype,le,function search(e){return se.Call(pe,e,[this])});var ve=function search(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,le);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(pe,t,[se.ToString(e)])};re(String.prototype,"search",ve)}if(!te.symbol($.replace)){var ye=ce("replace");var he=String.prototype.replace;h(RegExp.prototype,ye,function replace(e,t){return se.Call(he,e,[this,t])});var be=function replace(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ye);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(he,r,[se.ToString(e),t])};re(String.prototype,"replace",be)}if(!te.symbol($.split)){var ge=ce("split");var de=String.prototype.split;h(RegExp.prototype,ge,function split(e,t){return se.Call(de,e,[this,t])});var me=function split(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ge);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(de,r,[se.ToString(e),t])};re(String.prototype,"split",me)}var Oe=te.symbol($.match);var we=Oe&&function(){var e={};e[$.match]=function(){return 42};return"a".match(e)!==42}();if(!Oe||we){var je=ce("match");var Se=String.prototype.match;h(RegExp.prototype,je,function match(e){return se.Call(Se,e,[this])});var Te=function match(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,je);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(Se,t,[se.ToString(e)])};re(String.prototype,"match",Te)}}var Ie=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ee=function(){return this};var Pe=function(e){if(s&&!z(e,J)){m.getter(e,J,Ee)}};var Ce=function(e,t){var r=t||function iterator(){return this};h(e,oe,r);if(!e[oe]&&te.symbol(oe)){e[oe]=r}};var Me=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var xe=function createDataPropertyOrThrow(e,t,r){Me(e,t,r);if(!se.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Ne=function(e,t,r,n){if(!se.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!se.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ae=String.fromCodePoint;re(String,"fromCodePoint",function fromCodePoint(e){return se.Call(Ae,this,arguments)})}var Re={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!se.SameValue(r,se.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=se.ToObject(e,"bad callSite");var r=se.ToObject(t.raw,"bad raw value");var n=r.length;var o=se.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=se.ToString(a);s=se.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=se.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){re(String,"raw",Re.raw)}b(String,Re);var _e=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ke=Infinity;var Fe={repeat:function repeat(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);if(r<0||r>=ke){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return _e(t,r)},startsWith:function startsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=se.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(se.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=se.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:se.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(se.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=se.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){re(String.prototype,"includes",Fe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Le=i(function(){"/a/".startsWith(/a/)});var De=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Le||!De){re(String.prototype,"startsWith",Fe.startsWith);re(String.prototype,"endsWith",Fe.endsWith)}}if(ne){var ze=a(function(){var e=/a/;e[$.match]=false;return"/a/".startsWith(e)});if(!ze){re(String.prototype,"startsWith",Fe.startsWith)}var qe=a(function(){var e=/a/;e[$.match]=false;return"/a/".endsWith(e)});if(!qe){re(String.prototype,"endsWith",Fe.endsWith)}var We=a(function(){var e=/a/;e[$.match]=false;return"/a/".includes(e)});if(!We){re(String.prototype,"includes",Fe.includes)}}b(String.prototype,Fe);var Ge=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var He=new RegExp("(^["+Ge+"]+)|(["+Ge+"]+$)","g");var Ve=function trim(){return se.ToString(se.RequireObjectCoercible(this)).replace(He,"")};var Be=["\x85","\u200b","\ufffe"].join("");var Ue=new RegExp("["+Be+"]","g");var $e=/^[-+]0x[0-9a-f]+$/i;var Je=Be.trim().length!==Be.length;h(String.prototype,"trim",Ve,Je);var Xe=function(e){return{value:e,done:arguments.length===0}};var Ke=function(e){se.RequireObjectCoercible(e);this._s=se.ToString(e);this._i=0};Ke.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Xe()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Xe(e.substr(t,o))};Ce(Ke.prototype);Ce(String.prototype,function(){return new Ke(this)});var Ze={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!se.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(ee(e)||se.GetMethod(e,oe))!=="undefined";var u,f,s;if(a){f=se.IsConstructor(r)?Object(new r):[];var c=se.GetIterator(e);var l,p;s=0;while(true){l=se.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(e){se.IteratorClose(c,true);throw e}s+=1}u=s}else{var v=se.ToObject(e);u=se.ToLength(v.length);f=se.IsConstructor(r)?Object(new r(u)):new Array(u);var y;for(s=0;s<u;++s){y=v[s];if(o){y=typeof i==="undefined"?n(y,s):t(n,i,y,s)}xe(f,s,y)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!se.IsCallable(t)?new Array(e):se.Construct(t,[e]);for(var o=0;o<e;++o){xe(n,o,arguments[o])}n.length=e;return n}};b(Array,Ze);Pe(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=se.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Xe(o)}}this.array=void 0;return Xe()}});Ce(q.prototype);var Ye=Array.of===Ze.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Ye){re(Array,"of",Ze.of)}var Qe={copyWithin:function copyWithin(e,t){var r=se.ToObject(this);var n=se.ToLength(r.length);var o=se.ToInteger(e);var i=se.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:se.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=se.ToObject(this);var o=se.ToLength(n.length);t=se.ToInteger(typeof t==="undefined"?0:t);r=se.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!se.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!se.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[oe]){b(Array.prototype,{values:Array.prototype[oe]});if(te.symbol($.unscopables)){Array.prototype[$.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var et=Array.prototype.values;re(Array.prototype,"values",function values(){return se.Call(et,this,arguments)});h(Array.prototype,oe,Array.prototype.values,true)}b(Array.prototype,Qe);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}Ce(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Ce(Object.getPrototypeOf([].values()))}var tt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var rt=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!tt||!rt){re(Array,"from",Ze.from)}var nt=function(){return a(function(){return Array.from([0],void 0)})}();if(!nt){var ot=Array.from;re(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return se.Call(ot,this,arguments)}else{return t(ot,this,e)}})}var it=-(Math.pow(2,32)-1);var at=function(e,r){var n={length:it};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!at(Array.prototype.forEach)){var ut=Array.prototype.forEach;re(Array.prototype,"forEach",function forEach(e){return se.Call(ut,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.map)){var ft=Array.prototype.map;re(Array.prototype,"map",function map(e){return se.Call(ft,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.filter)){var st=Array.prototype.filter;re(Array.prototype,"filter",function filter(e){return se.Call(st,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.some)){var ct=Array.prototype.some;re(Array.prototype,"some",function some(e){return se.Call(ct,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.every)){var lt=Array.prototype.every;re(Array.prototype,"every",function every(e){return se.Call(lt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduce)){var pt=Array.prototype.reduce;re(Array.prototype,"reduce",function reduce(e){return se.Call(pt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduceRight,true)){var vt=Array.prototype.reduceRight;re(Array.prototype,"reduceRight",function reduceRight(e){return se.Call(vt,this.length>=0?this:[],arguments)},true)}var yt=Number("0o10")!==8;var ht=Number("0b10")!==2;var bt=y(Be,function(e){return Number(e+0+e)===0});if(yt||ht||bt){var gt=Number;var dt=/^0b[01]+$/i;var mt=/^0o[0-7]+$/i;var Ot=dt.test.bind(dt);var wt=mt.test.bind(mt);var jt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(te.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(te.primitive(t)){return t}}throw new TypeError("No default value")};var St=Ue.test.bind(Ue);var Tt=$e.test.bind($e);var It=function(){var e=function Number(t){var r;if(arguments.length>0){r=te.primitive(t)?t:jt(t,"number")}else{r=0}if(typeof r==="string"){r=se.Call(Ve,r);if(Ot(r)){r=parseInt(C(r,2),2)}else if(wt(r)){r=parseInt(C(r,2),8)}else if(St(r)||Tt(r)){r=NaN}}var n=this;var o=a(function(){gt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new gt(r)}return gt(r)};return e}();Ie(gt,It,{});b(It,{NaN:gt.NaN,MAX_VALUE:gt.MAX_VALUE,MIN_VALUE:gt.MIN_VALUE,NEGATIVE_INFINITY:gt.NEGATIVE_INFINITY,POSITIVE_INFINITY:gt.POSITIVE_INFINITY});Number=It;m.redefine(S,"Number",It)}var Et=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Et,MIN_SAFE_INTEGER:-Et,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:K,isInteger:function isInteger(e){return K(e)&&se.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){re(Array.prototype,"find",Qe.find)}if([,1].findIndex(function(){return true})!==0){re(Array.prototype,"findIndex",Qe.findIndex)}var Pt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ct=function ensureEnumerable(e,t){if(s&&Pt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Mt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var xt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Nt=function(e,t){var r=n(Object(t));var o;if(se.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Pt(t))}return p(P(r,o||[]),xt(t),e)};var At={assign:function(e,t){var r=se.ToObject(e,"Cannot convert undefined or null to object");return p(se.Call(Mt,1,arguments),Nt,r)},is:function is(e,t){return se.SameValue(e,t)}};var Rt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Rt){re(Object,"assign",At.assign)}b(Object,At);if(s){var _t={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!se.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||se.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(t){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,_t)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var kt=!i(function(){Object.keys("foo")});if(!kt){var Ft=Object.keys;re(Object,"keys",function keys(e){return Ft(se.ToObject(e))});n=Object.keys}var Lt=i(function(){Object.keys(/a/g)});if(Lt){var Dt=Object.keys;re(Object,"keys",function keys(e){if(te.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Dt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var zt=!i(function(){Object.getOwnPropertyNames("foo")});if(!zt){var qt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Wt=Object.getOwnPropertyNames;re(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=se.ToObject(e);if(g(t)==="[object Window]"){try{return Wt(t)}catch(e){return P([],qt)}}return Wt(t)})}}if(Object.getOwnPropertyDescriptor){var Gt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Gt){var Ht=Object.getOwnPropertyDescriptor;re(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ht(se.ToObject(e),t)})}}if(Object.seal){var Vt=!i(function(){Object.seal("foo")});if(!Vt){var Bt=Object.seal;re(Object,"seal",function seal(e){if(!se.TypeIsObject(e)){return e}return Bt(e)})}}if(Object.isSealed){var Ut=!i(function(){Object.isSealed("foo")});if(!Ut){var $t=Object.isSealed;re(Object,"isSealed",function isSealed(e){if(!se.TypeIsObject(e)){return true}return $t(e)})}}if(Object.freeze){var Jt=!i(function(){Object.freeze("foo")});if(!Jt){var Xt=Object.freeze;re(Object,"freeze",function freeze(e){if(!se.TypeIsObject(e)){return e}return Xt(e)})}}if(Object.isFrozen){var Kt=!i(function(){Object.isFrozen("foo")});if(!Kt){var Zt=Object.isFrozen;re(Object,"isFrozen",function isFrozen(e){if(!se.TypeIsObject(e)){return true}return Zt(e)})}}if(Object.preventExtensions){var Yt=!i(function(){Object.preventExtensions("foo")});if(!Yt){var Qt=Object.preventExtensions;re(Object,"preventExtensions",function preventExtensions(e){if(!se.TypeIsObject(e)){return e}return Qt(e)})}}if(Object.isExtensible){var er=!i(function(){Object.isExtensible("foo")});if(!er){var tr=Object.isExtensible;re(Object,"isExtensible",function isExtensible(e){if(!se.TypeIsObject(e)){return false}return tr(e)})}}if(Object.getPrototypeOf){var rr=!i(function(){Object.getPrototypeOf("foo")});if(!rr){var nr=Object.getPrototypeOf;re(Object,"getPrototypeOf",function getPrototypeOf(e){return nr(se.ToObject(e))})}}var or=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&se.IsCallable(e.get)}();if(s&&!or){var ir=function flags(){if(!se.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ir)}var ar=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var ur=ne&&s&&function(){var e=/./;e[$.match]=false;return RegExp(e)===e}();var fr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var sr=fr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!fr||!sr){var cr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=se.RequireObjectCoercible(this);if(te.regex(e)){return t(cr,e)}var r=ae(e.source);var n=ae(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,cr)}if(s&&(!ar||ur)){var lr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var pr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var vr=function(){return this.source};var yr=se.IsCallable(pr.get)?pr.get:vr;var hr=RegExp;var br=function(){return function RegExp(e,t){var r=se.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(te.regex(e)){o=se.Call(yr,e);i=typeof t==="undefined"?se.Call(lr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new hr(e,t)}}();Ie(hr,br,{$input:true});RegExp=br;m.redefine(S,"RegExp",br)}if(s){var gr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(gr),function(e){if(e in RegExp&&!(gr[e]in RegExp)){m.getter(RegExp,gr[e],function get(){return RegExp[e]})}})}Pe(RegExp);var dr=1/Number.EPSILON;var mr=function roundTiesToEven(e){return e+dr-dr};var Or=Math.pow(2,-23);var wr=Math.pow(2,127)*(2-Or);var jr=Math.pow(2,-126);var Sr=Math.E;var Tr=Math.LOG2E;var Ir=Math.LOG10E;var Er=Number.prototype.clz;delete Number.prototype.clz;var Pr={acosh:function acosh(e){var t=Number(e);if(X(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/Sr+D(t+1)*D(t-1)/Sr)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(X(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=se.ToUint32(t);if(r===0){return 32}return Er?se.Call(Er,r):31-_(L(r+.5)*Tr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(X(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*Tr},log10:function log10(e){return L(e)*Ir},log1p:function log1p(e){var t=Number(e);if(t<-1||X(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:Z,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*Sr/2},tanh:function tanh(e){var t=Number(e);if(X(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=se.ToUint32(e);var n=se.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Z(t);var n=k(t);if(n<jr){return r*mr(n/jr/Or)*jr*Or}var o=(1+Or/Number.EPSILON)*n;var i=o-(o-n);if(i>wr||X(i)){return r*Infinity}return r*i}};b(Math,Pr);h(Math,"log1p",Pr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Pr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",Pr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Pr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",Pr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",Pr.sinh,Math.sinh(-2e-17)!==-2e-17);var Cr=Math.expm1(10);h(Math,"expm1",Pr.expm1,Cr>22025.465794806718||Cr<22025.465794806718);var Mr=Math.round;var xr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Nr=dr+1;var Ar=2*dr-1;var Rr=[Nr,Ar].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!xr||!Rr);m.preserveToString(Math.round,Mr);var _r=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Pr.imul;m.preserveToString(Math.imul,_r)}if(Math.imul.length!==2){re(Math,"imul",function imul(e,t){return se.Call(_r,Math,arguments)})}var kr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}se.IsPromise=function(e){if(!se.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!se.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(se.IsCallable(t.resolve)&&se.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&se.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=se.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(se.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(e){n=e;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!se.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(t){return m(e,t)}if(!se.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(e){i(e)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!se.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Ne(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(e){o(e)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=se.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(t){e.done=true;throw t}o[f]=void 0;var s=t.resolve(u);var c=P(f,o,r,i);i.count+=1;w(s.then,s,c,r.reject);f+=1}if(--i.count===0){var l=r.resolve;l(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=se.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(t){e.done=true;throw t}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},race:function race(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},reject:function reject(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(se.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{catch:function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!se.IsPromise(n)){throw new TypeError("not a promise")}var o=se.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=se.IsCallable(e)?e:a;var d=se.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof kr==="function"){b(S,{Promise:kr});var Fr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Lr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Dr=i(function(){S.Promise.call(3,W)});var zr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(e){return true}return t===r}(S.Promise);var qr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Wr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Wr.prototype=Promise.prototype;Wr.all=Promise.all;var Gr=a(function(){return!!Wr.all([1,2])});if(!Fr||!Lr||!Dr||zr||!qr||Gr){Promise=kr;re(S,"Promise",kr)}if(Promise.all.length!==1){var Hr=Promise.all;re(Promise,"all",function all(e){return se.Call(Hr,this,arguments)})}if(Promise.race.length!==1){var Vr=Promise.race;re(Promise,"race",function race(e){return se.Call(Vr,this,arguments)})}if(Promise.resolve.length!==1){var Br=Promise.resolve;re(Promise,"resolve",function resolve(e){return se.Call(Br,this,arguments)})}if(Promise.reject.length!==1){var Ur=Promise.reject;re(Promise,"reject",function reject(e){return se.Call(Ur,this,arguments)})}Ct(Promise,"all");Ct(Promise,"race");Ct(Promise,"resolve");Ct(Promise,"reject");Pe(Promise)}var $r=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Jr=$r(["z","a","bb"]);var Xr=$r(["z",1,"a","3",2]);if(s){var Kr=function fastkey(e,t){if(!t&&!Jr){return null}if(fe(e)){return"^"+se.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Xr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Zr=function emptyObject(){return Object.create?Object.create(null):{}};var Yr=function addIterableToMap(e,n,o){if(r(o)||te.string(o)){l(o,function(e){if(!se.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!fe(o)){a=n.set;if(!se.IsCallable(a)){throw new TypeError("bad map")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!se.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(e){se.IteratorClose(i,true);throw e}}}}};var Qr=function addIterableToSet(e,n,o){if(r(o)||te.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!fe(o)){a=n.add;if(!se.IsCallable(a)){throw new TypeError("bad set")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(e){se.IteratorClose(i,true);throw e}}}}};var en={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!se.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+se.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Xe()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Xe(n)}}this.i=void 0;return Xe()}};Ce(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Ne(this,Map,a,{_es6map:true,_head:null,_map:G?new G:null,_size:0,_storage:Zr()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Yr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Kr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=V.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Kr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return B.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(se.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Kr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(B.call(this._map,e)){V.call(this._map,e).value=t}else{a=new r(e,t);U.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(se.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},delete:function(t){o(this,"delete");var r=this._head;var n=r;var i=Kr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!B.call(this._map,t)){return false}n=V.call(this._map,t).prev;H.call(this._map,t)}while((n=n.next)!==r){if(se.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=G?new G:null;this._size=0;this._storage=Zr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Ce(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!se.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+se.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Ne(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Zr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){Qr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new en.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Kr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Kr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},delete:function(e){r(this,"delete");var t;if(this._storage&&(t=Kr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Zr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);Ce(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var tn=a(function(){return new Map([[1,2]]).get(1)===2});if(!tn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(G.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var rn=new Map;var nn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var on=rn.set(1,2)===rn;if(!nn||!on){re(Map.prototype,"set",function set(e,r){t(U,this,e===0?0:e,r);return this})}if(!nn){b(Map.prototype,{get:function get(e){return t(V,this,e===0?0:e)},has:function has(e){return t(B,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,V);m.preserveToString(Map.prototype.has,B)}var an=new Set;var un=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(an);var fn=an.add(1)===an;if(!un||!fn){var sn=Set.prototype.add;Set.prototype.add=function add(e){t(sn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,sn)}if(!un){var cn=Set.prototype.has;Set.prototype.has=function has(e){return t(cn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,cn);var ln=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ln,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],ln)}var pn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var vn=Object.setPrototypeOf&&!pn;var yn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||vn||!yn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=G.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var hn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var bn=Object.setPrototypeOf&&!hn;var gn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||bn||!gn){var dn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new dn;if(arguments.length>0){Qr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=dn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,dn)}var mn=new S.Map;var On=!a(function(){return mn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||mn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof mn.keys().next!=="function"||On||!pn){b(S,{Map:en.Map,Set:en.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}Ce(Object.getPrototypeOf((new S.Map).keys()));Ce(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var wn=S.Set.prototype.has;re(S.Set.prototype,"has",function has(e){return t(wn,this,e)})}}b(S,en);Pe(S.Map);Pe(S.Set)}var jn=function throwUnlessTargetIsObject(e){if(!se.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Sn={apply:function apply(){return se.Call(se.Call,null,arguments)},construct:function construct(e,t){if(!se.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!se.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return se.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){jn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){jn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Sn,{ownKeys:function ownKeys(e){jn(e);var t=Object.getOwnPropertyNames(e);if(se.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Tn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Sn,{isExtensible:function isExtensible(e){jn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){jn(e);return Tn(function(){Object.preventExtensions(e)})}})}if(s){var In=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return In(o,t,r)}if("value"in n){return n.value}if(n.get){return se.Call(n.get,r)}return void 0};var En=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return En(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!se.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ie.defineProperty(o,r,{value:n})}else{return ie.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Sn,{defineProperty:function defineProperty(e,t,r){jn(e);return Tn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){jn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){jn(e);var r=arguments.length>2?arguments[2]:e;return In(e,t,r)},set:function set(e,t,r){jn(e);var n=arguments.length>3?arguments[3]:e;return En(e,t,r,n)}})}if(Object.getPrototypeOf){var Pn=Object.getPrototypeOf;Sn.getPrototypeOf=function getPrototypeOf(e){jn(e);return Pn(e)}}if(Object.setPrototypeOf&&Sn.getPrototypeOf){var Cn=function(e,t){var r=t;while(r){if(e===r){return true}r=Sn.getPrototypeOf(r)}return false};Object.assign(Sn,{setPrototypeOf:function setPrototypeOf(e,t){jn(e);if(t!==null&&!se.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ie.getPrototypeOf(e)){return true}if(ie.isExtensible&&!ie.isExtensible(e)){return false}if(Cn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Mn=function(e,t){if(!se.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){re(S.Reflect,e,t)}}};Object.keys(Sn).forEach(function(e){Mn(e,Sn[e])});var xn=S.Reflect.getPrototypeOf;if(c&&xn&&xn.name!=="getPrototypeOf"){re(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(xn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){re(S.Reflect,"setPrototypeOf",Sn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){re(S.Reflect,"defineProperty",Sn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){re(S.Reflect,"construct",Sn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Nn=Date.prototype.toString;var An=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return se.Call(Nn,this)};re(Date.prototype,"toString",An)}var Rn={anchor:function anchor(e){return se.CreateHTML(this,"a","name",e)},big:function big(){return se.CreateHTML(this,"big","","")},blink:function blink(){return se.CreateHTML(this,"blink","","")},bold:function bold(){return se.CreateHTML(this,"b","","")},fixed:function fixed(){return se.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return se.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return se.CreateHTML(this,"font","size",e)},italics:function italics(){return se.CreateHTML(this,"i","","")},link:function link(e){return se.CreateHTML(this,"a","href",e)},small:function small(){return se.CreateHTML(this,"small","","")},strike:function strike(){return se.CreateHTML(this,"strike","","")},sub:function sub(){return se.CreateHTML(this,"sub","","")},sup:function sub(){return se.CreateHTML(this,"sup","","")}};l(Object.keys(Rn),function(e){var r=String.prototype[e];var n=false;if(se.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){re(String.prototype,e,Rn[e])}});var _n=function(){if(!ne){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e($())!=="undefined"){return true}if(e([$()])!=="[null]"){return true}var t={a:$()};t[$()]=true;if(e(t)!=="{}"){return true}return false}();var kn=a(function(){if(!ne){return true}return JSON.stringify(Object($()))==="{}"&&JSON.stringify([Object($())])==="[{}]"});if(_n||!kn){var Fn=JSON.stringify;re(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=se.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(te.symbol(n)){return xt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Fn.apply(this,o)})}return S});

if (isIE) {
  //https://raw.githubusercontent.com/WebReflection/dom4/master/build/dom4.js
  /*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
  !function(e){"use strict";function t(){return h.createDocumentFragment()}function n(e){return h.createElement(e)}function r(e,t){if(!e)throw new Error("Failed to construct "+t+": 1 argument required, but only 0 present.")}function i(e){if(1===e.length)return o(e[0]);for(var n=t(),r=O.call(e),i=0;i<e.length;i++)n.appendChild(o(r[i]));return n}function o(e){return"string"==typeof e?h.createTextNode(e):e}for(var a,c,l,s,u,h=e.document,p=Object.prototype.hasOwnProperty,f=Object.defineProperty||function(e,t,n){return p.call(n,"value")?e[t]=n.value:(p.call(n,"get")&&e.__defineGetter__(t,n.get),p.call(n,"set")&&e.__defineSetter__(t,n.set)),e},v=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},d=function(e){if(!e)throw"SyntaxError";if(b.test(e))throw"InvalidCharacterError";return e},y=function(e){var t="undefined"==typeof e.className,n=t?e.getAttribute("class")||"":e.className,r=t||"object"==typeof n,i=(r?t?n:n.baseVal:n).replace(E,"");i.length&&N.push.apply(this,i.split(b)),this._isSVG=r,this._=e},m={get:function(){return new y(this)},set:function(){}},E=/^\s+|\s+$/g,b=/\s+/,g=function(e,t){return this.contains(e)?t||this.remove(e):(t===undefined||t)&&(t=!0,this.add(e)),!!t},_=e.DocumentFragment&&DocumentFragment.prototype,w=e.Node,K=(w||Element).prototype,A=e.CharacterData||w,C=A&&A.prototype,S=e.DocumentType,k=S&&S.prototype,M=(e.Element||w||e.HTMLElement).prototype,L=e.HTMLSelectElement||n("select").constructor,T=L.prototype.remove,q=e.SVGElement,N=["matches",M.matchesSelector||M.webkitMatchesSelector||M.khtmlMatchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<v.call(t.querySelectorAll(e),this)},"closest",function(e){for(var t,n=this;(t=n&&n.matches)&&!n.matches(e);)n=n.parentNode;return t?n:null},"prepend",function(){var e=this.firstChild,t=i(arguments);e?this.insertBefore(t,e):this.appendChild(t)},"append",function(){this.appendChild(i(arguments))},"before",function(){var e=this.parentNode;e&&e.insertBefore(i(arguments),this)},"after",function(){var e=this.parentNode,t=this.nextSibling,n=i(arguments);e&&(t?e.insertBefore(n,t):e.appendChild(n))},"toggleAttribute",function(e,t){var n=this.hasAttribute(e);return 1<arguments.length?n&&!t?this.removeAttribute(e):t&&!n&&this.setAttribute(e,""):n?this.removeAttribute(e):this.setAttribute(e,""),this.hasAttribute(e)},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var e=this.parentNode;e&&e.replaceChild(i(arguments),this)},"remove",function(){var e=this.parentNode;e&&e.removeChild(this)}],O=N.slice,D=N.length;D;D-=2)if(c=N[D-2],c in M||(M[c]=N[D-1]),"remove"!==c||T._dom4||((L.prototype[c]=function(){return 0<arguments.length?T.apply(this,arguments):M.remove.call(this)})._dom4=!0),/^(?:before|after|replace|replaceWith|remove)$/.test(c)&&(!A||c in C||(C[c]=N[D-1]),!S||c in k||(k[c]=N[D-1])),/^(?:append|prepend)$/.test(c))if(_)c in _||(_[c]=N[D-1]);else try{t().constructor.prototype[c]=N[D-1]}catch(F){}n("a").matches("a")||(M[c]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(M[c])),y.prototype={length:0,add:function(){for(var e,t=0;t<arguments.length;t++)e=arguments[t],this.contains(e)||N.push.call(this,c);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(t){return-1<(D=e.call(this,c=d(t)))}}([].indexOf||function(e){for(D=this.length;D--&&this[D]!==e;);return D}),item:function(e){return this[e]||null},remove:function(){for(var e,t=0;t<arguments.length;t++)e=arguments[t],this.contains(e)&&N.splice.call(this,D,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:g,toString:function(){return N.join.call(this," ")}},!q||"classList"in q.prototype||f(q.prototype,"classList",m),"classList"in h.documentElement?(s=n("div").classList,s.add("a","b","a"),"a b"!=s&&(l=s.constructor.prototype,"add"in l||(l=e.TemporaryTokenList.prototype),u=function(e){return function(){for(var t=0;t<arguments.length;)e.call(this,arguments[t++])}},l.add=u(l.add),l.remove=u(l.remove),l.toggle=g)):f(M,"classList",m),"contains"in K||f(K,"contains",{value:function(e){for(;e&&e!==this;)e=e.parentNode;return this===e}}),"head"in h||f(h,"head",{get:function(){return a||(a=h.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],o=i.length;!r&&o--;)n=n||e[i[o]+"RequestAnimationFrame"],r=e[i[o]+"CancelAnimationFrame"]||e[i[o]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(F){e.CustomEvent=function(e,t){function n(n,i){var o=h.createEvent(e);if("string"!=typeof n)throw new Error("An event name must be provided");return"Event"==e&&(o.initCustomEvent=r),null==i&&(i=t),o.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),o}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(F){F=function(e){function t(e,t){r(arguments.length,"Event");var n=h.createEvent("Event");return t||(t={}),n.initEvent(e,!!t.bubbles,!!t.cancelable),n}return t.prototype=e.prototype,t}(e.Event||function(){}),f(e,"Event",{value:F}),Event!==F&&(Event=F)}try{new KeyboardEvent("_",{})}catch(F){F=function(t){function n(e){for(var t=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)e[n[r]]&&t.push(n[r+1]);return t.join(" ")}function i(e,t){for(var n in t)t.hasOwnProperty(n)&&!t.hasOwnProperty.call(e,n)&&(e[n]=t[n]);return e}function o(e,t,n){try{t[e]=n[e]}catch(o_O){}}function a(t,a){r(arguments.length,"KeyboardEvent"),a=i(a||{},s);var u,p=h.createEvent(c),f=a.ctrlKey,v=a.shiftKey,d=a.altKey,y=a.metaKey,m=a.altGraphKey,E=l>3?n(a):null,b=String(a.key),g=String(a["char"]),_=a.location,w=a.keyCode||(a.keyCode=b)&&b.charCodeAt(0)||0,K=a.charCode||(a.charCode=g)&&g.charCodeAt(0)||0,A=a.bubbles,C=a.cancelable,S=a.repeat,k=a.locale,M=a.view||e;if(a.which||(a.which=a.keyCode),"initKeyEvent"in p)p.initKeyEvent(t,A,C,M,f,d,v,y,w,K);else if(0<l&&"initKeyboardEvent"in p){switch(u=[t,A,C,M],l){case 1:u.push(b,_,f,v,d,y,m);break;case 2:u.push(f,d,v,y,w,K);break;case 3:u.push(b,_,f,d,v,y,m);break;case 4:u.push(b,_,E,S,k);break;default:u.push(char,b,_,E,S,k)}p.initKeyboardEvent.apply(p,u)}else p.initEvent(t,A,C);for(b in p)s.hasOwnProperty(b)&&p[b]!==a[b]&&o(b,p,a);return p}var c,l=0,s={"char":"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0};try{var u=h.createEvent("KeyboardEvent");u.initKeyboardEvent("keyup",!1,!1,e,"+",3,!0,!1,!0,!1,!1),l="+"==(u.keyIdentifier||u.key)&&3==(u.keyLocation||u.location)&&(u.ctrlKey?u.altKey?1:3:u.shiftKey?2:4)||9}catch(o_O){}return c=0<l?"KeyboardEvent":"Event",a.prototype=t.prototype,a}(e.KeyboardEvent||function(){}),f(e,"KeyboardEvent",{value:F}),KeyboardEvent!==F&&(KeyboardEvent=F)}try{new MouseEvent("_",{})}catch(F){F=function(t){function n(t,n){r(arguments.length,"MouseEvent");var i=h.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(t,!!n.bubbles,!!n.cancelable,n.view||e,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=t.prototype,n}(e.MouseEvent||function(){}),f(e,"MouseEvent",{value:F}),MouseEvent!==F&&(MouseEvent=F)}h.querySelectorAll("*").forEach||function(){function e(e){var t=e.querySelectorAll;e.querySelectorAll=function(e){var n=t.call(this,e);return n.forEach=Array.prototype.forEach,n}}e(h),e(Element.prototype)}();try{h.querySelector(":scope *")}catch(F){!function(){function e(e,n,r){e.setAttribute(t,null);var i=n.call(e,String(r).replace(/(^|,\s*)(:scope([ >]|$))/g,function(e,n,r,i){return n+"["+t+"]"+(i||" ")}));return e.removeAttribute(t),i}var t="data-scope-"+(1e9*Math.random()>>>0),n=Element.prototype,r=n.querySelector,i=n.querySelectorAll;n.querySelector=function(t){return e(this,r,t)},n.querySelectorAll=function(t){return e(this,i,t)}}()}}(window),function(e){"use strict";function t(){}function n(e,t,r){function i(e){i.once&&(e.currentTarget.removeEventListener(e.type,t,i),i.removed=!0),i.passive&&(e.preventDefault=n.preventDefault),"function"==typeof i.callback?i.callback.call(this,e):i.callback&&i.callback.handleEvent(e),i.passive&&delete e.preventDefault}return i.type=e,i.callback=t,i.capture=!!r.capture,i.passive=!!r.passive,i.once=!!r.once,i.removed=!1,i}var r=e.WeakMap||function(){function e(e,t,n){c=n,a=!1,r=undefined,e.dispatchEvent(t)}function t(e){this.value=e}function n(){i++,this.__ce__=new o("@DOMMap:"+i+Math.random())}var r,i=0,a=!1,c=!1;return t.prototype.handleEvent=function(e){a=!0,c?e.currentTarget.removeEventListener(e.type,this,!1):r=this.value},n.prototype={constructor:n,"delete":function(t){return e(t,this.__ce__,!0),a},get:function(t){e(t,this.__ce__,!1);var n=r;return r=undefined,n},has:function(t){return e(t,this.__ce__,!1),a},set:function(n,r){return e(n,this.__ce__,!0),n.addEventListener(this.__ce__.type,new t(r),!1),this}},n}();t.prototype=(Object.create||Object)(null),n.preventDefault=function(){};var i,o=e.CustomEvent,a=e.dispatchEvent,c=e.addEventListener,l=e.removeEventListener,s=0,u=function(){s++},h=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},p=function(e){return"".concat(e.capture?"1":"0",e.passive?"1":"0",e.once?"1":"0")};try{c("_",u,{once:!0}),a(new o("_")),a(new o("_")),l("_",u,{once:!0})}catch(f){}1!==s&&function(){function o(e){return function(r,i,o){if(o&&"boolean"!=typeof o){var a,l,s,u=c.get(this),f=p(o);u||c.set(this,u=new t),r in u||(u[r]={handler:[],wrap:[]}),l=u[r],a=h.call(l.handler,i),a<0?(a=l.handler.push(i)-1,l.wrap[a]=s=new t):s=l.wrap[a],f in s||(s[f]=n(r,i,o),e.call(this,r,s[f],s[f].capture))}else e.call(this,r,i,o)}}function a(e){return function(t,n,r){if(r&&"boolean"!=typeof r){var i,o,a,l,s=c.get(this);if(s&&t in s&&(a=s[t],-1<(o=h.call(a.handler,n))&&(i=p(r),l=a.wrap[o],i in l))){e.call(this,t,l[i],l[i].capture),delete l[i];for(i in l)return;a.handler.splice(o,1),a.wrap.splice(o,1),0===a.handler.length&&delete s[t]}}else e.call(this,t,n,r)}}var c=new r;i=function(e){if(e){var t=e.prototype;t.addEventListener=o(t.addEventListener),t.removeEventListener=a(t.removeEventListener)}},e.EventTarget?i(EventTarget):(i(e.Text),i(e.Element||e.HTMLElement),i(e.HTMLDocument),i(e.Window||{prototype:e}),i(e.XMLHttpRequest))}()}(self);

  if("undefined" === typeof document.currentScript){
    (function(){
      var scripts = document.getElementsByTagName('script');
      document._currentScript = document.currentScript;
      var getScriptFromURL = function(url) {
        for (var i = 0; i < scripts.length; i++)
          if (scripts[i].src === url)
            return scripts[i];
        return undefined;
      }
      var actualScript = document.actualScript = function() {
        if (document._currentScript)
          return document._currentScript;
        var stack;
        try {
          omgwtf
        }
        catch(e) {
          stack = e.stack;
        };
        if (!stack)
          return undefined;
        var e = stack.indexOf(' at ') !== -1 ? ' at ' : '@';
        while (stack.indexOf(e) !== -1)
          stack = stack.substring(stack.indexOf(e) + e.length);
          stack = stack.substring(0, stack.indexOf(':', stack.indexOf(':')+1));
        return getScriptFromURL(stack);
      };
      if (document.__defineGetter__)
        document.__defineGetter__('currentScript', actualScript);
    })();
  };

  var support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(e){return e&&viewClasses.indexOf(Object.prototype.toString.call(e))>-1};function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return support.iterable&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsText(e),r}function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:support.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:support.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():support.arrayBuffer&&support.blob&&isDataView(e)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||isArrayBufferView(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support.blob&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(e){var t=e.toUpperCase();return methods.indexOf(t)>-1?t:e}function Request(e,t){var r=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=normalizeMethod(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(s))}}),t}function parseHeaders(e){var t=new Headers;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var s=r.join(":").trim();t.append(o,s)}}),t}function Response(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===redirectStatuses.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};var DOMException=self.DOMException;try{new DOMException}catch(e){(DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),DOMException.prototype.constructor=DOMException}function fetch(e,t){return new Promise(function(r,o){var s=new Request(e,t);if(s.signal&&s.signal.aborted)return o(new DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function i(){n.abort()}n.onload=function(){var e={status:n.status,statusText:n.statusText,headers:parseHeaders(n.getAllResponseHeaders()||"")};e.url="responseURL"in n?n.responseURL:e.headers.get("X-Request-URL");var t="response"in n?n.response:n.responseText;r(new Response(t,e))},n.onerror=function(){o(new TypeError("Network request failed"))},n.ontimeout=function(){o(new TypeError("Network request failed"))},n.onabort=function(){o(new DOMException("Aborted","AbortError"))},n.open(s.method,s.url,!0),"include"===s.credentials?n.withCredentials=!0:"omit"===s.credentials&&(n.withCredentials=!1),"responseType"in n&&support.blob&&(n.responseType="blob"),s.headers.forEach(function(e,t){n.setRequestHeader(t,e)}),s.signal&&(s.signal.addEventListener("abort",i),n.onreadystatechange=function(){4===n.readyState&&s.signal.removeEventListener("abort",i)}),n.send(void 0===s._bodyInit?null:s._bodyInit)})}fetch.polyfill=!0,self.fetch||(self.fetch=fetch,self.Headers=Headers,self.Request=Request,self.Response=Response);

  !function(t){var n,e=t.Promise,o=e&&"resolve"in e&&"reject"in e&&"all"in e&&"race"in e&&(new e(function(t){n=t}),"function"==typeof n);"undefined"!=typeof exports&&exports?(exports.Promise=o?e:P,exports.Polyfill=P):"function"==typeof define&&define.amd?define(function(){return o?e:P}):o||(t.Promise=P);var r="pending",i="sealed",f="fulfilled",c="rejected",u=function(){};function a(t){return"[object Array]"===Object.prototype.toString.call(t)}var s,h="undefined"!=typeof setImmediate?setImmediate:setTimeout,l=[];function p(){for(var t=0;t<l.length;t++)l[t][0](l[t][1]);l=[],s=!1}function d(t,n){l.push([t,n]),s||(s=!0,h(p,0))}function y(t){var n=t.owner,e=n.state_,o=n.data_,r=t[e],i=t.then;if("function"==typeof r){e=f;try{o=r(o)}catch(t){v(i,t)}}w(i,o)||(e===f&&m(i,o),e===c&&v(i,o))}function w(t,n){var e;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"==typeof n)){var o=n.then;if("function"==typeof o)return o.call(n,function(o){e||(e=!0,n!==o?m(t,o):_(t,o))},function(n){e||(e=!0,v(t,n))}),!0}}catch(n){return e||v(t,n),!0}return!1}function m(t,n){t!==n&&w(t,n)||_(t,n)}function _(t,n){t.state_===r&&(t.state_=i,t.data_=n,d(g,t))}function v(t,n){t.state_===r&&(t.state_=i,t.data_=n,d(j,t))}function b(t){var n=t.then_;t.then_=void 0;for(var e=0;e<n.length;e++)y(n[e])}function g(t){t.state_=f,b(t)}function j(t){t.state_=c,b(t)}function P(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof P==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(t,n){function e(t){v(n,t)}try{t(function(t){m(n,t)},e)}catch(t){e(t)}}(t,this)}P.prototype={constructor:P,state_:r,then_:null,data_:void 0,then:function(t,n){var e={owner:this,then:new this.constructor(u),fulfilled:t,rejected:n};return this.state_===f||this.state_===c?d(y,e):this.then_.push(e),e.then},catch:function(t){return this.then(null,t)}},P.all=function(t){if(!a(t))throw new TypeError("You must pass an array to Promise.all().");return new this(function(n,e){var o=[],r=0;function i(t){return r++,function(e){o[t]=e,--r||n(o)}}for(var f,c=0;c<t.length;c++)(f=t[c])&&"function"==typeof f.then?f.then(i(c),e):o[c]=f;r||n(o)})},P.race=function(t){if(!a(t))throw new TypeError("You must pass an array to Promise.race().");return new this(function(n,e){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(n,e):n(o)})},P.resolve=function(t){return t&&"object"==typeof t&&t.constructor===this?t:new this(function(n){n(t)})},P.reject=function(t){return new this(function(n,e){e(t)})}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);

/**
 * vkThread - javascript plugin to execute javascript function(s) in a thread.
 *
 * https://github.com/vkiryukhin/vkthread
 *
 * @version: 2.5.0
 *
 * @author: Vadim Kiryukhin ( vkiryukhin @ gmail.com )
 *
 * Copyright (c) 2016 Vadim Kiryukhin
 *
 * Licensed under the MIT License.
 *
 */

/* jshint maxlen:false */
/* global Promise */

(function(){
'use strict';

/* fragment of JSONfn plugin ( https://github.com/vkiryukhin/jsonfn ) */

  var JSONfn = {
    stringify:function (obj) {
      return JSON.stringify(obj, function (key, value) {
        var fnBody;
      if (value instanceof Function || typeof value === 'function') {

        fnBody = value.toString();

        if (fnBody.length < 8 || fnBody.substring(0, 8) !== 'function') { //this is ES6 Arrow Function
          return '_NuFrRa_' + fnBody;
        }
        return fnBody;
      }
      if (value instanceof RegExp) {
        return '_PxEgEr_' + value;
      }
      return value;
      });
    }
  };


  /* Create generic worker from minified version of worker.js */
  //var workerJs = '(function(){var JSONfn={parse:function(str,date2obj){var iso8061=date2obj?/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/:false;return JSON.parse(str,function(key,value){var prefix,func,fnArgs,fnBody;if(typeof value!=="string")return value;if(value.length<8)return value;prefix=value.substring(0,8);if(iso8061&&value.match(iso8061))return new Date(value);if(prefix==="function")return eval("("+value+")");if(prefix==="_PxEgEr_")return eval(value.slice(8));if(prefix==="_NuFrRa_"){func=value.slice(8).trim().split("=>");fnArgs=func[0].trim();fnBody=func[1].trim();if(fnArgs.indexOf("(")<0)fnArgs="("+fnArgs+")";if(fnBody.indexOf("{")<0)fnBody="{ return "+fnBody+"}";return eval("("+"function"+fnArgs+fnBody+")")}return value})}};onmessage=function(e){var obj=JSONfn.parse(e.data,true),cntx=obj.context||self;if(obj.importFiles)importScripts.apply(null,obj.importFiles);if(typeof obj.fn==="function")if(typeof Promise!=="undefined")Promise.resolve(obj.fn.apply(cntx,obj.args)).then(function(data){postMessage(data)})["catch"](function(reason){postMessage(reason)});else postMessage(obj.fn.apply(cntx,obj.args));else postMessage(self[obj.fn].apply(cntx,obj.args))};function vkhttp(cfg){var body=cfg.body?JSON.stringify(cfg.body):null,contentType=cfg.contentType||"application/json",method=cfg.method?cfg.method.toUpperCase():"GET",xhr=new XMLHttpRequest,ret;xhr.onload=function(){if(xhr.status>=200&&xhr.status<300)ret=xhr.responseText;else ret="Error: "+xhr.status+xhr.statusText};xhr.onerror=function(data){ret=xhr.status+xhr.statusText};xhr.open(method,cfg.url,false);if(method==="POST")xhr.setRequestHeader("Content-Type",contentType);xhr.send(body);return ret};})();';

  var workerPromise = '!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],u(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,t._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(f){return void i(n.promise,f)}r(n.promise,o)}else(1===e._state?r:i)(n.promise,e._value)})):e._deferreds.push(n)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if(n instanceof t)return e._state=3,e._value=n,void f(e);if("function"==typeof o)return void u(function(e,n){return function(){e.apply(n,arguments)}}(o,n),e)}e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}function i(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){e._handled||t._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,i(n,e))})}catch(o){if(t)return;t=!0,i(n,o)}}var c=setTimeout;t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,t,r)),r},t.prototype["finally"]=e,t.all=function(e){return new t(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(n){n(e)})},t.reject=function(e){return new t(function(n,t){t(e)})},t.race=function(e){return new t(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},t._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},t._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=t});';
  var workerJs = workerPromise + '(function(){var JSONfn={parse:function(str,date2obj){var iso8061=date2obj?/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/:false;return JSON.parse(str,function(key,value){var prefix,func,fnArgs,fnBody;if(typeof value!=="string")return value;if(value.length<8)return value;prefix=value.substring(0,8);if(iso8061&&value.match(iso8061))return new Date(value);if(prefix==="function")return eval("("+value+")");if(prefix==="_PxEgEr_")return eval(value.slice(8));if(prefix==="_NuFrRa_"){func=value.slice(8).trim().split("=>");fnArgs=func[0].trim();fnBody=func[1].trim();if(fnArgs.indexOf("(")<0)fnArgs="("+fnArgs+")";if(fnBody.indexOf("{")<0)fnBody="{ return "+fnBody+"}";return eval("("+"function"+fnArgs+fnBody+")")}return value})}};onmessage=function(e){var obj=JSONfn.parse(e.data,true),cntx=obj.context||self;if(obj.importFiles)importScripts.apply(null,obj.importFiles);if(typeof obj.fn==="function")if(typeof Promise!=="undefined")Promise.resolve(obj.fn.apply(cntx,obj.args)).then(function(data){postMessage(data)})["catch"](function(reason){postMessage(reason)});else postMessage(obj.fn.apply(cntx,obj.args));else postMessage(self[obj.fn].apply(cntx,obj.args))};function vkhttp(cfg){var body=cfg.body?JSON.stringify(cfg.body):null,contentType=cfg.contentType||"application/json",method=cfg.method?cfg.method.toUpperCase():"GET",xhr=new XMLHttpRequest,ret;xhr.onload=function(){if(xhr.status>=200&&xhr.status<300)ret=xhr.responseText;else ret="Error: "+xhr.status+xhr.statusText};xhr.onerror=function(data){ret=xhr.status+xhr.statusText};xhr.open(method,cfg.url,false);if(method==="POST")xhr.setRequestHeader("Content-Type",contentType);xhr.send(body);return ret};function vkfetch(cfg){var body = cfg.body ? JSON.stringify(cfg.body) : null,method = cfg.method ? cfg.method.toUpperCase() : "GET";return new Promise(function (resolve, reject){var xhr = new XMLHttpRequest();xhr.open(method,cfg.url,false);xhr.onload = function (){if (this.status >= 200 && this.status < 300){resolve(xhr.responseText);}else{reject({status:this.status,statusText:xhr.statusText});}};xhr.onerror = function(){reject({status:this.status,statusText:xhr.statusText});};xhr.send();});};})();';
  var workerBlob = new Blob([workerJs], {type: 'application/javascript'});

  /* constructor */

  function Vkthread(){
      this.getVersion = function(){
          return '2.5.0';
      };

    // to use standalone worker.js uncomment code below
    /*
      var err;
      try { throw new Error() }
      catch(e){ err = e.stack }

      if (err === 'undefined') {
        this.path = '';
      } else {
        this.path = 'http'+ err.split('http')[1].split('vkthread.js').slice(0,-1) + 'worker.js';
      }
    */
  }

  /**
   *   Execute function in a thread.
   *
   *    @return -- promise object;
   *    @param -- object;
   *
   *    @param object has following attributes
   *
   *      @fn          - function to execute                (mandatory)
   *      @args        - array of arguments for @fn          (optional)
   *      @context     - object which will be 'this' for @fn (optional)
   *      @importFiles - array of strings                    (optional)
   *                     each string is a path to a file, which @fn depends on.
   */

  Vkthread.prototype.exec = function(param){

    var worker = new Worker(window.URL.createObjectURL(workerBlob)), //embedded worker
    //var worker = new Worker(this.path),  //standalone worker (use for customizing or debug)
        promise;

        if (param.cb && typeof param.cb === 'function') {
          worker.onmessage = function (oEvent) {
            param.cb(oEvent.data);
            worker.terminate();
          };

          worker.onerror = function(error) {
            param.cb(null, error.message);
            worker.terminate();
          };

          worker.postMessage(JSONfn.stringify(param));

        } else {
          if(typeof Promise !== 'undefined') {
            promise = new Promise(
              function(resolve, reject){

                worker.onmessage = function (oEvent) {
                    resolve(oEvent.data);
                    worker.terminate();
                };

                worker.onerror = function(error) {
                    reject(error.message);
                    worker.terminate();
                };
              }
            );
            worker.postMessage(JSONfn.stringify(param));
            return promise;
          }
        }
  };

  /**
   *  Execute multiple functions in multiple threads
   *
   *  @return -- promise object;
   *  @args -- array of param objects (see above)
   *
   *  example: vkthread.execAll([param1, param2 ])
   */

  Vkthread.prototype.execAll = function(args){

    var promises = [];

    for(var ix=0; ix<args.length; ix++){
      promises.push( this.exec(args[ix]));
    }

    return Promise.all(promises).then(
      function(values){
        return values;
      }
    );
  };

  window.vkthread = new Vkthread();

}());

}

  /* 
   * Defiant.js v1.3.4 
   * Search JSON structures plus smart templating with XSLT and XPath. 
   * http://defiantjs.com 
   * 
   * Copyright (c) 2013-2015, Hakan Bilgin <hbi@longscript.com> 
   * Licensed under the MIT License 
   */ 
  if(function(a,b){var c={init:function(){return this},work_handler:function(a){var b=Array.prototype.slice.call(a.data,1),c=a.data[0],d=tree[c].apply(tree,b);postMessage([c,d])},setup:function(b){var d=a.URL||a.webkitURL,e="var tree = {"+this.parse(b).join(",")+"};",f=new Blob([e+'self.addEventListener("message", '+this.work_handler.toString()+", false);"],{type:"text/javascript"}),g=new Worker(d.createObjectURL(f));return g.onmessage=function(a){var b=Array.prototype.slice.call(a.data,1),d=a.data[0];c.observer.emit("x10:"+d,b)},g},call_handler:function(a,b){return function(){var d=Array.prototype.slice.call(arguments,0,-1),e=arguments[arguments.length-1];d.unshift(a),c.observer.on("x10:"+a,function(a){e(a.detail[0])}),b.postMessage(d)}},compile:function(a){var b,c=this.setup("function"==typeof a?{func:a}:a),d={};if("function"==typeof a)return d.func=this.call_handler("func",c),d.func;for(b in a)d[b]=this.call_handler(b,c);return d},parse:function(a,c){var d,e,f,g=[];for(d in a)if(f=a[d],null!==f)if(f!==b){switch(f.constructor){case Date:e="new Date("+f.valueOf()+")";break;case Object:e="{"+this.parse(f).join(",")+"}";break;case Array:e="["+this.parse(f,!0).join(",")+"]";break;case String:e='"'+f.replace(/"/g,'\\"')+'"';break;case RegExp:case Function:e=f.toString();break;default:e=f}g.push(c?e:d+":"+e)}else g.push(d+":undefined");else g.push(d+":null");return g},observer:function(){var a={};return{on:function(b,c){a[b]||(a[b]=[]),a[b].unshift(c)},off:function(b,c){if(a[b]){var d=a[b].indexOf(c);a[b].splice(d,1)}},emit:function(b,c){if(a[b])for(var d={type:b,detail:c,isCanceled:!1,cancelBubble:function(){this.isCanceled=!0}},e=a[b].length;e--;){if(d.isCanceled)return;a[b][e](d)}}}}()};"undefined"==typeof module?a.x10=c.init():module.exports=c.init()}(this),"undefined"==typeof module)var module={exports:void 0};if(module.exports=Defiant=function(){"use strict";var a={is_ie:/(msie|trident)/i.test(navigator.userAgent),is_safari:/safari/i.test(navigator.userAgent),env:"production",xml_decl:'<?xml version="1.0" encoding="utf-8"?>',namespace:'xmlns:d="defiant-namespace"',tabsize:4,render:function(a,b){var c,d,e,f,g=new XSLTProcessor,h=document.createElement("span"),i={match:"/"};switch(typeof a){case"object":this.extend(i,a),i.data||(i.data=b);break;case"string":i.template=a,i.data=b;break;default:throw"error"}if(i.data=JSON.toXML(i.data),c='//xsl:template[@name="'+i.template+'"]',this.xsl_template||this.gatherTemplates(),i.sorter&&(f=this.node.selectSingleNode(this.xsl_template,c+"//xsl:for-each//xsl:sort"),f&&(i.sorter.order&&f.setAttribute("order",i.sorter.order),i.sorter.select&&f.setAttribute("select",i.sorter.select),f.setAttribute("data-type",i.sorter.type||"text"))),e=this.node.selectSingleNode(this.xsl_template,c),e.setAttribute("match",i.match),g.importStylesheet(this.xsl_template),h.appendChild(g.transformToFragment(i.data,document)),e.removeAttribute("match"),this.is_safari){d=h.getElementsByTagName("script");for(var j=0,k=d.length;k>j;j++)d[j].defer=!0}return h.innerHTML},gatherTemplates:function(){for(var a=document.getElementsByTagName("script"),b="",c=0,d=a.length;d>c;c++)"defiant/xsl-template"===a[c].type&&(b+=a[c].innerHTML);this.xsl_template=this.xmlFromString('<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" '+this.namespace+">"+b.replace(/defiant:(\w+)/g,"$1")+"</xsl:stylesheet>")},getSnapshot:function(a,b){return JSON.toXML(a,b||!0)},xmlFromString:function(a){var b,c;return a=a.replace(/>\s{1,}</g,"><"),null===a.trim().match(/<\?xml/)&&(a=this.xml_decl+a),this.is_ie?(c=new ActiveXObject("Msxml2.DOMDocument"),c.loadXML(a),-1===a.indexOf("xsl:stylesheet")&&c.setProperty("SelectionLanguage","XPath")):(b=new DOMParser,c=b.parseFromString(a,"text/xml")),c},extend:function(a,b){for(var c in b)a[c]&&"object"==typeof b[c]?this.extend(a[c],b[c]):a[c]=b[c];return a},node:{}};return a}(this),"undefined"==typeof XSLTProcessor){var XSLTProcessor=function(){};XSLTProcessor.prototype={importStylesheet:function(a){this.xsldoc=a},transformToFragment:function(a){var b=a.transformNode(this.xsldoc),c=document.createElement("span");return c.innerHTML=b,c}}}else if("function"!=typeof XSLTProcessor&&!XSLTProcessor)throw"XSLTProcessor transformNode not implemented";String.prototype.fill||(String.prototype.fill=function(a,b){var c=this;for(b=b||" ";c.length<a;c+=b);return c}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/gm,"")}),String.prototype.xTransform||(String.prototype.xTransform=function(){var a=this;return-1===this.indexOf("translate(")&&(a=this.replace(/contains\(([^,]+),([^\\)]+)\)/g,function(a,b,c){var d="abcdefghijklmnopqrstuvwxyz",e=c.trim().slice(-1);return"contains(translate("+b+", "+e+d.toUpperCase()+e+", "+e+d+e+"),"+c.toLowerCase()+")"})),a.toString()}),"undefined"==typeof JSON&&(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(a){if(a instanceof Object){var b="";if(a.constructor===Array){for(var c=0;c<a.length;b+=this.stringify(a[c])+",",c++);return"["+b.substr(0,b.length-1)+"]"}if(a.toString!==Object.prototype.toString)return'"'+a.toString().replace(/"/g,"\\$&")+'"';for(var d in a)b+='"'+d.replace(/"/g,"\\$&")+'":'+this.stringify(a[d])+",";return"{"+b.substr(0,b.length-1)+"}"}return"string"==typeof a?'"'+a.replace(/"/g,"\\$&")+'"':String(a)}}),JSON.toXML||(JSON.toXML=function(a,b){"use strict";var c,d,e,f={map:[],rx_validate_name:/^(?!xml)[a-z_][\w\d.:]*$/i,rx_node:/<(.+?)( .*?)>/,rx_constructor:/<(.+?)( d:contr=".*?")>/,rx_namespace:/ xmlns\:d="defiant\-namespace"/,rx_data:/(<.+?>)(.*?)(<\/d:data>)/i,rx_function:/function (\w+)/i,namespace:'xmlns:d="defiant-namespace"',to_xml_str:function(a){return{str:this.hash_to_xml(null,a),map:this.map}},hash_to_xml:function(a,b,c){var d,e,f,g,h,i,j,k,l=b.constructor===Array,m=[],n=[];for(d in b)if(e=b[d],(null===e||void 0===e||"NaN"===e.toString())&&(e=null),g="@"===d.slice(0,1),h=c?a:d,h==+h&&b.constructor!==Object&&(h="d:item"),null===e?(i=null,j=!1):(i=e.constructor,j=i.toString().match(this.rx_function)[1]),g)n.push(h.slice(1)+'="'+this.escape_xml(e)+'"'),"String"!==j&&n.push("d:"+h.slice(1)+'="'+j+'"');else if(null===e)m.push(this.scalar_to_xml(h,e));else switch(i){case Function:throw"JSON data should not contain functions. Please check jour structure.";case Object:m.push(this.hash_to_xml(h,e));break;case Array:if(d===h){if(f=e.constructor===Array)for(k=e.length;k--;)e[k].constructor===Array&&(f=!0),f||e[k].constructor!==Object||(f=!0);m.push(this.scalar_to_xml(h,e,f));break}case String:if("string"==typeof e&&(e=e.toString().replace(/\&/g,"&amp;").replace(/\r|\n/g,"&#13;")),"#text"===h){this.map.push(b),n.push('d:mi="'+this.map.length+'"'),n.push('d:constr="'+j+'"'),m.push(this.escape_xml(e));break}case Number:case Boolean:if("#text"===h&&"String"!==j){this.map.push(b),n.push('d:mi="'+this.map.length+'"'),n.push('d:constr="'+j+'"'),m.push(this.escape_xml(e));break}m.push(this.scalar_to_xml(h,e))}return a||(a="d:data",n.push(this.namespace),l&&n.push('d:constr="Array"')),null===a.match(this.rx_validate_name)&&(n.push('d:name="'+a+'"'),a="d:name"),c?m.join(""):(this.map.push(b),n.push('d:mi="'+this.map.length+'"'),"<"+a+(n.length?" "+n.join(" "):"")+(m.length?">"+m.join("")+"</"+a+">":"/>"))},scalar_to_xml:function(a,b,c){var d,e,f,g="";if(null===a.match(this.rx_validate_name)&&(g+=' d:name="'+a+'"',a="d:name",c=!1),(null===b||"NaN"===b.toString())&&(b=null),null===b)return"<"+a+' d:constr="null"/>';if(1===b.length&&b[0].constructor===Object){d=this.hash_to_xml(!1,b[0]);var h=d.match(this.rx_node),i=d.match(this.rx_constructor);return h=null!==h?h[2].replace(this.rx_namespace,"").replace(/>/,"").replace(/"\/$/,'"'):"",i=null!==i?i[2]:"",d=d.match(this.rx_data),d=null!==d?d[2]:"","<"+a+h+" "+i+' d:type="ArrayItem">'+d+"</"+a+">"}return 0===b.length&&b.constructor===Array?"<"+a+' d:constr="Array"/>':c?this.hash_to_xml(a,b,!0):(e=b.constructor,f=e.toString().match(this.rx_function)[1],d=e===Array?this.hash_to_xml("d:item",b,!0):this.escape_xml(b),g+=' d:constr="'+f+'"',this.map.push(b),g+=' d:mi="'+this.map.length+'"',"#text"===a?this.escape_xml(b):"<"+a+g+">"+d+"</"+a+">")},escape_xml:function(a){return String(a).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&nbsp;/g,"&#160;")}};switch(typeof b){case"function":return e=x10.compile(f),void e.to_xml_str(a,function(c){b({doc:Defiant.xmlFromString(c.str),src:a,map:c.map})});case"boolean":return c=f.to_xml_str.call(f,a),{doc:Defiant.xmlFromString(c.str),src:a,map:c.map};default:return c=f.to_xml_str.call(f,a),d=Defiant.xmlFromString(c.str),this.search.map=c.map,d}}),JSON.search||(JSON.search=function(a,b,c){"use strict";var d,e,f=a.doc&&a.doc.nodeType,g=f?a.doc:JSON.toXML(a),h=f?a.map:this.search.map,i=f?a.src:a,j=Defiant.node[c?"selectSingleNode":"selectNodes"](g,b.xTransform()),k=[];for(c&&(j=[j]),e=j.length;e--;)switch(j[e].nodeType){case 2:case 3:k.unshift(j[e].nodeValue);break;default:d=+j[e].getAttribute("d:mi"),k.unshift(h[d-1])}return"development"===Defiant.env&&(this.trace=JSON.mtrace(i,k,j)),k}),JSON.mtrace||(JSON.mtrace=function(a,b,c){"use strict";for(var d,e,f,g,h,i=window,j=JSON.stringify,k=j(a,null,"	").replace(/\t/g,""),l=[],m=0,n=c.length,o=n?c[m].ownerDocument.documentElement:!1,p=(this.search.map,0);n>m;m++){switch(c[m].nodeType){case 2:e=c[m].ownerElement?c[m].ownerElement.getAttribute("d:"+c[m].nodeName):"String",d='"@'+c[m].nodeName+'": '+i[e](b[m]),f=k.indexOf(d),h=0;break;case 3:e=c[m].parentNode.getAttribute("d:constr"),d=i[e](b[m]),d='"'+c[m].parentNode.nodeName+'": '+("Number"===d?d:'"'+d+'"'),f=k.indexOf(d),h=0;break;default:if(c[m]===o)continue;"String"===c[m].getAttribute("d:constr")||"Number"===c[m].getAttribute("d:constr")?(e=c[m].getAttribute("d:constr"),d=i[e](b[m]),f=k.indexOf(d,p),d='"'+c[m].nodeName+'": '+("Number"===e?d:'"'+d+'"'),h=0,p=f+1):(d=j(b[m],null,"	").replace(/\t/g,""),f=k.indexOf(d),h=d.match(/\n/g).length)}g=k.substring(0,f).match(/\n/g).length+1,l.push([g,h])}return l}),Defiant.node.selectNodes=function(a,b){if(a.evaluate){for(var c=a.createNSResolver(a.documentElement),d=a.evaluate(b,a,c,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),e=[],f=0,g=d.snapshotLength;g>f;f++)e.push(d.snapshotItem(f));return e}return a.selectNodes(b)},Defiant.node.selectSingleNode=function(a,b){if(a.evaluate){var c=this.selectNodes(a,b);return c.length>0?c[0]:null}return a.selectSingleNode(b)},Defiant.node.prettyPrint=function(a){var b,c,d=Defiant,e=d.tabsize,f=d.xml_decl.toLowerCase();d.is_ie?c=a.xml:(b=new XMLSerializer,c=b.serializeToString(a)),"development"!==d.env&&(c=c.replace(/ \w+\:d=".*?"| d\:\w+=".*?"/g,""));for(var g,h,i=c.trim().replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3"),j=i.split("\n"),k=-1,l=0,m=j.length;m>l;l++)(0!==l||j[l].toLowerCase()!==f)&&(g=null!==j[l].match(/<[A-Za-z_\:]+.*?>/g),h=null!==j[l].match(/<\/[\w\:]+>/g),null!==j[l].match(/<.*?\/>/g)&&(g=h=!0),g&&k++,j[l]=String().fill(k,"	")+j[l],g&&h&&k--,!g&&h&&k--);return j.join("\n").replace(/\t/g,String().fill(e," "))},Defiant.node.toJSON=function(a,b){"use strict";var c=function(a){var b,d,e,f,g,h,i,j,k,l,m={},n=window;switch(a.nodeType){case 1:for(g=a.getAttribute("d:constr"),"Array"===g?m=[]:"String"===g&&""===a.textContent&&(m=""),b=a.attributes,j=0,k=b.length;k>j;j++)l=b.item(j),null===l.nodeName.match(/\:d|d\:/g)&&(g=a.getAttribute("d:"+l.nodeName),h=g&&"undefined"!==g?"null"===l.nodeValue?null:n[g]("false"===l.nodeValue?"":l.nodeValue):l.nodeValue,m["@"+l.nodeName]=h);break;case 3:d=a.parentNode.getAttribute("d:type"),h=d?n[d]("false"===a.nodeValue?"":a.nodeValue):a.nodeValue,m=h}if(a.hasChildNodes())for(j=0,k=a.childNodes.length;k>j;j++)if(e=a.childNodes.item(j),f=e.nodeName,b=a.attributes,"d:name"===f&&(f=e.getAttribute("d:name")),"#text"===f)g=a.getAttribute("d:constr"),"undefined"===g&&(g=void 0),i=e.textContent||e.text,h="Boolean"===g&&"false"===i?"":i,g||b.length?g&&1===k?m=n[g](h):a.hasChildNodes()&&b.length<3?m=g?n[g](h):h:m[f]=g?n[g](h):h:m=h;else{if(m[f]){m[f].push?m[f].push(c(e)):m[f]=[m[f],c(e)];continue}switch(g=e.getAttribute("d:constr")){case"null":m.push?m.push(null):m[f]=null;break;case"Array":e.parentNode.firstChild===e&&"Array"===g&&"d:item"!==f?"d:item"===f||"Array"===g?(h=c(e),m[f]=h.length?[h]:h):m[f]=c(e):m.push?m.push(c(e)):m[f]=c(e);break;case"String":case"Number":case"Boolean":i=e.textContent||e.text,h="Boolean"===g&&"false"===i?"":i,m.push?m.push(n[g](h)):m[f]=c(e);break;default:m.push?m.push(c(e)):m[f]=c(e)}}return 1===a.nodeType&&"ArrayItem"===a.getAttribute("d:type")&&(m=[m]),m},d=9===a.nodeType?a.documentElement:a,e=c(d),f=e[d.nodeName];return d===d.ownerDocument.documentElement&&f&&f.constructor===Array&&(e=f),b&&"true"===b.toString()&&(b="	"),b?JSON.stringify(e,null,b):e},"undefined"!=typeof jQuery&&!function(a){"use strict";a.fn.defiant=function(a,b){return this.html(Defiant.render(a,b)),this}}(jQuery);

(function() {
  var $context = this;
  var root; // root context
  var Helper = {
    is_template: function(str) {
      var re = /\{\{(.+)\}\}/g;
      return re.test(str);
    },
    is_array: function(item) {
      return (
        Array.isArray(item) ||
        (!!item &&
          typeof item === 'object' && typeof item.length === 'number' &&
          (item.length === 0 || (item.length > 0 && (item.length - 1) in item))
        )
      );
    },
    resolve: function(o, path, new_val) {
      // 1. Takes any object
      // 2. Finds subtree based on path
      // 3. Sets the value to new_val
      // 4. Returns the object;
      if (path && path.length > 0) {
        var func = Function('new_val', 'with(this) {this' + path + '=new_val; return this;}').bind(o);
        return func(new_val);
      } else {
        o = new_val;
        return o;
      }
    },
  };
  var Conditional = {
    run: function(template, data) {
      // expecting template as an array of objects,
      // each of which contains '#if', '#elseif', 'else' as key

      // item should be in the format of:
      // {'#if item': 'blahblah'}

      // Step 1. get all the conditional keys of the template first.
      // Step 2. then try evaluating one by one until something returns true
      // Step 3. if it reaches the end, the last item shall be returned
      for (var i = 0; i < template.length; i++) {
        var item = template[i];
        var keys = Object.keys(item);
        // assuming that there's only a single kv pair for each item
        var key = keys[0];
        var func = TRANSFORM.tokenize(key);
        if (func.name === '#if' || func.name === '#elseif') {
          var expression = func.expression;
          var res = TRANSFORM.fillout(data, '{{' + expression + '}}');
          if (res === ('{{' + expression + '}}')) {
            // if there was at least one item that was not evaluatable,
            // we halt parsing and return the template;
            return template;
          } else {
            if (res) {
              // run the current one and return
              return TRANSFORM.run(item[key], data);
            } else {
              // res was falsy. Ignore this branch and go on to the next item
            }
          }
        } else {
          // #else
          // if you reached this point, it means:
          //  1. there were no non-evaluatable expressions
          //  2. Yet all preceding expressions evaluated to falsy value
          //  Therefore we run this branch
          return TRANSFORM.run(item[key], data);
        }
      }
      // if you've reached this point, it means nothing matched.
      // so return null
      return null;
    },
    is: function(template) {
      // TRUE ONLY IF it's in a correct format.
      // Otherwise return the original template
      // Condition 0. Must be an array
      // Condition 1. Must have at least one item
      // Condition 2. Each item in the array should be an object of a single key/value pair
      // Condition 3. starts with #if
      // Condition 4. in case there's more than two items, everything between the first and the last item should be #elseif
      // Condition 5. in case there's more than two items, the last one should be either '#else' or '#elseif'
      if (!Helper.is_array(template)) {
        // Condition 0, it needs to be an array to be a conditional
        return false;
      }
      // Condition 1.
      // Must have at least one item
      if (template.length === 0) {
        return false;
      }
      // Condition 2.
      // Each item in the array should be an object
      // , and  of a single key/value pair
      var containsValidObjects = true;
      for (var i = 0; i < template.length; i++) {
        var item = template[0];
        if (typeof item !== 'object') {
          containsValidObjects = false;
          break;
        }
        if (Object.keys(item).length !== 1) {
          // first item in the array has multiple key value pairs, so invalid.
          containsValidObjects = false;
          break;
        }
      }
      if (!containsValidObjects) {
        return false;
      }
      // Condition 3.
      // the first item should have #if as its key
      // the first item should also contain an expression
      var first = template[0];
      var func;
      for (var key in first) {
        func = TRANSFORM.tokenize(key);
        if (!func) {
          return false;
        }
        if (!func.name) {
          return false;
        }
        // '{{#if }}'
        if (!func.expression || func.expression.length === 0) {
          return false;
        }
        if (func.name.toLowerCase() !== '#if') {
          return false;
        }
      }
      if (template.length === 1) {
        // If we got this far and the template has only one item, it means
        // template had one item which was '#if' so it's valid
        return true;
      }
      // Condition 4.
      // in case there's more than two items, everything between the first and the last item should be #elseif
      var they_are_all_elseifs = true;
      for (var template_index = 1; template_index < template.length-1; template_index++) {
        var template_item = template[template_index];
        for (var template_key in template_item) {
          func = TRANSFORM.tokenize(template_key);
          if (func.name.toLowerCase() !== '#elseif') {
            they_are_all_elseifs = false;
            break;
          }
        }
      }
      if (!they_are_all_elseifs) {
        // There was at least one item that wasn't an elseif
        // therefore invalid
        return false;
      }
      // If you've reached this point, it means we have multiple items and everything between the first and the last item
      // are elseifs
      // Now we need to check the validity of the last item
      // Condition 5.
      // in case there's more than one item, it should end with #else or #elseif
      var last = template[template.length-1];
      for (var last_key in last) {
        func = TRANSFORM.tokenize(last_key);
        if (['#else', '#elseif'].indexOf(func.name.toLowerCase()) === -1) {
          return false;
        }
      }
      // Congrats, if you've reached this point, it's valid
      return true;
    },
  };
  var TRANSFORM = {
    memory: {},
    transform: function(template, data, injection, serialized) {
      var selector = null;
      if (/#include/.test(JSON.stringify(template))) {
        selector = function(key, value) { return /#include/.test(key) || /#include/.test(value); };
      }
      var res;
      if (injection) {
        // resolve template with selector
        var resolved_template = SELECT.select(template, selector, serialized)
          .transform(data, serialized)
          .root();
        // apply the resolved template on data
        res = SELECT.select(data, null, serialized)
          .inject(injection, serialized)
          .transformWith(resolved_template, serialized)
          .root();
      } else {
        // no need for separate template resolution step
        // select the template with selector and transform data
        res = SELECT.select(template, selector, serialized)
          .transform(data, serialized)
          .root();
      }
      if (serialized) {
        // needs to return stringified version
        return JSON.stringify(res);
      } else {
        return res;
      }
    },
    tokenize: function(str) {
      // INPUT : string
      // OUTPUT : {name: FUNCTION_NAME:STRING, args: ARGUMENT:ARRAY}
      var re = /\{\{(.+)\}\}/g;
      str = str.replace(re, '$1');
      // str : '#each $jason.items'

      var tokens = str.trim().split(' ');
      // => tokens: ['#each', '$jason.items']

      var func;
      if (tokens.length > 0) {
        if (tokens[0][0] === '#') {
          func = tokens.shift();
          // => func: '#each' or '#if'
          // => tokens: ['$jason.items', '&&', '$jason.items.length', '>', '0']

          var expression = tokens.join(' ');
          // => expression: '$jason.items && $jason.items.length > 0'

          return { name: func, expression: expression };
        }
      }
      return null;
    },
    run: function(template, data) {
      var result;
      var fun;
      if (typeof template === 'string') {
        // Leaf node, so call TRANSFORM.fillout()
        if (Helper.is_template(template)) {
          var include_string_re = /\{\{([ ]*#include)[ ]*([^ ]*)\}\}/g;
          if (include_string_re.test(template)) {
            fun = TRANSFORM.tokenize(template);
            if (fun.expression) {
              // if #include has arguments, evaluate it before attaching
              result = TRANSFORM.fillout(data, '{{' + fun.expression + '}}', true);
            } else {
              // shouldn't happen =>
              // {'wrapper': '{{#include}}'}
              result = template;
            }
          } else {
            // non-#include
            result = TRANSFORM.fillout(data, template);
          }
        } else {
          result = template;
        }
      } else if (Helper.is_array(template)) {
        if (Conditional.is(template)) {
          result = Conditional.run(template, data);
        } else {
          result = [];
          for (var i = 0; i < template.length; i++) {
            var item = TRANSFORM.run(template[i], data);
            if (item) {
              // only push when the result is not null
              // null could mean #if clauses where nothing matched => In this case instead of rendering 'null', should just skip it completely
              // Todo : Distinguish between #if arrays and ordinary arrays, and return null for ordinary arrays
              result.push(item);
            }
          }
        }
      } else if (Object.prototype.toString.call(template) === '[object Object]') {
        // template is an object
        result = {};

        // ## Handling #include
        // This needs to precede everything else since it's meant to be overwritten
        // in case of collision
        var include_object_re = /\{\{([ ]*#include)[ ]*(.*)\}\}/;
        var include_keys = Object.keys(template).filter(function(key) { return include_object_re.test(key); });
        if (include_keys.length > 0) {
        // find the first key with #include
          fun = TRANSFORM.tokenize(include_keys[0]);
          if (fun.expression) {
            // if #include has arguments, evaluate it before attaching
            result = TRANSFORM.fillout(template[include_keys[0]], '{{' + fun.expression + '}}', true);
          } else {
            // no argument, simply attach the child
            result = template[include_keys[0]];
          }
        }

        for (var key in template) {
          // Checking to see if the key contains template..
          // Currently the only case for this are '#each' and '#include'
          if (Helper.is_template(key)) {
            fun = TRANSFORM.tokenize(key);
            if (fun) {
              if (fun.name === '#include') {
                // this was handled above (before the for loop) so just ignore
              } else if (fun.name === '#let') {
                if (Helper.is_array(template[key]) && template[key].length == 2) {
                  var defs = template[key][0];
                  var real_template = template[key][1];

                  // 1. Parse the first item to assign variables
                  var parsed_keys = TRANSFORM.run(defs, data);

                  // 2. modify the data
                  for(var parsed_key in parsed_keys) {
                    TRANSFORM.memory[parsed_key] = parsed_keys[parsed_key];
                    data[parsed_key] = parsed_keys[parsed_key];
                  }

                  // 2. Pass it into TRANSFORM.run
                  result = TRANSFORM.run(real_template, data);
                }
              } else if (fun.name === '#concat') {
                if (Helper.is_array(template[key])) {
                  result = [];
                  template[key].forEach(function(concat_item) {
                    var res = TRANSFORM.run(concat_item, data);
                    result = result.concat(res);
                  });

                  if (/\{\{(.*?)\}\}/.test(JSON.stringify(result))) {
                    // concat should only trigger if all of its children
                    // have successfully parsed.
                    // so check for any template expression in the end result
                    // and if there is one, revert to the original template
                    result = template;
                  }
                }
              } else if (fun.name === '#merge') {
                if (Helper.is_array(template[key])) {
                  result = {};
                  template[key].forEach(function(merge_item) {
                    var res = TRANSFORM.run(merge_item, data);
                    for (var key in res) {
                      result[key] = res[key];
                    }
                  });
                  // clean up $index from the result
                  // necessary because #merge merges multiple objects into one,
                  // and one of them may be 'this', in which case the $index attribute
                  // will have snuck into the final result
                  if(typeof data === 'object') {
                    delete result["$index"];

                    // #let handling
                    for (var declared_vars in TRANSFORM.memory) {
                      delete result[declared_vars];
                    }
                  } else {
                    delete String.prototype.$index;
                    delete Number.prototype.$index;
                    delete Function.prototype.$index;
                    delete Array.prototype.$index;
                    delete Boolean.prototype.$index;

                    // #let handling
                    for (var declared_vars in TRANSFORM.memory) {
                      delete String.prototype[declared_vars];
                      delete Number.prototype[declared_vars];
                      delete Function.prototype[declared_vars];
                      delete Array.prototype[declared_vars];
                      delete Boolean.prototype[declared_vars];
                    }
                  }
                }
              } else if (fun.name === '#each') {
                // newData will be filled with parsed results
                var newData = TRANSFORM.fillout(data, '{{' + fun.expression + '}}', true);

                // Ideally newData should be an array since it was prefixed by #each
                if (newData && Helper.is_array(newData)) {
                  result = [];
                  for (var index = 0; index < newData.length; index++) {
                    // temporarily set $index
                    if(typeof newData[index] === 'object') {
                      newData[index]["$index"] = index;
                      // #let handling
                      for (var declared_vars in TRANSFORM.memory) {
                        newData[index][declared_vars] = TRANSFORM.memory[declared_vars];
                      }
                    } else {
                      String.prototype.$index = index;
                      Number.prototype.$index = index;
                      Function.prototype.$index = index;
                      Array.prototype.$index = index;
                      Boolean.prototype.$index = index;
                      // #let handling
                      for (var declared_vars in TRANSFORM.memory) {
                        String.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                        Number.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                        Function.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                        Array.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                        Boolean.prototype[declared_vars] = TRANSFORM.memory[declared_vars];
                      }
                    }

                    // run
                    var loop_item = TRANSFORM.run(template[key], newData[index]);

                    // clean up $index
                    if(typeof newData[index] === 'object') {
                      delete newData[index]["$index"];
                      // #let handling
                      for (var declared_vars in TRANSFORM.memory) {
                        delete newData[index][declared_vars];
                      }
                    } else {
                      delete String.prototype.$index;
                      delete Number.prototype.$index;
                      delete Function.prototype.$index;
                      delete Array.prototype.$index;
                      delete Boolean.prototype.$index;
                      // #let handling
                      for (var declared_vars in TRANSFORM.memory) {
                        delete String.prototype[declared_vars];
                        delete Number.prototype[declared_vars];
                        delete Function.prototype[declared_vars];
                        delete Array.prototype[declared_vars];
                        delete Boolean.prototype[declared_vars];
                      }
                    }

                    if (loop_item) {
                      // only push when the result is not null
                      // null could mean #if clauses where nothing matched => In this case instead of rendering 'null', should just skip it completely
                      result.push(loop_item);
                    }
                  }
                } else {
                  // In case it's not an array, it's an exception, since it was prefixed by #each.
                  // This probably means this #each is not for the current variable
                  // For example {{#each items}} may not be an array, but just leave it be, so
                  // But don't get rid of it,
                  // Instead, just leave it as template
                  // So some other parse run could fill it in later.
                  result = template;
                }
              } // end of #each
            } else { // end of if (fun)
              // If the key is a template expression but aren't either #include or #each,
              // it needs to be parsed
              var k = TRANSFORM.fillout(data, key);
              var v = TRANSFORM.fillout(data, template[key]);
              if (k !== undefined && v !== undefined) {
                result[k] = v;
              }
            }
          } else {
            // Helper.is_template(key) was false, which means the key was not a template (hardcoded string)
            if (typeof template[key] === 'string') {
              fun = TRANSFORM.tokenize(template[key]);
              if (fun && fun.name === '#?') {
                // If the key is a template expression but aren't either #include or #each,
                // it needs to be parsed
                var filled = TRANSFORM.fillout(data, '{{' + fun.expression + '}}');
                if (filled === '{{' + fun.expression + '}}' || !filled) {
                  // case 1.
                  // not parsed, which means the evaluation failed.

                  // case 2.
                  // returns fasly value

                  // both cases mean this key should be excluded
                } else {
                  // only include if the evaluation is truthy
                  result[key] = filled;
                }
              } else {
                var item = TRANSFORM.run(template[key], data);
                if (item !== undefined) {
                  result[key] = item;
                }
              }
            } else {
              var item = TRANSFORM.run(template[key], data);
              if (item !== undefined) {
                result[key] = item;
              }
            }
          }
        }
      } else {
        return template;
      }
      return result;
    },
    fillout: function(data, template, raw) {
      // 1. fill out if possible
      // 2. otherwise return the original
      var replaced = template;
      // Run fillout() only if it's a template. Otherwise just return the original string
      if (Helper.is_template(template)) {
        var re = /\{\{(.*?)\}\}/g;

        // variables are all instances of {{ }} in the current expression
        // for example '{{this.item}} is {{this.user}}'s' has two variables: ['this.item', 'this.user']
        var variables = template.match(re);

        if (variables) {
          if (raw) {
            // 'raw' is true only for when this is called from #each
            // Because #each is expecting an array, it shouldn't be stringified.
            // Therefore we pass template:null,
            // which will result in returning the original result instead of trying to
            // replace it into the template with a stringified version
            replaced = TRANSFORM._fillout({
              variable: variables[0],
              data: data,
              template: null,
            });
          } else {
            // Fill out the template for each variable
            for (var i = 0; i < variables.length; i++) {
              var variable = variables[i];
              replaced = TRANSFORM._fillout({
                variable: variable,
                data: data,
                template: replaced,
              });
            }
          }
        } else {
          return replaced;
        }
      }
      return replaced;
    },
    _fillout: function(options) {
      // Given a template and fill it out with passed slot and its corresponding data
      var re = /\{\{(.*?)\}\}/g;
      var full_re = /^\{\{((?!\}\}).)*\}\}$/;
      var variable = options.variable;
      var data = options.data;
      var template = options.template;
      try {
        // 1. Evaluate the variable
        var slot = variable.replace(re, '$1');

        // data must exist. Otherwise replace with blank
        if (data) {
          var func;
          // Attach $root to each node so that we can reference it from anywhere
          var data_type = typeof data;
          if (['number', 'string', 'array', 'boolean', 'function'].indexOf(data_type === -1)) {
            data.$root = root;
          }
          // If the pattern ends with a return statement, but is NOT wrapped inside another function ([^}]*$), it's a function expression
          var match = /function\([ ]*\)[ ]*\{(.*)\}[ ]*$/g.exec(slot);
          if (match) {
            func = Function('with(this) {' + match[1] + '}').bind(data);
          } else if (/\breturn [^;]+;?[ ]*$/.test(slot) && /return[^}]*$/.test(slot)) {
            // Function expression with explicit 'return' expression
            func = Function('with(this) {' + slot + '}').bind(data);
          } else {
            // Function expression with explicit 'return' expression
            // Ordinary simple expression that
            func = Function('with(this) {return (' + slot + ')}').bind(data);
          }
          var evaluated = func();
          delete data.$root;  // remove $root now that the parsing is over
          if (evaluated) {
            // In case of primitive types such as String, need to call valueOf() to get the actual value instead of the promoted object
            evaluated = evaluated.valueOf();
          }
          if (typeof evaluated === 'undefined') {
            // it tried to evaluate since the variable existed, but ended up evaluating to undefined
            // (example: var a = [1,2,3,4]; var b = a[5];)
            return template;
          } else {
            // 2. Fill out the template with the evaluated value
            // Be forgiving and print any type, even functions, so it's easier to debug
            if (evaluated) {
              // IDEAL CASE : Return the replaced template
              if (template) {
                // if the template is a pure template with no additional static text,
                // And if the evaluated value is an object or an array, we return the object itself instead of
                // replacing it into template via string replace, since that will turn it into a string.
                if (full_re.test(template)) {
                  return evaluated;
                } else {
                  return template.replace(variable, evaluated);
                }
              } else {
                return evaluated;
              }
            } else {
              // Treat false or null as blanks (so that #if can handle it)
              if (template) {
                // if the template is a pure template with no additional static text,
                // And if the evaluated value is an object or an array, we return the object itself instead of
                // replacing it into template via string replace, since that will turn it into a string.
                if (full_re.test(template)) {
                  return evaluated;
                } else {
                  return template.replace(variable, '');
                }
              } else {
                return '';
              }
            }
          }
        }
        // REST OF THE CASES
        // if evaluated is null or undefined,
        // it probably means one of the following:
        //  1. The current data being parsed is not for the current template
        //  2. It's an error
        //
        //  In either case we need to return the original template unparsed.
        //    1. for case1, we need to leave the template alone so that the template can be parsed
        //      by another data set
        //    2. for case2, it's better to just return the template so it's easier to debug
        return template;
      } catch (err) {
        return template;
      }
    },
  };
  var SELECT = {
    // current: currently accessed object
    // path: the path leading to this item
    // filter: The filter function to decide whether to select or not
    $val: null,
    $selected: [],
    $injected: [],
    $progress: null,
    exec: function(current, path, filter) {
      // if current matches the pattern, put it in the selected array
      if (typeof current === 'string') {
        // leaf node should be ignored
        // we're lookin for keys only
      } else if (Helper.is_array(current)) {
        for (var i=0; i<current.length; i++) {
          SELECT.exec(current[i], path+'['+i+']', filter);
        }
      } else {
        // object
        for (var key in current) {
          // '$root' is a special key that links to the root node
          // so shouldn't be used to iterate
          if (key !== '$root') {
            if (filter(key, current[key])) {
              var index = SELECT.$selected.length;
              SELECT.$selected.push({
                index: index,
                key: key,
                path: path,
                object: current,
                value: current[key],
              });
            }
            SELECT.exec(current[key], path+'["'+key+'"]', filter);
          }
        }
      }
    },
    inject: function(obj, serialized) {
      SELECT.$injected = obj;
      try {
        if (serialized) SELECT.$injected = JSON.parse(obj);
      } catch (error) { }

      if (Object.keys(SELECT.$injected).length > 0) {
        SELECT.select(SELECT.$injected);
      }
      return SELECT;
    },
    // returns the object itself
    select: function(obj, filter, serialized) {
      // iterate '$selected'
      //
      /*
      SELECT.$selected = [{
        value {
          '{{#include}}': {
            '{{#each items}}': {
              'type': 'label',
              'text': '{{name}}'
            }
          }
        },
        path: '$jason.head.actions.$load'
        ...
      }]
      */
      var json = obj;
      try {
        if (serialized) json = JSON.parse(obj);
      } catch (error) { }

      if (filter) {
        SELECT.$selected = [];
        SELECT.exec(json, '', filter);
      } else {
        SELECT.$selected = null;
      }

      if (json && (Helper.is_array(json) || typeof json === 'object')) {
        if (!SELECT.$progress) {
          // initialize
          if (Helper.is_array(json)) {
            SELECT.$val = [];
            SELECT.$selected_root = [];
          } else {
            SELECT.$val = {};
            SELECT.$selected_root = {};
          }
        }
        Object.keys(json).forEach(function(key) {
        //for (var key in json) {
          SELECT.$val[key] = json[key];
          SELECT.$selected_root[key] = json[key];
        });
      } else {
        SELECT.$val = json;
        SELECT.$selected_root = json;
      }
      SELECT.$progress = true; // set the 'in progress' flag

      return SELECT;
    },
    transformWith: function(obj, serialized) {
      SELECT.$parsed = [];
      SELECT.$progress = null;
      /*
      *  'selected' is an array that contains items that looks like this:
      *  {
      *    key: The selected key,
      *    path: The path leading down to the selected key,
      *    object: The entire object that contains the currently selected key/val pair
      *    value: The selected value
      *  }
      */
      var template = obj;
      try {
        if (serialized) template = JSON.parse(obj);
      } catch (error) { }

      // Setting $root
      SELECT.$template_root = template;
      String.prototype.$root = SELECT.$selected_root;
      Number.prototype.$root = SELECT.$selected_root;
      Function.prototype.$root = SELECT.$selected_root;
      Array.prototype.$root = SELECT.$selected_root;
      Boolean.prototype.$root = SELECT.$selected_root;
      root = SELECT.$selected_root;
      // generate new $selected_root
      if (SELECT.$selected && SELECT.$selected.length > 0) {
        SELECT.$selected.sort(function(a, b) {
          // sort by path length, so that deeper level items will be replaced first
          // TODO: may need to look into edge cases
          return b.path.length - a.path.length;
        }).forEach(function(selection) {
        //SELECT.$selected.forEach(function(selection) {
          // parse selected
          var parsed_object = TRANSFORM.run(template, selection.object);

          // apply the result to root
          SELECT.$selected_root = Helper.resolve(SELECT.$selected_root, selection.path, parsed_object);

          // update selected object with the parsed result
          selection.object = parsed_object;
        });
        SELECT.$selected.sort(function(a, b) {
          return a.index - b.index;
        });
      } else {
        var parsed_object = TRANSFORM.run(template, SELECT.$selected_root);
        // apply the result to root
        SELECT.$selected_root = Helper.resolve(SELECT.$selected_root, '', parsed_object);
      }
      delete String.prototype.$root;
      delete Number.prototype.$root;
      delete Function.prototype.$root;
      delete Array.prototype.$root;
      delete Boolean.prototype.$root;
      return SELECT;
    },
    transform: function(obj, serialized) {
      SELECT.$parsed = [];
      SELECT.$progress = null;
      /*
      'selected' is an array that contains items that looks like this:

      {
        key: The selected key,
        path: The path leading down to the selected key,
        object: The entire object that contains the currently selected key/val pair
        value: The selected value
      }
      */
      var data = obj;
      try {
        if (serialized) data = JSON.parse(obj);
      } catch (error) { }

      // since we're assuming that the template has been already selected, the $template_root is $selected_root
      SELECT.$template_root = SELECT.$selected_root;

      String.prototype.$root = data;
      Number.prototype.$root = data;
      Function.prototype.$root = data;
      Array.prototype.$root = data;
      Boolean.prototype.$root = data;
      root = data;

      if (SELECT.$selected && SELECT.$selected.length > 0) {
        SELECT.$selected.sort(function(a, b) {
          // sort by path length, so that deeper level items will be replaced first
          // TODO: may need to look into edge cases
          return b.path.length - a.path.length;
        }).forEach(function(selection) {
          // parse selected
          var parsed_object = TRANSFORM.run(selection.object, data);
          // apply the result to root
          SELECT.$template_root = Helper.resolve(SELECT.$template_root, selection.path, parsed_object);
          SELECT.$selected_root = SELECT.$template_root;

          // update selected object with the parsed result
          selection.object = parsed_object;
        });
        SELECT.$selected.sort(function(a, b) {
          return a.index - b.index;
        });
      } else {
        var parsed_object = TRANSFORM.run(SELECT.$selected_root, data);
        // apply the result to root
        SELECT.$template_root = Helper.resolve(SELECT.$template_root, '', parsed_object);
        SELECT.$selected_root = SELECT.$template_root;
      }
      delete String.prototype.$root;
      delete Number.prototype.$root;
      delete Function.prototype.$root;
      delete Array.prototype.$root;
      delete Boolean.prototype.$root;
      return SELECT;
    },

    // Terminal methods
    objects: function() {
      SELECT.$progress = null;
      if (SELECT.$selected) {
        return SELECT.$selected.map(function(item) { return item.object; });
      } else {
        return [SELECT.$selected_root];
      }
    },
    keys: function() {
      SELECT.$progress = null;
      if (SELECT.$selected) {
        return SELECT.$selected.map(function(item) { return item.key; });
      } else {
        if (Array.isArray(SELECT.$selected_root)) {
          return Object.keys(SELECT.$selected_root).map(function(key) { return parseInt(key); });
        } else {
          return Object.keys(SELECT.$selected_root);
        }
      }
    },
    paths: function() {
      SELECT.$progress = null;
      if (SELECT.$selected) {
        return SELECT.$selected.map(function(item) { return item.path; });
      } else {
        if (Array.isArray(SELECT.$selected_root)) {
          return Object.keys(SELECT.$selected_root).map(function(item) {
            // key is integer
            return '[' + item + ']';
          });
        } else {
          return Object.keys(SELECT.$selected_root).map(function(item) {
            // key is string
            return '["' + item + '"]';
          });
        }
      }
    },
    values: function() {
      SELECT.$progress = null;
      if (SELECT.$selected) {
        return SELECT.$selected.map(function(item) { return item.value; });
      } else {
        return Object.values(SELECT.$selected_root);
      }
    },
    root: function() {
      SELECT.$progress = null;
      return SELECT.$selected_root;
    },
  };

  // Native JSON object override
  var _stringify = JSON.stringify;
  JSON.stringify = function(val, replacer, spaces) {
    var t = typeof val;
    if (['number', 'string', 'boolean'].indexOf(t) !== -1) {
      return _stringify(val, replacer, spaces);
    }
    if (!replacer) {
      return _stringify(val, function(key, val) {
        if (SELECT.$injected && SELECT.$injected.length > 0 && SELECT.$injected.indexOf(key) !== -1) { return undefined; }
        if (key === '$root' || key === '$index') {
          return undefined;
        }
        if (key in TRANSFORM.memory) {
          return undefined;
        }
        if (typeof val === 'function') {
          return '(' + val.toString() + ')';
        } else {
          return val;
        }
      }, spaces);
    } else {
      return _stringify(val, replacer, spaces);
    }
  };

  // Export
  if (typeof exports !== 'undefined') {
    var x = {
      TRANSFORM: TRANSFORM,
      transform: TRANSFORM,
      SELECT: SELECT,
      Conditional: Conditional,
      Helper: Helper,
      inject: SELECT.inject,
      select: SELECT.select,
      transform: TRANSFORM.transform,
    };
    if (typeof module !== 'undefined' && module.exports) { exports = module.exports = x; }
    exports = x;
  } else {
    $context.ST = {
      select: SELECT.select,
      inject: SELECT.inject,
      transform: TRANSFORM.transform,
    };
  }
}());

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.greenlet=n()}(this,function(){return function(e){var n=new Worker(URL.createObjectURL(new Blob(["onmessage=("+function(e){return function(n){var t=n.data;return Promise.resolve().then(function(){return e.apply(e,t[1])}).then(function(e){postMessage([t[0],null,e])},function(e){postMessage([t[0],""+e])})}}+")("+e+")"]))),t=0,o={};return n.onmessage=function(e){var n=e.data,t=n[0],r=n[1];o[t][r?1:0](r||n[2]),delete o[t]},function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return new Promise(function(r,u){o[++t]=[r,u],n.postMessage([t,e])})}}});

// This file is the concatenation of many js files.
// See http://github.com/jimhigson/oboe.js for the raw source

// having a local undefined, window, Object etc allows slightly better minification:
(function  (window, Object, Array, Error, JSON, undefined ) {

   // v2.1.3-15-g7432b49

/*

Copyright (c) 2013, Jim Higson

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

1.  Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

2.  Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/** 
 * Partially complete a function.
 * 
 *  var add3 = partialComplete( function add(a,b){return a+b}, 3 );
 *  
 *  add3(4) // gives 7
 *  
 *  function wrap(left, right, cen){return left + " " + cen + " " + right;}
 *  
 *  var pirateGreeting = partialComplete( wrap , "I'm", ", a mighty pirate!" );
 *  
 *  pirateGreeting("Guybrush Threepwood"); 
 *  // gives "I'm Guybrush Threepwood, a mighty pirate!"
 */
var partialComplete = varArgs(function( fn, args ) {

      // this isn't the shortest way to write this but it does
      // avoid creating a new array each time to pass to fn.apply,
      // otherwise could just call boundArgs.concat(callArgs)       

      var numBoundArgs = args.length;

      return varArgs(function( callArgs ) {
         
         for (var i = 0; i < callArgs.length; i++) {
            args[numBoundArgs + i] = callArgs[i];
         }
         
         args.length = numBoundArgs + callArgs.length;         
                     
         return fn.apply(this, args);
      }); 
   }),

/**
 * Compose zero or more functions:
 * 
 *    compose(f1, f2, f3)(x) = f1(f2(f3(x))))
 * 
 * The last (inner-most) function may take more than one parameter:
 * 
 *    compose(f1, f2, f3)(x,y) = f1(f2(f3(x,y))))
 */
   compose = varArgs(function(fns) {

      var fnsList = arrayAsList(fns);
   
      function next(params, curFn) {  
         return [apply(params, curFn)];   
      }
            
      return varArgs(function(startParams){
        
         return foldR(next, startParams, fnsList)[0];
      });
   });

/**
 * A more optimised version of compose that takes exactly two functions
 * @param f1
 * @param f2
 */
function compose2(f1, f2){
   return function(){
      return f1.call(this,f2.apply(this,arguments));
   }
}

/**
 * Generic form for a function to get a property from an object
 * 
 *    var o = {
 *       foo:'bar'
 *    }
 *    
 *    var getFoo = attr('foo')
 *    
 *    fetFoo(o) // returns 'bar'
 * 
 * @param {String} key the property name
 */
function attr(key) {
   return function(o) { return o[key]; };
}
        
/**
 * Call a list of functions with the same args until one returns a 
 * truthy result. Similar to the || operator.
 * 
 * So:
 *      lazyUnion([f1,f2,f3 ... fn])( p1, p2 ... pn )
 *      
 * Is equivalent to: 
 *      apply([p1, p2 ... pn], f1) || 
 *      apply([p1, p2 ... pn], f2) || 
 *      apply([p1, p2 ... pn], f3) ... apply(fn, [p1, p2 ... pn])  
 *  
 * @returns the first return value that is given that is truthy.
 */
   var lazyUnion = varArgs(function(fns) {

      return varArgs(function(params){
   
         var maybeValue;
   
         for (var i = 0; i < len(fns); i++) {
   
            maybeValue = apply(params, fns[i]);
   
            if( maybeValue ) {
               return maybeValue;
            }
         }
      });
   });   

/**
 * This file declares various pieces of functional programming.
 * 
 * This isn't a general purpose functional library, to keep things small it
 * has just the parts useful for Oboe.js.
 */


/**
 * Call a single function with the given arguments array.
 * Basically, a functional-style version of the OO-style Function#apply for 
 * when we don't care about the context ('this') of the call.
 * 
 * The order of arguments allows partial completion of the arguments array
 */
function apply(args, fn) {
   return fn.apply(undefined, args);
}

/**
 * Define variable argument functions but cut out all that tedious messing about 
 * with the arguments object. Delivers the variable-length part of the arguments
 * list as an array.
 * 
 * Eg:
 * 
 * var myFunction = varArgs(
 *    function( fixedArgument, otherFixedArgument, variableNumberOfArguments ){
 *       console.log( variableNumberOfArguments );
 *    }
 * )
 * 
 * myFunction('a', 'b', 1, 2, 3); // logs [1,2,3]
 * 
 * var myOtherFunction = varArgs(function( variableNumberOfArguments ){
 *    console.log( variableNumberOfArguments );
 * })
 * 
 * myFunction(1, 2, 3); // logs [1,2,3]
 * 
 */
function varArgs(fn){

   var numberOfFixedArguments = fn.length -1,
       slice = Array.prototype.slice;          
         
                   
   if( numberOfFixedArguments == 0 ) {
      // an optimised case for when there are no fixed args:   
   
      return function(){
         return fn.call(this, slice.call(arguments));
      }
      
   } else if( numberOfFixedArguments == 1 ) {
      // an optimised case for when there are is one fixed args:
   
      return function(){
         return fn.call(this, arguments[0], slice.call(arguments, 1));
      }
   }
   
   // general case   

   // we know how many arguments fn will always take. Create a
   // fixed-size array to hold that many, to be re-used on
   // every call to the returned function
   var argsHolder = Array(fn.length);   
                             
   return function(){
                            
      for (var i = 0; i < numberOfFixedArguments; i++) {
         argsHolder[i] = arguments[i];         
      }

      argsHolder[numberOfFixedArguments] = 
         slice.call(arguments, numberOfFixedArguments);
                                
      return fn.apply( this, argsHolder);      
   }       
}


/**
 * Swap the order of parameters to a binary function
 * 
 * A bit like this flip: http://zvon.org/other/haskell/Outputprelude/flip_f.html
 */
function flip(fn){
   return function(a, b){
      return fn(b,a);
   }
}


/**
 * Create a function which is the intersection of two other functions.
 * 
 * Like the && operator, if the first is truthy, the second is never called,
 * otherwise the return value from the second is returned.
 */
function lazyIntersection(fn1, fn2) {

   return function (param) {
                                                              
      return fn1(param) && fn2(param);
   };   
}

/**
 * A function which does nothing
 */
function noop(){}

/**
 * A function which is always happy
 */
function always(){return true}

/**
 * Create a function which always returns the same
 * value
 * 
 * var return3 = functor(3);
 * 
 * return3() // gives 3
 * return3() // still gives 3
 * return3() // will always give 3
 */
function functor(val){
   return function(){
      return val;
   }
}

/**
 * This file defines some loosely associated syntactic sugar for 
 * Javascript programming 
 */


/**
 * Returns true if the given candidate is of type T
 */
function isOfType(T, maybeSomething){
   return maybeSomething && maybeSomething.constructor === T;
}

var len = attr('length'),    
    isString = partialComplete(isOfType, String);

/** 
 * I don't like saying this:
 * 
 *    foo !=== undefined
 *    
 * because of the double-negative. I find this:
 * 
 *    defined(foo)
 *    
 * easier to read.
 */ 
function defined( value ) {
   return value !== undefined;
}

/**
 * Returns true if object o has a key named like every property in 
 * the properties array. Will give false if any are missing, or if o 
 * is not an object.
 */
function hasAllProperties(fieldList, o) {

   return      (o instanceof Object) 
            &&
               all(function (field) {         
                  return (field in o);         
               }, fieldList);
}
/**
 * Like cons in Lisp
 */
function cons(x, xs) {
   
   /* Internally lists are linked 2-element Javascript arrays.
          
      Ideally the return here would be Object.freeze([x,xs])
      so that bugs related to mutation are found fast.
      However, cons is right on the critical path for
      performance and this slows oboe-mark down by
      ~25%. Under theoretical future JS engines that freeze more
      efficiently (possibly even use immutability to
      run faster) this should be considered for
      restoration.
   */
   
   return [x,xs];
}

/**
 * The empty list
 */
var emptyList = null,

/**
 * Get the head of a list.
 * 
 * Ie, head(cons(a,b)) = a
 */
    head = attr(0),

/**
 * Get the tail of a list.
 * 
 * Ie, tail(cons(a,b)) = b
 */
    tail = attr(1);


/** 
 * Converts an array to a list 
 * 
 *    asList([a,b,c])
 * 
 * is equivalent to:
 *    
 *    cons(a, cons(b, cons(c, emptyList))) 
 **/
function arrayAsList(inputArray){

   return reverseList( 
      inputArray.reduce(
         flip(cons),
         emptyList 
      )
   );
}

/**
 * A varargs version of arrayAsList. Works a bit like list
 * in LISP.
 * 
 *    list(a,b,c) 
 *    
 * is equivalent to:
 * 
 *    cons(a, cons(b, cons(c, emptyList)))
 */
var list = varArgs(arrayAsList);

/**
 * Convert a list back to a js native array
 */
function listAsArray(list){

   return foldR( function(arraySoFar, listItem){
      
      arraySoFar.unshift(listItem);
      return arraySoFar;
           
   }, [], list );
   
}

/**
 * Map a function over a list 
 */
function map(fn, list) {

   return list
            ? cons(fn(head(list)), map(fn,tail(list)))
            : emptyList
            ;
}

/**
 * foldR implementation. Reduce a list down to a single value.
 * 
 * @pram {Function} fn     (rightEval, curVal) -> result 
 */
function foldR(fn, startValue, list) {
      
   return list 
            ? fn(foldR(fn, startValue, tail(list)), head(list))
            : startValue
            ;
}

/**
 * foldR implementation. Reduce a list down to a single value.
 * 
 * @pram {Function} fn     (rightEval, curVal) -> result 
 */
function foldR1(fn, list) {
      
   return tail(list) 
            ? fn(foldR1(fn, tail(list)), head(list))
            : head(list)
            ;
}


/**
 * Return a list like the one given but with the first instance equal 
 * to item removed 
 */
function without(list, test, removedFn) {
 
   return withoutInner(list, removedFn || noop);
 
   function withoutInner(subList, removedFn) {
      return subList  
         ?  ( test(head(subList)) 
                  ? (removedFn(head(subList)), tail(subList)) 
                  : cons(head(subList), withoutInner(tail(subList), removedFn))
            )
         : emptyList
         ;
   }               
}

/** 
 * Returns true if the given function holds for every item in 
 * the list, false otherwise 
 */
function all(fn, list) {
   
   return !list || 
          ( fn(head(list)) && all(fn, tail(list)) );
}

/**
 * Call every function in a list of functions with the same arguments
 * 
 * This doesn't make any sense if we're doing pure functional because 
 * it doesn't return anything. Hence, this is only really useful if the
 * functions being called have side-effects. 
 */
function applyEach(fnList, args) {

   if( fnList ) {  
      head(fnList).apply(null, args);
      
      applyEach(tail(fnList), args);
   }
}

/**
 * Reverse the order of a list
 */
function reverseList(list){ 

   // js re-implementation of 3rd solution from:
   //    http://www.haskell.org/haskellwiki/99_questions/Solutions/5
   function reverseInner( list, reversedAlready ) {
      if( !list ) {
         return reversedAlready;
      }
      
      return reverseInner(tail(list), cons(head(list), reversedAlready))
   }

   return reverseInner(list, emptyList);
}

function first(test, list) {
   return   list &&
               (test(head(list)) 
                  ? head(list) 
                  : first(test,tail(list))); 
}

/* 
   This is a slightly hacked-up browser only version of clarinet 
   
      *  some features removed to help keep browser Oboe under 
         the 5k micro-library limit
      *  plug directly into event bus
   
   For the original go here:
      https://github.com/dscape/clarinet

   We receive the events:
      STREAM_DATA
      STREAM_END
      
   We emit the events:
      SAX_KEY
      SAX_VALUE_OPEN
      SAX_VALUE_CLOSE      
      FAIL_EVENT      
 */

function clarinet(eventBus) {
  "use strict";
   
  var 
      // shortcut some events on the bus
      emitSaxKey           = eventBus(SAX_KEY).emit,
      emitValueOpen        = eventBus(SAX_VALUE_OPEN).emit,
      emitValueClose       = eventBus(SAX_VALUE_CLOSE).emit,
      emitFail             = eventBus(FAIL_EVENT).emit,
              
      MAX_BUFFER_LENGTH = 64 * 1024
  ,   stringTokenPattern = /[\\"\n]/g
  ,   _n = 0
  
      // states
  ,   BEGIN                = _n++
  ,   VALUE                = _n++ // general stuff
  ,   OPEN_OBJECT          = _n++ // {
  ,   CLOSE_OBJECT         = _n++ // }
  ,   OPEN_ARRAY           = _n++ // [
  ,   CLOSE_ARRAY          = _n++ // ]
  ,   STRING               = _n++ // ""
  ,   OPEN_KEY             = _n++ // , "a"
  ,   CLOSE_KEY            = _n++ // :
  ,   TRUE                 = _n++ // r
  ,   TRUE2                = _n++ // u
  ,   TRUE3                = _n++ // e
  ,   FALSE                = _n++ // a
  ,   FALSE2               = _n++ // l
  ,   FALSE3               = _n++ // s
  ,   FALSE4               = _n++ // e
  ,   NULL                 = _n++ // u
  ,   NULL2                = _n++ // l
  ,   NULL3                = _n++ // l
  ,   NUMBER_DECIMAL_POINT = _n++ // .
  ,   NUMBER_DIGIT         = _n   // [0-9]

      // setup initial parser values
  ,   bufferCheckPosition  = MAX_BUFFER_LENGTH
  ,   latestError                
  ,   c                    
  ,   p                    
  ,   textNode             = undefined
  ,   numberNode           = ""     
  ,   slashed              = false
  ,   closed               = false
  ,   state                = BEGIN
  ,   stack                = []
  ,   unicodeS             = null
  ,   unicodeI             = 0
  ,   depth                = 0
  ,   position             = 0
  ,   column               = 0  //mostly for error reporting
  ,   line                 = 1
  ;

  function checkBufferLength () {
     
    var maxActual = 0;
     
    if (textNode !== undefined && textNode.length > MAX_BUFFER_LENGTH) {
      emitError("Max buffer length exceeded: textNode");
      maxActual = Math.max(maxActual, textNode.length);
    }
    if (numberNode.length > MAX_BUFFER_LENGTH) {
      emitError("Max buffer length exceeded: numberNode");
      maxActual = Math.max(maxActual, numberNode.length);
    }
     
    bufferCheckPosition = (MAX_BUFFER_LENGTH - maxActual)
                               + position;
  }

  eventBus(STREAM_DATA).on(handleData);

   /* At the end of the http content close the clarinet 
    This will provide an error if the total content provided was not 
    valid json, ie if not all arrays, objects and Strings closed properly */
  eventBus(STREAM_END).on(handleStreamEnd);   

  function emitError (errorString) {
     if (textNode !== undefined) {
        emitValueOpen(textNode);
        emitValueClose();
        textNode = undefined;
     }

     latestError = Error(errorString + "\nLn: "+line+
                                       "\nCol: "+column+
                                       "\nChr: "+c);
     
     emitFail(errorReport(undefined, undefined, latestError));
  }

  function handleStreamEnd() {
    if( state == BEGIN ) {
      // Handle the case where the stream closes without ever receiving
      // any input. This isn't an error - response bodies can be blank,
      // particularly for 204 http responses
      
      // Because of how Oboe is currently implemented, we parse a
      // completely empty stream as containing an empty object.
      // This is because Oboe's done event is only fired when the
      // root object of the JSON stream closes.
      
      // This should be decoupled and attached instead to the input stream
      // from the http (or whatever) resource ending.
      // If this decoupling could happen the SAX parser could simply emit
      // zero events on a completely empty input.
      emitValueOpen({});
      emitValueClose();

      closed = true;
      return;
    }
  
    if (state !== VALUE || depth !== 0)
      emitError("Unexpected end");
 
    if (textNode !== undefined) {
      emitValueOpen(textNode);
      emitValueClose();
      textNode = undefined;
    }
     
    closed = true;
  }

  function whitespace(c){
     return c == '\r' || c == '\n' || c == ' ' || c == '\t';
  }
   
  function handleData (chunk) {
         
    // this used to throw the error but inside Oboe we will have already
    // gotten the error when it was emitted. The important thing is to
    // not continue with the parse.
    if (latestError)
      return;
      
    if (closed) {
       return emitError("Cannot write after close");
    }

    var i = 0;
    c = chunk[0]; 

    while (c) {
      if (i > 0) {
        p = c;
      }
      c = chunk[i++];
      if(!c) break;

      position ++;
      if (c == "\n") {
        line ++;
        column = 0;
      } else column ++;
      switch (state) {

        case BEGIN:
          if (c === "{") state = OPEN_OBJECT;
          else if (c === "[") state = OPEN_ARRAY;
          else if (!whitespace(c))
            return emitError("Non-whitespace before {[.");
        continue;

        case OPEN_KEY:
        case OPEN_OBJECT:
          if (whitespace(c)) continue;
          if(state === OPEN_KEY) stack.push(CLOSE_KEY);
          else {
            if(c === '}') {
              emitValueOpen({});
              emitValueClose();
              state = stack.pop() || VALUE;
              continue;
            } else  stack.push(CLOSE_OBJECT);
          }
          if(c === '"')
             state = STRING;
          else
             return emitError("Malformed object key should start with \" ");
        continue;

        case CLOSE_KEY:
        case CLOSE_OBJECT:
          if (whitespace(c)) continue;

          if(c===':') {
            if(state === CLOSE_OBJECT) {
              stack.push(CLOSE_OBJECT);

               if (textNode !== undefined) {
                  // was previously (in upstream Clarinet) one event
                  //  - object open came with the text of the first
                  emitValueOpen({});
                  emitSaxKey(textNode);
                  textNode = undefined;
               }
               depth++;
            } else {
               if (textNode !== undefined) {
                  emitSaxKey(textNode);
                  textNode = undefined;
               }
            }
             state  = VALUE;
          } else if (c==='}') {
             if (textNode !== undefined) {
                emitValueOpen(textNode);
                emitValueClose();
                textNode = undefined;
             }
             emitValueClose();
            depth--;
            state = stack.pop() || VALUE;
          } else if(c===',') {
            if(state === CLOSE_OBJECT)
              stack.push(CLOSE_OBJECT);
             if (textNode !== undefined) {
                emitValueOpen(textNode);
                emitValueClose();
                textNode = undefined;
             }
             state  = OPEN_KEY;
          } else 
             return emitError('Bad object');
        continue;

        case OPEN_ARRAY: // after an array there always a value
        case VALUE:
          if (whitespace(c)) continue;
          if(state===OPEN_ARRAY) {
            emitValueOpen([]);
            depth++;             
            state = VALUE;
            if(c === ']') {
              emitValueClose();
              depth--;
              state = stack.pop() || VALUE;
              continue;
            } else {
              stack.push(CLOSE_ARRAY);
            }
          }
               if(c === '"') state = STRING;
          else if(c === '{') state = OPEN_OBJECT;
          else if(c === '[') state = OPEN_ARRAY;
          else if(c === 't') state = TRUE;
          else if(c === 'f') state = FALSE;
          else if(c === 'n') state = NULL;
          else if(c === '-') { // keep and continue
            numberNode += c;
          } else if(c==='0') {
            numberNode += c;
            state = NUMBER_DIGIT;
          } else if('123456789'.indexOf(c) !== -1) {
            numberNode += c;
            state = NUMBER_DIGIT;
          } else               
            return emitError("Bad value");
        continue;

        case CLOSE_ARRAY:
          if(c===',') {
            stack.push(CLOSE_ARRAY);
             if (textNode !== undefined) {
                emitValueOpen(textNode);
                emitValueClose();
                textNode = undefined;
             }
             state  = VALUE;
          } else if (c===']') {
             if (textNode !== undefined) {
                emitValueOpen(textNode);
                emitValueClose();
                textNode = undefined;
             }
             emitValueClose();
            depth--;
            state = stack.pop() || VALUE;
          } else if (whitespace(c))
              continue;
          else 
             return emitError('Bad array');
        continue;

        case STRING:
          if (textNode === undefined) {
              textNode = "";
          }

          // thanks thejh, this is an about 50% performance improvement.
          var starti              = i-1;
           
          STRING_BIGLOOP: while (true) {

            // zero means "no unicode active". 1-4 mean "parse some more". end after 4.
            while (unicodeI > 0) {
              unicodeS += c;
              c = chunk.charAt(i++);
              if (unicodeI === 4) {
                // TODO this might be slow? well, probably not used too often anyway
                textNode += String.fromCharCode(parseInt(unicodeS, 16));
                unicodeI = 0;
                starti = i-1;
              } else {
                unicodeI++;
              }
              // we can just break here: no stuff we skipped that still has to be sliced out or so
              if (!c) break STRING_BIGLOOP;
            }
            if (c === '"' && !slashed) {
              state = stack.pop() || VALUE;
              textNode += chunk.substring(starti, i-1);
              break;
            }
            if (c === '\\' && !slashed) {
              slashed = true;
              textNode += chunk.substring(starti, i-1);
               c = chunk.charAt(i++);
              if (!c) break;
            }
            if (slashed) {
              slashed = false;
                   if (c === 'n') { textNode += '\n'; }
              else if (c === 'r') { textNode += '\r'; }
              else if (c === 't') { textNode += '\t'; }
              else if (c === 'f') { textNode += '\f'; }
              else if (c === 'b') { textNode += '\b'; }
              else if (c === 'u') {
                // \uxxxx. meh!
                unicodeI = 1;
                unicodeS = '';
              } else {
                textNode += c;
              }
              c = chunk.charAt(i++);
              starti = i-1;
              if (!c) break;
              else continue;
            }

            stringTokenPattern.lastIndex = i;
            var reResult = stringTokenPattern.exec(chunk);
            if (!reResult) {
              i = chunk.length+1;
              textNode += chunk.substring(starti, i-1);
              break;
            }
            i = reResult.index+1;
            c = chunk.charAt(reResult.index);
            if (!c) {
              textNode += chunk.substring(starti, i-1);
              break;
            }
          }
        continue;

        case TRUE:
          if (!c)  continue; // strange buffers
          if (c==='r') state = TRUE2;
          else
             return emitError( 'Invalid true started with t'+ c);
        continue;

        case TRUE2:
          if (!c)  continue;
          if (c==='u') state = TRUE3;
          else
             return emitError('Invalid true started with tr'+ c);
        continue;

        case TRUE3:
          if (!c) continue;
          if(c==='e') {
            emitValueOpen(true);
            emitValueClose();
            state = stack.pop() || VALUE;
          } else
             return emitError('Invalid true started with tru'+ c);
        continue;

        case FALSE:
          if (!c)  continue;
          if (c==='a') state = FALSE2;
          else
             return emitError('Invalid false started with f'+ c);
        continue;

        case FALSE2:
          if (!c)  continue;
          if (c==='l') state = FALSE3;
          else
             return emitError('Invalid false started with fa'+ c);
        continue;

        case FALSE3:
          if (!c)  continue;
          if (c==='s') state = FALSE4;
          else
             return emitError('Invalid false started with fal'+ c);
        continue;

        case FALSE4:
          if (!c)  continue;
          if (c==='e') {
            emitValueOpen(false);
            emitValueClose();
            state = stack.pop() || VALUE;
          } else
             return emitError('Invalid false started with fals'+ c);
        continue;

        case NULL:
          if (!c)  continue;
          if (c==='u') state = NULL2;
          else
             return emitError('Invalid null started with n'+ c);
        continue;

        case NULL2:
          if (!c)  continue;
          if (c==='l') state = NULL3;
          else
             return emitError('Invalid null started with nu'+ c);
        continue;

        case NULL3:
          if (!c) continue;
          if(c==='l') {
            emitValueOpen(null);
            emitValueClose();
            state = stack.pop() || VALUE;
          } else 
             return emitError('Invalid null started with nul'+ c);
        continue;

        case NUMBER_DECIMAL_POINT:
          if(c==='.') {
            numberNode += c;
            state       = NUMBER_DIGIT;
          } else 
             return emitError('Leading zero not followed by .');
        continue;

        case NUMBER_DIGIT:
          if('0123456789'.indexOf(c) !== -1) numberNode += c;
          else if (c==='.') {
            if(numberNode.indexOf('.')!==-1)
               return emitError('Invalid number has two dots');
            numberNode += c;
          } else if (c==='e' || c==='E') {
            if(numberNode.indexOf('e')!==-1 ||
               numberNode.indexOf('E')!==-1 )
               return emitError('Invalid number has two exponential');
            numberNode += c;
          } else if (c==="+" || c==="-") {
            if(!(p==='e' || p==='E'))
               return emitError('Invalid symbol in number');
            numberNode += c;
          } else {
            if (numberNode) {
              emitValueOpen(parseFloat(numberNode));
              emitValueClose();
              numberNode = "";
            }
            i--; // go back one
            state = stack.pop() || VALUE;
          }
        continue;

        default:
          return emitError("Unknown state: " + state);
      }
    }
    if (position >= bufferCheckPosition)
      checkBufferLength();
  }
}


/** 
 * A bridge used to assign stateless functions to listen to clarinet.
 * 
 * As well as the parameter from clarinet, each callback will also be passed
 * the result of the last callback.
 * 
 * This may also be used to clear all listeners by assigning zero handlers:
 * 
 *    ascentManager( clarinet, {} )
 */
function ascentManager(oboeBus, handlers){
   "use strict";
   
   var listenerId = {},
       ascent;

   function stateAfter(handler) {
      return function(param){
         ascent = handler( ascent, param);
      }
   }
   
   for( var eventName in handlers ) {

      oboeBus(eventName).on(stateAfter(handlers[eventName]), listenerId);
   }
   
   oboeBus(NODE_SWAP).on(function(newNode) {
      
      var oldHead = head(ascent),
          key = keyOf(oldHead),
          ancestors = tail(ascent),
          parentNode;

      if( ancestors ) {
         parentNode = nodeOf(head(ancestors));
         parentNode[key] = newNode;
      }
   });

   oboeBus(NODE_DROP).on(function() {

      var oldHead = head(ascent),
          key = keyOf(oldHead),
          ancestors = tail(ascent),
          parentNode;

      if( ancestors ) {
         parentNode = nodeOf(head(ancestors));
 
         delete parentNode[key];
      }
   });

   oboeBus(ABORTING).on(function(){
      
      for( var eventName in handlers ) {
         oboeBus(eventName).un(listenerId);
      }
   });   
}

// based on gist https://gist.github.com/monsur/706839

/**
 * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
 * headers according to the format described here:
 * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
 * This method parses that string into a user-friendly key/value pair object.
 */
function parseResponseHeaders(headerStr) {
   var headers = {};
   
   headerStr && headerStr.split('\u000d\u000a')
      .forEach(function(headerPair){
   
         // Can't use split() here because it does the wrong thing
         // if the header value has the string ": " in it.
         var index = headerPair.indexOf('\u003a\u0020');
         
         headers[headerPair.substring(0, index)] 
                     = headerPair.substring(index + 2);
      });
   
   return headers;
}

/**
 * Detect if a given URL is cross-origin in the scope of the
 * current page.
 * 
 * Browser only (since cross-origin has no meaning in Node.js)
 *
 * @param {Object} pageLocation - as in window.location
 * @param {Object} ajaxHost - an object like window.location describing the 
 *    origin of the url that we want to ajax in
 */
function isCrossOrigin(pageLocation, ajaxHost) {

   /*
    * NB: defaultPort only knows http and https.
    * Returns undefined otherwise.
    */
   function defaultPort(protocol) {
      return {'http:':80, 'https:':443}[protocol];
   }
   
   function portOf(location) {
      // pageLocation should always have a protocol. ajaxHost if no port or
      // protocol is specified, should use the port of the containing page
      
      return location.port || defaultPort(location.protocol||pageLocation.protocol);
   }

   // if ajaxHost doesn't give a domain, port is the same as pageLocation
   // it can't give a protocol but not a domain
   // it can't give a port but not a domain
   
   return !!(  (ajaxHost.protocol  && (ajaxHost.protocol  != pageLocation.protocol)) ||
               (ajaxHost.host      && (ajaxHost.host      != pageLocation.host))     ||
               (ajaxHost.host      && (portOf(ajaxHost) != portOf(pageLocation)))
          );
}

/* turn any url into an object like window.location */
function parseUrlOrigin(url) {
   // url could be domain-relative
   // url could give a domain

   // cross origin means:
   //    same domain
   //    same port
   //    some protocol
   // so, same everything up to the first (single) slash 
   // if such is given
   //
   // can ignore everything after that   
   
   var URL_HOST_PATTERN = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/,

         // if no match, use an empty array so that
         // subexpressions 1,2,3 are all undefined
         // and will ultimately return all empty
         // strings as the parse result:
       urlHostMatch = URL_HOST_PATTERN.exec(url) || [];
   
   return {
      protocol:   urlHostMatch[1] || '',
      host:       urlHostMatch[2] || '',
      port:       urlHostMatch[3] || ''
   };
}

function httpTransport(){
   return new XMLHttpRequest();
}

/**
 * A wrapper around the browser XmlHttpRequest object that raises an 
 * event whenever a new part of the response is available.
 * 
 * In older browsers progressive reading is impossible so all the 
 * content is given in a single call. For newer ones several events
 * should be raised, allowing progressive interpretation of the response.
 *      
 * @param {Function} oboeBus an event bus local to this Oboe instance
 * @param {XMLHttpRequest} xhr the xhr to use as the transport. Under normal
 *          operation, will have been created using httpTransport() above
 *          but for tests a stub can be provided instead.
 * @param {String} method one of 'GET' 'POST' 'PUT' 'PATCH' 'DELETE'
 * @param {String} url the url to make a request to
 * @param {String|Null} data some content to be sent with the request.
 *                      Only valid if method is POST or PUT.
 * @param {Object} [headers] the http request headers to send
 * @param {boolean} withCredentials the XHR withCredentials property will be
 *    set to this value
 */  
function streamingHttp(oboeBus, xhr, method, url, data, headers, withCredentials) {
           
   "use strict";
   
   var emitStreamData = oboeBus(STREAM_DATA).emit,
       emitFail       = oboeBus(FAIL_EVENT).emit,
       numberOfCharsAlreadyGivenToCallback = 0,
       stillToSendStartEvent = true;

   // When an ABORTING message is put on the event bus abort 
   // the ajax request         
   oboeBus( ABORTING ).on( function(){
  
      // if we keep the onreadystatechange while aborting the XHR gives 
      // a callback like a successful call so first remove this listener
      // by assigning null:
      xhr.onreadystatechange = null;
            
      xhr.abort();
   });

   /** 
    * Handle input from the underlying xhr: either a state change,
    * the progress event or the request being complete.
    */
   function handleProgress() {
                        
      var textSoFar = xhr.responseText,
          newText = textSoFar.substr(numberOfCharsAlreadyGivenToCallback);
      
      
      /* Raise the event for new text.
      
         On older browsers, the new text is the whole response. 
         On newer/better ones, the fragment part that we got since 
         last progress. */
         
      if( newText ) {
         emitStreamData( newText );
      } 

      numberOfCharsAlreadyGivenToCallback = len(textSoFar);
   }
   
   
   if('onprogress' in xhr){  // detect browser support for progressive delivery
      xhr.onprogress = handleProgress;
   }
      
   xhr.onreadystatechange = function() {

      function sendStartIfNotAlready() {
         // Internet Explorer is very unreliable as to when xhr.status etc can
         // be read so has to be protected with try/catch and tried again on 
         // the next readyState if it fails
         try{
            stillToSendStartEvent && oboeBus( HTTP_START ).emit(
               xhr.status,
               parseResponseHeaders(xhr.getAllResponseHeaders()) );
            stillToSendStartEvent = false;
         } catch(e){/* do nothing, will try again on next readyState*/}
      }
      
      switch( xhr.readyState ) {
               
         case 2: // HEADERS_RECEIVED
         case 3: // LOADING
            return sendStartIfNotAlready();
            
         case 4: // DONE
            sendStartIfNotAlready(); // if xhr.status hasn't been available yet, it must be NOW, huh IE?
            
            // is this a 2xx http code?
            var successful = String(xhr.status)[0] == 2;
            
            if( successful ) {
               // In Chrome 29 (not 28) no onprogress is emitted when a response
               // is complete before the onload. We need to always do handleInput
               // in case we get the load but have not had a final progress event.
               // This looks like a bug and may change in future but let's take
               // the safest approach and assume we might not have received a 
               // progress event for each part of the response
               handleProgress();
               
               oboeBus(STREAM_END).emit();
            } else {

               emitFail( errorReport(
                  xhr.status, 
                  xhr.responseText
               ));
            }
      }
   };
   
   try{
   
      xhr.open(method, url, true);
   
      for( var headerName in headers ){
         xhr.setRequestHeader(headerName, headers[headerName]);
      }
      
      if( !isCrossOrigin(window.location, parseUrlOrigin(url)) ) {
         xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      xhr.withCredentials = withCredentials;
      
      xhr.send(data);
      
   } catch( e ) {
      
      // To keep a consistent interface with Node, we can't emit an event here.
      // Node's streaming http adaptor receives the error as an asynchronous
      // event rather than as an exception. If we emitted now, the Oboe user
      // has had no chance to add a .fail listener so there is no way
      // the event could be useful. For both these reasons defer the
      // firing to the next JS frame.  
      window.setTimeout(
         partialComplete(emitFail, errorReport(undefined, undefined, e))
      ,  0
      );
   }            
}

var jsonPathSyntax = (function() {
 
   var
   
   /** 
    * Export a regular expression as a simple function by exposing just 
    * the Regex#exec. This allows regex tests to be used under the same 
    * interface as differently implemented tests, or for a user of the
    * tests to not concern themselves with their implementation as regular
    * expressions.
    * 
    * This could also be expressed point-free as:
    *   Function.prototype.bind.bind(RegExp.prototype.exec),
    *   
    * But that's far too confusing! (and not even smaller once minified 
    * and gzipped)
    */
       regexDescriptor = function regexDescriptor(regex) {
            return regex.exec.bind(regex);
       }
       
   /**
    * Join several regular expressions and express as a function.
    * This allows the token patterns to reuse component regular expressions
    * instead of being expressed in full using huge and confusing regular
    * expressions.
    */       
   ,   jsonPathClause = varArgs(function( componentRegexes ) {

            // The regular expressions all start with ^ because we 
            // only want to find matches at the start of the 
            // JSONPath fragment we are inspecting           
            componentRegexes.unshift(/^/);
            
            return   regexDescriptor(
                        RegExp(
                           componentRegexes.map(attr('source')).join('')
                        )
                     );
       })
       
   ,   possiblyCapturing =           /(\$?)/
   ,   namedNode =                   /([\w-_]+|\*)/
   ,   namePlaceholder =             /()/
   ,   nodeInArrayNotation =         /\["([^"]+)"\]/
   ,   numberedNodeInArrayNotation = /\[(\d+|\*)\]/
   ,   fieldList =                      /{([\w ]*?)}/
   ,   optionalFieldList =           /(?:{([\w ]*?)})?/
    

       //   foo or *                  
   ,   jsonPathNamedNodeInObjectNotation   = jsonPathClause( 
                                                possiblyCapturing, 
                                                namedNode, 
                                                optionalFieldList
                                             )
                                             
       //   ["foo"]   
   ,   jsonPathNamedNodeInArrayNotation    = jsonPathClause( 
                                                possiblyCapturing, 
                                                nodeInArrayNotation, 
                                                optionalFieldList
                                             )  

       //   [2] or [*]       
   ,   jsonPathNumberedNodeInArrayNotation = jsonPathClause( 
                                                possiblyCapturing, 
                                                numberedNodeInArrayNotation, 
                                                optionalFieldList
                                             )

       //   {a b c}      
   ,   jsonPathPureDuckTyping              = jsonPathClause( 
                                                possiblyCapturing, 
                                                namePlaceholder, 
                                                fieldList
                                             )
   
       //   ..
   ,   jsonPathDoubleDot                   = jsonPathClause(/\.\./)                  
   
       //   .
   ,   jsonPathDot                         = jsonPathClause(/\./)                    
   
       //   !
   ,   jsonPathBang                        = jsonPathClause(
                                                possiblyCapturing, 
                                                /!/
                                             )  
   
       //   nada!
   ,   emptyString                         = jsonPathClause(/$/)                     
   
   ;
   
  
   /* We export only a single function. When called, this function injects 
      into another function the descriptors from above.             
    */
   return function (fn){      
      return fn(      
         lazyUnion(
            jsonPathNamedNodeInObjectNotation
         ,  jsonPathNamedNodeInArrayNotation
         ,  jsonPathNumberedNodeInArrayNotation
         ,  jsonPathPureDuckTyping 
         )
      ,  jsonPathDoubleDot
      ,  jsonPathDot
      ,  jsonPathBang
      ,  emptyString 
      );
   }; 

}());
/**
 * Get a new key->node mapping
 * 
 * @param {String|Number} key
 * @param {Object|Array|String|Number|null} node a value found in the json
 */
function namedNode(key, node) {
   return {key:key, node:node};
}

/** get the key of a namedNode */
var keyOf = attr('key');

/** get the node from a namedNode */
var nodeOf = attr('node');
/** 
 * This file provides various listeners which can be used to build up
 * a changing ascent based on the callbacks provided by Clarinet. It listens
 * to the low-level events from Clarinet and emits higher-level ones.
 *  
 * The building up is stateless so to track a JSON file
 * ascentManager.js is required to store the ascent state
 * between calls.
 */



/** 
 * A special value to use in the path list to represent the path 'to' a root 
 * object (which doesn't really have any path). This prevents the need for 
 * special-casing detection of the root object and allows it to be treated 
 * like any other object. We might think of this as being similar to the 
 * 'unnamed root' domain ".", eg if I go to 
 * http://en.wikipedia.org./wiki/En/Main_page the dot after 'org' deliminates 
 * the unnamed root of the DNS.
 * 
 * This is kept as an object to take advantage that in Javascript's OO objects 
 * are guaranteed to be distinct, therefore no other object can possibly clash 
 * with this one. Strings, numbers etc provide no such guarantee. 
 **/
var ROOT_PATH = {};


/**
 * Create a new set of handlers for clarinet's events, bound to the emit 
 * function given.  
 */ 
function incrementalContentBuilder( oboeBus ) {

   var emitNodeOpened = oboeBus(NODE_OPENED).emit,
       emitNodeClosed = oboeBus(NODE_CLOSED).emit,
       emitRootOpened = oboeBus(ROOT_PATH_FOUND).emit,
       emitRootClosed = oboeBus(ROOT_NODE_FOUND).emit;

   function arrayIndicesAreKeys( possiblyInconsistentAscent, newDeepestNode) {
   
      /* for values in arrays we aren't pre-warned of the coming paths 
         (Clarinet gives no call to onkey like it does for values in objects) 
         so if we are in an array we need to create this path ourselves. The 
         key will be len(parentNode) because array keys are always sequential 
         numbers. */

      var parentNode = nodeOf( head( possiblyInconsistentAscent));
      
      return      isOfType( Array, parentNode)
               ?
                  keyFound(  possiblyInconsistentAscent, 
                              len(parentNode), 
                              newDeepestNode
                  )
               :  
                  // nothing needed, return unchanged
                  possiblyInconsistentAscent 
               ;
   }
                 
   function nodeOpened( ascent, newDeepestNode ) {
      
      if( !ascent ) {
         // we discovered the root node,         
         emitRootOpened( newDeepestNode);
                    
         return keyFound( ascent, ROOT_PATH, newDeepestNode);         
      }

      // we discovered a non-root node
                 
      var arrayConsistentAscent  = arrayIndicesAreKeys( ascent, newDeepestNode),      
          ancestorBranches       = tail( arrayConsistentAscent),
          previouslyUnmappedName = keyOf( head( arrayConsistentAscent));
          
      appendBuiltContent( 
         ancestorBranches, 
         previouslyUnmappedName, 
         newDeepestNode 
      );
                                                                                                         
      return cons( 
               namedNode( previouslyUnmappedName, newDeepestNode ), 
               ancestorBranches
      );                                                                          
   }


   /**
    * Add a new value to the object we are building up to represent the
    * parsed JSON
    */
   function appendBuiltContent( ancestorBranches, key, node ){
     
      nodeOf( head( ancestorBranches))[key] = node;
   }

     
   /**
    * For when we find a new key in the json.
    * 
    * @param {String|Number|Object} newDeepestName the key. If we are in an 
    *    array will be a number, otherwise a string. May take the special 
    *    value ROOT_PATH if the root node has just been found
    *    
    * @param {String|Number|Object|Array|Null|undefined} [maybeNewDeepestNode] 
    *    usually this won't be known so can be undefined. Can't use null 
    *    to represent unknown because null is a valid value in JSON
    **/  
   function keyFound(ascent, newDeepestName, maybeNewDeepestNode) {

      if( ascent ) { // if not root
      
         // If we have the key but (unless adding to an array) no known value
         // yet. Put that key in the output but against no defined value:      
         appendBuiltContent( ascent, newDeepestName, maybeNewDeepestNode );
      }
   
      var ascentWithNewPath = cons( 
                                 namedNode( newDeepestName, 
                                            maybeNewDeepestNode), 
                                 ascent
                              );

      emitNodeOpened( ascentWithNewPath);
 
      return ascentWithNewPath;
   }


   /**
    * For when the current node ends.
    */
   function nodeClosed( ascent ) {

      emitNodeClosed( ascent);
       
      return tail( ascent) ||
             // If there are no nodes left in the ascent the root node
             // just closed. Emit a special event for this: 
             emitRootClosed(nodeOf(head(ascent)));
   }      

   var contentBuilderHandlers = {};
   contentBuilderHandlers[SAX_VALUE_OPEN] = nodeOpened;
   contentBuilderHandlers[SAX_VALUE_CLOSE] = nodeClosed;
   contentBuilderHandlers[SAX_KEY] = keyFound;
   return contentBuilderHandlers;
}

/**
 * The jsonPath evaluator compiler used for Oboe.js. 
 * 
 * One function is exposed. This function takes a String JSONPath spec and 
 * returns a function to test candidate ascents for matches.
 * 
 *  String jsonPath -> (List ascent) -> Boolean|Object
 *
 * This file is coded in a pure functional style. That is, no function has 
 * side effects, every function evaluates to the same value for the same 
 * arguments and no variables are reassigned.
 */  
// the call to jsonPathSyntax injects the token syntaxes that are needed 
// inside the compiler
var jsonPathCompiler = jsonPathSyntax(function (pathNodeSyntax, 
                                                doubleDotSyntax, 
                                                dotSyntax,
                                                bangSyntax,
                                                emptySyntax ) {

   var CAPTURING_INDEX = 1;
   var NAME_INDEX = 2;
   var FIELD_LIST_INDEX = 3;

   var headKey  = compose2(keyOf, head),
       headNode = compose2(nodeOf, head);
                   
   /**
    * Create an evaluator function for a named path node, expressed in the
    * JSONPath like:
    *    foo
    *    ["bar"]
    *    [2]   
    */
   function nameClause(previousExpr, detection ) {
     
      var name = detection[NAME_INDEX],
            
          matchesName = ( !name || name == '*' ) 
                           ?  always
                           :  function(ascent){return headKey(ascent) == name};
     

      return lazyIntersection(matchesName, previousExpr);
   }

   /**
    * Create an evaluator function for a a duck-typed node, expressed like:
    * 
    *    {spin, taste, colour}
    *    .particle{spin, taste, colour}
    *    *{spin, taste, colour}
    */
   function duckTypeClause(previousExpr, detection) {

      var fieldListStr = detection[FIELD_LIST_INDEX];

      if (!fieldListStr) 
         return previousExpr; // don't wrap at all, return given expr as-is      

      var hasAllrequiredFields = partialComplete(
                                    hasAllProperties, 
                                    arrayAsList(fieldListStr.split(/\W+/))
                                 ),
                                 
          isMatch =  compose2( 
                        hasAllrequiredFields, 
                        headNode
                     );

      return lazyIntersection(isMatch, previousExpr);
   }

   /**
    * Expression for $, returns the evaluator function
    */
   function capture( previousExpr, detection ) {

      // extract meaning from the detection      
      var capturing = !!detection[CAPTURING_INDEX];

      if (!capturing)          
         return previousExpr; // don't wrap at all, return given expr as-is      
      
      return lazyIntersection(previousExpr, head);
            
   }            
      
   /**
    * Create an evaluator function that moves onto the next item on the 
    * lists. This function is the place where the logic to move up a 
    * level in the ascent exists. 
    * 
    * Eg, for JSONPath ".foo" we need skip1(nameClause(always, [,'foo']))
    */
   function skip1(previousExpr) {
   
   
      if( previousExpr == always ) {
         /* If there is no previous expression this consume command 
            is at the start of the jsonPath.
            Since JSONPath specifies what we'd like to find but not 
            necessarily everything leading down to it, when running
            out of JSONPath to check against we default to true */
         return always;
      }

      /** return true if the ascent we have contains only the JSON root,
       *  false otherwise
       */
      function notAtRoot(ascent){
         return headKey(ascent) != ROOT_PATH;
      }
      
      return lazyIntersection(
               /* If we're already at the root but there are more 
                  expressions to satisfy, can't consume any more. No match.

                  This check is why none of the other exprs have to be able 
                  to handle empty lists; skip1 is the only evaluator that 
                  moves onto the next token and it refuses to do so once it 
                  reaches the last item in the list. */
               notAtRoot,
               
               /* We are not at the root of the ascent yet.
                  Move to the next level of the ascent by handing only 
                  the tail to the previous expression */ 
               compose2(previousExpr, tail) 
      );
                                                                                                               
   }   
   
   /**
    * Create an evaluator function for the .. (double dot) token. Consumes
    * zero or more levels of the ascent, the fewest that are required to find
    * a match when given to previousExpr.
    */   
   function skipMany(previousExpr) {

      if( previousExpr == always ) {
         /* If there is no previous expression this consume command 
            is at the start of the jsonPath.
            Since JSONPath specifies what we'd like to find but not 
            necessarily everything leading down to it, when running
            out of JSONPath to check against we default to true */            
         return always;
      }
          
      var 
          // In JSONPath .. is equivalent to !.. so if .. reaches the root
          // the match has succeeded. Ie, we might write ..foo or !..foo
          // and both should match identically.
          terminalCaseWhenArrivingAtRoot = rootExpr(),
          terminalCaseWhenPreviousExpressionIsSatisfied = previousExpr,
          recursiveCase = skip1(function(ascent) {
             return cases(ascent);
          }),

          cases = lazyUnion(
                     terminalCaseWhenArrivingAtRoot
                  ,  terminalCaseWhenPreviousExpressionIsSatisfied
                  ,  recursiveCase  
                  );
      
      return cases;
   }      
   
   /**
    * Generate an evaluator for ! - matches only the root element of the json
    * and ignores any previous expressions since nothing may precede !. 
    */   
   function rootExpr() {
      
      return function(ascent){
         return headKey(ascent) == ROOT_PATH;
      };
   }   
         
   /**
    * Generate a statement wrapper to sit around the outermost 
    * clause evaluator.
    * 
    * Handles the case where the capturing is implicit because the JSONPath
    * did not contain a '$' by returning the last node.
    */   
   function statementExpr(lastClause) {
      
      return function(ascent) {
   
         // kick off the evaluation by passing through to the last clause
         var exprMatch = lastClause(ascent);
                                                     
         return exprMatch === true ? head(ascent) : exprMatch;
      };
   }      
                          
   /**
    * For when a token has been found in the JSONPath input.
    * Compiles the parser for that token and returns in combination with the
    * parser already generated.
    * 
    * @param {Function} exprs  a list of the clause evaluator generators for
    *                          the token that was found
    * @param {Function} parserGeneratedSoFar the parser already found
    * @param {Array} detection the match given by the regex engine when 
    *                          the feature was found
    */
   function expressionsReader( exprs, parserGeneratedSoFar, detection ) {
                     
      // if exprs is zero-length foldR will pass back the 
      // parserGeneratedSoFar as-is so we don't need to treat 
      // this as a special case
      
      return   foldR( 
                  function( parserGeneratedSoFar, expr ){
         
                     return expr(parserGeneratedSoFar, detection);
                  }, 
                  parserGeneratedSoFar, 
                  exprs
               );                     

   }

   /** 
    *  If jsonPath matches the given detector function, creates a function which
    *  evaluates against every clause in the clauseEvaluatorGenerators. The
    *  created function is propagated to the onSuccess function, along with
    *  the remaining unparsed JSONPath substring.
    *  
    *  The intended use is to create a clauseMatcher by filling in
    *  the first two arguments, thus providing a function that knows
    *  some syntax to match and what kind of generator to create if it
    *  finds it. The parameter list once completed is:
    *  
    *    (jsonPath, parserGeneratedSoFar, onSuccess)
    *  
    *  onSuccess may be compileJsonPathToFunction, to recursively continue 
    *  parsing after finding a match or returnFoundParser to stop here.
    */
   function generateClauseReaderIfTokenFound (
     
                        tokenDetector, clauseEvaluatorGenerators,
                         
                        jsonPath, parserGeneratedSoFar, onSuccess) {
                        
      var detected = tokenDetector(jsonPath);

      if(detected) {
         var compiledParser = expressionsReader(
                                 clauseEvaluatorGenerators, 
                                 parserGeneratedSoFar, 
                                 detected
                              ),
         
             remainingUnparsedJsonPath = jsonPath.substr(len(detected[0]));                
                               
         return onSuccess(remainingUnparsedJsonPath, compiledParser);
      }         
   }
                 
   /**
    * Partially completes generateClauseReaderIfTokenFound above. 
    */
   function clauseMatcher(tokenDetector, exprs) {
        
      return   partialComplete( 
                  generateClauseReaderIfTokenFound, 
                  tokenDetector, 
                  exprs 
               );
   }

   /**
    * clauseForJsonPath is a function which attempts to match against 
    * several clause matchers in order until one matches. If non match the
    * jsonPath expression is invalid and an error is thrown.
    * 
    * The parameter list is the same as a single clauseMatcher:
    * 
    *    (jsonPath, parserGeneratedSoFar, onSuccess)
    */     
   var clauseForJsonPath = lazyUnion(

      clauseMatcher(pathNodeSyntax   , list( capture, 
                                             duckTypeClause, 
                                             nameClause, 
                                             skip1 ))
                                                     
   ,  clauseMatcher(doubleDotSyntax  , list( skipMany))
       
       // dot is a separator only (like whitespace in other languages) but 
       // rather than make it a special case, use an empty list of 
       // expressions when this token is found
   ,  clauseMatcher(dotSyntax        , list() )  
                                                                                      
   ,  clauseMatcher(bangSyntax       , list( capture,
                                             rootExpr))
                                                          
   ,  clauseMatcher(emptySyntax      , list( statementExpr))
   
   ,  function (jsonPath) {
         throw Error('"' + jsonPath + '" could not be tokenised')      
      }
   );


   /**
    * One of two possible values for the onSuccess argument of 
    * generateClauseReaderIfTokenFound.
    * 
    * When this function is used, generateClauseReaderIfTokenFound simply 
    * returns the compiledParser that it made, regardless of if there is 
    * any remaining jsonPath to be compiled.
    */
   function returnFoundParser(_remainingJsonPath, compiledParser){ 
      return compiledParser 
   }     
              
   /**
    * Recursively compile a JSONPath expression.
    * 
    * This function serves as one of two possible values for the onSuccess 
    * argument of generateClauseReaderIfTokenFound, meaning continue to
    * recursively compile. Otherwise, returnFoundParser is given and
    * compilation terminates.
    */
   function compileJsonPathToFunction( uncompiledJsonPath, 
                                       parserGeneratedSoFar ) {

      /**
       * On finding a match, if there is remaining text to be compiled
       * we want to either continue parsing using a recursive call to 
       * compileJsonPathToFunction. Otherwise, we want to stop and return 
       * the parser that we have found so far.
       */
      var onFind =      uncompiledJsonPath
                     ?  compileJsonPathToFunction 
                     :  returnFoundParser;
                   
      return   clauseForJsonPath( 
                  uncompiledJsonPath, 
                  parserGeneratedSoFar, 
                  onFind
               );                              
   }

   /**
    * This is the function that we expose to the rest of the library.
    */
   return function(jsonPath){
        
      try {
         // Kick off the recursive parsing of the jsonPath 
         return compileJsonPathToFunction(jsonPath, always);
         
      } catch( e ) {
         throw Error( 'Could not compile "' + jsonPath + 
                      '" because ' + e.message
         );
      }
   }

});

/**
 * A pub/sub which is responsible for a single event type. A
 * multi-event type event bus is created by pubSub by collecting
 * several of these.
 *
 * @param {String} eventType
 *    the name of the events managed by this singleEventPubSub
 * @param {singleEventPubSub} [newListener]
 *    place to notify of new listeners
 * @param {singleEventPubSub} [removeListener]
 *    place to notify of when listeners are removed
 */
function singleEventPubSub(eventType, newListener, removeListener){

  /** we are optimised for emitting events over firing them.
   *  As well as the tuple list which stores event ids and
   *  listeners there is a list with just the listeners which
   *  can be iterated more quickly when we are emitting
   */
  var listenerTupleList,
      listenerList;

  function hasId(id){
    return function(tuple) {
      return tuple.id == id;
    };
  }

  return {

    /**
     * @param {Function} listener
     * @param {*} listenerId
     *    an id that this listener can later by removed by.
     *    Can be of any type, to be compared to other ids using ==
     */
    on:function( listener, listenerId ) {

      var tuple = {
        listener: listener
        ,  id:       listenerId || listener // when no id is given use the
        // listener function as the id
      };

      if( newListener ) {
        newListener.emit(eventType, listener, tuple.id);
      }

      listenerTupleList = cons( tuple,    listenerTupleList );
      listenerList      = cons( listener, listenerList      );

      return this; // chaining
    },

    emit:function () {
      applyEach( listenerList, arguments );
    },

    un: function( listenerId ) {

      var removed;

      listenerTupleList = without(
        listenerTupleList,
        hasId(listenerId),
        function(tuple){
          removed = tuple;
        }
      );

      if( removed ) {
        listenerList = without( listenerList, function(listener){
          return listener == removed.listener;
        });

        if( removeListener ) {
          removeListener.emit(eventType, removed.listener, removed.id);
        }
      }
    },

    listeners: function(){
      // differs from Node EventEmitter: returns list, not array
      return listenerList;
    },

    hasListener: function(listenerId){
      var test = listenerId? hasId(listenerId) : always;

      return defined(first( test, listenerTupleList));
    }
  };
}

/**
 * pubSub is a curried interface for listening to and emitting
 * events.
 *
 * If we get a bus:
 *
 *    var bus = pubSub();
 *
 * We can listen to event 'foo' like:
 *
 *    bus('foo').on(myCallback)
 *
 * And emit event foo like:
 *
 *    bus('foo').emit()
 *
 * or, with a parameter:
 *
 *    bus('foo').emit('bar')
 *
 * All functions can be cached and don't need to be
 * bound. Ie:
 *
 *    var fooEmitter = bus('foo').emit
 *    fooEmitter('bar');  // emit an event
 *    fooEmitter('baz');  // emit another
 *
 * There's also an uncurried[1] shortcut for .emit and .on:
 *
 *    bus.on('foo', callback)
 *    bus.emit('foo', 'bar')
 *
 * [1]: http://zvon.org/other/haskell/Outputprelude/uncurry_f.html
 */
function pubSub(){

   var singles = {},
       newListener = newSingle('newListener'),
       removeListener = newSingle('removeListener');

   function newSingle(eventName) {
      return singles[eventName] = singleEventPubSub(
         eventName,
         newListener,
         removeListener
      );
   }

   /** pubSub instances are functions */
   function pubSubInstance( eventName ){

      return singles[eventName] || newSingle( eventName );
   }

   // add convenience EventEmitter-style uncurried form of 'emit' and 'on'
   ['emit', 'on', 'un'].forEach(function(methodName){

      pubSubInstance[methodName] = varArgs(function(eventName, parameters){
         apply( parameters, pubSubInstance( eventName )[methodName]);
      });
   });

   return pubSubInstance;
}

/**
 * This file declares some constants to use as names for event types.
 */

var // the events which are never exported are kept as 
    // the smallest possible representation, in numbers:
    _S = 1,

    // fired whenever a new node starts in the JSON stream:
    NODE_OPENED     = _S++,

    // fired whenever a node closes in the JSON stream:
    NODE_CLOSED     = _S++,

    // called if a .node callback returns a value - 
    NODE_SWAP       = _S++,
    NODE_DROP       = _S++,

    FAIL_EVENT      = 'fail',
   
    ROOT_NODE_FOUND = _S++,
    ROOT_PATH_FOUND = _S++,
   
    HTTP_START      = 'start',
    STREAM_DATA     = 'data',
    STREAM_END      = 'end',
    ABORTING        = _S++,

    // SAX events butchered from Clarinet
    SAX_KEY          = _S++,
    SAX_VALUE_OPEN   = _S++,
    SAX_VALUE_CLOSE  = _S++;
    
function errorReport(statusCode, body, error) {
   try{
      var jsonBody = JSON.parse(body);
   }catch(e){}

   return {
      statusCode:statusCode,
      body:body,
      jsonBody:jsonBody,
      thrown:error
   };
}    

/** 
 *  The pattern adaptor listens for newListener and removeListener
 *  events. When patterns are added or removed it compiles the JSONPath
 *  and wires them up.
 *  
 *  When nodes and paths are found it emits the fully-qualified match 
 *  events with parameters ready to ship to the outside world
 */

function patternAdapter(oboeBus, jsonPathCompiler) {

   var predicateEventMap = {
      node:oboeBus(NODE_CLOSED)
   ,  path:oboeBus(NODE_OPENED)
   };
     
   function emitMatchingNode(emitMatch, node, ascent) {
         
      /* 
         We're now calling to the outside world where Lisp-style 
         lists will not be familiar. Convert to standard arrays. 
   
         Also, reverse the order because it is more common to 
         list paths "root to leaf" than "leaf to root"  */
      var descent     = reverseList(ascent);
                
      emitMatch(
         node,
         
         // To make a path, strip off the last item which is the special
         // ROOT_PATH token for the 'path' to the root node          
         listAsArray(tail(map(keyOf,descent))),  // path
         listAsArray(map(nodeOf, descent))       // ancestors    
      );         
   }

   /* 
    * Set up the catching of events such as NODE_CLOSED and NODE_OPENED and, if 
    * matching the specified pattern, propagate to pattern-match events such as 
    * oboeBus('node:!')
    * 
    * 
    * 
    * @param {Function} predicateEvent 
    *          either oboeBus(NODE_CLOSED) or oboeBus(NODE_OPENED).
    * @param {Function} compiledJsonPath          
    */
   function addUnderlyingListener( fullEventName, predicateEvent, compiledJsonPath ){
   
      var emitMatch = oboeBus(fullEventName).emit;
   
      predicateEvent.on( function (ascent) {

         var maybeMatchingMapping = compiledJsonPath(ascent);

         /* Possible values for maybeMatchingMapping are now:

          false: 
          we did not match 

          an object/array/string/number/null: 
          we matched and have the node that matched.
          Because nulls are valid json values this can be null.

          undefined:
          we matched but don't have the matching node yet.
          ie, we know there is an upcoming node that matches but we 
          can't say anything else about it. 
          */
         if (maybeMatchingMapping !== false) {

            emitMatchingNode(
               emitMatch, 
               nodeOf(maybeMatchingMapping), 
               ascent
            );
         }
      }, fullEventName);
     
      oboeBus('removeListener').on( function(removedEventName){

         // if the fully qualified match event listener is later removed, clean up 
         // by removing the underlying listener if it was the last using that pattern:
      
         if( removedEventName == fullEventName ) {
         
            if( !oboeBus(removedEventName).listeners(  )) {
               predicateEvent.un( fullEventName );
            }
         }
      });   
   }

   oboeBus('newListener').on( function(fullEventName){

      var match = /(node|path):(.*)/.exec(fullEventName);
      
      if( match ) {
         var predicateEvent = predicateEventMap[match[1]];
                    
         if( !predicateEvent.hasListener( fullEventName) ) {  
                  
            addUnderlyingListener(
               fullEventName,
               predicateEvent, 
               jsonPathCompiler( match[2] )
            );
         }
      }    
   })

}

/**
 * The instance API is the thing that is returned when oboe() is called.
 * it allows:
 *
 *    - listeners for various events to be added and removed
 *    - the http response header/headers to be read
 */
function instanceApi(oboeBus, contentSource){

  var oboeApi,
      fullyQualifiedNamePattern = /^(node|path):./,
      rootNodeFinishedEvent = oboeBus(ROOT_NODE_FOUND),
      emitNodeDrop = oboeBus(NODE_DROP).emit,
      emitNodeSwap = oboeBus(NODE_SWAP).emit,

      /**
       * Add any kind of listener that the instance api exposes
       */
      addListener = varArgs(function( eventId, parameters ){

        if( oboeApi[eventId] ) {

          // for events added as .on(event, callback), if there is a
          // .event() equivalent with special behaviour , pass through
          // to that:
          apply(parameters, oboeApi[eventId]);
        } else {

          // we have a standard Node.js EventEmitter 2-argument call.
          // The first parameter is the listener.
          var event = oboeBus(eventId),
              listener = parameters[0];

          if( fullyQualifiedNamePattern.test(eventId) ) {

            // allow fully-qualified node/path listeners
            // to be added
            addForgettableCallback(event, listener);
          } else  {

            // the event has no special handling, pass through
            // directly onto the event bus:
            event.on( listener);
          }
        }

        return oboeApi; // chaining
      }),

      /**
       * Remove any kind of listener that the instance api exposes
       */
      removeListener = function( eventId, p2, p3 ){

        if( eventId == 'done' ) {

          rootNodeFinishedEvent.un(p2);

        } else if( eventId == 'node' || eventId == 'path' ) {

          // allow removal of node and path
          oboeBus.un(eventId + ':' + p2, p3);
        } else {

          // we have a standard Node.js EventEmitter 2-argument call.
          // The second parameter is the listener. This may be a call
          // to remove a fully-qualified node/path listener but requires
          // no special handling
          var listener = p2;

          oboeBus(eventId).un(listener);
        }

        return oboeApi; // chaining
      };

  /**
   * Add a callback, wrapped in a try/catch so as to not break the
   * execution of Oboe if an exception is thrown (fail events are
   * fired instead)
   *
   * The callback is used as the listener id so that it can later be
   * removed using .un(callback)
   */
  function addProtectedCallback(eventName, callback) {
    oboeBus(eventName).on(protectedCallback(callback), callback);
    return oboeApi; // chaining
  }

  /**
   * Add a callback where, if .forget() is called during the callback's
   * execution, the callback will be de-registered
   */
  function addForgettableCallback(event, callback, listenerId) {

    // listenerId is optional and if not given, the original
    // callback will be used
    listenerId = listenerId || callback;

    var safeCallback = protectedCallback(callback);

    event.on( function() {

      var discard = false;

      oboeApi.forget = function(){
        discard = true;
      };

      apply( arguments, safeCallback );

      delete oboeApi.forget;

      if( discard ) {
        event.un(listenerId);
      }
    }, listenerId);

    return oboeApi; // chaining
  }

  /**
   *  wrap a callback so that if it throws, Oboe.js doesn't crash but instead
   *  throw the error in another event loop
   */
  function protectedCallback( callback ) {
    return function() {
      try{
        return callback.apply(oboeApi, arguments);
      }catch(e)  {
        setTimeout(function() {
          throw new Error(e.message);
        });
      }
    }
  }

  /**
   * Return the fully qualified event for when a pattern matches
   * either a node or a path
   *
   * @param type {String} either 'node' or 'path'
   */
  function fullyQualifiedPatternMatchEvent(type, pattern) {
    return oboeBus(type + ':' + pattern);
  }

  function wrapCallbackToSwapNodeIfSomethingReturned( callback ) {
    return function() {
      var returnValueFromCallback = callback.apply(this, arguments);

      if( defined(returnValueFromCallback) ) {

        if( returnValueFromCallback == oboe.drop ) {
          emitNodeDrop();
        } else {
          emitNodeSwap(returnValueFromCallback);
        }
      }
    }
  }

  function addSingleNodeOrPathListener(eventId, pattern, callback) {

    var effectiveCallback;

    if( eventId == 'node' ) {
      effectiveCallback = wrapCallbackToSwapNodeIfSomethingReturned(callback);
    } else {
      effectiveCallback = callback;
    }

    addForgettableCallback(
      fullyQualifiedPatternMatchEvent(eventId, pattern),
      effectiveCallback,
      callback
    );
  }

  /**
   * Add several listeners at a time, from a map
   */
  function addMultipleNodeOrPathListeners(eventId, listenerMap) {

    for( var pattern in listenerMap ) {
      addSingleNodeOrPathListener(eventId, pattern, listenerMap[pattern]);
    }
  }

  /**
   * implementation behind .onPath() and .onNode()
   */
  function addNodeOrPathListenerApi( eventId, jsonPathOrListenerMap, callback ){

    if( isString(jsonPathOrListenerMap) ) {
      addSingleNodeOrPathListener(eventId, jsonPathOrListenerMap, callback);

    } else {
      addMultipleNodeOrPathListeners(eventId, jsonPathOrListenerMap);
    }

    return oboeApi; // chaining
  }


  // some interface methods are only filled in after we receive
  // values and are noops before that:
  oboeBus(ROOT_PATH_FOUND).on( function(rootNode) {
    oboeApi.root = functor(rootNode);
  });

  /**
   * When content starts make the headers readable through the
   * instance API
   */
  oboeBus(HTTP_START).on( function(_statusCode, headers) {

    oboeApi.header =  function(name) {
      return name ? headers[name]
        : headers
      ;
    }
  });

  /**
   * Construct and return the public API of the Oboe instance to be
   * returned to the calling application
   */
  return oboeApi = {
    on             : addListener,
    addListener    : addListener,
    removeListener : removeListener,
    emit           : oboeBus.emit,

    node           : partialComplete(addNodeOrPathListenerApi, 'node'),
    path           : partialComplete(addNodeOrPathListenerApi, 'path'),

    done           : partialComplete(addForgettableCallback, rootNodeFinishedEvent),
    start          : partialComplete(addProtectedCallback, HTTP_START ),

    // fail doesn't use protectedCallback because
    // could lead to non-terminating loops
    fail           : oboeBus(FAIL_EVENT).on,

    // public api calling abort fires the ABORTING event
    abort          : oboeBus(ABORTING).emit,

    // initially return nothing for header and root
    header         : noop,
    root           : noop,

    source         : contentSource
  };
}

/**
 * This file sits just behind the API which is used to attain a new
 * Oboe instance. It creates the new components that are required
 * and introduces them to each other.
 */

function wire (httpMethodName, contentSource, body, headers, withCredentials){

   var oboeBus = pubSub();
   
   // Wire the input stream in if we are given a content source.
   // This will usually be the case. If not, the instance created
   // will have to be passed content from an external source.
  
   if( contentSource ) {

      streamingHttp( oboeBus,
                     httpTransport(), 
                     httpMethodName,
                     contentSource,
                     body,
                     headers,
                     withCredentials
      );
   }

   clarinet(oboeBus);

   ascentManager(oboeBus, incrementalContentBuilder(oboeBus));
      
   patternAdapter(oboeBus, jsonPathCompiler);      
      
   return instanceApi(oboeBus, contentSource);
}

function applyDefaults( passthrough, url, httpMethodName, body, headers, withCredentials, cached ){

   headers = headers ?
      // Shallow-clone the headers array. This allows it to be
      // modified without side effects to the caller. We don't
      // want to change objects that the user passes in.
      JSON.parse(JSON.stringify(headers))
      : {};

   if( body ) {
      if( !isString(body) ) {

         // If the body is not a string, stringify it. This allows objects to
         // be given which will be sent as JSON.
         body = JSON.stringify(body);

         // Default Content-Type to JSON unless given otherwise.
         headers['Content-Type'] = headers['Content-Type'] || 'application/json';
      }
      headers['Content-Length'] = headers['Content-Length'] || body.length;
   } else {
      body = null;
   }

   // support cache busting like jQuery.ajax({cache:false})
   function modifiedUrl(baseUrl, cached) {

      if( cached === false ) {

         if( baseUrl.indexOf('?') == -1 ) {
            baseUrl += '?';
         } else {
            baseUrl += '&';
         }

         baseUrl += '_=' + new Date().getTime();
      }
      return baseUrl;
   }

   return passthrough( httpMethodName || 'GET', modifiedUrl(url, cached), body, headers, withCredentials || false );
}

// export public API
function oboe(arg1) {

   // We use duck-typing to detect if the parameter given is a stream, with the
   // below list of parameters.
   // Unpipe and unshift would normally be present on a stream but this breaks
   // compatibility with Request streams.
   // See https://github.com/jimhigson/oboe.js/issues/65
   
   var nodeStreamMethodNames = list('resume', 'pause', 'pipe'),
       isStream = partialComplete(
                     hasAllProperties
                  ,  nodeStreamMethodNames
                  );
   
   if( arg1 ) {
      if (isStream(arg1) || isString(arg1)) {

         //  simple version for GETs. Signature is:
         //    oboe( url )
         //  or, under node:
         //    oboe( readableStream )
         return applyDefaults(
            wire,
            arg1 // url
         );

      } else {

         // method signature is:
         //    oboe({method:m, url:u, body:b, headers:{...}})

         return applyDefaults(
            wire,
            arg1.url,
            arg1.method,
            arg1.body,
            arg1.headers,
            arg1.withCredentials,
            arg1.cached
         );
         
      }
   } else {
      // wire up a no-AJAX, no-stream Oboe. Will have to have content 
      // fed in externally and using .emit.
      return wire();
   }
}

/* oboe.drop is a special value. If a node callback returns this value the
   parsed node is deleted from the JSON
 */
oboe.drop = function() {
   return oboe.drop;
};


   if ( typeof define === "function" && define.amd ) {
      define( "oboe", [], function () { return oboe; } );
   } else if (typeof exports === 'object') {
      module.exports = oboe;
   } else {
      window.oboe = oboe;
   }
})((function(){
   // Access to the window object throws an exception in HTML5 web workers so
   // point it to "self" if it runs in a web worker
      try {
         return window;
      } catch (e) {
         return self;
      }
   }()), Object, Array, Error, JSON);

  var _URL = _URL || {};
  _URL =
  {
    "Parse" : function(url) {
      var parser = document.createElement('a'),
          queryString = {},
          queries, split, i;
      parser.href = url;
      queries = parser.search.replace(/^\?/, '').split('&');
      for( i = 0; i < queries.length; i++ ) {
          split = queries[i].split('=');
          queryString[split[0]] = split[1];
      }
      return {
          protocol: parser.protocol,
          host: parser.host,
          hostname: parser.hostname,
          port: parser.port,
          pathname: parser.pathname,
          search: parser.search,
          queryString: queryString,
          hash: parser.hash
      };
    },
    "ParentDirectory": function(url) {
      return url.replace(/\\/g, '/').replace(/\/[^/]*\/?$/, '')
    },
    "Domain": function(url) {
      if (isIE)
        var IEcaFix = {'host' : function(url) { return _URL.Parse(url).hostname + '/'; } }
      else
        var IEcaFix = {'host' : function(url) { return _URL.Parse(url).host ; } }
      return _URL.Parse(url).protocol + '//' + IEcaFix.host(url) + _URL.ParentDirectory(_URL.ParentDirectory(_URL.Parse(url).pathname));
    }
  };

  //Função Anônima para Criação do Data Store (Armazenamento Temporário de Dados)
  //https://j11y.io/javascript/element-datastorage/
  (function(){
    var cache = [0], expando = 'data' + +new Date();
    function data(elem) {
      var cacheIndex = elem[expando], nextCacheIndex = cache.length;
      if(!cacheIndex) {
        cacheIndex = elem[expando] = nextCacheIndex;
        cache[cacheIndex] = {};
      }
      return cache[cacheIndex];
    }
    window.data = data;
  })();

  //Função Anônima para Criação da Constante __FILE__
  (function(){
    Object.defineProperty(window, '__FILE__', {
      get: function(){
        var scripts = document.getElementsByTagName('link');
        for (var i=0; i<scripts.length; i++) {
          var start = scripts[i].href.indexOf('x-select.');
          if (start != -1) { 
            return scripts[i].href;
            break; 
          }
        }
      }
    });
  })();

  var loadJSON = undefined,
      __ROOT__ = _URL.Domain(document.URL),
      __LOAD__ = _URL.Parse(__FILE__).queryString.load_format,
      __DEBUG__ = _URL.Parse(__FILE__).queryString.debug,
      __IEMODE__ = _URL.Parse(__FILE__).queryString.ie_load_mode || 'fetch';

  if (isIE){
    switch (__IEMODE__) {
      case 'worker_fetch': // Experimental e ainda em Desenvolvimento, Funciona com Fetch porém é Async e deveria Ser Sync (Não Recomendo Usar este Modo)
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true') 
          console.log('ie_load_mode: ' + __IEMODE__);
        eval("loadJSON = function(url){return new Promise(function(resolve, reject){worker.postMessage({'cmd':'fetch','data':[url]});worker.addEventListener('message',function(result){new Promise(function(resolve, reject){setTimeout(resolve, 500);}).then(function(){resolve(result.data);});});});};var worker = new Worker('../../polyfills/ie.fix/worker.js')");
      break;
      // Alternativa
      case 'xhr': // Funciona com XHR ao invés de Fetch
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
          console.log('ie_load_mode: ' + __IEMODE__);
        eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkhttp(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};");
      break;
      // Padrão
      case 'fetch':
      case undefined: // Funciona sem Worker
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
          console.log('ie_load_mode: ' + __IEMODE__);
        //eval("loadJSON = function(url){var data = fetch(url).then(function(r){return r.json();});return data;};");
        //eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkfetch(config);},args:[{url:url}]}).then(function(r){return r;});return data;};"); //Real Fetch Funciona Apenas Worker Separado
        eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkfetch(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};"); //Fake Fetch Sobre XHR Funciona em Embed Worker
      break;
    }
  }
  else {
    // Esconde do IEca Async/Await
    eval("loadJSON = greenlet( async function(url){var data = await (await fetch(url)).json();return data;});");
  }

  var App = App || {}, Pattern = Pattern || [];
  App = 
  {
    "DEFAULT": {
      "PLACES": {
        "PATTERN": {
          "RULE": {
            "loading": "Carregando...",
            "default": "Escolha uma Opção",
            "source" : function(){ return "source" },
            "value" : function(){ return "value" },
            "text" : function(){ return "text" },
            "filter" : function(){ return "filter" },
            "rightAlign": function(){ return "rightAlign" }
          }
        }
      }
    },
    "PATTERN": {
      "PLACES" : {
        "STATE" : {
          "RULE" : {
            "default" : "Escolha um Estado",
            "source" : __ROOT__ +  "/src/data/Estados_Compacted.json",
            "value" : "//ID",
            "text" : "//Nome",
            "filter" : "ID",
            "rightAlign" : false
          }
        },
        "CITY" : {
          "RULE" : {
            "default" : "Escolha uma Cidade",
            "source" : __ROOT__ +  "/src/data/Cidades_Compacted.json",
            "value" : '//*[Estado="{$ID}"]/ID',
            "text" : '//*[Estado="{$ID}"]/Nome',
            "filter" : "ID",
            "loader" : "Estado",
            "rightAlign" : false
          }
        },
        "DISTRICT" : {
          "RULE" : {
            "default" : "Escolha um Bairro",
            "source" : __ROOT__ +  "/src/data/Bairros_Compacted.json",
            "value" : '//*[Cidade="{$ID}"]/ID',
            "text" : '//*[Cidade="{$ID}"]/Nome',
            "loader" : "Cidade",
            "rightAlign" : false
          }
        }
      }
    },
    "EXT": {
      "Get" : {
        "Element" : {
          "ByAttribute" : function(attribute, value, element_type) {
            element_type = element_type || "*";
            var All = document.getElementsByTagName(element_type);
            for (var i = 0; i < All.length; i++) {
              if (All[i].getAttribute(attribute) == value) { 
                return All[i]; 
              }
            }
          }
        }
      },
      /*
       * Pure JavaScript AddClass and RemoveClass functions
       * by Jared Reich and Vladimir
       * https://codepen.io/Vovastradamus/pen/emGNgd
       * https://gist.github.com/jaredreich/971c43d9336dce7ade942b6a8acb2e6a
       */
      "Class" : {
        "Contains": function(o, c) {
          return (' ' + o.className + ' ').indexOf(' ' + c + ' ') > -1;
        },
        "Add" : function(o, c){
          var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
          if (re.test(o.className)) return
          o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        },
        "Remove" : function(o, c){
          var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
          o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        }
      },
      "CRC32" : function(str) {
        var makeCRCTable = function(){
          var c;
          var crcTable = [];
          for(var n =0; n < 256; n++){
            c = n;
            for(var k =0; k < 8; k++){
              c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
            }
            crcTable[n] = c;
          }
          return crcTable;
        }
        var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
        var crc = 0 ^ (-1);
        for (var i = 0; i < str.length; i++ ) {
          crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
        }
        return (crc ^ (-1)) >>> 0;
      },
      "HTTP" : {
        "ContentLength" : function(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, true);
          xhr.onreadystatechange = function() {
            if (this.readyState == this.DONE) {
              callback(parseInt(xhr.getResponseHeader("Content-Length")));
            }
          };
          xhr.send();
        },
        "Request" : function(path, success, error){
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                if (success)
                  success(JSON.parse(xhr.responseText));
              }
              else {
                if (error)
                  error(xhr);
              }
            }
          };
          xhr.open("GET", path, true);
          xhr.send();
        }
      },
      "Load": {
        "jQuery" : function() {
          return (typeof jQuery == 'undefined') ? false : true;
        },
        "Chosen" : function(element) {
          jQuery(element).each(function () {
            jQuery(this).chosen({
              rtl: (jQuery(this).attr('x-dir') && jQuery(this).attr('x-dir') == 'rtl') ? true : false,
              allow_single_deselect: jQuery(this).attr('data-allow-clear'),
              no_results_text: 'Nenhuma opção encontrada para: '
            })
            .trigger('chosen:updated');
          });
        },
        "Select2" : function(element) {
          jQuery(element).each(function () {
            jQuery(this).select2({
              theme: 'bootstrap',
              width: '100%',
              dir: (jQuery(this).attr('x-dir') && jQuery(this).attr('x-dir') == 'rtl') ? 'rtl' : 'ltr',
              allowClear: jQuery(this).attr('data-allow-clear'),
              placeholder: jQuery(this).attr('data-placeholder'),
              language: {
                noResults: function() { return 'Nenhuma opção encontrada'; }
              }
            })
            .on('select2:unselecting', function(e) {
              jQuery(this).data('unselecting1', true);
              jQuery(this).data('unselecting2', true);
            })
            .on('select2:open', function(e) {
              var unselecting1 = jQuery(this).data('unselecting1');
              var unselecting2 = jQuery(this).data('unselecting2');
              if(unselecting1 || unselecting2) {
                jQuery(this).select2('close');
                if(unselecting1) {
                  jQuery(this).data('unselecting1', false);
                }
                else {
                  jQuery(this).data('unselecting2', false);
                }
              }
            })
            .trigger('updated');
          });
        },
        "BootstrapSelect": function(element, empty) {
          if (empty === undefined) {
            jQuery(element).each(function () {
              jQuery(this).selectpicker({
                noneResultsText: 'Nenhuma opção encontrada para: {0}',
                liveSearchPlaceholder: '',
                noneSelectedText: '',
                liveSearch: true,
                showTick: true,
                size: 7,
                style : (jQuery(this).attr('x-dir') && jQuery(this).attr('x-dir') == 'rtl') ? 'rtl btn-light' : 'btn-light',
                width: '100%',
                header: jQuery(this).attr('x-default'),
                title : jQuery(this).attr('data-placeholder')
              })
              .selectpicker('refresh')
              .selectpicker('setSize')
              .selectpicker('render')
            });
          }
          else {
            jQuery(element).each(function () {
              jQuery(this).selectpicker({
                noneResultsText: 'Nenhuma opção encontrada para: {0}',
                liveSearchPlaceholder: '',
                noneSelectedText: '',
                liveSearch: true,
                showTick: true,
                size: 7,
                style : (jQuery(this).attr('x-dir') && jQuery(this).attr('x-dir') == 'rt') ? 'rtl btn-light' : 'btn-light',
                width: '100%',
                header: jQuery(this).attr('x-default'),
                title : jQuery(this).attr('data-placeholder')
              })
              .val(empty)
              .selectpicker('refresh')
              .selectpicker('setSize')
              .selectpicker('render')
            });
          }
        }
      },
      "JSON": {
        /*
         * Javascript using Blob to save json file
         * by JsBlobSaveJson
         * https://gist.github.com/yiwenl/8f2b735a2263bc93ee33
         * https://stackoverflow.com/questions/31649362/json-stringify-and-unicode-characters
         */
        "Save": function(obj) {
          var str1 = JSON.stringify(obj), str2 = "", chr = "";
          for(var i = 0; i < str1.length; i++) {
            if (str1[i].match(/[^\x00-\x7F]/)) {
              chr = "\\u" + ("000" + str1[i].charCodeAt(0).toString(16)).substr(-4);
            }
            else chr = str1[i];
            str2 = str2 + chr;
          };
          var encode = function(s) {
            var out = [];
            for (var i = 0; i < s.length; i++) {
              out[i] = s.charCodeAt(i);
            }
            return new Uint8Array(out);
          };
          return URL.createObjectURL(new Blob([encode(str2)], {type: 'application/octet-stream'}));
        },
        "Template": function(object) {
          return function (context) {
            var replacer = function (key, val) {
              if (typeof val === 'function') {
                return context[val()]
              }
              return val;
            }
            return JSON.parse(JSON.stringify(object, replacer));
          }
        }
      },
      "Select" : {
        "Option" : {
          "SetLoading": function(element, disabled) {
            var defaultOption = document.createElement('option');
            defaultOption.text = App.DEFAULT.PLACES.PATTERN.RULE.loading;
            if (disabled === undefined) {
              defaultOption.readonly = true;
              defaultOption.disabled = true;
            }
            defaultOption.className = "allow_single_deselect_option";
            element.add(defaultOption);
            element.selectedIndex = 0;
          },
          "SetDefault": function(element) {
            if (element.hasAttribute('x-default') && element.getAttribute('x-default') != '') {
              element.options[0].text = element.getAttribute('x-default');
            }
          },
          "SetEmpty": function(element) {
            var option = document.createElement("option");
            option.text = "";
            option.value = "";
            option.className = "allow_single_deselect_option";
            element.appendChild(option);
          },
          "SetTransition" : function(element, index) {
            element.options[index].text = App.DEFAULT.PLACES.PATTERN.RULE.loading;
            element.options[index].selected = true;
            element.options[index].readonly = true;
            element.options[index].disabled = false;
            setTimeout(function(){
              element.options[index].text = element.getAttribute('x-default');
              element.options[index].readonly = true;
              element.options[index].disabled = true;
              element.options[index].selected = true;
            }, 1000);
          },
          "Add": function(element, response, value, text) {
            if (value === undefined && text === undefined) {
              var option = '';
              for (var i = 0; i < response.length; i++) option += response[i].tag;
              element.innerHTML += option;
            }
            else {
              var value = JSON.search(response, value),
                  text = JSON.search(response, text),
                  option = undefined;
              for (var i = 0; i < value.length; i++) {
                option = document.createElement('option');
                option.text = text[i];
                option.value = value[i];
                if (element.hasAttribute('x-selected') && element.getAttribute('x-selected') != '') {
                  if( (element.getAttribute('x-selected') == value[i]) || (element.getAttribute('x-selected') == text[i]) ) {
                    option.setAttribute('selected','selected');
                    option.selected = true;
                  }
                }
                element.add(option);
              };
            }
          },
          "Reselect" : function(element, value) {
            var op = element.getElementsByTagName("option");
            for(var i = 0; i < op.length; i++) {
              op[i].removeAttribute('selected');
              if(op[i].value.toLowerCase() == value) {
                op[i].selected = true;
                op[i].setAttribute('selected','selected');
              }
            }
          },
          "Remove": function(element, value) {
            var op = element.getElementsByTagName("option");
            for(var i = 0; i < op.length; i++) {
            if (op.options[i].value == value)
              op.remove(i);
            }
          },
          "RemoveAll": function(element) {
            for(var i = element.options.length - 1; i >= 0; i--) {
              element.remove(i);
            }
          }
        },
        "Call" : function(_self, response, node, type) {
          if(Array.isArray(response) && response.length) {
            // Criar as Opções
            if (_self.hasAttribute('x-template') && _self.getAttribute('x-template') != '') {
              if (
                   (_self.hasAttribute('x-selected') && _self.getAttribute('x-selected') != '') &&
                   (_self.hasAttribute('x-filter') && _self.getAttribute('x-filter') != '')
                ){
                if (type === 'cache') {
                  var response = (node === '//*') ? response[0] : response;
                }
                var result = ST.select({ "objeto": response })
                  .transformWith(
                    {
                      "{{ #let }}": [{
                        filter: _self.getAttribute('x-filter'),
                        selected: _self.getAttribute('x-selected')
                      }, {
                        "{{ #each objeto }}": {
                          "tag": [{
                            "{{ #if eval(filter) == selected }}": _self.getAttribute('x-template').replace('<option', '<option selected="selected"')
                          }, {
                            "{{ #else }}": _self.getAttribute('x-template')
                          }]
                        }
                      }]
                    }
                  )
                  .root();
              }
              else {
                if (type === 'cache') {
                  var response = (node === '//*') ? response[0] : response;
                }
                var result = ST.select({ "objeto": response })
                  .transformWith({
                    "{{ #each objeto }}": {
                      "tag": _self.getAttribute('x-template')
                    }
                  })
                  .root();
              }
              App.EXT.Select.Option.Add(_self, result);

              // Compatibilizar com o Plugin Bootstrap.Select
              if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
                _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
                App.EXT.Load.BootstrapSelect('select[is="x-select"][x-plugin="select"]');
                //App.EXT.Load.BootstrapSelect(_self);
                // Releseciona o Option
                if (_self.hasAttribute('x-selected') && _self.getAttribute('x-selected') != '') {
                  App.EXT.Load.BootstrapSelect(_self, (jQuery(_self).attr('x-selected') && jQuery(_self).attr('x-selected') !== undefined) ? jQuery(_self).attr('x-selected') : '');
                }
                // Correção para Selecionar o Option Correto
                jQuery(_self).find('.bs-title-option').remove();
                jQuery(_self).append('<option style="display:none"></option>');
                // Correção da Altura do DropDown Menu
                jQuery(_self).on('shown.bs.select', function (e, clickedIndex, isSelected, previousValue) {
                  App.EXT.Load.BootstrapSelect(_self);
                  jQuery(_self).parent().find('.btn.dropdown-toggle').addClass('bootstrap-select-caret-animate');
                });
                jQuery(_self).on('hidden.bs.select', function (e, clickedIndex, isSelected, previousValue) {
                  jQuery(_self).parent().find('.btn.dropdown-toggle').removeClass('bootstrap-select-caret-animate');
                });
              }
            }
            else {
              if (_self.hasAttribute('x-reference') && _self.getAttribute('x-reference') != '') {
                var _self_ref = document.querySelector(_self.getAttribute('x-reference')),
                    _self_val = (App.EXT.Load.jQuery()) ? jQuery(_self_ref) : _self_ref.options[_self_ref.selectedIndex];

                if (_self_val !== undefined) {
                  App.EXT.Select.Option.Add(_self, response, _self.getAttribute('x-value').replace('{$ID}', _self_val.val() || _self_val.value), _self.getAttribute('x-text').replace('{$ID}', _self_val.val() || _self_val.value));
                }
                else {
                  App.EXT.Select.Option.Add(_self, response, _self.getAttribute('x-value').replace('{$ID}', _self_ref.getAttribute('x-selected')), _self.getAttribute('x-text').replace('{$ID}', _self_ref.getAttribute('x-selected')));
                }
              }
              else {
                App.EXT.Select.Option.Add(_self, response, _self.getAttribute('x-value').replace('{$ID}', _self.getAttribute('x-selected')), _self.getAttribute('x-text').replace('{$ID}', _self.getAttribute('x-selected')));
              }

              // Compatibilizar com o Plugin Bootstrap.Select

              if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
                _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
                App.EXT.Load.BootstrapSelect('select[is="x-select"][x-plugin="select"]');
                //App.EXT.Load.BootstrapSelect(_self);
                // Correção da Altura do DropDown Menu
                jQuery(_self).on('shown.bs.select', function (e, clickedIndex, isSelected, previousValue) {
                  App.EXT.Load.BootstrapSelect(_self);
                  jQuery(_self).parent().find('.btn.dropdown-toggle').addClass('bootstrap-select-caret-animate');
                });
                jQuery(_self).on('hidden.bs.select', function (e, clickedIndex, isSelected, previousValue) {
                  jQuery(_self).parent().find('.btn.dropdown-toggle').removeClass('bootstrap-select-caret-animate');
                });
              }

            }

            // Se Houver Opção Padrão Exibe a Opção Padrão no Estado Inicial
            if (_self.hasAttribute('x-default') && _self.getAttribute('x-default') != '') {
              if (!_self.hasAttribute('x-plugin')) {
                App.EXT.Select.Option.SetDefault(_self);
              }
            }

            // Compatibilizar com o Plugin jQuery Chosen
            if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'chosen') {
              _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
              App.EXT.Load.Chosen('select[is="x-select"][x-plugin="chosen"]');
              //App.EXT.Load.Chosen(_self);
            }
            // Compatibilizar com o Plugin jQuery Select2
            if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select2') {
              _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
              App.EXT.Load.Select2('select[is="x-select"][x-plugin="select2"]');
              //App.EXT.Load.Select2(_self);
            }

          }
        },
        "Clean": function(uid) {
          try {
            if (document.querySelector('div[data-id="'+uid+'"]') !== undefined) {
              document.querySelector('div[data-id="'+uid+'"]').remove();
            }
          }
          catch (e) {}
        },
        "Stream" : function(url, _self, response, node, type, uid) {
          oboe({
            url: url,
            method: "GET",
            headers: { contentType: "application/json" },
            cache: true
          })
          .node(node, function(xhr, path, ancestors) {
            if (node === '!') {
              if (xhr !== null) {
                response = xhr;
              }
            }
            else {
              var value_ref = document.querySelector(_self.getAttribute('x-reference')).getAttribute('x-selected');
              if(xhr == value_ref) {
                if (xhr !== null) {
                  response.push(ancestors[ancestors.length - 2]);
                }
              }
            }
          })
          .done(function(result) {
            App.EXT.Select.Call(_self, response, node, type);
            if (uid !== undefined)
              App.EXT.Select.Clean(uid);
          });
        },
        "Cache": function(_self, uid, type) {
          var __FILE__ = window.data(_self).file,
              __DEBUG__ = _URL.Parse(__FILE__).queryString.debug;
          if(!document.querySelector('div[data-id="'+uid+'"]')) {
            var elem = document.createElement('div');
            elem.style.cssText = 'display:none;';
            elem.setAttribute('data-url', _self.getAttribute('x-source'));
            elem.setAttribute('data-id', uid);
            document.body.appendChild(elem);
            loadJSON(_self.getAttribute('x-source')).then(function(response) {
              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                elem.innerHTML = JSON.stringify(response);
              [].forEach.call(document.querySelectorAll('select[is="x-select"][x-uid="'+uid+'"]'), function(_select) {
                window.data(_select).response = (type === 'worker') ? response : App.EXT.JSON.Save(response);
              });
            });
          }
        }
      },
      "Format": {
        "ArrayDuplicates" : function(myArr, prop) {
          return myArr.filter(function(obj, pos, arr) {
            return (arr.map(function(mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos);
          });
        }
      },
      "Event": {
        "Add" : function(el, s, fn, uc) {
          for (var i = 0; i < s.length; i++){
            if (el !== null) {
              el.addEventListener(s[i], fn, uc);
            }
          }
        },
        "Remove" : function(el, s, fn, uc) {
          for (var i = 0; i < s.length; i++){
            if (el !== null) {
              el.removeEventListener(s[i], fn, uc);
            }
          }
        }
      },
      "Validate": {
        "is": function(p) {
          if (Array.isArray(p)) return 'array';
          else if (typeof p == 'string') return 'string';
          else if (p != null && typeof p == 'object') return 'object';
          else return 'other';
        },
        "isNumber": function(str) {
          return !isNaN(parseFloat(str)) && isFinite(str);
        }
      }
    }
  };

  (function() {
    // Cross-browser fallback
    var currentScript = document._currentScript || document.currentScript,
      doc = currentScript.ownerDocument,
      proto = Object.create(HTMLSelectElement.prototype);

    proto.createdCallback = function() {

      //Inicializa as Váriáveis
      var build = document.createEvent('Event'),
          Instance = 0;

      // Define um Evento para Construção do Componente
      build.initEvent('build', true, true);
      window.data(this).file = __FILE__;

      // Compatibilizar com o Plugin jQuery Chosen
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'chosen') {
        this.setAttribute('data-allow-clear', 1);
        App.EXT.Select.Option.SetEmpty(this);
        if (this.hasAttribute('x-dir') && this.getAttribute('x-dir') == 'rtl') {
          App.EXT.Class.Add(this, 'chosen-rtl')
        }
      }
      // Compatibilizar com o Plugin jQuery Select2
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'select2') {
        this.setAttribute('data-allow-clear', 1);
        App.EXT.Select.Option.SetEmpty(this);
      }
      // Compatibilizar com o Plugin jQuery Bootstrap.Select
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'select') {
        this.setAttribute('data-allow-clear', 1);
      }

      // Evento para Construção do Componente
      App.EXT.Event.Add(this, ['build'], function(event) {

        //Reinicializa as Váriáveis
        var _self = event.target;

        // Se Houver Opção Padrão Exibe Carregando
        if (_self.hasAttribute('x-default') && _self.getAttribute('x-default') != '') {
          // x-default
          _self.setAttribute('placeholder', _self.getAttribute('x-default'));
        }

        // Compatibilizar com jQuery
        if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'chosen') {
          _self.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
        }
        // Compatibilizar com jQuery
        if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select2') {
          _self.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
        }
        // Compatibilizar com jQuery
        if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
          _self.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
        }

        // Apenas para o Vanilla
        if (!_self.hasAttribute('x-plugin')) {
          App.EXT.Select.Option.SetLoading(_self);
        }

        var __FILE__ = window.data(_self).file,
            __LOAD__ = _URL.Parse(__FILE__).queryString.load_format || 'stream',
            __CACHE__ = _URL.Parse(__FILE__).queryString.cache || false,
            __DEBUG__ = _URL.Parse(__FILE__).queryString.debug || false,
            __IEMODE__ = _URL.Parse(__FILE__).queryString.ie_load_mode;

        try {
          document.getElementById('_load_format').innerHTML = __LOAD__;
          document.getElementById('_cache').innerHTML = __CACHE__;
          document.getElementById('_debug').innerHTML = __DEBUG__;
          document.getElementById('_ie_load_mode').innerHTML = __IEMODE__ || 'fetch';
        }
        catch (e) {}

        switch (__LOAD__) {
          case 'worker':

            if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
              console.log('load_format: ' + __LOAD__);

            if(__CACHE__ !== false || __CACHE__ === 'true') {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
              _self.setAttribute('x-uid', uid);

              App.EXT.Select.Cache(_self, uid, 'worker');

              new Promise(function(resolve, reject) { setTimeout(resolve, 1000); }).then(function() {
                if (window.data(_self).response !== undefined) {
                  var node = (_self.getAttribute('x-loader') == null) ? '//*' : '//*[' + _self.getAttribute('x-loader') + '="' + document.querySelector(_self.getAttribute('x-reference')).getAttribute('x-selected') + '"]',
                      response = JSON.search(window.data(_self).response, node);
                  App.EXT.Select.Call(_self, response, node, 'cache');
                  App.EXT.Select.Clean(uid);
                }
              });

            }
            else {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);
              loadJSON(_self.getAttribute('x-source')).then(function(response) {
                if (response !== undefined) {
                  var node = (_self.getAttribute('x-loader') == null) ? '//*' : '//*[' + _self.getAttribute('x-loader') + '="' + document.querySelector(_self.getAttribute('x-reference')).getAttribute('x-selected') + '"]';
                  App.EXT.Select.Call(_self, response, node, 'worker');
                }
              });

            }

          break;

          case 'stream':
          case undefined:

            if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
              console.log('load_format: ' + __LOAD__);

            if(__CACHE__ !== false || __CACHE__ === 'true') {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
              _self.setAttribute('x-uid', uid);

              App.EXT.Select.Cache(_self, uid, 'stream');
              new Promise(function(resolve, reject) { setTimeout(resolve, 1000); }).then(function() {
                if (window.data(_self).response !== undefined) {
                  var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                      response = [];
                  App.EXT.Select.Stream(window.data(_self).response, _self, response, node, 'stream', uid);
                }
              });

            }
            else {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                  response = [];

              App.EXT.Select.Stream(_self.getAttribute('x-source'), _self, response, node, 'stream', undefined);

            }

          break;
        }

      }, false);

      // Regras Embutidas Automaticamente
      if (this.hasAttribute('x-type') && this.getAttribute('x-type') != '') {

        var x_type = this.getAttribute('x-type').toUpperCase(), Rule = undefined;

        switch(x_type.toLowerCase()) {
          case 'state': // Estados
          case 'city': // Cidades
          case 'district': // Bairros

            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.PLACES[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Armazenamento do Objeto Principal
            var $this = this, 
                // Define Timer dos Inputs
                Timeout = undefined, 
                // Obtém o Template de Configuração
                Template = App.EXT.JSON.Template(App.DEFAULT.PLACES.PATTERN),
                // Carrega as Regras Padrão do Tipo do Componente
                DEFAULT = Template(Rule.RULE);

            // Matriz Única do Elemento
            window.data(this).select = [];

            var Config = {
              "Rule": {
                "loading": DEFAULT.RULE.loading,
                "default": (!this.hasAttribute('x-default') && this.getAttribute('x-default') != '') ? Rule.RULE.default : this.getAttribute('x-default'),
                "source" : (!this.hasAttribute('x-source') && this.getAttribute('x-source') != '') ? Rule.RULE.source : this.getAttribute('x-source'),
                "value" : (!this.hasAttribute('x-value') && this.getAttribute('x-value') != '') ? Rule.RULE.value : this.getAttribute('x-value'),
                "text" : (!this.hasAttribute('x-text') && this.getAttribute('x-text') != '') ? Rule.RULE.text : this.getAttribute('x-text'),
                "filter" : (!this.hasAttribute('x-filter') && this.getAttribute('x-filter') != '') ? Rule.RULE.filter : this.getAttribute('x-filter'),
                "loader" : (!this.hasAttribute('x-loader') && this.getAttribute('x-loader') != '') ? Rule.RULE.loader : this.getAttribute('x-loader'),
                "rightAlign": (!this.hasAttribute('x-dir') && this.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((this.getAttribute('x-dir') == 'ltr') ? false : true)
              }
            }

            /*
             * Atributos Privados dos Tipos: [state, city, district]
             * @property x-source=[*]{1} String
             * @property x-value=[*]{1} String
             * @property x-text=[*]{1} String
             * @property x-filter=[*]{1} String
             */
            /*
             * Atributos Públicos dos Tipos: [state, city, district]
             * @property x-dir=Opts(['ltr'|'rtl']){0,1} String
             * @property x-default=[*]{0,1} String
             * @property x-selected=[*]{0,1} String
             * @property x-connect=[*]{0,1} String
             * @property x-reference=[*]{0,1} String
             */

             // Aplica o Atributo x-default
             if (!this.hasAttribute('x-default') || this.getAttribute('x-default') == '')
               if (Config.Rule.default !== undefined)
                 this.setAttribute('x-default', Config.Rule.default);

             // Aplica o Atributo x-source
             if (!this.hasAttribute('x-source') || this.getAttribute('x-source') == '')
               if (Config.Rule.source !== undefined)
                 this.setAttribute('x-source', Config.Rule.source);

             // Aplica o Atributo x-value
             if (!this.hasAttribute('x-value') || this.getAttribute('x-value') == '')
               if (Config.Rule.value !== undefined)
                 this.setAttribute('x-value', Config.Rule.value);

             // Aplica o Atributo x-text
             if (!this.hasAttribute('x-text') || this.getAttribute('x-text') == '')
               if (Config.Rule.text !== undefined)
                 this.setAttribute('x-text', Config.Rule.text);

             // Aplica o Atributo x-filter
             if (!this.hasAttribute('x-filter') || this.getAttribute('x-filter') == '')
               if (Config.Rule.filter !== undefined)
                 this.setAttribute('x-filter', Config.Rule.filter);

             // Aplica o Atributo x-loader
             if (!this.hasAttribute('x-loader') || this.getAttribute('x-loader') == '')
               if (Config.Rule.loader !== undefined)
                 this.setAttribute('x-loader', Config.Rule.loader);

            // Aplica e Estieliza o Atributo dir
            this.style.direction = Config.Rule.rightAlign == true ? 'rtl' : 'ltr';
            this.setAttribute('dir', Config.Rule.rightAlign == true ? 'rtl' : 'ltr');

          break;
        }

        // Dispara o Evento para Construção do Componente
        this.dispatchEvent(build);

      }
      // Criação de Regras Manual
      else {

        // Dispara o Evento para Construção do Componente
        this.dispatchEvent(build);

      }

      function component_reload(obj) {
        //Reinicializa as Váriáveis
        var _self = obj;

        // Atualiza o Elemento Selecionado no Atributo x-selected
        if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'chosen') {
          _self.setAttribute('x-selected', jQuery(_self).val());
        }
        else if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select2') {
          _self.setAttribute('x-selected', jQuery(_self).val());
        }
        else if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
          _self.setAttribute('x-selected', jQuery(_self).val());
        }
        else {
          _self.setAttribute('x-selected', _self.options[_self.selectedIndex].value);
          // Deseleciona a Opção Anterior
          App.EXT.Select.Option.Reselect(_self, _self.options[_self.selectedIndex].value);
        }

        if (_self.hasAttribute('x-connect') && _self.getAttribute('x-connect') != '') {
          var _self_con = document.querySelector(_self.getAttribute('x-connect'));

          // Ajuste para Obtenção do Select para o Bootstrap.Select
          if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
            _self_con = _self_con.children[0];
          }
          // Dispara o Evento on Change para Iniciar a Reação em Cadeia
          _self_con.dispatchEvent(new Event('change'));

          // Remove Todos os Options Presentes
          App.EXT.Select.Option.RemoveAll(_self_con);

          // Compatibilizar com jQuery
          if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'chosen') {
            _self_con.setAttribute('data-allow-clear', 1);
            App.EXT.Select.Option.SetLoading(_self_con);
          }
          else if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select2') {
            _self_con.setAttribute('data-allow-clear', 1);
            App.EXT.Select.Option.SetLoading(_self_con);
          }
          else if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
            _self_con.setAttribute('data-allow-clear', 1);
          }
          // Remove o Atributo x-selected
          _self_con.removeAttribute('x-selected');
          // Recria e Repopula os Elementos Envolvidos
          _self_con.dispatchEvent(build);
          // Atualiza a Transição do Loading para o Valor Atribuído à x-default
          if (!_self.hasAttribute('x-plugin')) {
            App.EXT.Select.Option.SetTransition(_self_con, 0);
          }
          // Compatibilizar com jQuery
          if (App.EXT.Load.jQuery() && _self_con.hasAttribute('x-plugin') && _self_con.getAttribute('x-plugin') == 'chosen') {
            _self_con.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
            App.EXT.Load.Chosen(_self_con);
            // Reaplica o Placeholder
            setTimeout(function(){
              _self_con.setAttribute('data-placeholder', _self_con.getAttribute('x-default'));
              App.EXT.Load.Chosen(_self_con);
            }, 10);
            jQuery('.allow_single_deselect_option').empty();
            //jQuery('option[class="allow_single_deselect_option"]').remove();
            App.EXT.Select.Option.SetEmpty(_self_con);
          }
          // Compatibilizar com jQuery
          if (App.EXT.Load.jQuery() && _self_con.hasAttribute('x-plugin') && _self_con.getAttribute('x-plugin') == 'select2') {
            _self_con.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
            App.EXT.Load.Select2(_self_con);
            // Reaplica o Placeholder
            setTimeout(function(){
              _self_con.setAttribute('data-placeholder', _self_con.getAttribute('x-default'));
              App.EXT.Load.Select2(_self_con);
            }, 10);
            jQuery('.allow_single_deselect_option').empty();
            //jQuery('option[class="allow_single_deselect_option"]').remove();
            App.EXT.Select.Option.SetEmpty(_self_con);
          }
          // Compatibilizar com jQuery
          if (App.EXT.Load.jQuery() && _self_con.hasAttribute('x-plugin') && _self_con.getAttribute('x-plugin') == 'select') {
            _self_con.setAttribute('data-placeholder', App.DEFAULT.PLACES.PATTERN.RULE.loading);
            App.EXT.Load.BootstrapSelect(_self_con);
            // Reaplica o Placeholder
            setTimeout(function(){
              _self_con.setAttribute('data-placeholder', _self_con.getAttribute('x-default'));
              App.EXT.Load.BootstrapSelect(_self_con);
              // Correção da Altura do DropDown Menu
              jQuery('.bootstrap-select .dropdown-menu').css({'margin-bottom': '0px'});
              // Correção para Selecionar o Option Correto
              jQuery(_self_con).append('<option style="display:none"></option>');
            }, 1000);
          }

        }
        else {
          // Se Houver Opção Padrão Exibe a Opção Padrão
          if (_self.hasAttribute('x-default') && _self.getAttribute('x-default') != '') {
            setTimeout(function(){
              if (!_self.hasAttribute('x-plugin')) {
                App.EXT.Select.Option.SetDefault(_self);
              }
              // Compatibilizar com jQuery
              if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'chosen') {
                _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
                App.EXT.Load.Chosen(_self);
              }
              // Compatibilizar com jQuery
              if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select2') {
                _self.setAttribute('data-placeholder', _self.getAttribute('x-default'));
                App.EXT.Load.Select2(_self);
              }
              // Compatibilizar com jQuery
              if (App.EXT.Load.jQuery() && _self.hasAttribute('x-plugin') && _self.getAttribute('x-plugin') == 'select') {
                _self.setAttribute('placeholder', _self.getAttribute('x-default'));
                App.EXT.Load.BootstrapSelect(_self);
              }
            }, 10);
          }
        }
      }

      // Compatibilizar com jQuery
      if (!App.EXT.Load.jQuery()){
        // Evento onChange do Parent
        App.EXT.Event.Add(this, ['change'], function(event) {
          // Desabilita a Propagação do Evento e o Borbulhamento
          new Promise(function(resolve, reject) {
            setTimeout(resolve, 100);
          }).then(function() {
            event.stopPropagation();
            event.preventDefault();
            component_reload(event.target);
          });
        }, false);
      }
      else {
        jQuery(this).on('change', function(event) {
          // Desabilita a Propagação do Evento e o Borbulhamento
          new Promise(function(resolve, reject) {
            setTimeout(resolve, 100);
          }).then(function() {
            event.stopPropagation();
            event.preventDefault();
            component_reload(event.target);
          });
        });
      }

      // Define o Índice da Instancia como um Atributo
      var Element = document.querySelectorAll('select[is="x-select"]'), Index;
      for (Index = 0; Index < Element.length; ++Index) {
        Element[Index].setAttribute('x-instance', Index);
      }
      Instance = this.getAttribute('x-instance');
    };

    // Cross-browser fallback
    document.registerElement = document.registerElement || document.register;

    // Element registration using x-tag format
    document.registerElement('x-select', {
      extends: 'select',
      prototype: proto
    });

  })();