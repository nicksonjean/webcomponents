## X-Select (Custom Web Element For Select Single)

Copyright (c) 2017 - 2019 Nickson Jeanmerson Licensed under the MIT license ([http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php))

X-Select é um Componente Web que ajuda na construção de formulários ricos adicionando suporte à obtenção de dados remotos no formato JSON através de Streams de alta velocidade ou , com filtragem de dados via XPath ou JSONPath ou SAX, diretamente ao elemento select nativo do HTML, e por não trazer consigo uma interface pronta é compatível com qualquer framework CSS, não obstante, ainda é compatível com os seguintes plugins para jQuery: Chosen, Select2 e SelectPicker/Bootstrap Select.

### Tecnologias usadas:

É utilizado o seguinte conjunto de tecnologias para criação desse componente web:

- **Document Register Element** - https://github.com/WebReflection/document-register-element Uma versão leve e independente que suporta tanto a versão v0 quanto a V1 da especificação W3C Custom Elements. (Para compatibilidade com o Edge).
- **WebComponents** - https://github.com/webcomponents/webcomponentsjs Um conjunto de polyfills que suporta as especificações V0 do HTML Web Components. (Para compatibilidade com o IE9-11).
  - **Custom Elements** - https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements Um polyfill simplificada e independente da Espcificação V1 do W3c Custom Elements. (Para compatibilidade com o IE9-11/Edge).
  - **HTML Imports** - https://github.com/webcomponents/html-imports Uma versão leve e descentralizada utilizada apenas suportar a tecnologia caso queira utiliza-la. (Para compatibilidade com o Edge).
  - **Mutation Observers** - https://github.com/webmodules/mutation-observer Expõe a API MutationObserver nativa fornecida pelo navegador ou um polyfill com base em eventos de mutação. (Para compatibilidade com o IE9-10).

Adicionalmente, foi feito uso dos seguintes scripts:

- **Element Data Storage** - http://james.padolsey.com/javascript/element-datastorage/ para armazenamento das regras do input.
- **Oboe** - http://oboejs.com/ Streaming JSON loading for Node and browsers
- **Defiant** - http://defiantjs.com Search JSON structures plus smart templating with XSLT and XPath.
- **Greenlet** - https://github.com/developit/greenlet Move an async function into its own thread.
- **VKThread** - https://github.com/vkiryukhin/vkthread Javascript plugin allows to execute any function of javascript code in a thread.
- **SelectTransform** - https://selecttransform.github.io/site/ JSON Template and Transforming over JSON.

### Navegadores/Plataformas Suportadas

| IE10+ | Edge12 | Chrome* | Firefox* | Safari 7+ | Opera* | Mobile Android ¹² | Mobile iOS ³⁴ |
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
  - Adiciona a possibilidade de carregar objetos remotamento e convertê-los em options do elemento select padrão do HTML5;
  - Não obstrui o submit form em qualquer linguagem de servidor ou até mesmo Javascript ou NodeJS;
  - Funciona também com ajax e outras formas de obtenção de dados, como JSON e Javascript com atribuição direta ou indireta com ou sem linguagem de servidor;
  - É completamente agnóstico à estilização/tematização, dando suporte desde jQuery UI, Semantic UI, Foudation, Bootstrap 2, 3 ou 4 até Material Design (MDL) entre outros;
  - Carrega na versão Standalone uma intância pré-definida dos Plugins jQuery, Chosen, Select2 e SelectPicker/Bootstrap Select, não sendo necessário instanciá-los diretamento no código-fonte;
    - Observações:
      - É necessário no entanto carregar convencionalmente o plugin escolhido da mesma forma que se carregaria para se utilizar dele, assim como suas dependencias;
      - Utilize o atributo x-plugin com um dos três possíveis valores: ('chosen','select2','select'), diretamente no element select para instanciá-lo;
- Múltiplas Formas de Configuração:
  - As regras podem ser encadeáveis (chainable) e seu resultado engatilha (trigger) a filtragem de objetos em cascata, derivados da seleção do objeto ancestral;
  - Definindo o atributo x-type é possível escolher qual regra se deseja utilizar, veja a lista de atributos mais abaixo;
  - O componente já está pré-configurado com três regras muito comuns em formulários de sistemas comerciais, que são: estados/state, cidades/city e bairros/district: [veja o README_rules.md](README_rules.md);
  - Dispensando a utilização do atributo x-type é possível criar regras customizadas através de atributos, veja a lista de atributos mais abaixo;
  - Utilizando o atributo x-template é possível criar um template JSON personalizado para definir como será criado os elementos options do select;
- Direção de Escrita:
  - Suporte total tanto à LTR quanto à RTL, inclusive aos plugins jQuery;

### Como Usar

#### Para o Edge & Firefox

##### Como JS Module

1. Adicionar o Script Document Register Element na página, Testado com a Versão 1.14.3;
2. Adicionar o Script do Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.14.3/document-register-element.js"></script>
<script type="text/javascript" src="dist/x-select.min.js"></script>
```

##### Como HTML Import

1. Adicionar o Script Document Register Element na página, Testado com a Versão 1.14.3;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.2.2;
3. Importar o Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.14.3/document-register-element.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@webcomponents/html-imports@1.2.2/html-imports.min.js"></script>
<link rel="import" href="dist/x-select.min.html">
```

#### Para o IE

##### Como JS Module

1. Adicionar o Script Web Component Lite na página, Testado com a Versão 0.7.24;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.0.3;
3. Adicionar o Script do Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mutation-observer@1.0.3/index.js"></script>
<script type="text/javascript" src="dist/x-select.min.js"></script>
```

##### Como HTML Import

1. Adicionar o Script Web Component Lite na página, Testado com a Versão 0.7.24;
2. Adicionar o Script HTML Imports na página, Testado com a Versão 1.0.3;
3. Importar o Web Component na página;

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mutation-observer@1.0.3/index.js"></script>
<link rel="import" href="dist/x-select.min.html">
```

#### Para Navegadores Modernos (Chrome, Opera etc...)

##### Como JS Module

1. Adicionar o Script do Web Component na página;

```html
<script type="text/javascript" src="dist/x-select.min.js"></script>
```

##### Como HTML Import

1. Importar o Web Component na página;

```html
<link rel="import" href="dist/x-select.min.html">
```

### Tabela de Configuração via QueryString

 Também é possível configurar opcionalmente via QueryString a forma de obtenção dos dados JSON passando parâmetros de fora para dentro do componente, de acordo com a tabela abaixo:

| QueryString  | Valor Padrão |        Opts         |
|:------------:|:------------:|:-------------------:|
|   format     |    stream    |   (worker\|stream)  |
|   cache      |    false     |     (true\|false)   |
|   debug      |    false     |     (true\|false)   |
|   style      |    false     |     (true\|false)   |
|    mode      |    fetch     |      (xhr\|fetch)   |

### Tabela de Atributos

### Exemplo de Uso

- examples/bootstrap-v4/index.php

### Fluxo de Funcionamento

1)   Caso [cache=true] agrupa todas as URLs idênticas oriundas do atributo x-source e as executa sequencialmente uma única vez via XHR ou Fetch, em seguinda:
1.1) Caso [format=stream] converte as URLs em BLOB URLs e o JSON para BSON, que por sua vez é passado para Oboe que as processa filtra quando aplicável e alimenta o componente com os objetos esperados, ou:
1.1) Caso [format=worker] passa os objetos resultantes do agrupamento das URLs requisitadas do atributo x-source diretamente para uma Thread que as filtra via Defiant quando aplicável e alimenta o componente com os objetos esperados;

2) Caso [cache=false] realiza as requisições obtendo as URLs diretamente do atributo x-source na ordem de renderização do HTML, em seguida;
2.1) Caso [format=stream] repassa as URLs requisitadas do atributo x-source diretamente para uma Stream que as filtra via Oboe quando aplicável e alimenta o componente com os objetos esperados, ou:
2.1) Caso [format=worker] repassa as URLs requisitadas do atributo x-source diretamente para uma Thread que as filtra via Defiant quando aplicável e alimenta o componente com os objetos esperados;

### Observações

O [cache=true] pode ser ideal para mobile, pois agrupa todas as requisições idênticas e as executa sequencialmente uma única vez via XHR ou Fetch, fazendo com que possa ser reduzido as requesições HTTP visando diminuir o tráfego e o consumo da largura de banda, porém deve-se atentar para o tamanho do objeto resultante da requisição, pois pode haver muito consumo de memória para processar grandes volumes de dados JSON.

### ToDo

- [x] Separar versão Standalone do componente trazendo consigo mesmo todas as regras pré-definidas;
- [x] Otimizar do componente, explorando a possibilidade de várias formas de carregamento de objetos remotos;
- [x] Recriar o componente compatível com a Biblioteca WebComponents v1;
- [x] Converter o CSS carregado na tag <style></style> em objeto JSON para ser Carregado via Javascript;
- [ ] Recriar as regras em arquivos externos e capacitar o componente de carregá-las: [veja o README_rules.md](README_rules.md);
- [ ] Possibilitar o componente de carregar as regras no formato de String/JSON no parâmetro x-source="";
- [ ] Possibilitar o componente de carregar as regras remotamento no formato de URL no parâmetro x-source="";
 
⁰¹²³⁴⁵⁶⁷⁸⁹