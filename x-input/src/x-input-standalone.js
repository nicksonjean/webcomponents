/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com) and contributors,  MIT License
 * es6-shim: v0.35.1
 * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(e){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(e){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Map;var H=G&&G.prototype["delete"];var V=G&&G.prototype.get;var B=G&&G.prototype.has;var U=G&&G.prototype.set;var $=S.Symbol||{};var J=$.species||"@@species";var X=Number.isNaN||function isNaN(e){return e!==e};var K=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Z=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(X(t)){return t}return t<0?-1:1};var Y=function isArguments(e){return g(e)==="[object Arguments]"};var Q=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var ee=Y(arguments)?Y:Q;var te={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var re=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ne=typeof $==="function"&&typeof $["for"]==="function"&&te.symbol($());var oe=te.symbol($.iterator)?$.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){oe="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ie=S.Reflect;var ae=String;var ue=typeof document==="undefined"||!document?null:document.all;var fe=ue==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==ue};var se={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!se.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(fe(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===ue},ToObject:function(e,t){return Object(se.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return se.IsCallable(e)},ToInt32:function(e){return se.ToNumber(e)>>0},ToUint32:function(e){return se.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=se.ToNumber(e);if(X(t)){return 0}if(t===0||!K(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=se.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return se.TypeIsObject(e)&&(typeof e[oe]!=="undefined"||ee(e))},GetIterator:function(e){if(ee(e)){return new q(e,"value")}var t=se.GetMethod(e,oe);if(!se.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=se.Call(t,e);if(!se.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=se.ToObject(e)[t];if(fe(r)){return void 0}if(!se.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=se.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=se.Call(r,e)}catch(e){o=e}if(t){return}if(o){throw o}if(!se.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!se.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=se.IteratorNext(e);var r=se.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ie.construct){return ie.construct(e,t,o)}var i=o.prototype;if(!se.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=se.Call(e,a,t);return se.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!se.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[J];if(fe(n)){return t}if(!se.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=se.ToString(e);var i="<"+t;if(r!==""){var a=se.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!se.TypeIsObject(e)){return false}var t=e[$.match];if(typeof t!=="undefined"){return!!t}return te.regex(e)},ToString:function ToString(e){return ae(e)}};if(s&&ne){var ce=function defineWellKnownSymbol(e){if(te.symbol($[e])){return $[e]}var t=$["for"]("Symbol."+e);Object.defineProperty($,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!te.symbol($.search)){var le=ce("search");var pe=String.prototype.search;h(RegExp.prototype,le,function search(e){return se.Call(pe,e,[this])});var ve=function search(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,le);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(pe,t,[se.ToString(e)])};re(String.prototype,"search",ve)}if(!te.symbol($.replace)){var ye=ce("replace");var he=String.prototype.replace;h(RegExp.prototype,ye,function replace(e,t){return se.Call(he,e,[this,t])});var be=function replace(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ye);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(he,r,[se.ToString(e),t])};re(String.prototype,"replace",be)}if(!te.symbol($.split)){var ge=ce("split");var de=String.prototype.split;h(RegExp.prototype,ge,function split(e,t){return se.Call(de,e,[this,t])});var me=function split(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ge);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(de,r,[se.ToString(e),t])};re(String.prototype,"split",me)}var Oe=te.symbol($.match);var we=Oe&&function(){var e={};e[$.match]=function(){return 42};return"a".match(e)!==42}();if(!Oe||we){var je=ce("match");var Se=String.prototype.match;h(RegExp.prototype,je,function match(e){return se.Call(Se,e,[this])});var Te=function match(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,je);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(Se,t,[se.ToString(e)])};re(String.prototype,"match",Te)}}var Ie=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ee=function(){return this};var Pe=function(e){if(s&&!z(e,J)){m.getter(e,J,Ee)}};var Ce=function(e,t){var r=t||function iterator(){return this};h(e,oe,r);if(!e[oe]&&te.symbol(oe)){e[oe]=r}};var Me=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var xe=function createDataPropertyOrThrow(e,t,r){Me(e,t,r);if(!se.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Ne=function(e,t,r,n){if(!se.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!se.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ae=String.fromCodePoint;re(String,"fromCodePoint",function fromCodePoint(e){return se.Call(Ae,this,arguments)})}var Re={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!se.SameValue(r,se.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=se.ToObject(e,"bad callSite");var r=se.ToObject(t.raw,"bad raw value");var n=r.length;var o=se.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=se.ToString(a);s=se.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=se.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){re(String,"raw",Re.raw)}b(String,Re);var _e=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ke=Infinity;var Fe={repeat:function repeat(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);if(r<0||r>=ke){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return _e(t,r)},startsWith:function startsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=se.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(se.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=se.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:se.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(se.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=se.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){re(String.prototype,"includes",Fe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Le=i(function(){"/a/".startsWith(/a/)});var De=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Le||!De){re(String.prototype,"startsWith",Fe.startsWith);re(String.prototype,"endsWith",Fe.endsWith)}}if(ne){var ze=a(function(){var e=/a/;e[$.match]=false;return"/a/".startsWith(e)});if(!ze){re(String.prototype,"startsWith",Fe.startsWith)}var qe=a(function(){var e=/a/;e[$.match]=false;return"/a/".endsWith(e)});if(!qe){re(String.prototype,"endsWith",Fe.endsWith)}var We=a(function(){var e=/a/;e[$.match]=false;return"/a/".includes(e)});if(!We){re(String.prototype,"includes",Fe.includes)}}b(String.prototype,Fe);var Ge=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var He=new RegExp("(^["+Ge+"]+)|(["+Ge+"]+$)","g");var Ve=function trim(){return se.ToString(se.RequireObjectCoercible(this)).replace(He,"")};var Be=["\x85","\u200b","\ufffe"].join("");var Ue=new RegExp("["+Be+"]","g");var $e=/^[-+]0x[0-9a-f]+$/i;var Je=Be.trim().length!==Be.length;h(String.prototype,"trim",Ve,Je);var Xe=function(e){return{value:e,done:arguments.length===0}};var Ke=function(e){se.RequireObjectCoercible(e);this._s=se.ToString(e);this._i=0};Ke.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Xe()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Xe(e.substr(t,o))};Ce(Ke.prototype);Ce(String.prototype,function(){return new Ke(this)});var Ze={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!se.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(ee(e)||se.GetMethod(e,oe))!=="undefined";var u,f,s;if(a){f=se.IsConstructor(r)?Object(new r):[];var c=se.GetIterator(e);var l,p;s=0;while(true){l=se.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(e){se.IteratorClose(c,true);throw e}s+=1}u=s}else{var v=se.ToObject(e);u=se.ToLength(v.length);f=se.IsConstructor(r)?Object(new r(u)):new Array(u);var y;for(s=0;s<u;++s){y=v[s];if(o){y=typeof i==="undefined"?n(y,s):t(n,i,y,s)}xe(f,s,y)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!se.IsCallable(t)?new Array(e):se.Construct(t,[e]);for(var o=0;o<e;++o){xe(n,o,arguments[o])}n.length=e;return n}};b(Array,Ze);Pe(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=se.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Xe(o)}}this.array=void 0;return Xe()}});Ce(q.prototype);var Ye=Array.of===Ze.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Ye){re(Array,"of",Ze.of)}var Qe={copyWithin:function copyWithin(e,t){var r=se.ToObject(this);var n=se.ToLength(r.length);var o=se.ToInteger(e);var i=se.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:se.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=se.ToObject(this);var o=se.ToLength(n.length);t=se.ToInteger(typeof t==="undefined"?0:t);r=se.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!se.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!se.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[oe]){b(Array.prototype,{values:Array.prototype[oe]});if(te.symbol($.unscopables)){Array.prototype[$.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var et=Array.prototype.values;re(Array.prototype,"values",function values(){return se.Call(et,this,arguments)});h(Array.prototype,oe,Array.prototype.values,true)}b(Array.prototype,Qe);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}Ce(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Ce(Object.getPrototypeOf([].values()))}var tt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var rt=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!tt||!rt){re(Array,"from",Ze.from)}var nt=function(){return a(function(){return Array.from([0],void 0)})}();if(!nt){var ot=Array.from;re(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return se.Call(ot,this,arguments)}else{return t(ot,this,e)}})}var it=-(Math.pow(2,32)-1);var at=function(e,r){var n={length:it};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!at(Array.prototype.forEach)){var ut=Array.prototype.forEach;re(Array.prototype,"forEach",function forEach(e){return se.Call(ut,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.map)){var ft=Array.prototype.map;re(Array.prototype,"map",function map(e){return se.Call(ft,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.filter)){var st=Array.prototype.filter;re(Array.prototype,"filter",function filter(e){return se.Call(st,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.some)){var ct=Array.prototype.some;re(Array.prototype,"some",function some(e){return se.Call(ct,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.every)){var lt=Array.prototype.every;re(Array.prototype,"every",function every(e){return se.Call(lt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduce)){var pt=Array.prototype.reduce;re(Array.prototype,"reduce",function reduce(e){return se.Call(pt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduceRight,true)){var vt=Array.prototype.reduceRight;re(Array.prototype,"reduceRight",function reduceRight(e){return se.Call(vt,this.length>=0?this:[],arguments)},true)}var yt=Number("0o10")!==8;var ht=Number("0b10")!==2;var bt=y(Be,function(e){return Number(e+0+e)===0});if(yt||ht||bt){var gt=Number;var dt=/^0b[01]+$/i;var mt=/^0o[0-7]+$/i;var Ot=dt.test.bind(dt);var wt=mt.test.bind(mt);var jt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(te.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(te.primitive(t)){return t}}throw new TypeError("No default value")};var St=Ue.test.bind(Ue);var Tt=$e.test.bind($e);var It=function(){var e=function Number(t){var r;if(arguments.length>0){r=te.primitive(t)?t:jt(t,"number")}else{r=0}if(typeof r==="string"){r=se.Call(Ve,r);if(Ot(r)){r=parseInt(C(r,2),2)}else if(wt(r)){r=parseInt(C(r,2),8)}else if(St(r)||Tt(r)){r=NaN}}var n=this;var o=a(function(){gt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new gt(r)}return gt(r)};return e}();Ie(gt,It,{});b(It,{NaN:gt.NaN,MAX_VALUE:gt.MAX_VALUE,MIN_VALUE:gt.MIN_VALUE,NEGATIVE_INFINITY:gt.NEGATIVE_INFINITY,POSITIVE_INFINITY:gt.POSITIVE_INFINITY});Number=It;m.redefine(S,"Number",It)}var Et=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Et,MIN_SAFE_INTEGER:-Et,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:K,isInteger:function isInteger(e){return K(e)&&se.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){re(Array.prototype,"find",Qe.find)}if([,1].findIndex(function(){return true})!==0){re(Array.prototype,"findIndex",Qe.findIndex)}var Pt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ct=function ensureEnumerable(e,t){if(s&&Pt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Mt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var xt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Nt=function(e,t){var r=n(Object(t));var o;if(se.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Pt(t))}return p(P(r,o||[]),xt(t),e)};var At={assign:function(e,t){var r=se.ToObject(e,"Cannot convert undefined or null to object");return p(se.Call(Mt,1,arguments),Nt,r)},is:function is(e,t){return se.SameValue(e,t)}};var Rt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Rt){re(Object,"assign",At.assign)}b(Object,At);if(s){var _t={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!se.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||se.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(t){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,_t)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var kt=!i(function(){Object.keys("foo")});if(!kt){var Ft=Object.keys;re(Object,"keys",function keys(e){return Ft(se.ToObject(e))});n=Object.keys}var Lt=i(function(){Object.keys(/a/g)});if(Lt){var Dt=Object.keys;re(Object,"keys",function keys(e){if(te.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Dt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var zt=!i(function(){Object.getOwnPropertyNames("foo")});if(!zt){var qt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Wt=Object.getOwnPropertyNames;re(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=se.ToObject(e);if(g(t)==="[object Window]"){try{return Wt(t)}catch(e){return P([],qt)}}return Wt(t)})}}if(Object.getOwnPropertyDescriptor){var Gt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Gt){var Ht=Object.getOwnPropertyDescriptor;re(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ht(se.ToObject(e),t)})}}if(Object.seal){var Vt=!i(function(){Object.seal("foo")});if(!Vt){var Bt=Object.seal;re(Object,"seal",function seal(e){if(!se.TypeIsObject(e)){return e}return Bt(e)})}}if(Object.isSealed){var Ut=!i(function(){Object.isSealed("foo")});if(!Ut){var $t=Object.isSealed;re(Object,"isSealed",function isSealed(e){if(!se.TypeIsObject(e)){return true}return $t(e)})}}if(Object.freeze){var Jt=!i(function(){Object.freeze("foo")});if(!Jt){var Xt=Object.freeze;re(Object,"freeze",function freeze(e){if(!se.TypeIsObject(e)){return e}return Xt(e)})}}if(Object.isFrozen){var Kt=!i(function(){Object.isFrozen("foo")});if(!Kt){var Zt=Object.isFrozen;re(Object,"isFrozen",function isFrozen(e){if(!se.TypeIsObject(e)){return true}return Zt(e)})}}if(Object.preventExtensions){var Yt=!i(function(){Object.preventExtensions("foo")});if(!Yt){var Qt=Object.preventExtensions;re(Object,"preventExtensions",function preventExtensions(e){if(!se.TypeIsObject(e)){return e}return Qt(e)})}}if(Object.isExtensible){var er=!i(function(){Object.isExtensible("foo")});if(!er){var tr=Object.isExtensible;re(Object,"isExtensible",function isExtensible(e){if(!se.TypeIsObject(e)){return false}return tr(e)})}}if(Object.getPrototypeOf){var rr=!i(function(){Object.getPrototypeOf("foo")});if(!rr){var nr=Object.getPrototypeOf;re(Object,"getPrototypeOf",function getPrototypeOf(e){return nr(se.ToObject(e))})}}var or=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&se.IsCallable(e.get)}();if(s&&!or){var ir=function flags(){if(!se.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ir)}var ar=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var ur=ne&&s&&function(){var e=/./;e[$.match]=false;return RegExp(e)===e}();var fr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var sr=fr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!fr||!sr){var cr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=se.RequireObjectCoercible(this);if(te.regex(e)){return t(cr,e)}var r=ae(e.source);var n=ae(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,cr)}if(s&&(!ar||ur)){var lr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var pr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var vr=function(){return this.source};var yr=se.IsCallable(pr.get)?pr.get:vr;var hr=RegExp;var br=function(){return function RegExp(e,t){var r=se.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(te.regex(e)){o=se.Call(yr,e);i=typeof t==="undefined"?se.Call(lr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new hr(e,t)}}();Ie(hr,br,{$input:true});RegExp=br;m.redefine(S,"RegExp",br)}if(s){var gr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(gr),function(e){if(e in RegExp&&!(gr[e]in RegExp)){m.getter(RegExp,gr[e],function get(){return RegExp[e]})}})}Pe(RegExp);var dr=1/Number.EPSILON;var mr=function roundTiesToEven(e){return e+dr-dr};var Or=Math.pow(2,-23);var wr=Math.pow(2,127)*(2-Or);var jr=Math.pow(2,-126);var Sr=Math.E;var Tr=Math.LOG2E;var Ir=Math.LOG10E;var Er=Number.prototype.clz;delete Number.prototype.clz;var Pr={acosh:function acosh(e){var t=Number(e);if(X(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/Sr+D(t+1)*D(t-1)/Sr)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(X(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=se.ToUint32(t);if(r===0){return 32}return Er?se.Call(Er,r):31-_(L(r+.5)*Tr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(X(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*Tr},log10:function log10(e){return L(e)*Ir},log1p:function log1p(e){var t=Number(e);if(t<-1||X(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:Z,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*Sr/2},tanh:function tanh(e){var t=Number(e);if(X(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=se.ToUint32(e);var n=se.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Z(t);var n=k(t);if(n<jr){return r*mr(n/jr/Or)*jr*Or}var o=(1+Or/Number.EPSILON)*n;var i=o-(o-n);if(i>wr||X(i)){return r*Infinity}return r*i}};b(Math,Pr);h(Math,"log1p",Pr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Pr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",Pr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Pr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",Pr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",Pr.sinh,Math.sinh(-2e-17)!==-2e-17);var Cr=Math.expm1(10);h(Math,"expm1",Pr.expm1,Cr>22025.465794806718||Cr<22025.465794806718);var Mr=Math.round;var xr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Nr=dr+1;var Ar=2*dr-1;var Rr=[Nr,Ar].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!xr||!Rr);m.preserveToString(Math.round,Mr);var _r=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Pr.imul;m.preserveToString(Math.imul,_r)}if(Math.imul.length!==2){re(Math,"imul",function imul(e,t){return se.Call(_r,Math,arguments)})}var kr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}se.IsPromise=function(e){if(!se.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!se.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(se.IsCallable(t.resolve)&&se.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&se.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=se.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(se.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(e){n=e;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!se.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(t){return m(e,t)}if(!se.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(e){i(e)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!se.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Ne(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(e){o(e)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=se.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(t){e.done=true;throw t}o[f]=void 0;var s=t.resolve(u);var c=P(f,o,r,i);i.count+=1;w(s.then,s,c,r.reject);f+=1}if(--i.count===0){var l=r.resolve;l(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=se.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(t){e.done=true;throw t}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},race:function race(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},reject:function reject(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(se.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{catch:function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!se.IsPromise(n)){throw new TypeError("not a promise")}var o=se.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=se.IsCallable(e)?e:a;var d=se.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof kr==="function"){b(S,{Promise:kr});var Fr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Lr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Dr=i(function(){S.Promise.call(3,W)});var zr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(e){return true}return t===r}(S.Promise);var qr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Wr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Wr.prototype=Promise.prototype;Wr.all=Promise.all;var Gr=a(function(){return!!Wr.all([1,2])});if(!Fr||!Lr||!Dr||zr||!qr||Gr){Promise=kr;re(S,"Promise",kr)}if(Promise.all.length!==1){var Hr=Promise.all;re(Promise,"all",function all(e){return se.Call(Hr,this,arguments)})}if(Promise.race.length!==1){var Vr=Promise.race;re(Promise,"race",function race(e){return se.Call(Vr,this,arguments)})}if(Promise.resolve.length!==1){var Br=Promise.resolve;re(Promise,"resolve",function resolve(e){return se.Call(Br,this,arguments)})}if(Promise.reject.length!==1){var Ur=Promise.reject;re(Promise,"reject",function reject(e){return se.Call(Ur,this,arguments)})}Ct(Promise,"all");Ct(Promise,"race");Ct(Promise,"resolve");Ct(Promise,"reject");Pe(Promise)}var $r=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Jr=$r(["z","a","bb"]);var Xr=$r(["z",1,"a","3",2]);if(s){var Kr=function fastkey(e,t){if(!t&&!Jr){return null}if(fe(e)){return"^"+se.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Xr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Zr=function emptyObject(){return Object.create?Object.create(null):{}};var Yr=function addIterableToMap(e,n,o){if(r(o)||te.string(o)){l(o,function(e){if(!se.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!fe(o)){a=n.set;if(!se.IsCallable(a)){throw new TypeError("bad map")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!se.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(e){se.IteratorClose(i,true);throw e}}}}};var Qr=function addIterableToSet(e,n,o){if(r(o)||te.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!fe(o)){a=n.add;if(!se.IsCallable(a)){throw new TypeError("bad set")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(e){se.IteratorClose(i,true);throw e}}}}};var en={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!se.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+se.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Xe()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Xe(n)}}this.i=void 0;return Xe()}};Ce(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Ne(this,Map,a,{_es6map:true,_head:null,_map:G?new G:null,_size:0,_storage:Zr()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Yr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Kr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=V.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Kr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return B.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(se.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Kr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(B.call(this._map,e)){V.call(this._map,e).value=t}else{a=new r(e,t);U.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(se.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},delete:function(t){o(this,"delete");var r=this._head;var n=r;var i=Kr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!B.call(this._map,t)){return false}n=V.call(this._map,t).prev;H.call(this._map,t)}while((n=n.next)!==r){if(se.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=G?new G:null;this._size=0;this._storage=Zr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Ce(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!se.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+se.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Ne(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Zr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){Qr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new en.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Kr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Kr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},delete:function(e){r(this,"delete");var t;if(this._storage&&(t=Kr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Zr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);Ce(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var tn=a(function(){return new Map([[1,2]]).get(1)===2});if(!tn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(G.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var rn=new Map;var nn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var on=rn.set(1,2)===rn;if(!nn||!on){re(Map.prototype,"set",function set(e,r){t(U,this,e===0?0:e,r);return this})}if(!nn){b(Map.prototype,{get:function get(e){return t(V,this,e===0?0:e)},has:function has(e){return t(B,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,V);m.preserveToString(Map.prototype.has,B)}var an=new Set;var un=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(an);var fn=an.add(1)===an;if(!un||!fn){var sn=Set.prototype.add;Set.prototype.add=function add(e){t(sn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,sn)}if(!un){var cn=Set.prototype.has;Set.prototype.has=function has(e){return t(cn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,cn);var ln=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ln,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],ln)}var pn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var vn=Object.setPrototypeOf&&!pn;var yn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||vn||!yn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=G.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var hn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var bn=Object.setPrototypeOf&&!hn;var gn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||bn||!gn){var dn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new dn;if(arguments.length>0){Qr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=dn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,dn)}var mn=new S.Map;var On=!a(function(){return mn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||mn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof mn.keys().next!=="function"||On||!pn){b(S,{Map:en.Map,Set:en.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}Ce(Object.getPrototypeOf((new S.Map).keys()));Ce(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var wn=S.Set.prototype.has;re(S.Set.prototype,"has",function has(e){return t(wn,this,e)})}}b(S,en);Pe(S.Map);Pe(S.Set)}var jn=function throwUnlessTargetIsObject(e){if(!se.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Sn={apply:function apply(){return se.Call(se.Call,null,arguments)},construct:function construct(e,t){if(!se.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!se.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return se.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){jn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){jn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Sn,{ownKeys:function ownKeys(e){jn(e);var t=Object.getOwnPropertyNames(e);if(se.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Tn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Sn,{isExtensible:function isExtensible(e){jn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){jn(e);return Tn(function(){Object.preventExtensions(e)})}})}if(s){var In=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return In(o,t,r)}if("value"in n){return n.value}if(n.get){return se.Call(n.get,r)}return void 0};var En=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return En(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!se.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ie.defineProperty(o,r,{value:n})}else{return ie.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Sn,{defineProperty:function defineProperty(e,t,r){jn(e);return Tn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){jn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){jn(e);var r=arguments.length>2?arguments[2]:e;return In(e,t,r)},set:function set(e,t,r){jn(e);var n=arguments.length>3?arguments[3]:e;return En(e,t,r,n)}})}if(Object.getPrototypeOf){var Pn=Object.getPrototypeOf;Sn.getPrototypeOf=function getPrototypeOf(e){jn(e);return Pn(e)}}if(Object.setPrototypeOf&&Sn.getPrototypeOf){var Cn=function(e,t){var r=t;while(r){if(e===r){return true}r=Sn.getPrototypeOf(r)}return false};Object.assign(Sn,{setPrototypeOf:function setPrototypeOf(e,t){jn(e);if(t!==null&&!se.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ie.getPrototypeOf(e)){return true}if(ie.isExtensible&&!ie.isExtensible(e)){return false}if(Cn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Mn=function(e,t){if(!se.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){re(S.Reflect,e,t)}}};Object.keys(Sn).forEach(function(e){Mn(e,Sn[e])});var xn=S.Reflect.getPrototypeOf;if(c&&xn&&xn.name!=="getPrototypeOf"){re(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(xn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){re(S.Reflect,"setPrototypeOf",Sn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){re(S.Reflect,"defineProperty",Sn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){re(S.Reflect,"construct",Sn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Nn=Date.prototype.toString;var An=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return se.Call(Nn,this)};re(Date.prototype,"toString",An)}var Rn={anchor:function anchor(e){return se.CreateHTML(this,"a","name",e)},big:function big(){return se.CreateHTML(this,"big","","")},blink:function blink(){return se.CreateHTML(this,"blink","","")},bold:function bold(){return se.CreateHTML(this,"b","","")},fixed:function fixed(){return se.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return se.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return se.CreateHTML(this,"font","size",e)},italics:function italics(){return se.CreateHTML(this,"i","","")},link:function link(e){return se.CreateHTML(this,"a","href",e)},small:function small(){return se.CreateHTML(this,"small","","")},strike:function strike(){return se.CreateHTML(this,"strike","","")},sub:function sub(){return se.CreateHTML(this,"sub","","")},sup:function sub(){return se.CreateHTML(this,"sup","","")}};l(Object.keys(Rn),function(e){var r=String.prototype[e];var n=false;if(se.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){re(String.prototype,e,Rn[e])}});var _n=function(){if(!ne){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e($())!=="undefined"){return true}if(e([$()])!=="[null]"){return true}var t={a:$()};t[$()]=true;if(e(t)!=="{}"){return true}return false}();var kn=a(function(){if(!ne){return true}return JSON.stringify(Object($()))==="{}"&&JSON.stringify([Object($())])==="[{}]"});if(_n||!kn){var Fn=JSON.stringify;re(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=se.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(te.symbol(n)){return xt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Fn.apply(this,o)})}return S});

/*!
 * Console table polyfill for Internet Explorer
 * https://github.com/IamPitchou/console.table
 * https://github.com/chrisrng/ie-console-table
 * https://chrisrng.svbtle.com/ie-consoletable-functionality
 * @author: Tim (IamPitchou)
 * (c) GitHub, Inc., MIT License
 */
void 0===console.table&&(console.table=function(o,e){if(o.constructor===Object){if(e)if("object"!=typeof e){e=[];for(var r in o)for(var n in o[r])-1===e.indexOf(n)&&e.push(n)}else{i="(index)";for(var f in e)i+=" | ",i+=e[f];console.log(i)}else{var e=[];for(var n in o[0])-1===e.indexOf(n)&&e.push(n);var i="(index)";for(var f in e)i+=" | ",i+=e[f];console.log(i)}for(var l in o){for(var a=o[l],s=l+"",v=0;v<e.length;v++)s+=" | ",s+=a[e[v]];console.log(s)}}else if(o.constructor===Array){if(e)if("object"!=typeof e){e=[];for(var r in o)for(var n in o[r])-1===e.indexOf(n)&&e.push(n)}else{i="(index)";for(var f in e)i+=" | ",i+=e[f];console.log(i)}else{e=[];for(var n in o[0])-1===e.indexOf(n)&&e.push(n);var i="(index)";for(var f in e)i+=" | ",i+=e[f];console.log(i)}for(var c=0;c<o.length;c++){for(a=o[c],s=c+"",v=0;v<e.length;v++)s+=" | ",s+=a[e[v]];console.log(s)}}});

/*!
 * Placeholders.js v4.0.1
 * The MIT License
 * Copyright (c) 2012 James Allardice
 * https://jamesallardice.github.io/Placeholders.js/
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);

/*!
 * classList.js: Cross-browser full element.classList implementation v1.1.20170427
 * By Remy Sharp, https://github.com/remy/polyfills
 * License: Dedicated to the public domain.
 * See https://github.com/remy/polyfills/blob/master/classList.js/
 */
!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var t,i,n,e=Array.prototype,s=e.push,o=e.splice,r=e.join;c.prototype={add:function(t){this.contains(t)||(s.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var i=0;i<this.length&&this[i]!=t;i++);o.call(this,i,1),this.el.className=this.toString()}},toString:function(){return r.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=c,t=Element.prototype,i="classList",n=function(){return new c(this)},Object.defineProperty?Object.defineProperty(t,i,{get:n}):t.__defineGetter__(i,n)}function c(t){this.el=t;for(var i=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<i.length;n++)s.call(this,i[n])}}();

/*!
 * bignumber.js v9.0.0
 * A JavaScript library for arbitrary-precision arithmetic.
 * https://github.com/MikeMcl/bignumber.js
 * Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
 * MIT Licensed.
 */
!function(e){"use strict";function r(e){function c(e,r){var n,t,i,s,u,f,a,g=this;if(!(g instanceof c))return new c(e,r);if(null==r){if(e instanceof c)return g.s=e.s,g.e=e.e,void(g.c=(e=e.c)?e.slice():e);if(u="number"==typeof e,u&&0*e==0){if(g.s=0>1/e?(e=-e,-1):1,e===~~e){for(i=0,s=e;s>=10;s/=10,i++);return g.e=i,void(g.c=[e])}a=e+""}else{if(!l.test(a=e+""))return S(g,a,u);g.s=45==a.charCodeAt(0)?(a=a.slice(1),-1):1}}else{if(o(r,2,k.length,"Base"),a=e+"",10==r)return g=new c(e instanceof c?e:a),A(g,D+g.e+1,T);if(u="number"==typeof e){if(0*e!=0)return S(g,a,u,r);if(g.s=0>1/e?(a=a.slice(1),-1):1,a.replace(/^0\.0*|\./,"").length>15)throw Error(p+e);u=!1}else g.s=45===a.charCodeAt(0)?(a=a.slice(1),-1):1,r>10&&37>r&&(a=a.toLowerCase());for(n=k.slice(0,r),i=s=0,f=a.length;f>s;s++)if(n.indexOf(t=a.charAt(s))<0){if("."==t&&s>i){i=f;continue}return S(g,e+"",u,r)}a=P(a,r,10,g.s)}for((i=a.indexOf("."))>-1&&(a=a.replace(".","")),(s=a.search(/e/i))>0?(0>i&&(i=s),i+=+a.slice(s+1),a=a.substring(0,s)):0>i&&(i=a.length),s=0;48===a.charCodeAt(s);s++);for(f=a.length;48===a.charCodeAt(--f););if(a=a.slice(s,f+1)){if(f=a.length,u&&f>15&&(e>w||e!==h(e)))throw Error(p+g.s*e);if(i=i-s-1,i>C)g.c=g.e=null;else if(x>i)g.c=[g.e=0];else{if(g.e=i,g.c=[],s=(i+1)%m,0>i&&(s+=m),f>s){for(s&&g.c.push(+a.slice(0,s)),f-=m;f>s;)g.c.push(+a.slice(s,s+=m));a=a.slice(s),s=m-a.length}else s-=f;for(;s--;a+="0");g.c.push(+a)}}else g.c=[g.e=0]}function y(e,r,n,i){var s,l,a,h,g;if(null==n?n=T:o(n,0,8),!e.c)return e.toString();if(s=e.c[0],a=e.e,null==r)g=t(e.c),g=1==i||2==i&&I>=a?u(g,a):f(g,a,"0");else if(e=A(new c(e),r,n),l=e.e,g=t(e.c),h=g.length,1==i||2==i&&(l>=r||I>=l)){for(;r>h;g+="0",h++);g=u(g,l)}else if(r-=a,g=f(g,l,"0"),l+1>h){if(--r>0)for(g+=".";r--;g+="0");}else if(r+=l-h,r>0)for(l+1==h&&(g+=".");r--;g+="0");return e.s<0&&s?"-"+g:g}function b(e,r){var n,t,i=0;for(s(e[0])&&(e=e[0]),n=new c(e[0]);++i<e.length;){if(t=new c(e[i]),!t.s){n=t;break}r.call(n,t)&&(n=t)}return n}function E(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*m-1)>C?e.c=e.e=null:x>n?e.c=[e.e=0]:(e.e=n,e.c=r),e}function A(e,r,n,t){var i,o,s,u,f,c,l,g=e.c,p=v;if(g){e:{for(i=1,u=g[0];u>=10;u/=10,i++);if(o=r-i,0>o)o+=m,s=r,f=g[c=0],l=f/p[i-s-1]%10|0;else if(c=a((o+1)/m),c>=g.length){if(!t)break e;for(;g.length<=c;g.push(0));f=l=0,i=1,o%=m,s=o-m+1}else{for(f=u=g[c],i=1;u>=10;u/=10,i++);o%=m,s=o-m+i,l=0>s?0:f/p[i-s-1]%10|0}if(t=t||0>r||null!=g[c+1]||(0>s?f:f%p[i-s-1]),t=4>n?(l||t)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||t||6==n&&(o>0?s>0?f/p[i-s]:0:g[c-1])%10&1||n==(e.s<0?8:7)),1>r||!g[0])return g.length=0,t?(r-=e.e+1,g[0]=p[(m-r%m)%m],e.e=-r||0):g[0]=e.e=0,e;if(0==o?(g.length=c,u=1,c--):(g.length=c+1,u=p[m-o],g[c]=s>0?h(f/p[i-s]%p[s])*u:0),t)for(;;){if(0==c){for(o=1,s=g[0];s>=10;s/=10,o++);for(s=g[0]+=u,u=1;s>=10;s/=10,u++);o!=u&&(e.e++,g[0]==d&&(g[0]=1));break}if(g[c]+=u,g[c]!=d)break;g[c--]=0,u=1}for(o=g.length;0===g[--o];g.pop());}e.e>C?e.c=e.e=null:e.e<x&&(e.c=[e.e=0])}return e}var R,P,S,_=c.prototype,L=new c(1),D=20,T=4,I=-7,B=21,x=-1e7,C=1e7,M=!1,U=1,F=0,G={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},k="0123456789abcdefghijklmnopqrstuvwxyz";return c.clone=r,c.ROUND_UP=0,c.ROUND_DOWN=1,c.ROUND_CEIL=2,c.ROUND_FLOOR=3,c.ROUND_HALF_UP=4,c.ROUND_HALF_DOWN=5,c.ROUND_HALF_EVEN=6,c.ROUND_HALF_CEIL=7,c.ROUND_HALF_FLOOR=8,c.EUCLID=9,c.config=c.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(g+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],o(n,0,O,r),D=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],o(n,0,8,r),T=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],s(n)?(o(n[0],-O,0,r),o(n[1],0,O,r),I=n[0],B=n[1]):(o(n,-O,O,r),I=-(B=0>n?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],s(n))o(n[0],-O,-1,r),o(n[1],1,O,r),x=n[0],C=n[1];else{if(o(n,-O,O,r),!n)throw Error(g+r+" cannot be zero: "+n);x=-(C=0>n?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(g+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw M=!n,Error(g+"crypto unavailable");M=n}else M=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],o(n,0,9,r),U=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],o(n,0,O,r),F=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(g+r+" not an object: "+n);G=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.$|\.|(.).*\1/.test(n))throw Error(g+r+" invalid: "+n);k=n}}return{DECIMAL_PLACES:D,ROUNDING_MODE:T,EXPONENTIAL_AT:[I,B],RANGE:[x,C],CRYPTO:M,MODULO_MODE:U,POW_PRECISION:F,FORMAT:G,ALPHABET:k}},c.isBigNumber=function(e){return e instanceof c||e&&e._isBigNumber===!0||!1},c.maximum=c.max=function(){return b(arguments,_.lt)},c.minimum=c.min=function(){return b(arguments,_.gt)},c.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return h(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,s,u,f=0,l=[],p=new c(L);if(null==e?e=D:o(e,0,O),s=a(e/m),M)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));s>f;)u=131072*n[f]+(n[f+1]>>>11),u>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[f]=t[0],n[f+1]=t[1]):(l.push(u%1e14),f+=2);f=s/2}else{if(!crypto.randomBytes)throw M=!1,Error(g+"crypto unavailable");for(n=crypto.randomBytes(s*=7);s>f;)u=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6],u>=9e15?crypto.randomBytes(7).copy(n,f):(l.push(u%1e14),f+=7);f=s/7}if(!M)for(;s>f;)u=r(),9e15>u&&(l[f++]=u%1e14);for(s=l[--f],e%=m,s&&e&&(u=v[m-e],l[f]=h(s/u)*u);0===l[f];l.pop(),f--);if(0>f)l=[i=0];else{for(i=-1;0===l[0];l.splice(0,1),i-=m);for(f=1,u=l[0];u>=10;u/=10,f++);m>f&&(i-=m-f)}return p.e=i,p.c=l,p}}(),P=function(){function e(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;f>u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}var r="0123456789";return function(n,i,o,s,u){var l,a,h,g,p,d,m,w,v=n.indexOf("."),N=D,O=T;for(v>=0&&(g=F,F=0,n=n.replace(".",""),w=new c(i),d=w.pow(n.length-v),F=g,w.c=e(f(t(d.c),d.e,"0"),10,o,r),w.e=w.c.length),m=e(n,i,o,u?(l=k,r):(l=r,k)),h=g=m.length;0==m[--g];m.pop());if(!m[0])return l.charAt(0);if(0>v?--h:(d.c=m,d.e=h,d.s=s,d=R(d,w,N,O,o),m=d.c,p=d.r,h=d.e),a=h+N+1,v=m[a],g=o/2,p=p||0>a||null!=m[a+1],p=4>O?(null!=v||p)&&(0==O||O==(d.s<0?3:2)):v>g||v==g&&(4==O||p||6==O&&1&m[a-1]||O==(d.s<0?8:7)),1>a||!m[0])n=p?f(l.charAt(1),-N,l.charAt(0)):l.charAt(0);else{if(m.length=a,p)for(--o;++m[--a]>o;)m[a]=0,a||(++h,m=[1].concat(m));for(g=m.length;!m[--g];);for(v=0,n="";g>=v;n+=l.charAt(m[v++]));n=f(n,h,l.charAt(0))}return n}}(),R=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,c=r%N,l=r/N|0;for(e=e.slice();f--;)o=e[f]%N,s=e[f]/N|0,t=l*o+s*c,i=c*o+t%N*N+u,u=(i/n|0)+(t/N|0)+l*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;n>i;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(i,o,s,u,f){var l,a,g,p,w,v,N,O,y,b,E,R,P,S,_,L,D,T=i.s==o.s?1:-1,I=i.c,B=o.c;if(!(I&&I[0]&&B&&B[0]))return new c(i.s&&o.s&&(I?!B||I[0]!=B[0]:B)?I&&0==I[0]||!B?0*T:T/0:NaN);for(O=new c(T),y=O.c=[],a=i.e-o.e,T=s+a+1,f||(f=d,a=n(i.e/m)-n(o.e/m),T=T/m|0),g=0;B[g]==(I[g]||0);g++);if(B[g]>(I[g]||0)&&a--,0>T)y.push(1),p=!0;else{for(S=I.length,L=B.length,g=0,T+=2,w=h(f/(B[0]+1)),w>1&&(B=e(B,w,f),I=e(I,w,f),L=B.length,S=I.length),P=L,b=I.slice(0,L),E=b.length;L>E;b[E++]=0);D=B.slice(),D=[0].concat(D),_=B[0],B[1]>=f/2&&_++;do{if(w=0,l=r(B,b,L,E),0>l){if(R=b[0],L!=E&&(R=R*f+(b[1]||0)),w=h(R/_),w>1)for(w>=f&&(w=f-1),v=e(B,w,f),N=v.length,E=b.length;1==r(v,b,N,E);)w--,t(v,N>L?D:B,N,f),N=v.length,l=1;else 0==w&&(l=w=1),v=B.slice(),N=v.length;if(E>N&&(v=[0].concat(v)),t(b,v,E,f),E=b.length,-1==l)for(;r(B,b,L,E)<1;)w++,t(b,E>L?D:B,E,f),E=b.length}else 0===l&&(w++,b=[0]);y[g++]=w,b[0]?b[E++]=I[P]||0:(b=[I[P]],E=1)}while((P++<S||null!=b[0])&&T--);p=null!=b[0],y[0]||y.splice(0,1)}if(f==d){for(g=1,T=y[0];T>=10;T/=10,g++);A(O,s+(O.e=g+a*m-1)+1,u,p)}else O.e=a,O.r=+p;return O}}(),S=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,s,u,f){var l,a=u?s:s.replace(i,"");if(!t.test(a)){if(!u&&(a=a.replace(e,function(e,r,n){return l="x"==(n=n.toLowerCase())?16:"b"==n?2:8,f&&f!=l?e:r}),f&&(l=f,a=a.replace(r,"$1").replace(n,"0.$1")),s!=a))return new c(a,l);throw Error(g+"Not a"+(f?" base "+f:"")+" number: "+s)}o.s=isNaN(a)?null:0>a?-1:1,o.c=o.e=null}}(),_.absoluteValue=_.abs=function(){var e=new c(this);return e.s<0&&(e.s=1),e},_.comparedTo=function(e,r){return i(this,new c(e,r))},_.decimalPlaces=_.dp=function(e,r){var t,i,s,u=this;if(null!=e)return o(e,0,O),null==r?r=T:o(r,0,8),A(new c(u),e+u.e+1,r);if(!(t=u.c))return null;if(i=((s=t.length-1)-n(this.e/m))*m,s=t[s])for(;s%10==0;s/=10,i--);return 0>i&&(i=0),i},_.dividedBy=_.div=function(e,r){return R(this,new c(e,r),D,T)},_.dividedToIntegerBy=_.idiv=function(e,r){return R(this,new c(e,r),0,1)},_.isEqualTo=_.eq=function(e,r){return 0===i(this,new c(e,r))},_.integerValue=function(e){var r=new c(this);return null==e?e=T:o(e,0,8),A(r,r.e+1,e)},_.isGreaterThan=_.gt=function(e,r){return i(this,new c(e,r))>0},_.isGreaterThanOrEqualTo=_.gte=function(e,r){return 1===(r=i(this,new c(e,r)))||0===r},_.isFinite=function(){return!!this.c},_.isInteger=function(){return!!this.c&&n(this.e/m)>this.c.length-2},_.isNaN=function(){return!this.s},_.isNegative=function(){return this.s<0},_.isPositive=function(){return this.s>0},_.isZero=function(){return!!this.c&&0==this.c[0]},_.isLessThan=_.lt=function(e,r){return i(this,new c(e,r))<0},_.isLessThanOrEqualTo=_.lte=function(e,r){return-1===(r=i(this,new c(e,r)))||0===r},_.minus=function(e,r){var t,i,o,s,u=this,f=u.s;if(e=new c(e,r),r=e.s,!f||!r)return new c(NaN);if(f!=r)return e.s=-r,u.plus(e);var l=u.e/m,a=e.e/m,h=u.c,g=e.c;if(!l||!a){if(!h||!g)return h?(e.s=-r,e):new c(g?u:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new c(h[0]?u:3==T?-0:0)}if(l=n(l),a=n(a),h=h.slice(),f=l-a){for((s=0>f)?(f=-f,o=h):(a=l,o=g),o.reverse(),r=f;r--;o.push(0));o.reverse()}else for(i=(s=(f=h.length)<(r=g.length))?f:r,f=r=0;i>r;r++)if(h[r]!=g[r]){s=h[r]<g[r];break}if(s&&(o=h,h=g,g=o,e.s=-e.s),r=(i=g.length)-(t=h.length),r>0)for(;r--;h[t++]=0);for(r=d-1;i>f;){if(h[--i]<g[i]){for(t=i;t&&!h[--t];h[t]=r);--h[t],h[i]+=d}h[i]-=g[i]}for(;0==h[0];h.splice(0,1),--a);return h[0]?E(e,h,a):(e.s=3==T?-1:1,e.c=[e.e=0],e)},_.modulo=_.mod=function(e,r){var n,t,i=this;return e=new c(e,r),!i.c||!e.s||e.c&&!e.c[0]?new c(NaN):!e.c||i.c&&!i.c[0]?new c(i):(9==U?(t=e.s,e.s=1,n=R(i,e,0,3),e.s=t,n.s*=t):n=R(i,e,0,U),i.minus(n.times(e)))},_.multipliedBy=_.times=function(e,r){var t,i,o,s,u,f,l,a,h,g,p,w,v,O,y,b=this,A=b.c,R=(e=new c(e,r)).c;if(!(A&&R&&A[0]&&R[0]))return!b.s||!e.s||A&&!A[0]&&!R||R&&!R[0]&&!A?e.c=e.e=e.s=null:(e.s*=b.s,A&&R?(e.c=[0],e.e=0):e.c=e.e=null),e;for(i=n(b.e/m)+n(e.e/m),e.s*=b.s,l=A.length,g=R.length,g>l&&(v=A,A=R,R=v,o=l,l=g,g=o),o=l+g,v=[];o--;v.push(0));for(O=d,y=N,o=g;--o>=0;){for(t=0,p=R[o]%y,w=R[o]/y|0,u=l,s=o+u;s>o;)a=A[--u]%y,h=A[u]/y|0,f=w*a+h*p,a=p*a+f%y*y+v[s]+t,t=(a/O|0)+(f/y|0)+w*h,v[s--]=a%O;v[s]=t}return t?++i:v.splice(0,1),E(e,v,i)},_.negated=function(){var e=new c(this);return e.s=-e.s||null,e},_.plus=function(e,r){var t,i=this,o=i.s;if(e=new c(e,r),r=e.s,!o||!r)return new c(NaN);if(o!=r)return e.s=-r,i.minus(e);var s=i.e/m,u=e.e/m,f=i.c,l=e.c;if(!s||!u){if(!f||!l)return new c(o/0);if(!f[0]||!l[0])return l[0]?e:new c(f[0]?i:0*o)}if(s=n(s),u=n(u),f=f.slice(),o=s-u){for(o>0?(u=s,t=l):(o=-o,t=f),t.reverse();o--;t.push(0));t.reverse()}for(o=f.length,r=l.length,0>o-r&&(t=l,l=f,f=t,r=o),o=0;r;)o=(f[--r]=f[r]+l[r]+o)/d|0,f[r]=d===f[r]?0:f[r]%d;return o&&(f=[o].concat(f),++u),E(e,f,u)},_.precision=_.sd=function(e,r){var n,t,i,s=this;if(null!=e&&e!==!!e)return o(e,1,O),null==r?r=T:o(r,0,8),A(new c(s),e,r);if(!(n=s.c))return null;if(i=n.length-1,t=i*m+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&s.e+1>t&&(t=s.e+1),t},_.shiftedBy=function(e){return o(e,-w,w),this.times("1e"+e)},_.squareRoot=_.sqrt=function(){var e,r,i,o,s,u=this,f=u.c,l=u.s,a=u.e,h=D+4,g=new c("0.5");if(1!==l||!f||!f[0])return new c(!l||0>l&&(!f||f[0])?NaN:f?u:1/0);if(l=Math.sqrt(+u),0==l||l==1/0?(r=t(f),(r.length+a)%2==0&&(r+="0"),l=Math.sqrt(r),a=n((a+1)/2)-(0>a||a%2),l==1/0?r="1e"+a:(r=l.toExponential(),r=r.slice(0,r.indexOf("e")+1)+a),i=new c(r)):i=new c(l+""),i.c[0])for(a=i.e,l=a+h,3>l&&(l=0);;)if(s=i,i=g.times(s.plus(R(u,s,h,1))),t(s.c).slice(0,l)===(r=t(i.c)).slice(0,l)){if(i.e<a&&--l,r=r.slice(l-3,l+1),"9999"!=r&&(o||"4999"!=r)){(!+r||!+r.slice(1)&&"5"==r.charAt(0))&&(A(i,i.e+D+2,1),e=!i.times(i).eq(u));break}if(!o&&(A(s,s.e+D+2,0),s.times(s).eq(u))){i=s;break}h+=4,l+=4,o=1}return A(i,i.e+D+1,T,e)},_.toExponential=function(e,r){return null!=e&&(o(e,0,O),e++),y(this,e,r,1)},_.toFixed=function(e,r){return null!=e&&(o(e,0,O),e=e+this.e+1),y(this,e,r)},_.toFormat=function(e,r){var n=this.toFixed(e,r);if(this.c){var t,i=n.split("."),o=+G.groupSize,s=+G.secondaryGroupSize,u=G.groupSeparator,f=i[0],c=i[1],l=this.s<0,a=l?f.slice(1):f,h=a.length;if(s&&(t=o,o=s,s=t,h-=t),o>0&&h>0){for(t=h%o||o,f=a.substr(0,t);h>t;t+=o)f+=u+a.substr(t,o);s>0&&(f+=u+a.slice(t)),l&&(f="-"+f)}n=c?f+G.decimalSeparator+((s=+G.fractionGroupSize)?c.replace(new RegExp("\\d{"+s+"}\\B","g"),"$&"+G.fractionGroupSeparator):c):f}return n},_.toFraction=function(e){var r,n,i,o,s,u,f,l,a,h,p,d,w=this,N=w.c;if(null!=e&&(l=new c(e),!l.isInteger()||l.lt(L)))throw Error(g+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+e);if(!N)return w.toString();for(n=new c(L),h=i=new c(L),o=a=new c(L),d=t(N),u=n.e=d.length-w.e-1,n.c[0]=v[(f=u%m)<0?m+f:f],e=!e||l.comparedTo(n)>0?u>0?n:h:l,f=C,C=1/0,l=new c(d),a.c[0]=0;p=R(l,n,0,1),s=i.plus(p.times(o)),1!=s.comparedTo(e);)i=o,o=s,h=a.plus(p.times(s=h)),a=s,n=l.minus(p.times(s=n)),l=s;return s=R(e.minus(i),o,0,1),a=a.plus(s.times(h)),i=i.plus(s.times(o)),a.s=h.s=w.s,u*=2,r=R(h,o,u,T).minus(w).abs().comparedTo(R(a,i,u,T).minus(w).abs())<1?[h.toString(),o.toString()]:[a.toString(),i.toString()],C=f,r},_.toNumber=function(){return+this},_.exponentiatedBy=_.pow=function(e,r){var n,t,i,s,u=this;for(o(e,-w,w),null!=r&&(r=new c(r)),r?e>1&&u.gt(L)&&u.isInteger()&&r.gt(L)&&r.isInteger()?u=u.mod(r):(s=r,r=null):F&&(t=a(F/m+2)),i=new c(L),n=h(0>e?-e:e);;){if(n%2){if(i=i.times(u),!i.c)break;t?i.c.length>t&&(i.c.length=t):r&&(i=i.mod(r))}if(n=h(n/2),!n)break;u=u.times(u),t?u.c&&u.c.length>t&&(u.c.length=t):r&&(u=u.mod(r))}return r?i:(0>e&&(i=L.div(i)),s?i.mod(s):t?A(i,F,T):i)},_.toPrecision=function(e,r){return null!=e&&o(e,1,O),y(this,e,r,2)},_.toString=function(e){var r,n=this,i=n.s,s=n.e;return null===s?i?(r="Infinity",0>i&&(r="-"+r)):r="NaN":(r=t(n.c),null==e?r=I>=s||s>=B?u(r,s):f(r,s,"0"):(o(e,2,k.length,"Base"),r=P(f(r,s,"0"),10,e,i,!0)),0>i&&n.c[0]&&(r="-"+r)),r},_.valueOf=_.toJSON=function(){var e,r=this,n=r.e;return null===n?r.toString():(e=t(r.c),e=I>=n||n>=B?u(e,n):f(e,n,"0"),r.s<0?"-"+e:e)},_._isBigNumber=!0,null!=e&&c.set(e),c}function n(e){var r=0|e;return e>0||e===r?r:r-1}function t(e){for(var r,n,t=1,i=e.length,o=e[0]+"";i>t;){for(r=e[t++]+"",n=m-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function i(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,c=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=0>s,t=f==c,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>c^n?1:-1;for(u=(f=i.length)<(c=o.length)?f:c,s=0;u>s;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==c?0:f>c^n?1:-1}function o(e,r,n,t){if(r>e||e>n||e!==(0>e?a(e):h(e)))throw Error(g+(t||"Argument")+("number"==typeof e?r>e||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function s(e){return"[object Array]"==Object.prototype.toString.call(e)}function u(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(0>r?"e":"e+")+r}function f(e,r,n){var t,i;if(0>r){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else t>r&&(e=e.slice(0,r)+"."+e.slice(r));return e}var c,l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,h=Math.floor,g="[BigNumber Error] ",p=g+"Number primitive has more than 15 significant digits: ",d=1e14,m=14,w=9007199254740991,v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],N=1e7,O=1e9;c=r(),c["default"]=c.BigNumber=c,"function"==typeof define&&define.amd?define(function(){return c}):"undefined"!=typeof module&&module.exports?module.exports=c:(e||(e="undefined"!=typeof self?self:Function("return this")()),e.BigNumber=c)}(this);

/*!
 * UAParser.js v0.7.17
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
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
!function(e){"function"==typeof define&&define.amd?define(["../global/window","../global/document"],e):"object"==typeof exports?module.exports=e(require("../global/window"),require("../global/document")):window.dependencyLib=e(window,document)}(function(t,v){function r(e){return null!=e&&e===e.window}function d(e){return e instanceof Element}function p(e){return e instanceof p?e:this instanceof p?void(null!=e&&e!==t&&(this[0]=e.nodeName?e:void 0!==e[0]&&e[0].nodeName?e[0]:v.querySelector(e),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new p(e)}return p.prototype={on:function(e,t){if(d(this[0]))for(var n=this[0].eventRegistry,i=this[0],r=e.split(" "),o=0;o<r.length;o++){var a=r[o].split(".");l=a[0],s=a[1]||"global",i.addEventListener?i.addEventListener(l,t,!1):i.attachEvent&&i.attachEvent("on"+l,t),n[l]=n[l]||{},n[l][s]=n[l][s]||[],n[l][s].push(t)}var l,s;return this},off:function(e,l){if(d(this[0]))for(var s=this[0].eventRegistry,r=this[0],t=e.split(" "),n=0;n<t.length;n++)for(var i=t[n].split("."),o=function(e,t){var n,i,r=[];if(0<e.length)if(void 0===l)for(n=0,i=s[e][t].length;n<i;n++)r.push({ev:e,namespace:t&&0<t.length?t:"global",handler:s[e][t][n]});else r.push({ev:e,namespace:t&&0<t.length?t:"global",handler:l});else if(0<t.length)for(var o in s)for(var a in s[o])if(a===t)if(void 0===l)for(n=0,i=s[o][a].length;n<i;n++)r.push({ev:o,namespace:a,handler:s[o][a][n]});else r.push({ev:o,namespace:a,handler:l});return r}(i[0],i[1]),a=0,f=o.length;a<f;a++)!function(e,t,n){if(e in s==1)if(r.removeEventListener?r.removeEventListener(e,n,!1):r.detachEvent&&r.detachEvent("on"+e,n),"global"===t)for(var i in s[e])s[e][i].splice(s[e][i].indexOf(n),1);else s[e][t].splice(s[e][t].indexOf(n),1)}(o[a].ev,o[a].namespace,o[a].handler);return this},trigger:function(e){if(d(this[0]))for(var t=this[0].eventRegistry,n=this[0],i="string"==typeof e?e.split(" "):[e.type],r=0;r<i.length;r++){var o=i[r].split("."),a=o[0],l=o[1]||"global";if(void 0!==v&&"global"===l){var s,f,c={bubbles:!0,cancelable:!0,detail:Array.prototype.slice.call(arguments,1)};if(v.createEvent){try{s=new CustomEvent(a,c)}catch(e){(s=v.createEvent("CustomEvent")).initCustomEvent(a,c.bubbles,c.cancelable,c.detail)}e.type&&p.extend(s,e),n.dispatchEvent(s)}else(s=v.createEventObject()).eventType=a,e.type&&p.extend(s,e),n.fireEvent("on"+s.eventType,s)}else if(void 0!==t[a])if(e=e.type?e:p.Event(e),"global"===l)for(var u in t[a])for(f=0;f<t[a][u].length;f++)t[a][u][f].apply(n,arguments);else for(f=0;f<t[a][l].length;f++)t[a][l][f].apply(n,arguments)}return this}},p.isFunction=function(e){return"function"==typeof e},p.noop=function(){},p.isArray=Array.isArray,p.inArray=function(e,t,n){return null==t?-1:function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1}(t,e)},p.valHooks=void 0,p.isPlainObject=function(e){return!("object"!=typeof e||e.nodeType||r(e)||e.constructor&&!Object.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))},p.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},l=1,s=arguments.length,f=!1;for("boolean"==typeof a&&(f=a,a=arguments[l]||{},l++),"object"==typeof a||p.isFunction(a)||(a={}),l===s&&(a=this,l--);l<s;l++)if(null!=(e=arguments[l]))for(t in e)n=a[t],a!==(i=e[t])&&(f&&i&&(p.isPlainObject(i)||(r=p.isArray(i)))?(o=r?(r=!1,n&&p.isArray(n)?n:[]):n&&p.isPlainObject(n)?n:{},a[t]=p.extend(f,o,i)):void 0!==i&&(a[t]=i));return a},p.each=function(e,t){var n=0;if(function(e){var t="length"in e&&e.length,n=typeof e;return"function"!=n&&!r(e)&&(!(1!==e.nodeType||!t)||"array"==n||0===t||"number"==typeof t&&0<t&&t-1 in e)}(e))for(var i=e.length;n<i&&!1!==t.call(e[n],n,e[n]);n++);else for(n in e)if(!1===t.call(e[n],n,e[n]))break;return e},p.data=function(e,t,n){if(void 0===n)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n},"function"==typeof t.CustomEvent?p.Event=t.CustomEvent:(p.Event=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=v.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}).prototype=t.Event.prototype,p});

/*!
 * inputmask.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.0-91
 */
!function(e){"function"==typeof define&&define.amd?define(["./dependencyLibs/inputmask.dependencyLib","./global/window","./global/document"],e):"object"==typeof exports?module.exports=e(require("./dependencyLibs/inputmask.dependencyLib"),require("./global/window"),require("./global/document")):window.Inputmask=e(window.dependencyLib||jQuery,window,document)}(function(J,Y,ee,te){function ne(e,t,n){if(!(this instanceof ne))return new ne(e,t,n);this.el=te,this.events={},this.maskset=te,!(this.refreshValue=!1)!==n&&(J.isPlainObject(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=J.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==te,this.userOptions=t||{},this.isRTL=this.opts.numericInput,u(this.opts.alias,t,this.opts))}function u(e,t,n){var i=ne.prototype.aliases[e];return i?(i.alias&&u(i.alias,te,n),J.extend(!0,n,i),J.extend(!0,n,t),!0):(null===n.mask&&(n.mask=e),!1)}function r(n,s){function e(e,t,n){var i=!1;if(null!==e&&""!==e||(e=(i=null!==n.regex)?(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(i=!0,".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),0<n.repeat||"*"===n.repeat||"+"===n.repeat){var a="*"===n.repeat?0:"+"===n.repeat?1:n.repeat;e=n.groupmarker[0]+e+n.groupmarker[1]+n.quantifiermarker[0]+a+","+n.repeat+n.quantifiermarker[1]}var r,o=i?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e;return ne.prototype.masksCache[o]===te||!0===s?(r={mask:e,maskToken:ne.prototype.analyseMask(e,i,n),validPositions:{},_buffer:te,buffer:te,tests:{},excludes:{},metadata:t,maskLength:te},!0!==s&&(ne.prototype.masksCache[o]=r,r=J.extend(!0,{},ne.prototype.masksCache[o]))):r=J.extend(!0,{},ne.prototype.masksCache[o]),r}if(J.isFunction(n.mask)&&(n.mask=n.mask(n)),J.isArray(n.mask)){if(1<n.mask.length){n.keepStatic=null===n.keepStatic||n.keepStatic;var i=n.groupmarker[0];return J.each(n.numericInput?n.mask.reverse():n.mask,function(e,t){1<i.length&&(i+=n.groupmarker[1]+n.alternatormarker+n.groupmarker[0]),t.mask===te||J.isFunction(t.mask)?i+=t:i+=t.mask}),e(i+=n.groupmarker[1],n.mask,n)}n.mask=n.mask.pop()}return n.mask&&n.mask.mask!==te&&!J.isFunction(n.mask.mask)?e(n.mask.mask,n.mask,n):e(n.mask,n.mask,n)}function ie(e){var t=ee.createElement("input"),n="on"+e,i=n in t;return i||(t.setAttribute(n,"return;"),i="function"==typeof t[n]),t=null,i}function ae(e,t,V){function h(e,t,n){t=t||0;for(var i,a,r,o=[],s=0,l=C();!0===e&&H().validPositions[s]?(a=(r=H().validPositions[s]).match,i=r.locator.slice(),o.push(!0===n?r.input:!1===n?a.nativeDef:L(s,a))):(a=(r=y(s,i,s-1)).match,i=r.locator.slice(),(!1===V.jitMasking||s<l||"number"==typeof V.jitMasking&&isFinite(V.jitMasking)&&V.jitMasking>s)&&o.push(!1===n?a.nativeDef:L(s,a))),s++,(I===te||s<I)&&(null!==a.fn||""!==a.def)||s<t;);return""===o[o.length-1]&&o.pop(),!1===n&&H().maskLength!==te||(H().maskLength=s+1),o}function H(){return t}function P(e){var t=H();t.buffer=te,!0!==e&&(t.validPositions={},t.p=0)}function C(e,t,n){var i=-1,a=-1,r=n||H().validPositions;for(var o in e===te&&(e=-1),r){var s=parseInt(o);r[s]&&(t||!0!==r[s].generatedInput)&&(s<=e&&(i=s),e<=s&&(a=s))}return-1!==i&&1<e-i||a<e?i:a}function g(e,t,n,i){var a,r=e,o=J.extend(!0,{},H().validPositions),s=!1;for(H().p=e,a=t-1;r<=a;a--)H().validPositions[a]!==te&&(!0!==n&&(!H().validPositions[a].match.optionality&&function(e){var t=H().validPositions[e];if(t===te||null!==t.match.fn)return!1;var n=H().validPositions[e-1],i=H().validPositions[e+1];return n!==te&&i!==te}(a)||!1===V.canClearPosition(H(),a,C(te,!0),i,V))||delete H().validPositions[a]);for(P(!0),a=r+1;a<=C();){for(;H().validPositions[r]!==te;)r++;if(a<r&&(a=r+1),H().validPositions[a]===te&&j(a))a++;else{var l=y(a);!1===s&&o[r]&&o[r].match.def===l.match.def?(H().validPositions[r]=J.extend(!0,{},o[r]),H().validPositions[r].input=l.input,delete H().validPositions[a],a++):E(r,l.match.def)?!1!==M(r,l.input||L(a),!0)&&(delete H().validPositions[a],a++,s=!0):j(a)||(a++,r--),r++}}P(!0)}function b(e,t,n){for(var i,a=x(e=0<e?e-1:0),r=a.alternation!==te?a.locator[a.alternation].toString().split(","):[],o=0;o<t.length&&(!((i=t[o]).match&&(V.greedy&&!0!==i.match.optionalQuantifier||(!1===i.match.optionality||!1===i.match.newBlockMarker)&&!0!==i.match.optionalQuantifier)&&(a.alternation===te||a.alternation!==i.alternation||i.locator[a.alternation]!==te&&O(i.locator[a.alternation].toString().split(","),r)))||!0===n&&(null!==i.match.fn||/[0-9a-bA-Z]/.test(i.match.def)));o++);return i}function y(e,t,n){return H().validPositions[e]||b(e,_(e,t?t.slice():t,n))}function x(e){return H().validPositions[e]?H().validPositions[e]:_(e)[0]}function E(e,t){for(var n=!1,i=_(e),a=0;a<i.length;a++)if(i[a].match&&i[a].match.def===t){n=!0;break}return n}function _(L,e,t){function B(D,G,e,t){function T(e,t,n){function r(n,i){var a=0===J.inArray(n,i.matches);return a||J.each(i.matches,function(e,t){if(!0===t.isQuantifier&&(a=r(n,i.matches[e-1])))return!1}),a}function i(e,a,r){var o,s;if((H().tests[e]||H().validPositions[e])&&J.each(H().tests[e]||[H().validPositions[e]],function(e,t){if(t.mloc[a])return o=t,!1;var n=r!==te?r:t.alternation,i=t.locator[n]!==te?t.locator[n].toString().indexOf(a):-1;(s===te||i<s)&&-1!==i&&(o=t,s=i)}),o){var t=o.locator[o.alternation];return(o.mloc[a]||o.mloc[t]||o.locator).slice((r!==te?r:o.alternation)+1)}return r!==te?i(e,a):te}function a(e,t){function n(e){for(var t,n,i=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(n=e.charCodeAt(a+1);++t<n;)i.push(String.fromCharCode(t));else t=e.charCodeAt(a),i.push(e.charAt(a));return i.join("")}return V.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==n(t.match.def.replace(/[\[\]]/g,"")).indexOf(n(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function o(e,t){if(t===te||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var n=e.locator[e.alternation];if(n!==te){if("string"==typeof n&&(n=n.split(",")[0]),e.mloc[n]===te&&(e.mloc[n]=e.locator.slice()),t!==te){for(var i in t.mloc)"string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===te&&(e.mloc[i]=t.mloc[i]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=te}return!1}if(1e4<I)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+H().mask;if(I===L&&e.matches===te)return N.push({match:e,locator:t.reverse(),cd:K,mloc:{}}),!0;if(e.matches!==te){if(e.isGroup&&n!==e){if(e=T(D.matches[J.inArray(e,D.matches)+1],t))return!0}else if(e.isOptional){var s=e;if(e=B(e,G,t,n)){if(!r(F=N[N.length-1].match,s))return!0;R=!0,I=L}}else if(e.isAlternator){var l,c=e,u=[],f=N.slice(),p=t.length,h=0<G.length?G.shift():-1;if(-1===h||"string"==typeof h){var m,d=I,v=G.slice(),k=[];if("string"==typeof h)k=h.split(",");else for(m=0;m<c.matches.length;m++)k.push(m.toString());if(H().excludes[L]){for(var g=k.slice(),b=0,y=H().excludes[L].length;b<y;b++)k.splice(k.indexOf(H().excludes[L][b].toString()),1);0===k.length&&(H().excludes[L]=te,k=g)}(!0===V.keepStatic&&0<d||isFinite(parseInt(V.keepStatic))&&d>=V.keepStatic)&&(k=k.slice(0,1));for(var P=0;P<k.length;P++){m=parseInt(k[P]),N=[],G=i(I,m,p)||v.slice(),c.matches[m]&&T(c.matches[m],[m].concat(t),n)&&(e=!0),l=N.slice(),I=d,N=[];for(var C=0;C<l.length;C++){var x=l[C],E=!1;x.alternation=x.alternation||p,o(x);for(var _=0;_<u.length;_++){var A=u[_];if("string"!=typeof h||x.alternation!==te&&-1!==J.inArray(x.locator[x.alternation].toString(),k)){if(x.match.nativeDef===A.match.nativeDef){E=!0,o(A,x);break}if(a(x,A)){o(x,A),E=!0,u.splice(u.indexOf(A),0,x);break}if(a(A,x)){o(A,x);break}if(j=A,null===(M=x).match.fn&&null!==j.match.fn&&j.match.fn.test(M.match.def,H(),L,!1,V,!1)){o(x,A)&&(x.na=x.na||x.locator[x.alternation].toString(),-1===x.na.indexOf(x.locator[x.alternation].toString().split("")[0])&&(x.na=x.na+","+x.locator[A.alternation].toString().split("")[0]),E=!0,u.splice(u.indexOf(A),0,x));break}}}E||u.push(x)}}N=f.concat(u),I=L,R=0<N.length,e=0<u.length,G=v.slice()}else e=T(c.matches[h]||D.matches[h],[h].concat(t),n);if(e)return!0}else if(e.isQuantifier&&n!==D.matches[J.inArray(e,D.matches)-1])for(var w=e,O=0<G.length?G.shift():0;O<(isNaN(w.quantifier.max)?O+1:w.quantifier.max)&&I<=L;O++){var S=D.matches[J.inArray(w,D.matches)-1];if(e=T(S,[O].concat(t),S)){if((F=N[N.length-1].match).optionalQuantifier=O>w.quantifier.min-1,r(F,S)){if(O>w.quantifier.min-1){R=!0,I=L;break}return!0}return!0}}else if(e=B(e,G,t,n))return!0}else I++;var M,j}for(var n=0<G.length?G.shift():0;n<D.matches.length;n++)if(!0!==D.matches[n].isQuantifier){var i=T(D.matches[n],[n].concat(e),t);if(i&&I===L)return i;if(L<I)break}}var F,n,i,a,r=H().maskToken,I=e?t:0,o=e?e.slice():[0],N=[],R=!1,K=e?e.join(""):"";if(-1<L){if(e===te){for(var s,l=L-1;(s=H().validPositions[l]||H().tests[l])===te&&-1<l;)l--;s!==te&&-1<l&&(n=l,i=s,a=[],J.isArray(i)||(i=[i]),0<i.length&&(i[0].alternation===te?0===(a=b(n,i.slice()).locator.slice()).length&&(a=i[0].locator.slice()):J.each(i,function(e,t){if(""!==t.def)if(0===a.length)a=t.locator.slice();else for(var n=0;n<a.length;n++)t.locator[n]&&-1===a[n].toString().indexOf(t.locator[n])&&(a[n]+=","+t.locator[n])})),K=(o=a).join(""),I=l)}if(H().tests[L]&&H().tests[L][0].cd===K)return H().tests[L];for(var c=o.shift();c<r.length&&!(B(r[c],o,[c])&&I===L||L<I);c++);}return 0!==N.length&&!R||N.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:K}),e!==te&&H().tests[L]?J.extend(!0,[],N):(H().tests[L]=J.extend(!0,[],N),H().tests[L])}function m(){return H()._buffer===te&&(H()._buffer=h(!1,1),H().buffer===te&&(H().buffer=H()._buffer.slice())),H()._buffer}function A(e){return H().buffer!==te&&!0!==e||(H().buffer=h(!0,C(),!0)),H().buffer}function w(e,t,n){var i,a;if(!0===e)P(),e=0,t=n.length;else for(i=e;i<t;i++)delete H().validPositions[i];for(i=a=e;i<t;i++)if(P(!0),n[i]!==V.skipOptionalPartCharacter){var r=M(a,n[i],!0,!0);!1!==r&&(P(!0),a=r.caret!==te?r.caret:r.pos+1)}}function O(e,t,n){for(var i,a=V.greedy?t:t.slice(0,1),r=!1,o=n!==te?n.split(","):[],s=0;s<o.length;s++)-1!==(i=e.indexOf(o[s]))&&e.splice(i,1);for(var l=0;l<e.length;l++)if(-1!==J.inArray(e[l],a)){r=!0;break}return r}function S(e,t,n,i,a){var r,o,s,l,c,u,f,p=J.extend(!0,{},H().validPositions),h=!1;for(a=a!==te?a:C(),l=H().validPositions[a];0<=a;a--)if((s=H().validPositions[a])&&s.alternation!==te){if(l.locator[s.alternation]!==s.locator[s.alternation])break;r=a,o=H().validPositions[r].alternation,l=s}if(o!==te){f=parseInt(r);var m=l.locator[l.alternation];0<m.length&&(m=m.split(",")[0]),H().excludes[f]=H().excludes[f]||[],!0!==e&&H().excludes[f].push(m.toString());var d=[],v=0;for(c=f;c<C(te,!0)+1;c++)(u=H().validPositions[c])&&!0!==u.generatedInput&&/[0-9a-bA-Z]/.test(u.input)?d.push(u.input):c<e&&v++,delete H().validPositions[c];for(;H().excludes[f]&&H().excludes[f].length<10;){var k=-1*v,g=d.slice();for(H().tests[f]=te,P(!0),h=!0;0<g.length;){var b=g.shift();if(b!==V.skipOptionalPartCharacter&&!(h=M(C(te,!0)+1,b,!1,i,!0)))break}if(h&&t!==te){var y=C(e)+1;for(c=f;c<C()+1;c++)((u=H().validPositions[c])===te||null==u.match.fn)&&c<e+k&&k++;h=M((e+=k)>y?y:e,t,n,i,!0)}if(h)break;if(P(),l=x(f),H().validPositions=J.extend(!0,{},p),!H().excludes[f]){h=S(e,t,n,i,f-1);break}if(0<(m=l.locator[l.alternation]).length&&(m=m.split(",")[0]),-1!==H().excludes[f].indexOf(m.toString())){h=S(e,t,n,i,f-1);break}for(H().excludes[f].push(m.toString()),c=f;c<C(te,!0)+1;c++)delete H().validPositions[c]}}return H().excludes[f]=te,h}function M(f,e,t,p,n,i){function h(e){var t=N?1<e.begin-e.end||e.begin-e.end==1:1<e.end-e.begin||e.end-e.begin==1;return t&&0===e.begin&&e.end===H().maskLength?"full":t}function r(s,l,c){var u=!1;return J.each(_(s),function(e,t){var n=t.match;if(A(!0),!1!==(u=null!=n.fn?n.fn.test(l,H(),s,c,V,h(f)):(l===n.def||l===V.skipOptionalPartCharacter)&&""!==n.def&&{c:L(s,n,!0)||n.def,pos:s})){var i=u.c!==te?u.c:l;i=i===V.skipOptionalPartCharacter&&null===n.fn?L(s,n,!0)||n.def:i;var a=s,r=A();if(u.remove!==te&&(J.isArray(u.remove)||(u.remove=[u.remove]),J.each(u.remove.sort(function(e,t){return t-e}),function(e,t){g(t,t+1,!0)})),u.insert!==te&&(J.isArray(u.insert)||(u.insert=[u.insert]),J.each(u.insert.sort(function(e,t){return e-t}),function(e,t){M(t.pos,t.c,!0,p)})),u.refreshFromBuffer){var o=u.refreshFromBuffer;if(w(!0===o?o:o.start,o.end,r),u.pos===te&&u.c===te)return u.pos=C(),!1;if((a=u.pos!==te?u.pos:s)!==s)return u=J.extend(u,M(a,i,!0,p)),!1}else if(!0!==u&&u.pos!==te&&u.pos!==s&&(a=u.pos,w(s,a,A().slice()),a!==s))return u=J.extend(u,M(a,i,!0)),!1;return(!0===u||u.pos!==te||u.c!==te)&&(0<e&&P(!0),m(a,J.extend({},t,{input:function(e,t,n){switch(V.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var i=H().validPositions[n-1];e=0===n||i&&i.input===String.fromCharCode(ne.keyCode.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if(J.isFunction(V.casing)){var a=Array.prototype.slice.call(arguments);a.push(H().validPositions),e=V.casing.apply(this,a)}}return e}(i,n,a)}),p,h(f))||(u=!1),!1)}}),u}function m(e,t,n,i){if(i||V.insertMode&&H().validPositions[e]!==te&&n===te){var a,r=J.extend(!0,{},H().validPositions),o=C(te,!0);for(a=e;a<=o;a++)delete H().validPositions[a];H().validPositions[e]=J.extend(!0,{},t);var s,l=!0,c=H().validPositions,u=!1,f=H().maskLength;for(a=s=e;a<=o;a++){var p=r[a];if(p!==te)for(var h=s;h<H().maskLength&&(null===p.match.fn&&c[a]&&(!0===c[a].match.optionalQuantifier||!0===c[a].match.optionality)||null!=p.match.fn);){if(h++,!1===u&&r[h]&&r[h].match.def===p.match.def)H().validPositions[h]=J.extend(!0,{},r[h]),H().validPositions[h].input=p.input,d(h),s=h,l=!0;else if(E(h,p.match.def)){var m=M(h,p.input,!0,!0);l=!1!==m,s=m.caret||m.insert?C():h,u=!0}else if(!(l=!0===p.generatedInput)&&h>=H().maskLength-1)break;if(H().maskLength<f&&(H().maskLength=f),l)break}if(!l)break}if(!l)return H().validPositions=J.extend(!0,{},r),P(!0),!1}else H().validPositions[e]=J.extend(!0,{},t);return P(!0),!0}function d(e){for(var t=e-1;-1<t&&!H().validPositions[t];t--);var n,i;for(t++;t<e;t++)H().validPositions[t]===te&&(!1===V.jitMasking||V.jitMasking>t)&&(""===(i=_(t,y(t-1).locator,t-1).slice())[i.length-1].match.def&&i.pop(),(n=b(t,i))&&(n.match.def===V.radixPointDefinitionSymbol||!j(t,!0)||J.inArray(V.radixPoint,A())<t&&n.match.fn&&n.match.fn.test(L(t),H(),t,!1,V))&&!1!==(o=r(t,L(t,n.match,!0)||(null==n.match.fn?n.match.def:""!==L(t)?L(t):A()[t]),!0))&&(H().validPositions[o.pos||t].generatedInput=!0))}t=!0===t;var a=f;f.begin!==te&&(a=N&&!h(f)?f.end:f.begin);var o=!0,s=J.extend(!0,{},H().validPositions);if(J.isFunction(V.preValidation)&&!t&&!0!==p&&!0!==i&&(o=V.preValidation(A(),a,e,h(f),V)),!0===o){if(d(a),h(f)&&(F(te,ne.keyCode.DELETE,f,!0,!0),a=H().p),a<H().maskLength&&(I===te||a<I)&&(o=r(a,e,t),(!t||!0===p)&&!1===o&&!0!==i)){var l=H().validPositions[a];if(!l||null!==l.match.fn||l.match.def!==e&&e!==V.skipOptionalPartCharacter){if((V.insertMode||H().validPositions[D(a)]===te)&&!j(a,!0))for(var c=a+1,u=D(a);c<=u;c++)if(!1!==(o=r(c,e,t))){!function(e,t){var n=H().validPositions[t];if(n)for(var o=n.locator,s=o.length,i=e;i<t;i++)if(H().validPositions[i]===te&&!j(i,!0)){var a=_(i).slice(),l=b(i,a,!0),c=-1;""===a[a.length-1].match.def&&a.pop(),J.each(a,function(e,t){for(var n=0;n<s;n++){if(t.locator[n]===te||!O(t.locator[n].toString().split(","),o[n].toString().split(","),t.na)){var i=o[n],a=l.locator[n],r=t.locator[n];i-a>Math.abs(i-r)&&(l=t);break}c<n&&(c=n,l=t)}}),(l=J.extend({},l,{input:L(i,l.match,!0)||l.match.def})).generatedInput=!0,m(i,l,!0),H().validPositions[t]=te,r(t,n.input,!0)}}(a,o.pos!==te?o.pos:c),a=c;break}}else o={caret:D(a)}}!1===o&&V.keepStatic&&!t&&!0!==n&&(o=S(a,e,t,p)),!0===o&&(o={pos:a})}if(J.isFunction(V.postValidation)&&!1!==o&&!t&&!0!==p&&!0!==i){var v=V.postValidation(A(!0),o,V);if(v!==te){if(v.refreshFromBuffer&&v.buffer){var k=v.refreshFromBuffer;w(!0===k?k:k.start,k.end,v.buffer)}o=!0===v?o:v}}return o&&o.pos===te&&(o.pos=a),!1!==o&&!0!==i||(P(!0),H().validPositions=J.extend(!0,{},s)),o}function j(e,t){var n=y(e).match;if(""===n.def&&(n=x(e).match),null!=n.fn)return n.fn;if(!0!==t&&-1<e){var i=_(e);return i.length>1+(""===i[i.length-1].match.def?1:0)}return!1}function D(e,t){var n=H().maskLength;if(n<=e)return n;var i=e;for(1<_(n+1).length&&(n=h(!0,n+1,!1).kength);++i<n&&(!0===t&&(!0!==x(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i)););return i}function G(e,t){var n,i=e;if(i<=0)return 0;for(;0<--i&&(!0===t&&!0!==x(i).match.newBlockMarker||!0!==t&&!j(i)&&((n=_(i)).length<2||2===n.length&&""===n[1].match.def)););return i}function T(e,t,n,i,a){if(i&&J.isFunction(V.onBeforeWrite)){var r=V.onBeforeWrite.call(p,i,t,n,V);if(r){if(r.refreshFromBuffer){var o=r.refreshFromBuffer;w(!0===o?o:o.start,o.end,r.buffer||t),t=A(!0)}n!==te&&(n=r.caret!==te?r.caret:n)}}e!==te&&(e.inputmask._valueSet(t.join("")),n===te||i!==te&&"blur"===i.type?f(e,n,0===t.length):B(e,n),!0===a&&(R=!0,J(e).trigger("input")))}function L(e,t,n){if((t=t||x(e).match).placeholder!==te||!0===n)return J.isFunction(t.placeholder)?t.placeholder(V):t.placeholder;if(null!==t.fn)return V.placeholder.charAt(e%V.placeholder.length);if(-1<e&&H().validPositions[e]===te){var i,a=_(e),r=[];if(a.length>1+(""===a[a.length-1].match.def?1:0))for(var o=0;o<a.length;o++)if(!0!==a[o].match.optionality&&!0!==a[o].match.optionalQuantifier&&(null===a[o].match.fn||i===te||!1!==a[o].match.fn.test(i.match.def,H(),e,!0,V))&&(r.push(a[o]),null===a[o].match.fn&&(i=a[o]),1<r.length&&/[0-9a-bA-Z]/.test(r[0].match.def)))return V.placeholder.charAt(e%V.placeholder.length)}return t.def}function u(s,e,l,t,n){var c=t.slice(),u="",f=-1,p=te;if(P(),l||!0===V.autoUnmask)f=D(f);else{var i=m().slice(0,D(-1)).join(""),a=c.join("").match(new RegExp("^"+ne.escapeRegex(i),"g"));a&&0<a.length&&(c.splice(0,a.length*i.length),f=D(f))}-1===f?(H().p=D(f),f=0):H().p=f,J.each(c,function(e,t){if(t!==te)if(H().validPositions[e]===te&&c[e]===L(e)&&j(e,!0)&&!1===M(e,c[e],!0,te,te,!0))H().p++;else{var n=new J.Event("_checkval");n.which=t.charCodeAt(0),u+=t;var i=C(te,!0),a=x(i),r=y(i+1,a?a.locator.slice():te,i);if(!function(e,t){return-1!==h(!0,0,!1).slice(e,D(e)).join("").indexOf(t)&&!j(e)&&(x(e).match.nativeDef===t.charAt(0)||" "===x(e).match.nativeDef&&x(e+1).match.nativeDef===t.charAt(0))}(f,u)||l||V.autoUnmask){var o=l?e:null==r.match.fn&&r.match.optionality&&i+1<H().p?i+1:H().p;(p=W.keypressEvent.call(s,n,!0,!1,l,o))&&(f=o+1,u="")}else p=W.keypressEvent.call(s,n,!0,!1,!0,i+1);T(te,A(),p.forwardPosition,n,!1)}}),e&&T(s,A(),p?p.forwardPosition:te,n||new J.Event("checkval"),n&&"input"===n.type)}function n(e){if(e){if(e.inputmask===te)return e.value;e.inputmask&&e.inputmask.refreshValue&&W.setValueEvent.call(e)}var t=[],n=H().validPositions;for(var i in n)n[i].match&&null!=n[i].match.fn&&t.push(n[i].input);var a=0===t.length?"":(N?t.reverse():t).join("");if(J.isFunction(V.onUnMask)){var r=(N?A().slice().reverse():A()).join("");a=V.onUnMask.call(p,r,a,V)}return a}function B(t,e,n,i){function a(e){return!0===i||!N||"number"!=typeof e||V.greedy&&""===V.placeholder||(e=t.inputmask._valueGet().length-e),e}var r;if(e===te)return t.setSelectionRange?(e=t.selectionStart,n=t.selectionEnd):Y.getSelection?(r=Y.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==t&&r.commonAncestorContainer!==t||(e=r.startOffset,n=r.endOffset):ee.selection&&ee.selection.createRange&&(n=(e=0-(r=ee.selection.createRange()).duplicate().moveStart("character",-t.inputmask._valueGet().length))+r.text.length),{begin:a(e),end:a(n)};if(J.isArray(e)&&(n=N?e[0]:e[1],e=N?e[1]:e[0]),e.begin!==te&&(n=N?e.begin:e.end,e=N?e.end:e.begin),"number"==typeof e){e=a(e),n="number"==typeof(n=a(n))?n:e;var o=parseInt(((t.ownerDocument.defaultView||Y).getComputedStyle?(t.ownerDocument.defaultView||Y).getComputedStyle(t,null):t.currentStyle).fontSize)*n;if(t.scrollLeft=o>t.scrollWidth?o:0,!1===V.insertMode&&e===n&&n++,t.inputmask.caretPos={begin:e,end:n},t.setSelectionRange)t.selectionStart=e,t.selectionEnd=n;else if(Y.getSelection){if(r=ee.createRange(),t.firstChild===te||null===t.firstChild){var s=ee.createTextNode("");t.appendChild(s)}r.setStart(t.firstChild,e<t.inputmask._valueGet().length?e:t.inputmask._valueGet().length),r.setEnd(t.firstChild,n<t.inputmask._valueGet().length?n:t.inputmask._valueGet().length),r.collapse(!0);var l=Y.getSelection();l.removeAllRanges(),l.addRange(r)}else t.createTextRange&&((r=t.createTextRange()).collapse(!0),r.moveEnd("character",n),r.moveStart("character",e),r.select());f(t,{begin:e,end:n})}}function o(e){var t,n,i=A(),a=i.length,r=C(),o={},s=H().validPositions[r],l=s!==te?s.locator.slice():te;for(t=r+1;t<i.length;t++)l=(n=y(t,l,t-1)).locator.slice(),o[t]=J.extend(!0,{},n);var c=s&&s.alternation!==te?s.locator[s.alternation]:te;for(t=a-1;r<t&&((n=o[t]).match.optionality||n.match.optionalQuantifier&&n.match.newBlockMarker||c&&(c!==o[t].locator[s.alternation]&&null!=n.match.fn||null===n.match.fn&&n.locator[s.alternation]&&O(n.locator[s.alternation].toString().split(","),c.toString().split(","))&&""!==_(t)[0].def))&&i[t]===L(t,n.match);t--)a--;return e?{l:a,def:o[a]?o[a].match:te}:a}function l(e){for(var t,n=o(),i=e.length,a=H().validPositions[C()];n<i&&!j(n,!0)&&(t=a!==te?y(n,a.locator.slice(""),a):x(n))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||n+1===i&&""===(a!==te?y(n+1,a.locator.slice(""),a):x(n+1)).match.def);)n++;for(;(t=H().validPositions[n-1])&&t&&t.match.optionality&&t.input===V.skipOptionalPartCharacter;)n--;return e.splice(n),e}function d(e){if(J.isFunction(V.isComplete))return V.isComplete(e,V);if("*"===V.repeat)return te;var t=!1,n=o(!0),i=G(n.l);if(n.def===te||n.def.newBlockMarker||n.def.optionality||n.def.optionalQuantifier){t=!0;for(var a=0;a<=i;a++){var r=y(a).match;if(null!==r.fn&&H().validPositions[a]===te&&!0!==r.optionality&&!0!==r.optionalQuantifier||null===r.fn&&e[a]!==L(a,r)){t=!1;break}}}return t}function F(e,t,n,i,a){if((V.numericInput||N)&&(t===ne.keyCode.BACKSPACE?t=ne.keyCode.DELETE:t===ne.keyCode.DELETE&&(t=ne.keyCode.BACKSPACE),N)){var r=n.end;n.end=n.begin,n.begin=r}if(t===ne.keyCode.BACKSPACE&&(n.end-n.begin<1||!1===V.insertMode)?(n.begin=G(n.begin),H().validPositions[n.begin]!==te&&H().validPositions[n.begin].input===V.groupSeparator&&n.begin--):t===ne.keyCode.DELETE&&n.begin===n.end&&(n.end=j(n.end,!0)&&H().validPositions[n.end]&&H().validPositions[n.end].input!==V.radixPoint?n.end+1:D(n.end)+1,H().validPositions[n.begin]!==te&&H().validPositions[n.begin].input===V.groupSeparator&&n.end++),g(n.begin,n.end,!1,i),!0!==i&&V.keepStatic){var o=S(!0);o&&(n.begin=o.caret!==te?o.caret:D(o.pos.begin?o.pos.begin:o.pos))}var s=C(n.begin,!0);if(s<n.begin)H().p=D(s);else if(!0!==i&&(H().p=n.begin,!0!==a))for(;H().p<s&&H().validPositions[H().p]===te;)H().p++}function a(c){var u=(c.ownerDocument.defaultView||Y).getComputedStyle(c,null),e=ee.createElement("div");e.style.width=u.width,e.style.textAlign=u.textAlign,k=ee.createElement("div"),(c.inputmask.colorMask=k).className="im-colormask",c.parentNode.insertBefore(k,c),c.parentNode.removeChild(c),k.appendChild(e),k.appendChild(c),c.style.left=e.offsetLeft+"px",J(c).on("click",function(e){return B(c,function(e){var t,n=ee.createElement("span");for(var i in u)isNaN(i)&&-1!==i.indexOf("font")&&(n.style[i]=u[i]);n.style.textTransform=u.textTransform,n.style.letterSpacing=u.letterSpacing,n.style.position="absolute",n.style.height="auto",n.style.width="auto",n.style.visibility="hidden",n.style.whiteSpace="nowrap",ee.body.appendChild(n);var a,r=c.inputmask._valueGet(),o=0;for(t=0,a=r.length;t<=a;t++){if(n.innerHTML+=r.charAt(t)||"_",n.offsetWidth>=e){var s=e-o,l=n.offsetWidth-e;n.innerHTML=r.charAt(t),t=(s-=n.offsetWidth/3)<l?t-1:t;break}o=n.offsetWidth}return ee.body.removeChild(n),t}(e.clientX)),W.clickEvent.call(c,[e])}),J(c).on("keydown",function(e){e.shiftKey||!1===V.insertMode||setTimeout(function(){f(c)},0)})}function f(e,t,n){function i(e){if(e===te&&(e=""),l||null!==a.fn&&r.input!==te)if(l&&(null!==a.fn&&r.input!==te||""===a.def)){l=!1;var t=s.length;s[t-1]=s[t-1]+"</span>",s.push(e)}else s.push(e);else l=!0,s.push("<span class='im-static'>"+e)}var a,r,o,s=[],l=!1,c=0;if(k!==te){var u=A();if(t===te?t=B(e):t.begin===te&&(t={begin:t,end:t}),!0!==n){for(var f=C();H().validPositions[c]?(r=H().validPositions[c],a=r.match,o=r.locator.slice(),i(u[c])):(r=y(c,o,c-1),a=r.match,o=r.locator.slice(),(!1===V.jitMasking||c<f||"number"==typeof V.jitMasking&&isFinite(V.jitMasking)&&V.jitMasking>c)&&i(L(c,a))),c++,(I===te||c<I)&&(null!==a.fn||""!==a.def)||c<f||l;);l&&i(),ee.activeElement===e&&(s.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),s.splice(t.end+1,0,"</mark>"))}var p=k.getElementsByTagName("div")[0];p.innerHTML=s.join(""),e.inputmask.positionColorMask(e,p)}}t=t||this.maskset,V=V||this.opts;var v,r,I,k,i,p=this,s=this.el,N=this.isRTL,c=!1,R=!1,K=!1,U=!1,Q=!1,q={on:function(e,t,r){function n(e){var t=this;if(t.inputmask===te&&"FORM"!==this.nodeName){var n=J.data(t,"_inputmask_opts");n?new ne(n).mask(t):q.off(t)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(t.disabled||t.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===V.tabThrough&&e.keyCode===ne.keyCode.TAB))){switch(e.type){case"input":if(!0===R)return R=!1,e.preventDefault();re&&(Q=!0);break;case"keydown":R=c=!1;break;case"keypress":if(!0===c)return e.preventDefault();c=!0;break;case"click":if(oe||se){var i=arguments;return setTimeout(function(){r.apply(t,i)},0),!1}}var a=r.apply(t,arguments);return Q&&(Q=!1,setTimeout(function(){B(t,t.inputmask.caretPos,te,!0)})),!1===a&&(e.preventDefault(),e.stopPropagation()),a}e.preventDefault()}}e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(n),-1!==J.inArray(t,["submit","reset"])?null!==e.form&&J(e.form).on(t,n):J(e).on(t,n)},off:function(i,e){var t;i.inputmask&&i.inputmask.events&&(e?(t=[])[e]=i.inputmask.events[e]:t=i.inputmask.events,J.each(t,function(e,t){for(;0<t.length;){var n=t.pop();-1!==J.inArray(e,["submit","reset"])?null!==i.form&&J(i.form).off(e,n):J(i).off(e,n)}delete i.inputmask.events[e]}))}},W={keydownEvent:function(e){var t=this,n=J(t),i=e.keyCode,a=B(t);if(i===ne.keyCode.BACKSPACE||i===ne.keyCode.DELETE||se&&i===ne.keyCode.BACKSPACE_SAFARI||e.ctrlKey&&i===ne.keyCode.X&&!ie("cut"))e.preventDefault(),F(0,i,a),T(t,A(!0),H().p,e,t.inputmask._valueGet()!==A().join("")),t.inputmask._valueGet()===m().join("")?n.trigger("cleared"):!0===d(A())&&n.trigger("complete");else if(i===ne.keyCode.END||i===ne.keyCode.PAGE_DOWN){e.preventDefault();var r=D(C());V.insertMode||r!==H().maskLength||e.shiftKey||r--,B(t,e.shiftKey?a.begin:r,r,!0)}else i===ne.keyCode.HOME&&!e.shiftKey||i===ne.keyCode.PAGE_UP?(e.preventDefault(),B(t,0,e.shiftKey?a.begin:0,!0)):(V.undoOnEscape&&i===ne.keyCode.ESCAPE||90===i&&e.ctrlKey)&&!0!==e.altKey?(u(t,!0,!1,v.split("")),n.trigger("click")):i!==ne.keyCode.INSERT||e.shiftKey||e.ctrlKey?!0===V.tabThrough&&i===ne.keyCode.TAB?(!0===e.shiftKey?(null===x(a.begin).match.fn&&(a.begin=D(a.begin)),a.end=G(a.begin,!0),a.begin=G(a.end,!0)):(a.begin=D(a.begin,!0),a.end=D(a.begin,!0),a.end<H().maskLength&&a.end--),a.begin<H().maskLength&&(e.preventDefault(),B(t,a.begin,a.end))):e.shiftKey||!1===V.insertMode&&(i===ne.keyCode.RIGHT?setTimeout(function(){var e=B(t);B(t,e.begin)},0):i===ne.keyCode.LEFT&&setTimeout(function(){var e=B(t);B(t,N?e.begin+1:e.begin-1)},0)):(V.insertMode=!V.insertMode,B(t,V.insertMode||a.begin!==H().maskLength?a.begin:a.begin-1));V.onKeyDown.call(this,e,A(),B(t).begin,V),K=-1!==J.inArray(i,V.ignorables)},keypressEvent:function(e,t,n,i,a){var r=this,o=J(r),s=e.which||e.charCode||e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||K))return s===ne.keyCode.ENTER&&v!==A().join("")&&(v=A().join(""),setTimeout(function(){o.trigger("change")},0)),!0;if(s){46===s&&!1===e.shiftKey&&""!==V.radixPoint&&(s=V.radixPoint.charCodeAt(0));var l,c=t?{begin:a,end:a}:B(r),u=String.fromCharCode(s);H().writeOutBuffer=!0;var f=M(c,u,i);if(!1!==f&&(P(!0),l=f.caret!==te?f.caret:D(f.pos.begin?f.pos.begin:f.pos),H().p=l),l=V.numericInput&&f.caret===te?G(l):l,!1!==n&&(setTimeout(function(){V.onKeyValidation.call(r,s,f,V)},0),H().writeOutBuffer&&!1!==f)){var p=A();T(r,p,l,e,!0!==t),!0!==t&&setTimeout(function(){!0===d(p)&&o.trigger("complete")},0)}if(e.preventDefault(),t)return!1!==f&&(f.forwardPosition=l),f}},pasteEvent:function(e){var t,n=this,i=e.originalEvent||e,a=J(n),r=n.inputmask._valueGet(!0),o=B(n);N&&(t=o.end,o.end=o.begin,o.begin=t);var s=r.substr(0,o.begin),l=r.substr(o.end,r.length);if(s===(N?m().reverse():m()).slice(0,o.begin).join("")&&(s=""),l===(N?m().reverse():m()).slice(o.end).join("")&&(l=""),N&&(t=s,s=l,l=t),Y.clipboardData&&Y.clipboardData.getData)r=s+Y.clipboardData.getData("Text")+l;else{if(!i.clipboardData||!i.clipboardData.getData)return!0;r=s+i.clipboardData.getData("text/plain")+l}var c=r;if(J.isFunction(V.onBeforePaste)){if(!1===(c=V.onBeforePaste.call(p,r,V)))return e.preventDefault();c=c||r}return u(n,!1,!1,N?c.split("").reverse():c.toString().split("")),T(n,A(),D(C()),e,v!==A().join("")),!0===d(A())&&a.trigger("complete"),e.preventDefault()},inputFallBackEvent:function(e){var t,n,i=this,a=i.inputmask._valueGet();if(A().join("")!==a){var r=B(i);if(n=r,"."===(t=a).charAt(n.begin-1)&&""!==V.radixPoint&&((t=t.split(""))[n.begin-1]=V.radixPoint.charAt(0),t=t.join("")),a=function(e,t,n){if(oe){var i=t.replace(A().join(""),"");if(1===i.length){var a=t.split("");a.splice(n.begin,0,i),t=a.join("")}}return t}(0,a=t,r),A().join("")!==a){var o=A().join(""),s=a.length>o.length?-1:0,l=a.substr(0,r.begin),c=a.substr(r.begin),u=o.substr(0,r.begin+s),f=o.substr(r.begin+s),p=r,h="",m=!1;if(l!==u){for(var d=(m=l.length>=u.length)?l.length:u.length,v=0;l.charAt(v)===u.charAt(v)&&v<d;v++);m&&(0==s&&(p.begin=v),h+=l.slice(v,p.end))}if(c!==f&&(c.length>f.length?h+=c.slice(0,1):c.length<f.length&&(p.end+=f.length-c.length,m||""===V.radixPoint||""!==c||l.charAt(p.begin+s-1)!==V.radixPoint||(p.begin--,h=V.radixPoint))),T(i,A(),{begin:p.begin+s,end:p.end+s}),0<h.length)J.each(h.split(""),function(e,t){var n=new J.Event("keypress");n.which=t.charCodeAt(0),K=!1,W.keypressEvent.call(i,n)});else{p.begin===p.end-1&&(p.begin=G(p.begin+1),p.begin===p.end-1?B(i,p.begin):B(i,p.begin,p.end));var k=new J.Event("keydown");k.keyCode=ne.keyCode.DELETE,W.keydownEvent.call(i,k),!1===V.insertMode&&B(i,B(i).begin-1)}e.preventDefault()}}},setValueEvent:function(e){this.inputmask.refreshValue=!1;var t=this.inputmask._valueGet(!0);J.isFunction(V.onBeforeMask)&&(t=V.onBeforeMask.call(p,t,V)||t),t=t.split(""),u(this,!0,!1,N?t.reverse():t),v=A().join(""),(V.clearMaskOnLostFocus||V.clearIncomplete)&&this.inputmask._valueGet()===m().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,n=t.inputmask._valueGet();V.showMaskOnFocus&&(!V.showMaskOnHover||V.showMaskOnHover&&""===n)&&(t.inputmask._valueGet()!==A().join("")?T(t,A(),D(C())):!1===U&&B(t,D(C()))),!0===V.positionCaretOnTab&&!1===U&&""!==n&&(T(t,A(),B(t)),W.clickEvent.apply(t,[e,!0])),v=A().join("")},mouseleaveEvent:function(e){if(U=!1,V.clearMaskOnLostFocus&&ee.activeElement!==this){var t=A().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===C()&&n===m().join("")?t=[]:l(t),T(this,t))}},clickEvent:function(e,c){var u=this;setTimeout(function(){if(ee.activeElement===u){var e=B(u);if(c&&(N?e.end=e.begin:e.begin=e.end),e.begin===e.end)switch(V.positionCaretOnClick){case"none":break;case"radixFocus":if(function(e){if(""!==V.radixPoint){var t=H().validPositions;if(t[e]===te||t[e].input===L(e)){if(e<D(-1))return!0;var n=J.inArray(V.radixPoint,A());if(-1!==n){for(var i in t)if(n<i&&t[i].input!==L(i))return!1;return!0}}}return!1}(e.begin)){var t=A().join("").indexOf(V.radixPoint);B(u,V.numericInput?D(t):t);break}default:var n=e.begin,i=C(n,!0),a=D(i);if(n<a)B(u,j(n,!0)||j(n-1,!0)?n:D(n));else{var r=H().validPositions[i],o=y(a,r?r.match.locator:te,r),s=L(a,o.match);if(""!==s&&A()[a]!==s&&!0!==o.match.optionalQuantifier&&!0!==o.match.newBlockMarker||!j(a,!0)&&o.match.def===s){var l=D(a);(l<=n||n===a)&&(a=l)}B(u,a)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){B(t,0,D(C()))},0)},cutEvent:function(e){var t=J(this),n=B(this),i=e.originalEvent||e,a=Y.clipboardData||i.clipboardData,r=N?A().slice(n.end,n.begin):A().slice(n.begin,n.end);a.setData("text",N?r.reverse().join(""):r.join("")),ee.execCommand&&ee.execCommand("copy"),F(0,ne.keyCode.DELETE,n),T(this,A(),H().p,e,v!==A().join("")),this.inputmask._valueGet()===m().join("")&&t.trigger("cleared")},blurEvent:function(e){var t=J(this);if(this.inputmask){var n=this.inputmask._valueGet(),i=A().slice();""===n&&k===te||(V.clearMaskOnLostFocus&&(-1===C()&&n===m().join("")?i=[]:l(i)),!1===d(i)&&(setTimeout(function(){t.trigger("incomplete")},0),V.clearIncomplete&&(P(),i=V.clearMaskOnLostFocus?[]:m().slice())),T(this,i,te,e)),v!==A().join("")&&(v=i.join(""),t.trigger("change"))}},mouseenterEvent:function(e){U=!0,ee.activeElement!==this&&V.showMaskOnHover&&this.inputmask._valueGet()!==A().join("")&&T(this,A())},submitEvent:function(e){v!==A().join("")&&r.trigger("change"),V.clearMaskOnLostFocus&&-1===C()&&s.inputmask._valueGet&&s.inputmask._valueGet()===m().join("")&&s.inputmask._valueSet(""),V.removeMaskOnSubmit&&(s.inputmask._valueSet(s.inputmask.unmaskedvalue(),!0),setTimeout(function(){T(s,A())},0))},resetEvent:function(e){s.inputmask.refreshValue=!0,setTimeout(function(){r.trigger("setvalue")},0)}};if(ne.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},e!==te)switch(e.action){case"isComplete":return s=e.el,d(A());case"unmaskedvalue":return s!==te&&e.value===te||(i=e.value,i=(J.isFunction(V.onBeforeMask)&&V.onBeforeMask.call(p,i,V)||i).split(""),u(te,!1,!1,N?i.reverse():i),J.isFunction(V.onBeforeWrite)&&V.onBeforeWrite.call(p,te,A(),0,V)),n(s);case"mask":!function(e){q.off(e);var t=function(e,s){var t=e.getAttribute("type"),n="INPUT"===e.tagName&&-1!==J.inArray(t,s.supportsInputType)||e.isContentEditable||"TEXTAREA"===e.tagName;if(!n)if("INPUT"===e.tagName){var i=ee.createElement("input");i.setAttribute("type",t),n="text"===i.type,i=null}else n="partial";return!1!==n?function(e){function t(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==C()||!0!==s.nullable?ee.activeElement===this&&s.clearMaskOnLostFocus?(N?l(A().slice()).reverse():l(A().slice())).join(""):i.call(this):"":i.call(this)}function n(e){a.call(this,e),this.inputmask&&J(this).trigger("setvalue")}var i,a,r;if(!e.inputmask.__valueGet){if(!0!==s.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var o=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"):te;o&&o.get&&o.set?(i=o.get,a=o.set,Object.defineProperty(e,"value",{get:t,set:n,configurable:!0})):"INPUT"!==e.tagName&&(i=function(){return this.textContent},a=function(e){this.textContent=e},Object.defineProperty(e,"value",{get:t,set:n,configurable:!0}))}else ee.__lookupGetter__&&e.__lookupGetter__("value")&&(i=e.__lookupGetter__("value"),a=e.__lookupSetter__("value"),e.__defineGetter__("value",t),e.__defineSetter__("value",n));e.inputmask.__valueGet=i,e.inputmask.__valueSet=a}e.inputmask._valueGet=function(e){return N&&!0!==e?i.call(this.el).split("").reverse().join(""):i.call(this.el)},e.inputmask._valueSet=function(e,t){a.call(this.el,null===e||e===te?"":!0!==t&&N?e.split("").reverse().join(""):e)},i===te&&(i=function(){return this.value},a=function(e){this.value=e},function(e){if(J.valHooks&&(J.valHooks[e]===te||!0!==J.valHooks[e].inputmaskpatch)){var n=J.valHooks[e]&&J.valHooks[e].get?J.valHooks[e].get:function(e){return e.value},a=J.valHooks[e]&&J.valHooks[e].set?J.valHooks[e].set:function(e,t){return e.value=t,e};J.valHooks[e]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==C(te,te,e.inputmask.maskset.validPositions)||!0!==s.nullable?t:""}return n(e)},set:function(e,t){var n,i=J(e);return n=a(e,t),e.inputmask&&i.trigger("setvalue"),n},inputmaskpatch:!0}}}(e.type),r=e,q.on(r,"mouseenter",function(e){var t=J(this);this.inputmask._valueGet()!==A().join("")&&t.trigger("setvalue")}))}}(e):e.inputmask=te,n}(e,V);if(!1!==t&&(r=J(s=e),-1===(I=s!==te?s.maxLength:te)&&(I=te),!0===V.colorMask&&a(s),re&&("inputmode"in s&&(s.inputmode=V.inputmode,s.setAttribute("inputmode",V.inputmode)),!0===V.disablePredictiveText&&("autocorrect"in s?s.autocorrect=!1:(!0!==V.colorMask&&a(s),s.type="password"))),!0===t&&(q.on(s,"submit",W.submitEvent),q.on(s,"reset",W.resetEvent),q.on(s,"mouseenter",W.mouseenterEvent),q.on(s,"blur",W.blurEvent),q.on(s,"focus",W.focusEvent),q.on(s,"mouseleave",W.mouseleaveEvent),!0!==V.colorMask&&q.on(s,"click",W.clickEvent),q.on(s,"dblclick",W.dblclickEvent),q.on(s,"paste",W.pasteEvent),q.on(s,"dragdrop",W.pasteEvent),q.on(s,"drop",W.pasteEvent),q.on(s,"cut",W.cutEvent),q.on(s,"complete",V.oncomplete),q.on(s,"incomplete",V.onincomplete),q.on(s,"cleared",V.oncleared),re||!0===V.inputEventOnly?s.removeAttribute("maxLength"):(q.on(s,"keydown",W.keydownEvent),q.on(s,"keypress",W.keypressEvent)),q.on(s,"compositionstart",J.noop),q.on(s,"compositionupdate",J.noop),q.on(s,"compositionend",J.noop),q.on(s,"keyup",J.noop),q.on(s,"input",W.inputFallBackEvent),q.on(s,"beforeinput",J.noop)),q.on(s,"setvalue",W.setValueEvent),v=m().join(""),""!==s.inputmask._valueGet(!0)||!1===V.clearMaskOnLostFocus||ee.activeElement===s)){var n=J.isFunction(V.onBeforeMask)&&V.onBeforeMask.call(p,s.inputmask._valueGet(!0),V)||s.inputmask._valueGet(!0);""!==n&&u(s,!0,!1,N?n.split("").reverse():n.split(""));var i=A().slice();v=i.join(""),!1===d(i)&&V.clearIncomplete&&P(),V.clearMaskOnLostFocus&&ee.activeElement!==s&&(-1===C()?i=[]:l(i)),T(s,i),ee.activeElement===s&&B(s,D(C()))}}(s);break;case"format":return i=(J.isFunction(V.onBeforeMask)&&V.onBeforeMask.call(p,e.value,V)||e.value).split(""),u(te,!0,!1,N?i.reverse():i),e.metadata?{value:N?A().slice().reverse().join(""):A().join(""),metadata:ae.call(this,{action:"getmetadata"},t,V)}:N?A().slice().reverse().join(""):A().join("");case"isValid":e.value?(i=e.value.split(""),u(te,!0,!0,N?i.reverse():i)):e.value=A().join("");for(var $=A(),Z=o(),z=$.length-1;Z<z&&!j(z);z--);return $.splice(Z,z+1-Z),d($)&&e.value===A().join("");case"getemptymask":return m().join("");case"remove":return s&&s.inputmask&&(r=J(s),s.inputmask._valueSet(V.autoUnmask?n(s):s.inputmask._valueGet(!0)),q.off(s),s.inputmask.colorMask&&((k=s.inputmask.colorMask).removeChild(s),k.parentNode.insertBefore(s,k),k.parentNode.removeChild(k)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s),"value")&&s.inputmask.__valueGet&&Object.defineProperty(s,"value",{get:s.inputmask.__valueGet,set:s.inputmask.__valueSet,configurable:!0}):ee.__lookupGetter__&&s.__lookupGetter__("value")&&s.inputmask.__valueGet&&(s.__defineGetter__("value",s.inputmask.__valueGet),s.__defineSetter__("value",s.inputmask.__valueSet)),s.inputmask=te),s;case"getmetadata":if(J.isArray(t.metadata)){var X=h(!0,0,!1).join("");return J.each(t.metadata,function(e,t){if(t.mask===X)return X=t,!1}),X}return t.metadata}}var e=navigator.userAgent,re=ie("touchstart"),oe=/iemobile/i.test(e),se=/iphone/i.test(e)&&!oe;return ne.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:J.noop,onincomplete:J.noop,oncleared:J.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:J.noop,onBeforeMask:null,onBeforePaste:function(e,t){return J.isFunction(t.onBeforeMask)?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:J.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:te,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:J.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:te,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9１-９]",definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"}},aliases:{},masksCache:{},mask:function(e){var a=this;return"string"==typeof e&&(e=ee.getElementById(e)||ee.querySelectorAll(e)),e=e.nodeName?[e]:e,J.each(e,function(e,t){var n=J.extend(!0,{},a.opts);if(function(n,e,i,a){function t(e,t){null!==(t=t!==te?t:n.getAttribute(a+"-"+e))&&("string"==typeof t&&(0===e.indexOf("on")?t=Y[t]:"false"===t?t=!1:"true"===t&&(t=!0)),i[e]=t)}if(!0===e.importDataAttributes){var r,o,s,l,c=n.getAttribute(a);if(c&&""!==c&&(c=c.replace(/'/g,'"'),o=JSON.parse("{"+c+"}")),o)for(l in s=te,o)if("alias"===l.toLowerCase()){s=o[l];break}for(r in t("alias",s),i.alias&&u(i.alias,i,e),e){if(o)for(l in s=te,o)if(l.toLowerCase()===r.toLowerCase()){s=o[l];break}t(r,s)}}return J.extend(!0,e,i),"rtl"!==n.dir&&!e.rightAlign||(n.style.textAlign="right"),"rtl"!==n.dir&&!e.numericInput||(n.dir="ltr",n.removeAttribute("dir"),e.isRTL=!0),Object.keys(i).length}(t,n,J.extend(!0,{},a.userOptions),a.dataAttribute)){var i=r(n,a.noMasksCache);i!==te&&(t.inputmask!==te&&(t.inputmask.opts.autoUnmask=!0,t.inputmask.remove()),t.inputmask=new ne(te,te,!0),t.inputmask.opts=n,t.inputmask.noMasksCache=a.noMasksCache,t.inputmask.userOptions=J.extend(!0,{},a.userOptions),t.inputmask.isRTL=n.isRTL||n.numericInput,(t.inputmask.el=t).inputmask.maskset=i,J.data(t,"_inputmask_opts",n),ae.call(t.inputmask,{action:"mask"}))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"==typeof e?(J.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return ae.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||r(this.opts,this.noMasksCache),ae.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(e,r,o){function t(e,t,n,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function s(n,e,i){i=i!==te?i:n.matches.length;var a=n.matches[i-1];if(r)0===e.indexOf("[")||d&&/\\d|\\s|\\w]/i.test(e)||"."===e?n.matches.splice(i++,0,{fn:new RegExp(e,o.casing?"i":""),optionality:n.isOptional,newBlockMarker:a===te||a.def!==e,casing:null,def:e,placeholder:te,nativeDef:e}):(d&&(e=e[e.length-1]),J.each(e.split(""),function(e,t){a=n.matches[i-1],n.matches.splice(i++,0,{fn:null,optionality:n.isOptional,newBlockMarker:a===te||a.def!==t&&null!==a.fn,casing:null,def:o.staticDefinitionSymbol||t,placeholder:o.staticDefinitionSymbol!==te?t:te,nativeDef:t})})),d=!1;else{var t=(o.definitions?o.definitions[e]:te)||ne.prototype.definitions[e];t&&!d?n.matches.splice(i++,0,{fn:t.validator?"string"==typeof t.validator?new RegExp(t.validator,o.casing?"i":""):new function(){this.test=t.validator}:new RegExp("."),optionality:n.isOptional,newBlockMarker:a===te||a.def!==(t.definitionSymbol||e),casing:t.casing,def:t.definitionSymbol||e,placeholder:t.placeholder,nativeDef:e}):(n.matches.splice(i++,0,{fn:null,optionality:n.isOptional,newBlockMarker:a===te||a.def!==e&&null!==a.fn,casing:null,def:o.staticDefinitionSymbol||e,placeholder:o.staticDefinitionSymbol!==te?e:te,nativeDef:e}),d=!1)}}function n(){if(0<k.length){if(s(c=k[k.length-1],a),c.isAlternator){u=k.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup=!1;0<k.length?(c=k[k.length-1]).matches.push(u):v.matches.push(u)}}else s(v,a)}var i,a,l,c,u,f,p,h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,m=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,d=!1,v=new t,k=[],g=[];for(r&&(o.optionalmarker[0]=te,o.optionalmarker[1]=te);i=r?m.exec(e):h.exec(e);){if(a=i[0],r)switch(a.charAt(0)){case"?":a="{0,1}";break;case"+":case"*":a="{"+a+"}"}if(d)n();else switch(a.charAt(0)){case o.escapeChar:d=!0,r&&n();break;case o.optionalmarker[1]:case o.groupmarker[1]:if((l=k.pop()).openGroup=!1,l!==te)if(0<k.length){if((c=k[k.length-1]).matches.push(l),c.isAlternator){u=k.pop();for(var b=0;b<u.matches.length;b++)u.matches[b].isGroup=!1,u.matches[b].alternatorGroup=!1;0<k.length?(c=k[k.length-1]).matches.push(u):v.matches.push(u)}}else v.matches.push(l);else n();break;case o.optionalmarker[0]:k.push(new t(!1,!0));break;case o.groupmarker[0]:k.push(new t(!0));break;case o.quantifiermarker[0]:var y=new t(!1,!1,!0),P=(a=a.replace(/[{}]/g,"")).split(","),C=isNaN(P[0])?P[0]:parseInt(P[0]),x=1===P.length?C:isNaN(P[1])?P[1]:parseInt(P[1]);if("*"!==x&&"+"!==x||(C="*"===x?0:1),y.quantifier={min:C,max:x},0<k.length){var E=k[k.length-1].matches;(i=E.pop()).isGroup||((p=new t(!0)).matches.push(i),i=p),E.push(i),E.push(y)}else(i=v.matches.pop()).isGroup||(r&&null===i.fn&&"."===i.def&&(i.fn=new RegExp(i.def,o.casing?"i":"")),(p=new t(!0)).matches.push(i),i=p),v.matches.push(i),v.matches.push(y);break;case o.alternatormarker:if(0<k.length){var _=(c=k[k.length-1]).matches[c.matches.length-1];f=c.openGroup&&(_.matches===te||!1===_.isGroup&&!1===_.isAlternator)?k.pop():c.matches.pop()}else f=v.matches.pop();if(f.isAlternator)k.push(f);else if(f.alternatorGroup?(u=k.pop(),f.alternatorGroup=!1):u=new t(!1,!1,!1,!0),u.matches.push(f),k.push(u),f.openGroup){var A=new t(!(f.openGroup=!1));A.alternatorGroup=!0,k.push(A)}break;default:n()}}for(;0<k.length;)l=k.pop(),v.matches.push(l);return 0<v.matches.length&&(function i(a){a&&a.matches&&J.each(a.matches,function(e,t){var n=a.matches[e+1];(n===te||n.matches===te||!1===n.isQuantifier)&&t&&t.isGroup&&(t.isGroup=!1,r||(s(t,o.groupmarker[0],0),!0!==t.openGroup&&s(t,o.groupmarker[1]))),i(t)})}(v),g.push(v)),(o.numericInput||o.isRTL)&&function e(t){for(var n in t.matches=t.matches.reverse(),t.matches)if(t.matches.hasOwnProperty(n)){var i=parseInt(n);if(t.matches[n].isQuantifier&&t.matches[i+1]&&t.matches[i+1].isGroup){var a=t.matches[n];t.matches.splice(n,1),t.matches.splice(i+1,0,a)}t.matches[n].matches!==te?t.matches[n]=e(t.matches[n]):t.matches[n]=((r=t.matches[n])===o.optionalmarker[0]?r=o.optionalmarker[1]:r===o.optionalmarker[1]?r=o.optionalmarker[0]:r===o.groupmarker[0]?r=o.groupmarker[1]:r===o.groupmarker[1]&&(r=o.groupmarker[0]),r)}var r;return t}(g[0]),g}},ne.extendDefaults=function(e){J.extend(!0,ne.prototype.defaults,e)},ne.extendDefinitions=function(e){J.extend(!0,ne.prototype.definitions,e)},ne.extendAliases=function(e){J.extend(!0,ne.prototype.aliases,e)},ne.format=function(e,t,n){return ne(t).format(e,n)},ne.unmask=function(e,t){return ne(t).unmaskedvalue(e)},ne.isValid=function(e,t){return ne(t).isValid(e)},ne.remove=function(e){J.each(e,function(e,t){t.inputmask&&t.inputmask.remove()})},ne.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},ne.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},ne});

/*!
 * inputmask.extensions.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.0-91
 */
!function(e){"function"==typeof define&&define.amd?define(["./dependencyLibs/inputmask.dependencyLib","./inputmask"],e):"object"==typeof exports?module.exports=e(require("./dependencyLibs/inputmask.dependencyLib"),require("./inputmask")):e(window.dependencyLib||jQuery,window.Inputmask)}(function(e,i){return i.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),i.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,i,n,t,a){return e=-1<n-1&&"."!==i.buffer[n-1]?(e=i.buffer[n-1]+e,-1<n-2&&"."!==i.buffer[n-2]?i.buffer[n-2]+e:"0"+e):"00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,i,n){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,i){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,i,n){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),i});

/*!
 * inputmask.date.extensions.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.0-91
 */
!function(t){"function"==typeof define&&define.amd?define(["./dependencyLibs/inputmask.dependencyLib","./inputmask"],t):"object"==typeof exports?module.exports=t(require("./dependencyLibs/inputmask.dependencyLib"),require("./inputmask")):t(window.dependencyLib||jQuery,window.Inputmask)}(function(u,s){function c(t){if(!t.tokenizer){var e=[];for(var o in h)-1===e.indexOf(o[0])&&e.push(o[0]);t.tokenizer="("+e.join("+|")+")+?|.",t.tokenizer=new RegExp(t.tokenizer,"g")}return t.tokenizer}function r(t,e,o){for(var r,n="";r=c(o).exec(t);)void 0===e?n+=h[r[0]]?"("+h[r[0]][0]+")":r[0]:h[r[0]]?n+=h[r[0]][3].call(e.date):n+=r[0];return n}function p(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}function a(t,e,o){var r,n,a,i,u,s,p,y,m={date:new Date(1,0,1)},d=t;if("string"==typeof d){for(;n=c(o).exec(e);){var l=d.slice(0,n[0].length);h.hasOwnProperty(n[0])&&(r=h[n[0]][2],a=h[n[0]][1],i=m,u=l,s=o,y=p=void 0,"year"===r?(i[r]=(y=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,y=o.min&&o.min.year&&o.max&&o.max.year?(y=y.replace(/[^0-9]/g,""),p.charAt(0)===o.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):y+o.min.year.substr(y.length)):y.replace(/[^0-9]/g,"0")),i["raw"+r]=u):i[r]=s.min&&u.match(/[^0-9]/)?s.min[r]:u,void 0!==a&&a.call(i.date,"month"==r?parseInt(i[r])-1:i[r])),d=d.slice(l.length)}return m}}var h={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return p(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return p(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return p(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return p(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return p(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return p(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return p(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return p(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return p(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return p(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},e={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return s.extendAliases({datetime:{mask:function(t){return t.inputFormat=e[t.inputFormat]||t.inputFormat,t.displayFormat=e[t.displayFormat]||t.displayFormat||t.inputFormat,t.outputFormat=e[t.outputFormat]||t.outputFormat||t.inputFormat,t.placeholder=t.placeholder!==s.prototype.defaults.placeholder?t.placeholder:t.inputFormat,t.min=a(t.min,t.inputFormat,t),t.max=a(t.max,t.inputFormat,t),t.regex=r(t.inputFormat,void 0,t),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(t,e,o){var r=e,n=a(t.join(""),o.inputFormat,o);return r&&n.date.getTime()==n.date.getTime()&&(r=(r=function(t,e){return(!isFinite(t.day)||"29"==t.day&&!isFinite(t.rawyear)||new Date(t.date.getFullYear(),isFinite(t.month)?t.month:t.date.getMonth()+1,0).getDate()>=t.day)&&e}(n,r))&&function(t,e){var o=!0;return e.min&&e.min.date.getTime()==e.min.date.getTime()&&(o=o&&e.min.date.getTime()<=t.getTime()),e.max&&e.max.date.getTime()==e.max.date.getTime()&&(o=o&&e.max.date.getTime()>=t.getTime()),o}(n.date,o)),r},onKeyDown:function(t,e,o,r){if(t.ctrlKey&&t.keyCode===s.keyCode.RIGHT){for(var n,a=new Date,i="";n=c(r).exec(r.inputFormat);)"d"===n[0].charAt(0)?i+=p(a.getDate(),n[0].length):"m"===n[0].charAt(0)?i+=p(a.getMonth()+1,n[0].length):"yyyy"===n[0]?i+=a.getFullYear().toString():"y"===n[0].charAt(0)&&(i+=p(a.getYear(),n[0].length));this.inputmask._valueSet(i),u(this).trigger("setvalue")}},onUnMask:function(t,e,o){return r(o.outputFormat,a(t,o.inputFormat,o),o)},insertMode:!1}}),s});

/*!
 * inputmask.phone.extensions.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.0-91
 */
!function(e){"function"==typeof define&&define.amd?define(["./dependencyLibs/inputmask.dependencyLib","./inputmask"],e):"object"==typeof exports?module.exports=e(require("./dependencyLibs/inputmask.dependencyLib"),require("./inputmask")):e(window.dependencyLib||jQuery,window.Inputmask)}(function(p,r){function n(e,r){var n=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),o=(r.mask||r).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return n.localeCompare(o)}var o=r.prototype.analyseMask;return r.prototype.analyseMask=function(i,e,a){var s={};return a.phoneCodes&&(a.phoneCodes&&1e3<a.phoneCodes.length&&(function e(r,n,o){o=o||s,""!==(n=n||"")&&(o[n]={});for(var t="",a=o[n]||o,p=r.length-1;0<=p;p--)a[t=(i=r[p].mask||r[p]).substr(0,1)]=a[t]||[],a[t].unshift(i.substr(1)),r.splice(p,1);for(var u in a)500<a[u].length&&e(a[u].slice(),u,a)}((i=i.substr(1,i.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),i=function e(r){var n="",o=[];for(var t in r)p.isArray(r[t])?1===r[t].length?o.push(t+r[t]):o.push(t+a.groupmarker[0]+r[t].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):o.push(t+e(r[t]));return 1===o.length?n+=o[0]:n+=a.groupmarker[0]+o.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(s)),i=i.replace(/9/g,"\\9")),o.call(this,i,e,a)},r.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:5,mask:function(e){return e.definitions={"#":r.prototype.definitions[9]},e.phoneCodes.sort(n)},onBeforeMask:function(e,r){var n=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(1<n.indexOf(r.countrycode)||-1===n.indexOf(r.countrycode))&&(n="+"+r.countrycode+n),n},onUnMask:function(e,r,n){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),r});

/*!
 * inputmask.numeric.extensions.js
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 4.0.0-91
 */
!function(e){"function"==typeof define&&define.amd?define(["./dependencyLibs/inputmask.dependencyLib","./inputmask"],e):"object"==typeof exports?module.exports=e(require("./dependencyLibs/inputmask.dependencyLib"),require("./inputmask")):e(window.dependencyLib||jQuery,window.Inputmask)}(function(f,m,h){function n(e,i){for(var t="",r=0;r<e.length;r++)m.prototype.definitions[e.charAt(r)]||i.definitions[e.charAt(r)]||i.optionalmarker.start===e.charAt(r)||i.optionalmarker.end===e.charAt(r)||i.quantifiermarker.start===e.charAt(r)||i.quantifiermarker.end===e.charAt(r)||i.groupmarker.start===e.charAt(r)||i.groupmarker.end===e.charAt(r)||i.alternatormarker===e.charAt(r)?t+="\\"+e.charAt(r):t+=e.charAt(r);return t}return m.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=h),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var i=Math.floor(e.integerDigits/e.groupSize),t=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0==t?i-1:i),e.integerDigits<1&&(e.integerDigits="*")}1<e.placeholder.length&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==h){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var a=e.digits.toString().split(",");isFinite(a[0]&&a[1]&&isFinite(a[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||0<parseInt(e.digits))&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(e,i,t,r,a){if("-"===t||t===a.negationSymbol.front)return!0===a.allowMinus&&(a.isNegative=a.isNegative===h||!a.isNegative,""===e.join("")||{caret:i,dopost:!0});if(!1===r&&t===a.radixPoint&&a.digits!==h&&(isNaN(a.digits)||0<parseInt(a.digits))){var n=f.inArray(a.radixPoint,e);if(-1!==n)return!0===a.numericInput?i===n:{caret:n+1}}return!0},postValidation:function(e,i,t){var r=t.suffix.split(""),a=t.prefix.split("");if(i.pos===h&&i.caret!==h&&!0!==i.dopost)return i;var n=i.caret!==h?i.caret:i.pos,o=e.slice();t.numericInput&&(n=o.length-n-1,o=o.reverse());var p=o[n];if(p===t.groupSeparator&&(p=o[n+=1]),n===o.length-t.suffix.length-1&&p===t.radixPoint)return i;p!==h&&p!==t.radixPoint&&p!==t.negationSymbol.front&&p!==t.negationSymbol.back&&(o[n]="?",0<t.prefix.length&&n>=(!1===t.isNegative?1:0)&&n<t.prefix.length-1+(!1===t.isNegative?1:0)?a[n-(!1===t.isNegative?1:0)]="?":0<t.suffix.length&&n>=o.length-t.suffix.length-(!1===t.isNegative?1:0)&&(r[n-(o.length-t.suffix.length-(!1===t.isNegative?1:0))]="?")),a=a.join(""),r=r.join("");var l=o.join("").replace(a,"");if(l=(l=(l=(l=l.replace(r,"")).replace(new RegExp(m.escapeRegex(t.groupSeparator),"g"),"")).replace(new RegExp("[-"+m.escapeRegex(t.negationSymbol.front)+"]","g"),"")).replace(new RegExp(m.escapeRegex(t.negationSymbol.back)+"$"),""),isNaN(t.placeholder)&&(l=l.replace(new RegExp(m.escapeRegex(t.placeholder),"g"),"")),1<l.length&&1!==l.indexOf(t.radixPoint)&&("0"===p&&(l=l.replace(/^\?/g,"")),l=l.replace(/^0/g,"")),l.charAt(0)===t.radixPoint&&""!==t.radixPoint&&!0!==t.numericInput&&(l="0"+l),""!==l){if(l=l.split(""),(!t.digitsOptional||t.enforceDigitsOnBlur&&"blur"===i.event)&&isFinite(t.digits)){var s=f.inArray(t.radixPoint,l),g=f.inArray(t.radixPoint,o);-1===s&&(l.push(t.radixPoint),s=l.length-1);for(var c=1;c<=t.digits;c++)t.digitsOptional&&(!t.enforceDigitsOnBlur||"blur"!==i.event)||l[s+c]!==h&&l[s+c]!==t.placeholder.charAt(0)?-1!==g&&o[g+c]!==h&&(l[s+c]=l[s+c]||o[g+c]):l[s+c]=i.placeholder||t.placeholder.charAt(0)}if(!0!==t.autoGroup||""===t.groupSeparator||p===t.radixPoint&&i.pos===h&&!i.dopost)l=l.join("");else{var d=l[l.length-1]===t.radixPoint&&i.c===t.radixPoint;l=m(function(e,i){var t="";if(t+="("+i.groupSeparator+"*{"+i.groupSize+"}){*}",""!==i.radixPoint){var r=e.join("").split(i.radixPoint);r[1]&&(t+=i.radixPoint+"*{"+r[1].match(/^\d*\??\d*/)[0].length+"}")}return t}(l,t),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(l.join("")),d&&(l+=t.radixPoint),l.charAt(0)===t.groupSeparator&&l.substr(1)}}if(t.isNegative&&"blur"===i.event&&(t.isNegative="0"!==l),l=a+l,l+=r,t.isNegative&&(l=t.negationSymbol.front+l,l+=t.negationSymbol.back),l=l.split(""),p!==h)if(p!==t.radixPoint&&p!==t.negationSymbol.front&&p!==t.negationSymbol.back)-1<(n=f.inArray("?",l))?l[n]=p:n=i.caret||0;else if(p===t.radixPoint||p===t.negationSymbol.front||p===t.negationSymbol.back){var u=f.inArray(p,l);-1!==u&&(n=u)}t.numericInput&&(n=l.length-n-1,l=l.reverse());var x={caret:p===h||i.pos!==h?n+(t.numericInput?-1:1):n,buffer:l,refreshFromBuffer:i.dopost||e.join("")!==l.join("")};return x.refreshFromBuffer?x:i},onBeforeWrite:function(e,i,t,r){if(e)switch(e.type){case"keydown":return r.postValidation(i,{caret:t,dopost:!0},r);case"blur":case"checkval":var a;if((n=r).parseMinMaxOptions===h&&(null!==n.min&&(n.min=n.min.toString().replace(new RegExp(m.escapeRegex(n.groupSeparator),"g"),""),","===n.radixPoint&&(n.min=n.min.replace(n.radixPoint,".")),n.min=isFinite(n.min)?parseFloat(n.min):NaN,isNaN(n.min)&&(n.min=Number.MIN_VALUE)),null!==n.max&&(n.max=n.max.toString().replace(new RegExp(m.escapeRegex(n.groupSeparator),"g"),""),","===n.radixPoint&&(n.max=n.max.replace(n.radixPoint,".")),n.max=isFinite(n.max)?parseFloat(n.max):NaN,isNaN(n.max)&&(n.max=Number.MAX_VALUE)),n.parseMinMaxOptions="done"),null!==r.min||null!==r.max){if(a=r.onUnMask(i.join(""),h,f.extend({},r,{unmaskAsNumber:!0})),null!==r.min&&a<r.min)return r.isNegative=r.min<0,r.postValidation(r.min.toString().replace(".",r.radixPoint).split(""),{caret:t,dopost:!0,placeholder:"0"},r);if(null!==r.max&&a>r.max)return r.isNegative=r.max<0,r.postValidation(r.max.toString().replace(".",r.radixPoint).split(""),{caret:t,dopost:!0,placeholder:"0"},r)}return r.postValidation(i,{caret:t,placeholder:"0",event:"blur"},r);case"_checkval":return{caret:t}}var n},regex:{integerPart:function(e,i){return i?new RegExp("["+m.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+m.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+m.escapeRegex(e.groupSeparator)+m.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,i,t,r,a,n){var o=r?new RegExp("[0-9"+m.escapeRegex(a.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===o){if(!0!==a.numericInput&&i.validPositions[t]!==h&&"~"===i.validPositions[t].match.def&&!n){var p=i.buffer.join(""),l=(p=(p=p.replace(new RegExp("[-"+m.escapeRegex(a.negationSymbol.front)+"]","g"),"")).replace(new RegExp(m.escapeRegex(a.negationSymbol.back)+"$"),"")).split(a.radixPoint);1<l.length&&(l[1]=l[1].replace(/0/g,a.placeholder.charAt(0))),"0"===l[0]&&(l[0]=l[0].replace(/0/g,a.placeholder.charAt(0))),p=l[0]+a.radixPoint+l[1]||"";var s=i._buffer.join("");for(p===a.radixPoint&&(p=s);null===p.match(m.escapeRegex(s)+"$");)s=s.slice(1);o=(p=(p=p.replace(s,"")).split(""))[t]===h?{pos:t,remove:t}:{pos:t}}}else r||e!==a.radixPoint||i.validPositions[t-1]!==h||(i.buffer[t]="0",o={pos:t+1});return o},cardinality:1},"+":{validator:function(e,i,t,r,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,i,t,r,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,t,r,a){var n="["+m.escapeRegex(a.radixPoint)+"]",o=new RegExp(n).test(e);return o&&i.validPositions[t]&&i.validPositions[t].match.placeholder===a.radixPoint&&(o={caret:t+1}),o},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,t){if(""===i&&!0===t.nullable)return i;var r=e.replace(t.prefix,"");return r=(r=r.replace(t.suffix,"")).replace(new RegExp(m.escapeRegex(t.groupSeparator),"g"),""),""!==t.placeholder.charAt(0)&&(r=r.replace(new RegExp(t.placeholder.charAt(0),"g"),"0")),t.unmaskAsNumber?(""!==t.radixPoint&&-1!==r.indexOf(t.radixPoint)&&(r=r.replace(m.escapeRegex.call(this,t.radixPoint),".")),r=(r=r.replace(new RegExp("^"+m.escapeRegex(t.negationSymbol.front)),"-")).replace(new RegExp(m.escapeRegex(t.negationSymbol.back)+"$"),""),Number(r)):r},isComplete:function(e,i){var t=e.join("");if(e.slice().join("")!==t)return!1;var r=t.replace(i.prefix,"");return r=(r=r.replace(i.suffix,"")).replace(new RegExp(m.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(r=r.replace(m.escapeRegex(i.radixPoint),".")),isFinite(r)},onBeforeMask:function(e,i){if(i.isNegative=h,e=e.toString().charAt(e.length-1)===i.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==i.radixPoint&&isFinite(e)){var t=e.split("."),r=""!==i.groupSeparator?parseInt(i.groupSize):0;2===t.length&&(t[0].length>r||t[1].length>r||t[0].length<=r&&t[1].length<r)&&(e=e.replace(".",i.radixPoint))}var a=e.match(/,/g),n=e.match(/\./g);if(e=n&&a?n.length>a.length?(e=e.replace(/\./g,"")).replace(",",i.radixPoint):a.length>n.length?(e=e.replace(/,/g,"")).replace(".",i.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(m.escapeRegex(i.groupSeparator),"g"),""),0===i.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==i.radixPoint&&isFinite(i.digits)&&-1!==e.indexOf(i.radixPoint)){var o=e.split(i.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(i.digits)<o.toString().length){var p=Math.pow(10,parseInt(i.digits));e=e.replace(m.escapeRegex(i.radixPoint),"."),e=(e=Math.round(parseFloat(e)*p)/p).toString().replace(".",i.radixPoint)}}return e},canClearPosition:function(e,i,t,r,a){var n=e.validPositions[i],o=n.input!==a.radixPoint||null!==e.validPositions[i].match.fn&&!1===a.decimalProtect||n.input===a.radixPoint&&e.validPositions[i+1]&&null===e.validPositions[i+1].match.fn||isFinite(n.input)||i===t||n.input===a.groupSeparator||n.input===a.negationSymbol.front||n.input===a.negationSymbol.back;return!o||"+"!==n.match.nativeDef&&"-"!==n.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(e,i,t,r){var a=f(this);if(e.ctrlKey)switch(e.keyCode){case m.keyCode.UP:a.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),a.trigger("setvalue");break;case m.keyCode.DOWN:a.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),a.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),m});

/*!
 * simple-mask-money.js
 * Simple money mask developed with pure JavaScript
 * https://github.com/codermarcos/simple-mask-money
 * Copyright (c) 2010 - 2019 Marcos Junior
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 2.0.0
 */
"use strict";var Inputmoney=function(){var e={preffix:"",suffix:"",fixed:!0,fractionDigits:2,decimalSeparator:",",thousandsSeparator:".",autoCompleteDecimal:!1,emptyOrInvalid:function(){return Inputmoney.args.fixed?"0"+Inputmoney.args.decimalSeparator+"00":"_"+Inputmoney.args.decimalSeparator+"__"}};return{get args(){return e},set args(n){e=Object.assign(e,n)},onlyNumber:function(n){for(var e="",t=0;t<n.length;t++)isFinite(n[t])&&(e+=n[t]);return e},addingPreffix:function(n){return""+Inputmoney.args.preffix+n},removingPreffix:function(n){return n.replace(Inputmoney.args.preffix,"")},addingSuffix:function(n){return""+n+Inputmoney.args.suffix},removingSuffix:function(n){return n=n.includes(Inputmoney.args.suffix,n.length-Inputmoney.args.fractionDigits)?n.replace(Inputmoney.args.suffix,""):n.substring(0,n.length)},addingCompleterFromStart:function(n,e){for(;n.length<Inputmoney.args.fractionDigits;)n=""+e+n;return n},addingCompleterFromEnd:function(n,e){for(;n.length<Inputmoney.args.fractionDigits;)n=""+n+e;return n},removingCompleterFromStart:function(n,e){for(;n[0]===e;)n=n.replace(e,"");return n},removingCompleterFromEnd:function(n,e){for(;n[n.length-1]===e;)n=n.substring(0,n.length-1);return n},addingAutoComplete:function(n){return""+n+Inputmoney.addingCompleterFromEnd("","0")},autoComplete:function(n){return 1<(n.match(new RegExp("\\"+Inputmoney.args.decimalSeparator,"g"))||[]).length&&(n=Inputmoney.addingAutoComplete(n)),n},addingDecimalSeparator:function(n,e,t){var r=n.length-Inputmoney.args.fractionDigits,o=void 0,a="$1",i=e,u=isFinite(e)?"d":"w";return o="(\\"+u+"{"+Inputmoney.args.fractionDigits+"})",0<r&&(o="(\\"+u+"{"+r+"})"+o,i=a,a="$2"),n.replace(new RegExp(o),""+i+t+a)},removeSeparator:function(n,e){return""!==e?n.replace(new RegExp("\\"+e,"g"),""):n},formatDecimal:function(n,e,t){return n=Inputmoney.addingCompleterFromStart(n,e),n=Inputmoney.addingDecimalSeparator(n,e,t)},textToNumber:function(n){var e=n.toString(),t=Inputmoney.args.fixed?"0":"_";return Inputmoney.args.preffix&&(e=Inputmoney.removingPreffix(e)),Inputmoney.args.suffix&&(e=Inputmoney.removingSuffix(e)),Inputmoney.args.autoCompleteDecimal&&(e=Inputmoney.autoComplete(e)),e=Inputmoney.removeSeparator(e,Inputmoney.args.thousandsSeparator),e=Inputmoney.removeSeparator(e,Inputmoney.args.decimalSeparator),e=Inputmoney.onlyNumber(e),(e=Inputmoney.removingCompleterFromStart(e,t))||(Inputmoney.args.fixed?"0":"")},numberToText:function(n){var e=Inputmoney.args.emptyOrInvalid();if("NaN"!==parseFloat(n))if(n.length<=Inputmoney.args.fractionDigits)e=Inputmoney.formatDecimal(n,Inputmoney.args.fixed?"0":"_",Inputmoney.args.decimalSeparator);else{for(var t=n.length-Inputmoney.args.fractionDigits,r=Math.ceil(t/3),o="(\\d)",a=Inputmoney.args.decimalSeparator+"$"+(r+1),i=r;0!==i;i--)3<=t?(o="(\\d{3})"+o,t-=3):o="(\\d{"+t+"})"+o,a=1<i?Inputmoney.args.thousandsSeparator+"$"+i+a:"$"+i+a;e=n.replace(new RegExp(o),a)}return Inputmoney.args.preffix&&(e=Inputmoney.addingPreffix(e)),Inputmoney.args.suffix&&(e=Inputmoney.addingSuffix(e)),e},format:function(n){return Inputmoney.numberToText(Inputmoney.textToNumber(n))},formatToNumber:function(n){var e="0",t=Inputmoney.textToNumber(n);if("NaN"!==parseFloat(t)){if(t.length<=Inputmoney.args.fractionDigits)t=Inputmoney.formatDecimal(t,"0",".");else{var r=t.length-Inputmoney.args.fractionDigits;t=t.replace(new RegExp("(\\d{"+r+"})(\\d{"+Inputmoney.args.fractionDigits+"})"),"$1.$2")}e=t}return parseFloat(e)}}}();

/*!
* Element data/storage
* Anonymous Function for Data Store Creation (Temporary Data Storage)
* https://j11y.io/javascript/element-datastorage/
* Copyright (c) 2009 JAMES PADOLSEY
*/
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

/*!
 * __FILE__ and __DIR__ in JavaScript
 * https://gist.github.com/adamasantares/04cf84e3a99326a4d73f (Inconsistent)
 * https://stackoverflow.com/questions/8523200/javascript-get-current-filescript-path
 * Copyright (c) 2019 by Nickson Jeanmerson (Inspired in John Resig Blog)
 */
(function(){
  var _script = document.querySelector('script[type="text/javascript"][src*="x-input"]'),
      _link = document.querySelector('link[rel="import"][href*="x-input"]'),
      _path = (_script == null ? _link.href : _script.src);
  Object.defineProperties(window, {
    '__FILE__': {
      get: function(){
        return _path;
      }
    },
    '__DIR__': {
      get: function(){
        return _path.substr(0, _path.lastIndexOf( '/' )+1);
      }
    }
  });
})();

/*!
 * X Input - Componente Web
 * É um Componente para Criação de Campos de Formulário Inteligentes
 * e com Comportamento e Máscara, Util para Criação de Formulários Ricos
 * @element input
 * @property is="x-input"
 * @demo https://github.com/nicksonjean/webcomponents/tree/master/x-input
 * @author Nickson Jeanmerson
 */
var App = App || {}, Pattern = Pattern || [], MaskedInput, ua = new UAParser().getResult();
App = 
{
  "EXT": {
    "CSS" : "\ninput[is='x-input']::-ms-clear {  display: none; width : 0; height: 0; }\ninput[is='x-input']::-ms-reveal {  display: none; width : 0; height: 0; }\ninput[is='x-input']::-webkit-input-placeholder { color: #337ab7; }\ninput[is='x-input']:-ms-input-placeholder { color: #337ab7; }\ninput[is='x-input']:-ms-input-placeholder:focus { color: #337ab7; }\ninput[is='x-input']:-moz-placeholder{ color: #337ab7; }\ninput[is='x-input']::-moz-placeholder{ color: #337ab7; }\n  ",
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
    "URL" : {
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
        var isIE = document.body.style.msTouchAction !== undefined;
        if(isIE)
          var IEcaFix = {'host' : function(url) { return App.EXT.URL.Parse(url).hostname + '/'; } }
        else
          var IEcaFix = {'host' : function(url) { return App.EXT.URL.Parse(url).host ; } }
        return App.EXT.URL.Parse(url).protocol + '//' + IEcaFix.host(url) + App.EXT.URL.ParentDirectory(App.EXT.URL.ParentDirectory(App.EXT.URL.Parse(url).pathname));
      }
    },
    /*!
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
      /*!
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

var isIE9 = document.all && document.addEventListener && !window.atob;

var __ROOT__      = App.EXT.URL.Domain(document.URL),
    __TMP_STYLE__ = App.EXT.URL.Parse(document.URL || __FILE__).queryString.style || 'true',
    __STYLE__     = (__TMP_STYLE__ || 'true') && ((isIE9) ? 'false' : __TMP_STYLE__),
    __DEBUG__     = App.EXT.URL.Parse(document.URL || __FILE__).queryString.debug || 'false';

try {
  document.getElementById('_debug').innerHTML = __DEBUG__;
  document.getElementById('_style').innerHTML = (isIE9) ? ( (__TMP_STYLE__ == 'true') ? '<s>' + __TMP_STYLE__ + '</s>' + '/' +  '<b>false*</b>' : __TMP_STYLE__ ) : __STYLE__;
}
catch (e) {}

var log = function(flag, value) {
  if(__DEBUG__ !== undefined && __DEBUG__ == 'true') {
    console.log(flag + ': ' + value);
  }
}

var table = function(_array) {
  if(__DEBUG__ !== undefined && __DEBUG__ == 'true') {
    function _debug(style) {
      this.style = style;
    }

    var _log = {};
    _log.command = new _debug(__STYLE__);

    console.table(_log, _array);
  }
}

// Log das Configurações
table(["style"]);

// Regras Embutidas
var Rules = Rules || {};
Rules = 
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
      "HORA_MINUTO": {
        "alias": "time",
        "clearIncomplete": true,
        "inputFormat": "isoTime", 
        "placeholder": "HH:MM",
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
      "HORA_MINUTO_12H_REGEX": {
        "regex": "^(0[0-9]|1[0-2]):[0-5][0-9]$", 
        "clearIncomplete": true,
        "placeholder": "HH:MM",
        "jitMasking": true
      },
      "HORA_MINUTO_24H_REGEX": {
        "regex": "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$", 
        "clearIncomplete": true,
        "placeholder": "HH:MM",
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
  }
}

// Mesclo Rules com a Classe Estática App
App = Object.assign(App, Rules);

/*!
 * Load Style/Script Inline for IE
 * Dynamic SCRIPT and STYLE elements in IE
 * https://www.phpied.com/dynamic-script-and-style-elements-in-ie/
 * Copyright (c) 2007 Stoyan Stefanov
 */
(function(){
  if(__STYLE__ === undefined || __STYLE__ == 'true') {
    if ( ( ua.browser.name === 'IE' ) && ( ua.browser.version < 10) ) {
      var _style = document.createElement('style');
      var _rules = App.EXT.CSS;
      _style.setAttribute("type", "text/css");
      var _head = document.getElementsByTagName('head')[0];
      _head.appendChild(_style);
      if (_style.styleSheet) { // IE 9 & 10
        _style.styleSheet.cssText = _rules;
      }
      else { // IE 11
        var _node = document.createTextNode(_rules);
        _style.appendChild(_node);
      }
    }
  }
})();

// Programação do Componente
(function() {

  //Função Pseudo-Privada para ser Usada Apenas com a Finalidade de Instanciar o Componente
  _xInput = function(that, ua) {

    if(__STYLE__ === undefined || __STYLE__ == 'true') {
      // Valido se o Navegador Possui Suporte a Templates
      if ( ( 'content' in document.createElement('template') ) && ( ( ua.browser.name !== 'IE' ) || ( ua.browser.name === 'IE' && ua.browser.version >= 10) ) ) {
        // Define a Estilização via Javascript
        var template = document.createElement('template');
        template.innerHTML = "<style>" + App.EXT.CSS + "</style>";
        // Aplica a Estilização
        that.appendChild(template.content.cloneNode(true));
      }
    }

    /* Apaga ao Deixar o Campo Incompleto */
    Inputmask.extendDefaults({
      "clearIncomplete": true, 
      "autoUnmask": true, 
      "showMaskOnFocus": false, 
      "showMaskOnHover": false
    });

    /* Inicia o Componente */
    if (that.hasAttribute('x-type') && that.getAttribute('x-type') != '') {

      // Obtém o Atributo x-type e Define as Regras de Validação
      var x_type = that.getAttribute('x-type').toUpperCase(), Rule = undefined;

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
          var $that = that, 
              // Define Timer dos Inputs
              Timeout = undefined, 
              // Obtém o Template de Configuração
              Template = App.EXT.JSON.Template(App.DEFAULT.NUMBER.PATTERN),
              // Carrega as Regras Padrão do Tipo do Componente
              DEFAULT = Template(Rule.RULE);

          // Matriz Única do Elemento
          window.data(that).input = [];

          // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
          var Config = {
            "Rule": {
              "alias": DEFAULT.RULE.alias, /*decimal*/
              "numericInput": DEFAULT.RULE.numericInput, /*false*/
              "digitsOptional": DEFAULT.RULE.digitsOptional,
              "prefix": (!that.hasAttribute('x-prefix') && that.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : that.getAttribute('x-prefix'),
              "sufix": (!that.hasAttribute('x-sufix') && that.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : that.getAttribute('x-sufix'),
              "radixPoint": Rule.RULE.radixPoint,
              "groupSeparator": Rule.RULE.groupSeparator,
              "groupSize": Rule.RULE.groupSize,
              "autoGroup": DEFAULT.RULE.autoGroup, /*true*/
              "digits": DEFAULT.RULE.digits,
              "rightAlign": (!that.hasAttribute('x-dir') && that.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((that.getAttribute('x-dir') == 'ltr') ? false : true),
              "allowMinus": (!that.hasAttribute('x-negative') && that.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((that.getAttribute('x-negative') == 'true') ? true : false),
              "removeMaskOnSubmit": (!that.hasAttribute('x-onsubmit') && that.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((that.getAttribute('x-onsubmit') == 'true') ? true : false), /*true*/
              "clearMaskOnLostFocus": (!that.hasAttribute('x-onfocusout') && that.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((that.getAttribute('x-onfocusout') == 'true') ? true : false), /*true*/
              "showMaskOnFocus": (!that.hasAttribute('x-onfocusin') && that.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((that.getAttribute('x-onfocusin') == 'true') ? true : false), /*false*/
              "showMaskOnHover": (!that.hasAttribute('x-onhover') && that.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((that.getAttribute('x-onhover') == 'true') ? true : false), /*false*/
              "min": (!that.hasAttribute('x-min') && that.getAttribute('x-min') != '') ? Rule.RULE.min : that.getAttribute('x-min'),
              "max": (!that.hasAttribute('x-max') && that.getAttribute('x-max') != '') ? Rule.RULE.max : that.getAttribute('x-max'),
              "oncleared": function(event) { event.target.value = ''; window.data(that).input = []; },
              "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
              "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } }
            },
            "affinity": (!that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : that.getAttribute('x-affinity'), /*+*/
            "placeholder": (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : that.getAttribute('placeholder')
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
              Maxlength = 0,
              PositiveValue = 0;

          // Se Existe Valor, Verifica é Positivo ou Negativo
          if (that.value !== '') {
            PositiveValue = (that.value > 0) ? true : false;
            // Para os x-type="positivedec" e x-type="negativedec"
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') ) {
               // Apenas Positivo
               if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') {
                 // Aplica a Flag para Valores Unsigned
                 if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                   that.setAttribute('x-case', 'signed');
              }
              // Apenas Negativo
              if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') {
                // Remove a Flag para Valores Negativos
                if (that.hasAttribute('x-case'))
                  that.removeAttribute('x-case');
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Verifica se Pode Ser Negativo
                if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
                  Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                  if (!that.hasAttribute('x-negative'))
                    that.setAttribute('x-negative', 'true');
                }
              }
            }
            else {
              // Aplica a Flag para Valores Signed
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
              Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
            }

            var act_value = new BigNumber(that.value),
                max_value = new BigNumber(Config.Rule.max.toString());

            // Corrige o Valor
            that.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

            /* Alimenta a Matriz de Caracteres do Componente */
            for (var i=0; i < that.value.length; i++) {
              if(App.EXT.Validate.isNumber(that.value.charAt(i))) {
                window.data(that).input.push(that.value.charAt(i));
              }
            }

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

            // Atribue os Valores
            that.removeAttribute('value');
            that.setAttribute('x-value', App.EXT.Format.toBigMoney(that.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
            that.value = that.getAttribute('x-value');
            that.setAttribute('x-mode', 'overwritable');
            that.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
            that.setAttribute('maxlength', Maxlength);
            that.setAttribute('x-limit', Number(that.getAttribute('maxlength')) - that.value.length);
          }
          // Se Não Existir Valor
          else {
            /*
             * Verifica se Pode Ser Signed
             */
            if  ( 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'smallint') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mediumint') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'integer') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bigint') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint') 
                ) {
              // Aplica a Flag para Valores Unsigned
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
            }
            else {
              /* Para os x-type="positive" e x-type="negative" */
              if (
                   (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') || 
                   (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') 
                 ) {
                 /* Apenas Positivo */
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') {
                   // Aplica a Flag para Valores Unsigned
                   if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                     that.setAttribute('x-case', 'unsigned');
                 }
                 /* Apenas Negativo */
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') {
                   // Remove a Flag para Valores Negativos
                   if (that.hasAttribute('x-case'))
                     that.removeAttribute('x-case');
                   if (!that.hasAttribute('x-negative'))
                     that.setAttribute('x-negative', 'true');
                 }
              }
              /* Para os Tipos Signed: x-type="smallint", x-type="mediumint", x-type="integer"  x-type="bigint" */
              else {
                // Aplica a Flag para Valores Signed
                if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                  that.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (that.getAttribute('x-case') == 'signed') {
                  if (!that.hasAttribute('x-affinity'))
                    that.setAttribute('x-affinity', Config.affinity);
                }
              }
            }
            // Verifica se Pode Ser Negativo
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
              if (that.getAttribute('x-type') == 'negativeint') {
                Config_Symbol = '-';
              }
              else {
                if (that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') == '+')
                  Config_Symbol = '';
                else
                  Config_Symbol = '-';
              }
              Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
            }

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Config.Rule).mask(that);

            // Define o Atributo x-mode como insertable
            that.setAttribute('x-mode', 'insertable');
          }

          // Atribue o placeholder apenas para o x-type="zerofillint"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
            Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.sufix;
          // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofillint"
          else
            Placeholder = Config.Rule.prefix + Config_Symbol + Config.placeholder + Config.Rule.sufix;

          // Define o Atributo placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '')
            that.setAttribute('placeholder', Placeholder);

          // Atribue o maxlength apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
            Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
          // Define o Atributo maxlength
          else
            Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

          // Define o Atributo maxlength
          if (!that.hasAttribute('maxlength') && that.getAttribute('maxlength') != '')
            that.setAttribute('maxlength', Maxlength);

          // Define o Atributo x-limit
          if (!that.hasAttribute('x-limit') && that.getAttribute('x-limit') != '')
            that.setAttribute('x-limit', that.getAttribute('maxlength'));

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          /*
           * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
           * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
           * https://github.com/google/material-design-lite/issues/243
           * https://codepen.io/surma/pen/JXdEqe
           */
          if(that.classList.contains('mdl-textfield__input')) {
            setTimeout(function(){
              App.EXT.Class.Remove($that.parentElement, 'has-placeholder');
              App.EXT.Class.Add($that.parentElement, 'has-placeholder');
            }, 500);
          }

          // Posiciona o Cursor no Final no Valor
          App.EXT.Caret.toEnd(that);

          if (that.value === '') 
            that.setAttribute('x-value', Placeholder);

          // Reseta a Máscara
          if (that.inputmask)
            that.inputmask.remove();

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
                var sign_value = ($that.hasAttribute('x-signal') && $that.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                if ($that.hasAttribute('x-type') && $that.getAttribute('x-type') == 'zerofillint') {
                  var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                      zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
                else {
                  var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits),
                      zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
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
          App.EXT.Event.Add(that, [Event.Paste], function(event){
            Action.PasteInput(event)
          }, false);

          /* 
           * Evento Para Inclusão de Números ao Input
           */
          App.EXT.Event.Add(that, [Event.Write], function(event){
            Action.WriteInput(event);
          }, false);

          /* 
           * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
           * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
           */
          App.EXT.Event.Add(that, [Event.Erase], function(event){
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
          App.EXT.Event.Add(that.form, [Event.Submit], function(event){
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
          var $that = that, 
              // Define Timer dos Inputs
              Timeout = undefined, 
              // Obtém o Template de Configuração
              Template = App.EXT.JSON.Template(App.DEFAULT.DECIMAL.PATTERN),
              // Carrega as Regras Padrão do Tipo do Componente
              DEFAULT = Template(Rule.RULE);

          // Matriz Única do Elemento
          window.data(that).input = [];

          // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
          var Config = {
            "Rule": {
              "alias": DEFAULT.RULE.alias, /*decimal*/
              "numericInput": DEFAULT.RULE.numericInput, /*true*/
              "digitsOptional": DEFAULT.RULE.digitsOptional,
              "prefix": (!that.hasAttribute('x-prefix') && that.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : that.getAttribute('x-prefix'),
              "sufix": (!that.hasAttribute('x-sufix') && that.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : that.getAttribute('x-sufix'),
              "radixPoint": (!that.hasAttribute('x-decimal-char') && that.getAttribute('x-decimal-char') != '') ? Rule.RULE.radixPoint : that.getAttribute('x-decimal-char'),
              "groupSeparator": (!that.hasAttribute('x-thousands-char') && that.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSeparator : that.getAttribute('x-thousands-char'),
              "groupSize": (!that.hasAttribute('x-thousands-char') && that.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSize : that.getAttribute('x-thousands-char'),
              "autoGroup": DEFAULT.RULE.autoGroup, /*true*/
              "digits": (!that.hasAttribute('x-decimal-digits') && that.getAttribute('x-decimal-digits') != '') ? Rule.RULE.digits : that.getAttribute('x-decimal-digits'),
              "rightAlign": (!that.hasAttribute('x-dir') && that.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((that.getAttribute('x-dir') == 'ltr') ? false : true),
              "allowMinus": (!that.hasAttribute('x-negative') && that.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((that.getAttribute('x-negative') == 'true') ? true : false),
              "removeMaskOnSubmit": (!that.hasAttribute('x-onsubmit') && that.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((that.getAttribute('x-onsubmit') == 'true') ? true : false), /*true*/
              "clearMaskOnLostFocus": (!that.hasAttribute('x-onfocusout') && that.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((that.getAttribute('x-onfocusout') == 'true') ? true : false), /*true*/
              "showMaskOnFocus": (!that.hasAttribute('x-onfocusin') && that.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((that.getAttribute('x-onfocusin') == 'true') ? true : false), /*false*/
              "showMaskOnHover": (!that.hasAttribute('x-onhover') && that.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((that.getAttribute('x-onhover') == 'true') ? true : false), /*false*/
              "min": (!that.hasAttribute('x-min') && that.getAttribute('x-min') != '') ? Rule.RULE.min : that.getAttribute('x-min'),
              "max": (!that.hasAttribute('x-max') && that.getAttribute('x-max') != '') ? Rule.RULE.max : that.getAttribute('x-max'),
              "oncleared": function(event) { event.target.value = ''; window.data(that).input = []; },
              "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
              "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } },
              "placeholder": DEFAULT.RULE.placeholder
            },
            "affinity": (!that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : that.getAttribute('x-affinity'), /*+*/
            "placeholder": (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : that.getAttribute('placeholder')
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
              Maxlength = 0,
              PositiveValue = true;

          // Se Existe Valor, Verifica é Positivo ou Negativo
          if (that.value !== '') {
            PositiveValue = (that.value > 0) ? true : false;
            // Para os x-type="positivedec" e x-type="negativedec"
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') ) {
               // Apenas Positivo
               if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') {
                 // Aplica a Flag para Valores Unsigned
                 if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                   that.setAttribute('x-case', 'signed');
              }
              // Apenas Negativo
              if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') {
                // Remove a Flag para Valores Negativos
                if (that.hasAttribute('x-case'))
                  that.removeAttribute('x-case');
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Verifica se Pode Ser Negativo
                if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
                  Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                  if (!that.hasAttribute('x-negative'))
                    that.setAttribute('x-negative', 'true');
                }
              }
            }
            else {
              // Aplica a Flag para Valores Signed
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
              Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
            }

            var act_value = new BigNumber(that.value),
                max_value = new BigNumber(Config.Rule.max.toString());

            // Corrige o Valor
            that.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

            // Alimenta a Matriz de Caracteres do Componente
            for (var i=0; i < that.value.length; i++) {
              if(App.EXT.Validate.isNumber(that.value.charAt(i))) {
                window.data(that).input.push(that.value.charAt(i));
              }
            }

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

            // Atribue os Valores
            that.removeAttribute('value');
            that.setAttribute('x-value', App.EXT.Format.toBigMoney(that.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
            that.value = that.getAttribute('x-value');
            that.setAttribute('x-mode', 'overwritable');
            that.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
            that.setAttribute('maxlength', Maxlength);
            that.setAttribute('x-limit', Number(that.getAttribute('maxlength')) - that.value.length);
          }
          // Se Não Existir Valor
          else {
            // Verifica se Pode Ser Signed
            if  ( 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aed') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'afn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'all') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'amd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ang') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aoa') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ars') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aud') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'awg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'azn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bam') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bbd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bdt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bgn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bhd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bif') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bob') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bov') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'brl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bsd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'btn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bwp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'byn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'byr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cdf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'che') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'chf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'chw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'clf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'clp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cny') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cou') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'crc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cuc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cup') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cve') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'czk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'djf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dkk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'eek') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'egp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ern') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'etb') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'eur') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'fjd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'fkp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gbp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gel') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ghs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gip') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gnf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gtq') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gwp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hkd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hnl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hrk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'htg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'huf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'idr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ils') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'inr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'iqd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'irr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'isk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jod') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jpy') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kes') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kgs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'khr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kmf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kpw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'krw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kwd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kzt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lak') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lbp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lkr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lrd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lsl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ltl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'luf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lvl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mdl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mga') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mkd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mmk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mnt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mro') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mur') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mvr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mwk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mxn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mxv') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'myr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mzn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ngn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nio') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nok') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'npr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'omr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pab') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pen') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pgk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'php') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pkr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pln') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pyg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'qar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ron') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rsd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rub') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rwf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sbd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'scr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sdg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sek') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sgd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'shp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sll') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sos') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'srd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ssp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'std') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'svc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'syp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'szl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'thb') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tjs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tmt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'top') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'try') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ttd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'twd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tzs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uah') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ugx') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'usd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'usn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uyi') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uyu') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uzs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vef') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vuv') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'wst') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xaf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xcd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xof') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xpf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'yer') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zmk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zmw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zwl') 
                ) {
              // Aplica a Flag para Valores Unsigned
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
            }
            else {
              // Para os x-type="positive" e x-type="negative"
              if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') ) {
                 // Apenas Positivo
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') {
                   // Aplica a Flag para Valores Unsigned
                   if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                     that.setAttribute('x-case', 'unsigned');
                 }
                 // Apenas Negativo
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') {
                   // Remove a Flag para Valores Negativos
                   if (that.hasAttribute('x-case'))
                     that.removeAttribute('x-case');
                   if (!that.hasAttribute('x-negative'))
                     that.setAttribute('x-negative', 'true');
                 }
              }
              // Para os Tipos Signed Diferentes de: x-type="positivedec" e x-type="negativedec"
              else {
                // Aplica a Flag para Valores Signed
                if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                  that.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (that.getAttribute('x-case') == 'signed') {
                  if (!that.hasAttribute('x-affinity'))
                    that.setAttribute('x-affinity', Config.affinity);
                }
              }
            }
            // Verifica se Pode Ser Negativo
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
              if (that.getAttribute('x-type') == 'negativedec') {
                Config_Symbol = '-';
              }
              else {
                if (that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') == '+')
                  Config_Symbol = '';
                else
                  Config_Symbol = '-';
              }
              Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
            }

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Config.Rule).mask(that);

            // Define o Atributo x-mode como insertable
            that.setAttribute('x-mode', 'insertable');
          }

          // Atribue o placeholder apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
            Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;
          // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofilldec"
          else
            Placeholder = Config.Rule.prefix + Config_Symbol + '0' + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;

          // Define o Atributo placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '')
            that.setAttribute('placeholder', Placeholder);

          // Atribue o maxlength apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
            Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
          // Define o Atributo maxlength
          else
            Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

          // Define o Atributo maxlength
          if (!that.hasAttribute('maxlength') && that.getAttribute('maxlength') != '')
            that.setAttribute('maxlength', Maxlength);

          // Define o Atributo x-limit
          if (!that.hasAttribute('x-limit') && that.getAttribute('x-limit') != '')
            that.setAttribute('x-limit', that.getAttribute('maxlength'));

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          /*
           * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
           * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
           * https://github.com/google/material-design-lite/issues/243
           * https://codepen.io/surma/pen/JXdEqe
           */
          if(that.classList.contains('mdl-textfield__input')) {
            setTimeout(function(){
              App.EXT.Class.Remove($that.parentElement, 'has-placeholder');
              App.EXT.Class.Add($that.parentElement, 'has-placeholder');
            }, 500);
          }

          // Posiciona o Cursor no Final no Valor
          App.EXT.Caret.toEnd(that);

          if (that.value === '') 
            that.setAttribute('x-value', Placeholder);

          // Reseta a Máscara
          if (that.inputmask)
            that.inputmask.remove();

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
                var sign_value = ($that.hasAttribute('x-signal') && $that.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                if ($that.hasAttribute('x-type') && $that.getAttribute('x-type') == 'zerofilldec') {
                  var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                      zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
                else {
                  var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits),
                      zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
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
          App.EXT.Event.Add(that, [Event.Paste], function(event){
            Action.PasteInput(event)
          }, false);

          /* 
           * Evento Para Inclusão de Números ao Input
           */
          App.EXT.Event.Add(that, [Event.Write], function(event){
            Action.WriteInput(event);
          }, false);

          /* 
           * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
           * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
           */
          App.EXT.Event.Add(that, [Event.Erase], function(event){
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
          App.EXT.Event.Add(that.form, [Event.Submit], function(event){
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
          MaskedInput = Inputmask(Rule).mask(that);

          /* Define o Atributo Placeholder */
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
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
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');
        break;
        case 'cpf_cnpj':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
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
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }, false);
        break;
        case 'hora_minuto':
        case 'hora_minuto_12':
        case 'hora_minuto_24':
          if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '12h') {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_MINUTO_12H_REGEX;
          }
          else if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '24h') {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_MINUTO_24H_REGEX;
          }
          else {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_MINUTO;
          }

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }, false);
        break;
        case 'hora':
        case 'hora_regex':
          if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '12h') {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_12H_REGEX;
          }
          else if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '24h') {
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
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
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
          MaskedInput = Inputmask(Rule.mask).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          // Reseta a Máscara Caso esteja Incompleta
          App.EXT.Event.Add(that, ['blur'], function(event){
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event, true);
            }
          }, false);
        break;
      }

      log('loading', '#' + that.getAttribute('id'));
    }
  };

  //Testo a Versão do IE para Condicionar a Criação do Componente de Forma Legada Utilizando document.registerElement
  if ( ( ua.browser.name == 'IE' && ua.browser.major >= '10') ) {
    var xInput = Object.create(HTMLInputElement.prototype);
    xInput.createdCallback = function() {
      _xInput(this, ua);
    };

    document.registerElement('x-input', { extends: 'input', prototype: xInput });
  }
  else {
    /*
    class xInput extends HTMLInputElement {
      constructor(...args) {
        super(...args);
        _xInput(this, ua);
      }
    };
    */

    // Utilizei o Babel.io para Transpilar a Pequena Classe Acima de es2016 para es2015-loose
    // O Resultado é Todo esse Techo Abaixo:
    "use strict";

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      return self;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
      return _wrapNativeSuper(Class);
    }

    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
      return _setPrototypeOf(o, p);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
      return _getPrototypeOf(o);
    }

    var xInput =
      /*#__PURE__*/
      (function(_HTMLInputElement) {
        _inheritsLoose(xInput, _HTMLInputElement);

        function xInput() {
          var _this;

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this =
            _HTMLInputElement.call.apply(_HTMLInputElement, [this].concat(args)) ||
            this;

          _xInput(_assertThisInitialized(_this), ua);

          return _this;
        }

        return xInput;
      })(_wrapNativeSuper(HTMLInputElement));

    customElements.define("x-input", xInput, { extends: "input" });

  }

})();