this.Inputmoney = (() => {
  let _args = {
    preffix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    autoCompleteDecimal: false,
    emptyOrInvalid: () => {
      return this.Inputmoney.args.fixed
        ? `0${this.Inputmoney.args.decimalSeparator}00`
        : `_${this.Inputmoney.args.decimalSeparator}__`;
    }
  };

  return {
    get args() {
      return _args;
    },
    set args(value) {
      _args = Object.assign(_args, value);
    },

    onlyNumber: value => {
      let retorno = '';

      for (let i = 0; i < value.length; i++) {
        if (isFinite(value[i])) {
          retorno += value[i];
        }
      }

      return retorno;
    },

    addingPreffix: value => {
      return `${this.Inputmoney.args.preffix}${value}`;
    },
    removingPreffix: value => {
      return value.replace(this.Inputmoney.args.preffix, '');
    },

    addingSuffix: value => {
      return `${value}${this.Inputmoney.args.suffix}`;
    },
    removingSuffix: value => {
      if (
        value.includes(
          this.Inputmoney.args.suffix,
          value.length - this.Inputmoney.args.fractionDigits
        )
      ) {
        value = value.replace(this.Inputmoney.args.suffix, '');
      } else {
        value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingCompleterFromStart: (value, completer) => {
      while (value.length < this.Inputmoney.args.fractionDigits) {
        value = `${completer}${value}`;
      }
      return value;
    },

    addingCompleterFromEnd: (value, completer) => {
      while (value.length < this.Inputmoney.args.fractionDigits) {
        value = `${value}${completer}`;
      }
      return value;
    },

    removingCompleterFromStart: (value, completer) => {
      while (value[0] === completer) {
        value = value.replace(completer, '');
      }
      return value;
    },

    removingCompleterFromEnd: (value, completer) => {
      while (value[value.length - 1] === completer) {
        value = value.substring(0, value.length - 1);
      }
      return value;
    },

    addingAutoComplete: value => {
      const n = `${value}${this.Inputmoney.addingCompleterFromEnd(
        '',
        '0'
      )}`;
      return n;
    },

    autoComplete: value => {
      const array =
        value.match(
          new RegExp(`\\${this.Inputmoney.args.decimalSeparator}`, 'g')
        ) || [];
      if (array.length > 1) {
        value = this.Inputmoney.addingAutoComplete(value);
      }
      return value;
    },

    addingDecimalSeparator: (value, completer, separator) => {
      let length = value.length - this.Inputmoney.args.fractionDigits;

      let regexpFraction;
      let decimals = '$1';
      let dezenas = completer;
      let character = isFinite(completer) ? 'd' : 'w';

      regexpFraction = `(\\${character}{${this.Inputmoney.args
        .fractionDigits}})`;
      if (length > 0) {
        regexpFraction = `(\\${character}{${length}})${regexpFraction}`;
        dezenas = decimals;
        decimals = '$2';
      }

      return value.replace(
        new RegExp(regexpFraction),
        `${dezenas}${separator}${decimals}`
      );
    },

    removeSeparator: (value, separator) => {
      return value.replace(new RegExp(`\\${separator}`, 'g'), '');
    },
    formatDecimal: (value, completer, separator) => {
      value = this.Inputmoney.addingCompleterFromStart(value, completer);
      value = this.Inputmoney.addingDecimalSeparator(
        value,
        completer,
        separator
      );
      return value;
    },

    textToNumber: input => {
      let retorno = input.toString();
      let completer = this.Inputmoney.args.fixed ? '0' : '_';

      if (this.Inputmoney.args.preffix) {
        retorno = this.Inputmoney.removingPreffix(retorno);
      }

      if (this.Inputmoney.args.suffix) {
        retorno = this.Inputmoney.removingSuffix(retorno);
      }

      if (this.Inputmoney.args.autoCompleteDecimal) {
        retorno = this.Inputmoney.autoComplete(retorno);
      }

      retorno = this.Inputmoney.removeSeparator(
        retorno,
        this.Inputmoney.args.thousandsSeparator
      );
      retorno = this.Inputmoney.removeSeparator(
        retorno,
        this.Inputmoney.args.decimalSeparator
      );

      retorno = this.Inputmoney.onlyNumber(retorno);

      retorno = this.Inputmoney.removingCompleterFromStart(
        retorno,
        completer
      );

      return retorno || (this.Inputmoney.args.fixed ? '0' : '');
    },

    numberToText: input => {
      let retorno = this.Inputmoney.args.emptyOrInvalid();

      if (parseFloat(input) !== 'NaN') {
        if (input.length <= this.Inputmoney.args.fractionDigits) {
          retorno = this.Inputmoney.formatDecimal(
            input,
            this.Inputmoney.args.fixed ? '0' : '_',
            this.Inputmoney.args.decimalSeparator
          );
        } else {
          let lengthWithoutDecimals =
            input.length - this.Inputmoney.args.fractionDigits;
          let hundreds = Math.ceil(lengthWithoutDecimals / 3);
          let regexpHundreds = '(\\d)';

          let replacement = `${this.Inputmoney.args
            .decimalSeparator}$${hundreds + 1}`;

          for (let i = hundreds; i !== 0; i--) {
            if (lengthWithoutDecimals >= 3) {
              regexpHundreds = `(\\d{3})${regexpHundreds}`;
              lengthWithoutDecimals -= 3;
            } else {
              regexpHundreds = `(\\d{${lengthWithoutDecimals}})${regexpHundreds}`;
            }

            if (i > 1) {
              replacement = `${this.Inputmoney.args
                .thousandsSeparator}$${i}${replacement}`;
            } else {
              replacement = `$${i}${replacement}`;
            }
          }

          retorno = input.replace(new RegExp(regexpHundreds), replacement);
        }
      }

      if (this.Inputmoney.args.preffix) {
        retorno = this.Inputmoney.addingPreffix(retorno);
      }
      if (this.Inputmoney.args.suffix) {
        retorno = this.Inputmoney.addingSuffix(retorno);
      }

      return retorno;
    },

    format: value => {
      return this.Inputmoney.numberToText(
        this.Inputmoney.textToNumber(value)
      );
    },

    formatToNumber: input => {
      let retorno = '0';
      let value = this.Inputmoney.textToNumber(input);

      if (parseFloat(value) !== 'NaN') {
        if (value.length <= this.Inputmoney.args.fractionDigits) {
          value = this.Inputmoney.formatDecimal(value, '0', '.');
        } else {
          let lengthWithoutDecimals =
            value.length - this.Inputmoney.args.fractionDigits;
          value = value.replace(
            new RegExp(
              `(\\d{${lengthWithoutDecimals}})(\\d{${this.Inputmoney.args
                .fractionDigits}})`
            ),
            '$1.$2'
          );
        }

        retorno = value;
      }

      return parseFloat(retorno);
    }
  };
})();
