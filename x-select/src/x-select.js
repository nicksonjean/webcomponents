  var _URL = _URL || {};
  _URL =
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
    },
    "ParentDirectory": function(url) {
      return url.replace(/\\/g, '/').replace(/\/[^/]*\/?$/, '')
    },
    "Domain": function(url) {
      if (isIE)
        var IEcaFix = {'host' : function(url) { return _URL.Parse(url).hostname + '/'; } }
      else
        var IEcaFix = {'host' : function(url) { return _URL.Parse(url).host ; } }
      return _URL.Parse(url).protocol + '//' + IEcaFix.host(url) + _URL.ParentDirectory(_URL.ParentDirectory(_URL.Parse(url).pathname));
    }
  };

  //Função Anônima para Criação do Data Store (Armazenamento Temporário de Dados)
  //https://j11y.io/javascript/element-datastorage/
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

  //Função Anônima para Criação da Constante __FILE__
  (function(){
    Object.defineProperty(window, '__FILE__', {
      get: function(){
        var scripts = document.getElementsByTagName('link');
        for (var i=0; i<scripts.length; i++) {
          var start = scripts[i].href.indexOf('x-select.');
          if (start != -1) { 
            return scripts[i].href;
            break; 
          }
        }
      }
    });
  })();

  var loadJSON = undefined,
      __ROOT__ = _URL.Domain(document.URL),
      __LOAD__ = _URL.Parse(__FILE__).queryString.load_format,
      __DEBUG__ = _URL.Parse(__FILE__).queryString.debug,
      __IEMODE__ = _URL.Parse(__FILE__).queryString.ie_load_mode || 'fetch';

  if (isIE){
    switch (__IEMODE__) {
      case 'worker_fetch': // Experimental e ainda em Desenvolvimento, Funciona com Fetch porém é Async e deveria Ser Sync (Não Recomendo Usar este Modo)
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true') 
          console.log('ie_load_mode: ' + __IEMODE__);
        eval("loadJSON = function(url){return new Promise(function(resolve, reject){worker.postMessage({'cmd':'fetch','data':[url]});worker.addEventListener('message',function(result){new Promise(function(resolve, reject){setTimeout(resolve, 500);}).then(function(){resolve(result.data);});});});};var worker = new Worker('../../polyfills/ie.fix/worker.js')");
      break;
      // Alternativa
      case 'xhr': // Funciona com XHR ao invés de Fetch
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
          console.log('ie_load_mode: ' + __IEMODE__);
        eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkhttp(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};");
      break;
      // Padrão
      case 'fetch':
      case undefined: // Funciona sem Worker
        if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
          console.log('ie_load_mode: ' + __IEMODE__);
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

  var App = App || {}, Pattern = Pattern || [];
  App = 
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
    },
    "EXT": {
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
        "Cache": function(_self, uid, type) {
          var __FILE__ = window.data(_self).file,
              __DEBUG__ = _URL.Parse(__FILE__).queryString.debug;
          if(!document.querySelector('div[data-id="'+uid+'"]')) {
            var elem = document.createElement('div');
            elem.style.cssText = 'display:none;';
            elem.setAttribute('data-url', _self.getAttribute('x-source'));
            elem.setAttribute('data-id', uid);
            document.body.appendChild(elem);
            loadJSON(_self.getAttribute('x-source')).then(function(response) {
              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
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

  (function() {
    // Cross-browser fallback
    var currentScript = document._currentScript || document.currentScript,
      doc = currentScript.ownerDocument,
      proto = Object.create(HTMLSelectElement.prototype);

    proto.createdCallback = function() {

      //Inicializa as Váriáveis
      var build = document.createEvent('Event'),
          Instance = 0;

      // Define um Evento para Construção do Componente
      build.initEvent('build', true, true);
      window.data(this).file = __FILE__;

      // Compatibilizar com o Plugin jQuery Chosen
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'chosen') {
        this.setAttribute('data-allow-clear', 1);
        App.EXT.Select.Option.SetEmpty(this);
        if (this.hasAttribute('x-dir') && this.getAttribute('x-dir') == 'rtl') {
          App.EXT.Class.Add(this, 'chosen-rtl')
        }
      }
      // Compatibilizar com o Plugin jQuery Select2
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'select2') {
        this.setAttribute('data-allow-clear', 1);
        App.EXT.Select.Option.SetEmpty(this);
      }
      // Compatibilizar com o Plugin jQuery Bootstrap.Select
      if (App.EXT.Load.jQuery() && this.hasAttribute('x-plugin') && this.getAttribute('x-plugin') == 'select') {
        this.setAttribute('data-allow-clear', 1);
      }

      // Evento para Construção do Componente
      App.EXT.Event.Add(this, ['build'], function(event) {

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

        var __FILE__ = window.data(_self).file,
            __LOAD__ = _URL.Parse(__FILE__).queryString.load_format || 'stream',
            __CACHE__ = _URL.Parse(__FILE__).queryString.cache || false,
            __DEBUG__ = _URL.Parse(__FILE__).queryString.debug || false,
            __IEMODE__ = _URL.Parse(__FILE__).queryString.ie_load_mode;

        try {
          document.getElementById('_load_format').innerHTML = __LOAD__;
          document.getElementById('_cache').innerHTML = __CACHE__;
          document.getElementById('_debug').innerHTML = __DEBUG__;
          document.getElementById('_ie_load_mode').innerHTML = __IEMODE__ || 'fetch';
        }
        catch (e) {}

        switch (__LOAD__) {
          case 'worker':

            if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
              console.log('load_format: ' + __LOAD__);

            if(__CACHE__ !== false || __CACHE__ === 'true') {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
              _self.setAttribute('x-uid', uid);

              App.EXT.Select.Cache(_self, uid, 'worker');

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

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);
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

            if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
              console.log('load_format: ' + __LOAD__);

            if(__CACHE__ !== false || __CACHE__ === 'true') {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var uid = 'UID_' + App.EXT.CRC32(_self.getAttribute('x-source'));
              _self.setAttribute('x-uid', uid);

              App.EXT.Select.Cache(_self, uid, 'stream');
              new Promise(function(resolve, reject) { setTimeout(resolve, 1000); }).then(function() {
                if (window.data(_self).response !== undefined) {
                  var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                      response = [];
                  App.EXT.Select.Stream(window.data(_self).response, _self, response, node, 'stream', uid);
                }
              });

            }
            else {

              if(__DEBUG__ !== undefined || __DEBUG__ === 'true')
                console.log('cache: ' + __CACHE__);

              var node = _self.getAttribute('x-loader') == null ? '!' : '$' + _self.getAttribute('x-loader'),
                  response = [];

              App.EXT.Select.Stream(_self.getAttribute('x-source'), _self, response, node, 'stream', undefined);

            }

          break;
        }

      }, false);

      // Regras Embutidas Automaticamente
      if (this.hasAttribute('x-type') && this.getAttribute('x-type') != '') {

        var x_type = this.getAttribute('x-type').toUpperCase(), Rule = undefined;

        switch(x_type.toLowerCase()) {
          case 'state': // Estados
          case 'city': // Cidades
          case 'district': // Bairros

            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.PLACES[x_type];

            // Reatribue o Obje
            Pattern[x_type] = Rule;

            // Armazenamento do Objeto Principal
            var $this = this, 
                // Define Timer dos Inputs
                Timeout = undefined, 
                // Obtém o Template de Configuração
                Template = App.EXT.JSON.Template(App.DEFAULT.PLACES.PATTERN),
                // Carrega as Regras Padrão do Tipo do Componente
                DEFAULT = Template(Rule.RULE);

            // Matriz Única do Elemento
            window.data(this).select = [];

            var Config = {
              "Rule": {
                "loading": DEFAULT.RULE.loading,
                "default": (!this.hasAttribute('x-default') && this.getAttribute('x-default') != '') ? Rule.RULE.default : this.getAttribute('x-default'),
                "source" : (!this.hasAttribute('x-source') && this.getAttribute('x-source') != '') ? Rule.RULE.source : this.getAttribute('x-source'),
                "value" : (!this.hasAttribute('x-value') && this.getAttribute('x-value') != '') ? Rule.RULE.value : this.getAttribute('x-value'),
                "text" : (!this.hasAttribute('x-text') && this.getAttribute('x-text') != '') ? Rule.RULE.text : this.getAttribute('x-text'),
                "filter" : (!this.hasAttribute('x-filter') && this.getAttribute('x-filter') != '') ? Rule.RULE.filter : this.getAttribute('x-filter'),
                "loader" : (!this.hasAttribute('x-loader') && this.getAttribute('x-loader') != '') ? Rule.RULE.loader : this.getAttribute('x-loader'),
                "rightAlign": (!this.hasAttribute('x-dir') && this.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((this.getAttribute('x-dir') == 'ltr') ? false : true)
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
             if (!this.hasAttribute('x-default') || this.getAttribute('x-default') == '')
               if (Config.Rule.default !== undefined)
                 this.setAttribute('x-default', Config.Rule.default);

             // Aplica o Atributo x-source
             if (!this.hasAttribute('x-source') || this.getAttribute('x-source') == '')
               if (Config.Rule.source !== undefined)
                 this.setAttribute('x-source', Config.Rule.source);

             // Aplica o Atributo x-value
             if (!this.hasAttribute('x-value') || this.getAttribute('x-value') == '')
               if (Config.Rule.value !== undefined)
                 this.setAttribute('x-value', Config.Rule.value);

             // Aplica o Atributo x-text
             if (!this.hasAttribute('x-text') || this.getAttribute('x-text') == '')
               if (Config.Rule.text !== undefined)
                 this.setAttribute('x-text', Config.Rule.text);

             // Aplica o Atributo x-filter
             if (!this.hasAttribute('x-filter') || this.getAttribute('x-filter') == '')
               if (Config.Rule.filter !== undefined)
                 this.setAttribute('x-filter', Config.Rule.filter);

             // Aplica o Atributo x-loader
             if (!this.hasAttribute('x-loader') || this.getAttribute('x-loader') == '')
               if (Config.Rule.loader !== undefined)
                 this.setAttribute('x-loader', Config.Rule.loader);

            // Aplica e Estieliza o Atributo dir
            this.style.direction = Config.Rule.rightAlign == true ? 'rtl' : 'ltr';
            this.setAttribute('dir', Config.Rule.rightAlign == true ? 'rtl' : 'ltr');

          break;
        }

        // Dispara o Evento para Construção do Componente
        this.dispatchEvent(build);

      }
      // Criação de Regras Manual
      else {

        // Dispara o Evento para Construção do Componente
        this.dispatchEvent(build);

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
        App.EXT.Event.Add(this, ['change'], function(event) {
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
        jQuery(this).on('change', function(event) {
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
      Instance = this.getAttribute('x-instance');
    };

    // Cross-browser fallback
    document.registerElement = document.registerElement || document.register;

    // Element registration using x-tag format
    document.registerElement('x-select', {
      extends: 'select',
      prototype: proto
    });

  })();