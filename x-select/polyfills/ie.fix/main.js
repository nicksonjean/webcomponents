loadlet = function(url) {
  return new Promise(function(resolve, reject) {
    worker.postMessage({'cmd': 'fetch', 'data': [url]});
    worker.addEventListener('message', function(result) {
      new Promise(function(resolve, reject) { setTimeout(resolve, 500); }).then(function() {
        resolve(result.data);
      });
    });
  });
}