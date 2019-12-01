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

function setParentTransition(obj, prop, delay, style, callback) {
  obj.css({'-webkit-transition' : prop + ' ' + delay + ' ' + style});
  obj.css({'-moz-transition' : prop + ' ' + delay + ' ' + style});
  obj.css({'-o-transition' : prop + ' ' + delay + ' ' + style});
  obj.css({'transition' : prop + ' ' + delay + ' ' + style});
  callback();
}

function callParentTransition(obj, delay) {
  setParentTransition(obj, 'opacity', '0s', 'ease', function() {
    obj.addClass('fade in');
  });
  setTimeout(function() {
    setParentTransition(obj, 'opacity', delay + 's', 'ease', function() {
      obj.removeClass('fade in');
    });
  });
}

var URL = URL || {};
URL = 
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
  }
}