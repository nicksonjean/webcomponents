var isIE = document.body.style.msTouchAction !== undefined;

/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com) and contributors,  MIT License
 * es6-shim: v0.35.1
 * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(e){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(e){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Map;var H=G&&G.prototype["delete"];var V=G&&G.prototype.get;var B=G&&G.prototype.has;var U=G&&G.prototype.set;var $=S.Symbol||{};var J=$.species||"@@species";var X=Number.isNaN||function isNaN(e){return e!==e};var K=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Z=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(X(t)){return t}return t<0?-1:1};var Y=function isArguments(e){return g(e)==="[object Arguments]"};var Q=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var ee=Y(arguments)?Y:Q;var te={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var re=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ne=typeof $==="function"&&typeof $["for"]==="function"&&te.symbol($());var oe=te.symbol($.iterator)?$.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){oe="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ie=S.Reflect;var ae=String;var ue=typeof document==="undefined"||!document?null:document.all;var fe=ue==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==ue};var se={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!se.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(fe(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===ue},ToObject:function(e,t){return Object(se.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return se.IsCallable(e)},ToInt32:function(e){return se.ToNumber(e)>>0},ToUint32:function(e){return se.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=se.ToNumber(e);if(X(t)){return 0}if(t===0||!K(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=se.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return se.TypeIsObject(e)&&(typeof e[oe]!=="undefined"||ee(e))},GetIterator:function(e){if(ee(e)){return new q(e,"value")}var t=se.GetMethod(e,oe);if(!se.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=se.Call(t,e);if(!se.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=se.ToObject(e)[t];if(fe(r)){return void 0}if(!se.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=se.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=se.Call(r,e)}catch(e){o=e}if(t){return}if(o){throw o}if(!se.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!se.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=se.IteratorNext(e);var r=se.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ie.construct){return ie.construct(e,t,o)}var i=o.prototype;if(!se.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=se.Call(e,a,t);return se.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!se.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[J];if(fe(n)){return t}if(!se.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=se.ToString(e);var i="<"+t;if(r!==""){var a=se.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!se.TypeIsObject(e)){return false}var t=e[$.match];if(typeof t!=="undefined"){return!!t}return te.regex(e)},ToString:function ToString(e){return ae(e)}};if(s&&ne){var ce=function defineWellKnownSymbol(e){if(te.symbol($[e])){return $[e]}var t=$["for"]("Symbol."+e);Object.defineProperty($,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!te.symbol($.search)){var le=ce("search");var pe=String.prototype.search;h(RegExp.prototype,le,function search(e){return se.Call(pe,e,[this])});var ve=function search(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,le);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(pe,t,[se.ToString(e)])};re(String.prototype,"search",ve)}if(!te.symbol($.replace)){var ye=ce("replace");var he=String.prototype.replace;h(RegExp.prototype,ye,function replace(e,t){return se.Call(he,e,[this,t])});var be=function replace(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ye);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(he,r,[se.ToString(e),t])};re(String.prototype,"replace",be)}if(!te.symbol($.split)){var ge=ce("split");var de=String.prototype.split;h(RegExp.prototype,ge,function split(e,t){return se.Call(de,e,[this,t])});var me=function split(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ge);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(de,r,[se.ToString(e),t])};re(String.prototype,"split",me)}var Oe=te.symbol($.match);var we=Oe&&function(){var e={};e[$.match]=function(){return 42};return"a".match(e)!==42}();if(!Oe||we){var je=ce("match");var Se=String.prototype.match;h(RegExp.prototype,je,function match(e){return se.Call(Se,e,[this])});var Te=function match(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,je);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(Se,t,[se.ToString(e)])};re(String.prototype,"match",Te)}}var Ie=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ee=function(){return this};var Pe=function(e){if(s&&!z(e,J)){m.getter(e,J,Ee)}};var Ce=function(e,t){var r=t||function iterator(){return this};h(e,oe,r);if(!e[oe]&&te.symbol(oe)){e[oe]=r}};var Me=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var xe=function createDataPropertyOrThrow(e,t,r){Me(e,t,r);if(!se.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Ne=function(e,t,r,n){if(!se.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!se.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ae=String.fromCodePoint;re(String,"fromCodePoint",function fromCodePoint(e){return se.Call(Ae,this,arguments)})}var Re={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!se.SameValue(r,se.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=se.ToObject(e,"bad callSite");var r=se.ToObject(t.raw,"bad raw value");var n=r.length;var o=se.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=se.ToString(a);s=se.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=se.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){re(String,"raw",Re.raw)}b(String,Re);var _e=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ke=Infinity;var Fe={repeat:function repeat(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);if(r<0||r>=ke){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return _e(t,r)},startsWith:function startsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=se.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(se.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=se.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:se.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(se.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=se.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){re(String.prototype,"includes",Fe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Le=i(function(){"/a/".startsWith(/a/)});var De=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Le||!De){re(String.prototype,"startsWith",Fe.startsWith);re(String.prototype,"endsWith",Fe.endsWith)}}if(ne){var ze=a(function(){var e=/a/;e[$.match]=false;return"/a/".startsWith(e)});if(!ze){re(String.prototype,"startsWith",Fe.startsWith)}var qe=a(function(){var e=/a/;e[$.match]=false;return"/a/".endsWith(e)});if(!qe){re(String.prototype,"endsWith",Fe.endsWith)}var We=a(function(){var e=/a/;e[$.match]=false;return"/a/".includes(e)});if(!We){re(String.prototype,"includes",Fe.includes)}}b(String.prototype,Fe);var Ge=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var He=new RegExp("(^["+Ge+"]+)|(["+Ge+"]+$)","g");var Ve=function trim(){return se.ToString(se.RequireObjectCoercible(this)).replace(He,"")};var Be=["\x85","\u200b","\ufffe"].join("");var Ue=new RegExp("["+Be+"]","g");var $e=/^[-+]0x[0-9a-f]+$/i;var Je=Be.trim().length!==Be.length;h(String.prototype,"trim",Ve,Je);var Xe=function(e){return{value:e,done:arguments.length===0}};var Ke=function(e){se.RequireObjectCoercible(e);this._s=se.ToString(e);this._i=0};Ke.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Xe()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Xe(e.substr(t,o))};Ce(Ke.prototype);Ce(String.prototype,function(){return new Ke(this)});var Ze={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!se.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(ee(e)||se.GetMethod(e,oe))!=="undefined";var u,f,s;if(a){f=se.IsConstructor(r)?Object(new r):[];var c=se.GetIterator(e);var l,p;s=0;while(true){l=se.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(e){se.IteratorClose(c,true);throw e}s+=1}u=s}else{var v=se.ToObject(e);u=se.ToLength(v.length);f=se.IsConstructor(r)?Object(new r(u)):new Array(u);var y;for(s=0;s<u;++s){y=v[s];if(o){y=typeof i==="undefined"?n(y,s):t(n,i,y,s)}xe(f,s,y)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!se.IsCallable(t)?new Array(e):se.Construct(t,[e]);for(var o=0;o<e;++o){xe(n,o,arguments[o])}n.length=e;return n}};b(Array,Ze);Pe(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=se.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Xe(o)}}this.array=void 0;return Xe()}});Ce(q.prototype);var Ye=Array.of===Ze.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Ye){re(Array,"of",Ze.of)}var Qe={copyWithin:function copyWithin(e,t){var r=se.ToObject(this);var n=se.ToLength(r.length);var o=se.ToInteger(e);var i=se.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:se.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=se.ToObject(this);var o=se.ToLength(n.length);t=se.ToInteger(typeof t==="undefined"?0:t);r=se.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!se.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!se.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[oe]){b(Array.prototype,{values:Array.prototype[oe]});if(te.symbol($.unscopables)){Array.prototype[$.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var et=Array.prototype.values;re(Array.prototype,"values",function values(){return se.Call(et,this,arguments)});h(Array.prototype,oe,Array.prototype.values,true)}b(Array.prototype,Qe);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}Ce(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Ce(Object.getPrototypeOf([].values()))}var tt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var rt=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!tt||!rt){re(Array,"from",Ze.from)}var nt=function(){return a(function(){return Array.from([0],void 0)})}();if(!nt){var ot=Array.from;re(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return se.Call(ot,this,arguments)}else{return t(ot,this,e)}})}var it=-(Math.pow(2,32)-1);var at=function(e,r){var n={length:it};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!at(Array.prototype.forEach)){var ut=Array.prototype.forEach;re(Array.prototype,"forEach",function forEach(e){return se.Call(ut,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.map)){var ft=Array.prototype.map;re(Array.prototype,"map",function map(e){return se.Call(ft,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.filter)){var st=Array.prototype.filter;re(Array.prototype,"filter",function filter(e){return se.Call(st,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.some)){var ct=Array.prototype.some;re(Array.prototype,"some",function some(e){return se.Call(ct,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.every)){var lt=Array.prototype.every;re(Array.prototype,"every",function every(e){return se.Call(lt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduce)){var pt=Array.prototype.reduce;re(Array.prototype,"reduce",function reduce(e){return se.Call(pt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduceRight,true)){var vt=Array.prototype.reduceRight;re(Array.prototype,"reduceRight",function reduceRight(e){return se.Call(vt,this.length>=0?this:[],arguments)},true)}var yt=Number("0o10")!==8;var ht=Number("0b10")!==2;var bt=y(Be,function(e){return Number(e+0+e)===0});if(yt||ht||bt){var gt=Number;var dt=/^0b[01]+$/i;var mt=/^0o[0-7]+$/i;var Ot=dt.test.bind(dt);var wt=mt.test.bind(mt);var jt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(te.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(te.primitive(t)){return t}}throw new TypeError("No default value")};var St=Ue.test.bind(Ue);var Tt=$e.test.bind($e);var It=function(){var e=function Number(t){var r;if(arguments.length>0){r=te.primitive(t)?t:jt(t,"number")}else{r=0}if(typeof r==="string"){r=se.Call(Ve,r);if(Ot(r)){r=parseInt(C(r,2),2)}else if(wt(r)){r=parseInt(C(r,2),8)}else if(St(r)||Tt(r)){r=NaN}}var n=this;var o=a(function(){gt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new gt(r)}return gt(r)};return e}();Ie(gt,It,{});b(It,{NaN:gt.NaN,MAX_VALUE:gt.MAX_VALUE,MIN_VALUE:gt.MIN_VALUE,NEGATIVE_INFINITY:gt.NEGATIVE_INFINITY,POSITIVE_INFINITY:gt.POSITIVE_INFINITY});Number=It;m.redefine(S,"Number",It)}var Et=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Et,MIN_SAFE_INTEGER:-Et,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:K,isInteger:function isInteger(e){return K(e)&&se.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){re(Array.prototype,"find",Qe.find)}if([,1].findIndex(function(){return true})!==0){re(Array.prototype,"findIndex",Qe.findIndex)}var Pt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ct=function ensureEnumerable(e,t){if(s&&Pt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Mt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var xt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Nt=function(e,t){var r=n(Object(t));var o;if(se.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Pt(t))}return p(P(r,o||[]),xt(t),e)};var At={assign:function(e,t){var r=se.ToObject(e,"Cannot convert undefined or null to object");return p(se.Call(Mt,1,arguments),Nt,r)},is:function is(e,t){return se.SameValue(e,t)}};var Rt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Rt){re(Object,"assign",At.assign)}b(Object,At);if(s){var _t={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!se.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||se.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(t){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,_t)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var kt=!i(function(){Object.keys("foo")});if(!kt){var Ft=Object.keys;re(Object,"keys",function keys(e){return Ft(se.ToObject(e))});n=Object.keys}var Lt=i(function(){Object.keys(/a/g)});if(Lt){var Dt=Object.keys;re(Object,"keys",function keys(e){if(te.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Dt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var zt=!i(function(){Object.getOwnPropertyNames("foo")});if(!zt){var qt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Wt=Object.getOwnPropertyNames;re(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=se.ToObject(e);if(g(t)==="[object Window]"){try{return Wt(t)}catch(e){return P([],qt)}}return Wt(t)})}}if(Object.getOwnPropertyDescriptor){var Gt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Gt){var Ht=Object.getOwnPropertyDescriptor;re(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ht(se.ToObject(e),t)})}}if(Object.seal){var Vt=!i(function(){Object.seal("foo")});if(!Vt){var Bt=Object.seal;re(Object,"seal",function seal(e){if(!se.TypeIsObject(e)){return e}return Bt(e)})}}if(Object.isSealed){var Ut=!i(function(){Object.isSealed("foo")});if(!Ut){var $t=Object.isSealed;re(Object,"isSealed",function isSealed(e){if(!se.TypeIsObject(e)){return true}return $t(e)})}}if(Object.freeze){var Jt=!i(function(){Object.freeze("foo")});if(!Jt){var Xt=Object.freeze;re(Object,"freeze",function freeze(e){if(!se.TypeIsObject(e)){return e}return Xt(e)})}}if(Object.isFrozen){var Kt=!i(function(){Object.isFrozen("foo")});if(!Kt){var Zt=Object.isFrozen;re(Object,"isFrozen",function isFrozen(e){if(!se.TypeIsObject(e)){return true}return Zt(e)})}}if(Object.preventExtensions){var Yt=!i(function(){Object.preventExtensions("foo")});if(!Yt){var Qt=Object.preventExtensions;re(Object,"preventExtensions",function preventExtensions(e){if(!se.TypeIsObject(e)){return e}return Qt(e)})}}if(Object.isExtensible){var er=!i(function(){Object.isExtensible("foo")});if(!er){var tr=Object.isExtensible;re(Object,"isExtensible",function isExtensible(e){if(!se.TypeIsObject(e)){return false}return tr(e)})}}if(Object.getPrototypeOf){var rr=!i(function(){Object.getPrototypeOf("foo")});if(!rr){var nr=Object.getPrototypeOf;re(Object,"getPrototypeOf",function getPrototypeOf(e){return nr(se.ToObject(e))})}}var or=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&se.IsCallable(e.get)}();if(s&&!or){var ir=function flags(){if(!se.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ir)}var ar=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var ur=ne&&s&&function(){var e=/./;e[$.match]=false;return RegExp(e)===e}();var fr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var sr=fr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!fr||!sr){var cr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=se.RequireObjectCoercible(this);if(te.regex(e)){return t(cr,e)}var r=ae(e.source);var n=ae(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,cr)}if(s&&(!ar||ur)){var lr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var pr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var vr=function(){return this.source};var yr=se.IsCallable(pr.get)?pr.get:vr;var hr=RegExp;var br=function(){return function RegExp(e,t){var r=se.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(te.regex(e)){o=se.Call(yr,e);i=typeof t==="undefined"?se.Call(lr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new hr(e,t)}}();Ie(hr,br,{$input:true});RegExp=br;m.redefine(S,"RegExp",br)}if(s){var gr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(gr),function(e){if(e in RegExp&&!(gr[e]in RegExp)){m.getter(RegExp,gr[e],function get(){return RegExp[e]})}})}Pe(RegExp);var dr=1/Number.EPSILON;var mr=function roundTiesToEven(e){return e+dr-dr};var Or=Math.pow(2,-23);var wr=Math.pow(2,127)*(2-Or);var jr=Math.pow(2,-126);var Sr=Math.E;var Tr=Math.LOG2E;var Ir=Math.LOG10E;var Er=Number.prototype.clz;delete Number.prototype.clz;var Pr={acosh:function acosh(e){var t=Number(e);if(X(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/Sr+D(t+1)*D(t-1)/Sr)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(X(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=se.ToUint32(t);if(r===0){return 32}return Er?se.Call(Er,r):31-_(L(r+.5)*Tr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(X(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*Tr},log10:function log10(e){return L(e)*Ir},log1p:function log1p(e){var t=Number(e);if(t<-1||X(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:Z,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*Sr/2},tanh:function tanh(e){var t=Number(e);if(X(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=se.ToUint32(e);var n=se.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Z(t);var n=k(t);if(n<jr){return r*mr(n/jr/Or)*jr*Or}var o=(1+Or/Number.EPSILON)*n;var i=o-(o-n);if(i>wr||X(i)){return r*Infinity}return r*i}};b(Math,Pr);h(Math,"log1p",Pr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Pr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",Pr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Pr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",Pr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",Pr.sinh,Math.sinh(-2e-17)!==-2e-17);var Cr=Math.expm1(10);h(Math,"expm1",Pr.expm1,Cr>22025.465794806718||Cr<22025.465794806718);var Mr=Math.round;var xr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Nr=dr+1;var Ar=2*dr-1;var Rr=[Nr,Ar].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!xr||!Rr);m.preserveToString(Math.round,Mr);var _r=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Pr.imul;m.preserveToString(Math.imul,_r)}if(Math.imul.length!==2){re(Math,"imul",function imul(e,t){return se.Call(_r,Math,arguments)})}var kr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}se.IsPromise=function(e){if(!se.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!se.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(se.IsCallable(t.resolve)&&se.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&se.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=se.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(se.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(e){n=e;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!se.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(t){return m(e,t)}if(!se.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(e){i(e)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!se.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Ne(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(e){o(e)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=se.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(t){e.done=true;throw t}o[f]=void 0;var s=t.resolve(u);var c=P(f,o,r,i);i.count+=1;w(s.then,s,c,r.reject);f+=1}if(--i.count===0){var l=r.resolve;l(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=se.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(t){e.done=true;throw t}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},race:function race(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},reject:function reject(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(se.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{catch:function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!se.IsPromise(n)){throw new TypeError("not a promise")}var o=se.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=se.IsCallable(e)?e:a;var d=se.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof kr==="function"){b(S,{Promise:kr});var Fr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Lr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Dr=i(function(){S.Promise.call(3,W)});var zr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(e){return true}return t===r}(S.Promise);var qr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Wr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Wr.prototype=Promise.prototype;Wr.all=Promise.all;var Gr=a(function(){return!!Wr.all([1,2])});if(!Fr||!Lr||!Dr||zr||!qr||Gr){Promise=kr;re(S,"Promise",kr)}if(Promise.all.length!==1){var Hr=Promise.all;re(Promise,"all",function all(e){return se.Call(Hr,this,arguments)})}if(Promise.race.length!==1){var Vr=Promise.race;re(Promise,"race",function race(e){return se.Call(Vr,this,arguments)})}if(Promise.resolve.length!==1){var Br=Promise.resolve;re(Promise,"resolve",function resolve(e){return se.Call(Br,this,arguments)})}if(Promise.reject.length!==1){var Ur=Promise.reject;re(Promise,"reject",function reject(e){return se.Call(Ur,this,arguments)})}Ct(Promise,"all");Ct(Promise,"race");Ct(Promise,"resolve");Ct(Promise,"reject");Pe(Promise)}var $r=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Jr=$r(["z","a","bb"]);var Xr=$r(["z",1,"a","3",2]);if(s){var Kr=function fastkey(e,t){if(!t&&!Jr){return null}if(fe(e)){return"^"+se.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Xr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Zr=function emptyObject(){return Object.create?Object.create(null):{}};var Yr=function addIterableToMap(e,n,o){if(r(o)||te.string(o)){l(o,function(e){if(!se.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!fe(o)){a=n.set;if(!se.IsCallable(a)){throw new TypeError("bad map")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!se.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(e){se.IteratorClose(i,true);throw e}}}}};var Qr=function addIterableToSet(e,n,o){if(r(o)||te.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!fe(o)){a=n.add;if(!se.IsCallable(a)){throw new TypeError("bad set")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(e){se.IteratorClose(i,true);throw e}}}}};var en={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!se.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+se.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Xe()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Xe(n)}}this.i=void 0;return Xe()}};Ce(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Ne(this,Map,a,{_es6map:true,_head:null,_map:G?new G:null,_size:0,_storage:Zr()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Yr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Kr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=V.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Kr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return B.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(se.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Kr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(B.call(this._map,e)){V.call(this._map,e).value=t}else{a=new r(e,t);U.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(se.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},delete:function(t){o(this,"delete");var r=this._head;var n=r;var i=Kr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!B.call(this._map,t)){return false}n=V.call(this._map,t).prev;H.call(this._map,t)}while((n=n.next)!==r){if(se.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=G?new G:null;this._size=0;this._storage=Zr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Ce(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!se.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+se.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Ne(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Zr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){Qr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new en.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Kr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Kr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},delete:function(e){r(this,"delete");var t;if(this._storage&&(t=Kr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Zr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);Ce(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var tn=a(function(){return new Map([[1,2]]).get(1)===2});if(!tn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(G.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var rn=new Map;var nn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var on=rn.set(1,2)===rn;if(!nn||!on){re(Map.prototype,"set",function set(e,r){t(U,this,e===0?0:e,r);return this})}if(!nn){b(Map.prototype,{get:function get(e){return t(V,this,e===0?0:e)},has:function has(e){return t(B,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,V);m.preserveToString(Map.prototype.has,B)}var an=new Set;var un=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(an);var fn=an.add(1)===an;if(!un||!fn){var sn=Set.prototype.add;Set.prototype.add=function add(e){t(sn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,sn)}if(!un){var cn=Set.prototype.has;Set.prototype.has=function has(e){return t(cn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,cn);var ln=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ln,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],ln)}var pn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var vn=Object.setPrototypeOf&&!pn;var yn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||vn||!yn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=G.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var hn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var bn=Object.setPrototypeOf&&!hn;var gn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||bn||!gn){var dn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new dn;if(arguments.length>0){Qr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=dn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,dn)}var mn=new S.Map;var On=!a(function(){return mn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||mn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof mn.keys().next!=="function"||On||!pn){b(S,{Map:en.Map,Set:en.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}Ce(Object.getPrototypeOf((new S.Map).keys()));Ce(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var wn=S.Set.prototype.has;re(S.Set.prototype,"has",function has(e){return t(wn,this,e)})}}b(S,en);Pe(S.Map);Pe(S.Set)}var jn=function throwUnlessTargetIsObject(e){if(!se.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Sn={apply:function apply(){return se.Call(se.Call,null,arguments)},construct:function construct(e,t){if(!se.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!se.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return se.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){jn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){jn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Sn,{ownKeys:function ownKeys(e){jn(e);var t=Object.getOwnPropertyNames(e);if(se.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Tn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Sn,{isExtensible:function isExtensible(e){jn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){jn(e);return Tn(function(){Object.preventExtensions(e)})}})}if(s){var In=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return In(o,t,r)}if("value"in n){return n.value}if(n.get){return se.Call(n.get,r)}return void 0};var En=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return En(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!se.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ie.defineProperty(o,r,{value:n})}else{return ie.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Sn,{defineProperty:function defineProperty(e,t,r){jn(e);return Tn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){jn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){jn(e);var r=arguments.length>2?arguments[2]:e;return In(e,t,r)},set:function set(e,t,r){jn(e);var n=arguments.length>3?arguments[3]:e;return En(e,t,r,n)}})}if(Object.getPrototypeOf){var Pn=Object.getPrototypeOf;Sn.getPrototypeOf=function getPrototypeOf(e){jn(e);return Pn(e)}}if(Object.setPrototypeOf&&Sn.getPrototypeOf){var Cn=function(e,t){var r=t;while(r){if(e===r){return true}r=Sn.getPrototypeOf(r)}return false};Object.assign(Sn,{setPrototypeOf:function setPrototypeOf(e,t){jn(e);if(t!==null&&!se.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ie.getPrototypeOf(e)){return true}if(ie.isExtensible&&!ie.isExtensible(e)){return false}if(Cn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Mn=function(e,t){if(!se.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){re(S.Reflect,e,t)}}};Object.keys(Sn).forEach(function(e){Mn(e,Sn[e])});var xn=S.Reflect.getPrototypeOf;if(c&&xn&&xn.name!=="getPrototypeOf"){re(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(xn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){re(S.Reflect,"setPrototypeOf",Sn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){re(S.Reflect,"defineProperty",Sn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){re(S.Reflect,"construct",Sn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Nn=Date.prototype.toString;var An=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return se.Call(Nn,this)};re(Date.prototype,"toString",An)}var Rn={anchor:function anchor(e){return se.CreateHTML(this,"a","name",e)},big:function big(){return se.CreateHTML(this,"big","","")},blink:function blink(){return se.CreateHTML(this,"blink","","")},bold:function bold(){return se.CreateHTML(this,"b","","")},fixed:function fixed(){return se.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return se.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return se.CreateHTML(this,"font","size",e)},italics:function italics(){return se.CreateHTML(this,"i","","")},link:function link(e){return se.CreateHTML(this,"a","href",e)},small:function small(){return se.CreateHTML(this,"small","","")},strike:function strike(){return se.CreateHTML(this,"strike","","")},sub:function sub(){return se.CreateHTML(this,"sub","","")},sup:function sub(){return se.CreateHTML(this,"sup","","")}};l(Object.keys(Rn),function(e){var r=String.prototype[e];var n=false;if(se.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){re(String.prototype,e,Rn[e])}});var _n=function(){if(!ne){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e($())!=="undefined"){return true}if(e([$()])!=="[null]"){return true}var t={a:$()};t[$()]=true;if(e(t)!=="{}"){return true}return false}();var kn=a(function(){if(!ne){return true}return JSON.stringify(Object($()))==="{}"&&JSON.stringify([Object($())])==="[{}]"});if(_n||!kn){var Fn=JSON.stringify;re(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=se.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(te.symbol(n)){return xt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Fn.apply(this,o)})}return S});

if (isIE) {
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
  * Fetch Polyfill
  * https://github.com/github/fetch
  * https://vanillajstoolkit.com/polyfills/fetch/
  * http://xcx1024.com/ArtInfo/2154736.html
  * (c) GitHub, Inc., MIT License
  */
  var support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(e){return e&&viewClasses.indexOf(Object.prototype.toString.call(e))>-1};function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return support.iterable&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsText(e),r}function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:support.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:support.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():support.arrayBuffer&&support.blob&&isDataView(e)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||isArrayBufferView(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support.blob&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(e){var t=e.toUpperCase();return methods.indexOf(t)>-1?t:e}function Request(e,t){var r=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=normalizeMethod(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(s))}}),t}function parseHeaders(e){var t=new Headers;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var s=r.join(":").trim();t.append(o,s)}}),t}function Response(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===redirectStatuses.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};var DOMException=self.DOMException;try{new DOMException}catch(e){(DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),DOMException.prototype.constructor=DOMException}function fetch(e,t){return new Promise(function(r,o){var s=new Request(e,t);if(s.signal&&s.signal.aborted)return o(new DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function i(){n.abort()}n.onload=function(){var e={status:n.status,statusText:n.statusText,headers:parseHeaders(n.getAllResponseHeaders()||"")};e.url="responseURL"in n?n.responseURL:e.headers.get("X-Request-URL");var t="response"in n?n.response:n.responseText;r(new Response(t,e))},n.onerror=function(){o(new TypeError("Network request failed"))},n.ontimeout=function(){o(new TypeError("Network request failed"))},n.onabort=function(){o(new DOMException("Aborted","AbortError"))},n.open(s.method,s.url,!0),"include"===s.credentials?n.withCredentials=!0:"omit"===s.credentials&&(n.withCredentials=!1),"responseType"in n&&support.blob&&(n.responseType="blob"),s.headers.forEach(function(e,t){n.setRequestHeader(t,e)}),s.signal&&(s.signal.addEventListener("abort",i),n.onreadystatechange=function(){4===n.readyState&&s.signal.removeEventListener("abort",i)}),n.send(void 0===s._bodyInit?null:s._bodyInit)})}fetch.polyfill=!0,self.fetch||(self.fetch=fetch,self.Headers=Headers,self.Request=Request,self.Response=Response);

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 * See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6 - https://github.com/stefanpenner/es6-promise
 * https://www.enjin.com.br/publico/admin/vendors/es6-promise-polyfill/?MD
 */
  !function(t){var n,e=t.Promise,o=e&&"resolve"in e&&"reject"in e&&"all"in e&&"race"in e&&(new e(function(t){n=t}),"function"==typeof n);"undefined"!=typeof exports&&exports?(exports.Promise=o?e:P,exports.Polyfill=P):"function"==typeof define&&define.amd?define(function(){return o?e:P}):o||(t.Promise=P);var r="pending",i="sealed",f="fulfilled",c="rejected",u=function(){};function a(t){return"[object Array]"===Object.prototype.toString.call(t)}var s,h="undefined"!=typeof setImmediate?setImmediate:setTimeout,l=[];function p(){for(var t=0;t<l.length;t++)l[t][0](l[t][1]);l=[],s=!1}function d(t,n){l.push([t,n]),s||(s=!0,h(p,0))}function y(t){var n=t.owner,e=n.state_,o=n.data_,r=t[e],i=t.then;if("function"==typeof r){e=f;try{o=r(o)}catch(t){v(i,t)}}w(i,o)||(e===f&&m(i,o),e===c&&v(i,o))}function w(t,n){var e;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"==typeof n)){var o=n.then;if("function"==typeof o)return o.call(n,function(o){e||(e=!0,n!==o?m(t,o):_(t,o))},function(n){e||(e=!0,v(t,n))}),!0}}catch(n){return e||v(t,n),!0}return!1}function m(t,n){t!==n&&w(t,n)||_(t,n)}function _(t,n){t.state_===r&&(t.state_=i,t.data_=n,d(g,t))}function v(t,n){t.state_===r&&(t.state_=i,t.data_=n,d(j,t))}function b(t){var n=t.then_;t.then_=void 0;for(var e=0;e<n.length;e++)y(n[e])}function g(t){t.state_=f,b(t)}function j(t){t.state_=c,b(t)}function P(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof P==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],function(t,n){function e(t){v(n,t)}try{t(function(t){m(n,t)},e)}catch(t){e(t)}}(t,this)}P.prototype={constructor:P,state_:r,then_:null,data_:void 0,then:function(t,n){var e={owner:this,then:new this.constructor(u),fulfilled:t,rejected:n};return this.state_===f||this.state_===c?d(y,e):this.then_.push(e),e.then},catch:function(t){return this.then(null,t)}},P.all=function(t){if(!a(t))throw new TypeError("You must pass an array to Promise.all().");return new this(function(n,e){var o=[],r=0;function i(t){return r++,function(e){o[t]=e,--r||n(o)}}for(var f,c=0;c<t.length;c++)(f=t[c])&&"function"==typeof f.then?f.then(i(c),e):o[c]=f;r||n(o)})},P.race=function(t){if(!a(t))throw new TypeError("You must pass an array to Promise.race().");return new this(function(n,e){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(n,e):n(o)})},P.resolve=function(t){return t&&"object"==typeof t&&t.constructor===this?t:new this(function(n){n(t)})},P.reject=function(t){return new this(function(n,e){e(t)})}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);

 /*!
  * vkThread - javascript plugin to execute javascript function(s) in a thread.
  * https://github.com/vkiryukhin/vkthread
  * @version: 2.5.0
  * @author: Vadim Kiryukhin ( vkiryukhin @ gmail.com )
  * Copyright (c) 2016 Vadim Kiryukhin
  * Licensed under the MIT License.
  */
  !function(){"use strict";var e=function(e){return JSON.stringify(e,function(e,t){var n;return t instanceof Function||"function"==typeof t?(n=t.toString()).length<8||"function"!==n.substring(0,8)?"_NuFrRa_"+n:n:t instanceof RegExp?"_PxEgEr_"+t:t})},t=new Blob(['!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],u(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,t._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(f){return void i(n.promise,f)}r(n.promise,o)}else(1===e._state?r:i)(n.promise,e._value)})):e._deferreds.push(n)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if(n instanceof t)return e._state=3,e._value=n,void f(e);if("function"==typeof o)return void u(function(e,n){return function(){e.apply(n,arguments)}}(o,n),e)}e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}function i(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){e._handled||t._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,i(n,e))})}catch(o){if(t)return;t=!0,i(n,o)}}var c=setTimeout;t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,t,r)),r},t.prototype["finally"]=e,t.all=function(e){return new t(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(n){n(e)})},t.reject=function(e){return new t(function(n,t){t(e)})},t.race=function(e){return new t(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},t._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},t._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=t});(function(){var JSONfn={parse:function(str,date2obj){var iso8061=date2obj?/^(d{4})-(d{2})-(d{2})T(d{2}):(d{2}):(d{2}(?:.d*)?)Z$/:false;return JSON.parse(str,function(key,value){var prefix,func,fnArgs,fnBody;if(typeof value!=="string")return value;if(value.length<8)return value;prefix=value.substring(0,8);if(iso8061&&value.match(iso8061))return new Date(value);if(prefix==="function")return eval("("+value+")");if(prefix==="_PxEgEr_")return eval(value.slice(8));if(prefix==="_NuFrRa_"){func=value.slice(8).trim().split("=>");fnArgs=func[0].trim();fnBody=func[1].trim();if(fnArgs.indexOf("(")<0)fnArgs="("+fnArgs+")";if(fnBody.indexOf("{")<0)fnBody="{ return "+fnBody+"}";return eval("("+"function"+fnArgs+fnBody+")")}return value})}};onmessage=function(e){var obj=JSONfn.parse(e.data,true),cntx=obj.context||self;if(obj.importFiles)importScripts.apply(null,obj.importFiles);if(typeof obj.fn==="function")if(typeof Promise!=="undefined")Promise.resolve(obj.fn.apply(cntx,obj.args)).then(function(data){postMessage(data)})["catch"](function(reason){postMessage(reason)});else postMessage(obj.fn.apply(cntx,obj.args));else postMessage(self[obj.fn].apply(cntx,obj.args))};function vkhttp(cfg){var body=cfg.body?JSON.stringify(cfg.body):null,contentType=cfg.contentType||"application/json",method=cfg.method?cfg.method.toUpperCase():"GET",xhr=new XMLHttpRequest,ret;xhr.onload=function(){if(xhr.status>=200&&xhr.status<300)ret=xhr.responseText;else ret="Error: "+xhr.status+xhr.statusText};xhr.onerror=function(data){ret=xhr.status+xhr.statusText};xhr.open(method,cfg.url,false);if(method==="POST")xhr.setRequestHeader("Content-Type",contentType);xhr.send(body);return ret};function vkfetch(cfg){var body = cfg.body ? JSON.stringify(cfg.body) : null,method = cfg.method ? cfg.method.toUpperCase() : "GET";return new Promise(function (resolve, reject){var xhr = new XMLHttpRequest();xhr.open(method,cfg.url,false);xhr.onload = function (){if (this.status >= 200 && this.status < 300){resolve(xhr.responseText);}else{reject({status:this.status,statusText:xhr.statusText});}};xhr.onerror = function(){reject({status:this.status,statusText:xhr.statusText});};xhr.send();});};})();'],{type:"application/javascript"});function n(){this.getVersion=function(){return"2.5.0"}}n.prototype.exec=function(n){var r,o=new Worker(window.URL.createObjectURL(t));if(n.cb&&"function"==typeof n.cb)o.onmessage=function(e){n.cb(e.data),o.terminate()},o.onerror=function(e){n.cb(null,e.message),o.terminate()},o.postMessage(e(n));else if("undefined"!=typeof Promise)return r=new Promise(function(e,t){o.onmessage=function(t){e(t.data),o.terminate()},o.onerror=function(e){t(e.message),o.terminate()}}),o.postMessage(e(n)),r},n.prototype.execAll=function(e){for(var t=[],n=0;n<e.length;n++)t.push(this.exec(e[n]));return Promise.all(t).then(function(e){return e})},window.vkthread=new n}();
}

/*!
 * UAParser.js v0.7.17
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.17",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge)\/((\d+)?[\w\.]+)/i],[NAME,VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[VENDOR,"ZTE"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android.+)[;\/].+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/*!
 * Defiant.js v1.3.4 
 * Search JSON structures plus smart templating with XSLT and XPath. 
 * http://defiantjs.com 
 * Copyright (c) 2013-2015, Hakan Bilgin <hbi@longscript.com> 
 * Licensed under the MIT License 
 */ 
if(function(a,b){var c={init:function(){return this},work_handler:function(a){var b=Array.prototype.slice.call(a.data,1),c=a.data[0],d=tree[c].apply(tree,b);postMessage([c,d])},setup:function(b){var d=a.URL||a.webkitURL,e="var tree = {"+this.parse(b).join(",")+"};",f=new Blob([e+'self.addEventListener("message", '+this.work_handler.toString()+", false);"],{type:"text/javascript"}),g=new Worker(d.createObjectURL(f));return g.onmessage=function(a){var b=Array.prototype.slice.call(a.data,1),d=a.data[0];c.observer.emit("x10:"+d,b)},g},call_handler:function(a,b){return function(){var d=Array.prototype.slice.call(arguments,0,-1),e=arguments[arguments.length-1];d.unshift(a),c.observer.on("x10:"+a,function(a){e(a.detail[0])}),b.postMessage(d)}},compile:function(a){var b,c=this.setup("function"==typeof a?{func:a}:a),d={};if("function"==typeof a)return d.func=this.call_handler("func",c),d.func;for(b in a)d[b]=this.call_handler(b,c);return d},parse:function(a,c){var d,e,f,g=[];for(d in a)if(f=a[d],null!==f)if(f!==b){switch(f.constructor){case Date:e="new Date("+f.valueOf()+")";break;case Object:e="{"+this.parse(f).join(",")+"}";break;case Array:e="["+this.parse(f,!0).join(",")+"]";break;case String:e='"'+f.replace(/"/g,'\\"')+'"';break;case RegExp:case Function:e=f.toString();break;default:e=f}g.push(c?e:d+":"+e)}else g.push(d+":undefined");else g.push(d+":null");return g},observer:function(){var a={};return{on:function(b,c){a[b]||(a[b]=[]),a[b].unshift(c)},off:function(b,c){if(a[b]){var d=a[b].indexOf(c);a[b].splice(d,1)}},emit:function(b,c){if(a[b])for(var d={type:b,detail:c,isCanceled:!1,cancelBubble:function(){this.isCanceled=!0}},e=a[b].length;e--;){if(d.isCanceled)return;a[b][e](d)}}}}()};"undefined"==typeof module?a.x10=c.init():module.exports=c.init()}(this),"undefined"==typeof module)var module={exports:void 0};if(module.exports=Defiant=function(){"use strict";var a={is_ie:/(msie|trident)/i.test(navigator.userAgent),is_safari:/safari/i.test(navigator.userAgent),env:"production",xml_decl:'<?xml version="1.0" encoding="utf-8"?>',namespace:'xmlns:d="defiant-namespace"',tabsize:4,render:function(a,b){var c,d,e,f,g=new XSLTProcessor,h=document.createElement("span"),i={match:"/"};switch(typeof a){case"object":this.extend(i,a),i.data||(i.data=b);break;case"string":i.template=a,i.data=b;break;default:throw"error"}if(i.data=JSON.toXML(i.data),c='//xsl:template[@name="'+i.template+'"]',this.xsl_template||this.gatherTemplates(),i.sorter&&(f=this.node.selectSingleNode(this.xsl_template,c+"//xsl:for-each//xsl:sort"),f&&(i.sorter.order&&f.setAttribute("order",i.sorter.order),i.sorter.select&&f.setAttribute("select",i.sorter.select),f.setAttribute("data-type",i.sorter.type||"text"))),e=this.node.selectSingleNode(this.xsl_template,c),e.setAttribute("match",i.match),g.importStylesheet(this.xsl_template),h.appendChild(g.transformToFragment(i.data,document)),e.removeAttribute("match"),this.is_safari){d=h.getElementsByTagName("script");for(var j=0,k=d.length;k>j;j++)d[j].defer=!0}return h.innerHTML},gatherTemplates:function(){for(var a=document.getElementsByTagName("script"),b="",c=0,d=a.length;d>c;c++)"defiant/xsl-template"===a[c].type&&(b+=a[c].innerHTML);this.xsl_template=this.xmlFromString('<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" '+this.namespace+">"+b.replace(/defiant:(\w+)/g,"$1")+"</xsl:stylesheet>")},getSnapshot:function(a,b){return JSON.toXML(a,b||!0)},xmlFromString:function(a){var b,c;return a=a.replace(/>\s{1,}</g,"><"),null===a.trim().match(/<\?xml/)&&(a=this.xml_decl+a),this.is_ie?(c=new ActiveXObject("Msxml2.DOMDocument"),c.loadXML(a),-1===a.indexOf("xsl:stylesheet")&&c.setProperty("SelectionLanguage","XPath")):(b=new DOMParser,c=b.parseFromString(a,"text/xml")),c},extend:function(a,b){for(var c in b)a[c]&&"object"==typeof b[c]?this.extend(a[c],b[c]):a[c]=b[c];return a},node:{}};return a}(this),"undefined"==typeof XSLTProcessor){var XSLTProcessor=function(){};XSLTProcessor.prototype={importStylesheet:function(a){this.xsldoc=a},transformToFragment:function(a){var b=a.transformNode(this.xsldoc),c=document.createElement("span");return c.innerHTML=b,c}}}else if("function"!=typeof XSLTProcessor&&!XSLTProcessor)throw"XSLTProcessor transformNode not implemented";String.prototype.fill||(String.prototype.fill=function(a,b){var c=this;for(b=b||" ";c.length<a;c+=b);return c}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/gm,"")}),String.prototype.xTransform||(String.prototype.xTransform=function(){var a=this;return-1===this.indexOf("translate(")&&(a=this.replace(/contains\(([^,]+),([^\\)]+)\)/g,function(a,b,c){var d="abcdefghijklmnopqrstuvwxyz",e=c.trim().slice(-1);return"contains(translate("+b+", "+e+d.toUpperCase()+e+", "+e+d+e+"),"+c.toLowerCase()+")"})),a.toString()}),"undefined"==typeof JSON&&(window.JSON={parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(a){if(a instanceof Object){var b="";if(a.constructor===Array){for(var c=0;c<a.length;b+=this.stringify(a[c])+",",c++);return"["+b.substr(0,b.length-1)+"]"}if(a.toString!==Object.prototype.toString)return'"'+a.toString().replace(/"/g,"\\$&")+'"';for(var d in a)b+='"'+d.replace(/"/g,"\\$&")+'":'+this.stringify(a[d])+",";return"{"+b.substr(0,b.length-1)+"}"}return"string"==typeof a?'"'+a.replace(/"/g,"\\$&")+'"':String(a)}}),JSON.toXML||(JSON.toXML=function(a,b){"use strict";var c,d,e,f={map:[],rx_validate_name:/^(?!xml)[a-z_][\w\d.:]*$/i,rx_node:/<(.+?)( .*?)>/,rx_constructor:/<(.+?)( d:contr=".*?")>/,rx_namespace:/ xmlns\:d="defiant\-namespace"/,rx_data:/(<.+?>)(.*?)(<\/d:data>)/i,rx_function:/function (\w+)/i,namespace:'xmlns:d="defiant-namespace"',to_xml_str:function(a){return{str:this.hash_to_xml(null,a),map:this.map}},hash_to_xml:function(a,b,c){var d,e,f,g,h,i,j,k,l=b.constructor===Array,m=[],n=[];for(d in b)if(e=b[d],(null===e||void 0===e||"NaN"===e.toString())&&(e=null),g="@"===d.slice(0,1),h=c?a:d,h==+h&&b.constructor!==Object&&(h="d:item"),null===e?(i=null,j=!1):(i=e.constructor,j=i.toString().match(this.rx_function)[1]),g)n.push(h.slice(1)+'="'+this.escape_xml(e)+'"'),"String"!==j&&n.push("d:"+h.slice(1)+'="'+j+'"');else if(null===e)m.push(this.scalar_to_xml(h,e));else switch(i){case Function:throw"JSON data should not contain functions. Please check jour structure.";case Object:m.push(this.hash_to_xml(h,e));break;case Array:if(d===h){if(f=e.constructor===Array)for(k=e.length;k--;)e[k].constructor===Array&&(f=!0),f||e[k].constructor!==Object||(f=!0);m.push(this.scalar_to_xml(h,e,f));break}case String:if("string"==typeof e&&(e=e.toString().replace(/\&/g,"&amp;").replace(/\r|\n/g,"&#13;")),"#text"===h){this.map.push(b),n.push('d:mi="'+this.map.length+'"'),n.push('d:constr="'+j+'"'),m.push(this.escape_xml(e));break}case Number:case Boolean:if("#text"===h&&"String"!==j){this.map.push(b),n.push('d:mi="'+this.map.length+'"'),n.push('d:constr="'+j+'"'),m.push(this.escape_xml(e));break}m.push(this.scalar_to_xml(h,e))}return a||(a="d:data",n.push(this.namespace),l&&n.push('d:constr="Array"')),null===a.match(this.rx_validate_name)&&(n.push('d:name="'+a+'"'),a="d:name"),c?m.join(""):(this.map.push(b),n.push('d:mi="'+this.map.length+'"'),"<"+a+(n.length?" "+n.join(" "):"")+(m.length?">"+m.join("")+"</"+a+">":"/>"))},scalar_to_xml:function(a,b,c){var d,e,f,g="";if(null===a.match(this.rx_validate_name)&&(g+=' d:name="'+a+'"',a="d:name",c=!1),(null===b||"NaN"===b.toString())&&(b=null),null===b)return"<"+a+' d:constr="null"/>';if(1===b.length&&b[0].constructor===Object){d=this.hash_to_xml(!1,b[0]);var h=d.match(this.rx_node),i=d.match(this.rx_constructor);return h=null!==h?h[2].replace(this.rx_namespace,"").replace(/>/,"").replace(/"\/$/,'"'):"",i=null!==i?i[2]:"",d=d.match(this.rx_data),d=null!==d?d[2]:"","<"+a+h+" "+i+' d:type="ArrayItem">'+d+"</"+a+">"}return 0===b.length&&b.constructor===Array?"<"+a+' d:constr="Array"/>':c?this.hash_to_xml(a,b,!0):(e=b.constructor,f=e.toString().match(this.rx_function)[1],d=e===Array?this.hash_to_xml("d:item",b,!0):this.escape_xml(b),g+=' d:constr="'+f+'"',this.map.push(b),g+=' d:mi="'+this.map.length+'"',"#text"===a?this.escape_xml(b):"<"+a+g+">"+d+"</"+a+">")},escape_xml:function(a){return String(a).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&nbsp;/g,"&#160;")}};switch(typeof b){case"function":return e=x10.compile(f),void e.to_xml_str(a,function(c){b({doc:Defiant.xmlFromString(c.str),src:a,map:c.map})});case"boolean":return c=f.to_xml_str.call(f,a),{doc:Defiant.xmlFromString(c.str),src:a,map:c.map};default:return c=f.to_xml_str.call(f,a),d=Defiant.xmlFromString(c.str),this.search.map=c.map,d}}),JSON.search||(JSON.search=function(a,b,c){"use strict";var d,e,f=a.doc&&a.doc.nodeType,g=f?a.doc:JSON.toXML(a),h=f?a.map:this.search.map,i=f?a.src:a,j=Defiant.node[c?"selectSingleNode":"selectNodes"](g,b.xTransform()),k=[];for(c&&(j=[j]),e=j.length;e--;)switch(j[e].nodeType){case 2:case 3:k.unshift(j[e].nodeValue);break;default:d=+j[e].getAttribute("d:mi"),k.unshift(h[d-1])}return"development"===Defiant.env&&(this.trace=JSON.mtrace(i,k,j)),k}),JSON.mtrace||(JSON.mtrace=function(a,b,c){"use strict";for(var d,e,f,g,h,i=window,j=JSON.stringify,k=j(a,null,"	").replace(/\t/g,""),l=[],m=0,n=c.length,o=n?c[m].ownerDocument.documentElement:!1,p=(this.search.map,0);n>m;m++){switch(c[m].nodeType){case 2:e=c[m].ownerElement?c[m].ownerElement.getAttribute("d:"+c[m].nodeName):"String",d='"@'+c[m].nodeName+'": '+i[e](b[m]),f=k.indexOf(d),h=0;break;case 3:e=c[m].parentNode.getAttribute("d:constr"),d=i[e](b[m]),d='"'+c[m].parentNode.nodeName+'": '+("Number"===d?d:'"'+d+'"'),f=k.indexOf(d),h=0;break;default:if(c[m]===o)continue;"String"===c[m].getAttribute("d:constr")||"Number"===c[m].getAttribute("d:constr")?(e=c[m].getAttribute("d:constr"),d=i[e](b[m]),f=k.indexOf(d,p),d='"'+c[m].nodeName+'": '+("Number"===e?d:'"'+d+'"'),h=0,p=f+1):(d=j(b[m],null,"	").replace(/\t/g,""),f=k.indexOf(d),h=d.match(/\n/g).length)}g=k.substring(0,f).match(/\n/g).length+1,l.push([g,h])}return l}),Defiant.node.selectNodes=function(a,b){if(a.evaluate){for(var c=a.createNSResolver(a.documentElement),d=a.evaluate(b,a,c,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),e=[],f=0,g=d.snapshotLength;g>f;f++)e.push(d.snapshotItem(f));return e}return a.selectNodes(b)},Defiant.node.selectSingleNode=function(a,b){if(a.evaluate){var c=this.selectNodes(a,b);return c.length>0?c[0]:null}return a.selectSingleNode(b)},Defiant.node.prettyPrint=function(a){var b,c,d=Defiant,e=d.tabsize,f=d.xml_decl.toLowerCase();d.is_ie?c=a.xml:(b=new XMLSerializer,c=b.serializeToString(a)),"development"!==d.env&&(c=c.replace(/ \w+\:d=".*?"| d\:\w+=".*?"/g,""));for(var g,h,i=c.trim().replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3"),j=i.split("\n"),k=-1,l=0,m=j.length;m>l;l++)(0!==l||j[l].toLowerCase()!==f)&&(g=null!==j[l].match(/<[A-Za-z_\:]+.*?>/g),h=null!==j[l].match(/<\/[\w\:]+>/g),null!==j[l].match(/<.*?\/>/g)&&(g=h=!0),g&&k++,j[l]=String().fill(k,"	")+j[l],g&&h&&k--,!g&&h&&k--);return j.join("\n").replace(/\t/g,String().fill(e," "))},Defiant.node.toJSON=function(a,b){"use strict";var c=function(a){var b,d,e,f,g,h,i,j,k,l,m={},n=window;switch(a.nodeType){case 1:for(g=a.getAttribute("d:constr"),"Array"===g?m=[]:"String"===g&&""===a.textContent&&(m=""),b=a.attributes,j=0,k=b.length;k>j;j++)l=b.item(j),null===l.nodeName.match(/\:d|d\:/g)&&(g=a.getAttribute("d:"+l.nodeName),h=g&&"undefined"!==g?"null"===l.nodeValue?null:n[g]("false"===l.nodeValue?"":l.nodeValue):l.nodeValue,m["@"+l.nodeName]=h);break;case 3:d=a.parentNode.getAttribute("d:type"),h=d?n[d]("false"===a.nodeValue?"":a.nodeValue):a.nodeValue,m=h}if(a.hasChildNodes())for(j=0,k=a.childNodes.length;k>j;j++)if(e=a.childNodes.item(j),f=e.nodeName,b=a.attributes,"d:name"===f&&(f=e.getAttribute("d:name")),"#text"===f)g=a.getAttribute("d:constr"),"undefined"===g&&(g=void 0),i=e.textContent||e.text,h="Boolean"===g&&"false"===i?"":i,g||b.length?g&&1===k?m=n[g](h):a.hasChildNodes()&&b.length<3?m=g?n[g](h):h:m[f]=g?n[g](h):h:m=h;else{if(m[f]){m[f].push?m[f].push(c(e)):m[f]=[m[f],c(e)];continue}switch(g=e.getAttribute("d:constr")){case"null":m.push?m.push(null):m[f]=null;break;case"Array":e.parentNode.firstChild===e&&"Array"===g&&"d:item"!==f?"d:item"===f||"Array"===g?(h=c(e),m[f]=h.length?[h]:h):m[f]=c(e):m.push?m.push(c(e)):m[f]=c(e);break;case"String":case"Number":case"Boolean":i=e.textContent||e.text,h="Boolean"===g&&"false"===i?"":i,m.push?m.push(n[g](h)):m[f]=c(e);break;default:m.push?m.push(c(e)):m[f]=c(e)}}return 1===a.nodeType&&"ArrayItem"===a.getAttribute("d:type")&&(m=[m]),m},d=9===a.nodeType?a.documentElement:a,e=c(d),f=e[d.nodeName];return d===d.ownerDocument.documentElement&&f&&f.constructor===Array&&(e=f),b&&"true"===b.toString()&&(b="	"),b?JSON.stringify(e,null,b):e},"undefined"!=typeof jQuery&&!function(a){"use strict";a.fn.defiant=function(a,b){return this.html(Defiant.render(a,b)),this}}(jQuery);

/*!
 * JSON Selector + Transformer st.js v0.0.5 
 * JSON template engine over JSON. 
 * https://github.com/SelectTransform/st.js, https://selecttransform.github.io/site/, https://jasonelle.com, https://github.com/jasonelle/ja.js
 * Licensed under the MIT License 
 */ 
!function(){var e,t={is_template:function(e){return/\{\{(.+)\}\}/g.test(e)},is_array:function(e){return Array.isArray(e)||!!e&&"object"==typeof e&&"number"==typeof e.length&&(0===e.length||e.length>0&&e.length-1 in e)},resolve:function(e,t,r){return t&&t.length>0?Function("new_val","with(this) {this"+t+"=new_val; return this;}").bind(e)(r):e=r}},r={run:function(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=Object.keys(n)[0],l=o.tokenize(i);if("#if"!==l.name&&"#elseif"!==l.name)return o.run(n[i],t);var s=l.expression,a=o.fillout(t,"{{"+s+"}}");if(a==="{{"+s+"}}")return e;if(a)return o.run(n[i],t)}return null},is:function(e){if(!t.is_array(e))return!1;if(0===e.length)return!1;for(var r=!0,n=0;n<e.length;n++){var i=e[0];if("object"!=typeof i){r=!1;break}if(1!==Object.keys(i).length){r=!1;break}}if(!r)return!1;var l,s=e[0];for(var a in s){if(!(l=o.tokenize(a)))return!1;if(!l.name)return!1;if(!l.expression||0===l.expression.length)return!1;if("#if"!==l.name.toLowerCase())return!1}if(1===e.length)return!0;for(var c=!0,p=1;p<e.length-1;p++){var u=e[p];for(var f in u)if("#elseif"!==(l=o.tokenize(f)).name.toLowerCase()){c=!1;break}}if(!c)return!1;var d=e[e.length-1];for(var $ in d)if(l=o.tokenize($),-1===["#else","#elseif"].indexOf(l.name.toLowerCase()))return!1;return!0}},o={memory:{},transform:function(e,t,r,o){var i,l=null;if(/#include/.test(JSON.stringify(e))&&(l=function(e,t){return/#include/.test(e)||/#include/.test(t)}),r){var s=n.select(e,l,o).transform(t,o).root();i=n.select(t,null,o).inject(r,o).transformWith(s,o).root()}else i=n.select(e,l,o).transform(t,o).root();return o?JSON.stringify(i):i},tokenize:function(e){var t=(e=e.replace(/\{\{(.+)\}\}/g,"$1")).trim().split(" ");if(t.length>0&&"#"===t[0][0])return{name:t.shift(),expression:t.join(" ")};return null},run:function(e,n){var i,l;if("string"==typeof e)if(t.is_template(e)){/\{\{([ ]*#include)[ ]*([^ ]*)\}\}/g.test(e)?(l=o.tokenize(e),i=l.expression?o.fillout(n,"{{"+l.expression+"}}",!0):e):i=o.fillout(n,e)}else i=e;else if(t.is_array(e))if(r.is(e))i=r.run(e,n);else{i=[];for(var s=0;s<e.length;s++){(x=o.run(e[s],n))&&i.push(x)}}else{if("[object Object]"!==Object.prototype.toString.call(e))return e;i={};var a=/\{\{([ ]*#include)[ ]*(.*)\}\}/,c=Object.keys(e).filter(function(e){return a.test(e)});for(var p in c.length>0&&(l=o.tokenize(c[0]),i=l.expression?o.fillout(e[c[0]],"{{"+l.expression+"}}",!0):e[c[0]]),e){if(t.is_template(p))if(l=o.tokenize(p)){if("#include"===l.name);else if("#let"===l.name){if(t.is_array(e[p])&&2==e[p].length){var u=e[p][0],f=e[p][1],d=o.run(u,n);for(var $ in d)o.memory[$]=d[$],n[$]=d[$];i=o.run(f,n)}}else if("#concat"===l.name)t.is_array(e[p])&&(i=[],e[p].forEach(function(e){var t=o.run(e,n);i=i.concat(t)}),/\{\{(.*?)\}\}/.test(JSON.stringify(i))&&(i=e));else if("#merge"===l.name){if(t.is_array(e[p]))if(i={},e[p].forEach(function(e){var t=o.run(e,n);for(var r in t)i[r]=t[r]}),"object"==typeof n)for(var y in delete i.$index,o.memory)delete i[y];else for(var y in delete String.prototype.$index,delete Number.prototype.$index,delete Function.prototype.$index,delete Array.prototype.$index,delete Boolean.prototype.$index,o.memory)delete String.prototype[y],delete Number.prototype[y],delete Function.prototype[y],delete Array.prototype[y],delete Boolean.prototype[y]}else if("#each"===l.name){var m=o.fillout(n,"{{"+l.expression+"}}",!0);if(m&&t.is_array(m)){i=[];for(var v=0;v<m.length;v++){if("object"==typeof m[v])for(var y in m[v].$index=v,o.memory)m[v][y]=o.memory[y];else for(var y in String.prototype.$index=v,Number.prototype.$index=v,Function.prototype.$index=v,Array.prototype.$index=v,Boolean.prototype.$index=v,o.memory)String.prototype[y]=o.memory[y],Number.prototype[y]=o.memory[y],Function.prototype[y]=o.memory[y],Array.prototype[y]=o.memory[y],Boolean.prototype[y]=o.memory[y];var g=o.run(e[p],m[v]);if("object"==typeof m[v])for(var y in delete m[v].$index,o.memory)delete m[v][y];else for(var y in delete String.prototype.$index,delete Number.prototype.$index,delete Function.prototype.$index,delete Array.prototype.$index,delete Boolean.prototype.$index,o.memory)delete String.prototype[y],delete Number.prototype[y],delete Function.prototype[y],delete Array.prototype[y],delete Boolean.prototype[y];g&&i.push(g)}}else i=e}}else{var h=o.fillout(n,p),_=o.fillout(n,e[p]);void 0!==h&&void 0!==_&&(i[h]=_)}else if("string"==typeof e[p])if((l=o.tokenize(e[p]))&&"#?"===l.name){var b=o.fillout(n,"{{"+l.expression+"}}");b!=="{{"+l.expression+"}}"&&b&&(i[p]=b)}else{var x;void 0!==(x=o.run(e[p],n))&&(i[p]=x)}else void 0!==(x=o.run(e[p],n))&&(i[p]=x)}}return i},fillout:function(e,r,n){var i=r;if(t.is_template(r)){var l=r.match(/\{\{(.*?)\}\}/g);if(!l)return i;if(n)i=o._fillout({variable:l[0],data:e,template:null});else for(var s=0;s<l.length;s++){var a=l[s];i=o._fillout({variable:a,data:e,template:i})}}return i},_fillout:function(t){var r=/^\{\{((?!\}\}).)*\}\}$/,o=t.variable,n=t.data,i=t.template;try{var l=o.replace(/\{\{(.*?)\}\}/g,"$1");if(n){["number","string","array","boolean","function"].indexOf(-1===typeof n)&&(n.$root=e);var s=/function\([ ]*\)[ ]*\{(.*)\}[ ]*$/g.exec(l),a=(s?Function("with(this) {"+s[1]+"}").bind(n):/\breturn [^;]+;?[ ]*$/.test(l)&&/return[^}]*$/.test(l)?Function("with(this) {"+l+"}").bind(n):Function("with(this) {return ("+l+")}").bind(n))();return delete n.$root,a&&(a=a.valueOf()),void 0===a?i:a?i?r.test(i)?a:i.replace(o,a):a:i?r.test(i)?a:i.replace(o,""):""}return i}catch(e){return i}}},n={$val:null,$selected:[],$injected:[],$progress:null,exec:function(e,r,o){if("string"==typeof e);else if(t.is_array(e))for(var i=0;i<e.length;i++)n.exec(e[i],r+"["+i+"]",o);else for(var l in e)if("$root"!==l){if(o(l,e[l])){var s=n.$selected.length;n.$selected.push({index:s,key:l,path:r,object:e,value:e[l]})}n.exec(e[l],r+'["'+l+'"]',o)}},inject:function(e,t){n.$injected=e;try{t&&(n.$injected=JSON.parse(e))}catch(e){}return Object.keys(n.$injected).length>0&&n.select(n.$injected),n},select:function(e,r,o){var i=e;try{o&&(i=JSON.parse(e))}catch(e){}return r?(n.$selected=[],n.exec(i,"",r)):n.$selected=null,i&&(t.is_array(i)||"object"==typeof i)?(n.$progress||(t.is_array(i)?(n.$val=[],n.$selected_root=[]):(n.$val={},n.$selected_root={})),Object.keys(i).forEach(function(e){n.$val[e]=i[e],n.$selected_root[e]=i[e]})):(n.$val=i,n.$selected_root=i),n.$progress=!0,n},transformWith:function(r,i){n.$parsed=[],n.$progress=null;var l=r;try{i&&(l=JSON.parse(r))}catch(e){}if(n.$template_root=l,String.prototype.$root=n.$selected_root,Number.prototype.$root=n.$selected_root,Function.prototype.$root=n.$selected_root,Array.prototype.$root=n.$selected_root,Boolean.prototype.$root=n.$selected_root,e=n.$selected_root,n.$selected&&n.$selected.length>0)n.$selected.sort(function(e,t){return t.path.length-e.path.length}).forEach(function(e){var r=o.run(l,e.object);n.$selected_root=t.resolve(n.$selected_root,e.path,r),e.object=r}),n.$selected.sort(function(e,t){return e.index-t.index});else{var s=o.run(l,n.$selected_root);n.$selected_root=t.resolve(n.$selected_root,"",s)}return delete String.prototype.$root,delete Number.prototype.$root,delete Function.prototype.$root,delete Array.prototype.$root,delete Boolean.prototype.$root,n},transform:function(r,i){n.$parsed=[],n.$progress=null;var l=r;try{i&&(l=JSON.parse(r))}catch(e){}if(n.$template_root=n.$selected_root,String.prototype.$root=l,Number.prototype.$root=l,Function.prototype.$root=l,Array.prototype.$root=l,Boolean.prototype.$root=l,e=l,n.$selected&&n.$selected.length>0)n.$selected.sort(function(e,t){return t.path.length-e.path.length}).forEach(function(e){var r=o.run(e.object,l);n.$template_root=t.resolve(n.$template_root,e.path,r),n.$selected_root=n.$template_root,e.object=r}),n.$selected.sort(function(e,t){return e.index-t.index});else{var s=o.run(n.$selected_root,l);n.$template_root=t.resolve(n.$template_root,"",s),n.$selected_root=n.$template_root}return delete String.prototype.$root,delete Number.prototype.$root,delete Function.prototype.$root,delete Array.prototype.$root,delete Boolean.prototype.$root,n},objects:function(){return n.$progress=null,n.$selected?n.$selected.map(function(e){return e.object}):[n.$selected_root]},keys:function(){return n.$progress=null,n.$selected?n.$selected.map(function(e){return e.key}):Array.isArray(n.$selected_root)?Object.keys(n.$selected_root).map(function(e){return parseInt(e)}):Object.keys(n.$selected_root)},paths:function(){return n.$progress=null,n.$selected?n.$selected.map(function(e){return e.path}):Array.isArray(n.$selected_root)?Object.keys(n.$selected_root).map(function(e){return"["+e+"]"}):Object.keys(n.$selected_root).map(function(e){return'["'+e+'"]'})},values:function(){return n.$progress=null,n.$selected?n.$selected.map(function(e){return e.value}):Object.values(n.$selected_root)},root:function(){return n.$progress=null,n.$selected_root}},i=JSON.stringify;if(JSON.stringify=function(e,t,r){return-1!==["number","string","boolean"].indexOf(typeof e)?i(e,t,r):i(e,t||function(e,t){if(!(n.$injected&&n.$injected.length>0&&-1!==n.$injected.indexOf(e)||"$root"===e||"$index"===e||e in o.memory))return"function"==typeof t?"("+t.toString()+")":t},r)},"undefined"!=typeof exports){var l={TRANSFORM:o,transform:o,SELECT:n,Conditional:r,Helper:t,inject:n.inject,select:n.select,transform:o.transform};"undefined"!=typeof module&&module.exports&&(exports=module.exports=l),exports=l}else this.ST={select:n.select,inject:n.inject,transform:o.transform}}();

/*!
 * Move an async function into its own thread. 
 * https://npm.im/greenlet, https://github.com/developit/greenlet
 * Licensed under the MIT License 
 */ 
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.greenlet=n()}(this,function(){return function(e){var n=new Worker(URL.createObjectURL(new Blob(["onmessage=("+function(e){return function(n){var t=n.data;return Promise.resolve().then(function(){return e.apply(e,t[1])}).then(function(e){postMessage([t[0],null,e])},function(e){postMessage([t[0],""+e])})}}+")("+e+")"]))),t=0,o={};return n.onmessage=function(e){var n=e.data,t=n[0],r=n[1];o[t][r?1:0](r||n[2]),delete o[t]},function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return new Promise(function(r,u){o[++t]=[r,u],n.postMessage([t,e])})}}});

/*!
 * Streaming JSON loading for Node and browsers
 * http://oboejs.com/
 * Licensed under the MIT License 
 */ 
!function(n,t,e,r,i,u){var o=l(function(n,t){var e=t.length;return l(function(r){for(var i=0;i<r.length;i++)t[e+i]=r[i];return t.length=e+r.length,n.apply(this,t)})});l(function(n){var t=C(n);function e(n,t){return[s(n,t)]}return l(function(n){return T(e,n,t)[0]})});function f(n,t){return function(){return n.call(this,t.apply(this,arguments))}}function c(n){return function(t){return t[n]}}var a=l(function(n){return l(function(t){for(var e,r=0;r<m(n);r++)if(e=s(t,n[r]))return e})});function s(n,t){return t.apply(u,n)}function l(n){var t=n.length-1,r=e.prototype.slice;if(0==t)return function(){return n.call(this,r.call(arguments))};if(1==t)return function(){return n.call(this,arguments[0],r.call(arguments,1))};var i=e(n.length);return function(){for(var e=0;e<t;e++)i[e]=arguments[e];return i[t]=r.call(arguments,t),n.apply(this,i)}}function d(n,t){return function(e){return n(e)&&t(e)}}function h(){}function p(){return!0}function v(n,t){return t&&t.constructor===n}var m=c("length"),g=o(v,String);function b(n){return n!==u}function w(n,e){return e instanceof t&&function n(t,e){return!e||t(I(e))&&n(t,L(e))}(function(n){return n in e},n)}function y(n,t){return[n,t]}var x=null,I=c(0),L=c(1);function C(n){return M(n.reduce((t=y,function(n,e){return t(e,n)}),x));var t}var k=l(C);function O(n){return T(function(n,t){return n.unshift(t),n},[],n)}function E(n,t){return t?y(n(I(t)),E(n,L(t))):x}function T(n,t,e){return e?n(T(n,t,L(e)),I(e)):t}function j(n,t,e){return function n(e,r){return e?t(I(e))?(r(I(e)),L(e)):y(I(e),n(L(e),r)):x}(n,e||h)}function M(n){return function n(t,e){return t?n(L(t),y(I(t),e)):e}(n,x)}function R(n){"use strict";var t,e,i,o=n(sn).emit,f=n(ln).emit,c=n(dn).emit,a=n(en).emit,s=65536,l=/[\\"\n]/g,d=0,h=d++,p=d++,v=d++,m=d++,g=d++,b=d++,w=d++,y=d++,x=d++,I=d++,L=d++,C=d++,k=d++,O=d++,E=d++,T=d++,j=d++,M=d++,R=d++,A=d++,q=20,H=s,S=u,B="",N=!1,X=!1,U=h,W=[],$=null,_=0,z=0,D=0,F=0,G=1;function J(n){S!==u&&(f(S),c(),S=u),t=r(n+"\nLn: "+G+"\nCol: "+F+"\nChr: "+e),a(hn(u,u,t))}function K(n){return"\r"==n||"\n"==n||" "==n||"\t"==n}n(fn).on(function(n){if(t)return;if(X)return J("Cannot write after close");var r=0;e=n[0];for(;e&&(r>0&&(i=e),e=n[r++]);)switch(D++,"\n"==e?(G++,F=0):F++,U){case h:if("{"===e)U=v;else if("["===e)U=g;else if(!K(e))return J("Non-whitespace before {[.");continue;case y:case v:if(K(e))continue;if(U===y)W.push(x);else{if("}"===e){f({}),c(),U=W.pop()||p;continue}W.push(m)}if('"'!==e)return J('Malformed object key should start with " ');U=w;continue;case x:case m:if(K(e))continue;if(":"===e)U===m?(W.push(m),S!==u&&(f({}),o(S),S=u),z++):S!==u&&(o(S),S=u),U=p;else if("}"===e)S!==u&&(f(S),c(),S=u),c(),z--,U=W.pop()||p;else{if(","!==e)return J("Bad object");U===m&&W.push(m),S!==u&&(f(S),c(),S=u),U=y}continue;case g:case p:if(K(e))continue;if(U===g){if(f([]),z++,U=p,"]"===e){c(),z--,U=W.pop()||p;continue}W.push(b)}if('"'===e)U=w;else if("{"===e)U=v;else if("["===e)U=g;else if("t"===e)U=I;else if("f"===e)U=k;else if("n"===e)U=j;else if("-"===e)B+=e;else if("0"===e)B+=e,U=q;else{if(-1==="123456789".indexOf(e))return J("Bad value");B+=e,U=q}continue;case b:if(","===e)W.push(b),S!==u&&(f(S),c(),S=u),U=p;else{if("]"!==e){if(K(e))continue;return J("Bad array")}S!==u&&(f(S),c(),S=u),c(),z--,U=W.pop()||p}continue;case w:S===u&&(S="");var a=r-1;n:for(;;){for(;_>0;)if($+=e,e=n.charAt(r++),4===_?(S+=String.fromCharCode(parseInt($,16)),_=0,a=r-1):_++,!e)break n;if('"'===e&&!N){U=W.pop()||p,S+=n.substring(a,r-1);break}if(!("\\"!==e||N||(N=!0,S+=n.substring(a,r-1),e=n.charAt(r++))))break;if(N){if(N=!1,"n"===e?S+="\n":"r"===e?S+="\r":"t"===e?S+="\t":"f"===e?S+="\f":"b"===e?S+="\b":"u"===e?(_=1,$=""):S+=e,e=n.charAt(r++),a=r-1,e)continue;break}l.lastIndex=r;var d=l.exec(n);if(!d){r=n.length+1,S+=n.substring(a,r-1);break}if(r=d.index+1,!(e=n.charAt(d.index))){S+=n.substring(a,r-1);break}}continue;case I:if(!e)continue;if("r"!==e)return J("Invalid true started with t"+e);U=L;continue;case L:if(!e)continue;if("u"!==e)return J("Invalid true started with tr"+e);U=C;continue;case C:if(!e)continue;if("e"!==e)return J("Invalid true started with tru"+e);f(!0),c(),U=W.pop()||p;continue;case k:if(!e)continue;if("a"!==e)return J("Invalid false started with f"+e);U=O;continue;case O:if(!e)continue;if("l"!==e)return J("Invalid false started with fa"+e);U=E;continue;case E:if(!e)continue;if("s"!==e)return J("Invalid false started with fal"+e);U=T;continue;case T:if(!e)continue;if("e"!==e)return J("Invalid false started with fals"+e);f(!1),c(),U=W.pop()||p;continue;case j:if(!e)continue;if("u"!==e)return J("Invalid null started with n"+e);U=M;continue;case M:if(!e)continue;if("l"!==e)return J("Invalid null started with nu"+e);U=R;continue;case R:if(!e)continue;if("l"!==e)return J("Invalid null started with nul"+e);f(null),c(),U=W.pop()||p;continue;case A:if("."!==e)return J("Leading zero not followed by .");B+=e,U=q;continue;case q:if(-1!=="0123456789".indexOf(e))B+=e;else if("."===e){if(-1!==B.indexOf("."))return J("Invalid number has two dots");B+=e}else if("e"===e||"E"===e){if(-1!==B.indexOf("e")||-1!==B.indexOf("E"))return J("Invalid number has two exponential");B+=e}else if("+"===e||"-"===e){if("e"!==i&&"E"!==i)return J("Invalid symbol in number");B+=e}else B&&(f(parseFloat(B)),c(),B=""),r--,U=W.pop()||p;continue;default:return J("Unknown state: "+U)}D>=H&&(P=0,S!==u&&S.length>s&&(J("Max buffer length exceeded: textNode"),P=Math.max(P,S.length)),B.length>s&&(J("Max buffer length exceeded: numberNode"),P=Math.max(P,B.length)),H=s-P+D);var P}),n(cn).on(function(){if(U==h)return f({}),c(),void(X=!0);U===p&&0===z||J("Unexpected end");S!==u&&(f(S),c(),S=u);X=!0})}var A,q,H,S,B,N,X,U,W,$,_,z=(A=l(function(n){return n.unshift(/^/),(t=RegExp(n.map(c("source")).join(""))).exec.bind(t);var t}),S=A(q=/(\$?)/,/([\w-_]+|\*)/,H=/(?:{([\w ]*?)})?/),B=A(q,/\["([^"]+)"\]/,H),N=A(q,/\[(\d+|\*)\]/,H),X=A(q,/()/,/{([\w ]*?)}/),U=A(/\.\./),W=A(/\./),$=A(q,/!/),_=A(/$/),function(n){return n(a(S,B,N,X),U,W,$,_)});function D(n,t){return{key:n,node:t}}var F=c("key"),G=c("node"),J={};function K(n){var t=n(Y).emit,r=n(Z).emit,i=n(un).emit,u=n(rn).emit;function o(n,t,e){G(I(n))[t]=e}function f(n,e,r){n&&o(n,e,r);var i=y(D(e,r),n);return t(i),i}var c={};return c[ln]=function(n,t){if(!n)return i(t),f(n,J,t);var r=function(n,t){var r=G(I(n));return v(e,r)?f(n,m(r),t):n}(n,t),u=L(r),c=F(I(r));return o(u,c,t),y(D(c,t),u)},c[dn]=function(n){return r(n),L(n)||u(G(I(n)))},c[sn]=f,c}var P=z(function(n,t,e,i,u){var c=1,s=2,l=3,h=f(F,I),v=f(G,I);function g(n,t){return!!t[c]?d(n,I):n}function b(n){if(n==p)return p;return d(function(n){return h(n)!=J},f(n,L))}function y(){return function(n){return h(n)==J}}function x(n,t,e,r,i){var u=n(e);if(u){var o=function(n,t,e){return T(function(n,t){return t(n,e)},t,n)}(t,r,u);return i(e.substr(m(u[0])),o)}}function O(n,t){return o(x,n,t)}var E=a(O(n,k(g,function(n,t){var e=t[l];return e?d(f(o(w,C(e.split(/\W+/))),v),n):n},function(n,t){var e=t[s];return d(e&&"*"!=e?function(n){return h(n)==e}:p,n)},b)),O(t,k(function(n){if(n==p)return p;var t=y(),e=n,r=b(function(n){return i(n)}),i=a(t,e,r);return i})),O(e,k()),O(i,k(g,y)),O(u,k(function(n){return function(t){var e=n(t);return!0===e?I(t):e}})),function(n){throw r('"'+n+'" could not be tokenised')});function j(n,t){return t}function M(n,t){return E(n,t,n?M:j)}return function(n){try{return M(n,p)}catch(t){throw r('Could not compile "'+n+'" because '+t.message)}}});function Q(n,t,e){var r,i;function u(n){return function(t){return t.id==n}}return{on:function(e,u){var o={listener:e,id:u||e};return t&&t.emit(n,e,o.id),r=y(o,r),i=y(e,i),this},emit:function(){!function n(t,e){t&&(I(t).apply(null,e),n(L(t),e))}(i,arguments)},un:function(t){var o;r=j(r,u(t),function(n){o=n}),o&&(i=j(i,function(n){return n==o.listener}),e&&e.emit(n,o.listener,o.id))},listeners:function(){return i},hasListener:function(n){return b(function n(t,e){return e&&(t(I(e))?I(e):n(t,L(e)))}(n?u(n):p,r))}}}var V=1,Y=V++,Z=V++,nn=V++,tn=V++,en="fail",rn=V++,un=V++,on="start",fn="data",cn="end",an=V++,sn=V++,ln=V++,dn=V++;function hn(n,t,e){try{var r=i.parse(t)}catch(n){}return{statusCode:n,body:t,jsonBody:r,thrown:e}}function pn(n,t){var e={node:n(Z),path:n(Y)};function r(t,e,r){var i=n(t).emit;e.on(function(n){var t=r(n);!1!==t&&function(n,t,e){var r=M(e);n(t,O(L(E(F,r))),O(E(G,r)))}(i,G(t),n)},t),n("removeListener").on(function(r){r==t&&(n(r).listeners()||e.un(t))})}n("newListener").on(function(n){var i=/(node|path):(.*)/.exec(n);if(i){var u=e[i[1]];u.hasListener(n)||r(n,u,t(i[2]))}})}function vn(n,t){var e,i=/^(node|path):./,u=n(rn),f=n(tn).emit,c=n(nn).emit,a=l(function(t,r){if(e[t])s(r,e[t]);else{var u=n(t),o=r[0];i.test(t)?d(u,o):u.on(o)}return e});function d(n,t,r){r=r||t;var i=p(t);return n.on(function(){var t=!1;e.forget=function(){t=!0},s(arguments,i),delete e.forget,t&&n.un(r)},r),e}function p(n){return function(){try{return n.apply(e,arguments)}catch(n){setTimeout(function(){throw new r(n.message)})}}}function v(t,e,r){var i;i="node"==t?function(n){return function(){var t=n.apply(this,arguments);b(t)&&(t==bn.drop?f():c(t))}}(r):r,d(function(t,e){return n(t+":"+e)}(t,e),i,r)}function m(n,t,r){return g(t)?v(n,t,r):function(n,t){for(var e in t)v(n,e,t[e])}(n,t),e}return n(un).on(function(n){var t;e.root=(t=n,function(){return t})}),n(on).on(function(n,t){e.header=function(n){return n?t[n]:t}}),e={on:a,addListener:a,removeListener:function(t,r,i){if("done"==t)u.un(r);else if("node"==t||"path"==t)n.un(t+":"+r,i);else{var o=r;n(t).un(o)}return e},emit:n.emit,node:o(m,"node"),path:o(m,"path"),done:o(d,u),start:o(function(t,r){return n(t).on(p(r),r),e},on),fail:n(en).on,abort:n(an).emit,header:h,root:h,source:t}}function mn(t,e,r,i,f){var c=function(){var n={},t=r("newListener"),e=r("removeListener");function r(r){return n[r]=Q(r,t,e)}function i(t){return n[t]||r(t)}return["emit","on","un"].forEach(function(n){i[n]=l(function(t,e){s(e,i(t)[n])})}),i}();return e&&function(t,e,r,i,f,c,a){"use strict";var s=t(fn).emit,l=t(en).emit,d=0,h=!0;function p(){var n=e.responseText,t=n.substr(d);t&&s(t),d=m(n)}t(an).on(function(){e.onreadystatechange=null,e.abort()}),"onprogress"in e&&(e.onprogress=p),e.onreadystatechange=function(){function n(){try{h&&t(on).emit(e.status,(n=e.getAllResponseHeaders(),r={},n&&n.split("\r\n").forEach(function(n){var t=n.indexOf(": ");r[n.substring(0,t)]=n.substring(t+2)}),r)),h=!1}catch(n){}var n,r}switch(e.readyState){case 2:case 3:return n();case 4:n(),2==String(e.status)[0]?(p(),t(cn).emit()):l(hn(e.status,e.responseText))}};try{for(var v in e.open(r,i,!0),c)e.setRequestHeader(v,c[v]);(function(n,t){function e(t){return t.port||{"http:":80,"https:":443}[t.protocol||n.protocol]}return!!(t.protocol&&t.protocol!=n.protocol||t.host&&t.host!=n.host||t.host&&e(t)!=e(n))})(n.location,function(n){var t=/(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(n)||[];return{protocol:t[1]||"",host:t[2]||"",port:t[3]||""}}(i))||e.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.withCredentials=a,e.send(f)}catch(t){n.setTimeout(o(l,hn(u,u,t)),0)}}(c,new XMLHttpRequest,t,e,r,i,f),R(c),function(n,t){"use strict";var e,r={};function i(n){return function(t){e=n(e,t)}}for(var u in t)n(u).on(i(t[u]),r);n(nn).on(function(n){var t=I(e),r=F(t),i=L(e);i&&(G(I(i))[r]=n)}),n(tn).on(function(){var n=I(e),t=F(n),r=L(e);r&&delete G(I(r))[t]}),n(an).on(function(){for(var e in t)n(e).un(r)})}(c,K(c)),pn(c,P),vn(c,e)}function gn(n,t,e,r,u,o,f){return u=u?i.parse(i.stringify(u)):{},r?(g(r)||(r=i.stringify(r),u["Content-Type"]=u["Content-Type"]||"application/json"),u["Content-Length"]=u["Content-Length"]||r.length):r=null,n(e||"GET",function(n,t){return!1===t&&(-1==n.indexOf("?")?n+="?":n+="&",n+="_="+(new Date).getTime()),n}(t,f),r,u,o||!1)}function bn(n){var t=k("resume","pause","pipe"),e=o(w,t);return n?e(n)||g(n)?gn(mn,n):gn(mn,n.url,n.method,n.body,n.headers,n.withCredentials,n.cached):mn()}bn.drop=function(){return bn.drop},"function"==typeof define&&define.amd?define("oboe",[],function(){return bn}):"object"==typeof exports?module.exports=bn:n.oboe=bn}(function(){try{return window}catch(n){return self}}(),Object,Array,Error,JSON);

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
 * JavaScript version of PHP __FILE__ or __DIR__
 * https://www.nutt.net/javascript-version-of-php-__file__-or-__dir__/
 * https://stackoverflow.com/questions/8523200/javascript-get-current-filescript-path
 * https://stackoverflow.com/questions/1203933/is-there-any-analogue-in-javascript-to-the-file-variable-in-php
 * Copyright (c) 2009 Ryan Nutt
 */
(function(){
  var _script = document.getElementsByTagName('script')
      _element = _script[_script.length - 1];
  Object.defineProperties(window, {
    '__FILE__': {
      get: function(){
        return _element.src;
      }
    },
    '__DIR__': {
      get: function(){
        var _path = _element.src;
        return _path.substr(0, _path.lastIndexOf( '/' )+1);
      }
    }
  });
})();

/*!
 * X Select - Componente Web
 * É um Componente para Criação de Campos de Formulário Inteligentes
 * permtindo alimentar as Opções destes, diretamente de Objetos JSON
 * carregados diretamente ou por meio de stream de alta resposta.
 * Compatível com:
 *  Vanilla Select agnóstico à Framework;
 *  Chosen https://harvesthq.github.io/chosen/
 *  Select2 https://github.com/select2/select2/
 *  Bootstrap-Select https://developer.snapappointments.com/bootstrap-select/
 * @element select
 * @property is="x-select"
 * @demo https://github.com/nicksonjean/webcomponents/tree/master/x-select
 * @author Nickson Jeanmerson
 */
var App = App || {}, Pattern = Pattern || [], loadJSON, ua = new UAParser().getResult();
App = 
{
  "EXT": {
    "CSS" : "\nselect[is='x-select'] option, select[is='x-select'].custom-select{ color: #337ab7 !important; }\n  ",
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
      "Cache": function(_self, uid, type, debug) {
        if(!document.querySelector('div[data-id="'+uid+'"]')) {
          var elem = document.createElement('div');
          elem.style.cssText = 'display:none;';
          elem.setAttribute('data-url', _self.getAttribute('x-source'));
          elem.setAttribute('data-id', uid);
          document.body.appendChild(elem);
          loadJSON(_self.getAttribute('x-source')).then(function(response) {
            if(debug !== undefined && debug == 'true')
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

var isEdge = /(edge)\/((\d+)?[\w\.]+)/i.exec(navigator.userAgent);

var __ROOT__       = App.EXT.URL.Domain(document.URL),
    __TMP_FORMAT__ = App.EXT.URL.Parse(__FILE__).queryString.format || 'stream',
    __TMP_CACHE__  = App.EXT.URL.Parse(__FILE__).queryString.cache || 'false',
    __FORMAT__     = (__TMP_FORMAT__ || 'stream') && ((isIE || isEdge) ? 'stream' : __TMP_FORMAT__),
    __CACHE__      = (__TMP_CACHE__ || 'false') && ((isIE || isEdge) ? 'false' : __TMP_CACHE__),
    __MODE__       = App.EXT.URL.Parse(__FILE__).queryString.mode   || 'fetch',
    __DEBUG__      = App.EXT.URL.Parse(__FILE__).queryString.debug  || 'false',
    __STYLE__      = App.EXT.URL.Parse(__FILE__).queryString.style  || 'true';

try {
  document.getElementById('_format').innerHTML = (isIE || isEdge) ? ( (__TMP_FORMAT__ == 'worker') ? '<s>' + __TMP_FORMAT__ + '</s>' + '/' +  '<b>stream*</b>' : __TMP_FORMAT__ ) : __FORMAT__;
  document.getElementById('_cache').innerHTML = (isIE || isEdge) ? ( (__TMP_CACHE__ == 'true') ? '<s>' + __TMP_CACHE__ + '</s>' + '/' +  '<b>false*</b>' : __TMP_CACHE__ ) : __CACHE__;
  document.getElementById('_debug').innerHTML = __DEBUG__;
  document.getElementById('_mode').innerHTML = __MODE__;
  document.getElementById('_style').innerHTML = __STYLE__;
}
catch (e) {}

var log = function(flag, value) {
  if(__DEBUG__ !== undefined && __DEBUG__ == 'true') {
    console.log(flag + ': ' + value);
  }
}

var table = function(_array) {
  if(__DEBUG__ !== undefined && __DEBUG__ == 'true') {
    function _debug(mode, format, cache, style) {
      this.mode = mode;
      this.format = format;
      this.cache = cache;
      this.style = style;
    }

    var _log = {};
    _log.command = new _debug(__MODE__, __FORMAT__, __CACHE__, __STYLE__);

    console.table(_log, _array);
  }
}

if (ua.browser.name == 'IE'){
  switch (__MODE__) {
    case 'worker_fetch': // Experimental e ainda em Desenvolvimento, Funciona com Fetch porém é Async e deveria Ser Sync (Não Recomendo Usar este Modo)
      eval("loadJSON = function(url){return new Promise(function(resolve, reject){worker.postMessage({'cmd':'fetch','data':[url]});worker.addEventListener('message',function(result){new Promise(function(resolve, reject){setTimeout(resolve, 500);}).then(function(){resolve(result.data);});});});};var worker = new Worker('../../polyfills/ie.fix/worker.js')");
    break;
    // Alternativa
    case 'xhr': // Funciona com XHR ao invés de Fetch
      eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkhttp(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};");
    break;
    // Padrão
    case 'fetch':
    case undefined: // Funciona sem Worker
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

// Log das Configurações
table(["mode", "format", "cache", "style"]);

// Regras Embutidas
var Rules = Rules || {};
Rules = 
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
  _xSelect = function(that, ua) {

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

    //Inicializa as Váriáveis
    var build = document.createEvent('Event'),
        Instance = 0;

    // Define um Evento para Construção do Componente
    build.initEvent('build', true, true);

    // Compatibilizar com o Plugin jQuery Chosen
    if (App.EXT.Load.jQuery() && that.hasAttribute('x-plugin') && that.getAttribute('x-plugin') == 'chosen') {
      that.setAttribute('data-allow-clear', 1);
      App.EXT.Select.Option.SetEmpty(that);
      if (that.hasAttribute('x-dir') && that.getAttribute('x-dir') == 'rtl') {
        App.EXT.Class.Add(that, 'chosen-rtl')
      }
    }
    // Compatibilizar com o Plugin jQuery Select2
    if (App.EXT.Load.jQuery() && that.hasAttribute('x-plugin') && that.getAttribute('x-plugin') == 'select2') {
      that.setAttribute('data-allow-clear', 1);
      App.EXT.Select.Option.SetEmpty(that);
    }
    // Compatibilizar com o Plugin jQuery Bootstrap.Select
    if (App.EXT.Load.jQuery() && that.hasAttribute('x-plugin') && that.getAttribute('x-plugin') == 'select') {
      that.setAttribute('data-allow-clear', 1);
    }

    // Evento para Construção do Componente
    App.EXT.Event.Add(that, ['build'], function(event) {

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

      switch (__FORMAT__) {
        case 'worker':

          if(__CACHE__ == 'true') {

            var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
            _self.setAttribute('x-uid', uid);

            App.EXT.Select.Cache(_self, uid, 'worker', __DEBUG__);

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

          if(__CACHE__ == 'true') {

            var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
            _self.setAttribute('x-uid', uid);

            App.EXT.Select.Cache(_self, uid, 'stream', __DEBUG__);

            new Promise(function(resolve, reject) { setTimeout(resolve, 1000); }).then(function() {
              if (window.data(_self).response !== undefined) {
                var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                    response = [];
                App.EXT.Select.Stream(window.data(_self).response, _self, response, node, 'stream', uid);
              }
            });

          }
          else {

            var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                response = [];

            App.EXT.Select.Stream(_self.getAttribute('x-source'), _self, response, node, 'stream', undefined);

          }

        break;
      }

      log('loading', '#' + that.getAttribute('id'));

    }, false);

    // Regras Embutidas Automaticamente
    if (that.hasAttribute('x-type') && that.getAttribute('x-type') != '') {

      var x_type = that.getAttribute('x-type').toUpperCase(), Rule = undefined;

      switch(x_type.toLowerCase()) {
        case 'state': // Estados
        case 'city': // Cidades
        case 'district': // Bairros

          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.PLACES[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Armazenamento do Objeto Principal
          var $this = that, 
              // Define Timer dos Inputs
              Timeout = undefined, 
              // Obtém o Template de Configuração
              Template = App.EXT.JSON.Template(App.DEFAULT.PLACES.PATTERN),
              // Carrega as Regras Padrão do Tipo do Componente
              DEFAULT = Template(Rule.RULE);

          // Matriz Única do Elemento
          window.data(that).select = [];

          var Config = {
            "Rule": {
              "loading": DEFAULT.RULE.loading,
              "default": (!that.hasAttribute('x-default') && that.getAttribute('x-default') != '') ? Rule.RULE.default : that.getAttribute('x-default'),
              "source" : (!that.hasAttribute('x-source') && that.getAttribute('x-source') != '') ? Rule.RULE.source : that.getAttribute('x-source'),
              "value" : (!that.hasAttribute('x-value') && that.getAttribute('x-value') != '') ? Rule.RULE.value : that.getAttribute('x-value'),
              "text" : (!that.hasAttribute('x-text') && that.getAttribute('x-text') != '') ? Rule.RULE.text : that.getAttribute('x-text'),
              "filter" : (!that.hasAttribute('x-filter') && that.getAttribute('x-filter') != '') ? Rule.RULE.filter : that.getAttribute('x-filter'),
              "loader" : (!that.hasAttribute('x-loader') && that.getAttribute('x-loader') != '') ? Rule.RULE.loader : that.getAttribute('x-loader'),
              "rightAlign": (!that.hasAttribute('x-dir') && that.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((that.getAttribute('x-dir') == 'ltr') ? false : true)
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
           if (!that.hasAttribute('x-default') || that.getAttribute('x-default') == '')
             if (Config.Rule.default !== undefined)
               that.setAttribute('x-default', Config.Rule.default);

           // Aplica o Atributo x-source
           if (!that.hasAttribute('x-source') || that.getAttribute('x-source') == '')
             if (Config.Rule.source !== undefined)
               that.setAttribute('x-source', Config.Rule.source);

           // Aplica o Atributo x-value
           if (!that.hasAttribute('x-value') || that.getAttribute('x-value') == '')
             if (Config.Rule.value !== undefined)
               that.setAttribute('x-value', Config.Rule.value);

           // Aplica o Atributo x-text
           if (!that.hasAttribute('x-text') || that.getAttribute('x-text') == '')
             if (Config.Rule.text !== undefined)
               that.setAttribute('x-text', Config.Rule.text);

           // Aplica o Atributo x-filter
           if (!that.hasAttribute('x-filter') || that.getAttribute('x-filter') == '')
             if (Config.Rule.filter !== undefined)
               that.setAttribute('x-filter', Config.Rule.filter);

           // Aplica o Atributo x-loader
           if (!that.hasAttribute('x-loader') || that.getAttribute('x-loader') == '')
             if (Config.Rule.loader !== undefined)
               that.setAttribute('x-loader', Config.Rule.loader);

          // Aplica e Estieliza o Atributo dir
          that.style.direction = Config.Rule.rightAlign == true ? 'rtl' : 'ltr';
          that.setAttribute('dir', Config.Rule.rightAlign == true ? 'rtl' : 'ltr');

        break;
      }

      // Dispara o Evento para Construção do Componente
      that.dispatchEvent(build);

    }
    // Criação de Regras Manual
    else {

      // Dispara o Evento para Construção do Componente
      that.dispatchEvent(build);

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
      App.EXT.Event.Add(that, ['change'], function(event) {
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
      jQuery(that).on('change', function(event) {
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
    Instance = that.getAttribute('x-instance');

  };

  //Testo a Versão do IE para Condicionar a Criação do Componente de Forma Legada Utilizando document.registerElement
  if ( ( ua.browser.name == 'IE' && ua.browser.major >= '10') ) {
    var xSelect = Object.create(HTMLSelectElement.prototype);
    xSelect.createdCallback = function() {
      _xSelect(this, ua);
    };

    document.registerElement('x-select', { extends: 'select', prototype: xSelect });
  }
  else {
    /*
    class xSelect extends HTMLSelectElement {
      constructor(...args) {
        super(...args);
        _xSelect(this, ua);
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

    var xSelect =
      /*#__PURE__*/
      (function(_HTMLSelectElement) {
        _inheritsLoose(xSelect, _HTMLSelectElement);

        function xSelect() {
          var _this;

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this =
            _HTMLSelectElement.call.apply(_HTMLSelectElement, [this].concat(args)) ||
            this;

          _xSelect(_assertThisInitialized(_this), ua);

          return _this;
        }

        return xSelect;
      })(_wrapNativeSuper(HTMLSelectElement));

    customElements.define("x-select", xSelect, { extends: "select" });

  }

})();