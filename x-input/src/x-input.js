/*!
* X Input - Componente Web
* É um Componente para Criação de Campos de Formulário Inteligentes
* e com Comportamento e Máscara, Util para Criação de Formulários Ricos

* @element input
* @property is="x-input"
* @demo https://github.com/nicksonjean/webcomponents/tree/master/x-input
* @author Nickson Jeanmerson
*/
var App = App || {}, Pattern = Pattern || [], MaskedInput, ua = new UAParser().getResult();
App = 
{
  "DEFAULT": {
    "SYMBOL": {
      "NEGATIVE": "-",
      "POSITIVE": ""
    },
    "NUMBER": {
      "PATTERN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": function(){ return "digitsOptional" },
          "prefix": function(){ return "prefix" },
          "sufix": function(){ return "sufix" },
          "radixPoint": function(){ return "radixPoint" },
          "groupSeparator": function(){ return "groupSeparator" },
          "groupSize": function(){ return "groupSize" },
          "autoGroup": function(){ return "autoGroup" },
          "digits": function(){ return "digits" },
          "rightAlign": function(){ return "rightAlign" },
          "allowMinus": function(){ return "allowMinus" },
          "removeMaskOnSubmit": function(){ return "removeMaskOnSubmit" },
          "clearMaskOnLostFocus": function(){ return "clearMaskOnLostFocus" },
          "showMaskOnFocus": function(){ return "showMaskOnFocus" },
          "showMaskOnHover": function(){ return "showMaskOnHover" },
          "min": function(){ return "min" },
          "max": function() { return "max" },
          "affinity":function() { return "affinity" },
          "placeholder": function() { return "placeholder" },
          "numericInput": function() { return "numericInput" }
        }
      }
    },
    "DECIMAL": {
      "PATTERN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": function(){ return "digitsOptional" },
          "prefix": function(){ return "prefix" },
          "sufix": function(){ return "sufix" },
          "radixPoint": function(){ return "radixPoint" },
          "groupSeparator": function(){ return "groupSeparator" },
          "groupSize": function(){ return "groupSize" },
          "autoGroup": function(){ return "autoGroup" },
          "digits": function(){ return "digits" },
          "rightAlign": function(){ return "rightAlign" },
          "allowMinus": function(){ return "allowMinus" },
          "removeMaskOnSubmit": function(){ return "removeMaskOnSubmit" },
          "clearMaskOnLostFocus": function(){ return "clearMaskOnLostFocus" },
          "showMaskOnFocus": function(){ return "showMaskOnFocus" },
          "showMaskOnHover": function(){ return "showMaskOnHover" },
          "min": function(){ return "min" },
          "max": function() { return "max" },
          "affinity":function() { return "affinity" },
          "placeholder": function() { return "placeholder" },
          "numericInput": function() { return "numericInput" }
        }
      }
    }
  },
  "PATTERN": {
    "NUMBER": {
      "ZEROFILLINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": "",
          "groupSize": 0,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0000000000000000000",
          "numericInput": false
        }
      },
      "POSITIVEINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": false,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": 0,
          "max": 18446744073709552000,
          "affinity": "",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "NEGATIVEINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": 0,
          "max": 9223372036854776000,
          "affinity": "",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "PERCENTINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " %",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": 0,
          "max": 100,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "SMALLINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -32767,
          "max": 32767,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "MEDIUMINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -8388607,
          "max": 8388607,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "INTEGER": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -2147483647,
          "max": 2147483647,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": false
        }
      },
      "BIGINT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": false
        }
      }
    },
    "DECIMAL": {
      "ZEROFILLDEC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "",
          "groupSize": 0,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0000000000000000000.00",
          "numericInput": true
        }
      },
      "POSITIVEDEC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": false,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": 0,
          "max": 18446744073709552000,
          "affinity": "",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "NEGATIVEDEC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": 0,
          "max": 9223372036854776000,
          "affinity": "",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "DECIMAL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CURRENCY": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PERCENTDEC":{
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " %",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -100,
          "max": 100,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "AFN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ؋",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "DZD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.ج",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ARS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "AMD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "դ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "AWG": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ƒ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "AUD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "AZN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₼ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BSD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BHD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " .د.ب",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.000",
          "numericInput": true
        }
      },
      "THB": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "฿ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PAB": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "B/. ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "BBD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BYR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₽ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "BZD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BMD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "VEF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Bs F ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "BOB": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Bs ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "BRL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "R$ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "BND": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BGN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "лв ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BIF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CAD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CVE": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "KYD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "GHS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₵ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "XAF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "XOF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "XPF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "CLP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "CNY": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "元 ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "COP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "KMF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "CF ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "CDF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "FC ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BAM": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "КМ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "NIO": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "C$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CRC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₡ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "HRK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " kn",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "CUP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CZK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " Kč",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "GMD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "D ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "DKK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " kr",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "MKD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ден ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "DJF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "STD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Db ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "DOP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "VND": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " ₫",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "XCD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "EGP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ج.م",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ETB": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ብር ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "EUR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " €",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "FKP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "£ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "FJD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "GIP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "£ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "HTG": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "G ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PYG": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " ₲",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "GNF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " ₣",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "GWP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "GYD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "HKD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "元 ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "UAH": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ₴",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "HUF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " Ft",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "ISK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " kr",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "INR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₹ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "IRR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ريال",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "IQD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.ع",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.000",
          "numericInput": true
        }
      },
      "ILS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ₪",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "JMD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "JPY": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "¥ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "JOD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.ا",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.000",
          "numericInput": true
        }
      },
      "KES": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "K ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PGK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "K ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "LAK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₭ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "EEK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " kr",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "KWD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.ك",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.000",
          "numericInput": true
        }
      },
      "MWK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "MK ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "AOA": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Kz ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MMK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "K ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "GEL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₾ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "LVL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Ls ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "LBP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " ل.ل.‎",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "ALL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " L",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "HNL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "L ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SLL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Le ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "LRD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "LYD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ل.د",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,000",
          "numericInput": true
        }
      },
      "SZL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "L ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "LTL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " Lt",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "LSL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "L ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "MGA": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Ar ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 1,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.0",
          "numericInput": true
        }
      },
      "MYR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "RM ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "TMT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "m ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MUR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "රු ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "MZN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "MT ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "MXN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MDL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "L ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MAD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.م.",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "NGN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₦ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "ERN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ናቕፋ",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "NAD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "N ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "NPR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "रु ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ANG": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ƒ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "RON": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "L ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "NZD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BTN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Nu. ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "KPW": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₩ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "NOK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " kr",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "PEN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "S/. ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MRO": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "UM ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 1,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.0",
          "numericInput": true
        }
      },
      "TOP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "T$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PKR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "රු ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MOP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "P ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "UYU": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "PHP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₱ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "PLN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " zł",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "GBP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "£ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BWP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "P ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "QAR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ر.ق",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "GTQ": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Q ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ZAR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "R ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "OMR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ر.ع.",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,000",
          "numericInput": true
        }
      },
      "KHR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "៛ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MVR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " .ރ",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "IDR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Rp ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "RUB": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ₽",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "RWF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "SHP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "£ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SVC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₡ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SAR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ر.س",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "RSD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "дин ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "SCR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "SR ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "SGD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SBD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "KGS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "лв ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "SOS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "So. ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "TJS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "с. ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "LKR": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "රු ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "SDG": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ج.س.",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SRD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SEK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " kr",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "CHF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "`",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SYP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ل.س",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "TWD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BDT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "৳ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "WST": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "T ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "TZS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Sh ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "KZT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₸ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "TTD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MNT": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₮ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "TND": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.ت",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 3,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.000",
          "numericInput": true
        }
      },
      "TRY": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₺ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "AED": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " د.إ",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "UGX": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "",
          "sufix": " Sh",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "USD": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "UZS": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "лв ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "VUV": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "Vt ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "KRW": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "₩ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "YER": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ريال",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ZMK": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ZK ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ZWL": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": "",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "SSP": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " ج.س.",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "CUC": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BYN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Br ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "UYI": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": true,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": "",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 0,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0",
          "numericInput": true
        }
      },
      "CHE": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "",
          "sufix": " €",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "CHW": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "ZMW": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "ZK ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "COU": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "MXV": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "BOV": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "Bs. ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,00",
          "numericInput": true
        }
      },
      "CLF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ",",
          "groupSeparator": ".",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 4,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0,0000",
          "numericInput": true
        }
      },
      "USN": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "$ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      },
      "LUF": {
        "RULE": {
          "alias": "decimal",
          "digitsOptional": false,
          "prefix": "₣ ",
          "sufix": "",
          "radixPoint": ".",
          "groupSeparator": ",",
          "groupSize": 3,
          "autoGroup": true,
          "digits": 2,
          "rightAlign": true,
          "allowMinus": true,
          "removeMaskOnSubmit": true,
          "clearMaskOnLostFocus": true,
          "showMaskOnFocus": false,
          "showMaskOnHover": false,
          "min": -9223372036854776000,
          "max": 9223372036854776000,
          "affinity": "+",
          "placeholder": "0.00",
          "numericInput": true
        }
      }
    },
    "MASK": {
      "FONE": {
        "mask": "(&{2}) @{0,1}§{4}-§{4}", 
        "clearIncomplete": true,
        "definitions": {
          "&": {
            "validator": "[1-9]"
          },
          "§": {
            "validator": "[0-9]"
          },
          "@": {
            "validator": "[9]"
          }
        } 
      },
      "FONE_FIXO": {
        "mask": "#{4}-§{3}-§{4}",
        "clearIncomplete": true,
        "definitions": {
          "§": {
            "validator": "[0-9]"
          },
          "#": {
            "validator": "[0300|0500|0800|0900]"
          }
        }
      },
      "FONES": {
        "mask": ["#{4}-§{3}-§{4}","(&{2}) @{0,1}§{4}-§{4}"],
        "clearIncomplete": true,
        "definitions": {
          "&": {
            "validator": "[1-9]"
          },
          "§": {
            "validator": "[0-9]"
          },
          "@": {
            "validator": "[9]"
          },
          "#": {
            "validator": "[0300|0500|0800|0900]"
          }
        }
      },
      "FONES_REGEX": {
        "regex": "^(\\+55 \\([0-9]{2}\\) (([7][0|7|8|9])|([2|3|4|5][0-9])|([7|8|9][0-9]{2}))[0-9]{2}-[0-9]{4})$",
        "clearIncomplete": true
      },
      "PLACA_VEICULAR": {
        "mask": "#{3}-§{4}",
        "clearIncomplete": true,
        "definitions": {
          "#": {
            "validator": "[a-z]|[A-Z]",
            "casing": "upper"
          },
          "§": {
            "validator": "[0-9]"
          }
        }
      },
      "CHASSI_VEICULAR": {
        "mask": "#{2}.#{2}.#{5}.#{1}.#{1}.#{5}",
        "clearIncomplete": true,
        "definitions": {
          "#": {
            "validator": "[a-z]|[A-Z]",
            "casing": "upper"
          }
        }
      },
      "ISBN": {
        "mask": "#{3}-#{2}-#{3}-#{4}-#{1}",
        "clearIncomplete": true,
        "definitions": {
          "#": {
            "validator": "[0-9]"
          }
        }
      },
      "CEP": {
        "mask": "§{2}.§{3}-§{3}",
        "clearIncomplete": true,
        "definitions": {
          "§": {
            "validator": "[0-9]"
          }
        }
      },
      "CPF": {
        "mask": "§{3}.§{3}.§{3}-§{2}",
        "clearIncomplete": true,
        "definitions": {
          "§": {
              "validator": "[0-9]"
          }
        },
        "oncomplete": function(event) {
          if (event.target.hasAttribute("x-valid") && event.target.getAttribute("x-valid") == "true") {
            // Validação Embutida
            if(!App.EXT.Validate.CPF(event.target.value)) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }
        }
      },
      "CNPJ": {
        "mask": "§{2}.§{3}.§{3}/§{4}-§{2}",
        "clearIncomplete": true,
        "definitions": {
          "§": {
              "validator": "[0-9]"
          }
        },
        "oncomplete": function(event) {
          if (event.target.hasAttribute("x-valid") && event.target.getAttribute("x-valid") == "true") {
            // Validação Embutida
            if(!App.EXT.Validate.CNPJ(event.target.value)) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }
        }
      },
      "CPF_CNPJ": {
        "mask": ["§{3}.§{3}.§{3}-§{2}","§{2}.§{3}.§{3}/§{4}-§{2}"],
        "clearIncomplete": true,
        "definitions": {
          "§": {
            "validator": "[0-9]"
          }
        }
      },
      "DATA_BR": {
        "alias": "datetime",
        "clearIncomplete": true,
        "inputFormat": "dd/mm/yyyy", 
        "placeholder": "DD/MM/AAAA",
        "jitMasking": true
      },
      "DATA_BR_REGEX": {
        "regex": "^(((0[1-9]|[12][0-9]|3[01])/(0[13578]|1[02])/(([0-9][0-9]|[2-9][0-9])[0-9]{2}))|((0[1-9]|[12][0-9]|30)/(0[13456789]|1[012])/((19|[2-9][0-9])[0-9]{2}))|((0[1-9]|1[0-9]|2[0-8])/[0-9][0-9]/(([0-9][0-9]|[2-9][0-9])[0-9]{2}))|([0-9][0-9]/[0-9][0-9]/((1[6-9]|[2-9][0-9])(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$",
        "clearIncomplete": true,
        "placeholder": "DD/MM/AAAA",
        "jitMasking": true
      },
      "DATA_ISO": {
        "alias": "datetime",
        "clearIncomplete": true,
        "inputFormat": "isoDate",
        "placeholder": "YYYY-MM-DD",
        "jitMasking": true
      },
      "DATA_ISO_REGEX": {
        "regex": "^[0-9]{4}-(0[1-9]|1[012])-([0][1-9]|[12][0-9]|3[01])$",
        "clearIncomplete": true,
        "placeholder": "YYYY-MM-DD",
        "jitMasking": true
      },
      "HORA": {
        "alias": "datetime",
        "clearIncomplete": true,
        "inputFormat": "isoTime", 
        "placeholder": "HH:MM:SS",
        "jitMasking": true
      },
      "HORA_12H": {
        "mask": "12:59:59",
        "clearIncomplete": true,
        "placeholder": "HH:MM:SS",
        "definitions": {
          "1" : {
            "validator": "[0-1]"
          },
          "2" : {
            "validator": "[0-2]"
          },
          "5": {
            "validator": "[0-5]"
          }
        },
        "jitMasking": true
      },
      "HORA_24H": {
        "mask": "23:59:59",
        "clearIncomplete": true,
        "placeholder": "HH:MM:SS",
        "definitions": {
          "2" : {
            "validator": "[0-2]"
          },
          "3" : {
            "validator": "[0-3]"
          },
          "5": {
            "validator": "[0-5]"
          }
        },
        "jitMasking": true
      },
      "HORA_12H_REGEX": {
        "regex": "^(0[0-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]$", 
        "clearIncomplete": true,
        "placeholder": "HH:MM:SS",
        "jitMasking": true
      },
      "HORA_24H_REGEX": {
        "regex": "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$", 
        "clearIncomplete": true,
        "placeholder": "HH:MM:SS",
        "jitMasking": true
      },
      "DATA_HORA_BR": {
        "mask": {
          "alias": "datetime",
          "clearIncomplete": true,
          "inputFormat": "dd/mm/yyyy HH:MM:ss",
          "jitMasking": true
        },
        "placeholder": "DD/MM/AAAA HH:MM:SS"
      },
      "DATA_HORA_ISO": {
        "mask": {
          "alias": "datetime",
          "clearIncomplete": true,
          "inputFormat": "yyyy-mm-dd HH:MM:ss",
          "jitMasking": true
        },
        "placeholder": "YYYY-MM-DD HH:MM:SS"
      }
    }
  },
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

/*!
* __FILE__ and __DIR__ in JavaScript
* Anonymous Function for Define __FILE__ and __DIR__
* https://gist.github.com/adamasantares/04cf84e3a99326a4d73f
* Copyright (c) 2009 Konstantin Kutsevalov
*/
(function(w,d){
  var u=null;
  w.__FILE__=(function(){
    try{u();}catch(err){
      if(err.stack){
        u=(/(http[s]?:\/\/.*):\d+:\d+/m).exec(err.stack);
        if(u&&u.length>1){ return u[1]; }
      }
      u = (d.scripts.length>0) ? d.scripts[d.scripts.length-1].src : "";
      if (u.length > 0 && u.indexOf("://") < 0 && u.substring(0,1) != "/" ){
        u = location.protocol + "//" + location.host + "/" + u;
      }
      return u;
    }
  })();
  w.__DIR__=(function(f){
    f=(/^(.*\/)[a-z0-9 -_]+\.[a-z]+$/i).exec(f);
    return (f&&f.length>1)?f[1]:"";
  })(w.__FILE__);
})(window, document);

var __ROOT__ = App.EXT.URL.Domain(document.URL),
    __STYLE__ = App.EXT.URL.Parse(__FILE__).queryString.style || 'true',
    __DEBUG__ = App.EXT.URL.Parse(__FILE__).queryString.debug;

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
* Load Style/Script Inline for IE
* Dynamic SCRIPT and STYLE elements in IE
* https://www.phpied.com/dynamic-script-and-style-elements-in-ie/
* Copyright (c) 2007 Stoyan Stefanov
*/
(function(){
  if(__STYLE__ === undefined || __STYLE__ == 'true') {
    if ( ( ua.browser.name === 'IE' ) && ( ua.browser.version < 10) ) {
      var _style = document.createElement('style');
      var _rules = App.EXT.CSS;
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
  }
})();

(function() {

  //Função Pseudo-Privada para ser Usada Apenas com a Finalidade de Instanciar o Componente
  _xInput = function(that, ua) {

    if(__STYLE__ === undefined || __STYLE__ == 'true') {
      // Valido se o Navegador Possui Suporte a Templates
      if ( ( 'content' in document.createElement('template') ) && ( ( ua.browser.name !== 'IE' ) || ( ua.browser.name === 'IE' && ua.browser.version >= 10) ) ) {
        // Define a Estilização via Javascript
        var template = document.createElement('template');
        template.innerHTML = "<style>" + App.EXT.CSS + "</style>";
        // Aplica a Estilização
        that.appendChild(template.content.cloneNode(true));
      }
    }

    /* Apaga ao Deixar o Campo Incompleto */
    Inputmask.extendDefaults({
      "clearIncomplete": true, 
      "autoUnmask": true, 
      "showMaskOnFocus": false, 
      "showMaskOnHover": false
    });
    /* Inicia o Componente */
    if (that.hasAttribute('x-type') && that.getAttribute('x-type') != '') {

      // Obtém o Atributo x-type e Define as Regras de Validação
      var x_type = that.getAttribute('x-type').toUpperCase(), Rule = undefined;

      switch(x_type.toLowerCase()) {
        case 'zerofillint': // Zero-Fill Signed Int (De -9223372036854776000 à 9223372036854776000) // Alias para Signed BigInt com Zero-Fill, Negativo & Positivo
        case 'positiveint': // Unsigned Int (De 0 à 18446744073709552000) // Alias para Unsigned BigInt, Apenas Positivo
        case 'negativeint': // Negative Int (De -9223372036854776000 à 0) // Ailas para Negative BigInt, Apenas Negativo
        case 'percentint': // Signed Percentage Int (De -100 à 100) // Negativo & Positivo
        case 'smallint': // Signed SmallInt (De -32767 à 32767) // Negativo & Positivo
        case 'mediumint': // Signed MediumInt (De -8388607 à 8388607) // Negativo & Positivo
        case 'integer': // Signed Integer (De –2147483647 à 2147483647) // Negativo & Positivo
        case 'bigint': // Signed BigInt (De -9223372036854776000 à 9223372036854776000) // Negativo & Positivo

          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.NUMBER[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Armazenamento do Objeto Principal
          var $that = that, 
              // Define Timer dos Inputs
              Timeout = undefined, 
              // Obtém o Template de Configuração
              Template = App.EXT.JSON.Template(App.DEFAULT.NUMBER.PATTERN),
              // Carrega as Regras Padrão do Tipo do Componente
              DEFAULT = Template(Rule.RULE);

          // Matriz Única do Elemento
          window.data(that).input = [];

          // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
          var Config = {
            "Rule": {
              "alias": DEFAULT.RULE.alias, /*decimal*/
              "numericInput": DEFAULT.RULE.numericInput, /*false*/
              "digitsOptional": DEFAULT.RULE.digitsOptional,
              "prefix": (!that.hasAttribute('x-prefix') && that.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : that.getAttribute('x-prefix'),
              "sufix": (!that.hasAttribute('x-sufix') && that.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : that.getAttribute('x-sufix'),
              "radixPoint": Rule.RULE.radixPoint,
              "groupSeparator": Rule.RULE.groupSeparator,
              "groupSize": Rule.RULE.groupSize,
              "autoGroup": DEFAULT.RULE.autoGroup, /*true*/
              "digits": DEFAULT.RULE.digits,
              "rightAlign": (!that.hasAttribute('x-dir') && that.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((that.getAttribute('x-dir') == 'ltr') ? false : true),
              "allowMinus": (!that.hasAttribute('x-negative') && that.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((that.getAttribute('x-negative') == 'true') ? true : false),
              "removeMaskOnSubmit": (!that.hasAttribute('x-onsubmit') && that.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((that.getAttribute('x-onsubmit') == 'true') ? true : false), /*true*/
              "clearMaskOnLostFocus": (!that.hasAttribute('x-onfocusout') && that.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((that.getAttribute('x-onfocusout') == 'true') ? true : false), /*true*/
              "showMaskOnFocus": (!that.hasAttribute('x-onfocusin') && that.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((that.getAttribute('x-onfocusin') == 'true') ? true : false), /*false*/
              "showMaskOnHover": (!that.hasAttribute('x-onhover') && that.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((that.getAttribute('x-onhover') == 'true') ? true : false), /*false*/
              "min": (!that.hasAttribute('x-min') && that.getAttribute('x-min') != '') ? Rule.RULE.min : that.getAttribute('x-min'),
              "max": (!that.hasAttribute('x-max') && that.getAttribute('x-max') != '') ? Rule.RULE.max : that.getAttribute('x-max'),
              "oncleared": function(event) { event.target.value = ''; window.data(that).input = []; },
              "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
              "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } }
            },
            "affinity": (!that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : that.getAttribute('x-affinity'), /*+*/
            "placeholder": (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : that.getAttribute('placeholder')
          };

          /*
           * Principais Atributos Públicos dos Tipos: [positiveint, negativeint, smallint, mediumint, integer, bigint]
           * @property x-dir=Opts(['ltr'|'rtl']) String
           * @property x-min=[-9-0-9]{1,n} String
           * @property x-max=[-9-0-9]{1,n} String
           * @property x-prefix=[*]{1,n} String
           * @property x-sufix=[*]{1,n} String
           * @property x-negative=[Boolean] String
           * @property x-affinity=Opts([''|'-'|'+']) String
          */

          var Config_Symbol = '', 
              Placeholder = '',
              Event = {},
              Maxlength = 0,
              PositiveValue = 0;

          // Se Existe Valor, Verifica é Positivo ou Negativo
          if (that.value !== '') {
            PositiveValue = (that.value > 0) ? true : false;
            // Para os x-type="positivedec" e x-type="negativedec"
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') ) {
               // Apenas Positivo
               if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') {
                 // Aplica a Flag para Valores Unsigned
                 if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                   that.setAttribute('x-case', 'signed');
              }
              // Apenas Negativo
              if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') {
                // Remove a Flag para Valores Negativos
                if (that.hasAttribute('x-case'))
                  that.removeAttribute('x-case');
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Verifica se Pode Ser Negativo
                if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
                  Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                  if (!that.hasAttribute('x-negative'))
                    that.setAttribute('x-negative', 'true');
                }
              }
            }
            else {
              // Aplica a Flag para Valores Signed
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
              Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
            }

            var act_value = new BigNumber(that.value),
                max_value = new BigNumber(Config.Rule.max.toString());

            // Corrige o Valor
            that.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

            /* Alimenta a Matriz de Caracteres do Componente */
            for (var i=0; i < that.value.length; i++) {
              if(App.EXT.Validate.isNumber(that.value.charAt(i))) {
                window.data(that).input.push(that.value.charAt(i));
              }
            }

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

            // Atribue os Valores
            that.removeAttribute('value');
            that.setAttribute('x-value', App.EXT.Format.toBigMoney(that.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
            that.value = that.getAttribute('x-value');
            that.setAttribute('x-mode', 'overwritable');
            that.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
            that.setAttribute('maxlength', Maxlength);
            that.setAttribute('x-limit', Number(that.getAttribute('maxlength')) - that.value.length);
          }
          // Se Não Existir Valor
          else {
            /*
             * Verifica se Pode Ser Signed
             */
            if  ( 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'smallint') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mediumint') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'integer') || 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bigint') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint') 
                ) {
              // Aplica a Flag para Valores Unsigned
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
            }
            else {
              /* Para os x-type="positive" e x-type="negative" */
              if (
                   (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') || 
                   (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') 
                 ) {
                 /* Apenas Positivo */
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positiveint') {
                   // Aplica a Flag para Valores Unsigned
                   if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                     that.setAttribute('x-case', 'unsigned');
                 }
                 /* Apenas Negativo */
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') {
                   // Remove a Flag para Valores Negativos
                   if (that.hasAttribute('x-case'))
                     that.removeAttribute('x-case');
                   if (!that.hasAttribute('x-negative'))
                     that.setAttribute('x-negative', 'true');
                 }
              }
              /* Para os Tipos Signed: x-type="smallint", x-type="mediumint", x-type="integer"  x-type="bigint" */
              else {
                // Aplica a Flag para Valores Signed
                if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                  that.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (that.getAttribute('x-case') == 'signed') {
                  if (!that.hasAttribute('x-affinity'))
                    that.setAttribute('x-affinity', Config.affinity);
                }
              }
            }
            // Verifica se Pode Ser Negativo
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativeint') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
              if (that.getAttribute('x-type') == 'negativeint') {
                Config_Symbol = '-';
              }
              else {
                if (that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') == '+')
                  Config_Symbol = '';
                else
                  Config_Symbol = '-';
              }
              Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
            }

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Config.Rule).mask(that);

            // Define o Atributo x-mode como insertable
            that.setAttribute('x-mode', 'insertable');
          }

          // Atribue o placeholder apenas para o x-type="zerofillint"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
            Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.sufix;
          // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofillint"
          else
            Placeholder = Config.Rule.prefix + Config_Symbol + Config.placeholder + Config.Rule.sufix;

          // Define o Atributo placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '')
            that.setAttribute('placeholder', Placeholder);

          // Atribue o maxlength apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofillint')
            Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
          // Define o Atributo maxlength
          else
            Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

          // Define o Atributo maxlength
          if (!that.hasAttribute('maxlength') && that.getAttribute('maxlength') != '')
            that.setAttribute('maxlength', Maxlength);

          // Define o Atributo x-limit
          if (!that.hasAttribute('x-limit') && that.getAttribute('x-limit') != '')
            that.setAttribute('x-limit', that.getAttribute('maxlength'));

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          /*
           * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
           * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
           * https://github.com/google/material-design-lite/issues/243
           * https://codepen.io/surma/pen/JXdEqe
           */
          if(that.classList.contains('mdl-textfield__input')) {
            setTimeout(function(){
              App.EXT.Class.Remove($that.parentElement, 'has-placeholder');
              App.EXT.Class.Add($that.parentElement, 'has-placeholder');
            }, 500);
          }

          // Posiciona o Cursor no Final no Valor
          App.EXT.Caret.toEnd(that);

          if (that.value === '') 
            that.setAttribute('x-value', Placeholder);

          // Reseta a Máscara
          if (that.inputmask)
            that.inputmask.remove();

          // Determina os Eventos
          Event = App.EXT.Event.Discover(ua);

          /* 
           * Actions/Events do Inputs
           */
          var Action = {
            "EraseInput":function(event, _kc) {
              var kc = event.keyCode || event.which,
                  key = event.data || event.key,
                  it = event.inputType || event.type,
                  kl = Number(event.target.getAttribute('x-limit'));

              if (it == 'deleteContentBackward') {
                kc = 8;
              }
              if (it == 'insertCompositionText') {
                kc = 0;
              }

              if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) 
                if (_kc !== undefined)
                  kc = _kc;

              if (kc !== undefined || kc !== 229) {
                // Ação de Excluir com BackSpace
                if(kc == 8 && kl <= Number(event.target.getAttribute('maxlength'))) {
                  event.preventDefault();
                  var sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                      orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? event.target.value : event.target.getAttribute('x-value'),
                      temp_value = App.EXT.Format.toBigNumber(orig_value.replace(/\D/g, '').slice(0, -1) || 0, Config.Rule.digits),
                      regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                    var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(temp_value, Config.Rule.max.toString().length) + Config.Rule.sufix,
                        zero_value = Config.Rule.prefix + sign_value + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.sufix;
                  }
                  else {
                    var work_value = App.EXT.Format.toBigMoney(temp_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                        zero_value = Config.Rule.prefix + sign_value + "0" + Config.Rule.radixPoint + "0".repeat(Config.Rule.digits) + Config.Rule.sufix;
                  }

                  if (work_value.replace(regex,'') != zero_value.replace(regex,'')) {
                    event.target.value = work_value;
                    window.data(event.target).input = [];
                    for (var i=0; i < event.target.value.length; i++) {
                      if(App.EXT.Validate.isNumber(event.target.value.charAt(i))) {
                        window.data(event.target).input.push(event.target.value.charAt(i));
                      }
                    }
                    if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                      setTimeout(function(){
                        App.EXT.Caret.SetPosition(event.target, 10000);
                      }, 0);
                    }
                  }
                  else {
                    window.data(event.target).input = [];
                    event.target.value = '';
                    event.target.setAttribute('x-value', '');

                    if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                      event.target.removeAttribute('x-signal');
                  }

                  // Atualiza o Atributo x-value
                  event.target.setAttribute('x-value', event.target.value);

                  // Remove Zeros à Esquerda e o Sinal de Número Negativo
                  var only_value = (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') ? event.target.value.replace(/[^1-9.\\]+\W?0+/, '') : only_value = event.target.value.replace(regex,'');

                  // Atualiza o Atributo x-limit
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0));

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                }
                // Ação Para Apagar com Delete
                if(kc == 46) {
                  event.preventDefault();
                  // Limpa a Matriz Global do Campo
                  window.data(event.target).input = [];

                  // Limpa o Valor e o Valor Temporário
                  event.target.value = '';
                  event.target.setAttribute('x-value', '');

                  // Reseta o Atributo x-limit
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')));

                  if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                    event.target.removeAttribute('x-signal');
                  return false;
                }
                return false;
              }
            },
            "SubmitInput":function() {
              try {
                var sign_value = ($that.hasAttribute('x-signal') && $that.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                if ($that.hasAttribute('x-type') && $that.getAttribute('x-type') == 'zerofillint') {
                  var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                      zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
                else {
                  var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits),
                      zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
              }
              catch(err) {
                console.log(err.message);
              };
            },
            "WriteInput":function(event) {
              // Hack para Obtenção do KeyCode ou Which 
              var kc = event.which || event.keyCode,
                  key = event.data || event.key,
                  kl = Number(event.target.getAttribute('x-limit'));

              if (Event.Write === 'textInput') {
                kc = event.data.charCodeAt(0);
              }
              // Reativa as Teclas Atalhos Padrão
              App.EXT.Event.BindKeys(event, kc, Action);
              // Para Digitação do Sinal de [-]
              if (kc == 45) {
                event.preventDefault();
                if (event.target.value != '') {
                  // Para Quando o Campo for Negativo e Houver o Atributo x-case Definido como signed
                  if (event.target.hasAttribute('x-case') && event.target.getAttribute('x-case') == 'signed') {
                    // Se Houver o Sinal o Remove
                    if (event.target.getAttribute('x-value').indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) {
                      event.target.setAttribute('x-signal', 'removed');
                      if(Timeout) {
                          clearTimeout(Timeout);
                          Timeout = null;
                        }
                        Timeout = setTimeout(function(){
                        Config_Symbol = App.DEFAULT.SYMBOL.POSITIVE; // Reatribue a Variável pra não Embassar
                        var regex = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');
                        event.target.setAttribute('x-value', event.target.value.replace(regex,''));
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }
                    // Se não Houver o Sinal o Adiciona
                    else {
                      event.target.removeAttribute('x-signal');
                      if(Timeout) {
                          clearTimeout(Timeout);
                          Timeout = null;
                        }
                        Timeout = setTimeout(function(){
                        Config_Symbol = App.DEFAULT.SYMBOL.NEGATIVE; // Reatribue a Variável pra não Embassar
                        var regex = new RegExp("\\" + Config.Rule.prefix.trim() + "\\s*"),
                            value = event.target.getAttribute('x-value').replace(Config.Rule.prefix, '');
                        event.target.setAttribute('x-value', Config.Rule.prefix + App.DEFAULT.SYMBOL.NEGATIVE + value);
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }
                  }
                  // Para Quando o Campo for Negativo e o Atributo x-case não esteja Definido como signed
                  else {
                    setTimeout(function(){
                      event.target.setAttribute('x-value', event.target.getAttribute('x-value'));
                      event.target.value = event.target.getAttribute('x-value');
                    }, 0);
                  }

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    setTimeout(function(){
                      // Reposiciona o Cursor ao Final do Valor do Elemento
                      App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                    }, 0);
                  }
                }
                return;
              }
              // Bloqueia Todas as Tecla Não-Numéricas ou Enquanto Houver Limite
              else if (kc != 45 && (kc < 48 || kc > 57) || kl <= 0) {
                event.preventDefault();
                return;
              }
              // Permite Apenas as Tecla Numéricas ou Até Zerar o Limite
              else {
                setTimeout(function(){
                  // Condição para Quando Está Vazio e Pressionar a Tecla [-]
                  if (event.target.value.length <= 1 && key == App.DEFAULT.SYMBOL.NEGATIVE) {
                    event.target.setAttribute('x-value', '');
                    event.target.value = event.target.getAttribute('x-value');
                  }
                  // Condição para Quaquer Tecla Numérica
                  else {
                    // Para Digitação Apenas de Números
                    if(App.EXT.Validate.isNumber(key)) {
                      var act_value = new BigNumber(App.EXT.Format.toDecimal(event.target.value.replace(/\D/g, ''), Config.Rule.digits)),
                          max_value = new BigNumber(Config.Rule.max.toString()),
                          sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                          regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                      // Enquanto for Menor que o Máximo Permitido
                      if (act_value.isLessThan(max_value)) {

                        window.data(event.target).input.push(key);

                        // Posiciona o Cursor ao Final do Valor do Elemento
                        App.EXT.Caret.SetPosition(event.target, 10000);

                        var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric((event.target.getAttribute('x-value') || '0')) + '' + Number(key), Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                        if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint') {
                          var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                              only_value = work_value.replace(/[^1-9.\\]+\W?0+/, '').replace(/^\-?0+/, '').replace(regex,'');
                        }
                        else {
                          var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                              only_value = work_value.replace(regex, '').replace(regex,'');
                        }

                        event.target.setAttribute('x-value', '');
                        event.target.setAttribute('x-value', work_value);

                        event.target.value = '';
                        event.target.value = event.target.getAttribute('x-value');

                        // Atualiza o Atributo x-liimt
                        event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0) + 1);

                        // Verifica se há Sufixo
                        if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                          // Reposiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                        }
                      }
                      // Se Atingir o Máximo Permitido
                      else {

                        if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                          var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                        else
                          var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                        event.target.setAttribute('x-value', work_value);
                        event.target.value = event.target.getAttribute('x-value');

                        // Verifica se há Sufixo
                        if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                          // Reposiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                        }
                        // Zera o Atributo x-value
                        event.target.setAttribute('x-limit', 0);
                      }
                    }
                  }
                }, 0);
                return false;
              }
            },
            "PasteInput":function(event) {
              event.stopPropagation();
              event.preventDefault();

              var clipboardData = event.clipboardData || window.clipboardData,
                  pasted_value = clipboardData.getData('Text') || clipboardData.getData('text/plain'),
                  number_value = pasted_value.replace(/\D/g, '');

              window.data(event.target).input = [];
              for (var i=0; i < number_value.length; i++) {
                if(App.EXT.Validate.isNumber(number_value.charAt(i))) {
                  window.data(event.target).input.push(number_value.charAt(i));
                }
              }

              var act_value = new BigNumber(App.EXT.Format.toDecimal(number_value, Config.Rule.digits)),
                  max_value = new BigNumber(Config.Rule.max.toString()),
                  sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;

              // Enquanto for Menor que o Máximo Permitido
              if (act_value.isLessThanOrEqualTo(max_value)) {

                // Posiciona o Cursor ao Final do Valor do Elemento
                App.EXT.Caret.SetPosition(event.target, 10000);

                var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(number_value, Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                  var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix;
                else
                  var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                event.target.setAttribute('x-value', '');
                event.target.setAttribute('x-value', work_value);

                event.target.value = '';
                event.target.value = event.target.getAttribute('x-value');

                // Atualiza o Atributo x-liimt
                event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - work_value.length - sign_value);

                // Verifica se há Sufixo
                if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                  // Reposiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                }
              }
              // Se Atingir o Máximo Permitido
              else {

                if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofillint')
                  var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                else
                  var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                event.target.setAttribute('x-value', work_value);
                event.target.value = event.target.getAttribute('x-value');

                // Verifica se há Sufixo
                if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                  // Reposiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                }
                // Zera o Atributo x-value
                event.target.setAttribute('x-limit', 0);
              }
            }
          };

          /* 
           * Evento Para Conversão de Números Colados no Input
           */
          App.EXT.Event.Add(that, [Event.Paste], function(event){
            Action.PasteInput(event)
          }, false);

          /* 
           * Evento Para Inclusão de Números ao Input
           */
          App.EXT.Event.Add(that, [Event.Write], function(event){
            Action.WriteInput(event);
          }, false);

          /* 
           * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
           * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
           */
          App.EXT.Event.Add(that, [Event.Erase], function(event){
            if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) {
              var before_value = new App.EXT.Event.Watch(event.target, 'x-value'),
                  after_value = new App.EXT.Event.Watch(event.target, 'value'),
                  before_number = new BigNumber(App.EXT.Format.toDecimal(before_value.get().replace(/\D/g, ''), Config.Rule.digits)),
                  after_number = new BigNumber(App.EXT.Format.toDecimal(after_value.get().replace(/\D/g, ''), Config.Rule.digits));
              if (after_number.isLessThan(before_number)) {
                Action.EraseInput(event, 8);
              }
            }
            else {
              Action.EraseInput(event);
            }
          }, false);

          /* 
           * Evento Genérico para Converte para Decimal os Campos ao Submeter
           */
          App.EXT.Event.Add(that.form, [Event.Submit], function(event){
            Action.SubmitInput();
          }, false);
        break;
        case 'zerofilldec': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Zero-Fill Signed Dec (De -9223372036854776000.00 à 9223372036854776000.00) 
        case 'positivedec': // Decimal Genérico Equivalente ao MySQL Decimal(18,2) Sem prefixo (De 0 à 18446744073709552000.00) 
        case 'negativedec': // Decimal Genérico Equivalente ao MySQL Decimal(18,2) Sem prefixo (De -9223372036854776000.00 à 0) 
        case 'percentdec': // Decimal Genérico Equivalente ao MySQL Decimal(3,2) Com Sufixo [%] (De -100.00 à 100.00)
        case 'decimal': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Porém no Padrão Nacional Sem prefixo (De -9223372036854776000.00 à 9223372036854776000.00) 
        case 'currency': // Decimal Genérico Equivalente ao MySQL Decimal(20,2) Sem prefixo (De -9223372036854776000.00 à 9223372036854776000.00) 
        case 'aed':
        case 'afn':
        case 'all':
        case 'amd':
        case 'ang':
        case 'aoa':
        case 'ars':
        case 'aud':
        case 'awg':
        case 'azn':
        case 'bam':
        case 'bbd':
        case 'bdt':
        case 'bgn':
        case 'bhd':
        case 'bif':
        case 'bmd':
        case 'bnd':
        case 'bob':
        case 'bov':
        case 'brl':
        case 'bsd':
        case 'btn':
        case 'bwp':
        case 'byn':
        case 'byr':
        case 'bzd':
        case 'cad':
        case 'cdf':
        case 'che':
        case 'chf':
        case 'chw':
        case 'clf':
        case 'clp':
        case 'cny':
        case 'cop':
        case 'cou':
        case 'crc':
        case 'cuc':
        case 'cup':
        case 'cve':
        case 'czk':
        case 'djf':
        case 'dkk':
        case 'dop':
        case 'dzd':
        case 'eek':
        case 'egp':
        case 'ern':
        case 'etb':
        case 'eur':
        case 'fjd':
        case 'fkp':
        case 'gbp':
        case 'gel':
        case 'ghs':
        case 'gip':
        case 'gmd':
        case 'gnf':
        case 'gtq':
        case 'gwp':
        case 'gyd':
        case 'hkd':
        case 'hnl':
        case 'hrk':
        case 'htg':
        case 'huf':
        case 'idr':
        case 'ils':
        case 'inr':
        case 'iqd':
        case 'irr':
        case 'isk':
        case 'jmd':
        case 'jod':
        case 'jpy':
        case 'kes':
        case 'kgs':
        case 'khr':
        case 'kmf':
        case 'kpw':
        case 'krw':
        case 'kwd':
        case 'kyd':
        case 'kzt':
        case 'lak':
        case 'lbp':
        case 'lkr':
        case 'lrd':
        case 'lsl':
        case 'ltl':
        case 'luf':
        case 'lvl':
        case 'lyd':
        case 'mad':
        case 'mdl':
        case 'mga':
        case 'mkd':
        case 'mmk':
        case 'mnt':
        case 'mop':
        case 'mro':
        case 'mur':
        case 'mvr':
        case 'mwk':
        case 'mxn':
        case 'mxv':
        case 'myr':
        case 'mzn':
        case 'nad':
        case 'ngn':
        case 'nio':
        case 'nok':
        case 'npr':
        case 'nzd':
        case 'omr':
        case 'pab':
        case 'pen':
        case 'pgk':
        case 'php':
        case 'pkr':
        case 'pln':
        case 'pyg':
        case 'qar':
        case 'ron':
        case 'rsd':
        case 'rub':
        case 'rwf':
        case 'sar':
        case 'sbd':
        case 'scr':
        case 'sdg':
        case 'sek':
        case 'sgd':
        case 'shp':
        case 'sll':
        case 'sos':
        case 'srd':
        case 'ssp':
        case 'std':
        case 'svc':
        case 'syp':
        case 'szl':
        case 'thb':
        case 'tjs':
        case 'tmt':
        case 'tnd':
        case 'top':
        case 'try':
        case 'ttd':
        case 'twd':
        case 'tzs':
        case 'uah':
        case 'ugx':
        case 'usd':
        case 'usn':
        case 'uyi':
        case 'uyu':
        case 'uzs':
        case 'vef':
        case 'vnd':
        case 'vuv':
        case 'wst':
        case 'xaf':
        case 'xcd':
        case 'xof':
        case 'xpf':
        case 'yer':
        case 'zar':
        case 'zmk':
        case 'zmw':
        case 'zwl':

          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.DECIMAL[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Armazenamento do Objeto Principal
          var $that = that, 
              // Define Timer dos Inputs
              Timeout = undefined, 
              // Obtém o Template de Configuração
              Template = App.EXT.JSON.Template(App.DEFAULT.DECIMAL.PATTERN),
              // Carrega as Regras Padrão do Tipo do Componente
              DEFAULT = Template(Rule.RULE);

          // Matriz Única do Elemento
          window.data(that).input = [];

          // Reconstrói as Regras de acordo com o Padrão do Tipo ou com Atributos Customizados se Houver
          var Config = {
            "Rule": {
              "alias": DEFAULT.RULE.alias, /*decimal*/
              "numericInput": DEFAULT.RULE.numericInput, /*true*/
              "digitsOptional": DEFAULT.RULE.digitsOptional,
              "prefix": (!that.hasAttribute('x-prefix') && that.getAttribute('x-prefix') != '') ? Rule.RULE.prefix : that.getAttribute('x-prefix'),
              "sufix": (!that.hasAttribute('x-sufix') && that.getAttribute('x-sufix') != '') ? Rule.RULE.sufix : that.getAttribute('x-sufix'),
              "radixPoint": (!that.hasAttribute('x-decimal-char') && that.getAttribute('x-decimal-char') != '') ? Rule.RULE.radixPoint : that.getAttribute('x-decimal-char'),
              "groupSeparator": (!that.hasAttribute('x-thousands-char') && that.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSeparator : that.getAttribute('x-thousands-char'),
              "groupSize": (!that.hasAttribute('x-thousands-char') && that.getAttribute('x-thousands-char') != '') ? Rule.RULE.groupSize : that.getAttribute('x-thousands-char'),
              "autoGroup": DEFAULT.RULE.autoGroup, /*true*/
              "digits": (!that.hasAttribute('x-decimal-digits') && that.getAttribute('x-decimal-digits') != '') ? Rule.RULE.digits : that.getAttribute('x-decimal-digits'),
              "rightAlign": (!that.hasAttribute('x-dir') && that.getAttribute('x-dir') != '') ? Rule.RULE.rightAlign : ((that.getAttribute('x-dir') == 'ltr') ? false : true),
              "allowMinus": (!that.hasAttribute('x-negative') && that.getAttribute('x-negative') != '') ? Rule.RULE.allowMinus : ((that.getAttribute('x-negative') == 'true') ? true : false),
              "removeMaskOnSubmit": (!that.hasAttribute('x-onsubmit') && that.getAttribute('x-onsubmit') != '') ? DEFAULT.RULE.removeMaskOnSubmit : ((that.getAttribute('x-onsubmit') == 'true') ? true : false), /*true*/
              "clearMaskOnLostFocus": (!that.hasAttribute('x-onfocusout') && that.getAttribute('x-onfocusout') != '') ? DEFAULT.RULE.clearMaskOnLostFocus : ((that.getAttribute('x-onfocusout') == 'true') ? true : false), /*true*/
              "showMaskOnFocus": (!that.hasAttribute('x-onfocusin') && that.getAttribute('x-onfocusin') != '') ? DEFAULT.RULE.showMaskOnFocus : ((that.getAttribute('x-onfocusin') == 'true') ? true : false), /*false*/
              "showMaskOnHover": (!that.hasAttribute('x-onhover') && that.getAttribute('x-onhover') != '') ? DEFAULT.RULE.showMaskOnHover : ((that.getAttribute('x-onhover') == 'true') ? true : false), /*false*/
              "min": (!that.hasAttribute('x-min') && that.getAttribute('x-min') != '') ? Rule.RULE.min : that.getAttribute('x-min'),
              "max": (!that.hasAttribute('x-max') && that.getAttribute('x-max') != '') ? Rule.RULE.max : that.getAttribute('x-max'),
              "oncleared": function(event) { event.target.value = ''; window.data(that).input = []; },
              "onUnMask": function (value) { if (value.indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) { return (value === '') ? 0 : App.DEFAULT.SYMBOL.NEGATIVE + value.replace(/\D/g, ''); } else { return (value === '') ? 0 : value.replace(/\D/g, ''); } },
              "onKeyDown": function (e, buffer, opts) { if(e.ctrlKey && e.altKey) { e.preventDefault(); } },
              "placeholder": DEFAULT.RULE.placeholder
            },
            "affinity": (!that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') != '') ? Rule.RULE.affinity : that.getAttribute('x-affinity'), /*+*/
            "placeholder": (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') ? Rule.RULE.placeholder : that.getAttribute('placeholder')
          };

          /*
           * Principais Atributos Públicos dos Tipos: [positivedec, negativedec, currency, percentage, etc..]
           * @property x-dir=Opts([ltr|rtl]) String
           * @property x-decimal-digits=[-9-0-9]{1,n} String
           * @property x-decimal-char=[-9-0-9]{1,n} String
           * @property x-thousands-char=[-9-0-9]{1,n} String
           * @property x-min=[-9-0-9]{1,n} String
           * @property x-max=[-9-0-9]{1,n} String
           * @property x-prefix=[*]{1,n} String
           * @property x-sufix=[*]{1,n} String
           * @property x-negative=[Boolean] String
           * @property x-affinity=Opts([''|'-'|'+']) String
           */

          var Config_Symbol = '', 
              Placeholder = '',
              Event = {},
              Maxlength = 0,
              PositiveValue = true;

          // Se Existe Valor, Verifica é Positivo ou Negativo
          if (that.value !== '') {
            PositiveValue = (that.value > 0) ? true : false;
            // Para os x-type="positivedec" e x-type="negativedec"
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') ) {
               // Apenas Positivo
               if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') {
                 // Aplica a Flag para Valores Unsigned
                 if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                   that.setAttribute('x-case', 'signed');
              }
              // Apenas Negativo
              if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') {
                // Remove a Flag para Valores Negativos
                if (that.hasAttribute('x-case'))
                  that.removeAttribute('x-case');
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Verifica se Pode Ser Negativo
                if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
                  Config_Symbol = (App.DEFAULT.SYMBOL.NEGATIVE == Config.Rule.prefix) ? Config_Symbol : App.DEFAULT.SYMBOL.NEGATIVE;
                  if (!that.hasAttribute('x-negative'))
                    that.setAttribute('x-negative', 'true');
                }
              }
            }
            else {
              // Aplica a Flag para Valores Signed
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
              Config_Symbol = PositiveValue == true ? App.DEFAULT.SYMBOL.POSITIVE : App.DEFAULT.SYMBOL.NEGATIVE;
            }

            var act_value = new BigNumber(that.value),
                max_value = new BigNumber(Config.Rule.max.toString());

            // Corrige o Valor
            that.value = (act_value.isGreaterThan(max_value)) ? max_value.toString() : act_value.toString();

            // Alimenta a Matriz de Caracteres do Componente
            for (var i=0; i < that.value.length; i++) {
              if(App.EXT.Validate.isNumber(that.value.charAt(i))) {
                window.data(that).input.push(that.value.charAt(i));
              }
            }

            // Atribue o maxlength apenas para o x-type="zerofilldec"
            if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
              Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config_Symbol.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length;
            // Define o Atributo maxlength
            else
              Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length;

            // Atribue os Valores
            that.removeAttribute('value');
            that.setAttribute('x-value', App.EXT.Format.toBigMoney(that.value, Config.Rule.digits, Config.Rule.prefix + Config_Symbol, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix));
            that.value = that.getAttribute('x-value');
            that.setAttribute('x-mode', 'overwritable');
            that.style.textAlign = Config.Rule.rightAlign == true ? 'right' : 'left';
            that.setAttribute('maxlength', Maxlength);
            that.setAttribute('x-limit', Number(that.getAttribute('maxlength')) - that.value.length);
          }
          // Se Não Existir Valor
          else {
            // Verifica se Pode Ser Signed
            if  ( 
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aed') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'afn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'all') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'amd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ang') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aoa') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ars') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'aud') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'awg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'azn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bam') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bbd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bdt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bgn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bhd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bif') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bob') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bov') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'brl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bsd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'btn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bwp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'byn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'byr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'bzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cdf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'che') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'chf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'chw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'clf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'clp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cny') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cou') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'crc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cuc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cup') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'cve') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'czk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'djf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dkk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'dzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'eek') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'egp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ern') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'etb') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'eur') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'fjd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'fkp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gbp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gel') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ghs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gip') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gnf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gtq') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gwp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'gyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hkd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hnl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'hrk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'htg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'huf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'idr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ils') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'inr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'iqd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'irr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'isk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jmd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jod') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'jpy') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kes') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kgs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'khr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kmf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kpw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'krw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kwd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'kzt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lak') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lbp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lkr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lrd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lsl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ltl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'luf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lvl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'lyd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mdl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mga') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mkd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mmk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mnt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mop') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mro') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mur') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mvr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mwk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mxn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mxv') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'myr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'mzn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nad') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ngn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nio') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nok') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'npr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'nzd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'omr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pab') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pen') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pgk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'php') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pkr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pln') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'pyg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'qar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ron') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rsd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rub') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'rwf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sbd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'scr') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sdg') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sek') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sgd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'shp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sll') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'sos') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'srd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ssp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'std') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'svc') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'syp') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'szl') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'thb') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tjs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tmt') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'top') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'try') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ttd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'twd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'tzs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uah') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'ugx') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'usd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'usn') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uyi') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uyu') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'uzs') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vef') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vnd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'vuv') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'wst') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xaf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xcd') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xof') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'xpf') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'yer') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zar') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zmk') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zmw') ||
                  (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zwl') 
                ) {
              // Aplica a Flag para Valores Unsigned
              if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                that.setAttribute('x-case', 'signed');
              // Valida se é um Signed Negativo
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
              // Valida se Possui Afinidade
              if (that.getAttribute('x-case') == 'signed') {
                if (!that.hasAttribute('x-affinity'))
                  that.setAttribute('x-affinity', Config.affinity);
              }
            }
            else {
              // Para os x-type="positive" e x-type="negative"
              if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') || (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') ) {
                 // Apenas Positivo
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'positivedec') {
                   // Aplica a Flag para Valores Unsigned
                   if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                     that.setAttribute('x-case', 'unsigned');
                 }
                 // Apenas Negativo
                 if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') {
                   // Remove a Flag para Valores Negativos
                   if (that.hasAttribute('x-case'))
                     that.removeAttribute('x-case');
                   if (!that.hasAttribute('x-negative'))
                     that.setAttribute('x-negative', 'true');
                 }
              }
              // Para os Tipos Signed Diferentes de: x-type="positivedec" e x-type="negativedec"
              else {
                // Aplica a Flag para Valores Signed
                if (!that.hasAttribute('x-case') || that.getAttribute('x-case') == 'signed')
                  that.setAttribute('x-case', 'signed');
                // Valida se é um Signed Negativo
                if (!that.hasAttribute('x-negative'))
                  that.setAttribute('x-negative', 'true');
                // Valida se Possui Afinidade
                if (that.getAttribute('x-case') == 'signed') {
                  if (!that.hasAttribute('x-affinity'))
                    that.setAttribute('x-affinity', Config.affinity);
                }
              }
            }
            // Verifica se Pode Ser Negativo
            if ( (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'negativedec') || (that.hasAttribute('x-negative') && that.getAttribute('x-negative') == 'true') ) {
              if (that.getAttribute('x-type') == 'negativedec') {
                Config_Symbol = '-';
              }
              else {
                if (that.hasAttribute('x-affinity') && that.getAttribute('x-affinity') == '+')
                  Config_Symbol = '';
                else
                  Config_Symbol = '-';
              }
              Config_Symbol = ( (Config.Rule.prefix == App.DEFAULT.SYMBOL.NEGATIVE) && (Config_Symbol == App.DEFAULT.SYMBOL.NEGATIVE) ) ? '' : Config_Symbol;
              if (!that.hasAttribute('x-negative'))
                that.setAttribute('x-negative', 'true');
            }

            // Aplica a Máscara ao Elemento
            MaskedInput = Inputmask(Config.Rule).mask(that);

            // Define o Atributo x-mode como insertable
            that.setAttribute('x-mode', 'insertable');
          }

          // Atribue o placeholder apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
            Placeholder = Config.Rule.prefix + Config_Symbol + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;
          // Atribue o placeholder para todos os x-type="*" exceto o x-type="zerofilldec"
          else
            Placeholder = Config.Rule.prefix + Config_Symbol + '0' + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;

          // Define o Atributo placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '')
            that.setAttribute('placeholder', Placeholder);

          // Atribue o maxlength apenas para o x-type="zerofilldec"
          if (that.hasAttribute('x-type') && that.getAttribute('x-type') == 'zerofilldec')
            Maxlength = Config.Rule.max.toString().length + Config.Rule.digits + Config.Rule.prefix.length + Config.Rule.groupSeparator.length + Config.Rule.radixPoint.length + Config.Rule.sufix.length + 1;
          // Define o Atributo maxlength
          else
            Maxlength = App.EXT.Format.toBigMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix).length + 1;

          // Define o Atributo maxlength
          if (!that.hasAttribute('maxlength') && that.getAttribute('maxlength') != '')
            that.setAttribute('maxlength', Maxlength);

          // Define o Atributo x-limit
          if (!that.hasAttribute('x-limit') && that.getAttribute('x-limit') != '')
            that.setAttribute('x-limit', that.getAttribute('maxlength'));

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          /*
           * Para Compatibilidade com MDL v1.1.2+ [Bug do Placeholder no Chrome]
           * Testar Comportamentos da Versão 1.1.1 e da 1.1.2+ no [Chrome e Firefox]
           * https://github.com/google/material-design-lite/issues/243
           * https://codepen.io/surma/pen/JXdEqe
           */
          if(that.classList.contains('mdl-textfield__input')) {
            setTimeout(function(){
              App.EXT.Class.Remove($that.parentElement, 'has-placeholder');
              App.EXT.Class.Add($that.parentElement, 'has-placeholder');
            }, 500);
          }

          // Posiciona o Cursor no Final no Valor
          App.EXT.Caret.toEnd(that);

          if (that.value === '') 
            that.setAttribute('x-value', Placeholder);

          // Reseta a Máscara
          if (that.inputmask)
            that.inputmask.remove();

          // Determina os Eventos
          Event = App.EXT.Event.Discover(ua);

          /* 
           * Actions/Events do Inputs
           */
          var Action = {
            "EraseInput":function(event, _kc) {
              var kc = event.which || event.keyCode,
                  key = event.data || event.key,
                  it = event.inputType || event.type,
                  kl = Number(event.target.getAttribute('x-limit'));

              if (it == 'deleteContentBackward') {
                kc = 8;
              }
              if (it == 'insertCompositionText') {
                kc = 0;
              }

              if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) 
                if (_kc !== undefined)
                  kc = _kc;

              if (kc !== undefined || kc !== 229) {
                // Ação de Excluir com BackSpace
                if(kc == 8 && kl <= Number(event.target.getAttribute('maxlength'))) {
                  event.preventDefault();
                  var sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                      orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric(event.target.value), Config.Rule.digits) : App.EXT.Format.toDecimal(event.target.getAttribute('x-value'), Config.Rule.digits),
                      temp_value = App.EXT.Format.toBigNumber(orig_value.replace(/\D/g, '').slice(0, -1) || 0, Config.Rule.digits),
                      regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                  if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                    var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric(temp_value), Config.Rule.digits), Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                        zero_value = Config.Rule.prefix + sign_value + ("0".repeat(Config.Rule.max.toString().length)) + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits.toString()) + Config.Rule.sufix;
                  }
                  else {
                    var work_value = App.EXT.Format.toBigMoney(temp_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                        zero_value = Config.Rule.prefix + sign_value + "0" + Config.Rule.radixPoint + "0".repeat(Config.Rule.digits) + Config.Rule.sufix;
                  }

                  if (work_value.replace(regex,'') != zero_value.replace(regex,'')) {
                    event.target.value = work_value;
                    window.data(event.target).input = [];
                    for (var i=0; i < event.target.value.length; i++) {
                      if(App.EXT.Validate.isNumber(event.target.value.charAt(i))) {
                        window.data(event.target).input.push(event.target.value.charAt(i));
                      }
                    }
                    if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                      setTimeout(function(){
                        App.EXT.Caret.SetPosition(event.target, 10000);
                      }, 0);
                    }
                  }
                  else {
                    window.data(event.target).input = [];
                    event.target.value = '';
                    event.target.setAttribute('x-value', '');

                    if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                      event.target.removeAttribute('x-signal');
                  }

                  // Atualiza o Atributo x-value
                  event.target.setAttribute('x-value', event.target.value);

                  // Remove Zeros à Esquerda e o Sinal de Número Negativo
                  var only_value = (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') ? event.target.value.replace(/[^1-9.\\]+\W?0+/, '') : only_value = event.target.value.replace(regex,'');

                  // Atualiza o Atributo x-limit
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0));

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    // Reposiciona o Cursor ao Final do Valor do Elemento
                    App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                  }
                }
                // Ação Para Apagar com Delete
                if(kc == 46) {
                  event.preventDefault();
                  // Limpa a Matriz Global do Campo
                  window.data(event.target).input = [];

                  // Limpa o Valor e o Valor Temporário
                  event.target.value = '';
                  event.target.setAttribute('x-value', '');

                  // Reseta o Atributo x-limit
                  event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')));

                  if (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed')
                    event.target.removeAttribute('x-signal');
                  return false;
                }
                return false;
              }
            },
            "SubmitInput":function() {
              try {
                var sign_value = ($that.hasAttribute('x-signal') && $that.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;
                if ($that.hasAttribute('x-type') && $that.getAttribute('x-type') == 'zerofilldec') {
                  var work_value = App.EXT.Format.LPad(App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits), Config.Rule.max.toString().length + '.'.length + Config.Rule.digits),
                      zero_value = sign_value + ("0".repeat(Config.Rule.max.toString().length)) + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
                else {
                  var work_value = sign_value + App.EXT.Format.toBigNumber(App.EXT.Format.toBigNumeric($that.getAttribute('x-value')), Config.Rule.digits),
                      zero_value = sign_value + "0" + (Config.Rule.digits > 0 ? '.' + '0'.repeat(Config.Rule.digits) : '');
                  $that.value = (App.EXT.Format.toBigNumber(work_value) !== '0') ? work_value : zero_value;
                }
              }
              catch(err) {
                console.log(err.message);
              };
            },
            "WriteInput":function(event) {
              // Hack para Obtenção do KeyCode ou Which 
              var kc = event.which || event.keyCode,
                  key = event.data || event.key,
                  kl = Number(event.target.getAttribute('x-limit'));

              if (Event.Write === 'textInput') {
                kc = event.data.charCodeAt(0);
              }
              // Reativa as Teclas Atalhos Padrão
              App.EXT.Event.BindKeys(event, kc, Action);
              // Para Digitação do Sinal de [-]
              if (kc == 45) {
                event.preventDefault();
                if (event.target.value != '') {
                  // Para Quando o Campo for Negativo e Houver o Atributo x-case Definido como signed
                  if (event.target.hasAttribute('x-case') && event.target.getAttribute('x-case') == 'signed') {
                    // Se Houver o Sinal o Remove
                    if (event.target.getAttribute('x-value').indexOf(App.DEFAULT.SYMBOL.NEGATIVE) != -1) {
                      event.target.setAttribute('x-signal', 'removed');
                      if(Timeout) {
                        clearTimeout(Timeout);
                        Timeout = null;
                      }
                      Timeout = setTimeout(function(){
                        Config_Symbol = App.DEFAULT.SYMBOL.POSITIVE; // Reatribue a Variável pra não Embassar
                        var regex = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');
                        event.target.setAttribute('x-value', event.target.value.replace(regex,''));
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }
                    // Se não Houver o Sinal o Adiciona
                    else {
                      event.target.removeAttribute('x-signal');
                      if(Timeout) {
                        clearTimeout(Timeout);
                        Timeout = null;
                      }
                      Timeout = setTimeout(function(){
                        Config_Symbol = App.DEFAULT.SYMBOL.NEGATIVE; // Reatribue a Variável pra não Embassar
                        var regex = new RegExp("\\" + Config.Rule.prefix.trim() + "\\s*"),
                            value = event.target.getAttribute('x-value').replace(Config.Rule.prefix, '');
                        event.target.setAttribute('x-value', Config.Rule.prefix + App.DEFAULT.SYMBOL.NEGATIVE + value);
                        event.target.value = event.target.getAttribute('x-value');
                      }, 0);
                    }
                  }
                  // Para Quando o Campo for Negativo e o Atributo x-case não esteja Definido como signed
                  else {
                    setTimeout(function(){
                      event.target.setAttribute('x-value', event.target.getAttribute('x-value'));
                      event.target.value = event.target.getAttribute('x-value');
                    }, 0);
                  }

                  // Verifica se há Sufixo
                  if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                    setTimeout(function(){
                      // Reposiciona o Cursor ao Final do Valor do Elemento
                      App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                    }, 0);
                  }
                }
                return;
              }
              // Bloqueia Todas as Tecla Não-Numéricas ou Enquanto Houver Limite
              else if (kc != 45 && (kc < 48 || kc > 57) || kl <= 0) {
                event.preventDefault();
                return;
              }
              // Permite Apenas as Tecla Numéricas ou Até Zerar o Limite
              else {
                setTimeout(function(){
                  // Condição para Quando Está Vazio e Pressionar a Tecla [-]
                  if (event.target.value.length <= 1 && key == App.DEFAULT.SYMBOL.NEGATIVE) {
                    event.target.setAttribute('x-value', '');
                    event.target.value = event.target.getAttribute('x-value');
                  }
                  // Condição para Quaquer Tecla Numérica
                  else {
                    // Para Digitação Apenas de Números
                    if(App.EXT.Validate.isNumber(key)) {
                      var act_value = new BigNumber(App.EXT.Format.toDecimal(event.target.value.replace(/\D/g, ''), Config.Rule.digits)),
                          max_value = new BigNumber(Config.Rule.max.toString()),
                          sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol,
                          regex      = new RegExp('\\' + App.DEFAULT.SYMBOL.NEGATIVE, 'g');

                      // Enquanto for Menor que o Máximo Permitido
                      if (act_value.isLessThan(max_value)) {

                        // Armazena a Tecla Numerica Pressionada
                        window.data(event.target).input.push(key);

                        // Posiciona o Cursor ao Final do Valor do Elemento
                        App.EXT.Caret.SetPosition(event.target, 10000);

                        var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(App.EXT.Format.toBigNumeric((event.target.getAttribute('x-value') || '0')) + '' + Number(key), Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                        if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec') {
                          var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix,
                              only_value = work_value.replace(/[^1-9.\\]+\W?0+/, '').replace(/^\-?0+/, '').replace(regex,'');
                        }
                        else {
                          var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix),
                              only_value = work_value.replace(regex, '').replace(regex,'');
                        }

                        event.target.setAttribute('x-value', '');
                        event.target.setAttribute('x-value', work_value);

                        event.target.value = '';
                        event.target.value = event.target.getAttribute('x-value');

                        // Atualiza o Atributo x-liimt
                        event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - Number(only_value.length || 0) + 1);

                        // Verifica se há Sufixo
                        if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                          // Reposiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                        }
                      }
                      // Se Atingir o Máximo Permitido
                      else {

                        if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                          var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                        else
                          var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                        event.target.setAttribute('x-value', work_value);
                        event.target.value = event.target.getAttribute('x-value');

                        // Verifica se há Sufixo
                        if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                          // Reposiciona o Cursor ao Final do Valor do Elemento
                          App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                        }
                        // Zera o Atributo x-value
                        event.target.setAttribute('x-limit', 0);
                      }
                    }
                  }
                }, 0);
                return false;
              }
            },
            "PasteInput":function(event) {
              event.stopPropagation();
              event.preventDefault();

              var clipboardData = event.clipboardData || window.clipboardData,
                  pasted_value = clipboardData.getData('Text') || clipboardData.getData('text/plain'),
                  number_value = pasted_value.replace(/\D/g, '');

              window.data(event.target).input = [];
              for (var i=0; i < number_value.length; i++) {
                if(App.EXT.Validate.isNumber(number_value.charAt(i))) {
                  window.data(event.target).input.push(number_value.charAt(i));
                }
              }

              var act_value = new BigNumber(App.EXT.Format.toDecimal(number_value, Config.Rule.digits)),
                  max_value = new BigNumber(Config.Rule.max.toString()),
                  sign_value = (event.target.hasAttribute('x-signal') && event.target.getAttribute('x-signal') == 'removed') ? '' : Config_Symbol;

              // Enquanto for Menor que o Máximo Permitido
              if (act_value.isLessThanOrEqualTo(max_value)) {

                // Posiciona o Cursor ao Final do Valor do Elemento
                App.EXT.Caret.SetPosition(event.target, 10000);

                var orig_value = (event.target.hasAttribute('x-mode') && event.target.getAttribute('x-mode') == 'overwritable') ? App.EXT.Format.toDecimal(number_value, Config.Rule.digits) : App.EXT.Format.toDecimal(window.data(event.target).input.join(''), Config.Rule.digits);
                if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                  var work_value = Config.Rule.prefix + sign_value + App.EXT.Format.LPad(orig_value, Config.Rule.max.toString().length + Config.Rule.radixPoint.length + Config.Rule.digits) + Config.Rule.sufix;
                else
                  var work_value = App.EXT.Format.toBigMoney(orig_value, Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                event.target.setAttribute('x-value', '');
                event.target.setAttribute('x-value', work_value);

                event.target.value = '';
                event.target.value = event.target.getAttribute('x-value');

                // Atualiza o Atributo x-liimt
                event.target.setAttribute('x-limit', Number(event.target.getAttribute('maxlength')) - work_value.length - sign_value);

                // Verifica se há Sufixo
                if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                  // Reposiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                }
              }
              // Se Atingir o Máximo Permitido
              else {

                if (event.target.hasAttribute('x-type') && event.target.getAttribute('x-type') == 'zerofilldec')
                  var work_value = Config.Rule.prefix + sign_value + Config.Rule.max.toString() + Config.Rule.radixPoint + '0'.repeat(Config.Rule.digits) + Config.Rule.sufix;
                else
                  var work_value = App.EXT.Format.toMoney(Config.Rule.max.toString(), Config.Rule.digits, Config.Rule.prefix + sign_value, Config.Rule.groupSeparator, Config.Rule.radixPoint, Config.Rule.sufix);

                event.target.setAttribute('x-value', work_value);
                event.target.value = event.target.getAttribute('x-value');

                // Verifica se há Sufixo
                if ( (Config.Rule.prefix === '' && Config.Rule.sufix !== '') || (Config.Rule.prefix !== '' && Config.Rule.sufix !== '') ) {
                  // Reposiciona o Cursor ao Final do Valor do Elemento
                  App.EXT.Caret.SetPosition(event.target, (event.target.getAttribute('x-value').length - Config.Rule.sufix.length));
                }
                // Zera o Atributo x-value
                event.target.setAttribute('x-limit', 0);
              }
            }
          };

          /* 
           * Evento Para Conversão de Números Colados no Input
           */
          App.EXT.Event.Add(that, [Event.Paste], function(event){
            Action.PasteInput(event)
          }, false);

          /* 
           * Evento Para Inclusão de Números ao Input
           */
          App.EXT.Event.Add(that, [Event.Write], function(event){
            Action.WriteInput(event);
          }, false);

          /* 
           * Evento Adicionar e Para Exluir com BackSpace Apenas para o Firefox para Android Lollipop
           * Evento Para Exluir com BackSpace ou Apagar com Delete para Todos os Browser Exceto para o Firefox para Android Lollipop
           */
          App.EXT.Event.Add(that, [Event.Erase], function(event){
            if (ua.os.name == 'Android' && (ua.engine.name == 'Gecko' || ua.browser.name == 'Android Browser') && parseFloat(ua.os.version) < 6) {
              var before_value = new App.EXT.Event.Watch(event.target, 'x-value'),
                  after_value = new App.EXT.Event.Watch(event.target, 'value'),
                  before_number = new BigNumber(App.EXT.Format.toDecimal(before_value.get().replace(/\D/g, ''), Config.Rule.digits)),
                  after_number = new BigNumber(App.EXT.Format.toDecimal(after_value.get().replace(/\D/g, ''), Config.Rule.digits));
              if (after_number.isLessThan(before_number)) {
                Action.EraseInput(event, 8);
              }
            }
            else {
              Action.EraseInput(event);
            }
          }, false);

          /* 
           * Evento Genérico para Converte para Decimal os Campos ao Submeter
           */
          App.EXT.Event.Add(that.form, [Event.Submit], function(event){
            Action.SubmitInput();
          }, false);
        break;
        case 'placa_veicular':
        case 'chassi_veicular':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          /* Define o Atributo Placeholder */
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
          }
        break;
        case 'fone':
        case 'fone_fixo':
        case 'fones':
        case 'fones_regex':
        case 'isbn':
        case 'cep':
        case 'cpf':
        case 'cnpj':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');
        break;
        case 'cpf_cnpj':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', MaskedInput.getemptymask());
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
            if (event.target.hasAttribute('x-valid') && event.target.getAttribute('x-valid') == 'true') {
              if (event.target.value.length == 14) {
                // Validação Embutida
                if(!App.EXT.Validate.CPF(event.target.value)) {
                  // Reseta a Máscara
                  App.EXT.Reset.Mask(event);
                }
              }
              else {
                // Validação Embutida
                if(!App.EXT.Validate.CNPJ(event.target.value)) {
                  // Reseta a Máscara
                  App.EXT.Reset.Mask(event);
                }
              }
            }
          }, false);
        break;
        case 'data_br':
        case 'data_br_regex':
        case 'data_iso':
        case 'data_iso_regex':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }, false);
        break;
        case 'hora':
        case 'hora_regex':
          if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '12h') {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_12H_REGEX;
          }
          else if (that.hasAttribute('x-format') && that.getAttribute('x-format') == '24h') {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA_24H_REGEX;
          }
          else {
            // Obtém a Matriz de Regra pelo Tipo do Componente
            Rule = App.PATTERN.MASK.HORA;
          }
          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          that.addEventListener("blur", function(event) {
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event);
            }
          }, false);
        break;
        case 'data_hora_br':
        case 'data_hora_iso':
          // Obtém a Matriz de Regra pelo Tipo do Componente
          Rule = App.PATTERN.MASK[x_type];

          // Reatribue o Obje
          Pattern[x_type] = Rule;

          // Aplica a Máscara ao Elemento
          MaskedInput = Inputmask(Rule.mask).mask(that);

          // Define o Atributo Placeholder
          if (!that.hasAttribute('placeholder') && that.getAttribute('placeholder') != '') {
            that.setAttribute('placeholder', Rule.placeholder);
          }

          // Adiciona o Atributo inputmode="numeric" para exibir o teclado númerico em dispositivos móveis
          if (!that.hasAttribute('inputmode') && that.getAttribute('inputmode') != '')
            that.setAttribute('inputmode', 'numeric');

          // Substitui o Atributo para Tel
          if (ua.device.type == 'mobile')
            that.setAttribute('type', 'tel');

          // Reseta a Máscara Caso esteja Incompleta
          App.EXT.Event.Add(that, ['blur'], function(event){
            if (Rule.placeholder.length > event.target.value.length) {
              // Reseta a Máscara
              App.EXT.Reset.Mask(event, true);
            }
          }, false);
        break;
      }
    }
  };

  //Testo a Versão do IE para Condicionar a Criação do Componente de Forma Legada Utilizando document.registerElement
  if ( ( ua.browser.name == 'IE' && ua.browser.major >= '10') ) {
    var xInput = Object.create(HTMLInputElement.prototype);
    xInput.createdCallback = function() {
      _xInput(this, ua);
    };

    document.registerElement('x-input', { extends: 'input', prototype: xInput });
  }
  else {
    /*
    class xInput extends HTMLInputElement {
      constructor(...args) {
        super(...args);
        _xInput(this, ua);
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

    var xInput =
      /*#__PURE__*/
      (function(_HTMLInputElement) {
        _inheritsLoose(xInput, _HTMLInputElement);

        function xInput() {
          var _this;

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this =
            _HTMLInputElement.call.apply(_HTMLInputElement, [this].concat(args)) ||
            this;

          _xInput(_assertThisInitialized(_this), ua);

          return _this;
        }

        return xInput;
      })(_wrapNativeSuper(HTMLInputElement));

    customElements.define("x-input", xInput, { extends: "input" });

  }
})();