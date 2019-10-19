var App = App || {}, Pattern = Pattern || [], MaskedInput, ua = new UAParser().getResult();
App = 
{
  "EXT": {
    "CSS" : "\ninput[is='x-input']::-ms-clear {  display: none; width : 0; height: 0; }\ninput[is='x-input']::-ms-reveal {  display: none; width : 0; height: 0; }\ninput[is='x-input']::-webkit-input-placeholder { color: #337ab7; }\ninput[is='x-input']:-ms-input-placeholder { color: #337ab7; }\ninput[is='x-input']:-ms-input-placeholder:focus { color: #337ab7; }\ninput[is='x-input']:-moz-placeholder{ color: #337ab7; }\ninput[is='x-input']::-moz-placeholder{ color: #337ab7; }\n  ",
    "Delay" : function(ms, callback) {
      setTimeout(callback, ms);
    },
    "Focus" : {
      "Next" : function () {
        var focussableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
        if (document.activeElement && document.activeElement.form) {
          var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
          function (element) {
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
          });
          var index = focussable.indexOf(document.activeElement);
          if(index > -1) {
            var nextElement = focussable[index + 1] || focussable[0];
            nextElement.focus();
          }
        }
      },
      "Previous" : function() {
        var focussableElements = 'a:not([disabled]), button:not([disabled]), input:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
        if (document.activeElement && document.activeElement.form) {
          var focussable = Array.prototype.filter.call(document.activeElement.form.querySelectorAll(focussableElements),
          function (element) {
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement
          });
          var index = focussable.indexOf(document.activeElement);
          if(index > -1) {
            var previousElement = focussable[index - 1] || focussable[0];
            previousElement.focus();
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
        if(ua.browser.name === 'IE')
          var IEcaFix = {'host' : function(url) { return App.EXT.URL.Parse(url).hostname + '/'; } }
        else
          var IEcaFix = {'host' : function(url) { return App.EXT.URL.Parse(url).host ; } }
        return App.EXT.URL.Parse(url).protocol + '//' + IEcaFix.host(url) + App.EXT.URL.ParentDirectory(App.EXT.URL.ParentDirectory(App.EXT.URL.Parse(url).pathname));
      }
    },
    /*
     * Pure JavaScript AddClass and RemoveClass functions
     * by Jared Reich and Vladimir
     * https://codepen.io/Vovastradamus/pen/emGNgd
     * https://gist.github.com/jaredreich/971c43d9336dce7ade942b6a8acb2e6a
     */
    "Class" : {
      "Add" : function(element, classname){
        var re = new RegExp("(^|\\s)" + classname + "(\\s|$)", "g")
        if (re.test(element.className)) return
        element.className = (element.className + " " + classname).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
      },
      "Remove" : function(element, classname){
        var re = new RegExp("(^|\\s)" + classname + "(\\s|$)", "g")
        element.className = element.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
      }
    },
    "Format": {
      "LPad": function(str, max) {
        str = str.toString();
        return str.length < max ? App.EXT.Format.LPad("0" + str, max) : str;
      },
      /*
       * Rafa Academy/formatMoney Function
       * A browser function to format string to currency
       * Based on the function of Rafael Paulino
       * (C) Rafael Paulino - Rafa Academy
       * https://rafaacademy.com/javascript-format-number-money/
       */
      "toMoney": function(number, places, prefix, thousand, decimal, sufix) {
        number = number || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        prefix = prefix !== undefined ? prefix : "$";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var negative = number < 0 ? "-" : "",
          i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;
        return ( (prefix.trim() == "%") ?
            negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") + prefix :
            prefix + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "") ) + sufix;
      },
      "toBigMoney": function(number, places, prefix, thousand, decimal, sufix) {
        BigNumber.config({ FORMAT: { decimalSeparator: decimal, groupSeparator: thousand, groupSize: 3 } });
        var currency = new BigNumber(number)
        return prefix + currency.toFormat(Number(places)) + sufix;
      },
      "toDecimal": function(value, places) {
        value = value.toString().replace(/\D/g, '');
        places = typeof places !== 'undefined' ? places : 0;
        Inputmoney.args = {"preffix":"","suffix":"","fixed":true,"fractionDigits":places,"decimalSeparator":".","thousandsSeparator":"","autoCompleteDecimal":false};
        return Inputmoney.format(value);
      },
      "toNumeric": function(value) {
        return Number(value.replace(/\D/g, ''));
      },
      "toBigNumeric": function(value) {
        return BigNumber(value.replace(/\D/g, '')).toString();
      },
      "toNumber": function(value, places) {
        return Number(App.EXT.Format.toDecimal(value, places));
      },
      "toBigNumber": function(value, places) {
        return BigNumber(App.EXT.Format.toDecimal(value, places)).toString();
      }
    },
    "JSON": {
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
    "Event": {
      "Add" : function(el, s, fn, uc) {
        for (var i = 0; i < s.length; i++){
          if (el !== null) {
            el.addEventListener(s[i], fn, uc);
          }
        }
      },
      "Remove": function(el, s, fn, uc) {
        for (var i = 0; i < s.length; i++){
          if (el !== null) {
            el.removeEventListener(s[i], fn, uc);
          }
        }
      },
      "BindKeys" : function(event, kc, Action) {
        switch(kc) {
          case 8:  // Backspace
          case 46: // Delete
            event.preventDefault();
            Action.EraseInput(event, kc);
            return;
          break;
          case 9:  // Tab
            if (!event.shiftKey) { // Shift
              event.preventDefault();
              App.EXT.Focus.Next();
              return;
            }
          break;
          case 13: // Enter
            event.preventDefault();
            Action.SubmitInput();
            event.target.form.submit();
            return;
          break;
          case 116: // F5
            if (!event.ctrlKey) { // Control
              event.preventDefault();
              window.location.reload(true);
              return;
            }
          break;
        }
        if (event.shiftKey) { // Shift
          switch(kc) {
            case 9:  // Tab
              event.preventDefault();
              App.EXT.Focus.Previous();
              return;
            break;
          }
        }
        if (event.ctrlKey) { // Control
          switch(kc) {
            case 97:  // A
              event.target.focus();
              event.target.select();
              return;
            break;
            case 114: // R
            case 116: // F5
              window.location.reload(true);
              return;
            break;
            case 99:  // C
              document.execCommand("Copy");
              return;
            break;
            case 118: // V
              document.execCommand("Paste");
              return;
            break;
          }
        }
      },
      /* 
       * Watch/Observer Básico Apenas para o Firefox para Android Lolipop
       */
      "Watch":function(element, attribute){
        return {
          "get" : function (){
            if (attribute === 'value')
              return element.value;
            else
              return element.getAttribute(attribute);
          },
          "set" : function (value) {
            if (attribute === 'value')
              element.value = value;
            else
              element.setAttribute(attribute, value);
          } 
        } 
      },
      /* 
       * Event Hack para Android KitKat (4.4) e os Mecanismos de Renderização Gecko, WebKit, Presto e WebKit
       * Que Possuem Diversos Bugs nos Eventos KeyDown e KeyUp e não Intepretam o KeyPress Corretamente
       */
      "Discover": function(ua) {
        if ( ua.os.name == 'Android' && ( ua.engine.name == 'Blink' || ua.engine.name == 'Presto' || ua.engine.name == 'WebKit' ) ) {
          if ( parseFloat(ua.os.version) >= 4.4 && parseFloat(ua.os.version) < 6 )
            return { "Write":"textInput", "Erase":"input", "Paste":"paste", "Submit":"submit" };
          else if ( parseFloat(ua.os.version) >= 6 )
            return { "Write":"textInput", "Erase":"keyup", "Paste":"paste", "Submit":"submit" };
        }
        else if ( ua.os.name == 'Android' && ua.engine.name == 'Gecko' && parseFloat(ua.os.version) < 6 )
          return { "Write":"keypress", "Erase":"input", "Paste":"paste", "Submit":"submit" };
        else
          return { "Write":"keypress", "Erase":"keydown", "Paste":"paste", "Submit":"submit" };
      }
    },
    "Reset": {
      "Mask": function(event, submask) {
        // Remove a Máscara e a Validação
        if (event.target.inputmask)
          event.target.inputmask.remove();
        // Limpa o Campo
        event.target.value = '';
        event.target.setAttribute('x-value', '');
        // Limpa a Matriz
        window.data(event.target).input = [];
        // Verifica a Existencia de Sub-Máscaras
        submask = typeof submask === 'undefined' ? submask : true;
        // Obtém Corretamente as Regras da Máscara
        var rule = (submask === undefined) ? Pattern[event.target.getAttribute('x-type').toUpperCase()] : Pattern[event.target.getAttribute('x-type').toUpperCase()].RULE;
        // Finalmente Reaplica a Máscara
        MaskedInput = Inputmask(rule).mask(event.target);
      }
    },
    "Validate": {
      "isNumber": function(str) {
        return /^\d+$/.test(str);
      },
      "CPF": function(Objcpf){
        var cpf = Objcpf;
        exp = /\.|\-/g
        cpf = cpf.toString().replace( exp, "" ); 
        var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
        var soma1=0, soma2=0;
        var vlr =11;

        for(i=0;i<9;i++){
          soma1+=eval(cpf.charAt(i)*(vlr-1));
          soma2+=eval(cpf.charAt(i)*vlr);
          vlr--;
        }
        soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
        soma2=(((soma2+(2*soma1))*10)%11);
        var digitoGerado=(soma1*10)+soma2;
        if(digitoGerado!=digitoDigitado)
          return false;
        else
          return true;
      },
      "CNPJ": function(ObjCnpj){
        var cnpj = ObjCnpj;
        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
        var dig1= new Number;
        var dig2= new Number;

        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace( exp, "" ); 
        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

        for(i = 0; i<valida.length; i++){
          dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);
          dig2 += cnpj.charAt(i)*valida[i];
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
        if(((dig1*10)+dig2) != digito)
          return false;
        else
          return true;
      }
    },
    "Caret": {
      "GetPosition": function(element) {
        var CaretPos = 0;
        if (element.selectionStart || element.selectionStart == 0) {
          CaretPos = element.selectionStart;
        }
        else if (document.selection) {
          element.focus ();
          var Sel = document.selection.createRange();
          Sel.moveStart ('character', -element.value.length);
          CaretPos = Sel.text.length;
        }
        return (CaretPos);
      },
      "SetPosition": function(element, pos) {
        if (element.setSelectionRange) {
          element.focus();
          element.setSelectionRange(pos, pos);
        }
        else if (element.createTextRange) {
          var range = element.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      },
      "toBegin": function(element) {
        App.EXT.Event.Add(element, ['focus', 'click'], function(event){
          event.preventDefault();
          setTimeout(function(){ 
            var val = event.target.value;
            event.target.value = ''; 
            event.target.value = val;
            App.EXT.Caret.SetPosition(event.target, 0);
          }, 0);
          return false;
        }, false);
      },
      "toEnd": function(element) {
        App.EXT.Event.Add(element, ['focus', 'click'], function(event){
          event.preventDefault();
          setTimeout(function(){ 
            var val = event.target.value;
            event.target.value = ''; 
            event.target.value = val;
            if ( (event.target.hasAttribute('x-sufix') && event.target.getAttribute('x-sufix') != '') ) {
              App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - event.target.getAttribute('x-sufix').length));
            }
            else {
              App.EXT.Caret.SetPosition(event.target, 10000);
            }
          }, 0);
          return false;
        }, false);
      }
    }
  }
};