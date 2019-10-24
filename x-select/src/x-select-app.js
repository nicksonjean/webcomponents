var App = App || {}, Pattern = Pattern || [], loadJSON, ua = new UAParser().getResult();
App = 
{
  "EXT": {
    "CSS" : {
      "Custom" : "\nselect[is='x-select'] option, select[is='x-select'].custom-select{ color: #337ab7; }",
      "Patch" : "\n.chosen-container.chosen-with-drop .chosen-drop { left: 0; }\n.chosen-container-single .chosen-drop { margin-top: -1px; background-clip: padding-box; }\n.chosen-container .chosen-drop { position: absolute; top: 100%; left: -9999px; z-index: 1041; width: 100%; border-top: 0; background: #fff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; }\n.chosen-container-single .chosen-search { position: relative; z-index: 1010; margin: 0; padding: 3px 4px; white-space: nowrap; }\n.chosen-container .chosen-results { position: relative; overflow-x: hidden; overflow-y: auto; margin: 0 4px 4px 0; padding: 0 0 0 4px; max-height: 240px; -webkit-overflow-scrolling: touch; }\n.chosen-container-single .chosen-search input[type=text] { background-color: #ffffff; }\n.chosen-container-single .chosen-search:after { top: .275rem; }\n.chosen-rtl { text-align: right; }\n.chosen-rtl .chosen-single { padding: 0 8px 0 0; overflow: visible; }\n.chosen-rtl .chosen-single span { margin-left: 26px; margin-right: 4px; direction: rtl; }\n.chosen-rtl .chosen-single div { left: 7px; right: auto; }\n.chosen-rtl .chosen-single abbr { left: 40px; right: auto; }\n.chosen-rtl .chosen-choices .search-field input[type='text'] { direction: rtl; }\n.chosen-rtl .chosen-choices li { float: right; }\n.chosen-rtl .chosen-choices .search-choice { margin: 6px 5px 3px 0; padding: 3px 5px 3px 19px; }\n.chosen-rtl .chosen-choices .search-choice .search-choice-close { background-position: right top; left: 4px; right: auto; }\n.chosen-rtl.chosen-container-single .chosen-results { direction: rtl; position: relative; width: 100%; padding: 0 25px 0 0; display: inline-block; overflow: overlay; overflow-x: hidden; margin: -17px 4px -2px 4px; }\n.chosen-rtl.chosen-container .chosen-results li { padding: .25rem .5rem .25rem 1.5rem; }\n.chosen-rtl.chosen-container .chosen-results li:after, .chosen-rtl.chosen-container .chosen-results li:before { content: '\\200E'; }\n.chosen-rtl.chosen-container .chosen-results li.result-selected:before { top: .2rem; left: 22px; }\n.chosen-rtl.chosen-container .chosen-results li.highlighted { padding-right: 25px; position: relative; left: 17px; width: 110%; }\n.chosen-rtl .chosen-results .group-option { padding-left: 0; padding-right: 15px; }\n.chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div { border-right: none; }\n.chosen-container-single.chosen-rtl .chosen-search input[type=text] { direction:rtl; }\n.chosen-container-single.chosen-rtl .chosen-search:after { display: inline-block; float: left; position: relative; top: -1.6rem; direction: rtl; left: 0.5rem; width: 1.25rem; height: 1.25rem; content: ''; background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23adb5bd' d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E\"); background-size: 1.25rem 1.25rem; background-position: center center; background-repeat: no-repeat; }\n.chosen-container.chosen-container-single.chosen-rtl .chosen-single div:after { display: inline-block; position: relative; top: .125rem; left: -.5rem; width: 2rem; height: 2rem; content: ''; background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23adb5bd' d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'/%3E%3C/svg%3E\"); background-size: 2rem 2rem; background-position: center center; background-repeat: no-repeat; }\n.chosen-container.chosen-container-single.chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div:after { display: inline-block; position: relative; top: .125rem; left: -.5rem; width: 2rem; height: 2rem; content: ''; background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23adb5bd' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E\"); background-size: 2rem 2rem; background-position: center center; background-repeat: no-repeat; }\n.chosen-container-single .chosen-single { height: 2.37rem; }\n.select2-container--bootstrap .select2-selection__clear { width: 1.2em; height: 1.2em; line-height: 0.95em; padding-left: 0.285em; margin-top: 0.2em; border-radius: 100%; background-color: #6c757d; color: #f8f9fa; float: right; margin-right: 0.3em; }\n.select2-container--bootstrap .select2-selection__clear:hover { background-color: #343a40; }\n.select2-container--bootstrap[dir='rtl'] .select2-selection--single .select2-selection__clear { width: 1.2em; height: 1.2em; line-height: 0.95em; padding-right: 0.25em; margin-top: 0.2em; border-radius: 100%; background-color: #6c757d; color: #f8f9fa; margin-left: 0.4em; }\n.select2-container--bootstrap[dir='rtl'] .select2-selection--single .select2-selection__clear:hover { background-color: #343a40; }\n.select2-dropdown[dir='rtl'] .select2-results ul li:after { content: '\\200E'; }\n.select2-dropdown[dir='rtl'] .select2-results ul li:before { content: '\\200E'; }\n.select2-container--bootstrap .select2-results > .select2-results__options { margin: 0 4px 4px; }\n.bootstrap-select > .dropdown-toggle.rtl .filter-option { text-align: right; direction: rtl; }\n.bootstrap-select > .dropdown-toggle.rtl { text-align: left; }\n.bootstrap-select > .dropdown-toggle.rtl .filter-option-inner { padding-left: 0; padding-right: 0; }\n.bootstrap-select > .dropdown-toggle.rtl::after { margin-left: 0em; }\n.bootstrap-select > .dropdown-toggle.rtl + .dropdown-menu .popover-header, .bootstrap-select > .dropdown-toggle.rtl + .dropdown-menu .bs-searchbox input { text-align: right; direction: rtl; }\n.bootstrap-select > .dropdown-toggle.rtl + .dropdown-menu .close { float: left; margin-top: -3px; margin-left: -4px; }\n.bootstrap-select > .dropdown-toggle.rtl + .dropdown-menu .inner { direction:rtl; text-align: right; overflow-x: hidden; }\n.bootstrap-select .rtl + .dropdown-menu li a span.text { margin-right: 0px; }\n.bootstrap-select .rtl + .dropdown-menu .inner.show > ul > li.selected.active > a > span.bs-ok-default.check-mark { margin-right: 90%; }\n.bootstrap-select .rtl + .dropdown-menu li a span.text:after, .bootstrap-select .rtl + .dropdown-menu li a span.text:before { content: '\\200E'; }\n.bs-searchbox { padding: 4px 0px; }\n.bootstrap-select .popover-header { margin: 0 -4px; display:none; }\n.bootstrap-select > .dropdown-toggle + .dropdown-menu .close { margin-top: -3px; margin-right: -4px; }\n.bootstrap-select .no-results { margin: 0; }\n.bootstrap-select .dropdown-menu { min-width: 0px !important; width: 100%; }\n.bootstrap-select .btn{ width: 100%; }\n.bootstrap-select .dropdown-menu { margin-bottom: 0; font-size: 14.5px; padding: 4px; min-width: 100%; }\n.bootstrap-select .dropdown-item { white-space: initial; }\n.dropdown-toggle:after, .dropup .dropdown-toggle:after { transition:all ease 0s; }\n.bootstrap-select-caret-animate{ }\n.bootstrap-select-caret-animate:after{ transition:all ease 0s; transform:rotate(180deg); }\n.bootstrap-select .bs-ok-default:after, .bootstrap-select .dropdown-item.selected.active > .text { color: white; }.input-block-level { display: block; width: 100%; min-height: 28px; }"
    },
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
    /*!
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
      /*!
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