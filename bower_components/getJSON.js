  function getJSON(url) {
    return new Promise(function(resolve, reject) {
      var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
      var responseTypeAware = 'responseType' in xhr;
      xhr.open('get', url, true);
      if (responseTypeAware) {
        xhr.responseType = 'json';
      }
      xhr.setRequestHeader("Content-Type", "application/jsonp");
      xhr.onload = function() {
        if (xhr.readyState == 4) {
          if (xhr.status === 200) {
            resolve(responseTypeAware ? xhr.response : JSON.parse(xhr.responseText));
          }
          else {
            reject(xhr.status);
          }
        }
      };

      xhr.send();
    });
  };