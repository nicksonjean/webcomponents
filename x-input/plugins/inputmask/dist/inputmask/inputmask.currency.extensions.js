"use strict";

var Inputmoney = (function() {
  var _args = {
    preffix: "",
    suffix: "",
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    autoCompleteDecimal: false,
    emptyOrInvalid: function emptyOrInvalid() {
      return Inputmoney.args.fixed
        ? "0" + Inputmoney.args.decimalSeparator + "00"
        : "_" + Inputmoney.args.decimalSeparator + "__";
    }
  };

  return {
    get args() {
      return _args;
    },
    set args(value) {
      _args = Object.assign(_args, value);
    },

    onlyNumber: function onlyNumber(value) {
      var retorno = "";
      for (var i = 0; i < value.length; i++) {
        if (isFinite(value[i])) {
          retorno += value[i];
        }
      }

      return retorno;
    },

    addingPreffix: function addingPreffix(value) {
      return "" + Inputmoney.args.preffix + value;
    },
    removingPreffix: function removingPreffix(value) {
      return value.replace(Inputmoney.args.preffix, "");
    },

    addingSuffix: function addingSuffix(value) {
      return "" + value + Inputmoney.args.suffix;
    },
    removingSuffix: function removingSuffix(value) {
      if (
        value.includes(
          //this.Inputmoney.args.suffix.trim(), 
          Inputmoney.args.suffix,
          value.length - Inputmoney.args.fractionDigits
        )
      ) {
        value = value.replace(Inputmoney.args.suffix, "");
      } else {
        value = value.substring(0, value.length);
        //value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingCompleterFromStart: function addingCompleterFromStart(
      value,
      completer
    ) {
      while (value.length < Inputmoney.args.fractionDigits) {
        value = "" + completer + value;
      }
      return value;
    },

    addingCompleterFromEnd: function addingCompleterFromEnd(value, completer) {
      while (value.length < Inputmoney.args.fractionDigits) {
        value = "" + value + completer;
      }
      return value;
    },

    removingCompleterFromStart: function removingCompleterFromStart(
      value,
      completer
    ) {
      while (value[0] === completer) {
        value = value.replace(completer, "");
      }
      return value;
    },

    removingCompleterFromEnd: function removingCompleterFromEnd(
      value,
      completer
    ) {
      while (value[value.length - 1] === completer) {
        value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingAutoComplete: function addingAutoComplete(value) {
      var n = "" + value + Inputmoney.addingCompleterFromEnd("", "0");
      return n;
    },

    autoComplete: function autoComplete(value) {
      var array =
        value.match(
          new RegExp("\\" + Inputmoney.args.decimalSeparator, "g")
        ) || [];
      if (array.length > 1) {
        value = Inputmoney.addingAutoComplete(value);
      }
      return value;
    },

    addingDecimalSeparator: function addingDecimalSeparator(
      value,
      completer,
      separator
    ) {
      var length = value.length - Inputmoney.args.fractionDigits;

      var regexpFraction = void 0;
      var decimals = "$1";
      var dezenas = completer;
      var character = isFinite(completer) ? "d" : "w";

      regexpFraction =
        "(\\" +
        character +
        "{" +
        Inputmoney.args.fractionDigits +
        "})";
      if (length > 0) {
        regexpFraction =
          "(\\" + character + "{" + length + "})" + regexpFraction;
        dezenas = decimals;
        decimals = "$2";
      }

      return value.replace(
        new RegExp(regexpFraction),
        "" + dezenas + separator + decimals
      );
    },

    removeSeparator: function removeSeparator(value, separator) {
      if (separator !== '') {
        return value.replace(new RegExp("\\" + separator, "g"), "");
      }
      else {
        return value;
      }
    },
    formatDecimal: function formatDecimal(value, completer, separator) {
      value = Inputmoney.addingCompleterFromStart(value, completer);
      value = Inputmoney.addingDecimalSeparator(
        value,
        completer,
        separator
      );
      return value;
    },

    textToNumber: function textToNumber(input) {
      var retorno = input.toString();
      var completer = Inputmoney.args.fixed ? "0" : "_";

      if (Inputmoney.args.preffix) {
        retorno = Inputmoney.removingPreffix(retorno);
      }

      if (Inputmoney.args.suffix) {
        retorno = Inputmoney.removingSuffix(retorno);
      }

      if (Inputmoney.args.autoCompleteDecimal) {
        retorno = Inputmoney.autoComplete(retorno);
      }

      retorno = Inputmoney.removeSeparator(
        retorno,
        Inputmoney.args.thousandsSeparator
      );
      retorno = Inputmoney.removeSeparator(
        retorno,
        Inputmoney.args.decimalSeparator
      );

      retorno = Inputmoney.onlyNumber(retorno);

      retorno = Inputmoney.removingCompleterFromStart(
        retorno,
        completer
      );

      return retorno || (Inputmoney.args.fixed ? "0" : "");
    },

    numberToText: function numberToText(input) {
      var retorno = Inputmoney.args.emptyOrInvalid();

      if (parseFloat(input) !== "NaN") {
        if (input.length <= Inputmoney.args.fractionDigits) {
          retorno = Inputmoney.formatDecimal(
            input,
            Inputmoney.args.fixed ? "0" : "_",
            Inputmoney.args.decimalSeparator
          );
        } else {
          var lengthWithoutDecimals =
            input.length - Inputmoney.args.fractionDigits;
          var hundreds = Math.ceil(lengthWithoutDecimals / 3);
          var regexpHundreds = "(\\d)";

          var replacement =
            Inputmoney.args.decimalSeparator + "$" + (hundreds + 1);

          for (var i = hundreds; i !== 0; i--) {
            if (lengthWithoutDecimals >= 3) {
              regexpHundreds = "(\\d{3})" + regexpHundreds;
              lengthWithoutDecimals -= 3;
            } else {
              regexpHundreds =
                "(\\d{" + lengthWithoutDecimals + "})" + regexpHundreds;
            }

            if (i > 1) {
              replacement =
                Inputmoney.args.thousandsSeparator +
                "$" +
                i +
                replacement;
            } else {
              replacement = "$" + i + replacement;
            }
          }

          retorno = input.replace(new RegExp(regexpHundreds), replacement);
        }
      }

      if (Inputmoney.args.preffix) {
        retorno = Inputmoney.addingPreffix(retorno);
      }
      if (Inputmoney.args.suffix) {
        retorno = Inputmoney.addingSuffix(retorno);
      }

      return retorno;
    },

    format: function format(value) {
      return Inputmoney.numberToText(
        Inputmoney.textToNumber(value)
      );
    },

    formatToNumber: function formatToNumber(input) {
      var retorno = "0";
      var value = Inputmoney.textToNumber(input);

      if (parseFloat(value) !== "NaN") {
        if (value.length <= Inputmoney.args.fractionDigits) {
          value = Inputmoney.formatDecimal(value, "0", ".");
        } else {
          var lengthWithoutDecimals =
            value.length - Inputmoney.args.fractionDigits;
          value = value.replace(
            new RegExp(
              "(\\d{" +
                lengthWithoutDecimals +
                "})(\\d{" +
                Inputmoney.args.fractionDigits +
                "})"
            ),
            "$1.$2"
          );
        }

        retorno = value;
      }

      return parseFloat(retorno);
    }
  };
})();