!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.unfetch=n()}(this,function(){return function(e,n){return n=n||{},new Promise(function(t,o){var r=new XMLHttpRequest;for(var s in r.open(n.method||"get",e,!0),n.headers)r.setRequestHeader(s,n.headers[s]);function u(){var e,n=[],t=[],o={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,s,u){n.push(s=s.toLowerCase()),t.push([s,u]),o[s]=(e=o[s])?e+","+u:u}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:u,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}r.withCredentials="include"==n.credentials,r.onload=function(){t(u())},r.onerror=o,r.send(n.body||null)})}});
//# sourceMappingURL=unfetch.umd.js.map