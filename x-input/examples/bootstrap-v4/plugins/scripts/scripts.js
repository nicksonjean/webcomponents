function scriptURL() {
  var scripts = document.getElementsByTagName('script'),
      script = scripts[scripts.length - 1],
      scriptURL = script.src;
  return scriptURL;
}

function dirName(path) {
  return path.replace(/\\/g, '/').replace(/\/[^/]*\/?$/, '')
};

function getParams(script_name) {
  var scripts = document.getElementsByTagName("script");
  for(var i=0; i<scripts.length; i++) {
    if(scripts[i].src.indexOf("/" + script_name) > -1) {
      var pa = scripts[i].src.split("?").pop().split("&");
      var p = {};
      for(var j=0; j<pa.length; j++) {
        var kv = pa[j].split("=");
        p[kv[0]] = kv[1];
      }
      return p;
    }
  }
  return {};
};

function loadScript(pathFile) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = pathFile;
  document.getElementsByTagName("head")[0].appendChild(script);
};