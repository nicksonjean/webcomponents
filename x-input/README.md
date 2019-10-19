## X-Input (Custom Web Element For Input)

Copyright (c) 2017 - 2019 Nickson Jeanmerson Licensed under the MIT license ([http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php))

X-Input é um Componente Web que ajuda na construção de formulários ricos adicionando máscaras, validações e tratamentos autônomos dos mais variados tipos ao elemento input nativo do HTML, e por não trazer consigo uma interface pronta é compatível com qualquer framework CSS.

### Tecnologias usadas:

É utilizado o seguinte conjunto de tecnologias para criação desse componente web:

- **Document Register Element** - https://github.com/WebReflection/document-register-element Uma versão leve e independente que suporta tanto a versão v0 quanto a V1 da especificação W3C Custom Elements. (Para compatibilidade com o Edge).
- **WebComponents** - https://github.com/webcomponents/webcomponentsjs Um conjunto de polyfills que suporta as especificações V0 do HTML Web Components. (Para compatibilidade com o IE9-11).
  - **Custom Elements** - https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements Um polyfill simplificada e independente da Espcificação V1 do W3c Custom Elements. (Para compatibilidade com o IE9-11/Edge).
  - **HTML Imports** - https://github.com/webcomponents/html-imports Uma versão leve e descentralizada utilizada apenas suportar a tecnologia caso queira utiliza-la. (Para compatibilidade com o Edge).
  - **Mutation Observers** - https://github.com/webmodules/mutation-observer Expõe a API MutationObserver nativa fornecida pelo navegador ou um polyfill com base em eventos de mutação. (Para compatibilidade com o IE9-10).

Adicionalmente, foi feito uso dos seguintes scripts:

- **Element Data Storage** - http://james.padolsey.com/javascript/element-datastorage/ para armazenamento das regras do input.
- **InputMask** - https://github.com/RobinHerbots/Inputmask base para a construção do Componente Web.
- **UAParser** - https://github.com/faisalman/ua-parser-js para tratar diferentes nuâncias dos eventos e comportamentos entre os principais navegadores do mercado.
- **BigNumbers** - https://github.com/MikeMcl/bignumber.js para dar suporte à inteiros e decimais maiores que 2^53-1, conseguindo chegar à 2^64.

### Navegadores/Plataformas Suportadas

| IE9+ | Edge12 | Chrome* | Firefox* | Safari 7+ | Opera* | Mobile Android ¹² | Mobile iOS ³⁴ |
|:----:|:------:|:-------:|:--------:|:----------:|:------:|:------------------:|:--------------:|
|  ✓   |    ✓   |    ✓    |     ✓    |      ✓     |    ✓   |         ✓          |        ✓       |

    + Significa que são apenas os navegadores cujas versões são apartir da versão citada;
    * Significa que são apenas os navegadores modernos;
    ¹ Testado a partir do Android 4.4 KitKat até o Android 8.0 Oreo
    ² Os Seguintes Navegadores Foram testados nas versões do Android acima citados: Android Browser, Chrome WebView, Google Chrome, Opera e Firefox
    ³ Testado a partir do iOS 7.1.2 até o iOS 11.2.2
    ⁴ Os Seguintes Navegadores Foram testados nas versões do iOS acima citados: Safari, Google Chrome, Opera e Firefox

### Características
- Suporte e Recursos Adicionais:
  - Adiciona a possibilidade do uso de máscaras e validação automática de dados ao elemento input padrão do HTML5;
  - Não obstrui o submit form em qualquer linguagem de servidor ou até mesmo Javascript ou NodeJS;
  - Funciona também com ajax e outras formas de obtenção de dados, como JSON e Javascript com atribuição direta ou indireta com ou sem linguagem de servidor;
  - É completamente agnóstico à estilização/tematização, dando suporte desde jQuery UI, Semantic UI, Foudation, Bootstrap 2, 3 ou 4 até Material Design (MDL) entre outros;
  - Carrega na versão Standalone o perfil de 172 formatos de escrita monetária, todas presentes no Wikipedia, baseadas na ISO 4217;
  - Carrega na versão Standalone o perfil de várias máscaras de data e hora, bem como, várias máscaras comuns como Telefone, CEP, ISBN, CPF/CNPJ com validação embutida;
- Tipos de Entrada
  - Carrega automáticamente vários perfis numéricos semelhantes aos tipos de dados do SQL-92, como por exemplo:
    - Inteiro: Possui os padrões [tinyint, smallint, mediumint, integer, bigint], e ainda os tipos pré-definididos [positiveint, negativeint, percentint, zerofillint]
    - Decimal: Possui os padrões [decimal, currency], e ainda os tipos pré-definididos [positivedec, negativedec, percentdec, zerofilldec]
- Múltiplas Formas de Configuração:
  - É possível limitar valores de entrada com um valor mínimo ou máximo inferior à Math.pow(2,64), de acordo com tipo, veja as tabelas para numeros inteiros e decimais;
  - É possível customizar o tipo decimal com a quantidade de dígitos, o separador de milhares e o separador de decimais;
  - Suporta o uso de prefixos e sufixos sem limite de cumprimento ou de caracteres;
  - Possui afinidade numérica para inteiro e decimal, dando preferencia positiva ou negativa de acordo com a afinidade;
- Direção de Escrita:
  - Suporte total tanto à LTR quanto à RTL;
- Múltiplas Formas de Retorno:
  - Opcionalmente ao realizar o submit form os dados presentes no componente são tratados para serem enviados no formato SQL-92;
    - Exemplo #1: Datas DD/MM/YYYY ou MM/DD/YYYY são convertidas automáticamente para YYYY-MM-DD;
    - Exemplo #2: Inteiros e Decimais são desmascarados automáticamente para o seu respectivo Formato do SQL-92;

### Como Usar

#### Para o Edge

##### Como JS Module

1. Adicionar o Script Document Register Element na página, Testado com a Versão 1.14.3;
2. Adicionar o Script do Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.14.3/document-register-element.js"></script>
<script type="text/javascript" src="dist/x-input.js"></script>
```

##### Como HTML Import

1. Adicionar o Script Document Register Element na página, Testado com a Versão 1.14.3;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.2.2;
3. Importar o Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.14.3/document-register-element.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/html-imports@1.2.2/html-imports.min.js"></script>
<link rel="import" href="dist/x-input.html">
```

#### Para o IE

##### Como JS Module

1. Adicionar o Script Web Component Lite na página, Testado com a Versão 0.7.24;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.0.3;
3. Adicionar o Script do Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mutation-observer@1.0.3/index.js"></script>
<script type="text/javascript" src="dist/x-input.js"></script>
```

##### Como HTML Import

1. Adicionar o Script Web Component Lite na página, Testado com a Versão 0.7.24;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.0.3;
3. Importar o Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mutation-observer@1.0.3/index.js"></script>
<link rel="import" href="dist/x-input.html">
```

#### Para Navegadores Modernos (Chrome, Firefox, Opera etc...)

##### Como JS Module

1. Adicionar o Script do Web Component na página;

```html
<script type="text/javascript" src="dist/x-input.js"></script>
```

##### Como HTML Import

1. Importar o Web Component na página;

```html
<link rel="import" href="dist/x-input.html">
```

### Tabela de Configuração via QueryString

Também é possível configurar opcionalmente via QueryString a forma de obtenção dos dados JSON passando parâmetros de fora para dentro do componente, de acordo com a tabela abaixo:

| QueryString  | Valor Padrão |        Opts         |
|:------------:|:------------:|:-------------------:|
| style        |    true      |     (true\|false)    |
| debug        |    false     |     (true\|false)    |

### Tabela de Atributos

### Exemplo de Uso

- examples/bootstrap-v4/index.php

### Observações

O valor seguro para calculo em inteiros é de 9007199254740991 isso é uma limitação do Javascript;
Exemplo: 2^64-1 é 18446744073709551615 mas em JavaScript calcula para 18446744073709552000, isso devido justamente à Number.MAX_SAFE_INTEGER ou Math.pow(2,53)-1;

### Tabela para Números Inteiros

|    Tipo     |                  Valor Min/Máx                   |          | Inteiros |        |
|:-----------:|:------------------------------------------------:|:--------:|:--------:|:------:|
|   x-type    |                     Padrão                       | Unsigned | Negative | Signed |
| positiveint | 0 à 18446744073709552000                         |    ✓     |          |        |
| negativeint | -9223372036854776000 à 0                         |          |    ✓     |        |
| percentint  | -100 à 100                                       |          |          |   ✓    |
| zerofillint | -9223372036854776000 à 9223372036854776000       |          |          |   ✓    |
| tinyint     | -127 à 127                                       |          |          |   ✓    |
| smallint    | -32767 à 32767                                   |          |          |   ✓    |
| mediumint   | -8388607 à 8388607                               |          |          |   ✓    |
| integer     | -2147483647 à 2147483647                         |          |          |   ✓    |
| bigint      | -9223372036854776000 à 9223372036854776000       |          |          |   ✓    |

### Tabela para Números Decimais

|    Tipo     |                  Valor Min/Máx                   |          | Decimais |        |
|:-----------:|:------------------------------------------------:|:--------:|:--------:|:------:|
|   x-type    |                     Padrão                       | Unsigned | Negative | Signed |
| positivedec | 0 à 18446744073709552000.00                      |    ✓     |          |        |
| negativedec | -9223372036854776000.00 à 0                      |          |    ✓     |        |
| percentdec  | -100.00 à 100.00                                 |          |          |   ✓    |
| zerofilldec | -9223372036854776000.00 à 9223372036854776000.00 |          |          |   ✓    |

### ToDo

- [x] Separar versão Standalone do componente trazendo consigo mesmo todas as regras pré-definidas;
- [x] Otimizar do componente, removendo polyfills e scripts que estavam redundantes e que potencialmente causariam exceções, uma redução de 17kb;
- [x] Recriar o componente compatível com a Biblioteca WebComponents v1;
- [x] Converter o CSS carregado na tag <style></style> em objeto JSON para ser Carregado via Javascript;
- [ ] Recriar as regras em arquivos externos e capacitar o componente de carregá-las: [veja](README_rules.md);
- [ ] Possibilitar o componente de carregar as regras no formato de String/JSON no parâmetro x-load-rule="";
- [ ] Possibilitar o componente de carregar as regras remotamento no formato de URL no parâmetro x-load-rule="";
- [ ] Possibilitar a implementação do modo de carregamento de objetos via JSON semelhante ao componente x-select diretamente ao elemento datalist associado ao input;
- [ ] Possibilitar a integração entre os componentes x-select e x-input;
- Fazendo isso, a versão src do componente vai reduzir seu tamanaho físico em mais de 50%, fazendo com que ele carrega pelo menos 50% mais rápido;
- Enquanto que, a versão dist do componente deverá ficar com ⅓ ou menos desse tamanho físico;

⁰¹²³⁴⁵⁶⁷⁸⁹