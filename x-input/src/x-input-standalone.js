/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
(function(t,r){"use strict";if(typeof define==="function"&&define.amd){define(r)}else if(typeof exports==="object"){module.exports=r()}else{t.returnExports=r()}})(this,function(){var t=Array;var r=t.prototype;var e=Object;var n=e.prototype;var i=Function;var a=i.prototype;var o=String;var f=o.prototype;var u=Number;var l=u.prototype;var s=r.slice;var c=r.splice;var v=r.push;var h=r.unshift;var p=r.concat;var y=r.join;var d=a.call;var g=a.apply;var w=Math.max;var b=Math.min;var T=n.toString;var m=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var D;var S=Function.prototype.toString,x=/^\s*class /,O=function isES6ClassFn(t){try{var r=S.call(t);var e=r.replace(/\/\/.*\n/g,"");var n=e.replace(/\/\*[.\s\S]*\*\//g,"");var i=n.replace(/\n/gm," ").replace(/ {2}/g," ");return x.test(i)}catch(a){return false}},E=function tryFunctionObject(t){try{if(O(t)){return false}S.call(t);return true}catch(r){return false}},j="[object Function]",I="[object GeneratorFunction]",D=function isCallable(t){if(!t){return false}if(typeof t!=="function"&&typeof t!=="object"){return false}if(m){return E(t)}if(O(t)){return false}var r=T.call(t);return r===j||r===I};var M;var U=RegExp.prototype.exec,F=function tryRegexExec(t){try{U.call(t);return true}catch(r){return false}},N="[object RegExp]";M=function isRegex(t){if(typeof t!=="object"){return false}return m?F(t):T.call(t)===N};var C;var k=String.prototype.valueOf,A=function tryStringObject(t){try{k.call(t);return true}catch(r){return false}},R="[object String]";C=function isString(t){if(typeof t==="string"){return true}if(typeof t!=="object"){return false}return m?A(t):T.call(t)===R};var $=e.defineProperty&&function(){try{var t={};e.defineProperty(t,"x",{enumerable:false,value:t});for(var r in t){return false}return t.x===t}catch(n){return false}}();var P=function(t){var r;if($){r=function(t,r,n,i){if(!i&&r in t){return}e.defineProperty(t,r,{configurable:true,enumerable:false,writable:true,value:n})}}else{r=function(t,r,e,n){if(!n&&r in t){return}t[r]=e}}return function defineProperties(e,n,i){for(var a in n){if(t.call(n,a)){r(e,a,n[a],i)}}}}(n.hasOwnProperty);var J=function isPrimitive(t){var r=typeof t;return t===null||r!=="object"&&r!=="function"};var Y=u.isNaN||function isActualNaN(t){return t!==t};var Z={ToInteger:function ToInteger(t){var r=+t;if(Y(r)){r=0}else if(r!==0&&r!==1/0&&r!==-(1/0)){r=(r>0||-1)*Math.floor(Math.abs(r))}return r},ToPrimitive:function ToPrimitive(t){var r,e,n;if(J(t)){return t}e=t.valueOf;if(D(e)){r=e.call(t);if(J(r)){return r}}n=t.toString;if(D(n)){r=n.call(t);if(J(r)){return r}}throw new TypeError},ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return e(t)},ToUint32:function ToUint32(t){return t>>>0}};var z=function Empty(){};P(a,{bind:function bind(t){var r=this;if(!D(r)){throw new TypeError("Function.prototype.bind called on incompatible "+r)}var n=s.call(arguments,1);var a;var o=function(){if(this instanceof a){var i=g.call(r,this,p.call(n,s.call(arguments)));if(e(i)===i){return i}return this}else{return g.call(r,t,p.call(n,s.call(arguments)))}};var f=w(0,r.length-n.length);var u=[];for(var l=0;l<f;l++){v.call(u,"$"+l)}a=i("binder","return function ("+y.call(u,",")+"){ return binder.apply(this, arguments); }")(o);if(r.prototype){z.prototype=r.prototype;a.prototype=new z;z.prototype=null}return a}});var G=d.bind(n.hasOwnProperty);var B=d.bind(n.toString);var H=d.bind(s);var W=g.bind(s);if(typeof document==="object"&&document&&document.documentElement){try{H(document.documentElement.childNodes)}catch(L){var X=H;var q=W;H=function arraySliceIE(t){var r=[];var e=t.length;while(e-- >0){r[e]=t[e]}return q(r,X(arguments,1))};W=function arraySliceApplyIE(t,r){return q(H(t),r)}}}var K=d.bind(f.slice);var Q=d.bind(f.split);var V=d.bind(f.indexOf);var _=d.bind(v);var tt=d.bind(n.propertyIsEnumerable);var rt=d.bind(r.sort);var et=t.isArray||function isArray(t){return B(t)==="[object Array]"};var nt=[].unshift(0)!==1;P(r,{unshift:function(){h.apply(this,arguments);return this.length}},nt);P(t,{isArray:et});var it=e("a");var at=it[0]!=="a"||!(0 in it);var ot=function properlyBoxed(t){var r=true;var e=true;var n=false;if(t){try{t.call("foo",function(t,e,n){if(typeof n!=="object"){r=false}});t.call([1],function(){"use strict";e=typeof this==="string"},"x")}catch(i){n=true}}return!!t&&!n&&r&&e};P(r,{forEach:function forEach(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=-1;var i=Z.ToUint32(e.length);var a;if(arguments.length>1){a=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in e){if(typeof a==="undefined"){t(e[n],n,r)}else{t.call(a,e[n],n,r)}}}}},!ot(r.forEach));P(r,{map:function map(r){var e=Z.ToObject(this);var n=at&&C(this)?Q(this,""):e;var i=Z.ToUint32(n.length);var a=t(i);var o;if(arguments.length>1){o=arguments[1]}if(!D(r)){throw new TypeError("Array.prototype.map callback must be a function")}for(var f=0;f<i;f++){if(f in n){if(typeof o==="undefined"){a[f]=r(n[f],f,e)}else{a[f]=r.call(o,n[f],f,e)}}}return a}},!ot(r.map));P(r,{filter:function filter(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var f=0;f<n;f++){if(f in e){a=e[f];if(typeof o==="undefined"?t(a,f,r):t.call(o,a,f,r)){_(i,a)}}}return i}},!ot(r.filter));P(r,{every:function every(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in e&&!(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return false}}return true}},!ot(r.every));P(r,{some:function some(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=Z.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!D(t)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in e&&(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return true}}return false}},!ot(r.some));var ft=false;if(r.reduce){ft=typeof r.reduce.call("es5",function(t,r,e,n){return n})==="object"}P(r,{reduce:function reduce(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=Z.ToUint32(e.length);if(!D(t)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in e){a=e[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in e){a=t(a,e[i],i,r)}}return a}},!ft);var ut=false;if(r.reduceRight){ut=typeof r.reduceRight.call("es5",function(t,r,e,n){return n})==="object"}P(r,{reduceRight:function reduceRight(t){var r=Z.ToObject(this);var e=at&&C(this)?Q(this,""):r;var n=Z.ToUint32(e.length);if(!D(t)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in e){i=e[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in e){i=t(i,e[a],a,r)}}while(a--);return i}},!ut);var lt=r.indexOf&&[0,1].indexOf(1,2)!==-1;P(r,{indexOf:function indexOf(t){var r=at&&C(this)?Q(this,""):Z.ToObject(this);var e=Z.ToUint32(r.length);if(e===0){return-1}var n=0;if(arguments.length>1){n=Z.ToInteger(arguments[1])}n=n>=0?n:w(0,e+n);for(;n<e;n++){if(n in r&&r[n]===t){return n}}return-1}},lt);var st=r.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;P(r,{lastIndexOf:function lastIndexOf(t){var r=at&&C(this)?Q(this,""):Z.ToObject(this);var e=Z.ToUint32(r.length);if(e===0){return-1}var n=e-1;if(arguments.length>1){n=b(n,Z.ToInteger(arguments[1]))}n=n>=0?n:e-Math.abs(n);for(;n>=0;n--){if(n in r&&t===r[n]){return n}}return-1}},st);var ct=function(){var t=[1,2];var r=t.splice();return t.length===2&&et(r)&&r.length===0}();P(r,{splice:function splice(t,r){if(arguments.length===0){return[]}else{return c.apply(this,arguments)}}},!ct);var vt=function(){var t={};r.splice.call(t,0,0,1);return t.length===1}();P(r,{splice:function splice(t,r){if(arguments.length===0){return[]}var e=arguments;this.length=w(Z.ToInteger(this.length),0);if(arguments.length>0&&typeof r!=="number"){e=H(arguments);if(e.length<2){_(e,this.length-t)}else{e[1]=Z.ToInteger(r)}}return c.apply(this,e)}},!vt);var ht=function(){var r=new t(1e5);r[8]="x";r.splice(1,1);return r.indexOf("x")===7}();var pt=function(){var t=256;var r=[];r[t]="a";r.splice(t+1,0,"b");return r[t]==="a"}();P(r,{splice:function splice(t,r){var e=Z.ToObject(this);var n=[];var i=Z.ToUint32(e.length);var a=Z.ToInteger(t);var f=a<0?w(i+a,0):b(a,i);var u=b(w(Z.ToInteger(r),0),i-f);var l=0;var s;while(l<u){s=o(f+l);if(G(e,s)){n[l]=e[s]}l+=1}var c=H(arguments,2);var v=c.length;var h;if(v<u){l=f;var p=i-u;while(l<p){s=o(l+u);h=o(l+v);if(G(e,s)){e[h]=e[s]}else{delete e[h]}l+=1}l=i;var y=i-u+v;while(l>y){delete e[l-1];l-=1}}else if(v>u){l=i-u;while(l>f){s=o(l+u-1);h=o(l+v-1);if(G(e,s)){e[h]=e[s]}else{delete e[h]}l-=1}}l=f;for(var d=0;d<c.length;++d){e[l]=c[d];l+=1}e.length=i-u+v;return n}},!ht||!pt);var yt=r.join;var dt;try{dt=Array.prototype.join.call("123",",")!=="1,2,3"}catch(L){dt=true}if(dt){P(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return yt.call(C(this)?Q(this,""):this,r)}},dt)}var gt=[1,2].join(undefined)!=="1,2";if(gt){P(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return yt.call(this,r)}},gt)}var wt=function push(t){var r=Z.ToObject(this);var e=Z.ToUint32(r.length);var n=0;while(n<arguments.length){r[e+n]=arguments[n];n+=1}r.length=e+n;return e+n};var bt=function(){var t={};var r=Array.prototype.push.call(t,undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!G(t,0)}();P(r,{push:function push(t){if(et(this)){return v.apply(this,arguments)}return wt.apply(this,arguments)}},bt);var Tt=function(){var t=[];var r=t.push(undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!G(t,0)}();P(r,{push:wt},Tt);P(r,{slice:function(t,r){var e=C(this)?Q(this,""):this;return W(e,arguments)}},at);var mt=function(){try{[1,2].sort(null)}catch(t){try{[1,2].sort({})}catch(r){return false}}return true}();var Dt=function(){try{[1,2].sort(/a/);return false}catch(t){}return true}();var St=function(){try{[1,2].sort(undefined);return true}catch(t){}return false}();P(r,{sort:function sort(t){if(typeof t==="undefined"){return rt(this)}if(!D(t)){throw new TypeError("Array.prototype.sort callback must be a function")}return rt(this,t)}},mt||!St||!Dt);var xt=!tt({toString:null},"toString");var Ot=tt(function(){},"prototype");var Et=!G("x","0");var jt=function(t){var r=t.constructor;return r&&r.prototype===t};var It={$window:true,$console:true,$parent:true,$self:true,$frame:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$external:true,$width:true,$height:true,$top:true,$localStorage:true};var Mt=function(){if(typeof window==="undefined"){return false}for(var t in window){try{if(!It["$"+t]&&G(window,t)&&window[t]!==null&&typeof window[t]==="object"){jt(window[t])}}catch(r){return true}}return false}();var Ut=function(t){if(typeof window==="undefined"||!Mt){return jt(t)}try{return jt(t)}catch(r){return false}};var Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Nt=Ft.length;var Ct=function isArguments(t){return B(t)==="[object Arguments]"};var kt=function isArguments(t){return t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&!et(t)&&D(t.callee)};var At=Ct(arguments)?Ct:kt;P(e,{keys:function keys(t){var r=D(t);var e=At(t);var n=t!==null&&typeof t==="object";var i=n&&C(t);if(!n&&!r&&!e){throw new TypeError("Object.keys called on a non-object")}var a=[];var f=Ot&&r;if(i&&Et||e){for(var u=0;u<t.length;++u){_(a,o(u))}}if(!e){for(var l in t){if(!(f&&l==="prototype")&&G(t,l)){_(a,o(l))}}}if(xt){var s=Ut(t);for(var c=0;c<Nt;c++){var v=Ft[c];if(!(s&&v==="constructor")&&G(t,v)){_(a,v)}}}return a}});var Rt=e.keys&&function(){return e.keys(arguments).length===2}(1,2);var $t=e.keys&&function(){var t=e.keys(arguments);return arguments.length!==1||t.length!==1||t[0]!==1}(1);var Pt=e.keys;P(e,{keys:function keys(t){if(At(t)){return Pt(H(t))}else{return Pt(t)}}},!Rt||$t);var Jt=new Date(-0xc782b5b342b24).getUTCMonth()!==0;var Yt=new Date(-0x55d318d56a724);var Zt=new Date(14496624e5);var zt=Yt.toUTCString()!=="Mon, 01 Jan -45875 11:59:59 GMT";var Gt;var Bt;var Ht=Yt.getTimezoneOffset();if(Ht<-720){Gt=Yt.toDateString()!=="Tue Jan 02 -45875";Bt=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Zt))}else{Gt=Yt.toDateString()!=="Mon Jan 01 -45875";Bt=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Zt))}var Wt=d.bind(Date.prototype.getFullYear);var Lt=d.bind(Date.prototype.getMonth);var Xt=d.bind(Date.prototype.getDate);var qt=d.bind(Date.prototype.getUTCFullYear);var Kt=d.bind(Date.prototype.getUTCMonth);var Qt=d.bind(Date.prototype.getUTCDate);var Vt=d.bind(Date.prototype.getUTCDay);var _t=d.bind(Date.prototype.getUTCHours);var tr=d.bind(Date.prototype.getUTCMinutes);var rr=d.bind(Date.prototype.getUTCSeconds);var er=d.bind(Date.prototype.getUTCMilliseconds);var nr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var ir=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var ar=function daysInMonth(t,r){return Xt(new Date(r,t,0))};P(Date.prototype,{getFullYear:function getFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Wt(this);if(t<0&&Lt(this)>11){return t+1}return t},getMonth:function getMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Wt(this);var r=Lt(this);if(t<0&&r>11){return 0}return r},getDate:function getDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Wt(this);var r=Lt(this);var e=Xt(this);if(t<0&&r>11){if(r===12){return e}var n=ar(0,t+1);return n-e+1}return e},getUTCFullYear:function getUTCFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);if(t<0&&Kt(this)>11){return t+1}return t},getUTCMonth:function getUTCMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);var r=Kt(this);if(t<0&&r>11){return 0}return r},getUTCDate:function getUTCDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=qt(this);var r=Kt(this);var e=Qt(this);if(t<0&&r>11){if(r===12){return e}var n=ar(0,t+1);return n-e+1}return e}},Jt);P(Date.prototype,{toUTCString:function toUTCString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Vt(this);var r=Qt(this);var e=Kt(this);var n=qt(this);var i=_t(this);var a=tr(this);var o=rr(this);return nr[t]+", "+(r<10?"0"+r:r)+" "+ir[e]+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"}},Jt||zt);P(Date.prototype,{toDateString:function toDateString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();return nr[t]+" "+ir[e]+" "+(r<10?"0"+r:r)+" "+n}},Jt||Gt);if(Jt||Bt){Date.prototype.toString=function toString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();var i=this.getHours();var a=this.getMinutes();var o=this.getSeconds();var f=this.getTimezoneOffset();var u=Math.floor(Math.abs(f)/60);var l=Math.floor(Math.abs(f)%60);return nr[t]+" "+ir[e]+" "+(r<10?"0"+r:r)+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"+(f>0?"-":"+")+(u<10?"0"+u:u)+(l<10?"0"+l:l)};if($){e.defineProperty(Date.prototype,"toString",{configurable:true,enumerable:false,writable:true})}}var or=-621987552e5;var fr="-000001";var ur=Date.prototype.toISOString&&new Date(or).toISOString().indexOf(fr)===-1;var lr=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";var sr=d.bind(Date.prototype.getTime);P(Date.prototype,{toISOString:function toISOString(){if(!isFinite(this)||!isFinite(sr(this))){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}var t=qt(this);var r=Kt(this);t+=Math.floor(r/12);r=(r%12+12)%12;var e=[r+1,Qt(this),_t(this),tr(this),rr(this)];t=(t<0?"-":t>9999?"+":"")+K("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<e.length;++n){e[n]=K("00"+e[n],-2)}return t+"-"+H(e,0,2).join("-")+"T"+H(e,2).join(":")+"."+K("000"+er(this),-3)+"Z"}},ur||lr);var cr=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(or).toJSON().indexOf(fr)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(t){return false}}();if(!cr){Date.prototype.toJSON=function toJSON(t){var r=e(this);var n=Z.ToPrimitive(r);if(typeof n==="number"&&!isFinite(n)){return null}var i=r.toISOString;if(!D(i)){throw new TypeError("toISOString property is not callable")}return i.call(r)}}var vr=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var hr=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var pr=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(pr||hr||!vr){var yr=Math.pow(2,31)-1;var dr=Y(new Date(1970,0,1,0,0,0,yr+1).getTime());Date=function(t){var r=function Date(e,n,i,a,f,u,l){var s=arguments.length;var c;if(this instanceof t){var v=u;var h=l;if(dr&&s>=7&&l>yr){var p=Math.floor(l/yr)*yr;var y=Math.floor(p/1e3);v+=y;h-=y*1e3}c=s===1&&o(e)===e?new t(r.parse(e)):s>=7?new t(e,n,i,a,f,v,h):s>=6?new t(e,n,i,a,f,v):s>=5?new t(e,n,i,a,f):s>=4?new t(e,n,i,a):s>=3?new t(e,n,i):s>=2?new t(e,n):s>=1?new t(e instanceof t?+e:e):new t}else{c=t.apply(this,arguments)}if(!J(c)){P(c,{constructor:r},true)}return c};var e=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(t,r){var e=r>1?1:0;return n[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)};var a=function toUTC(r){var e=0;var n=r;if(dr&&n>yr){var i=Math.floor(n/yr)*yr;var a=Math.floor(i/1e3);e+=a;n-=a*1e3}return u(new t(1970,0,1,0,0,e,n))};for(var f in t){if(G(t,f)){r[f]=t[f]}}P(r,{now:t.now,UTC:t.UTC},true);r.prototype=t.prototype;P(r.prototype,{constructor:r},true);var l=function parse(r){var n=e.exec(r);if(n){var o=u(n[1]),f=u(n[2]||1)-1,l=u(n[3]||1)-1,s=u(n[4]||0),c=u(n[5]||0),v=u(n[6]||0),h=Math.floor(u(n[7]||0)*1e3),p=Boolean(n[4]&&!n[8]),y=n[9]==="-"?1:-1,d=u(n[10]||0),g=u(n[11]||0),w;var b=c>0||v>0||h>0;if(s<(b?24:25)&&c<60&&v<60&&h<1e3&&f>-1&&f<12&&d<24&&g<60&&l>-1&&l<i(o,f+1)-i(o,f)){w=((i(o,f)+l)*24+s+d*y)*60;w=((w+c+g*y)*60+v)*1e3+h;if(p){w=a(w)}if(-864e13<=w&&w<=864e13){return w}}return NaN}return t.parse.apply(this,arguments)};P(r,{parse:l});return r}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var gr=l.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||(1000000000000000128).toFixed(0)!=="1000000000000000128");var wr={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(t,r){var e=-1;var n=r;while(++e<wr.size){n+=t*wr.data[e];wr.data[e]=n%wr.base;n=Math.floor(n/wr.base)}},divide:function divide(t){var r=wr.size;var e=0;while(--r>=0){e+=wr.data[r];wr.data[r]=Math.floor(e/t);e=e%t*wr.base}},numToString:function numToString(){var t=wr.size;var r="";while(--t>=0){if(r!==""||t===0||wr.data[t]!==0){var e=o(wr.data[t]);if(r===""){r=e}else{r+=K("0000000",0,7-e.length)+e}}}return r},pow:function pow(t,r,e){return r===0?e:r%2===1?pow(t,r-1,e*t):pow(t*t,r/2,e)},log:function log(t){var r=0;var e=t;while(e>=4096){r+=12;e/=4096}while(e>=2){r+=1;e/=2}return r}};var br=function toFixed(t){var r,e,n,i,a,f,l,s;r=u(t);r=Y(r)?0:Math.floor(r);if(r<0||r>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}e=u(this);if(Y(e)){return"NaN"}if(e<=-1e21||e>=1e21){return o(e)}n="";if(e<0){n="-";e=-e}i="0";if(e>1e-21){a=wr.log(e*wr.pow(2,69,1))-69;f=a<0?e*wr.pow(2,-a,1):e/wr.pow(2,a,1);f*=4503599627370496;a=52-a;if(a>0){wr.multiply(0,f);l=r;while(l>=7){wr.multiply(1e7,0);l-=7}wr.multiply(wr.pow(10,l,1),0);l=a-1;while(l>=23){wr.divide(1<<23);l-=23}wr.divide(1<<l);wr.multiply(1,1);wr.divide(2);i=wr.numToString()}else{wr.multiply(0,f);wr.multiply(1<<-a,0);i=wr.numToString()+K("0.00000000000000000000",2,2+r)}}if(r>0){s=i.length;if(s<=r){i=n+K("0.0000000000000000000",0,r-s+2)+i}else{i=n+K(i,0,s-r)+"."+K(i,s-r)}}else{i=n+i}return i};P(l,{toFixed:br},gr);var Tr=function(){try{return 1..toPrecision(undefined)==="1"}catch(t){return true}}();var mr=l.toPrecision;P(l,{toPrecision:function toPrecision(t){return typeof t==="undefined"?mr.call(this):mr.call(this,t)}},Tr);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";var r=Math.pow(2,32)-1;f.split=function(e,n){var i=String(this);if(typeof e==="undefined"&&n===0){return[]}if(!M(e)){return Q(this,e,n)}var a=[];var o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,u,l,s,c;var h=new RegExp(e.source,o+"g");if(!t){u=new RegExp("^"+h.source+"$(?!\\s)",o)}var p=typeof n==="undefined"?r:Z.ToUint32(n);l=h.exec(i);while(l){s=l.index+l[0].length;if(s>f){_(a,K(i,f,l.index));if(!t&&l.length>1){l[0].replace(u,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){l[t]=void 0}}})}if(l.length>1&&l.index<i.length){v.apply(a,H(l,1))}c=l[0].length;f=s;if(a.length>=p){break}}if(h.lastIndex===l.index){h.lastIndex++}l=h.exec(i)}if(f===i.length){if(c||!h.test("")){_(a,"")}}else{_(a,K(i,f))}return a.length>p?H(a,0,p):a}})()}else if("0".split(void 0,0).length){f.split=function split(t,r){if(typeof t==="undefined"&&r===0){return[]}return Q(this,t,r)}}var Dr=f.replace;var Sr=function(){var t=[];"x".replace(/x(.)?/g,function(r,e){_(t,e)});return t.length===1&&typeof t[0]==="undefined"}();if(!Sr){f.replace=function replace(t,r){var e=D(r);var n=M(t)&&/\)[*?]/.test(t.source);if(!e||!n){return Dr.call(this,t,r)}else{var i=function(e){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(e)||[];t.lastIndex=i;_(a,arguments[n-2],arguments[n-1]);return r.apply(this,a)};return Dr.call(this,t,i)}}}var xr=f.substr;var Or="".substr&&"0b".substr(-1)!=="b";P(f,{substr:function substr(t,r){var e=t;if(t<0){e=w(this.length+t,0)}return xr.call(this,e,r)}},Or);var Er="\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var jr="\u200b";var Ir="["+Er+"]";var Mr=new RegExp("^"+Ir+Ir+"*");var Ur=new RegExp(Ir+Ir+"*$");var Fr=f.trim&&(Er.trim()||!jr.trim());P(f,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return o(this).replace(Mr,"").replace(Ur,"")}},Fr);var Nr=d.bind(String.prototype.trim);var Cr=f.lastIndexOf&&"abc\u3042\u3044".lastIndexOf("\u3042\u3044",2)!==-1;P(f,{lastIndexOf:function lastIndexOf(t){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var r=o(this);var e=o(t);var n=arguments.length>1?u(arguments[1]):NaN;var i=Y(n)?Infinity:Z.ToInteger(n);var a=b(w(i,0),r.length);var f=e.length;var l=a+f;while(l>0){l=w(0,l-f);var s=V(K(r,l,a+f),e);if(s!==-1){return l+s}}return-1}},Cr);var kr=f.lastIndexOf;P(f,{lastIndexOf:function lastIndexOf(t){return kr.apply(this,arguments)}},f.lastIndexOf.length!==1);if(parseInt(Er+"08")!==8||parseInt(Er+"0x16")!==22){parseInt=function(t){var r=/^[-+]?0[xX]/;return function parseInt(e,n){if(typeof e==="symbol"){""+e}var i=Nr(String(e));var a=u(n)||(r.test(i)?16:10);return t(i,a)}}(parseInt)}if(1/parseFloat("-0")!==-Infinity){parseFloat=function(t){return function parseFloat(r){var e=Nr(String(r));var n=t(e);return n===0&&K(e,0,1)==="-"?-0:n}}(parseFloat)}if(String(new RangeError("test"))!=="RangeError: test"){var Ar=function toString(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var t=this.name;if(typeof t==="undefined"){t="Error"}else if(typeof t!=="string"){t=o(t)}var r=this.message;if(typeof r==="undefined"){r=""}else if(typeof r!=="string"){r=o(r)}if(!t){return r}if(!r){return t}return t+": "+r};Error.prototype.toString=Ar}if($){var Rr=function(t,r){if(tt(t,r)){var e=Object.getOwnPropertyDescriptor(t,r);if(e.configurable){e.enumerable=false;Object.defineProperty(t,r,e)}}};Rr(Error.prototype,"message");if(Error.prototype.message!==""){Error.prototype.message=""}Rr(Error.prototype,"name")}if(String(/a/gim)!=="/a/gim"){var $r=function toString(){var t="/"+this.source+"/";if(this.global){t+="g"}if(this.ignoreCase){t+="i"}if(this.multiline){t+="m"}return t};RegExp.prototype.toString=$r}});

/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(e){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(e){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Map;var H=G&&G.prototype["delete"];var V=G&&G.prototype.get;var B=G&&G.prototype.has;var U=G&&G.prototype.set;var $=S.Symbol||{};var J=$.species||"@@species";var X=Number.isNaN||function isNaN(e){return e!==e};var K=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Z=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(X(t)){return t}return t<0?-1:1};var Y=function isArguments(e){return g(e)==="[object Arguments]"};var Q=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var ee=Y(arguments)?Y:Q;var te={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var re=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ne=typeof $==="function"&&typeof $["for"]==="function"&&te.symbol($());var oe=te.symbol($.iterator)?$.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){oe="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ie=S.Reflect;var ae=String;var ue=typeof document==="undefined"||!document?null:document.all;var fe=ue==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==ue};var se={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!se.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(fe(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===ue},ToObject:function(e,t){return Object(se.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return se.IsCallable(e)},ToInt32:function(e){return se.ToNumber(e)>>0},ToUint32:function(e){return se.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=se.ToNumber(e);if(X(t)){return 0}if(t===0||!K(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=se.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return se.TypeIsObject(e)&&(typeof e[oe]!=="undefined"||ee(e))},GetIterator:function(e){if(ee(e)){return new q(e,"value")}var t=se.GetMethod(e,oe);if(!se.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=se.Call(t,e);if(!se.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=se.ToObject(e)[t];if(fe(r)){return void 0}if(!se.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=se.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=se.Call(r,e)}catch(e){o=e}if(t){return}if(o){throw o}if(!se.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!se.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=se.IteratorNext(e);var r=se.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ie.construct){return ie.construct(e,t,o)}var i=o.prototype;if(!se.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=se.Call(e,a,t);return se.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!se.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[J];if(fe(n)){return t}if(!se.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=se.ToString(e);var i="<"+t;if(r!==""){var a=se.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!se.TypeIsObject(e)){return false}var t=e[$.match];if(typeof t!=="undefined"){return!!t}return te.regex(e)},ToString:function ToString(e){return ae(e)}};if(s&&ne){var ce=function defineWellKnownSymbol(e){if(te.symbol($[e])){return $[e]}var t=$["for"]("Symbol."+e);Object.defineProperty($,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!te.symbol($.search)){var le=ce("search");var pe=String.prototype.search;h(RegExp.prototype,le,function search(e){return se.Call(pe,e,[this])});var ve=function search(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,le);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(pe,t,[se.ToString(e)])};re(String.prototype,"search",ve)}if(!te.symbol($.replace)){var ye=ce("replace");var he=String.prototype.replace;h(RegExp.prototype,ye,function replace(e,t){return se.Call(he,e,[this,t])});var be=function replace(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ye);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(he,r,[se.ToString(e),t])};re(String.prototype,"replace",be)}if(!te.symbol($.split)){var ge=ce("split");var de=String.prototype.split;h(RegExp.prototype,ge,function split(e,t){return se.Call(de,e,[this,t])});var me=function split(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ge);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(de,r,[se.ToString(e),t])};re(String.prototype,"split",me)}var Oe=te.symbol($.match);var we=Oe&&function(){var e={};e[$.match]=function(){return 42};return"a".match(e)!==42}();if(!Oe||we){var je=ce("match");var Se=String.prototype.match;h(RegExp.prototype,je,function match(e){return se.Call(Se,e,[this])});var Te=function match(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,je);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(Se,t,[se.ToString(e)])};re(String.prototype,"match",Te)}}var Ie=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ee=function(){return this};var Pe=function(e){if(s&&!z(e,J)){m.getter(e,J,Ee)}};var Ce=function(e,t){var r=t||function iterator(){return this};h(e,oe,r);if(!e[oe]&&te.symbol(oe)){e[oe]=r}};var Me=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var xe=function createDataPropertyOrThrow(e,t,r){Me(e,t,r);if(!se.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Ne=function(e,t,r,n){if(!se.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!se.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ae=String.fromCodePoint;re(String,"fromCodePoint",function fromCodePoint(e){return se.Call(Ae,this,arguments)})}var Re={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!se.SameValue(r,se.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=se.ToObject(e,"bad callSite");var r=se.ToObject(t.raw,"bad raw value");var n=r.length;var o=se.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=se.ToString(a);s=se.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=se.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){re(String,"raw",Re.raw)}b(String,Re);var _e=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ke=Infinity;var Fe={repeat:function repeat(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);if(r<0||r>=ke){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return _e(t,r)},startsWith:function startsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=se.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(se.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=se.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:se.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(se.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=se.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){re(String.prototype,"includes",Fe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Le=i(function(){"/a/".startsWith(/a/)});var De=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Le||!De){re(String.prototype,"startsWith",Fe.startsWith);re(String.prototype,"endsWith",Fe.endsWith)}}if(ne){var ze=a(function(){var e=/a/;e[$.match]=false;return"/a/".startsWith(e)});if(!ze){re(String.prototype,"startsWith",Fe.startsWith)}var qe=a(function(){var e=/a/;e[$.match]=false;return"/a/".endsWith(e)});if(!qe){re(String.prototype,"endsWith",Fe.endsWith)}var We=a(function(){var e=/a/;e[$.match]=false;return"/a/".includes(e)});if(!We){re(String.prototype,"includes",Fe.includes)}}b(String.prototype,Fe);var Ge=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var He=new RegExp("(^["+Ge+"]+)|(["+Ge+"]+$)","g");var Ve=function trim(){return se.ToString(se.RequireObjectCoercible(this)).replace(He,"")};var Be=["\x85","\u200b","\ufffe"].join("");var Ue=new RegExp("["+Be+"]","g");var $e=/^[-+]0x[0-9a-f]+$/i;var Je=Be.trim().length!==Be.length;h(String.prototype,"trim",Ve,Je);var Xe=function(e){return{value:e,done:arguments.length===0}};var Ke=function(e){se.RequireObjectCoercible(e);this._s=se.ToString(e);this._i=0};Ke.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Xe()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Xe(e.substr(t,o))};Ce(Ke.prototype);Ce(String.prototype,function(){return new Ke(this)});var Ze={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!se.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(ee(e)||se.GetMethod(e,oe))!=="undefined";var u,f,s;if(a){f=se.IsConstructor(r)?Object(new r):[];var c=se.GetIterator(e);var l,p;s=0;while(true){l=se.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(e){se.IteratorClose(c,true);throw e}s+=1}u=s}else{var v=se.ToObject(e);u=se.ToLength(v.length);f=se.IsConstructor(r)?Object(new r(u)):new Array(u);var y;for(s=0;s<u;++s){y=v[s];if(o){y=typeof i==="undefined"?n(y,s):t(n,i,y,s)}xe(f,s,y)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!se.IsCallable(t)?new Array(e):se.Construct(t,[e]);for(var o=0;o<e;++o){xe(n,o,arguments[o])}n.length=e;return n}};b(Array,Ze);Pe(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=se.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Xe(o)}}this.array=void 0;return Xe()}});Ce(q.prototype);var Ye=Array.of===Ze.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Ye){re(Array,"of",Ze.of)}var Qe={copyWithin:function copyWithin(e,t){var r=se.ToObject(this);var n=se.ToLength(r.length);var o=se.ToInteger(e);var i=se.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:se.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=se.ToObject(this);var o=se.ToLength(n.length);t=se.ToInteger(typeof t==="undefined"?0:t);r=se.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!se.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!se.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[oe]){b(Array.prototype,{values:Array.prototype[oe]});if(te.symbol($.unscopables)){Array.prototype[$.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var et=Array.prototype.values;re(Array.prototype,"values",function values(){return se.Call(et,this,arguments)});h(Array.prototype,oe,Array.prototype.values,true)}b(Array.prototype,Qe);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}Ce(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Ce(Object.getPrototypeOf([].values()))}var tt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var rt=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!tt||!rt){re(Array,"from",Ze.from)}var nt=function(){return a(function(){return Array.from([0],void 0)})}();if(!nt){var ot=Array.from;re(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return se.Call(ot,this,arguments)}else{return t(ot,this,e)}})}var it=-(Math.pow(2,32)-1);var at=function(e,r){var n={length:it};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!at(Array.prototype.forEach)){var ut=Array.prototype.forEach;re(Array.prototype,"forEach",function forEach(e){return se.Call(ut,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.map)){var ft=Array.prototype.map;re(Array.prototype,"map",function map(e){return se.Call(ft,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.filter)){var st=Array.prototype.filter;re(Array.prototype,"filter",function filter(e){return se.Call(st,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.some)){var ct=Array.prototype.some;re(Array.prototype,"some",function some(e){return se.Call(ct,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.every)){var lt=Array.prototype.every;re(Array.prototype,"every",function every(e){return se.Call(lt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduce)){var pt=Array.prototype.reduce;re(Array.prototype,"reduce",function reduce(e){return se.Call(pt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduceRight,true)){var vt=Array.prototype.reduceRight;re(Array.prototype,"reduceRight",function reduceRight(e){return se.Call(vt,this.length>=0?this:[],arguments)},true)}var yt=Number("0o10")!==8;var ht=Number("0b10")!==2;var bt=y(Be,function(e){return Number(e+0+e)===0});if(yt||ht||bt){var gt=Number;var dt=/^0b[01]+$/i;var mt=/^0o[0-7]+$/i;var Ot=dt.test.bind(dt);var wt=mt.test.bind(mt);var jt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(te.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(te.primitive(t)){return t}}throw new TypeError("No default value")};var St=Ue.test.bind(Ue);var Tt=$e.test.bind($e);var It=function(){var e=function Number(t){var r;if(arguments.length>0){r=te.primitive(t)?t:jt(t,"number")}else{r=0}if(typeof r==="string"){r=se.Call(Ve,r);if(Ot(r)){r=parseInt(C(r,2),2)}else if(wt(r)){r=parseInt(C(r,2),8)}else if(St(r)||Tt(r)){r=NaN}}var n=this;var o=a(function(){gt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new gt(r)}return gt(r)};return e}();Ie(gt,It,{});b(It,{NaN:gt.NaN,MAX_VALUE:gt.MAX_VALUE,MIN_VALUE:gt.MIN_VALUE,NEGATIVE_INFINITY:gt.NEGATIVE_INFINITY,POSITIVE_INFINITY:gt.POSITIVE_INFINITY});Number=It;m.redefine(S,"Number",It)}var Et=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Et,MIN_SAFE_INTEGER:-Et,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:K,isInteger:function isInteger(e){return K(e)&&se.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){re(Array.prototype,"find",Qe.find)}if([,1].findIndex(function(){return true})!==0){re(Array.prototype,"findIndex",Qe.findIndex)}var Pt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ct=function ensureEnumerable(e,t){if(s&&Pt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Mt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var xt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Nt=function(e,t){var r=n(Object(t));var o;if(se.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Pt(t))}return p(P(r,o||[]),xt(t),e)};var At={assign:function(e,t){var r=se.ToObject(e,"Cannot convert undefined or null to object");return p(se.Call(Mt,1,arguments),Nt,r)},is:function is(e,t){return se.SameValue(e,t)}};var Rt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Rt){re(Object,"assign",At.assign)}b(Object,At);if(s){var _t={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!se.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||se.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(t){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,_t)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var kt=!i(function(){Object.keys("foo")});if(!kt){var Ft=Object.keys;re(Object,"keys",function keys(e){return Ft(se.ToObject(e))});n=Object.keys}var Lt=i(function(){Object.keys(/a/g)});if(Lt){var Dt=Object.keys;re(Object,"keys",function keys(e){if(te.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Dt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var zt=!i(function(){Object.getOwnPropertyNames("foo")});if(!zt){var qt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Wt=Object.getOwnPropertyNames;re(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=se.ToObject(e);if(g(t)==="[object Window]"){try{return Wt(t)}catch(e){return P([],qt)}}return Wt(t)})}}if(Object.getOwnPropertyDescriptor){var Gt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Gt){var Ht=Object.getOwnPropertyDescriptor;re(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ht(se.ToObject(e),t)})}}if(Object.seal){var Vt=!i(function(){Object.seal("foo")});if(!Vt){var Bt=Object.seal;re(Object,"seal",function seal(e){if(!se.TypeIsObject(e)){return e}return Bt(e)})}}if(Object.isSealed){var Ut=!i(function(){Object.isSealed("foo")});if(!Ut){var $t=Object.isSealed;re(Object,"isSealed",function isSealed(e){if(!se.TypeIsObject(e)){return true}return $t(e)})}}if(Object.freeze){var Jt=!i(function(){Object.freeze("foo")});if(!Jt){var Xt=Object.freeze;re(Object,"freeze",function freeze(e){if(!se.TypeIsObject(e)){return e}return Xt(e)})}}if(Object.isFrozen){var Kt=!i(function(){Object.isFrozen("foo")});if(!Kt){var Zt=Object.isFrozen;re(Object,"isFrozen",function isFrozen(e){if(!se.TypeIsObject(e)){return true}return Zt(e)})}}if(Object.preventExtensions){var Yt=!i(function(){Object.preventExtensions("foo")});if(!Yt){var Qt=Object.preventExtensions;re(Object,"preventExtensions",function preventExtensions(e){if(!se.TypeIsObject(e)){return e}return Qt(e)})}}if(Object.isExtensible){var er=!i(function(){Object.isExtensible("foo")});if(!er){var tr=Object.isExtensible;re(Object,"isExtensible",function isExtensible(e){if(!se.TypeIsObject(e)){return false}return tr(e)})}}if(Object.getPrototypeOf){var rr=!i(function(){Object.getPrototypeOf("foo")});if(!rr){var nr=Object.getPrototypeOf;re(Object,"getPrototypeOf",function getPrototypeOf(e){return nr(se.ToObject(e))})}}var or=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&se.IsCallable(e.get)}();if(s&&!or){var ir=function flags(){if(!se.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ir)}var ar=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var ur=ne&&s&&function(){var e=/./;e[$.match]=false;return RegExp(e)===e}();var fr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var sr=fr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!fr||!sr){var cr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=se.RequireObjectCoercible(this);if(te.regex(e)){return t(cr,e)}var r=ae(e.source);var n=ae(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,cr)}if(s&&(!ar||ur)){var lr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var pr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var vr=function(){return this.source};var yr=se.IsCallable(pr.get)?pr.get:vr;var hr=RegExp;var br=function(){return function RegExp(e,t){var r=se.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(te.regex(e)){o=se.Call(yr,e);i=typeof t==="undefined"?se.Call(lr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new hr(e,t)}}();Ie(hr,br,{$input:true});RegExp=br;m.redefine(S,"RegExp",br)}if(s){var gr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(gr),function(e){if(e in RegExp&&!(gr[e]in RegExp)){m.getter(RegExp,gr[e],function get(){return RegExp[e]})}})}Pe(RegExp);var dr=1/Number.EPSILON;var mr=function roundTiesToEven(e){return e+dr-dr};var Or=Math.pow(2,-23);var wr=Math.pow(2,127)*(2-Or);var jr=Math.pow(2,-126);var Sr=Math.E;var Tr=Math.LOG2E;var Ir=Math.LOG10E;var Er=Number.prototype.clz;delete Number.prototype.clz;var Pr={acosh:function acosh(e){var t=Number(e);if(X(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/Sr+D(t+1)*D(t-1)/Sr)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(X(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=se.ToUint32(t);if(r===0){return 32}return Er?se.Call(Er,r):31-_(L(r+.5)*Tr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(X(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*Tr},log10:function log10(e){return L(e)*Ir},log1p:function log1p(e){var t=Number(e);if(t<-1||X(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:Z,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*Sr/2},tanh:function tanh(e){var t=Number(e);if(X(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=se.ToUint32(e);var n=se.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Z(t);var n=k(t);if(n<jr){return r*mr(n/jr/Or)*jr*Or}var o=(1+Or/Number.EPSILON)*n;var i=o-(o-n);if(i>wr||X(i)){return r*Infinity}return r*i}};b(Math,Pr);h(Math,"log1p",Pr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Pr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",Pr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Pr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",Pr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",Pr.sinh,Math.sinh(-2e-17)!==-2e-17);var Cr=Math.expm1(10);h(Math,"expm1",Pr.expm1,Cr>22025.465794806718||Cr<22025.465794806718);var Mr=Math.round;var xr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Nr=dr+1;var Ar=2*dr-1;var Rr=[Nr,Ar].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;
return e-t<.5?t:r},!xr||!Rr);m.preserveToString(Math.round,Mr);var _r=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Pr.imul;m.preserveToString(Math.imul,_r)}if(Math.imul.length!==2){re(Math,"imul",function imul(e,t){return se.Call(_r,Math,arguments)})}var kr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}se.IsPromise=function(e){if(!se.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!se.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(se.IsCallable(t.resolve)&&se.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&se.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=se.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(se.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(e){n=e;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!se.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(t){return m(e,t)}if(!se.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(e){i(e)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!se.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Ne(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(e){o(e)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=se.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(t){e.done=true;throw t}o[f]=void 0;var s=t.resolve(u);var c=P(f,o,r,i);i.count+=1;w(s.then,s,c,r.reject);f+=1}if(--i.count===0){var l=r.resolve;l(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=se.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(t){e.done=true;throw t}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},race:function race(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},reject:function reject(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(se.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{catch:function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!se.IsPromise(n)){throw new TypeError("not a promise")}var o=se.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=se.IsCallable(e)?e:a;var d=se.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof kr==="function"){b(S,{Promise:kr});var Fr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Lr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Dr=i(function(){S.Promise.call(3,W)});var zr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(e){return true}return t===r}(S.Promise);var qr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Wr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Wr.prototype=Promise.prototype;Wr.all=Promise.all;var Gr=a(function(){return!!Wr.all([1,2])});if(!Fr||!Lr||!Dr||zr||!qr||Gr){Promise=kr;re(S,"Promise",kr)}if(Promise.all.length!==1){var Hr=Promise.all;re(Promise,"all",function all(e){return se.Call(Hr,this,arguments)})}if(Promise.race.length!==1){var Vr=Promise.race;re(Promise,"race",function race(e){return se.Call(Vr,this,arguments)})}if(Promise.resolve.length!==1){var Br=Promise.resolve;re(Promise,"resolve",function resolve(e){return se.Call(Br,this,arguments)})}if(Promise.reject.length!==1){var Ur=Promise.reject;re(Promise,"reject",function reject(e){return se.Call(Ur,this,arguments)})}Ct(Promise,"all");Ct(Promise,"race");Ct(Promise,"resolve");Ct(Promise,"reject");Pe(Promise)}var $r=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Jr=$r(["z","a","bb"]);var Xr=$r(["z",1,"a","3",2]);if(s){var Kr=function fastkey(e,t){if(!t&&!Jr){return null}if(fe(e)){return"^"+se.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Xr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Zr=function emptyObject(){return Object.create?Object.create(null):{}};var Yr=function addIterableToMap(e,n,o){if(r(o)||te.string(o)){l(o,function(e){if(!se.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!fe(o)){a=n.set;if(!se.IsCallable(a)){throw new TypeError("bad map")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!se.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(e){se.IteratorClose(i,true);throw e}}}}};var Qr=function addIterableToSet(e,n,o){if(r(o)||te.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!fe(o)){a=n.add;if(!se.IsCallable(a)){throw new TypeError("bad set")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(e){se.IteratorClose(i,true);throw e}}}}};var en={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!se.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+se.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Xe()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Xe(n)}}this.i=void 0;return Xe()}};Ce(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Ne(this,Map,a,{_es6map:true,_head:null,_map:G?new G:null,_size:0,_storage:Zr()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Yr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Kr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=V.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Kr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return B.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(se.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Kr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(B.call(this._map,e)){V.call(this._map,e).value=t}else{a=new r(e,t);U.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(se.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},delete:function(t){o(this,"delete");var r=this._head;var n=r;var i=Kr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!B.call(this._map,t)){return false}n=V.call(this._map,t).prev;H.call(this._map,t)}while((n=n.next)!==r){if(se.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=G?new G:null;this._size=0;this._storage=Zr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Ce(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!se.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+se.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Ne(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Zr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){Qr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new en.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Kr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Kr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},delete:function(e){r(this,"delete");var t;if(this._storage&&(t=Kr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Zr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);Ce(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var tn=a(function(){return new Map([[1,2]]).get(1)===2});if(!tn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(G.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var rn=new Map;var nn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var on=rn.set(1,2)===rn;if(!nn||!on){re(Map.prototype,"set",function set(e,r){t(U,this,e===0?0:e,r);return this})}if(!nn){b(Map.prototype,{get:function get(e){return t(V,this,e===0?0:e)},has:function has(e){return t(B,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,V);m.preserveToString(Map.prototype.has,B)}var an=new Set;var un=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(an);var fn=an.add(1)===an;if(!un||!fn){var sn=Set.prototype.add;Set.prototype.add=function add(e){t(sn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,sn)}if(!un){var cn=Set.prototype.has;Set.prototype.has=function has(e){return t(cn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,cn);var ln=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ln,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],ln)}var pn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var vn=Object.setPrototypeOf&&!pn;var yn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||vn||!yn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=G.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var hn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var bn=Object.setPrototypeOf&&!hn;var gn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||bn||!gn){var dn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new dn;if(arguments.length>0){Qr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=dn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,dn)}var mn=new S.Map;var On=!a(function(){return mn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||mn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof mn.keys().next!=="function"||On||!pn){b(S,{Map:en.Map,Set:en.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}Ce(Object.getPrototypeOf((new S.Map).keys()));Ce(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var wn=S.Set.prototype.has;re(S.Set.prototype,"has",function has(e){return t(wn,this,e)})}}b(S,en);Pe(S.Map);Pe(S.Set)}var jn=function throwUnlessTargetIsObject(e){if(!se.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Sn={apply:function apply(){return se.Call(se.Call,null,arguments)},construct:function construct(e,t){if(!se.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!se.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return se.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){jn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){jn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Sn,{ownKeys:function ownKeys(e){jn(e);var t=Object.getOwnPropertyNames(e);if(se.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Tn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Sn,{isExtensible:function isExtensible(e){jn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){jn(e);return Tn(function(){Object.preventExtensions(e)})}})}if(s){var In=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return In(o,t,r)}if("value"in n){return n.value}if(n.get){return se.Call(n.get,r)}return void 0};var En=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return En(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!se.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ie.defineProperty(o,r,{value:n})}else{return ie.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Sn,{defineProperty:function defineProperty(e,t,r){jn(e);return Tn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){jn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){jn(e);var r=arguments.length>2?arguments[2]:e;return In(e,t,r)},set:function set(e,t,r){jn(e);var n=arguments.length>3?arguments[3]:e;return En(e,t,r,n)}})}if(Object.getPrototypeOf){var Pn=Object.getPrototypeOf;Sn.getPrototypeOf=function getPrototypeOf(e){jn(e);return Pn(e)}}if(Object.setPrototypeOf&&Sn.getPrototypeOf){var Cn=function(e,t){var r=t;while(r){if(e===r){return true}r=Sn.getPrototypeOf(r)}return false};Object.assign(Sn,{setPrototypeOf:function setPrototypeOf(e,t){jn(e);if(t!==null&&!se.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ie.getPrototypeOf(e)){return true}if(ie.isExtensible&&!ie.isExtensible(e)){return false}if(Cn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Mn=function(e,t){if(!se.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){re(S.Reflect,e,t)}}};Object.keys(Sn).forEach(function(e){Mn(e,Sn[e])});var xn=S.Reflect.getPrototypeOf;if(c&&xn&&xn.name!=="getPrototypeOf"){re(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(xn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){re(S.Reflect,"setPrototypeOf",Sn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){re(S.Reflect,"defineProperty",Sn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){re(S.Reflect,"construct",Sn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Nn=Date.prototype.toString;var An=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return se.Call(Nn,this)};re(Date.prototype,"toString",An)}var Rn={anchor:function anchor(e){return se.CreateHTML(this,"a","name",e)},big:function big(){return se.CreateHTML(this,"big","","")},blink:function blink(){return se.CreateHTML(this,"blink","","")},bold:function bold(){return se.CreateHTML(this,"b","","")},fixed:function fixed(){return se.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return se.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return se.CreateHTML(this,"font","size",e)},italics:function italics(){return se.CreateHTML(this,"i","","")},link:function link(e){return se.CreateHTML(this,"a","href",e)},small:function small(){return se.CreateHTML(this,"small","","")},strike:function strike(){return se.CreateHTML(this,"strike","","")},sub:function sub(){return se.CreateHTML(this,"sub","","")},sup:function sub(){return se.CreateHTML(this,"sup","","")}};l(Object.keys(Rn),function(e){var r=String.prototype[e];var n=false;if(se.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){re(String.prototype,e,Rn[e])}});var _n=function(){if(!ne){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e($())!=="undefined"){return true}if(e([$()])!=="[null]"){return true}var t={a:$()};t[$()]=true;if(e(t)!=="{}"){return true}return false}();var kn=a(function(){if(!ne){return true}return JSON.stringify(Object($()))==="{}"&&JSON.stringify([Object($())])==="[{}]"});if(_n||!kn){var Fn=JSON.stringify;re(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=se.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(te.symbol(n)){return xt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Fn.apply(this,o)})}return S});

/* bignumber.js v6.0.0 https://github.com/MikeMcl/bignumber.js/LICENCE */
!function(e){"use strict";function r(e){function c(e,r){var n,t,i,s,u,f,a,g=this;if(!(g instanceof c))return new c(e,r);if(null==r){if(e instanceof c)return g.s=e.s,g.e=e.e,void(g.c=(e=e.c)?e.slice():e);if(u="number"==typeof e,u&&0*e==0){if(g.s=0>1/e?(e=-e,-1):1,e===~~e){for(i=0,s=e;s>=10;s/=10,i++);return g.e=i,void(g.c=[e])}a=e+""}else{if(!l.test(a=e+""))return S(g,a,u);g.s=45==a.charCodeAt(0)?(a=a.slice(1),-1):1}}else{if(o(r,2,k.length,"Base"),a=e+"",10==r)return g=new c(e instanceof c?e:a),A(g,D+g.e+1,T);if(u="number"==typeof e){if(0*e!=0)return S(g,a,u,r);if(g.s=0>1/e?(a=a.slice(1),-1):1,a.replace(/^0\.0*|\./,"").length>15)throw Error(p+e);u=!1}else g.s=45===a.charCodeAt(0)?(a=a.slice(1),-1):1,r>10&&37>r&&(a=a.toLowerCase());for(n=k.slice(0,r),i=s=0,f=a.length;f>s;s++)if(n.indexOf(t=a.charAt(s))<0){if("."==t&&s>i){i=f;continue}return S(g,e+"",u,r)}a=P(a,r,10,g.s)}for((i=a.indexOf("."))>-1&&(a=a.replace(".","")),(s=a.search(/e/i))>0?(0>i&&(i=s),i+=+a.slice(s+1),a=a.substring(0,s)):0>i&&(i=a.length),s=0;48===a.charCodeAt(s);s++);for(f=a.length;48===a.charCodeAt(--f););if(a=a.slice(s,f+1)){if(f=a.length,u&&f>15&&(e>w||e!==h(e)))throw Error(p+g.s*e);if(i=i-s-1,i>C)g.c=g.e=null;else if(x>i)g.c=[g.e=0];else{if(g.e=i,g.c=[],s=(i+1)%m,0>i&&(s+=m),f>s){for(s&&g.c.push(+a.slice(0,s)),f-=m;f>s;)g.c.push(+a.slice(s,s+=m));a=a.slice(s),s=m-a.length}else s-=f;for(;s--;a+="0");g.c.push(+a)}}else g.c=[g.e=0]}function y(e,r,n,i){var s,l,a,h,g;if(null==n?n=T:o(n,0,8),!e.c)return e.toString();if(s=e.c[0],a=e.e,null==r)g=t(e.c),g=1==i||2==i&&I>=a?u(g,a):f(g,a,"0");else if(e=A(new c(e),r,n),l=e.e,g=t(e.c),h=g.length,1==i||2==i&&(l>=r||I>=l)){for(;r>h;g+="0",h++);g=u(g,l)}else if(r-=a,g=f(g,l,"0"),l+1>h){if(--r>0)for(g+=".";r--;g+="0");}else if(r+=l-h,r>0)for(l+1==h&&(g+=".");r--;g+="0");return e.s<0&&s?"-"+g:g}function b(e,r){var n,t,i=0;for(s(e[0])&&(e=e[0]),n=new c(e[0]);++i<e.length;){if(t=new c(e[i]),!t.s){n=t;break}r.call(n,t)&&(n=t)}return n}function E(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*m-1)>C?e.c=e.e=null:x>n?e.c=[e.e=0]:(e.e=n,e.c=r),e}function A(e,r,n,t){var i,o,s,u,f,c,l,g=e.c,p=v;if(g){e:{for(i=1,u=g[0];u>=10;u/=10,i++);if(o=r-i,0>o)o+=m,s=r,f=g[c=0],l=f/p[i-s-1]%10|0;else if(c=a((o+1)/m),c>=g.length){if(!t)break e;for(;g.length<=c;g.push(0));f=l=0,i=1,o%=m,s=o-m+1}else{for(f=u=g[c],i=1;u>=10;u/=10,i++);o%=m,s=o-m+i,l=0>s?0:f/p[i-s-1]%10|0}if(t=t||0>r||null!=g[c+1]||(0>s?f:f%p[i-s-1]),t=4>n?(l||t)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||t||6==n&&(o>0?s>0?f/p[i-s]:0:g[c-1])%10&1||n==(e.s<0?8:7)),1>r||!g[0])return g.length=0,t?(r-=e.e+1,g[0]=p[(m-r%m)%m],e.e=-r||0):g[0]=e.e=0,e;if(0==o?(g.length=c,u=1,c--):(g.length=c+1,u=p[m-o],g[c]=s>0?h(f/p[i-s]%p[s])*u:0),t)for(;;){if(0==c){for(o=1,s=g[0];s>=10;s/=10,o++);for(s=g[0]+=u,u=1;s>=10;s/=10,u++);o!=u&&(e.e++,g[0]==d&&(g[0]=1));break}if(g[c]+=u,g[c]!=d)break;g[c--]=0,u=1}for(o=g.length;0===g[--o];g.pop());}e.e>C?e.c=e.e=null:e.e<x&&(e.c=[e.e=0])}return e}var R,P,S,_=c.prototype,L=new c(1),D=20,T=4,I=-7,B=21,x=-1e7,C=1e7,M=!1,U=1,F=0,G={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},k="0123456789abcdefghijklmnopqrstuvwxyz";return c.clone=r,c.ROUND_UP=0,c.ROUND_DOWN=1,c.ROUND_CEIL=2,c.ROUND_FLOOR=3,c.ROUND_HALF_UP=4,c.ROUND_HALF_DOWN=5,c.ROUND_HALF_EVEN=6,c.ROUND_HALF_CEIL=7,c.ROUND_HALF_FLOOR=8,c.EUCLID=9,c.config=c.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(g+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],o(n,0,O,r),D=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],o(n,0,8,r),T=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],s(n)?(o(n[0],-O,0,r),o(n[1],0,O,r),I=n[0],B=n[1]):(o(n,-O,O,r),I=-(B=0>n?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],s(n))o(n[0],-O,-1,r),o(n[1],1,O,r),x=n[0],C=n[1];else{if(o(n,-O,O,r),!n)throw Error(g+r+" cannot be zero: "+n);x=-(C=0>n?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(g+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw M=!n,Error(g+"crypto unavailable");M=n}else M=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],o(n,0,9,r),U=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],o(n,0,O,r),F=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(g+r+" not an object: "+n);G=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.$|\.|(.).*\1/.test(n))throw Error(g+r+" invalid: "+n);k=n}}return{DECIMAL_PLACES:D,ROUNDING_MODE:T,EXPONENTIAL_AT:[I,B],RANGE:[x,C],CRYPTO:M,MODULO_MODE:U,POW_PRECISION:F,FORMAT:G,ALPHABET:k}},c.isBigNumber=function(e){return e instanceof c||e&&e._isBigNumber===!0||!1},c.maximum=c.max=function(){return b(arguments,_.lt)},c.minimum=c.min=function(){return b(arguments,_.gt)},c.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return h(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,s,u,f=0,l=[],p=new c(L);if(null==e?e=D:o(e,0,O),s=a(e/m),M)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));s>f;)u=131072*n[f]+(n[f+1]>>>11),u>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[f]=t[0],n[f+1]=t[1]):(l.push(u%1e14),f+=2);f=s/2}else{if(!crypto.randomBytes)throw M=!1,Error(g+"crypto unavailable");for(n=crypto.randomBytes(s*=7);s>f;)u=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6],u>=9e15?crypto.randomBytes(7).copy(n,f):(l.push(u%1e14),f+=7);f=s/7}if(!M)for(;s>f;)u=r(),9e15>u&&(l[f++]=u%1e14);for(s=l[--f],e%=m,s&&e&&(u=v[m-e],l[f]=h(s/u)*u);0===l[f];l.pop(),f--);if(0>f)l=[i=0];else{for(i=-1;0===l[0];l.splice(0,1),i-=m);for(f=1,u=l[0];u>=10;u/=10,f++);m>f&&(i-=m-f)}return p.e=i,p.c=l,p}}(),P=function(){function e(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;f>u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}var r="0123456789";return function(n,i,o,s,u){var l,a,h,g,p,d,m,w,v=n.indexOf("."),N=D,O=T;for(v>=0&&(g=F,F=0,n=n.replace(".",""),w=new c(i),d=w.pow(n.length-v),F=g,w.c=e(f(t(d.c),d.e,"0"),10,o,r),w.e=w.c.length),m=e(n,i,o,u?(l=k,r):(l=r,k)),h=g=m.length;0==m[--g];m.pop());if(!m[0])return l.charAt(0);if(0>v?--h:(d.c=m,d.e=h,d.s=s,d=R(d,w,N,O,o),m=d.c,p=d.r,h=d.e),a=h+N+1,v=m[a],g=o/2,p=p||0>a||null!=m[a+1],p=4>O?(null!=v||p)&&(0==O||O==(d.s<0?3:2)):v>g||v==g&&(4==O||p||6==O&&1&m[a-1]||O==(d.s<0?8:7)),1>a||!m[0])n=p?f(l.charAt(1),-N,l.charAt(0)):l.charAt(0);else{if(m.length=a,p)for(--o;++m[--a]>o;)m[a]=0,a||(++h,m=[1].concat(m));for(g=m.length;!m[--g];);for(v=0,n="";g>=v;n+=l.charAt(m[v++]));n=f(n,h,l.charAt(0))}return n}}(),R=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,c=r%N,l=r/N|0;for(e=e.slice();f--;)o=e[f]%N,s=e[f]/N|0,t=l*o+s*c,i=c*o+t%N*N+u,u=(i/n|0)+(t/N|0)+l*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;n>i;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,o,s,u,f){var l,a,g,p,w,v,N,O,y,b,E,R,P,S,_,L,D,T=i.s==o.s?1:-1,I=i.c,B=o.c;if(!(I&&I[0]&&B&&B[0]))return new c(i.s&&o.s&&(I?!B||I[0]!=B[0]:B)?I&&0==I[0]||!B?0*T:T/0:NaN);for(O=new c(T),y=O.c=[],a=i.e-o.e,T=s+a+1,f||(f=d,a=n(i.e/m)-n(o.e/m),T=T/m|0),g=0;B[g]==(I[g]||0);g++);if(B[g]>(I[g]||0)&&a--,0>T)y.push(1),p=!0;else{for(S=I.length,L=B.length,g=0,T+=2,w=h(f/(B[0]+1)),w>1&&(B=e(B,w,f),I=e(I,w,f),L=B.length,S=I.length),P=L,b=I.slice(0,L),E=b.length;L>E;b[E++]=0);D=B.slice(),D=[0].concat(D),_=B[0],B[1]>=f/2&&_++;do{if(w=0,l=r(B,b,L,E),0>l){if(R=b[0],L!=E&&(R=R*f+(b[1]||0)),w=h(R/_),w>1)for(w>=f&&(w=f-1),v=e(B,w,f),N=v.length,E=b.length;1==r(v,b,N,E);)w--,t(v,N>L?D:B,N,f),N=v.length,l=1;else 0==w&&(l=w=1),v=B.slice(),N=v.length;if(E>N&&(v=[0].concat(v)),t(b,v,E,f),E=b.length,-1==l)for(;r(B,b,L,E)<1;)w++,t(b,E>L?D:B,E,f),E=b.length}else 0===l&&(w++,b=[0]);y[g++]=w,b[0]?b[E++]=I[P]||0:(b=[I[P]],E=1)}while((P++<S||null!=b[0])&&T--);p=null!=b[0],y[0]||y.splice(0,1)}if(f==d){for(g=1,T=y[0];T>=10;T/=10,g++);A(O,s+(O.e=g+a*m-1)+1,u,p)}else O.e=a,O.r=+p;return O}}(),S=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,u,f){var l,a=u?s:s.replace(i,"");if(!t.test(a)){if(!u&&(a=a.replace(e,function(e,r,n){return l="x"==(n=n.toLowerCase())?16:"b"==n?2:8,f&&f!=l?e:r}),f&&(l=f,a=a.replace(r,"$1").replace(n,"0.$1")),s!=a))return new c(a,l);throw Error(g+"Not a"+(f?" base "+f:"")+" number: "+s)}o.s=isNaN(a)?null:0>a?-1:1,o.c=o.e=null}}(),_.absoluteValue=_.abs=function(){var e=new c(this);return e.s<0&&(e.s=1),e},_.comparedTo=function(e,r){return i(this,new c(e,r))},_.decimalPlaces=_.dp=function(e,r){var t,i,s,u=this;if(null!=e)return o(e,0,O),null==r?r=T:o(r,0,8),A(new c(u),e+u.e+1,r);if(!(t=u.c))return null;if(i=((s=t.length-1)-n(this.e/m))*m,s=t[s])for(;s%10==0;s/=10,i--);return 0>i&&(i=0),i},_.dividedBy=_.div=function(e,r){return R(this,new c(e,r),D,T)},_.dividedToIntegerBy=_.idiv=function(e,r){return R(this,new c(e,r),0,1)},_.isEqualTo=_.eq=function(e,r){return 0===i(this,new c(e,r))},_.integerValue=function(e){var r=new c(this);return null==e?e=T:o(e,0,8),A(r,r.e+1,e)},_.isGreaterThan=_.gt=function(e,r){return i(this,new c(e,r))>0},_.isGreaterThanOrEqualTo=_.gte=function(e,r){return 1===(r=i(this,new c(e,r)))||0===r},_.isFinite=function(){return!!this.c},_.isInteger=function(){return!!this.c&&n(this.e/m)>this.c.length-2},_.isNaN=function(){return!this.s},_.isNegative=function(){return this.s<0},_.isPositive=function(){return this.s>0},_.isZero=function(){return!!this.c&&0==this.c[0]},_.isLessThan=_.lt=function(e,r){return i(this,new c(e,r))<0},_.isLessThanOrEqualTo=_.lte=function(e,r){return-1===(r=i(this,new c(e,r)))||0===r},_.minus=function(e,r){var t,i,o,s,u=this,f=u.s;if(e=new c(e,r),r=e.s,!f||!r)return new c(NaN);if(f!=r)return e.s=-r,u.plus(e);var l=u.e/m,a=e.e/m,h=u.c,g=e.c;if(!l||!a){if(!h||!g)return h?(e.s=-r,e):new c(g?u:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new c(h[0]?u:3==T?-0:0)}if(l=n(l),a=n(a),h=h.slice(),f=l-a){for((s=0>f)?(f=-f,o=h):(a=l,o=g),o.reverse(),r=f;r--;o.push(0));o.reverse()}else for(i=(s=(f=h.length)<(r=g.length))?f:r,f=r=0;i>r;r++)if(h[r]!=g[r]){s=h[r]<g[r];break}if(s&&(o=h,h=g,g=o,e.s=-e.s),r=(i=g.length)-(t=h.length),r>0)for(;r--;h[t++]=0);for(r=d-1;i>f;){if(h[--i]<g[i]){for(t=i;t&&!h[--t];h[t]=r);--h[t],h[i]+=d}h[i]-=g[i]}for(;0==h[0];h.splice(0,1),--a);return h[0]?E(e,h,a):(e.s=3==T?-1:1,e.c=[e.e=0],e)},_.modulo=_.mod=function(e,r){var n,t,i=this;return e=new c(e,r),!i.c||!e.s||e.c&&!e.c[0]?new c(NaN):!e.c||i.c&&!i.c[0]?new c(i):(9==U?(t=e.s,e.s=1,n=R(i,e,0,3),e.s=t,n.s*=t):n=R(i,e,0,U),i.minus(n.times(e)))},_.multipliedBy=_.times=function(e,r){var t,i,o,s,u,f,l,a,h,g,p,w,v,O,y,b=this,A=b.c,R=(e=new c(e,r)).c;if(!(A&&R&&A[0]&&R[0]))return!b.s||!e.s||A&&!A[0]&&!R||R&&!R[0]&&!A?e.c=e.e=e.s=null:(e.s*=b.s,A&&R?(e.c=[0],e.e=0):e.c=e.e=null),e;for(i=n(b.e/m)+n(e.e/m),e.s*=b.s,l=A.length,g=R.length,g>l&&(v=A,A=R,R=v,o=l,l=g,g=o),o=l+g,v=[];o--;v.push(0));for(O=d,y=N,o=g;--o>=0;){for(t=0,p=R[o]%y,w=R[o]/y|0,u=l,s=o+u;s>o;)a=A[--u]%y,h=A[u]/y|0,f=w*a+h*p,a=p*a+f%y*y+v[s]+t,t=(a/O|0)+(f/y|0)+w*h,v[s--]=a%O;v[s]=t}return t?++i:v.splice(0,1),E(e,v,i)},_.negated=function(){var e=new c(this);return e.s=-e.s||null,e},_.plus=function(e,r){var t,i=this,o=i.s;if(e=new c(e,r),r=e.s,!o||!r)return new c(NaN);if(o!=r)return e.s=-r,i.minus(e);var s=i.e/m,u=e.e/m,f=i.c,l=e.c;if(!s||!u){if(!f||!l)return new c(o/0);if(!f[0]||!l[0])return l[0]?e:new c(f[0]?i:0*o)}if(s=n(s),u=n(u),f=f.slice(),o=s-u){for(o>0?(u=s,t=l):(o=-o,t=f),t.reverse();o--;t.push(0));t.reverse()}for(o=f.length,r=l.length,0>o-r&&(t=l,l=f,f=t,r=o),o=0;r;)o=(f[--r]=f[r]+l[r]+o)/d|0,f[r]=d===f[r]?0:f[r]%d;return o&&(f=[o].concat(f),++u),E(e,f,u)},_.precision=_.sd=function(e,r){var n,t,i,s=this;if(null!=e&&e!==!!e)return o(e,1,O),null==r?r=T:o(r,0,8),A(new c(s),e,r);if(!(n=s.c))return null;if(i=n.length-1,t=i*m+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&s.e+1>t&&(t=s.e+1),t},_.shiftedBy=function(e){return o(e,-w,w),this.times("1e"+e)},_.squareRoot=_.sqrt=function(){var e,r,i,o,s,u=this,f=u.c,l=u.s,a=u.e,h=D+4,g=new c("0.5");if(1!==l||!f||!f[0])return new c(!l||0>l&&(!f||f[0])?NaN:f?u:1/0);if(l=Math.sqrt(+u),0==l||l==1/0?(r=t(f),(r.length+a)%2==0&&(r+="0"),l=Math.sqrt(r),a=n((a+1)/2)-(0>a||a%2),l==1/0?r="1e"+a:(r=l.toExponential(),r=r.slice(0,r.indexOf("e")+1)+a),i=new c(r)):i=new c(l+""),i.c[0])for(a=i.e,l=a+h,3>l&&(l=0);;)if(s=i,i=g.times(s.plus(R(u,s,h,1))),t(s.c).slice(0,l)===(r=t(i.c)).slice(0,l)){if(i.e<a&&--l,r=r.slice(l-3,l+1),"9999"!=r&&(o||"4999"!=r)){(!+r||!+r.slice(1)&&"5"==r.charAt(0))&&(A(i,i.e+D+2,1),e=!i.times(i).eq(u));break}if(!o&&(A(s,s.e+D+2,0),s.times(s).eq(u))){i=s;break}h+=4,l+=4,o=1}return A(i,i.e+D+1,T,e)},_.toExponential=function(e,r){return null!=e&&(o(e,0,O),e++),y(this,e,r,1)},_.toFixed=function(e,r){return null!=e&&(o(e,0,O),e=e+this.e+1),y(this,e,r)},_.toFormat=function(e,r){var n=this.toFixed(e,r);if(this.c){var t,i=n.split("."),o=+G.groupSize,s=+G.secondaryGroupSize,u=G.groupSeparator,f=i[0],c=i[1],l=this.s<0,a=l?f.slice(1):f,h=a.length;if(s&&(t=o,o=s,s=t,h-=t),o>0&&h>0){for(t=h%o||o,f=a.substr(0,t);h>t;t+=o)f+=u+a.substr(t,o);s>0&&(f+=u+a.slice(t)),l&&(f="-"+f)}n=c?f+G.decimalSeparator+((s=+G.fractionGroupSize)?c.replace(new RegExp("\\d{"+s+"}\\B","g"),"$&"+G.fractionGroupSeparator):c):f}return n},_.toFraction=function(e){var r,n,i,o,s,u,f,l,a,h,p,d,w=this,N=w.c;if(null!=e&&(l=new c(e),!l.isInteger()||l.lt(L)))throw Error(g+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+e);if(!N)return w.toString();for(n=new c(L),h=i=new c(L),o=a=new c(L),d=t(N),u=n.e=d.length-w.e-1,n.c[0]=v[(f=u%m)<0?m+f:f],e=!e||l.comparedTo(n)>0?u>0?n:h:l,f=C,C=1/0,l=new c(d),a.c[0]=0;p=R(l,n,0,1),s=i.plus(p.times(o)),1!=s.comparedTo(e);)i=o,o=s,h=a.plus(p.times(s=h)),a=s,n=l.minus(p.times(s=n)),l=s;return s=R(e.minus(i),o,0,1),a=a.plus(s.times(h)),i=i.plus(s.times(o)),a.s=h.s=w.s,u*=2,r=R(h,o,u,T).minus(w).abs().comparedTo(R(a,i,u,T).minus(w).abs())<1?[h.toString(),o.toString()]:[a.toString(),i.toString()],C=f,r},_.toNumber=function(){return+this},_.exponentiatedBy=_.pow=function(e,r){var n,t,i,s,u=this;for(o(e,-w,w),null!=r&&(r=new c(r)),r?e>1&&u.gt(L)&&u.isInteger()&&r.gt(L)&&r.isInteger()?u=u.mod(r):(s=r,r=null):F&&(t=a(F/m+2)),i=new c(L),n=h(0>e?-e:e);;){if(n%2){if(i=i.times(u),!i.c)break;t?i.c.length>t&&(i.c.length=t):r&&(i=i.mod(r))}if(n=h(n/2),!n)break;u=u.times(u),t?u.c&&u.c.length>t&&(u.c.length=t):r&&(u=u.mod(r))}return r?i:(0>e&&(i=L.div(i)),s?i.mod(s):t?A(i,F,T):i)},_.toPrecision=function(e,r){return null!=e&&o(e,1,O),y(this,e,r,2)},_.toString=function(e){var r,n=this,i=n.s,s=n.e;return null===s?i?(r="Infinity",0>i&&(r="-"+r)):r="NaN":(r=t(n.c),null==e?r=I>=s||s>=B?u(r,s):f(r,s,"0"):(o(e,2,k.length,"Base"),r=P(f(r,s,"0"),10,e,i,!0)),0>i&&n.c[0]&&(r="-"+r)),r},_.valueOf=_.toJSON=function(){var e,r=this,n=r.e;return null===n?r.toString():(e=t(r.c),e=I>=n||n>=B?u(e,n):f(e,n,"0"),r.s<0?"-"+e:e)},_._isBigNumber=!0,null!=e&&c.set(e),c}function n(e){var r=0|e;return e>0||e===r?r:r-1}function t(e){for(var r,n,t=1,i=e.length,o=e[0]+"";i>t;){for(r=e[t++]+"",n=m-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function i(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,c=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=0>s,t=f==c,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>c^n?1:-1;for(u=(f=i.length)<(c=o.length)?f:c,s=0;u>s;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==c?0:f>c^n?1:-1}function o(e,r,n,t){if(r>e||e>n||e!==(0>e?a(e):h(e)))throw Error(g+(t||"Argument")+("number"==typeof e?r>e||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function s(e){return"[object Array]"==Object.prototype.toString.call(e)}function u(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(0>r?"e":"e+")+r}function f(e,r,n){var t,i;if(0>r){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else t>r&&(e=e.slice(0,r)+"."+e.slice(r));return e}var c,l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,h=Math.floor,g="[BigNumber Error] ",p=g+"Number primitive has more than 15 significant digits: ",d=1e14,m=14,w=9007199254740991,v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],N=1e7,O=1e9;c=r(),c["default"]=c.BigNumber=c,"function"==typeof define&&define.amd?define(function(){return c}):"undefined"!=typeof module&&module.exports?module.exports=c:(e||(e="undefined"!=typeof self?self:Function("return this")()),e.BigNumber=c)}(this);

/**
 * UAParser.js v0.7.17
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.17",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[VENDOR,"ZTE"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android.+)[;\/].+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/*!
* dependencyLibs/inputmask.dependencyLib.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "../global/window", "../global/document" ], factory) : "object" == typeof exports ? module.exports = factory(require("../global/window"), require("../global/document")) : window.dependencyLib = factory(window, document);
}(function(window, document) {
    function indexOf(list, elem) {
        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
        return -1;
    }
    function isWindow(obj) {
        return null != obj && obj === obj.window;
    }
    function isArraylike(obj) {
        var length = "length" in obj && obj.length, ltype = typeof obj;
        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj));
    }
    function isValidElement(elem) {
        return elem instanceof Element;
    }
    function DependencyLib(elem) {
        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (void 0 !== elem && null !== elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), 
        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
    }
    return DependencyLib.prototype = {
        on: function(events, handler) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split(".");
                !function(ev, namespace) {
                    elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), 
                    eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], 
                    eventRegistry[ev][namespace].push(handler);
                }(nsEvent[0], nsEvent[1] || "global");
            }
            return this;
        },
        off: function(events, handler) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = function(ev, namespace) {
                var hndx, hndL, evts = [];
                if (ev.length > 0) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                    ev: ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler: eventRegistry[ev][namespace][hndx]
                }); else evts.push({
                    ev: ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler: handler
                }); else if (namespace.length > 0) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, 
                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                }); else evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: handler
                });
                return evts;
            }(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) !function(ev, namespace, handler) {
                if (ev in eventRegistry == 1) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), 
                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
            }(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
            return this;
        },
        trigger: function(events) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                if (void 0 !== document && "global" === namespace) {
                    var evnt, i, params = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: Array.prototype.slice.call(arguments, 1)
                    };
                    if (document.createEvent) {
                        try {
                            evnt = new CustomEvent(ev, params);
                        } catch (e) {
                            (evnt = document.createEvent("CustomEvent")).initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                        }
                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
                    } else (evnt = document.createEventObject()).eventType = ev, events.type && DependencyLib.extend(evnt, events), 
                    elem.fireEvent("on" + evnt.eventType, evnt);
                } else if (void 0 !== eventRegistry[ev]) if (arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]), 
                "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);
            }
            return this;
        }
    }, DependencyLib.isFunction = function(obj) {
        return "function" == typeof obj;
    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {
        return null == arr ? -1 : indexOf(arr, elem);
    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {
        return "object" == typeof obj && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
    }, DependencyLib.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
        i++), "object" == typeof target || DependencyLib.isFunction(target) || (target = {}), 
        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
        target !== (copy = options[name]) && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, 
        clone = src && DependencyLib.isArray(src) ? src : []) : clone = src && DependencyLib.isPlainObject(src) ? src : {}, 
        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
        return target;
    }, DependencyLib.each = function(obj, callback) {
        var i = 0;
        if (isArraylike(obj)) for (var length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++) ; else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
        return obj;
    }, DependencyLib.data = function(owner, key, value) {
        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
        owner.__data = owner.__data || {}, owner.__data[key] = value;
    }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {
        params = params || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var evt = document.createEvent("CustomEvent");
        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
        evt;
    }, DependencyLib.Event.prototype = window.Event.prototype), DependencyLib;
});

/*!
* inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "./dependencyLibs/inputmask.dependencyLib", "./global/window", "./global/document" ], factory) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = factory(window.dependencyLib || jQuery, window, document);
}(function($, window, document, undefined) {
    function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
        this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, 
        !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, 
        alias && (options.alias = alias)), this.opts = $.extend(!0, {}, this.defaults, options), 
        this.noMasksCache = options && options.definitions !== undefined, this.userOptions = options || {}, 
        this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
    }
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), 
        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
        !1);
    }
    function generateMaskSet(opts, nocache) {
        function generateMask(mask, metadata, opts) {
            var regexMask = !1;
            if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, 
            mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
            opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
            }
            var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
            return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
                mask: mask,
                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                validPositions: {},
                _buffer: undefined,
                buffer: undefined,
                tests: {},
                excludes: {},
                metadata: metadata,
                maskLength: undefined
            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
            masksetDefinition;
        }
        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                var altMask = opts.groupmarker[0];
                return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                    altMask.length > 1 && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]), 
                    msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                }), altMask += opts.groupmarker[1], generateMask(altMask, opts.mask, opts);
            }
            opts.mask = opts.mask.pop();
        }
        return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
    }
    function isInputEventSupported(eventName) {
        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
        return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), 
        el = null, isSupported;
    }
    function maskScope(actionObj, maskset, opts) {
        function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
            minimalPos = minimalPos || 0;
            var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
            do {
                !0 === baseOnInput && getMaskSet().validPositions[pos] ? (test = (testPos = getMaskSet().validPositions[pos]).match, 
                ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (test = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).match, 
                ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), 
                pos++;
            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), !1 === includeMode && getMaskSet().maskLength !== undefined || (getMaskSet().maskLength = pos + 1), 
            maskTemplate;
        }
        function getMaskSet() {
            return maskset;
        }
        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
            closestTo === undefined && (closestTo = -1);
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                psNdx >= closestTo && (after = psNdx));
            }
            return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;
        }
        function stripValidPositions(start, end, nocheck, strict) {
            var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;
            for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {
                var posMatch = getMaskSet().validPositions[pos];
                if (posMatch !== undefined && null === posMatch.match.fn) {
                    var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];
                    return prevMatch !== undefined && nextMatch !== undefined;
                }
                return !1;
            }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(undefined, !0), strict, opts)) || delete getMaskSet().validPositions[i]);
            for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {
                for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;
                if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {
                    var t = getTestTemplate(i);
                    !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), 
                    getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], 
                    i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], 
                    i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                }
            }
            resetMaskSet(!0);
        }
        function determineTestTemplate(pos, tests, guessNextBest) {
            for (var testPos, altTest = getTest(pos = pos > 0 ? pos - 1 : 0), altArr = altTest.alternation !== undefined ? altTest.locator[altTest.alternation].toString().split(",") : [], ndx = 0; ndx < tests.length && (!((testPos = tests[ndx]).match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (altTest.alternation === undefined || altTest.alternation !== testPos.alternation || testPos.locator[altTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[altTest.alternation].toString().split(","), altArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;
            return testPos;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function getTest(pos) {
            return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
        }
        function positionCanMatchDefinition(pos, def) {
            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                valid = !0;
                break;
            }
            return valid;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                        return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
                            if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                        }), firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if ((getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                            if (lmnt.mloc[alternateNdx]) return bestMatch = lmnt, !1;
                            var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                            indexPos = ndxPos);
                        }), bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                            return (bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator).slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                        }
                        return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                    }
                    function isSubsetOf(source, target) {
                        function expand(pattern) {
                            for (var start, end, expanded = [], i = 0, l = pattern.length; i < l; i++) if ("-" === pattern.charAt(i)) for (end = pattern.charCodeAt(i + 1); ++start < end; ) expanded.push(String.fromCharCode(start)); else start = pattern.charCodeAt(i), 
                            expanded.push(pattern.charAt(i));
                            return expanded.join("");
                        }
                        return opts.regex && null !== source.match.fn && null !== target.match.fn ? -1 !== expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) : source.match.def === target.match.nativeDef;
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                        if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && -1 === targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation])) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[targetMatch.alternation];
                            if (locNdx !== undefined) {
                                if ("string" == typeof locNdx && (locNdx = locNdx.split(",")[0]), targetMatch.mloc[locNdx] === undefined && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()), 
                                altMatch !== undefined) {
                                    for (var ndx in altMatch.mloc) "string" == typeof ndx && (ndx = ndx.split(",")[0]), 
                                    targetMatch.mloc[ndx] === undefined && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                    targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                                }
                                return !0;
                            }
                            targetMatch.alternation = undefined;
                        }
                        return !1;
                    }
                    if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    if (testPos === pos && match.matches === undefined) return matches.push({
                        match: match,
                        locator: loopNdx.reverse(),
                        cd: cacheDependency,
                        mloc: {}
                    }), !0;
                    if (match.matches !== undefined) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                insertStop = !0, testPos = pos;
                            }
                        } else if (match.isAlternator) {
                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (-1 === altIndex || "string" == typeof altIndex) {
                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx.toString());
                                if (getMaskSet().excludes[pos]) {
                                    for (var altIndexArrClone = altIndexArr.slice(), i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                                    0 === altIndexArr.length && (getMaskSet().excludes[pos] = undefined, altIndexArr = altIndexArrClone);
                                }
                                (!0 === opts.keepStatic && currentPos > 0 || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) && (altIndexArr = altIndexArr.slice(0, 1));
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                    alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) && (match = !0), 
                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt, setMergeLocators(altMatch);
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if ("string" != typeof altIndex || altMatch.alternation !== undefined && -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                    dropMatch = !0, setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                }
                                                if (isSubsetOf(altMatch, altMatch2)) {
                                                    setMergeLocators(altMatch, altMatch2), dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                    break;
                                                }
                                                if (isSubsetOf(altMatch2, altMatch)) {
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                }
                                                if (function(source, target) {
                                                    return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                                                }(altMatch, altMatch2)) {
                                                    setMergeLocators(altMatch, altMatch2) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), 
                                                    -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), 
                                                    dropMatch = !0, malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                    break;
                                                }
                                            }
                                        }
                                        dropMatch || malternateMatches.push(altMatch);
                                    }
                                }
                                matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, 
                                match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                            if (match) return !0;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {
                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, 
                                isFirstMatch(latestMatch, tokenGroup)) {
                                    if (qndx > qt.quantifier.min - 1) {
                                        insertStop = !0, testPos = pos;
                                        break;
                                    }
                                    return !0;
                                }
                                return !0;
                            }
                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                    } else testPos++;
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match;
                    if (testPos > pos) break;
                }
            }
            var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            if (pos > -1) {
                if (ndxIntlzr === undefined) {
                    for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;
                    test !== undefined && previousPos > -1 && (ndxInitializer = function(pos, tests) {
                        var locator = [];
                        return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(pos, tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function(ndx, tst) {
                            if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                        })), locator;
                    }(previousPos, test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return getMaskSet().tests[pos];
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length && !(resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos); mtndx++) ;
            }
            return (0 === matches.length || insertStop) && matches.push({
                match: {
                    fn: null,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: cacheDependency
            }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? $.extend(!0, [], matches) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), 
            getMaskSet().tests[pos]);
        }
        function getBufferTemplate() {
            return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
            getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
            getMaskSet()._buffer;
        }
        function getBuffer(noCache) {
            return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), 
            getMaskSet().buffer;
        }
        function refreshFromBuffer(start, end, buffer) {
            var i, p;
            if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
            for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
                var valResult = isValid(p, buffer[i], !0, !0);
                !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
            }
        }
        function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = getMaskSet().validPositions[pos - 1];
                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                break;

              default:
                if ($.isFunction(opts.casing)) {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                isMatch = !0;
                break;
            }
            return isMatch;
        }
        function alternate(pos, c, strict, fromSetValid, lAltPos) {
            var lastAlt, alternation, altPos, prevAltPos, i, validPos, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1;
            for (lAltPos = lAltPos !== undefined ? lAltPos : getLastValidPosition(), prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
                if (prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, 
                prevAltPos = altPos;
            }
            if (alternation !== undefined) {
                decisionPos = parseInt(lastAlt);
                var decisionTaker = prevAltPos.locator[prevAltPos.alternation];
                decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]), getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [], 
                !0 !== pos && getMaskSet().excludes[decisionPos].push(decisionTaker.toString());
                var validInputsClone = [], staticInputsBeforePos = 0;
                for (i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputsClone.push(validPos.input) : i < pos && staticInputsBeforePos++, 
                delete getMaskSet().validPositions[i];
                for (;getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10; ) {
                    var posOffset = -1 * staticInputsBeforePos, validInputs = validInputsClone.slice();
                    for (getMaskSet().tests[decisionPos] = undefined, resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {
                        var input = validInputs.shift();
                        if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
                    }
                    if (isValidRslt && c !== undefined) {
                        var targetLvp = getLastValidPosition(pos) + 1;
                        for (i = decisionPos; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + posOffset && posOffset++;
                        isValidRslt = isValid((pos += posOffset) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                    }
                    if (isValidRslt) break;
                    if (resetMaskSet(), prevAltPos = getTest(decisionPos), getMaskSet().validPositions = $.extend(!0, {}, validPsClone), 
                    !getMaskSet().excludes[decisionPos]) {
                        isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                        break;
                    }
                    if ((decisionTaker = prevAltPos.locator[prevAltPos.alternation]).length > 0 && (decisionTaker = decisionTaker.split(",")[0]), 
                    -1 !== getMaskSet().excludes[decisionPos].indexOf(decisionTaker.toString())) {
                        isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                        break;
                    }
                    for (getMaskSet().excludes[decisionPos].push(decisionTaker.toString()), i = decisionPos; i < getLastValidPosition(undefined, !0) + 1; i++) delete getMaskSet().validPositions[i];
                }
            }
            return getMaskSet().excludes[decisionPos] = undefined, isValidRslt;
        }
        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
            function isSelection(posObj) {
                var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
                return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
            }
            function _isValid(position, c, strict) {
                var rslt = !1;
                return $.each(getTests(position), function(ndx, tst) {
                    var test = tst.match;
                    if (getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                        c: getPlaceholder(position, test, !0) || test.def,
                        pos: position
                    })) {
                        var elem = rslt.c !== undefined ? rslt.c : c;
                        elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                        var validatedPos = position, possibleModifiedBuffer = getBuffer();
                        if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), 
                        $.each(rslt.remove.sort(function(a, b) {
                            return b - a;
                        }), function(ndx, lmnt) {
                            stripValidPositions(lmnt, lmnt + 1, !0);
                        })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), 
                        $.each(rslt.insert.sort(function(a, b) {
                            return a - b;
                        }), function(ndx, lmnt) {
                            isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                        })), rslt.refreshFromBuffer) {
                            var refresh = rslt.refreshFromBuffer;
                            if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), 
                            rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), 
                            !1;
                            if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), 
                            !1;
                        } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, 
                        refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), 
                        !1;
                        return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), 
                        setValidPosition(validatedPos, $.extend({}, tst, {
                            input: casing(elem, test, validatedPos)
                        }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                    }
                }), rslt;
            }
            function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {
                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);
                    for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                    getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;
                    for (i = j = pos; i <= lvp; i++) {
                        var t = positionsClone[i];
                        if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {
                            if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), 
                            getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), 
                            j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                var result = isValid(posMatch, t.input, !0, !0);
                                valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, 
                                needsValidation = !0;
                            } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;
                            if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), 
                            valid) break;
                        }
                        if (!valid) break;
                    }
                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), 
                    resetMaskSet(!0), !1;
                } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                return resetMaskSet(!0), !0;
            }
            function fillMissingNonMask(maskPos) {
                for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;
                var testTemplate, testsFromPos;
                for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && ("" === (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice())[testsFromPos.length - 1].match.def && testsFromPos.pop(), 
                (testTemplate = determineTestTemplate(pndx, testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));
            }
            strict = !0 === strict;
            var maskPos = pos;
            pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
            var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
            if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), 
            !0 === result) {
                if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), 
                maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), 
                (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
                    var currentPosValid = getMaskSet().validPositions[maskPos];
                    if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                        if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {
                            !function(originalPos, newPos) {
                                var vp = getMaskSet().validPositions[newPos];
                                if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
                                    var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(ps, tests, !0), equality = -1;
                                    "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {
                                        for (var i = 0; i < tll; i++) {
                                            if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                                var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];
                                                targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                                break;
                                            }
                                            equality < i && (equality = i, bestMatch = tst);
                                        }
                                    }), (bestMatch = $.extend({}, bestMatch, {
                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                    })).generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, 
                                    _isValid(newPos, vp.input, !0);
                                }
                            }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;
                            break;
                        }
                    } else result = {
                        caret: seekNext(maskPos)
                    };
                }
                !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = alternate(maskPos, c, strict, fromSetValid)), 
                !0 === result && (result = {
                    pos: maskPos
                });
            }
            if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
                var postResult = opts.postValidation(getBuffer(!0), result, opts);
                if (postResult !== undefined) {
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = !0 === postResult ? result : postResult;
                }
            }
            return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), 
            getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
        }
        function isMask(pos, strict) {
            var test = getTestTemplate(pos).match;
            if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;
            if (!0 !== strict && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
            }
            return !1;
        }
        function seekNext(pos, newBlock) {
            var maskL = getMaskSet().maskLength;
            if (pos >= maskL) return maskL;
            var position = pos;
            for (getTests(maskL + 1).length > 1 && (maskL = getMaskTemplate(!0, maskL + 1, !1).kength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var tests, position = pos;
            if (position <= 0) return 0;
            for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
            return position;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                        buffer = getBuffer(!0);
                    }
                    caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
                }
            }
            input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : caret(input, caretPos), 
            !0 === triggerInputEvent && (skipInputEvent = !0, $(input).trigger("input")));
        }
        function getPlaceholder(pos, test, returnPL) {
            if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            if (null === test.fn) {
                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                    var prevTest, tests = getTests(pos), staticAlternations = [];
                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                    null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            function isTemplateMatch(ndx, charCodes) {
                return -1 !== getMaskTemplate(!0, 0, !1).slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || " " === getTest(ndx).match.nativeDef && getTest(ndx + 1).match.nativeDef === charCodes.charAt(0));
            }
            var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
            if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {
                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), 
                initialNdx = seekNext(initialNdx));
            }
            -1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, 
            $.each(inputValue, function(ndx, charCode) {
                if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {
                    var keypress = new $.Event("_checkval");
                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                    var lvp = getLastValidPosition(undefined, !0), prevTest = getTest(lvp), nextTest = getTestTemplate(lvp + 1, prevTest ? prevTest.locator.slice() : undefined, lvp);
                    if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                        (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos)) && (initialNdx = pos + 1, 
                        charCodes = "");
                    } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                    writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, !1);
                }
            }), writeOut && writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
        }
        function unmaskedvalue(input) {
            if (input) {
                if (input.inputmask === undefined) return input.value;
                input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
            }
            var umValue = [], vps = getMaskSet().validPositions;
            for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                //return !0 === notranslate || !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || (pos = input.inputmask.__valueGet.call(input).length - pos), 
                return !0 === notranslate || !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || (pos = input.inputmask._valueGet().length - pos), 
                pos;
            }
            var range;
            if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, 
            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
            end = range.endOffset) : document.selection && document.selection.createRange && (end = (begin = 0 - (range = document.selection.createRange()).duplicate().moveStart("character", -input.inputmask._valueGet().length)) + range.text.length), 
            {
                begin: translatePosition(begin),
                end: translatePosition(end)
            };
            if ($.isArray(begin) && (end = isRTL ? begin[0] : begin[1], begin = isRTL ? begin[1] : begin[0]), 
            begin.begin !== undefined && (end = isRTL ? begin.begin : begin.end, begin = isRTL ? begin.end : begin.begin), 
            "number" == typeof begin) {
                begin = translatePosition(begin), end = "number" == typeof (end = translatePosition(end)) ? end : begin;
                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, !1 === opts.insertMode && begin === end && end++, 
                input.inputmask.caretPos = {
                    begin: begin,
                    end: end
                }, input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                    if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                    range.collapse(!0);
                    var sel = window.getSelection();
                    sel.removeAllRanges(), sel.addRange(range);
                } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), 
                range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                renderColorMask(input, {
                    begin: begin,
                    end: end
                });
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;
            for (pos = lvp + 1; pos < buffer.length; pos++) ndxIntlzr = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).locator.slice(), 
            positions[pos] = $.extend(!0, {}, testPos);
            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp && (((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : undefined
            } : bl;
        }
        function clearOptionalTail(buffer) {
            for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;
            for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;
            return buffer.splice(rl), buffer;
        }
        function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if ("*" === opts.repeat) return undefined;
            var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = !0;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate(i).match;
                    if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                        complete = !1;
                        break;
                    }
                }
            }
            return complete;
        }
        function handleRemove(input, k, pos, strict, fromIsValid) {
            if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), 
            isRTL)) {
                var pend = pos.end;
                pos.end = pos.begin, pos.begin = pend;
            }
            if (k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), 
            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, 
            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), 
            stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && opts.keepStatic) {
                var result = alternate(!0);
                result && (pos.begin = result.caret !== undefined ? result.caret : seekNext(result.pos.begin ? result.pos.begin : result.pos));
            }
            var lvp = getLastValidPosition(pos.begin, !0);
            if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, 
            !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;
        }
        function initializeColorMask(input) {
            function findCaretPos(clientx) {
                var caretPos, e = document.createElement("span");
                for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
                e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, 
                e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", 
                e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                    if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                        var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                        e.innerHTML = inputText.charAt(caretPos), caretPos = (offset1 -= e.offsetWidth / 3) < offset2 ? caretPos - 1 : caretPos;
                        break;
                    }
                    previousWidth = e.offsetWidth;
                }
                return document.body.removeChild(e), caretPos;
            }
            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");
            template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, 
            colorMask = document.createElement("div"), input.inputmask.colorMask = colorMask, 
            colorMask.className = "im-colormask", input.parentNode.insertBefore(colorMask, input), 
            input.parentNode.removeChild(input), colorMask.appendChild(template), colorMask.appendChild(input), 
            input.style.left = template.offsetLeft + "px", $(input).on("click", function(e) {
                return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);
            }), $(input).on("keydown", function(e) {
                e.shiftKey || !1 === opts.insertMode || setTimeout(function() {
                    renderColorMask(input);
                }, 0);
            });
        }
        function renderColorMask(input, caretPos, clear) {
            function setEntry(entry) {
                if (entry === undefined && (entry = ""), isStatic || null !== test.fn && testPos.input !== undefined) if (isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def)) {
                    isStatic = !1;
                    var mtl = maskTemplate.length;
                    maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>", maskTemplate.push(entry);
                } else maskTemplate.push(entry); else isStatic = !0, maskTemplate.push("<span class='im-static'>" + entry);
            }
            var test, testPos, ndxIntlzr, maskTemplate = [], isStatic = !1, pos = 0;
            if (colorMask !== undefined) {
                var buffer = getBuffer();
                if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
                    begin: caretPos,
                    end: caretPos
                }), !0 !== clear) {
                    var lvp = getLastValidPosition();
                    do {
                        getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), setEntry(buffer[pos])) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && setEntry(getPlaceholder(pos, test))), 
                        pos++;
                    } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);
                    isStatic && setEntry(), document.activeElement === input && (maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), 
                    maskTemplate.splice(caretPos.end + 1, 0, "</mark>"));
                }
                var template = colorMask.getElementsByTagName("div")[0];
                template.innerHTML = maskTemplate.join(""), input.inputmask.positionColorMask(input, template);
            }
        }
        maskset = maskset || this.maskset, opts = opts || this.opts;
        var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, trackCaret = !1, EventRuler = {
            on: function(input, eventName, eventHandler) {
                var ev = function(e) {
                    var that = this;
                    if (that.inputmask === undefined && "FORM" !== this.nodeName) {
                        var imOpts = $.data(that, "_inputmask_opts");
                        imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
                    } else {
                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(that.disabled || that.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                            switch (e.type) {
                              case "input":
                                if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();
                                mobile && (trackCaret = !0);
                                break;

                              case "keydown":
                                skipKeyPressEvent = !1, skipInputEvent = !1;
                                break;

                              case "keypress":
                                if (!0 === skipKeyPressEvent) return e.preventDefault();
                                skipKeyPressEvent = !0;
                                break;

                              case "click":
                                if (iemobile || iphone) {
                                    var args = arguments;
                                    return setTimeout(function() {
                                        eventHandler.apply(that, args);
                                    }, 0), !1;
                                }
                            }
                            var returnVal = eventHandler.apply(that, arguments);
                            return trackCaret && (trackCaret = !1, setTimeout(function() {
                                caret(that, that.inputmask.caretPos, undefined, !0);
                            })), !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                        }
                        e.preventDefault();
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
            },
            off: function(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, 
                    $.each(events, function(eventName, evArr) {
                        for (;evArr.length > 0; ) {
                            var ev = evArr.pop();
                            -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                        }
                        delete input.inputmask.events[eventName];
                    });
                }
            }
        }, EventHandlers = {
            keydownEvent: function(e) {
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), 
                handleRemove(0, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), 
                input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = seekNext(getLastValidPosition());
                    opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, 
                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 
                $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), 
                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), 
                pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {
                    var caretPos = caret(input);
                    caret(input, caretPos.begin);
                }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {
                    var caretPos = caret(input);
                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
            },
            keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                setTimeout(function() {
                    $input.trigger("change");
                }, 0)), !0;
                if (k) {
                    46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                    var forwardPosition, pos = checkval ? {
                        begin: ndx,
                        end: ndx
                    } : caret(input), c = String.fromCharCode(k);
                    getMaskSet().writeOutBuffer = !0;
                    var valResult = isValid(pos, c, strict);
                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos), 
                    getMaskSet().p = forwardPosition), forwardPosition = opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, 
                    !1 !== writeOut && (setTimeout(function() {
                        opts.onKeyValidation.call(input, k, valResult, opts);
                    }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
                        var buffer = getBuffer();
                        writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval), !0 !== checkval && setTimeout(function() {
                            !0 === isComplete(buffer) && $input.trigger("complete");
                        }, 0);
                    }
                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                    valResult;
                }
            },
            pasteEvent: function(e) {
                var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), 
                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                    if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                }
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                    pasteValue || (pasteValue = inputValue);
                }
                return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), 
                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 
                !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();
            },
            inputFallBackEvent: function(e) {
                var input = this, inputValue = input.inputmask._valueGet();
                if (getBuffer().join("") !== inputValue) {
                    var caretPos = caret(input);
                    if (inputValue = function(input, inputValue, caretPos) {
                        return "." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), 
                        inputValue = inputValue.join("")), inputValue;
                    }(0, inputValue, caretPos), inputValue = function(input, inputValue, caretPos) {
                        if (iemobile) {
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (1 === inputChar.length) {
                                var iv = inputValue.split("");
                                iv.splice(caretPos.begin, 0, inputChar), inputValue = iv.join("");
                            }
                        }
                        return inputValue;
                    }(0, inputValue, caretPos), getBuffer().join("") !== inputValue) {
                        var buffer = getBuffer().join(""), offset = inputValue.length > buffer.length ? -1 : 0, frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin + offset), backBufferPart = buffer.substr(caretPos.begin + offset), selection = caretPos, entries = "", isEntry = !1;
                        if (frontPart !== frontBufferPart) {
                            for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) ;
                            isEntry && (0 === offset && (selection.begin = i), entries += frontPart.slice(i, selection.end));
                        }
                        if (backPart !== backBufferPart && (backPart.length > backBufferPart.length ? entries += backPart.slice(0, 1) : backPart.length < backBufferPart.length && (selection.end += backBufferPart.length - backPart.length, 
                        isEntry || "" === opts.radixPoint || "" !== backPart || frontPart.charAt(selection.begin + offset - 1) !== opts.radixPoint || (selection.begin--, 
                        entries = opts.radixPoint))), writeBuffer(input, getBuffer(), {
                            begin: selection.begin + offset,
                            end: selection.end + offset
                        }), entries.length > 0) $.each(entries.split(""), function(ndx, entry) {
                            var keypress = new $.Event("keypress");
                            keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                        }); else {
                            selection.begin === selection.end - 1 && (selection.begin = seekPrevious(selection.begin + 1), 
                            selection.begin === selection.end - 1 ? caret(input, selection.begin) : caret(input, selection.begin, selection.end));
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, keydown), 
                            !1 === opts.insertMode && caret(input, caret(input).begin - 1);
                        }
                        e.preventDefault();
                    }
                }
            },
            setValueEvent: function(e) {
                this.inputmask.refreshValue = !1;
                var input = this, value = input.inputmask._valueGet(!0);
                $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), 
                undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
            },
            focusEvent: function(e) {
                var input = this, nptValue = input.inputmask._valueGet();
                opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), 
                !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), 
                EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function(e) {
                var input = this;
                if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                    var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                    nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), 
                    writeBuffer(input, buffer));
                }
            },
            clickEvent: function(e, tabbed) {
                function doRadixFocus(clickPos) {
                    if ("" !== opts.radixPoint) {
                        var vps = getMaskSet().validPositions;
                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1)) return !0;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (-1 !== radixPos) {
                                for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                return !0;
                            }
                        }
                    }
                    return !1;
                }
                var input = this;
                setTimeout(function() {
                    if (document.activeElement === input) {
                        var selectedCaret = caret(input);
                        if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                        selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                          case "none":
                            break;

                          case "radixFocus":
                            if (doRadixFocus(selectedCaret.begin)) {
                                var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                break;
                            }

                          default:
                            var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);
                            if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {
                                var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {
                                    var newPos = seekNext(lastPosition);
                                    (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                                }
                                caret(input, lastPosition);
                            }
                        }
                    }
                }, 0);
            },
            dblclickEvent: function(e) {
                var input = this;
                setTimeout(function() {
                    caret(input, 0, seekNext(getLastValidPosition()));
                }, 0);
            },
            cutEvent: function(e) {
                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                document.execCommand && document.execCommand("copy"), handleRemove(0, Inputmask.keyCode.DELETE, pos), 
                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), 
                input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
            },
            blurEvent: function(e) {
                var $input = $(this), input = this;
                if (input.inputmask) {
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                    "" === nptValue && colorMask === undefined || (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                    !1 === isComplete(buffer) && (setTimeout(function() {
                        $input.trigger("incomplete");
                    }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                    writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), 
                    $input.trigger("change"));
                }
            },
            mouseenterEvent: function(e) {
                var input = this;
                mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
            },
            submitEvent: function(e) {
                undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                setTimeout(function() {
                    writeBuffer(el, getBuffer());
                }, 0));
            },
            resetEvent: function(e) {
                el.inputmask.refreshValue = !0, setTimeout(function() {
                    $el.trigger("setvalue");
                }, 0);
            }
        };
        Inputmask.prototype.positionColorMask = function(input, template) {
            input.style.left = template.offsetLeft + "px";
        };
        var valueBuffer;
        if (actionObj !== undefined) switch (actionObj.action) {
          case "isComplete":
            return el = actionObj.el, isComplete(getBuffer());

          case "unmaskedvalue":
            return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, 
            valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), 
            checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), 
            unmaskedvalue(el);

          case "mask":
            !function(elem) {
                EventRuler.off(elem);
                var isSupported = function(input, opts) {
                    var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
                    if (!isSupported) if ("INPUT" === input.tagName) {
                        var el = document.createElement("input");
                        el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                    } else isSupported = "partial";
                    return !1 !== isSupported ? function(npt) {
                        function getter() {
                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                        }
                        function setter(value) {
                            valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                        }
                        var valueGet, valueSet;
                        if (!npt.inputmask.__valueGet) {
                            if (!0 !== opts.noValuePatching) {
                                if (Object.getOwnPropertyDescriptor) {
                                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(object) {
                                        return object.__proto__;
                                    } : function(object) {
                                        return object.constructor.prototype;
                                    });
                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                    valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    })) : "INPUT" !== npt.tagName && (valueGet = function() {
                                        return this.textContent;
                                    }, valueSet = function(value) {
                                        this.textContent = value;
                                    }, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    }));
                                } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                npt.__defineSetter__("value", setter));
                                npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                            }
                            npt.inputmask._valueGet = function(overruleRTL) {
                                return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                            }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                            }, valueGet === undefined && (valueGet = function() {
                                return this.value;
                            }, valueSet = function(value) {
                                this.value = value;
                            }, function(type) {
                                if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                        return elem.value;
                                    }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                        return elem.value = value, elem;
                                    };
                                    $.valHooks[type] = {
                                        get: function(elem) {
                                            if (elem.inputmask) {
                                                if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                var result = valhookGet(elem);
                                                return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                            }
                                            return valhookGet(elem);
                                        },
                                        set: function(elem, value) {
                                            var result, $elem = $(elem);
                                            return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), 
                                            result;
                                        },
                                        inputmaskpatch: !0
                                    };
                                }
                            }(npt.type), function(npt) {
                                EventRuler.on(npt, "mouseenter", function(event) {
                                    var $input = $(this);
                                    this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");
                                });
                            }(npt));
                        }
                    }(input) : input.inputmask = undefined, isSupported;
                }(elem, opts);
                if (!1 !== isSupported && (el = elem, $el = $(el), -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), 
                !0 === opts.colorMask && initializeColorMask(el), mobile && ("inputmode" in el && (el.inputmode = opts.inputmode, 
                el.setAttribute("inputmode", opts.inputmode)), !0 === opts.disablePredictiveText && ("autocorrect" in el ? el.autocorrect = !1 : (!0 !== opts.colorMask && initializeColorMask(el), 
                el.type = "password"))), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), 
                EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), 
                EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), 
                EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), 
                EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                mobile || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), 
                EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), 
                EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);
                    "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                    var buffer = getBuffer().slice();
                    undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), 
                    opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                    writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
                }
            }(el);
            break;

          case "format":
            return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), 
            checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {
                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                metadata: maskScope.call(this, {
                    action: "getmetadata"
                }, maskset, opts)
            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

          case "isValid":
            actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;
            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

          case "getemptymask":
            return getBufferTemplate().join("");

          case "remove":
            if (el && el.inputmask) {
                $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), 
                EventRuler.off(el), el.inputmask.colorMask && ((colorMask = el.inputmask.colorMask).removeChild(el), 
                colorMask.parentNode.insertBefore(el, colorMask), colorMask.parentNode.removeChild(colorMask));
                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                    get: el.inputmask.__valueGet,
                    set: el.inputmask.__valueSet,
                    configurable: !0
                }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;
            }
            return el;

          case "getmetadata":
            if ($.isArray(maskset.metadata)) {
                var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                return $.each(maskset.metadata, function(ndx, mtdt) {
                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                }), maskTarget;
            }
            return maskset.metadata;
        }
    }
    var ua = navigator.userAgent, mobile = isInputEventSupported("touchstart"), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
    return Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: [ "[", "]" ],
            quantifiermarker: [ "{", "}" ],
            groupmarker: [ "(", ")" ],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function(pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: undefined,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: [ "text", "tel", "password", "search" ],
            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
            isComplete: null,
            canClearPosition: $.noop,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: undefined,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            disablePredictiveText: !1,
            importDataAttributes: !0
        },
        definitions: {
            "9": {
                validator: "[0-9１-９]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
            }
        },
        aliases: {},
        masksCache: {},
        mask: function(elems) {
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                function importOption(option, optionData) {
                    null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                    userOptions[option] = optionData);
                }
                if (!0 === opts.importDataAttributes) {
                    var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                    if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(/'/g, '"'), 
                    dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                        optionData = undefined;
                        for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                            optionData = dataoptions[p];
                            break;
                        }
                    }
                    importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                    for (option in opts) {
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                        importOption(option, optionData);
                    }
                }
                return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), 
                ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), 
                opts.isRTL = !0), Object.keys(userOptions).length;
            }
            var that = this;
            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {
                var scopedOpts = $.extend(!0, {}, that.opts);
                if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, 
                    el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), 
                    el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                    el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                        action: "mask"
                    }));
                }
            }), elems && elems[0] ? elems[0].inputmask || this : this;
        },
        option: function(options, noremask) {
            return "string" == typeof options ? this.opts[options] : "object" == typeof options ? ($.extend(this.userOptions, options), 
            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function(value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "unmaskedvalue",
                value: value
            });
        },
        remove: function() {
            return maskScope.call(this, {
                action: "remove"
            });
        },
        getemptymask: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "getemptymask"
            });
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask;
        },
        isComplete: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "isComplete"
            });
        },
        getmetadata: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "getmetadata"
            });
        },
        isValid: function(value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "isValid",
                value: value
            });
        },
        format: function(value, metadata) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "format",
                value: value,
                metadata: metadata
            });
        },
        analyseMask: function(mask, regexMask, opts) {
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function insertTestDefinition(mtoken, element, position) {
                position = position !== undefined ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    optionality: mtoken.isOptional,
                    newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: undefined,
                    nativeDef: element
                }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function(ndx, lmnt) {
                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                        fn: null,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                        nativeDef: lmnt
                    });
                })), escaped = !1; else {
                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                    maskdef && !escaped ? mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                            this.test = maskdef.validator;
                        }() : new RegExp("."),
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element
                    }) : (mtoken.matches.splice(position++, 0, {
                        fn: null,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                        nativeDef: element
                    }), escaped = !1);
                }
            }
            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                    regexMask || (insertTestDefinition(token, opts.groupmarker[0], 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))), 
                    verifyGroupMarker(token);
                });
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                    currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                    }
                } else insertTestDefinition(currentToken, m);
            }
            function reverseTokens(maskToken) {
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {
                        return st === opts.optionalmarker[0] ? st = opts.optionalmarker[1] : st === opts.optionalmarker[1] ? st = opts.optionalmarker[0] : st === opts.groupmarker[0] ? st = opts.groupmarker[1] : st === opts.groupmarker[1] && (st = opts.groupmarker[0]), 
                        st;
                    }(maskToken.matches[match]);
                }
                return maskToken;
            }
            var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];
            for (regexMask && (opts.optionalmarker[0] = undefined, opts.optionalmarker[1] = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                if (m = match[0], regexMask) switch (m.charAt(0)) {
                  case "?":
                    m = "{0,1}";
                    break;

                  case "+":
                  case "*":
                    m = "{" + m + "}";
                }
                if (escaped) defaultCase(); else switch (m.charAt(0)) {
                  case opts.escapeChar:
                    escaped = !0, regexMask && defaultCase();
                    break;

                  case opts.optionalmarker[1]:
                  case opts.groupmarker[1]:
                    if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {
                        if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), 
                        currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                            alternator.matches[mndx].alternatorGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                        }
                    } else currentToken.matches.push(openingToken); else defaultCase();
                    break;

                  case opts.optionalmarker[0]:
                    openenings.push(new MaskToken(!1, !0));
                    break;

                  case opts.groupmarker[0]:
                    openenings.push(new MaskToken(!0));
                    break;

                  case opts.quantifiermarker[0]:
                    var quantifier = new MaskToken(!1, !1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                    if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                        min: mq0,
                        max: mq1
                    }, openenings.length > 0) {
                        var matches = openenings[openenings.length - 1].matches;
                        (match = matches.pop()).isGroup || ((groupToken = new MaskToken(!0)).matches.push(match), 
                        match = groupToken), matches.push(match), matches.push(quantifier);
                    } else (match = currentToken.matches.pop()).isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), 
                    (groupToken = new MaskToken(!0)).matches.push(match), match = groupToken), currentToken.matches.push(match), 
                    currentToken.matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    if (openenings.length > 0) {
                        var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                        lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();
                    } else lastMatch = currentToken.matches.pop();
                    if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                    lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                    openenings.push(alternator), lastMatch.openGroup) {
                        lastMatch.openGroup = !1;
                        var alternatorGroup = new MaskToken(!0);
                        alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
            return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
        }
    }, Inputmask.extendDefaults = function(options) {
        $.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function(definition) {
        $.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function(alias) {
        $.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function(value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function(value, options) {
        return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function(value, options) {
        return Inputmask(options).isValid(value);
    }, Inputmask.remove = function(elems) {
        $.each(elems, function(ndx, el) {
            el.inputmask && el.inputmask.remove();
        });
    }, Inputmask.escapeRegex = function(str) {
        var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
        return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
    }, Inputmask.keyCode = {
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        X: 88,
        CONTROL: 17
    }, Inputmask;
});

/*!
* inputmask.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "./dependencyLibs/inputmask.dependencyLib", "./inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    return Inputmask.extendDefinitions({
        A: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            casing: "upper"
        }
    }), Inputmask.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: "."
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                        chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 
                        new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    }
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function(pastedValue, opts) {
                return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    casing: "lower"
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), Inputmask;
});

/*!
* inputmask.date.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "./dependencyLibs/inputmask.dependencyLib", "./inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    function getTokenizer(opts) {
        if (!opts.tokenizer) {
            var tokens = [];
            for (var ndx in formatCode) -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
            opts.tokenizer = "(" + tokens.join("+|") + ")+?|.", opts.tokenizer = new RegExp(opts.tokenizer, "g");
        }
        return opts.tokenizer;
    }
    function isValidDate(dateParts, currentResult) {
        return (!isFinite(dateParts.day) || "29" == dateParts.day && !isFinite(dateParts.rawyear) || new Date(dateParts.date.getFullYear(), isFinite(dateParts.month) ? dateParts.month : dateParts.date.getMonth() + 1, 0).getDate() >= dateParts.day) && currentResult;
    }
    function isDateInRange(maskDate, opts) {
        var result = !0;
        return opts.min && opts.min.date.getTime() === opts.min.date.getTime() && (result = result && opts.min.date.getTime() <= maskDate.getTime()), 
        opts.max && opts.max.date.getTime() === opts.max.date.getTime() && (result = result && opts.max.date.getTime() >= maskDate.getTime()), 
        result;
    }
    function parse(format, dateObjValue, opts) {
        for (var match, mask = ""; match = getTokenizer(opts).exec(format); ) void 0 === dateObjValue ? mask += formatCode[match[0]] ? "(" + formatCode[match[0]][0] + ")" : match[0] : formatCode[match[0]] ? mask += formatCode[match[0]][3].call(dateObjValue.date) : mask += match[0];
        return mask;
    }
    function pad(val, len) {
        for (val = String(val), len = len || 2; val.length < len; ) val = "0" + val;
        return val;
    }
    function analyseMask(maskString, format, opts) {
        function extendYear(year) {
            var correctedyear = 4 === year.length ? year : new Date().getFullYear().toString().substr(0, 4 - year.length) + year;
            return opts.min && opts.min.year && opts.max && opts.max.year ? (correctedyear = correctedyear.replace(/[^0-9]/g, ""), 
            correctedyear = year.charAt(0) === opts.max.year.charAt(0) ? year.replace(/[^0-9]/g, "0") : correctedyear + opts.min.year.substr(correctedyear.length)) : correctedyear = correctedyear.replace(/[^0-9]/g, "0"), 
            correctedyear;
        }
        var targetProp, match, dateOperation, dateObj = {
            date: new Date(1, 0, 1)
        }, mask = maskString;
        if ("string" == typeof mask) {
            for (;match = getTokenizer(opts).exec(format); ) {
                var value = mask.slice(0, match[0].length);
                formatCode.hasOwnProperty(match[0]) && (targetProp = formatCode[match[0]][2], dateOperation = formatCode[match[0]][1], 
                function(dateObj, value, opts) {
                    "year" === targetProp ? (dateObj[targetProp] = extendYear(value), dateObj["raw" + targetProp] = value) : dateObj[targetProp] = opts.min && value.match(/[^0-9]/) ? opts.min[targetProp] : value, 
                    void 0 !== dateOperation && dateOperation.call(dateObj.date, "month" == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]);
                }(dateObj, value, opts)), mask = mask.slice(value.length);
            }
            return dateObj;
        }
    }
    var formatCode = {
        d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
        dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
            return pad(Date.prototype.getDate.call(this), 2);
        } ],
        ddd: [ "" ],
        dddd: [ "" ],
        m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
            return Date.prototype.getMonth.call(this) + 1;
        } ],
        mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
            return pad(Date.prototype.getMonth.call(this) + 1, 2);
        } ],
        mmm: [ "" ],
        mmmm: [ "" ],
        yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
            return pad(Date.prototype.getFullYear.call(this), 2);
        } ],
        yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
            return pad(Date.prototype.getFullYear.call(this), 4);
        } ],
        h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
        hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
            return pad(Date.prototype.getHours.call(this), 2);
        } ],
        hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
        H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
        HH: [ "[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
            return pad(Date.prototype.getHours.call(this), 2);
        } ],
        HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
        M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
        MM: [ "[0-5][0-9]", Date.prototype.setMinutes, "minutes", function() {
            return pad(Date.prototype.getMinutes.call(this), 2);
        } ],
        s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
        ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
            return pad(Date.prototype.getSeconds.call(this), 2);
        } ],
        l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
            return pad(Date.prototype.getMilliseconds.call(this), 3);
        } ],
        L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
            return pad(Date.prototype.getMilliseconds.call(this), 2);
        } ],
        t: [ "" ],
        tt: [ "" ],
        T: [ "" ],
        TT: [ "" ],
        Z: [ "" ],
        o: [ "" ],
        S: [ "" ]
    }, formatAlias = {
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };
    return Inputmask.extendAliases({
        datetime: {
            mask: function(opts) {
                return opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat, opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat, 
                opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat, 
                opts.placeholder = opts.placeholder !== Inputmask.prototype.defaults.placeholder ? opts.placeholder : opts.inputFormat, 
                opts.min = analyseMask(opts.min, opts.inputFormat, opts), opts.max = analyseMask(opts.max, opts.inputFormat, opts), 
                opts.regex = parse(opts.inputFormat, void 0, opts), null;
            },
            inputFormat: "isoDateTime",
            displayFormat: void 0,
            outputFormat: void 0,
            min: null,
            max: null,
            i18n: {
                dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
            },
            postValidation: function(buffer, currentResult, opts) {
                var result = currentResult, dateParts = analyseMask(buffer.join(""), opts.inputFormat, opts);
                return result && dateParts.date.getTime() === dateParts.date.getTime() && (result = (result = isValidDate(dateParts, result)) && isDateInRange(dateParts.date, opts)), 
                result;
            },
            onKeyDown: function(e, buffer, caretPos, opts) {
                var input = this;
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    for (var match, today = new Date(), date = ""; match = getTokenizer(opts).exec(opts.inputFormat); ) "d" === match[0].charAt(0) ? date += pad(today.getDate(), match[0].length) : "m" === match[0].charAt(0) ? date += pad(today.getMonth() + 1, match[0].length) : "yyyy" === match[0] ? date += today.getFullYear().toString() : "y" === match[0].charAt(0) && (date += pad(today.getYear(), match[0].length));
                    input.inputmask._valueSet(date), $(input).trigger("setvalue");
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts);
            },
            insertMode: !1
        }
    }), Inputmask;
});

/*!
* inputmask.phone.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "./dependencyLibs/inputmask.dependencyLib", "./inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    function maskSort(a, b) {
        var maska = (a.mask || a).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
        return maska.localeCompare(maskb);
    }
    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {
        function reduceVariations(masks, previousVariation, previousmaskGroup) {
            previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 
            "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
            for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], 
            maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
            for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }
        function rebuild(maskGroup) {
            var mask = "", submasks = [];
            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker[0] + maskGroup[ndx].join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1]) : submasks.push(ndx + rebuild(maskGroup[ndx]));
            return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker[0] + submasks.join(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]) + opts.groupmarker[1], 
            mask;
        }
        var maskGroups = {};
        return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (reduceVariations((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0])), 
        mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
    }, Inputmask.extendAliases({
        abstractphone: {
            groupmarker: [ "<", ">" ],
            countrycode: "",
            phoneCodes: [],
            keepStatic: 5,
            mask: function(opts) {
                return opts.definitions = {
                    "#": Inputmask.prototype.definitions[9]
                }, opts.phoneCodes.sort(maskSort);
            },
            onBeforeMask: function(value, opts) {
                var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                processedValue;
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue.replace(/[()#-]/g, "");
            },
            inputmode: "tel"
        }
    }), Inputmask;
});

/*!
* inputmask.numeric.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2018 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.0-91
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "./dependencyLibs/inputmask.dependencyLib", "./inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask, undefined) {
    function autoEscape(txt, opts) {
        for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
        return escapedTxt;
    }
    return Inputmask.extendAliases({
        numeric: {
            mask: function(opts) {
                if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), 
                opts.repeat = 0, opts.groupSeparator === opts.radixPoint && opts.digits && "0" !== opts.digits && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, 
                opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), 
                isFinite(opts.integerDigits))) {
                    var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;
                    opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), 
                    opts.integerDigits < 1 && (opts.integerDigits = "*");
                }
                opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), 
                "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), 
                opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", 
                !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                var mask = "[+]";
                if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", 
                opts.digits !== undefined) {
                    opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                    var dq = opts.digits.toString().split(",");
                    isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                }
                return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            preValidation: function(buffer, pos, c, isSelection, opts) {
                if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, 
                "" === buffer.join("") || {
                    caret: pos,
                    dopost: !0
                });
                if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                    var radixPos = $.inArray(opts.radixPoint, buffer);
                    if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {
                        caret: radixPos + 1
                    };
                }
                return !0;
            },
            postValidation: function(buffer, currentResult, opts) {
                var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
                var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();
                opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
                var charAtPos = maskedValue[caretPos];
                if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), 
                caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", 
                opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), 
                prefix = prefix.join(""), suffix = suffix.join("");
                var processValue = maskedValue.join("").replace(prefix, "");
                if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), 
                processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), 
                processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), 
                "" !== processValue) {
                    if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
                        var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);
                        -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                        for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                    }
                    if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {
                        var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                        processValue = Inputmask(function(buffer, opts) {
                            var postMask = "";
                            if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                                var radixSplit = buffer.join("").split(opts.radixPoint);
                                radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                            }
                            return postMask;
                        }(processValue, opts), {
                            numericInput: !0,
                            jitMasking: !0,
                            definitions: {
                                "*": {
                                    validator: "[0-9?]",
                                    cardinality: 1
                                }
                            }
                        }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), 
                        processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
                    }
                }
                if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), 
                processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, 
                processValue += opts.negationSymbol.back), processValue = processValue.split(""), 
                charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                    var newCaretPos = $.inArray(charAtPos, processValue);
                    -1 !== newCaretPos && (caretPos = newCaretPos);
                }
                opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
                var rslt = {
                    caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                    buffer: processValue,
                    refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                };
                return rslt.refreshFromBuffer ? rslt : currentResult;
            },
            onBeforeWrite: function(e, buffer, caretPos, opts) {
                if (e) switch (e.type) {
                  case "keydown":
                    return opts.postValidation(buffer, {
                        caret: caretPos,
                        dopost: !0
                    }, opts);

                  case "blur":
                  case "checkval":
                    var unmasked;
                    if (function(opts) {
                        opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                        opts.parseMinMaxOptions = "done");
                    }(opts), null !== opts.min || null !== opts.max) {
                        if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                            unmaskAsNumber: !0
                        })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, 
                        opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                            caret: caretPos,
                            dopost: !0,
                            placeholder: "0"
                        }, opts);
                        if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, 
                        opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                            caret: caretPos,
                            dopost: !0,
                            placeholder: "0"
                        }, opts);
                    }
                    return opts.postValidation(buffer, {
                        caret: caretPos,
                        placeholder: "0",
                        event: "blur"
                    }, opts);

                  case "_checkval":
                    return {
                        caret: caretPos
                    };
                }
            },
            regex: {
                integerPart: function(opts, emptyCheck) {
                    return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                },
                integerNPart: function(opts) {
                    return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                }
            },
            definitions: {
                "~": {
                    validator: function(chrs, maskset, pos, strict, opts, isSelection) {
                        var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                        if (!0 === isValid) {
                            if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                                var processValue = maskset.buffer.join(""), pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);
                                pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), 
                                "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), 
                                processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                var bufferTemplate = maskset._buffer.join("");
                                for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);
                                isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {
                                    pos: pos,
                                    remove: pos
                                } : {
                                    pos: pos
                                };
                            }
                        } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", 
                        isValid = {
                            pos: pos + 1
                        });
                        return isValid;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);
                        return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                            caret: pos + 1
                        }), isValid;
                    },
                    cardinality: 1,
                    placeholder: function(opts) {
                        return opts.radixPoint;
                    }
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 
                processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                Number(processValue)) : processValue;
            },
            isComplete: function(buffer, opts) {
                var maskedValue = buffer.join("");
                if (buffer.slice().join("") !== maskedValue) return !1;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 
                isFinite(processValue);
            },
            onBeforeMask: function(initialValue, opts) {
                if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), 
                "" !== opts.radixPoint && isFinite(initialValue)) {
                    var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                    2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                }
                var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);
                if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), 
                "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
                    var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(opts.digits) < decPart.toString().length) {
                        var digitsFactor = Math.pow(10, parseInt(opts.digits));
                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), 
                        initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);
                    }
                }
                return initialValue;
            },
            canClearPosition: function(maskset, position, lvp, strict, opts) {
                var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;
                return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), 
                canClear;
            },
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey) switch (e.keyCode) {
                  case Inputmask.keyCode.UP:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                    break;

                  case Inputmask.keyCode.DOWN:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: !0,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: !1
        }
    }), Inputmask;
});

"use strict";

var Inputmoney = (function() {
  var _args = {
    preffix: "",
    suffix: "",
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    autoCompleteDecimal: false,
    emptyOrInvalid: function emptyOrInvalid() {
      return Inputmoney.args.fixed
        ? "0" + Inputmoney.args.decimalSeparator + "00"
        : "_" + Inputmoney.args.decimalSeparator + "__";
    }
  };

  return {
    get args() {
      return _args;
    },
    set args(value) {
      _args = Object.assign(_args, value);
    },

    onlyNumber: function onlyNumber(value) {
      var retorno = "";
      for (var i = 0; i < value.length; i++) {
        if (isFinite(value[i])) {
          retorno += value[i];
        }
      }

      return retorno;
    },

    addingPreffix: function addingPreffix(value) {
      return "" + Inputmoney.args.preffix + value;
    },
    removingPreffix: function removingPreffix(value) {
      return value.replace(Inputmoney.args.preffix, "");
    },

    addingSuffix: function addingSuffix(value) {
      return "" + value + Inputmoney.args.suffix;
    },
    removingSuffix: function removingSuffix(value) {
      if (
        value.includes(
          //this.Inputmoney.args.suffix.trim(), 
          Inputmoney.args.suffix,
          value.length - Inputmoney.args.fractionDigits
        )
      ) {
        value = value.replace(Inputmoney.args.suffix, "");
      } else {
        value = value.substring(0, value.length);
        //value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingCompleterFromStart: function addingCompleterFromStart(
      value,
      completer
    ) {
      while (value.length < Inputmoney.args.fractionDigits) {
        value = "" + completer + value;
      }
      return value;
    },

    addingCompleterFromEnd: function addingCompleterFromEnd(value, completer) {
      while (value.length < Inputmoney.args.fractionDigits) {
        value = "" + value + completer;
      }
      return value;
    },

    removingCompleterFromStart: function removingCompleterFromStart(
      value,
      completer
    ) {
      while (value[0] === completer) {
        value = value.replace(completer, "");
      }
      return value;
    },

    removingCompleterFromEnd: function removingCompleterFromEnd(
      value,
      completer
    ) {
      while (value[value.length - 1] === completer) {
        value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingAutoComplete: function addingAutoComplete(value) {
      var n = "" + value + Inputmoney.addingCompleterFromEnd("", "0");
      return n;
    },

    autoComplete: function autoComplete(value) {
      var array =
        value.match(
          new RegExp("\\" + Inputmoney.args.decimalSeparator, "g")
        ) || [];
      if (array.length > 1) {
        value = Inputmoney.addingAutoComplete(value);
      }
      return value;
    },

    addingDecimalSeparator: function addingDecimalSeparator(
      value,
      completer,
      separator
    ) {
      var length = value.length - Inputmoney.args.fractionDigits;

      var regexpFraction = void 0;
      var decimals = "$1";
      var dezenas = completer;
      var character = isFinite(completer) ? "d" : "w";

      regexpFraction =
        "(\\" +
        character +
        "{" +
        Inputmoney.args.fractionDigits +
        "})";
      if (length > 0) {
        regexpFraction =
          "(\\" + character + "{" + length + "})" + regexpFraction;
        dezenas = decimals;
        decimals = "$2";
      }

      return value.replace(
        new RegExp(regexpFraction),
        "" + dezenas + separator + decimals
      );
    },

    removeSeparator: function removeSeparator(value, separator) {
      if (separator !== '') {
        return value.replace(new RegExp("\\" + separator, "g"), "");
      }
      else {
        return value;
      }
    },
    formatDecimal: function formatDecimal(value, completer, separator) {
      value = Inputmoney.addingCompleterFromStart(value, completer);
      value = Inputmoney.addingDecimalSeparator(
        value,
        completer,
        separator
      );
      return value;
    },

    textToNumber: function textToNumber(input) {
      var retorno = input.toString();
      var completer = Inputmoney.args.fixed ? "0" : "_";

      if (Inputmoney.args.preffix) {
        retorno = Inputmoney.removingPreffix(retorno);
      }

      if (Inputmoney.args.suffix) {
        retorno = Inputmoney.removingSuffix(retorno);
      }

      if (Inputmoney.args.autoCompleteDecimal) {
        retorno = Inputmoney.autoComplete(retorno);
      }

      retorno = Inputmoney.removeSeparator(
        retorno,
        Inputmoney.args.thousandsSeparator
      );
      retorno = Inputmoney.removeSeparator(
        retorno,
        Inputmoney.args.decimalSeparator
      );

      retorno = Inputmoney.onlyNumber(retorno);

      retorno = Inputmoney.removingCompleterFromStart(
        retorno,
        completer
      );

      return retorno || (Inputmoney.args.fixed ? "0" : "");
    },

    numberToText: function numberToText(input) {
      var retorno = Inputmoney.args.emptyOrInvalid();

      if (parseFloat(input) !== "NaN") {
        if (input.length <= Inputmoney.args.fractionDigits) {
          retorno = Inputmoney.formatDecimal(
            input,
            Inputmoney.args.fixed ? "0" : "_",
            Inputmoney.args.decimalSeparator
          );
        } else {
          var lengthWithoutDecimals =
            input.length - Inputmoney.args.fractionDigits;
          var hundreds = Math.ceil(lengthWithoutDecimals / 3);
          var regexpHundreds = "(\\d)";

          var replacement =
            Inputmoney.args.decimalSeparator + "$" + (hundreds + 1);

          for (var i = hundreds; i !== 0; i--) {
            if (lengthWithoutDecimals >= 3) {
              regexpHundreds = "(\\d{3})" + regexpHundreds;
              lengthWithoutDecimals -= 3;
            } else {
              regexpHundreds =
                "(\\d{" + lengthWithoutDecimals + "})" + regexpHundreds;
            }

            if (i > 1) {
              replacement =
                Inputmoney.args.thousandsSeparator +
                "$" +
                i +
                replacement;
            } else {
              replacement = "$" + i + replacement;
            }
          }

          retorno = input.replace(new RegExp(regexpHundreds), replacement);
        }
      }

      if (Inputmoney.args.preffix) {
        retorno = Inputmoney.addingPreffix(retorno);
      }
      if (Inputmoney.args.suffix) {
        retorno = Inputmoney.addingSuffix(retorno);
      }

      return retorno;
    },

    format: function format(value) {
      return Inputmoney.numberToText(
        Inputmoney.textToNumber(value)
      );
    },

    formatToNumber: function formatToNumber(input) {
      var retorno = "0";
      var value = Inputmoney.textToNumber(input);

      if (parseFloat(value) !== "NaN") {
        if (value.length <= Inputmoney.args.fractionDigits) {
          value = Inputmoney.formatDecimal(value, "0", ".");
        } else {
          var lengthWithoutDecimals =
            value.length - Inputmoney.args.fractionDigits;
          value = value.replace(
            new RegExp(
              "(\\d{" +
                lengthWithoutDecimals +
                "})(\\d{" +
                Inputmoney.args.fractionDigits +
                "})"
            ),
            "$1.$2"
          );
        }

        retorno = value;
      }

      return parseFloat(retorno);
    }
  };
})();

  var App = App || {}, Pattern = Pattern || [], MaskedInput;
  App = 
  {
    "DEFAULT": {
      "SYMBOL": {
        "NEGATIVE": "-",
        "POSITIVE": ""
      },
      "NUMBER": {
        "PATTERN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": function(){ return "digitsOptional" },
            "prefix": function(){ return "prefix" },
            "sufix": function(){ return "sufix" },
            "radixPoint": function(){ return "radixPoint" },
            "groupSeparator": function(){ return "groupSeparator" },
            "groupSize": function(){ return "groupSize" },
            "autoGroup": function(){ return "autoGroup" },
            "digits": function(){ return "digits" },
            "rightAlign": function(){ return "rightAlign" },
            "allowMinus": function(){ return "allowMinus" },
            "removeMaskOnSubmit": function(){ return "removeMaskOnSubmit" },
            "clearMaskOnLostFocus": function(){ return "clearMaskOnLostFocus" },
            "showMaskOnFocus": function(){ return "showMaskOnFocus" },
            "showMaskOnHover": function(){ return "showMaskOnHover" },
            "min": function(){ return "min" },
            "max": function() { return "max" },
            "affinity":function() { return "affinity" },
            "placeholder": function() { return "placeholder" },
            "numericInput": function() { return "numericInput" }
          }
        }
      },
      "DECIMAL": {
        "PATTERN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": function(){ return "digitsOptional" },
            "prefix": function(){ return "prefix" },
            "sufix": function(){ return "sufix" },
            "radixPoint": function(){ return "radixPoint" },
            "groupSeparator": function(){ return "groupSeparator" },
            "groupSize": function(){ return "groupSize" },
            "autoGroup": function(){ return "autoGroup" },
            "digits": function(){ return "digits" },
            "rightAlign": function(){ return "rightAlign" },
            "allowMinus": function(){ return "allowMinus" },
            "removeMaskOnSubmit": function(){ return "removeMaskOnSubmit" },
            "clearMaskOnLostFocus": function(){ return "clearMaskOnLostFocus" },
            "showMaskOnFocus": function(){ return "showMaskOnFocus" },
            "showMaskOnHover": function(){ return "showMaskOnHover" },
            "min": function(){ return "min" },
            "max": function() { return "max" },
            "affinity":function() { return "affinity" },
            "placeholder": function() { return "placeholder" },
            "numericInput": function() { return "numericInput" }
          }
        }
      }
    },
    "PATTERN": {
      "NUMBER": {
        "ZEROFILLINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": "",
            "groupSize": 0,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0000000000000000000",
            "numericInput": false
          }
        },
        "POSITIVEINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": false,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": 0,
            "max": 18446744073709552000,
            "affinity": "",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "NEGATIVEINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": 0,
            "max": 9223372036854776000,
            "affinity": "",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "PERCENTINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " %",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": 0,
            "max": 100,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "SMALLINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -32767,
            "max": 32767,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "MEDIUMINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -8388607,
            "max": 8388607,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "INTEGER": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -2147483647,
            "max": 2147483647,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": false
          }
        },
        "BIGINT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": false
          }
        }
      },
      "DECIMAL": {
        "ZEROFILLDEC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "",
            "groupSize": 0,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0000000000000000000.00",
            "numericInput": true
          }
        },
        "POSITIVEDEC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": false,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": 0,
            "max": 18446744073709552000,
            "affinity": "",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "NEGATIVEDEC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": 0,
            "max": 9223372036854776000,
            "affinity": "",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "DECIMAL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CURRENCY": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PERCENTDEC":{
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " %",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -100,
            "max": 100,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "AFN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ؋",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "DZD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.ج",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ARS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "AMD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "դ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "AWG": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ƒ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "AUD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "AZN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₼ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BSD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BHD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " .د.ب",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.000",
            "numericInput": true
          }
        },
        "THB": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "฿ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PAB": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "B/. ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "BBD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BYR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₽ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "BZD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BMD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "VEF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Bs F ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "BOB": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Bs ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "BRL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "R$ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "BND": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BGN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "лв ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BIF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CAD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CVE": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "KYD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "GHS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₵ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "XAF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "XOF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "XPF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "CLP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "CNY": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "元 ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "COP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "KMF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "CF ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "CDF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "FC ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BAM": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "КМ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "NIO": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "C$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CRC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₡ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "HRK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " kn",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "CUP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CZK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " Kč",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "GMD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "D ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "DKK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " kr",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "MKD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ден ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "DJF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "STD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Db ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "DOP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "VND": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " ₫",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "XCD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "EGP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ج.م",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ETB": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ብር ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "EUR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " €",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "FKP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "£ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "FJD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "GIP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "£ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "HTG": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "G ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PYG": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " ₲",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "GNF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " ₣",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "GWP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "GYD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "HKD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "元 ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "UAH": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ₴",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "HUF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " Ft",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "ISK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " kr",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "INR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₹ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "IRR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ريال",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "IQD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.ع",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.000",
            "numericInput": true
          }
        },
        "ILS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ₪",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "JMD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "JPY": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "¥ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "JOD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.ا",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.000",
            "numericInput": true
          }
        },
        "KES": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "K ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PGK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "K ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "LAK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₭ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "EEK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " kr",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "KWD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.ك",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.000",
            "numericInput": true
          }
        },
        "MWK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "MK ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "AOA": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Kz ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MMK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "K ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "GEL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₾ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "LVL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Ls ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "LBP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " ل.ل.‎",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "ALL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " L",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "HNL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "L ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SLL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Le ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "LRD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "LYD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ل.د",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,000",
            "numericInput": true
          }
        },
        "SZL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "L ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "LTL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " Lt",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "LSL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "L ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "MGA": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Ar ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 1,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.0",
            "numericInput": true
          }
        },
        "MYR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "RM ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "TMT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "m ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MUR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "රු ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "MZN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "MT ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "MXN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MDL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "L ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MAD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.م.",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "NGN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₦ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "ERN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ናቕፋ",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "NAD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "N ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "NPR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "रु ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ANG": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ƒ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "RON": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "L ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "NZD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BTN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Nu. ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "KPW": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₩ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "NOK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " kr",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "PEN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "S/. ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MRO": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "UM ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 1,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.0",
            "numericInput": true
          }
        },
        "TOP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "T$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PKR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "රු ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MOP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "P ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "UYU": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "PHP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₱ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "PLN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " zł",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "GBP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "£ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BWP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "P ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "QAR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ر.ق",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "GTQ": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Q ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ZAR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "R ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "OMR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ر.ع.",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,000",
            "numericInput": true
          }
        },
        "KHR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "៛ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MVR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " .ރ",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "IDR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Rp ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "RUB": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ₽",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "RWF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "SHP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "£ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SVC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₡ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SAR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ر.س",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "RSD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "дин ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "SCR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "SR ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "SGD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SBD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "KGS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "лв ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "SOS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "So. ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "TJS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "с. ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "LKR": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "රු ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "SDG": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ج.س.",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SRD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SEK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " kr",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "CHF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "`",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SYP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ل.س",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "TWD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BDT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "৳ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "WST": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "T ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "TZS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Sh ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "KZT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₸ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "TTD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MNT": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₮ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "TND": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.ت",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 3,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.000",
            "numericInput": true
          }
        },
        "TRY": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₺ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "AED": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " د.إ",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "UGX": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "",
            "sufix": " Sh",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "USD": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "UZS": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "лв ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "VUV": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "Vt ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "KRW": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "₩ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "YER": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ريال",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ZMK": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ZK ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ZWL": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": "",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "SSP": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " ج.س.",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "CUC": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BYN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Br ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "UYI": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": true,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": "",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 0,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0",
            "numericInput": true
          }
        },
        "CHE": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "",
            "sufix": " €",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "CHW": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "ZMW": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "ZK ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "COU": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "MXV": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "BOV": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "Bs. ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,00",
            "numericInput": true
          }
        },
        "CLF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ",",
            "groupSeparator": ".",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 4,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0,0000",
            "numericInput": true
          }
        },
        "USN": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "$ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        },
        "LUF": {
          "RULE": {
            "alias": "decimal",
            "digitsOptional": false,
            "prefix": "₣ ",
            "sufix": "",
            "radixPoint": ".",
            "groupSeparator": ",",
            "groupSize": 3,
            "autoGroup": true,
            "digits": 2,
            "rightAlign": true,
            "allowMinus": true,
            "removeMaskOnSubmit": true,
            "clearMaskOnLostFocus": true,
            "showMaskOnFocus": false,
            "showMaskOnHover": false,
            "min": -9223372036854776000,
            "max": 9223372036854776000,
            "affinity": "+",
            "placeholder": "0.00",
            "numericInput": true
          }
        }
      },
      "MASK": {
        "FONE": {
          "mask": "(&{2}) @{0,1}§{4}-§{4}", 
          "clearIncomplete": true,
          "definitions": {
            "&": {
              "validator": "[1-9]"
            },
            "§": {
              "validator": "[0-9]"
            },
            "@": {
              "validator": "[9]"
            }
          } 
        },
        "FONE_FIXO": {
          "mask": "#{4}-§{3}-§{4}",
          "clearIncomplete": true,
          "definitions": {
            "§": {
              "validator": "[0-9]"
            },
            "#": {
              "validator": "[0300|0500|0800|0900]"
            }
          }
        },
        "FONES": {
          "mask": ["#{4}-§{3}-§{4}","(&{2}) @{0,1}§{4}-§{4}"],
          "clearIncomplete": true,
          "definitions": {
            "&": {
              "validator": "[1-9]"
            },
            "§": {
              "validator": "[0-9]"
            },
            "@": {
              "validator": "[9]"
            },
            "#": {
              "validator": "[0300|0500|0800|0900]"
            }
          }
        },
        "FONES_REGEX": {
          "regex": "^(\\+55 \\([0-9]{2}\\) (([7][0|7|8|9])|([2|3|4|5][0-9])|([7|8|9][0-9]{2}))[0-9]{2}-[0-9]{4})$",
          "clearIncomplete": true
        },
        "PLACA_VEICULAR": {
          "mask": "#{3}-§{4}",
          "clearIncomplete": true,
          "definitions": {
            "#": {
              "validator": "[a-z]|[A-Z]",
              "casing": "upper"
            },
            "§": {
              "validator": "[0-9]"
            }
          }
        },
        "CHASSI_VEICULAR": {
          "mask": "#{2}.#{2}.#{5}.#{1}.#{1}.#{5}",
          "clearIncomplete": true,
          "definitions": {
            "#": {
              "validator": "[a-z]|[A-Z]",
              "casing": "upper"
            }
          }
        },
        "ISBN": {
          "mask": "#{3}-#{2}-#{3}-#{4}-#{1}",
          "clearIncomplete": true,
          "definitions": {
            "#": {
              "validator": "[0-9]"
            }
          }
        },
        "CEP": {
          "mask": "§{2}.§{3}-§{3}",
          "clearIncomplete": true,
          "definitions": {
            "§": {
              "validator": "[0-9]"
            }
          }
        },
        "CPF": {
          "mask": "§{3}.§{3}.§{3}-§{2}",
          "clearIncomplete": true,
          "definitions": {
            "§": {
                "validator": "[0-9]"
            }
          },
          "oncomplete": function(event) {
            if (event.target.hasAttribute("x-valid") && event.target.getAttribute("x-valid") == "true") {
              // Validação Embutida
              if(!App.EXT.Validate.CPF(event.target.value)) {
                // Reseta a Máscara
                App.EXT.Reset.Mask(event);
              }
            }
          }
        },
        "CNPJ": {
          "mask": "§{2}.§{3}.§{3}/§{4}-§{2}",
          "clearIncomplete": true,
          "definitions": {
            "§": {
                "validator": "[0-9]"
            }
          },
          "oncomplete": function(event) {
            if (event.target.hasAttribute("x-valid") && event.target.getAttribute("x-valid") == "true") {
              // Validação Embutida
              if(!App.EXT.Validate.CNPJ(event.target.value)) {
                // Reseta a Máscara
                App.EXT.Reset.Mask(event);
              }
            }
          }
        },
        "CPF_CNPJ": {
          "mask": ["§{3}.§{3}.§{3}-§{2}","§{2}.§{3}.§{3}/§{4}-§{2}"],
          "clearIncomplete": true,
          "definitions": {
            "§": {
              "validator": "[0-9]"
            }
          }
        },
        "DATA_BR": {
          "alias": "datetime",
          "clearIncomplete": true,
          "inputFormat": "dd/mm/yyyy", 
          "placeholder": "DD/MM/AAAA",
          "jitMasking": true
        },
        "DATA_BR_REGEX": {
          "regex": "^(((0[1-9]|[12][0-9]|3[01])/(0[13578]|1[02])/(([0-9][0-9]|[2-9][0-9])[0-9]{2}))|((0[1-9]|[12][0-9]|30)/(0[13456789]|1[012])/((19|[2-9][0-9])[0-9]{2}))|((0[1-9]|1[0-9]|2[0-8])/[0-9][0-9]/(([0-9][0-9]|[2-9][0-9])[0-9]{2}))|([0-9][0-9]/[0-9][0-9]/((1[6-9]|[2-9][0-9])(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$",
          "clearIncomplete": true,
          "placeholder": "DD/MM/AAAA",
          "jitMasking": true
        },
        "DATA_ISO": {
          "alias": "datetime",
          "clearIncomplete": true,
          "inputFormat": "isoDate",
          "placeholder": "YYYY-MM-DD",
          "jitMasking": true
        },
        "DATA_ISO_REGEX": {
          "regex": "^[0-9]{4}-(0[1-9]|1[012])-([0][1-9]|[12][0-9]|3[01])$",
          "clearIncomplete": true,
          "placeholder": "YYYY-MM-DD",
          "jitMasking": true
        },
        "HORA": {
          "alias": "datetime",
          "clearIncomplete": true,
          "inputFormat": "isoTime", 
          "placeholder": "HH:MM:SS",
          "jitMasking": true
        },
        "HORA_12H": {
          "mask": "12:59:59",
          "clearIncomplete": true,
          "placeholder": "HH:MM:SS",
          "definitions": {
            "1" : {
              "validator": "[0-1]"
            },
            "2" : {
              "validator": "[0-2]"
            },
            "5": {
              "validator": "[0-5]"
            }
          },
          "jitMasking": true
        },
        "HORA_24H": {
          "mask": "23:59:59",
          "clearIncomplete": true,
          "placeholder": "HH:MM:SS",
          "definitions": {
            "2" : {
              "validator": "[0-2]"
            },
            "3" : {
              "validator": "[0-3]"
            },
            "5": {
              "validator": "[0-5]"
            }
          },
          "jitMasking": true
        },
        "HORA_12H_REGEX": {
          "regex": "^(0[0-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]$", 
          "clearIncomplete": true,
          "placeholder": "HH:MM:SS",
          "jitMasking": true
        },
        "HORA_24H_REGEX": {
          "regex": "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$", 
          "clearIncomplete": true,
          "placeholder": "HH:MM:SS",
          "jitMasking": true
        },
        "DATA_HORA_BR": {
          "mask": {
            "alias": "datetime",
            "clearIncomplete": true,
            "inputFormat": "dd/mm/yyyy HH:MM:ss",
            "jitMasking": true
          },
          "placeholder": "DD/MM/AAAA HH:MM:SS"
        },
        "DATA_HORA_ISO": {
          "mask": {
            "alias": "datetime",
            "clearIncomplete": true,
            "inputFormat": "yyyy-mm-dd HH:MM:ss",
            "jitMasking": true
          },
          "placeholder": "YYYY-MM-DD HH:MM:SS"
        }
      }
    },
    "EXT": {
      "Delay" : function(ms, callback) {
        setTimeout(callback, ms);
      },
      "Focus" : {
        "Next" : function () {
          var focussableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
          if (document.activeElement && document.activeElement.form) {
            var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
            function (element) {
              return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
            });
            var index = focussable.indexOf(document.activeElement);
            if(index > -1) {
              var nextElement = focussable[index + 1] || focussable[0];
              nextElement.focus();
            }
          }
        },
        "Previous" : function() {
          var focussableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
          if (document.activeElement && document.activeElement.form) {
            var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
            function (element) {
              return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
            });
            var index = focussable.indexOf(document.activeElement);
            if(index > -1) {
              var previousElement = focussable[index - 1] || focussable[0];
              previousElement.focus();
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
        "Add" : function(element, classname){
          var re = new RegExp("(^|\\s)" + classname + "(\\s|$)", "g")
          if (re.test(element.className)) return
          element.className = (element.className + " " + classname).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        },
        "Remove" : function(element, classname){
          var re = new RegExp("(^|\\s)" + classname + "(\\s|$)", "g")
          element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        }
      },
      "Format": {
        "LPad": function(str, max) {
          str = str.toString();
          return str.length < max ? App.EXT.Format.LPad("0" + str, max) : str;
        },
        /*
         * Rafa Academy/formatMoney Function
         * A browser function to format string to currency
         * Based on the function of Rafael Paulino
         * (C) Rafael Paulino - Rafa Academy
         * https://rafaacademy.com/javascript-format-number-money/
         */
        "toMoney": function(number, places, prefix, thousand, decimal, sufix) {
          number = number || 0;
          places = !isNaN(places = Math.abs(places)) ? places : 2;
          prefix = prefix !== undefined ? prefix : "$";
          thousand = thousand || ",";
          decimal = decimal || ".";
          var negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
          return ( (prefix.trim() == "%") ?
              negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") + prefix :
              prefix + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") ) + sufix;
        },
        "toBigMoney": function(number, places, prefix, thousand, decimal, sufix) {
          BigNumber.config({ FORMAT: { decimalSeparator: decimal, groupSeparator: thousand, groupSize: 3 } });
          var currency = new BigNumber(number)
          return prefix + currency.toFormat(Number(places)) + sufix;
        },
        "toDecimal": function(value, places) {
          value = value.toString().replace(/\D/g, '');
          places = typeof places !== 'undefined' ? places : 0;
          Inputmoney.args = {"preffix":"","suffix":"","fixed":true,"fractionDigits":places,"decimalSeparator":".","thousandsSeparator":"","autoCompleteDecimal":false};
          return Inputmoney.format(value);
        },
        "toNumeric": function(value) {
          return Number(value.replace(/\D/g, ''));
        },
        "toBigNumeric": function(value) {
          return BigNumber(value.replace(/\D/g, '')).toString();
        },
        "toNumber": function(value, places) {
          return Number(App.EXT.Format.toDecimal(value, places));
        },
        "toBigNumber": function(value, places) {
          return BigNumber(App.EXT.Format.toDecimal(value, places)).toString();
        }
      },
      "JSON": {
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
      "Event": {
        "Add" : function(el, s, fn, uc) {
          for (var i = 0; i < s.length; i++){
            if (el !== null) {
              el.addEventListener(s[i], fn, uc);
            }
          }
        },
        "Remove": function(el, s, fn, uc) {
          for (var i = 0; i < s.length; i++){
            if (el !== null) {
              el.removeEventListener(s[i], fn, uc);
            }
          }
        },
        "BindKeys" : function(event, kc, Action) {
          switch(kc) {
            case 8:  // Backspace
            case 46: // Delete
              event.preventDefault();
              Action.EraseInput(event, kc);
              return;
            break;
            case 9:  // Tab
              if (!event.shiftKey) { // Shift
                event.preventDefault();
                App.EXT.Focus.Next();
                return;
              }
            break;
            case 13: // Enter
              event.preventDefault();
              Action.SubmitInput();
              event.target.form.submit();
              return;
            break;
            case 116: // F5
              if (!event.ctrlKey) { // Control
                event.preventDefault();
                window.location.reload(true);
                return;
              }
            break;
          }
          if (event.shiftKey) { // Shift
            switch(kc) {
              case 9:  // Tab
                event.preventDefault();
                App.EXT.Focus.Previous();
                return;
              break;
            }
          }
          if (event.ctrlKey) { // Control
            switch(kc) {
              case 97:  // A
                event.target.focus();
                event.target.select();
                return;
              break;
              case 114: // R
              case 116: // F5
                window.location.reload(true);
                return;
              break;
              case 99:  // C
                document.execCommand("Copy");
                return;
              break;
              case 118: // V
                document.execCommand("Paste");
                return;
              break;
            }
          }
        },
        /* 
         * Watch/Observer Básico Apenas para o Firefox para Android Lolipop
         */
        "Watch":function(element, attribute){
          return {
            "get" : function (){
              if (attribute === 'value')
                return element.value;
              else
                return element.getAttribute(attribute);
            },
            "set" : function (value) {
              if (attribute === 'value')
                element.value = value;
              else
                element.setAttribute(attribute, value);
            } 
          } 
        },
        /* 
         * Event Hack para Android KitKat (4.4) e os Mecanismos de Renderização Gecko, WebKit, Presto e WebKit
         * Que Possuem Diversos Bugs nos Eventos KeyDown e KeyUp e não Intepretam o KeyPress Corretamente
         */
        "Discover": function(ua) {
          if ( ua.os.name == 'Android' && ( ua.engine.name == 'Blink' || ua.engine.name == 'Presto' || ua.engine.name == 'WebKit' ) ) {
            if ( parseFloat(ua.os.version) >= 4.4 && parseFloat(ua.os.version) < 6 )
              return { "Write":"textInput", "Erase":"input", "Paste":"paste", "Submit":"submit" };
            else if ( parseFloat(ua.os.version) >= 6 )
              return { "Write":"textInput", "Erase":"keyup", "Paste":"paste", "Submit":"submit" };
          }
          else if ( ua.os.name == 'Android' && ua.engine.name == 'Gecko' && parseFloat(ua.os.version) < 6 )
            return { "Write":"keypress", "Erase":"input", "Paste":"paste", "Submit":"submit" };
          else
            return { "Write":"keypress", "Erase":"keydown", "Paste":"paste", "Submit":"submit" };
        }
      },
      "Reset": {
        "Mask": function(event, submask) {
          // Remove a Máscara e a Validação
          if (event.target.inputmask)
            event.target.inputmask.remove();
          // Limpa o Campo
          event.target.value = '';
          event.target.setAttribute('x-value', '');
          // Limpa a Matriz
          window.data(event.target).input = [];
          // Verifica a Existencia de Sub-Máscaras
          submask = typeof submask === 'undefined' ? submask : true;
          // Obtém Corretamente as Regras da Máscara
          var rule = (submask === undefined) ? Pattern[event.target.getAttribute('x-type').toUpperCase()] : Pattern[event.target.getAttribute('x-type').toUpperCase()].RULE;
          // Finalmente Reaplica a Máscara
          MaskedInput = Inputmask(rule).mask(event.target);
        }
      },
      "Validate": {
        "isNumber": function(str) {
          return /^\d+$/.test(str);
        },
        "CPF": function(Objcpf){
          var cpf = Objcpf;
          exp = /\.|\-/g
          cpf = cpf.toString().replace( exp, "" ); 
          var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
          var soma1=0, soma2=0;
          var vlr =11;

          for(i=0;i<9;i++){
            soma1+=eval(cpf.charAt(i)*(vlr-1));
            soma2+=eval(cpf.charAt(i)*vlr);
            vlr--;
          }
          soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
          soma2=(((soma2+(2*soma1))*10)%11);
          var digitoGerado=(soma1*10)+soma2;
          if(digitoGerado!=digitoDigitado)
            return false;
          else
            return true;
        },
        "CNPJ": function(ObjCnpj){
          var cnpj = ObjCnpj;
          var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
          var dig1= new Number;
          var dig2= new Number;

          exp = /\.|\-|\//g
          cnpj = cnpj.toString().replace( exp, "" ); 
          var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

          for(i = 0; i<valida.length; i++){
            dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);
            dig2 += cnpj.charAt(i)*valida[i];
          }
          dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
          dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
          if(((dig1*10)+dig2) != digito)
            return false;
          else
            return true;
        }
      },
      "Caret": {
        "GetPosition": function(element) {
          var CaretPos = 0;
          if (element.selectionStart || element.selectionStart == 0) {
            CaretPos = element.selectionStart;
          }
          else if (document.selection) {
            element.focus ();
            var Sel = document.selection.createRange();
            Sel.moveStart ('character', -element.value.length);
            CaretPos = Sel.text.length;
          }
          return (CaretPos);
        },
        "SetPosition": function(element, pos) {
          if (element.setSelectionRange) {
            element.focus();
            element.setSelectionRange(pos, pos);
          }
          else if (element.createTextRange) {
            var range = element.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
          }
        },
        "toBegin": function(element) {
          App.EXT.Event.Add(element, ['focus', 'click'], function(event){
            event.preventDefault();
            setTimeout(function(){ 
              var val = event.target.value;
              event.target.value = ''; 
              event.target.value = val;
              App.EXT.Caret.SetPosition(event.target, 0);
            }, 0);
            return false;
          }, false);
        },
        "toEnd": function(element) {
          App.EXT.Event.Add(element, ['focus', 'click'], function(event){
            event.preventDefault();
            setTimeout(function(){ 
              var val = event.target.value;
              event.target.value = ''; 
              event.target.value = val;
              if ( (event.target.hasAttribute('x-sufix') && event.target.getAttribute('x-sufix') != '') ) {
                App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - event.target.getAttribute('x-sufix').length));
              }
              else {
                App.EXT.Caret.SetPosition(event.target, 10000);
              }
            }, 0);
            return false;
          }, false);
        }
      }
    }
  };

  (function() {

    //Função Anônima para Criação do Data Store (Armazenamento Temporário de Dados)
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

    /* Cross-browser fallback */
    var currentScript = document._currentScript || document.currentScript,
      doc = currentScript.ownerDocument,
      proto = Object.create(HTMLInputElement.prototype),
      that = this;

    proto.createdCallback = function() {

      /* Apaga ao Deixar o Campo Incompleto */
      Inputmask.extendDefaults({
        "clearIncomplete": true, 
        "autoUnmask": true, 
        "showMaskOnFocus": false, 
        "showMaskOnHover": false
      });

      if (this.hasAttribute('x-type') && this.getAttribute('x-type') != '') {

        /*
         * User Agent Parser
         */
        var parser = new UAParser(),
            ua = parser.getResult(),
            x_type = this.getAttribute('x-type').toUpperCase(), Rule = undefined;

        switch(x_type.toLowerCase()) {
          case 'zerofillint': // Zero-Fill Signed Int (De -9223372036854776000 à 9223372036854776000) // Alias para Signed BigInt com Zero-Fill, Negativo & Positivo
          case 'positiveint': // Unsigned Int (De 0 à 18446744073709552000) // Alias para Unsigned BigInt, Apenas Positivo
          case 'negativeint': // Negative Int (De -9223372036854776000 à 0) // Ailas para Negative BigInt, Apenas Negativo
          case 'percentint': // Signed Percentage Int (De -100 à 100) // Negativo & Positivo
          case 'smallint': // Signed SmallInt (De -32767 à 32767) // Negativo & Positivo
          case 'mediumint': // Signed MediumInt (De -8388607 à 8388607) // Negativo & Positivo
          case 'integer': // Signed Integer (De –2147483647 à 2147483647) // Negativo & Positivo
          case 'bigint': // Signed BigInt (De -9223372036854776000 à 9223372036854776000) // Negativo & Positivo

            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.NUMBER[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Armazenamento do Objeto Principal
            var $this = this, 
                // Define Timer dos Inputs
                Timeout = undefined, 
                // Obtém o Template de Configuração
                Template = App.EXT.JSON.Template(App.DEFAULT.NUMBER.PATTERN),
                // Carrega as Regras Padrão do Tipo do Componente
                DEFAULT = Template(Rule.RULE);

            // Matriz Única do Elemento
            window.data(this).input = [];

            // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
            var Config = {
              "Rule": {
/*decimal*/     "alias": DEFAULT.RULE.alias,
/*false*/       "numericInput": DEFAULT.RULE.numericInput,
                "digitsOptional": DEFAULT.RULE.digitsOptional,
                "prefix": (!this.hasAttribute('x-prefix') && this.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : this.getAttribute('x-prefix'),
                "sufix": (!this.hasAttribute('x-sufix') && this.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : this.getAttribute('x-sufix'),
                "radixPoint": Rule.RULE.radixPoint,
                "groupSeparator": Rule.RULE.groupSeparator,
                "groupSize": Rule.RULE.groupSize,
/*true*/        "autoGroup": DEFAULT.RULE.autoGroup,
                "digits": DEFAULT.RULE.digits,
                "rightAlign": (!this.hasAttribute('x-dir') && this.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((this.getAttribute('x-dir') == 'ltr') ? false : true),
                "allowMinus": (!this.hasAttribute('x-negative') && this.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((this.getAttribute('x-negative') == 'true') ? true : false),
/*true*/        "removeMaskOnSubmit": (!this.hasAttribute('x-onsubmit') && this.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((this.getAttribute('x-onsubmit') == 'true') ? true : false),
/*true*/        "clearMaskOnLostFocus": (!this.hasAttribute('x-onfocusout') && this.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((this.getAttribute('x-onfocusout') == 'true') ? true : false),
/*false*/       "showMaskOnFocus": (!this.hasAttribute('x-onfocusin') && this.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((this.getAttribute('x-onfocusin') == 'true') ? true : false),
/*false*/       "showMaskOnHover": (!this.hasAttribute('x-onhover') && this.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((this.getAttribute('x-onhover') == 'true') ? true : false),
                "min": (!this.hasAttribute('x-min') && this.getAttribute('x-min') != '') ? Rule.RULE.min : this.getAttribute('x-min'),
                "max": (!this.hasAttribute('x-max') && this.getAttribute('x-max') != '') ? Rule.RULE.max : this.getAttribute('x-max'),
                "oncleared": function(event) { event.target.value = ''; window.data(this).input = []; },
                "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
                "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } }
              },
/*+*/         "affinity": (!this.hasAttribute('x-affinity') && this.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : this.getAttribute('x-affinity'),
              "placeholder": (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : this.getAttribute('placeholder')
            };

            /*
             * Principais Atributos Públicos dos Tipos: [positiveint, negativeint, smallint, mediumint, integer, bigint]
             * @property x-dir=Opts(['ltr'|'rtl']) String
             * @property x-min=[-9-0-9]{1,n} String
             * @property x-max=[-9-0-9]{1,n} String
             * @property x-prefix=[*]{1,n} String
             * @property x-sufix=[*]{1,n} String
             * @property x-negative=[Boolean] String
             * @property x-affinity=Opts([''|'-'|'+']) String
            */

            var Config_Symbol = '', 
                Placeholder = '',
                Event = {},
                Maxlength = 0;
                PositiveValue = true;

            // Se Existe Valor, Verifica é Positivo ou Negativo
            if (this.value !== '') {
              PositiveValue = (this.value > 0) ? true : false;
              // Para os x-type="positivedec" e x-type="negativedec"
              if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positiveint') || (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') ) {
                 // Apenas Positivo
                 if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positiveint') {
                   // Aplica a Flag para Valores Unsigned
                   if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                     this.setAttribute('x-case', 'signed');
                }
                // Apenas Negativo
                if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') {
                  // Remove a Flag para Valores Negativos
                  if (this.hasAttribute('x-case'))
                    this.removeAttribute('x-case');
                  if (!this.hasAttribute('x-negative'))
                    this.setAttribute('x-negative', 'true');
                  // Verifica se Pode Ser Negativo
                  if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') || (this.hasAttribute('x-negative') && this.getAttribute('x-negative') == 'true') ) {
                    Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                    if (!this.hasAttribute('x-negative'))
                      this.setAttribute('x-negative', 'true');
                  }
                }
              }
              else {
                // Aplica a Flag para Valores Signed
                if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                  this.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (this.getAttribute('x-case') == 'signed') {
                  if (!this.hasAttribute('x-affinity'))
                    this.setAttribute('x-affinity', Config.affinity);
                }
                Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
              }

              var act_value = new BigNumber(this.value),
                  max_value = new BigNumber(Config.Rule.max.toString());

              // Corrige o Valor
              this.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

              /* Alimenta a Matriz de Caracteres do Componente */
              for (var i=0; i < this.value.length; i++) {
                if(App.EXT.Validate.isNumber(this.value.charAt(i))) {
                  window.data(this).input.push(this.value.charAt(i));
                }
              }

              // Atribue o maxlength apenas para o x-type="zerofilldec"
              if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofillint')
                Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
              // Define o Atributo maxlength
              else
                Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

              // Atribue os Valores
              this.removeAttribute('value');
              this.setAttribute('x-value', App.EXT.Format.toBigMoney(this.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
              this.value = this.getAttribute('x-value');
              this.setAttribute('x-mode', 'overwritable');
              this.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
              this.setAttribute('maxlength', Maxlength);
              this.setAttribute('x-limit', Number(this.getAttribute('maxlength')) - this.value.length);
            }
            // Se Não Existir Valor
            else {
              /*
               * Verifica se Pode Ser Signed
               */
              if  ( 
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'smallint') || 
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mediumint') || 
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'integer') || 
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bigint') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofillint') 
                  ) {
                // Aplica a Flag para Valores Unsigned
                if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                  this.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (this.getAttribute('x-case') == 'signed') {
                  if (!this.hasAttribute('x-affinity'))
                    this.setAttribute('x-affinity', Config.affinity);
                }
              }
              else {
                /* Para os x-type="positive" e x-type="negative" */
                if (
                     (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positiveint') || 
                     (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') 
                   ) {
                   /* Apenas Positivo */
                   if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positiveint') {
                     // Aplica a Flag para Valores Unsigned
                     if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                       this.setAttribute('x-case', 'unsigned');
                   }
                   /* Apenas Negativo */
                   if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') {
                     // Remove a Flag para Valores Negativos
                     if (this.hasAttribute('x-case'))
                       this.removeAttribute('x-case');
                     if (!this.hasAttribute('x-negative'))
                       this.setAttribute('x-negative', 'true');
                   }
                }
                /* Para os Tipos Signed: x-type="smallint", x-type="mediumint", x-type="integer"  x-type="bigint" */
                else {
                  // Aplica a Flag para Valores Signed
                  if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                    this.setAttribute('x-case', 'signed');
                  // Valida se é um Signed Negativo
                  if (!this.hasAttribute('x-negative'))
                    this.setAttribute('x-negative', 'true');
                  // Valida se Possui Afinidade
                  if (this.getAttribute('x-case') == 'signed') {
                    if (!this.hasAttribute('x-affinity'))
                      this.setAttribute('x-affinity', Config.affinity);
                  }
                }
              }
              // Verifica se Pode Ser Negativo
              if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativeint') || (this.hasAttribute('x-negative') && this.getAttribute('x-negative') == 'true') ) {
                if (this.getAttribute('x-type') == 'negativeint') {
                  Config_Symbol = '-';
                }
                else {
                  if (this.hasAttribute('x-affinity') && this.getAttribute('x-affinity') == '+')
                    Config_Symbol = '';
                  else
                    Config_Symbol = '-';
                }
                Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
              }

              // Aplica a Máscara ao Elemento
              MaskedInput = Inputmask(Config.Rule).mask(this);

              // Define o Atributo x-mode como insertable
              this.setAttribute('x-mode', 'insertable');
            }

            // Atribue o placeholder apenas para o x-type="zerofillint"
            if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofillint')
              Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.sufix;
            // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofillint"
            else
              Placeholder = Config.Rule.prefix + Config_Symbol + Config.placeholder + Config.Rule.sufix;

            // Define o Atributo placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '')
              this.setAttribute('placeholder', Placeholder);

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofillint')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

            // Define o Atributo maxlength
            if (!this.hasAttribute('maxlength') && this.getAttribute('maxlength') != '')
              this.setAttribute('maxlength', Maxlength);

            // Define o Atributo x-limit
            if (!this.hasAttribute('x-limit') && this.getAttribute('x-limit') != '')
              this.setAttribute('x-limit', this.getAttribute('maxlength'));

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            /*
             * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
             * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
             * https://github.com/google/material-design-lite/issues/243
             * https://codepen.io/surma/pen/JXdEqe
             */
            if(this.classList.contains('mdl-textfield__input')) {
              setTimeout(function(){
                App.EXT.Class.Remove($this.parentElement, 'has-placeholder');
                App.EXT.Class.Add($this.parentElement, 'has-placeholder');
              }, 500);
            }

            // Posiciona o Cursor no Final no Valor
            App.EXT.Caret.toEnd(this);

            if (this.value === '') 
              this.setAttribute('x-value', Placeholder);

            // Reseta a Máscara
            if (this.inputmask)
              this.inputmask.remove();

            // Determina os Eventos
            Event = App.EXT.Event.Discover(ua);

            /* 
             * Actions/Events do Inputs
             */
            var Action = {
              "EraseInput":function(event, _kc) {
                var kc = event.keyCode || event.which,
                    key = event.data || event.key,
                    it = event.inputType || event.type,
                    kl = Number(event.target.getAttribute('x-limit'));

                if (it == 'deleteContentBackward') {
                  kc = 8;
                }
                if (it == 'insertCompositionText') {
                  kc = 0;
                }

                if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) 
                  if (_kc !== undefined)
                    kc = _kc;

                if (kc !== undefined || kc !== 229) {
                  // Ação de Excluir com BackSpace
                  if(kc == 8 && kl <= Number(event.target.getAttribute('maxlength'))) {
                    event.preventDefault();
                    var sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                        orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? event.target.value : event.target.getAttribute('x-value'),
                        temp_value = App.EXT.Format.toBigNumber(orig_value.replace(/\D/g, '').slice(0, -1) || 0, Config.Rule.digits),
                        regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                    if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                      var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(temp_value, Config.Rule.max.toString().length) + Config.Rule.sufix,
                          zero_value = Config.Rule.prefix + sign_value + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.sufix;
                    }
                    else {
                      var work_value = App.EXT.Format.toBigMoney(temp_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                          zero_value = Config.Rule.prefix + sign_value + "0" + Config.Rule.radixPoint + "0".repeat(Config.Rule.digits) + Config.Rule.sufix;
                    }

                    if (work_value.replace(regex,'') != zero_value.replace(regex,'')) {
                      event.target.value = work_value;
                      window.data(event.target).input = [];
                      for (var i=0; i < event.target.value.length; i++) {
                        if(App.EXT.Validate.isNumber(event.target.value.charAt(i))) {
                          window.data(event.target).input.push(event.target.value.charAt(i));
                        }
                      }
                      if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                        setTimeout(function(){
                          App.EXT.Caret.SetPosition(event.target, 10000);
                        }, 0);
                      }
                    }
                    else {
                      window.data(event.target).input = [];
                      event.target.value = '';
                      event.target.setAttribute('x-value', '');

                      if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                        event.target.removeAttribute('x-signal');
                    }

                    // Atualiza o Atributo x-value
                    event.target.setAttribute('x-value', event.target.value);

                    // Remove Zeros à Esquerda e o Sinal de Número Negativo
                    var only_value = (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') ? event.target.value.replace(/[^1-9.\\]+\W?0+/, '') : only_value = event.target.value.replace(regex,'');

                    // Atualiza o Atributo x-limit
                    event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0));

                    // Verifica se há Sufixo
                    if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                      // Reposiciona o Cursor ao Final do Valor do Elemento
                      App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                    }
                  }
                  // Ação Para Apagar com Delete
                  if(kc == 46) {
                    event.preventDefault();
                    // Limpa a Matriz Global do Campo
                    window.data(event.target).input = [];

                    // Limpa o Valor e o Valor Temporário
                    event.target.value = '';
                    event.target.setAttribute('x-value', '');

                    // Reseta o Atributo x-limit
                    event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')));

                    if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                      event.target.removeAttribute('x-signal');
                    return false;
                  }
                  return false;
                }
              },
              "SubmitInput":function() {
                try {
                  var sign_value = ($this.hasAttribute('x-signal') && $this.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                  if ($this.hasAttribute('x-type') && $this.getAttribute('x-type') == 'zerofillint') {
                    var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($this.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                        zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                    $this.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                  }
                  else {
                    var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($this.getAttribute('x-value')), Config.Rule.digits),
                        zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                    $this.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                  }
                }
                catch(err) {
                  console.log(err.message);
                };
              },
              "WriteInput":function(event) {
                // Hack para Obtenção do KeyCode ou Which 
                var kc = event.which || event.keyCode,
                    key = event.data || event.key,
                    kl = Number(event.target.getAttribute('x-limit'));

                if (Event.Write === 'textInput') {
                  kc = event.data.charCodeAt(0);
                }
                // Reativa as Teclas Atalhos Padrão
                App.EXT.Event.BindKeys(event, kc, Action);
                // Para Digitação do Sinal de [-]
                if (kc == 45) {
                  event.preventDefault();
                  if (event.target.value != '') {
                    // Para Quando o Campo for Negativo e Houver o Atributo x-case Definido como signed
                    if (event.target.hasAttribute('x-case') && event.target.getAttribute('x-case') == 'signed') {
                      // Se Houver o Sinal o Remove
                      if (event.target.getAttribute('x-value').indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) {
                        event.target.setAttribute('x-signal', 'removed');
                        if(Timeout) {
                            clearTimeout(Timeout);
                            Timeout = null;
                          }
                          Timeout = setTimeout(function(){
                          Config_Symbol = App.DEFAULT.SYMBOL.POSITIVE; // Reatribue a Variável pra não Embassar
                          var regex = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');
                          event.target.setAttribute('x-value', event.target.value.replace(regex,''));
                          event.target.value = event.target.getAttribute('x-value');
                        }, 0);
                      }
                      // Se não Houver o Sinal o Adiciona
                      else {
                        event.target.removeAttribute('x-signal');
                        if(Timeout) {
                            clearTimeout(Timeout);
                            Timeout = null;
                          }
                          Timeout = setTimeout(function(){
                          Config_Symbol = App.DEFAULT.SYMBOL.NEGATIVE; // Reatribue a Variável pra não Embassar
                          var regex = new RegExp("\\" + Config.Rule.prefix.trim() + "\\s*"),
                              value = event.target.getAttribute('x-value').replace(Config.Rule.prefix, '');
                          event.target.setAttribute('x-value', Config.Rule.prefix + App.DEFAULT.SYMBOL.NEGATIVE + value);
                          event.target.value = event.target.getAttribute('x-value');
                        }, 0);
                      }
                    }
                    // Para Quando o Campo for Negativo e o Atributo x-case não esteja Definido como signed
                    else {
                      setTimeout(function(){
                        event.target.setAttribute('x-value', event.target.getAttribute('x-value'));
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }

                    // Verifica se há Sufixo
                    if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                      setTimeout(function(){
                        // Reposiciona o Cursor ao Final do Valor do Elemento
                        App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                      }, 0);
                    }
                  }
                  return;
                }
                // Bloqueia Todas as Tecla Não-Numéricas ou Enquanto Houver Limite
                else if (kc != 45 && (kc < 48 || kc > 57) || kl <= 0) {
                  event.preventDefault();
                  return;
                }
                // Permite Apenas as Tecla Numéricas ou Até Zerar o Limite
                else {
                  setTimeout(function(){
                    // Condição para Quando Está Vazio e Pressionar a Tecla [-]
                    if (event.target.value.length <= 1 && key == App.DEFAULT.SYMBOL.NEGATIVE) {
                      event.target.setAttribute('x-value', '');
                      event.target.value = event.target.getAttribute('x-value');
                    }
                    // Condição para Quaquer Tecla Numérica
                    else {
                      // Para Digitação Apenas de Números
                      if(App.EXT.Validate.isNumber(key)) {
                        var act_value = new BigNumber(App.EXT.Format.toDecimal(event.target.value.replace(/\D/g, ''), Config.Rule.digits)),
                            max_value = new BigNumber(Config.Rule.max.toString()),
                            sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                            regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                        // Enquanto for Menor que o Máximo Permitido
                        if (act_value.isLessThan(max_value)) {

                          window.data(event.target).input.push(key);

                          // Posiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, 10000);

                          var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric((event.target.getAttribute('x-value') || '0')) + '' + Number(key), Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                          if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                            var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                                only_value = work_value.replace(/[^1-9.\\]+\W?0+/, '').replace(/^\-?0+/, '').replace(regex,'');
                          }
                          else {
                            var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                                only_value = work_value.replace(regex, '').replace(regex,'');
                          }

                          event.target.setAttribute('x-value', '');
                          event.target.setAttribute('x-value', work_value);

                          event.target.value = '';
                          event.target.value = event.target.getAttribute('x-value');

                          // Atualiza o Atributo x-liimt
                          event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0) + 1);

                          // Verifica se há Sufixo
                          if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                            // Reposiciona o Cursor ao Final do Valor do Elemento
                            App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                          }
                        }
                        // Se Atingir o Máximo Permitido
                        else {

                          if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                            var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                          else
                            var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                          event.target.setAttribute('x-value', work_value);
                          event.target.value = event.target.getAttribute('x-value');

                          // Verifica se há Sufixo
                          if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                            // Reposiciona o Cursor ao Final do Valor do Elemento
                            App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                          }
                          // Zera o Atributo x-value
                          event.target.setAttribute('x-limit', 0);
                        }
                      }
                    }
                  }, 0);
                  return false;
                }
              },
              "PasteInput":function(event) {
                event.stopPropagation();
                event.preventDefault();

                var clipboardData = event.clipboardData || window.clipboardData,
                    pasted_value = clipboardData.getData('Text') || clipboardData.getData('text/plain'),
                    number_value = pasted_value.replace(/\D/g, '');

                window.data(event.target).input = [];
                for (var i=0; i < number_value.length; i++) {
                  if(App.EXT.Validate.isNumber(number_value.charAt(i))) {
                    window.data(event.target).input.push(number_value.charAt(i));
                  }
                }

                var act_value = new BigNumber(App.EXT.Format.toDecimal(number_value, Config.Rule.digits)),
                    max_value = new BigNumber(Config.Rule.max.toString()),
                    sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;

                // Enquanto for Menor que o Máximo Permitido
                if (act_value.isLessThanOrEqualTo(max_value)) {

                  // Posiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, 10000);

                  var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(number_value, Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                    var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix;
                  else
                    var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                  event.target.setAttribute('x-value', '');
                  event.target.setAttribute('x-value', work_value);

                  event.target.value = '';
                  event.target.value = event.target.getAttribute('x-value');

                  // Atualiza o Atributo x-liimt
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - work_value.length - sign_value);

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                }
                // Se Atingir o Máximo Permitido
                else {

                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                    var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                  else
                    var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                  event.target.setAttribute('x-value', work_value);
                  event.target.value = event.target.getAttribute('x-value');

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                  // Zera o Atributo x-value
                  event.target.setAttribute('x-limit', 0);
                }
              }
            };

            /* 
             * Evento Para Conversão de Números Colados no Input
             */
            App.EXT.Event.Add(this, [Event.Paste], function(event){
              Action.PasteInput(event)
            }, false);

            /* 
             * Evento Para Inclusão de Números ao Input
             */
            App.EXT.Event.Add(this, [Event.Write], function(event){
              Action.WriteInput(event);
            }, false);

            /* 
             * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
             * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
             */
            App.EXT.Event.Add(this, [Event.Erase], function(event){
              if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) {
                var before_value = new App.EXT.Event.Watch(event.target, 'x-value'),
                    after_value = new App.EXT.Event.Watch(event.target, 'value'),
                    before_number = new BigNumber(App.EXT.Format.toDecimal(before_value.get().replace(/\D/g, ''), Config.Rule.digits)),
                    after_number = new BigNumber(App.EXT.Format.toDecimal(after_value.get().replace(/\D/g, ''), Config.Rule.digits));
                if (after_number.isLessThan(before_number)) {
                  Action.EraseInput(event, 8);
                }
              }
              else {
                Action.EraseInput(event);
              }
            }, false);

            /* 
             * Evento Genérico para Converte para Decimal os Campos ao Submeter
             */
            App.EXT.Event.Add(this.form, [Event.Submit], function(event){
              Action.SubmitInput();
            }, false);
          break;
          case 'zerofilldec': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Zero-Fill Signed Dec (De -9223372036854776000.00 à 9223372036854776000.00) 
          case 'positivedec': // Decimal Genérico Equivalente ao MySQL Decimal(18,2) Sem prefixo (De 0 à 18446744073709552000.00) 
          case 'negativedec': // Decimal Genérico Equivalente ao MySQL Decimal(18,2) Sem prefixo (De -9223372036854776000.00 à 0) 
          case 'percentdec': // Decimal Genérico Equivalente ao MySQL Decimal(3,2) Com Sufixo [%] (De -100.00 à 100.00)
          case 'decimal': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Porém no Padrão Nacional Sem prefixo (De -9223372036854776000.00 à 9223372036854776000.00) 
          case 'currency': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Sem prefixo (De -9223372036854776000.00 à 9223372036854776000.00) 
          case 'aed':
          case 'afn':
          case 'all':
          case 'amd':
          case 'ang':
          case 'aoa':
          case 'ars':
          case 'aud':
          case 'awg':
          case 'azn':
          case 'bam':
          case 'bbd':
          case 'bdt':
          case 'bgn':
          case 'bhd':
          case 'bif':
          case 'bmd':
          case 'bnd':
          case 'bob':
          case 'bov':
          case 'brl':
          case 'bsd':
          case 'btn':
          case 'bwp':
          case 'byn':
          case 'byr':
          case 'bzd':
          case 'cad':
          case 'cdf':
          case 'che':
          case 'chf':
          case 'chw':
          case 'clf':
          case 'clp':
          case 'cny':
          case 'cop':
          case 'cou':
          case 'crc':
          case 'cuc':
          case 'cup':
          case 'cve':
          case 'czk':
          case 'djf':
          case 'dkk':
          case 'dop':
          case 'dzd':
          case 'eek':
          case 'egp':
          case 'ern':
          case 'etb':
          case 'eur':
          case 'fjd':
          case 'fkp':
          case 'gbp':
          case 'gel':
          case 'ghs':
          case 'gip':
          case 'gmd':
          case 'gnf':
          case 'gtq':
          case 'gwp':
          case 'gyd':
          case 'hkd':
          case 'hnl':
          case 'hrk':
          case 'htg':
          case 'huf':
          case 'idr':
          case 'ils':
          case 'inr':
          case 'iqd':
          case 'irr':
          case 'isk':
          case 'jmd':
          case 'jod':
          case 'jpy':
          case 'kes':
          case 'kgs':
          case 'khr':
          case 'kmf':
          case 'kpw':
          case 'krw':
          case 'kwd':
          case 'kyd':
          case 'kzt':
          case 'lak':
          case 'lbp':
          case 'lkr':
          case 'lrd':
          case 'lsl':
          case 'ltl':
          case 'luf':
          case 'lvl':
          case 'lyd':
          case 'mad':
          case 'mdl':
          case 'mga':
          case 'mkd':
          case 'mmk':
          case 'mnt':
          case 'mop':
          case 'mro':
          case 'mur':
          case 'mvr':
          case 'mwk':
          case 'mxn':
          case 'mxv':
          case 'myr':
          case 'mzn':
          case 'nad':
          case 'ngn':
          case 'nio':
          case 'nok':
          case 'npr':
          case 'nzd':
          case 'omr':
          case 'pab':
          case 'pen':
          case 'pgk':
          case 'php':
          case 'pkr':
          case 'pln':
          case 'pyg':
          case 'qar':
          case 'ron':
          case 'rsd':
          case 'rub':
          case 'rwf':
          case 'sar':
          case 'sbd':
          case 'scr':
          case 'sdg':
          case 'sek':
          case 'sgd':
          case 'shp':
          case 'sll':
          case 'sos':
          case 'srd':
          case 'ssp':
          case 'std':
          case 'svc':
          case 'syp':
          case 'szl':
          case 'thb':
          case 'tjs':
          case 'tmt':
          case 'tnd':
          case 'top':
          case 'try':
          case 'ttd':
          case 'twd':
          case 'tzs':
          case 'uah':
          case 'ugx':
          case 'usd':
          case 'usn':
          case 'uyi':
          case 'uyu':
          case 'uzs':
          case 'vef':
          case 'vnd':
          case 'vuv':
          case 'wst':
          case 'xaf':
          case 'xcd':
          case 'xof':
          case 'xpf':
          case 'yer':
          case 'zar':
          case 'zmk':
          case 'zmw':
          case 'zwl':

            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.DECIMAL[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Armazenamento do Objeto Principal
            var $this = this, 
                // Define Timer dos Inputs
                Timeout = undefined, 
                // Obtém o Template de Configuração
                Template = App.EXT.JSON.Template(App.DEFAULT.DECIMAL.PATTERN),
                // Carrega as Regras Padrão do Tipo do Componente
                DEFAULT = Template(Rule.RULE);

            // Matriz Única do Elemento
            window.data(this).input = [];

            // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
            var Config = {
              "Rule": {
/*decimal*/     "alias": DEFAULT.RULE.alias,
/*true*/        "numericInput": DEFAULT.RULE.numericInput,
                "digitsOptional": DEFAULT.RULE.digitsOptional,
                "prefix": (!this.hasAttribute('x-prefix') && this.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : this.getAttribute('x-prefix'),
                "sufix": (!this.hasAttribute('x-sufix') && this.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : this.getAttribute('x-sufix'),
                "radixPoint": (!this.hasAttribute('x-decimal-char') && this.getAttribute('x-decimal-char') != '') ? Rule.RULE.radixPoint : this.getAttribute('x-decimal-char'),
                "groupSeparator": (!this.hasAttribute('x-thousands-char') && this.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSeparator : this.getAttribute('x-thousands-char'),
                "groupSize": (!this.hasAttribute('x-thousands-char') && this.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSize : this.getAttribute('x-thousands-char'),
/*true*/        "autoGroup": DEFAULT.RULE.autoGroup,
                "digits": (!this.hasAttribute('x-decimal-digits') && this.getAttribute('x-decimal-digits') != '') ? Rule.RULE.digits : this.getAttribute('x-decimal-digits'),
                "rightAlign": (!this.hasAttribute('x-dir') && this.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((this.getAttribute('x-dir') == 'ltr') ? false : true),
                "allowMinus": (!this.hasAttribute('x-negative') && this.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((this.getAttribute('x-negative') == 'true') ? true : false),
/*true*/        "removeMaskOnSubmit": (!this.hasAttribute('x-onsubmit') && this.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((this.getAttribute('x-onsubmit') == 'true') ? true : false),
/*true*/        "clearMaskOnLostFocus": (!this.hasAttribute('x-onfocusout') && this.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((this.getAttribute('x-onfocusout') == 'true') ? true : false),
/*false*/       "showMaskOnFocus": (!this.hasAttribute('x-onfocusin') && this.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((this.getAttribute('x-onfocusin') == 'true') ? true : false),
/*false*/       "showMaskOnHover": (!this.hasAttribute('x-onhover') && this.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((this.getAttribute('x-onhover') == 'true') ? true : false),
                "min": (!this.hasAttribute('x-min') && this.getAttribute('x-min') != '') ? Rule.RULE.min : this.getAttribute('x-min'),
                "max": (!this.hasAttribute('x-max') && this.getAttribute('x-max') != '') ? Rule.RULE.max : this.getAttribute('x-max'),
                "oncleared": function(event) { event.target.value = ''; window.data(this).input = []; },
                "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
                "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } },
                "placeholder": DEFAULT.RULE.placeholder
              },
/*+*/         "affinity": (!this.hasAttribute('x-affinity') && this.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : this.getAttribute('x-affinity'),
              "placeholder": (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : this.getAttribute('placeholder')
            };

            /*
             * Principais Atributos Públicos dos Tipos: [positivedec, negativedec, currency, percentage, etc..]
             * @property x-dir=Opts([ltr|rtl]) String
             * @property x-decimal-digits=[-9-0-9]{1,n} String
             * @property x-decimal-char=[-9-0-9]{1,n} String
             * @property x-thousands-char=[-9-0-9]{1,n} String
             * @property x-min=[-9-0-9]{1,n} String
             * @property x-max=[-9-0-9]{1,n} String
             * @property x-prefix=[*]{1,n} String
             * @property x-sufix=[*]{1,n} String
             * @property x-negative=[Boolean] String
             * @property x-affinity=Opts([''|'-'|'+']) String
             */

            var Config_Symbol = '', 
                Placeholder = '',
                Event = {},
                Maxlength = 0;
                PositiveValue = true;

            // Se Existe Valor, Verifica é Positivo ou Negativo
            if (this.value !== '') {
              PositiveValue = (this.value > 0) ? true : false;
              // Para os x-type="positivedec" e x-type="negativedec"
              if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positivedec') || (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') ) {
                 // Apenas Positivo
                 if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positivedec') {
                   // Aplica a Flag para Valores Unsigned
                   if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                     this.setAttribute('x-case', 'signed');
                }
                // Apenas Negativo
                if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') {
                  // Remove a Flag para Valores Negativos
                  if (this.hasAttribute('x-case'))
                    this.removeAttribute('x-case');
                  if (!this.hasAttribute('x-negative'))
                    this.setAttribute('x-negative', 'true');
                  // Verifica se Pode Ser Negativo
                  if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') || (this.hasAttribute('x-negative') && this.getAttribute('x-negative') == 'true') ) {
                    Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                    if (!this.hasAttribute('x-negative'))
                      this.setAttribute('x-negative', 'true');
                  }
                }
              }
              else {
                // Aplica a Flag para Valores Signed
                if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                  this.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (this.getAttribute('x-case') == 'signed') {
                  if (!this.hasAttribute('x-affinity'))
                    this.setAttribute('x-affinity', Config.affinity);
                }
                Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
              }

              var act_value = new BigNumber(this.value),
                  max_value = new BigNumber(Config.Rule.max.toString());

              // Corrige o Valor
              this.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

              // Alimenta a Matriz de Caracteres do Componente
              for (var i=0; i < this.value.length; i++) {
                if(App.EXT.Validate.isNumber(this.value.charAt(i))) {
                  window.data(this).input.push(this.value.charAt(i));
                }
              }

              // Atribue o maxlength apenas para o x-type="zerofilldec"
              if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofilldec')
                Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
              // Define o Atributo maxlength
              else
                Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

              // Atribue os Valores
              this.removeAttribute('value');
              this.setAttribute('x-value', App.EXT.Format.toBigMoney(this.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
              this.value = this.getAttribute('x-value');
              this.setAttribute('x-mode', 'overwritable');
              this.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
              this.setAttribute('maxlength', Maxlength);
              this.setAttribute('x-limit', Number(this.getAttribute('maxlength')) - this.value.length);
            }
            // Se Não Existir Valor
            else {
              // Verifica se Pode Ser Signed
              if  ( 
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'aed') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'afn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'all') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'amd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ang') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'aoa') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ars') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'aud') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'awg') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'azn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bam') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bbd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bdt') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bgn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bhd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bif') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bmd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bnd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bob') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bov') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'brl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bsd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'btn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bwp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'byn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'byr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'bzd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cad') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cdf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'che') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'chf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'chw') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'clf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'clp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cny') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cop') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cou') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'crc') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cuc') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cup') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'cve') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'czk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'djf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'dkk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'dop') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'dzd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'eek') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'egp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ern') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'etb') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'eur') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'fjd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'fkp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gbp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gel') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ghs') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gip') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gmd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gnf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gtq') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gwp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'gyd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'hkd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'hnl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'hrk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'htg') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'huf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'idr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ils') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'inr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'iqd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'irr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'isk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'jmd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'jod') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'jpy') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kes') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kgs') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'khr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kmf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kpw') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'krw') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kwd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kyd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'kzt') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lak') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lbp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lkr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lrd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lsl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ltl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'luf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lvl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'lyd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mad') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mdl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mga') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mkd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mmk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mnt') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mop') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mro') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mur') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mvr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mwk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mxn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mxv') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'myr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'mzn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'nad') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ngn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'nio') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'nok') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'npr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'nzd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'omr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pab') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pen') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pgk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'php') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pkr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pln') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'pyg') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'qar') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ron') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'rsd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'rub') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'rwf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sar') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sbd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'scr') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sdg') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sek') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sgd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'shp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sll') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'sos') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'srd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ssp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'std') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'svc') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'syp') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'szl') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'thb') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'tjs') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'tmt') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'tnd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'top') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'try') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ttd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'twd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'tzs') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'uah') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'ugx') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'usd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'usn') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'uyi') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'uyu') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'uzs') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'vef') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'vnd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'vuv') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'wst') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'xaf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'xcd') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'xof') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'xpf') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'yer') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zar') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zmk') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zmw') ||
                    (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zwl') 
                  ) {
                // Aplica a Flag para Valores Unsigned
                if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                  this.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (this.getAttribute('x-case') == 'signed') {
                  if (!this.hasAttribute('x-affinity'))
                    this.setAttribute('x-affinity', Config.affinity);
                }
              }
              else {
                // Para os x-type="positive" e x-type="negative"
                if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positivedec') || (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') ) {
                   // Apenas Positivo
                   if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'positivedec') {
                     // Aplica a Flag para Valores Unsigned
                     if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                       this.setAttribute('x-case', 'unsigned');
                   }
                   // Apenas Negativo
                   if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') {
                     // Remove a Flag para Valores Negativos
                     if (this.hasAttribute('x-case'))
                       this.removeAttribute('x-case');
                     if (!this.hasAttribute('x-negative'))
                       this.setAttribute('x-negative', 'true');
                   }
                }
                // Para os Tipos Signed Diferentes de: x-type="positivedec" e x-type="negativedec"
                else {
                  // Aplica a Flag para Valores Signed
                  if (!this.hasAttribute('x-case') || this.getAttribute('x-case') == 'signed')
                    this.setAttribute('x-case', 'signed');
                  // Valida se é um Signed Negativo
                  if (!this.hasAttribute('x-negative'))
                    this.setAttribute('x-negative', 'true');
                  // Valida se Possui Afinidade
                  if (this.getAttribute('x-case') == 'signed') {
                    if (!this.hasAttribute('x-affinity'))
                      this.setAttribute('x-affinity', Config.affinity);
                  }
                }
              }
              // Verifica se Pode Ser Negativo
              if ( (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'negativedec') || (this.hasAttribute('x-negative') && this.getAttribute('x-negative') == 'true') ) {
                if (this.getAttribute('x-type') == 'negativedec') {
                  Config_Symbol = '-';
                }
                else {
                  if (this.hasAttribute('x-affinity') && this.getAttribute('x-affinity') == '+')
                    Config_Symbol = '';
                  else
                    Config_Symbol = '-';
                }
                Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
                if (!this.hasAttribute('x-negative'))
                  this.setAttribute('x-negative', 'true');
              }

              // Aplica a Máscara ao Elemento
              MaskedInput = Inputmask(Config.Rule).mask(this);

              // Define o Atributo x-mode como insertable
              this.setAttribute('x-mode', 'insertable');
            }

            // Atribue o placeholder apenas para o x-type="zerofilldec"
            if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofilldec')
              Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;
            // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofilldec"
            else
              Placeholder = Config.Rule.prefix + Config_Symbol + '0' + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;

            // Define o Atributo placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '')
              this.setAttribute('placeholder', Placeholder);

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (this.hasAttribute('x-type') && this.getAttribute('x-type') == 'zerofilldec')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

            // Define o Atributo maxlength
            if (!this.hasAttribute('maxlength') && this.getAttribute('maxlength') != '')
              this.setAttribute('maxlength', Maxlength);

            // Define o Atributo x-limit
            if (!this.hasAttribute('x-limit') && this.getAttribute('x-limit') != '')
              this.setAttribute('x-limit', this.getAttribute('maxlength'));

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            /*
             * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
             * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
             * https://github.com/google/material-design-lite/issues/243
             * https://codepen.io/surma/pen/JXdEqe
             */
            if(this.classList.contains('mdl-textfield__input')) {
              setTimeout(function(){
                App.EXT.Class.Remove($this.parentElement, 'has-placeholder');
                App.EXT.Class.Add($this.parentElement, 'has-placeholder');
              }, 500);
            }

            // Posiciona o Cursor no Final no Valor
            App.EXT.Caret.toEnd(this);

            if (this.value === '') 
              this.setAttribute('x-value', Placeholder);

            // Reseta a Máscara
            if (this.inputmask)
              this.inputmask.remove();

            // Determina os Eventos
            Event = App.EXT.Event.Discover(ua);

            /* 
             * Actions/Events do Inputs
             */
            var Action = {
              "EraseInput":function(event, _kc) {
                var kc = event.which || event.keyCode,
                    key = event.data || event.key,
                    it = event.inputType || event.type,
                    kl = Number(event.target.getAttribute('x-limit'));

                if (it == 'deleteContentBackward') {
                  kc = 8;
                }
                if (it == 'insertCompositionText') {
                  kc = 0;
                }

                if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) 
                  if (_kc !== undefined)
                    kc = _kc;

                if (kc !== undefined || kc !== 229) {
                  // Ação de Excluir com BackSpace
                  if(kc == 8 && kl <= Number(event.target.getAttribute('maxlength'))) {
                    event.preventDefault();
                    var sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                        orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric(event.target.value), Config.Rule.digits) : App.EXT.Format.toDecimal(event.target.getAttribute('x-value'), Config.Rule.digits),
                        temp_value = App.EXT.Format.toBigNumber(orig_value.replace(/\D/g, '').slice(0, -1) || 0, Config.Rule.digits),
                        regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                    if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                      var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric(temp_value), Config.Rule.digits), Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                          zero_value = Config.Rule.prefix + sign_value + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;
                    }
                    else {
                      var work_value = App.EXT.Format.toBigMoney(temp_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                          zero_value = Config.Rule.prefix + sign_value + "0" + Config.Rule.radixPoint + "0".repeat(Config.Rule.digits) + Config.Rule.sufix;
                    }

                    if (work_value.replace(regex,'') != zero_value.replace(regex,'')) {
                      event.target.value = work_value;
                      window.data(event.target).input = [];
                      for (var i=0; i < event.target.value.length; i++) {
                        if(App.EXT.Validate.isNumber(event.target.value.charAt(i))) {
                          window.data(event.target).input.push(event.target.value.charAt(i));
                        }
                      }
                      if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                        setTimeout(function(){
                          App.EXT.Caret.SetPosition(event.target, 10000);
                        }, 0);
                      }
                    }
                    else {
                      window.data(event.target).input = [];
                      event.target.value = '';
                      event.target.setAttribute('x-value', '');

                      if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                        event.target.removeAttribute('x-signal');
                    }

                    // Atualiza o Atributo x-value
                    event.target.setAttribute('x-value', event.target.value);

                    // Remove Zeros à Esquerda e o Sinal de Número Negativo
                    var only_value = (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') ? event.target.value.replace(/[^1-9.\\]+\W?0+/, '') : only_value = event.target.value.replace(regex,'');

                    // Atualiza o Atributo x-limit
                    event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0));

                    // Verifica se há Sufixo
                    if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                      // Reposiciona o Cursor ao Final do Valor do Elemento
                      App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                    }
                  }
                  // Ação Para Apagar com Delete
                  if(kc == 46) {
                    event.preventDefault();
                    // Limpa a Matriz Global do Campo
                    window.data(event.target).input = [];

                    // Limpa o Valor e o Valor Temporário
                    event.target.value = '';
                    event.target.setAttribute('x-value', '');

                    // Reseta o Atributo x-limit
                    event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')));

                    if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                      event.target.removeAttribute('x-signal');
                    return false;
                  }
                  return false;
                }
              },
              "SubmitInput":function() {
                try {
                  var sign_value = ($this.hasAttribute('x-signal') && $this.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                  if ($this.hasAttribute('x-type') && $this.getAttribute('x-type') == 'zerofilldec') {
                    var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($this.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                        zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                    $this.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                  }
                  else {
                    var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($this.getAttribute('x-value')), Config.Rule.digits),
                        zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                    $this.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                  }
                }
                catch(err) {
                  console.log(err.message);
                };
              },
              "WriteInput":function(event) {
                // Hack para Obtenção do KeyCode ou Which 
                var kc = event.which || event.keyCode,
                    key = event.data || event.key,
                    kl = Number(event.target.getAttribute('x-limit'));

                if (Event.Write === 'textInput') {
                  kc = event.data.charCodeAt(0);
                }
                // Reativa as Teclas Atalhos Padrão
                App.EXT.Event.BindKeys(event, kc, Action);
                // Para Digitação do Sinal de [-]
                if (kc == 45) {
                  event.preventDefault();
                  if (event.target.value != '') {
                    // Para Quando o Campo for Negativo e Houver o Atributo x-case Definido como signed
                    if (event.target.hasAttribute('x-case') && event.target.getAttribute('x-case') == 'signed') {
                      // Se Houver o Sinal o Remove
                      if (event.target.getAttribute('x-value').indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) {
                        event.target.setAttribute('x-signal', 'removed');
                        if(Timeout) {
                          clearTimeout(Timeout);
                          Timeout = null;
                        }
                        Timeout = setTimeout(function(){
                          Config_Symbol = App.DEFAULT.SYMBOL.POSITIVE; // Reatribue a Variável pra não Embassar
                          var regex = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');
                          event.target.setAttribute('x-value', event.target.value.replace(regex,''));
                          event.target.value = event.target.getAttribute('x-value');
                        }, 0);
                      }
                      // Se não Houver o Sinal o Adiciona
                      else {
                        event.target.removeAttribute('x-signal');
                        if(Timeout) {
                          clearTimeout(Timeout);
                          Timeout = null;
                        }
                        Timeout = setTimeout(function(){
                          Config_Symbol = App.DEFAULT.SYMBOL.NEGATIVE; // Reatribue a Variável pra não Embassar
                          var regex = new RegExp("\\" + Config.Rule.prefix.trim() + "\\s*"),
                              value = event.target.getAttribute('x-value').replace(Config.Rule.prefix, '');
                          event.target.setAttribute('x-value', Config.Rule.prefix + App.DEFAULT.SYMBOL.NEGATIVE + value);
                          event.target.value = event.target.getAttribute('x-value');
                        }, 0);
                      }
                    }
                    // Para Quando o Campo for Negativo e o Atributo x-case não esteja Definido como signed
                    else {
                      setTimeout(function(){
                        event.target.setAttribute('x-value', event.target.getAttribute('x-value'));
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }

                    // Verifica se há Sufixo
                    if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                      setTimeout(function(){
                        // Reposiciona o Cursor ao Final do Valor do Elemento
                        App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                      }, 0);
                    }
                  }
                  return;
                }
                // Bloqueia Todas as Tecla Não-Numéricas ou Enquanto Houver Limite
                else if (kc != 45 && (kc < 48 || kc > 57) || kl <= 0) {
                  event.preventDefault();
                  return;
                }
                // Permite Apenas as Tecla Numéricas ou Até Zerar o Limite
                else {
                  setTimeout(function(){
                    // Condição para Quando Está Vazio e Pressionar a Tecla [-]
                    if (event.target.value.length <= 1 && key == App.DEFAULT.SYMBOL.NEGATIVE) {
                      event.target.setAttribute('x-value', '');
                      event.target.value = event.target.getAttribute('x-value');
                    }
                    // Condição para Quaquer Tecla Numérica
                    else {
                      // Para Digitação Apenas de Números
                      if(App.EXT.Validate.isNumber(key)) {
                        var act_value = new BigNumber(App.EXT.Format.toDecimal(event.target.value.replace(/\D/g, ''), Config.Rule.digits)),
                            max_value = new BigNumber(Config.Rule.max.toString()),
                            sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                            regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                        // Enquanto for Menor que o Máximo Permitido
                        if (act_value.isLessThan(max_value)) {

                          // Armazena a Tecla Numerica Pressionada
                          window.data(event.target).input.push(key);

                          // Posiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, 10000);

                          var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric((event.target.getAttribute('x-value') || '0')) + '' + Number(key), Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                          if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                            var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                                only_value = work_value.replace(/[^1-9.\\]+\W?0+/, '').replace(/^\-?0+/, '').replace(regex,'');
                          }
                          else {
                            var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                                only_value = work_value.replace(regex, '').replace(regex,'');
                          }

                          event.target.setAttribute('x-value', '');
                          event.target.setAttribute('x-value', work_value);

                          event.target.value = '';
                          event.target.value = event.target.getAttribute('x-value');

                          // Atualiza o Atributo x-liimt
                          event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0) + 1);

                          // Verifica se há Sufixo
                          if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                            // Reposiciona o Cursor ao Final do Valor do Elemento
                            App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                          }
                        }
                        // Se Atingir o Máximo Permitido
                        else {

                          if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                            var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                          else
                            var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                          event.target.setAttribute('x-value', work_value);
                          event.target.value = event.target.getAttribute('x-value');

                          // Verifica se há Sufixo
                          if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                            // Reposiciona o Cursor ao Final do Valor do Elemento
                            App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                          }
                          // Zera o Atributo x-value
                          event.target.setAttribute('x-limit', 0);
                        }
                      }
                    }
                  }, 0);
                  return false;
                }
              },
              "PasteInput":function(event) {
                event.stopPropagation();
                event.preventDefault();

                var clipboardData = event.clipboardData || window.clipboardData,
                    pasted_value = clipboardData.getData('Text') || clipboardData.getData('text/plain'),
                    number_value = pasted_value.replace(/\D/g, '');

                window.data(event.target).input = [];
                for (var i=0; i < number_value.length; i++) {
                  if(App.EXT.Validate.isNumber(number_value.charAt(i))) {
                    window.data(event.target).input.push(number_value.charAt(i));
                  }
                }

                var act_value = new BigNumber(App.EXT.Format.toDecimal(number_value, Config.Rule.digits)),
                    max_value = new BigNumber(Config.Rule.max.toString()),
                    sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;

                // Enquanto for Menor que o Máximo Permitido
                if (act_value.isLessThanOrEqualTo(max_value)) {

                  // Posiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, 10000);

                  var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(number_value, Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                    var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix;
                  else
                    var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                  event.target.setAttribute('x-value', '');
                  event.target.setAttribute('x-value', work_value);

                  event.target.value = '';
                  event.target.value = event.target.getAttribute('x-value');

                  // Atualiza o Atributo x-liimt
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - work_value.length - sign_value);

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                }
                // Se Atingir o Máximo Permitido
                else {

                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                    var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                  else
                    var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                  event.target.setAttribute('x-value', work_value);
                  event.target.value = event.target.getAttribute('x-value');

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                  // Zera o Atributo x-value
                  event.target.setAttribute('x-limit', 0);
                }
              }
            };

            /* 
             * Evento Para Conversão de Números Colados no Input
             */
            App.EXT.Event.Add(this, [Event.Paste], function(event){
              Action.PasteInput(event)
            }, false);

            /* 
             * Evento Para Inclusão de Números ao Input
             */
            App.EXT.Event.Add(this, [Event.Write], function(event){
              Action.WriteInput(event);
            }, false);

            /* 
             * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
             * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
             */
            App.EXT.Event.Add(this, [Event.Erase], function(event){
              if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) {
                var before_value = new App.EXT.Event.Watch(event.target, 'x-value'),
                    after_value = new App.EXT.Event.Watch(event.target, 'value'),
                    before_number = new BigNumber(App.EXT.Format.toDecimal(before_value.get().replace(/\D/g, ''), Config.Rule.digits)),
                    after_number = new BigNumber(App.EXT.Format.toDecimal(after_value.get().replace(/\D/g, ''), Config.Rule.digits));
                if (after_number.isLessThan(before_number)) {
                  Action.EraseInput(event, 8);
                }
              }
              else {
                Action.EraseInput(event);
              }
            }, false);

            /* 
             * Evento Genérico para Converte para Decimal os Campos ao Submeter
             */
            App.EXT.Event.Add(this.form, [Event.Submit], function(event){
              Action.SubmitInput();
            }, false);
          break;
          case 'placa_veicular':
          case 'chassi_veicular':
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule).mask(this);

            /* Define o Atributo Placeholder */
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', MaskedInput.getemptymask());
            }
          break;
          case 'fone':
          case 'fone_fixo':
          case 'fones':
          case 'fones_regex':
          case 'isbn':
          case 'cep':
          case 'cpf':
          case 'cnpj':
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule).mask(this);

            // Define o Atributo Placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', MaskedInput.getemptymask());
            }

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');
          break;
          case 'cpf_cnpj':
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule).mask(this);

            // Define o Atributo Placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', MaskedInput.getemptymask());
            }

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            this.addEventListener("blur", function(event) {
              if (event.target.hasAttribute('x-valid') && event.target.getAttribute('x-valid') == 'true') {
                if (event.target.value.length == 14) {
                  // Validação Embutida
                  if(!App.EXT.Validate.CPF(event.target.value)) {
                    // Reseta a Máscara
                    App.EXT.Reset.Mask(event);
                  }
                }
                else {
                  // Validação Embutida
                  if(!App.EXT.Validate.CNPJ(event.target.value)) {
                    // Reseta a Máscara
                    App.EXT.Reset.Mask(event);
                  }
                }
              }
            }, false);
          break;
          case 'data_br':
          case 'data_br_regex':
          case 'data_iso':
          case 'data_iso_regex':
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule).mask(this);

            // Define o Atributo Placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', Rule.placeholder);
            }

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            this.addEventListener("blur", function(event) {
              if (Rule.placeholder.length > event.target.value.length) {
                // Reseta a Máscara
                App.EXT.Reset.Mask(event);
              }
            }, false);
          break;
          case 'hora':
          case 'hora_regex':
            if (this.hasAttribute('x-format') && this.getAttribute('x-format') == '12h') {
              // Obtém a Matriz de Regra pelo Tipo do Componente
              Rule = App.PATTERN.MASK.HORA_12H_REGEX;
            }
            else if (this.hasAttribute('x-format') && this.getAttribute('x-format') == '24h') {
              // Obtém a Matriz de Regra pelo Tipo do Componente
              Rule = App.PATTERN.MASK.HORA_24H_REGEX;
            }
            else {
              // Obtém a Matriz de Regra pelo Tipo do Componente
              Rule = App.PATTERN.MASK.HORA;
            }
            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule).mask(this);

            // Define o Atributo Placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', Rule.placeholder);
            }

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            this.addEventListener("blur", function(event) {
              if (Rule.placeholder.length > event.target.value.length) {
                // Reseta a Máscara
                App.EXT.Reset.Mask(event);
              }
            }, false);
          break;
          case 'data_hora_br':
          case 'data_hora_iso':
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Rule.mask).mask(this);

            // Define o Atributo Placeholder
            if (!this.hasAttribute('placeholder') && this.getAttribute('placeholder') != '') {
              this.setAttribute('placeholder', Rule.placeholder);
            }

            // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
            if (!this.hasAttribute('inputmode') && this.getAttribute('inputmode') != '')
              this.setAttribute('inputmode', 'numeric');

            // Substitui o Atributo para Tel
            if (ua.device.type == 'mobile')
              this.setAttribute('type', 'tel');

            // Reseta a Máscara Caso esteja Incompleta
            App.EXT.Event.Add(this, ['blur'], function(event){
              if (Rule.placeholder.length > event.target.value.length) {
                // Reseta a Máscara
                App.EXT.Reset.Mask(event, true);
              }
            }, false);
          break;
        }

      }

    };

    /* Cross-browser fallback */
    document.registerElement = document.registerElement || document.register;

    /* Element registration using x-tag format */
    document.registerElement('x-input', {
      extends: 'input',
      prototype: proto
    });

  })();