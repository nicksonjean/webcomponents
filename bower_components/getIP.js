  function getIPs(callback){
    var ip_dups = {},
        RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
        useWebKit = !!window.webkitRTCPeerConnection;
    if(!RTCPeerConnection){
      var iframe = document.createElement('iframe');
      iframe.sandbox = 'allow-same-origin';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      var win = iframe.contentWindow;
      RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
      useWebKit = !!win.webkitRTCPeerConnection;
    }
    var mediaConstraints = {
          optional: [{RtpDataChannels: true}]
        },
        servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]},
        pc = new RTCPeerConnection(servers, mediaConstraints);
    function handleCandidate(candidate){
      var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
      var ip_addr = ip_regex.exec(candidate)[1];
      if(ip_dups[ip_addr] === undefined)
          callback(ip_addr);
      ip_dups[ip_addr] = true;
    }
    pc.onicecandidate = function(ice){
      if(ice.candidate)
        handleCandidate(ice.candidate.candidate);
    };
    pc.createDataChannel("");
    pc.createOffer(function(result){
      pc.setLocalDescription(result, function(){}, function(){});
    },
    function(){});
    setTimeout(function(){
      var lines = pc.localDescription.sdp.split('\n');
      lines.forEach(function(line){
        if(line.indexOf('a=candidate:') === 0)
          handleCandidate(line);
      });
    }, 1000);
  }
  function getIP() {
    return new Promise(function(resolve, reject) {
      if(!isIE()) {
        getIPs(function(ip){
          //Local IPs
          if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)){
          }
          else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)){
          }
          //Remote IP
          else
            resolve(ip);
        });
      }
      else {
        getJSON('https://mathiasbynens.be/demo/ip').then(function(data) {
          resolve(data.ip);
        }, function(status) {
          reject(status);
        });
      }
    });
  };
  /*
  var promise = getIP();
  promise.then(function(ip) {
    console.log(ip);
  });
  */