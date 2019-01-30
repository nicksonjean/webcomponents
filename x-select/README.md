## X-Select (Custom Web Element For Select Single)

Copyright (c) 2017 - 2019 Nickson Jeanmerson Licensed under the MIT license ([http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php))

X-Select é um Componente Web que ajuda na construção de formulários ricos adicionando suporte à obtenção de dados remotos no formato JSON através de Streams de alta velocidade ou , com filtragem de dados via XPath ou JSONPath ou SAX, diretamente ao elemento select nativo do HTML, e por não trazer consigo uma interface pronta é compatível com qualquer framework CSS, não obstante, ainda é compatível com os seguintes plugins para jQuery: Chosen, Select2 e Bootstrap Select.

### Tecnologias usadas:

É utilizado o seguinte conjunto de tecnologias para criação desse componente web:

- **WebComponents** - https://github.com/webcomponents/webcomponentsjs
  - **Custom Elements** - http://www.w3.org/TR/custom-elements/
  - **HTML Imports** - http://www.w3.org/TR/2013/WD-html-imports-20130514/

Adicionalmente, foi feito uso dos seguintes scripts:

- **Element Data Storage** - http://james.padolsey.com/javascript/element-datastorage/ para armazenamento das regras do input.
- **Oboe** - http://oboejs.com/ Streaming JSON loading for Node and browsers
- **Defiant** - http://defiantjs.com Search JSON structures plus smart templating with XSLT and XPath.
- **Greenlet** - https://github.com/developit/greenlet Move an async function into its own thread.
- **SelectTransform** - https://selecttransform.github.io/site/ JSON Template and Transforming over JSON.

### Navegadores/Plataformas Suportadas

| IE11+ | Edge12 | Chrome* | Firefox* | Safari 7+ | Opera* | Mobile Android ¹² | Mobile iOS ³⁴ |
|:-----:|:------:|:-------:|:--------:|:----------:|:------:|:------------------:|:--------------:|
|  ✓    |    ✓   |    ✓    |     ✓    |      ✓     |    ✓   |         ✓          |        ✓       |

    + Significa que são apenas os navegadores cujas versões são apartir da versão citada;
    * Significa que são apenas os navegadores modernos;
    ¹ Testado a partir do Android 4.4 KitKat até o Android 8.0 Oreo
    ² Os Seguintes Navegadores Foram testados nas versões do Android acima citados: Android Browser, Chrome WebView, Google Chrome, Opera e Firefox
    ³ Testado a partir do iOS 7.1.2 até o iOS 11.2.2
    ⁴ Os Seguintes Navegadores Foram testados nas versões do iOS acima citados: Safari, Google Chrome, Opera e Firefox

### Características
- Suporte e Recursos Adicionais:
  - Adiciona máscara e comportamentos (eventos customizados) ao input padrão do HTML5;
  - Não obstrui o submit form em qualquer linguagem de servidor ou até mesmo Javascript ou NodeJS;
  - Funciona também com ajax e outras formas de obtenção de dados, como JSON e Javascript com atribuição direta ou indireta com ou sem linguagem de servidor;
  - É completamente agnóstico à estilização/tematização, dando suporte desde jQuery UI, Semantic UI, Foudation, Bootstrap 2, 3 ou 4 até Material Design (MDL) entre outros;
  - Carrega na versão Standalone o perfil de 172 formatos de escrita monetária, todas presentes no Wikipedia, baseadas na ISO 4217;
  - Carrega na versão Standalone o perfil de várias máscaras de data e hora, bem como, várias máscaras comuns como Telefone, CEP, ISBN, CPF/CNPJ com validação embutida, quando cabível;
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

1. Adicionar o Script Web Component Lite à página, Testado com a Versão 0.7.24;
2. Importar o Web Component à página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
<link rel="import" href="dist/standalone/x-select.min.html">
```

3. Também é possível configurar opcionalmente via QueryString a forma de obtenção dos dados JSON passando parâmetros de fora para dentro do componente, de acordo com a tabela abaixo:

### Tabela de Configuração via QueryString

| QueryString  | Valor Padrão |        Opts         |
|:------------:|:------------:|:-------------------:|
| load_format  |    stream    |   [worker|stream]   |
| cache        |    false     |     [true|false]    |
| debug        |    false     |     [true|false]    |
| ie_load_mode |    fetch     |      [xhr|fetch]    |

### Fluxo de Funcionamento

1)   Caso [cache=true] agrupa todas as URLs idênticas oriundas do atributo x-source e as executa sequencialmente uma única vez via XHR ou Fetch, em seguinda:
1.1) Caso [load_format=stream] converte as URLs em BLOB URLs e o JSON para BSON, que por sua vez é passado para Oboe que as processa filtra quando aplicável e alimenta o componente com os objetos esperados, ou:
1.1) Caso [load_format=worker] passa os objetos resultantes do agrupamento das URLs requisitadas do atributo x-source diretamente para uma Thread que as filtra via Defiant quando aplicável e alimenta o componente com os objetos esperados;

2) Caso [cache=false] realiza as requisições obtendo as URLs diretamente do atributo x-source na ordem de renderização do HTML, em seguida;
2.1) Caso [load_format=stream] repassa as URLs requisitadas do atributo x-source diretamente para uma Stream que as filtra via Oboe quando aplicável e alimenta o componente com os objetos esperados, ou:
2.1) Caso [load_format=worker] repassa as URLs requisitadas do atributo x-source diretamente para uma Thread que as filtra via Defiant quando aplicável e alimenta o componente com os objetos esperados;

### Observações

O [cache=true] pode ser ideal para mobile, pois agrupa todas as requisições idênticas e as executa sequencialmente uma única vez via XHR ou Fetch, fazendo com que possa ser reduzido as requesições HTTP visando diminuir o tráfego e o consumo da largura de banda, porém deve-se atentar para o tamanho do objeto resultante da requisição, pois pode haver muito consumo de memória para processar grandes volumes de dados JSON.

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
- [ ] Ao recriar as regras, será preciso capacitar o componente à carregar as regras de uma forma não-estática;
- [ ] Possibilitar o componente de carregar as regras no formato de String/JSON no parâmetro x-load-rule="";
- [ ] Possibilitar o componente de carregar as regras remotamento no formato de URL no parâmetro x-load-rule="";
- Fazendo isso, a versão src do componente vai reduzir seu tamanaho físico em mais de 50%, fazendo com que ele carrega pelo menos 50% mais rápido;
- Enquanto que, a versão dist do componente deverá ficar com ⅓ ou menos desse tamanho físico;

⁰¹²³⁴⁵⁶⁷⁸⁹
