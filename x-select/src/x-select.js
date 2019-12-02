/*!
 * 
 * A jQuery $.getScript() Replacement With Vanilla KavaScript
 * https://stackoverflow.com/a/28002292
 * https://gist.github.com/kmonsoor/ed54d600d6bfb0fc6b6870115d4f29d5
 * https://stackoverflow.com/questions/16839698/jquery-getscript-alternative-in-native-javascript
 * Copyright (c) 2009 Khaled Monsoor
 */
function LoadScript(source, callback) {
  var script = document.createElement('script');
  var prior = document.getElementsByTagName('script')[0];
  script.async = !!navigator.userAgent.match(/firefox/i) ? false : 1;

  script.onload = script.onreadystatechange = function( _, isAbort ) {
    if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
      script.onload = script.onreadystatechange = null;
      script = undefined;
      if(!isAbort && callback) setTimeout(callback, 0);
    }
  };

  script.src = source;
  prior.parentNode.insertBefore(script, prior);
}

// Carrego Inicialmente o JSON rules
LoadScript('../../src/x-select-rules.js', function() {
  // Carrego Posteriormente a Classe app
  LoadScript('../../src/x-select-app.js', function() {

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
      var _script = document.querySelector('script[type="text/javascript"][src*="x-select"]'),
          _link = document.querySelector('link[rel="import"][href*="x-select"]'),
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

    var isIE = document.body.style.msTouchAction !== undefined;
    var isEdge = /(edge)\/((\d+)?[\w\.]+)/i.exec(navigator.userAgent);
    var isFF = !!navigator.userAgent.match(/firefox/i);
    var __ROOT__ = App.EXT.URL.Domain(document.URL),
        __QUERY__ = App.EXT.URL.Parse(__FILE__).queryString,
        __TMP_FORMAT__ = __QUERY__.format || 'stream',
        __TMP_CACHE__ = __QUERY__.cache || 'false',
        __TMP_MODE__ = __QUERY__.mode || 'fetch',
        __FORMAT__ = (__TMP_FORMAT__ || 'stream') && ((isIE || isEdge || isFF) ? 'stream' : __TMP_FORMAT__),
        __CACHE__ = (__TMP_CACHE__ || 'false') && ((isIE || isEdge || isFF) ? 'false' : __TMP_CACHE__),
        __MODE__ = (__TMP_MODE__ || 'fetch') && ((isIE) ? 'xhr' : __TMP_MODE__),
        __DEBUG__ = __QUERY__.debug || 'false',
        __STYLE__ = __QUERY__.style || 'true';

    try {
      document.getElementById('_format').innerHTML = (isIE || isEdge || isFF) ? ( (__TMP_FORMAT__ == 'worker') ? '<s>' + __TMP_FORMAT__ + '</s>' + '/' +  '<b>stream*</b>' : __TMP_FORMAT__ ) : __FORMAT__;
      document.getElementById('_cache').innerHTML = (isIE || isEdge || isFF) ? ( (__TMP_CACHE__ == 'true') ? '<s>' + __TMP_CACHE__ + '</s>' + '/' +  '<b>false*</b>' : __TMP_CACHE__ ) : __CACHE__;
      document.getElementById('_mode').innerHTML = (isIE) ? ( (__TMP_MODE__ == 'fetch') ? '<s>' + __TMP_MODE__ + '</s>' + '/' +  '<b>xhr*</b>' : __TMP_MODE__ ) : __MODE__;
      document.getElementById('_debug').innerHTML = __DEBUG__;
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
        // Experimental e ainda em Desenvolvimento, Funciona com Fetch porém é Async e deveria Ser Sync (Não Recomendo Usar este Modo)
        case 'worker_fetch':
          eval("loadJSON = function(url){return new Promise(function(resolve, reject){worker.postMessage({'cmd':'fetch','data':[url]});worker.addEventListener('message',function(result){new Promise(function(resolve, reject){setTimeout(resolve, 500);}).then(function(){resolve(result.data);});});});};var worker = new Worker('../../polyfills/ie.fix/worker.js')");
        break;
        // Worker com XHR e Callback
        case 'xhr':
          eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkhttp(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};");
        break;
        // Worker com XHR e Promise
        case 'fetch':
          eval("loadJSON = function(url){var data = vkthread.exec({fn:function(config){return vkfetch(config);},args:[{url:url}]}).then(function(r){return JSON.parse(r);});return data;};");
        break;
         // Worker com Fetch e Promise
        case undefined:
          eval("loadJSON = function(url){var data = fetch(url).then(function(r){return r.json();});return data;};");
        break;
      }
    }
    else {
      // Worker com XHR e Promise
      if (__MODE__ == 'xhr') {
        eval("loadJSON = async function(url){var data = await JSON.parse(await vkthread.exec({fn:function(config){return vkfetch(config);},args:[{url:url}]}));return data;};");
      }
      // Worker com Fetch e Promise
      else {
        eval("loadJSON = greenlet( async function(url){var data = await (await fetch(url)).json();return data;});");
      }
    }

    // Log das Configurações
    table(["mode", "format", "cache", "style"]);

    // Mesclo Rules com a Classe Estática App
    App = Object.assign(App, Rules);

    /*!
     * Load Style/Script Inline for IE
     * Dynamic SCRIPT and STYLE elements in IE
     * https://www.phpied.com/dynamic-script-and-style-elements-in-ie/
     * Copyright (c) 2007 Stoyan Stefanov
     */
    (function(){
      if ( ( ua.browser.name === 'IE' ) && ( ua.browser.version < 10) ) {
        var _style = document.createElement('style');
        var _rules = App.EXT.CSS.Patch + ( (__STYLE__ === undefined || __STYLE__ == 'true') ? App.EXT.CSS.Custom : '' );
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
    })();

    // Programação do Componente
    (function() {

      //Função Pseudo-Privada para ser Usada Apenas com a Finalidade de Instanciar o Componente
      _xSelect = function(that, ua) {

        // Valido se o Navegador Possui Suporte a Templates
        if ( ( 'content' in document.createElement('template') ) && ( ( ua.browser.name !== 'IE' ) || ( ua.browser.name === 'IE' && ua.browser.version >= 10) ) ) {
          // Define a Estilização via Javascript
          var template = document.createElement('template');
          template.innerHTML = "<style>" + ( App.EXT.CSS.Patch + ( (__STYLE__ === undefined || __STYLE__ == 'true') ? App.EXT.CSS.Custom : '' ) ) + "</style>";
          // Aplica a Estilização
          that.appendChild(template.content.cloneNode(true));
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
                  "source" : (!that.hasAttribute('x-source') && that.getAttribute('x-source') != '') ? Rule.RULE.source.replace('\{\$__ROOT__\}', __ROOT__) : that.getAttribute('x-source'),
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
                   that.setAttribute('x-source', Config.Rule.source.replace('\{\$__ROOT__\}', __ROOT__));

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

  });

});