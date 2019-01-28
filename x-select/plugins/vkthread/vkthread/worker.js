/**
 * worker.js - component of vkThread plugin.
 *
 * Copyright (c) 2013 - 2016 Vadim Kiryukhin ( vkiryukhin @ gmail.com )
 * https://github.com/vkiryukhin/vkthread
 * http://www.eslinstructor.net/vkthread/
 *
 */

/* jshint -W074, -W117, -W061*/
/* global Promise, self, postMessage, importScripts, onmessage:true */

(function() {
  'use strict';

  !function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],u(e,this)}function o(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,t._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(f){return void i(n.promise,f)}r(n.promise,o)}else(1===e._state?r:i)(n.promise,e._value)})):e._deferreds.push(n)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var o=n.then;if(n instanceof t)return e._state=3,e._value=n,void f(e);if("function"==typeof o)return void u(function(e,n){return function(){e.apply(n,arguments)}}(o,n),e)}e._state=1,e._value=n,f(e)}catch(r){i(e,r)}}function i(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&t._immediateFn(function(){e._handled||t._unhandledRejectionFn(e._value)});for(var n=0,r=e._deferreds.length;r>n;n++)o(e,e._deferreds[n]);e._deferreds=null}function u(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,i(n,e))})}catch(o){if(t)return;t=!0,i(n,o)}}var c=setTimeout;t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,t,r)),r},t.prototype["finally"]=e,t.all=function(e){return new t(function(n,t){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(n){o(e,n)},t)}r[e]=f,0==--i&&n(r)}catch(c){t(c)}}if(!e||"undefined"==typeof e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return n([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(n){n(e)})},t.reject=function(e){return new t(function(n,t){t(e)})},t.race=function(e){return new t(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},t._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},t._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=t});
  //var support={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}if(support.arrayBuffer)var viewClasses=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],isArrayBufferView=ArrayBuffer.isView||function(e){return e&&viewClasses.indexOf(Object.prototype.toString.call(e))>-1};function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)||""===e)throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return support.iterable&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsText(e),r}function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:support.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:support.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():support.arrayBuffer&&support.blob&&isDataView(e)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||isArrayBufferView(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):support.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},support.blob&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?consumed(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return readBlobAsText(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},support.formData&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),iteratorFor(e)},support.iterable&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var methods=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function normalizeMethod(e){var t=e.toUpperCase();return methods.indexOf(t)>-1?t:e}function Request(e,t){var r=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=normalizeMethod(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function decode(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),s=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(s))}}),t}function parseHeaders(e){var t=new Headers;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),o=r.shift().trim();if(o){var s=r.join(":").trim();t.append(o,s)}}),t}function Response(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var redirectStatuses=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===redirectStatuses.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};var DOMException=self.DOMException;try{new DOMException}catch(e){(DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),DOMException.prototype.constructor=DOMException}function fetch(e,t){return new Promise(function(r,o){var s=new Request(e,t);if(s.signal&&s.signal.aborted)return o(new DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function i(){n.abort()}n.onload=function(){var e={status:n.status,statusText:n.statusText,headers:parseHeaders(n.getAllResponseHeaders()||"")};e.url="responseURL"in n?n.responseURL:e.headers.get("X-Request-URL");var t="response"in n?n.response:n.responseText;r(new Response(t,e))},n.onerror=function(){o(new TypeError("Network request failed"))},n.ontimeout=function(){o(new TypeError("Network request failed"))},n.onabort=function(){o(new DOMException("Aborted","AbortError"))},n.open(s.method,s.url,!0),"include"===s.credentials?n.withCredentials=!0:"omit"===s.credentials&&(n.withCredentials=!1),"responseType"in n&&support.blob&&(n.responseType="blob"),s.headers.forEach(function(e,t){n.setRequestHeader(t,e)}),s.signal&&(s.signal.addEventListener("abort",i),n.onreadystatechange=function(){4===n.readyState&&s.signal.removeEventListener("abort",i)}),n.send(void 0===s._bodyInit?null:s._bodyInit)})}fetch.polyfill=!0,self.fetch||(self.fetch=fetch,self.Headers=Headers,self.Request=Request,self.Response=Response);

  var JSONfn = {
    parse:function (str, date2obj) {
          var iso8061 = date2obj ? /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/ : false;

      return JSON.parse(str, function (key, value) {
        var prefix,
            func, fnArgs, fnBody ;

        if (typeof value !== 'string') {
          return value;
        }
        if (value.length < 8) {
          return value;
        }

        prefix = value.substring(0, 8);

        if (iso8061 && value.match(iso8061)) {
          return new Date(value);
        }
        if (prefix === 'function') {
          return eval('(' + value + ')');
        }
        if (prefix === '_PxEgEr_') {
          return eval(value.slice(8));
        }
        if (prefix === '_NuFrRa_') {
          func = value.slice(8).trim().split('=>');
          fnArgs = func[0].trim();
          fnBody = func[1].trim();
          if(fnArgs.indexOf('(') < 0) {
            fnArgs = '('+ fnArgs +')';
          }
          if(fnBody.indexOf('{') < 0) {
            fnBody = '{ return '+ fnBody +'}';
          }
          return eval('(' + 'function' + fnArgs + fnBody +')');
        }

        return value;
      });
    }
  };

  onmessage = function(e) {
    var obj = JSONfn.parse(e.data, true),
        cntx = obj.context || self;

    if (obj.importFiles) {
      importScripts.apply(null, obj.importFiles);
    }

    if (typeof obj.fn === 'function') { //regular function
      if (typeof Promise !== 'undefined') {
        Promise.resolve(obj.fn.apply(cntx, obj.args))
               .then(function(data){postMessage(data);})
               .catch(function(reason){postMessage(reason);});
      } else {
        // to satisfy IE
        postMessage(obj.fn.apply(cntx, obj.args));
      }

    }
    else { //ES6 arrow function
      postMessage(self[obj.fn].apply(cntx, obj.args));
    }
  };

/*
 * XMLHttpRequest in plain javascript;
 */

function vkhttp(cfg){

  var body = cfg.body  ? JSON.stringify(cfg.body) : null,
      contentType = cfg.contentType || 'application/json',
      method = cfg.method ? cfg.method.toUpperCase() : 'GET',
      xhr = new XMLHttpRequest(),
      ret;

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      ret = xhr.responseText;
    } else {
      ret = 'Error: ' + xhr.status + xhr.statusText;
    }
  };

  xhr.onerror = function (data) {
    ret = xhr.status + xhr.statusText;
  };

  xhr.open(method, cfg.url, false); //synchronous request
  if(method === 'POST') {
    xhr.setRequestHeader('Content-Type', contentType);
  }
  xhr.send(body);

  return ret;

};

/*
 * Fake Fetch Sobre XMLHttpRequest
 * https://gist.github.com/hiquest/8913306
 * https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
 */

function vkfetch(cfg) {

  var body = cfg.body ? JSON.stringify(cfg.body) : null,
      method = cfg.method ? cfg.method.toUpperCase() : 'GET';

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, cfg.url, false);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });

};


//Funciona Apenas com PolyFill e Precisa ser Embedado no Próprio Worker mas mesmo assim continua causando erros inexplicáveis
// https://jakearchibald.com/2015/thats-so-fetch/
// https://gist.github.com/juliocesar/6f10855fae3496436971
/*
function vkfetch(cfg){

  var body = cfg.body ? JSON.stringify(cfg.body) : null,
      method = cfg.method ? cfg.method.toUpperCase() : 'GET';

  return fetch(cfg.url, {
    method: method,
    body: body
  })
  .then(function(response ) {
    if (response.ok) {
      return response.json().then(function(response) {
        return response;
      });
    }
  })

};
*/
}());

