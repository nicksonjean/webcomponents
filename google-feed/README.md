## Feed Reader (Custom Web Element All In One)

> Componente Web para Ler e Consumir Feed.

Leitor de Feeds construído com YQL do Yahoo, baseado no 
Feeder – VanillaJS Feed Reader de Pedro Rogério, a príncipio foi utilizado
a Google Feed API, tal qual o VanillaJS Feed Reader, porém em dado momento,
escolhi mudar para YQL por dois motivos, são eles:
1) O Google Feed API, já era considerado depreciado e será descontinuado;
2) Ótimização, agora é possível com um única consulta YQL obter quantos feeds
forem necessários, ao invés de um laço de requisições remotas para múltiplos
feeds;

### Tecnologias usadas:

É utilizado o seguinte conjunto de tecnologias para criação desse componente:

- **WebComponents** - https://github.com/webcomponents/webcomponentsjs
  - **Custom Elements** - http://www.w3.org/TR/custom-elements/
  - **HTML Imports** - http://www.w3.org/TR/2013/WD-html-imports-20130514/
  - **Shadow DOM** - http://www.w3.org/TR/shadow-dom/
  - **Templates** - http://www.w3.org/TR/components-intro/#template-section

Base/Conceito:

- Feeder - VanillaJS Feed Reader - http://www.pinceladasdaweb.com.br/blog/2015/09/28/feeder-vanillajs-feed-reader/ e https://github.com/pinceladasdaweb/Feeder

Adicionalmente, foi feito uso das mais novas técnicas para se garantir uma melhor estabilidade do componente:

- **Promise/A+** - https://promisesaplus.com/ com Polyfill para IE9+
- **YQL** - https://developer.yahoo.com/yql/console/, Linguagem para criação de APIs criada pelo Yahoo baseado em SQL
  - **XSLT/XPath Templating** - http://www.yqlblog.net/ Técnica utilizada para fazer transformações e conversões em tempo de execução em consultas YQL, através dos parâmetros prexsl ou postxsl
    - **XSLT** - https://pt.wikipedia.org/wiki/XSLT É uma linguagem usada para criar documentos XSL que, por sua vez, definem/transformam e/ou convertem a exibição da marcação XML a ela associada, antes ou depois de ser processada em conjunto com YQL
- **DefiantJS** - http://defiantjs.com/ Usado para consultar e manipular grandes volumes de dados em JSON
  - **JSON.search** - https://github.com/hbi99/defiant.js/tree/master, Extende o Construtor JSON adicionando a propriedade "search", para fazer buscas rápidas com XPath em grandes objetos JSON
    - **XPath** - https://pt.wikipedia.org/wiki/XPath É uma linguagem de consulta (Query Language) para selecionar nós de um documento XML

### Navegadores/Plataformas Suportadas

> Navegadores com * significa que são apenas os navegadores modernos;

| IE9+ | Edge12 | Chrome* | Firefox* | Safari 7+* | Opera* | Chrome Android* | Mobile Safari* |
|:----:|:------:|:-------:|:--------:|:----------:|:------:|:---------------:|:--------------:|
|  ✓   |    ✓   |    ✓    |     ✓    |      ✓    |    ✓   |        ✓        |        ✓       |

### Características
- Múltiplas Formas de Entrada:
  - Suporte a praticamente todos padrões de feeds, desde RSS 0.91, RSS 0.92, RDF/RSS 1.0, RSS 2.0, Atom 1.0;
- Suporte a Multiplas Entradas de Feeds:
  - É possível exibir tantos feeds quanto forem necessários com apenas uma única requisição remota, otimizando a exibição;
- Exibição sob Demanda:
  - Apenas perceptível quando mais de um feed é informado no parâmetro url, exibe o feed assim que estiver pronto para exibição passando a processar o próximo feed para exibição e assim sucessivamente;
- Normatização da Saída do(s)Feed(s):
  - Independentemente do(s) formato(s) do(s) feed(s) no parâmetro url, toda a saída será padronizada no formato RSS 2.0, graças à tabela feednormalizer do YQL;
- Total Personalização com Temas/Skins:
  - Possibilidade de customização da exibição do componente web com um css anexado diretamente ao mesmo, dando total liberdade de criação de temas/skins personalizados;
  - O arquivo CSS do tema/skin usado para customização do componente tanto pode estar hospedado localmente quanto remotamente;
- Menu Dropdown para Escolha do Feed Ativo:
  - Quando mais de um feed é informado no parâmetro url, um menu dropdown é exibido para se escolher o feed ativo para exibição;
- Uso de Técnicas/Tecnologias Atuais:
  - Utilização de Promises/A+ (then/catch) para obtenção do(s) feed(s) e principamente na obtenção de arquivos externos;

### Como Usar

- O Web Componente possui os seguintes parâmetros/atributos:

| Parâmetro/Atributo                 | Descrição                                                            |
| ---------------------------------- |:--------------------------------------------------------------------:|
| **url**                            | A(s) url(s) do(s) feed(s), para mais de 1 separá-los com vírgula ',' |
| **entries**                        | O número de postagens à exibir, por padrão "10".                     |
| **css**                            | O tema/skin utilizado para exibição, por padrão nenhum.              |
| **update**                         | O tempo de atualização do(s) feed(s), por padrão em milisegundos,    |
|                                    | caso nenhum sufixo seja informado, os tipos de sufixos permitidos,   |
|                                    | são: 'h' para horas, 'm' para minutos ou 's' para segundos.

- Vejam o arquivo: index-feed-reader.html

### Exemplos 

&lt;feed-reader&gt;&lt;/feed-reader&gt;

Em Breve...