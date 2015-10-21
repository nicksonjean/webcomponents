## Google-Map (Custom Web Element All In One)

> Versão Centralizada e Auto-Contida do Custom Web Component para o Google Maps.

Embora já exista um Web Component criado pela própria Google, 
desenvolvido com Polymer para o Google Maps, porém, este é 
bastante descentralizado, por possuir componentes separados para 
cada aspecto do uso dos Mapas do Google em geral, além de considerar
seu uso um tanto quanto dificil em sistemas web automatizados e além
do mais acho o polymer bastante pesado, e foi por isso que tomei essa
iniciativa de criar um outro Custom Web Component para o Google Maps.

### Tecnologias usadas:

É utilizado o seguinte conjunto de tecnologias para criação desse componente:

- **WebComponents** - https://github.com/webcomponents/webcomponentsjs
  - **Custom Elements** - http://www.w3.org/TR/custom-elements/
  - **HTML Imports** - http://www.w3.org/TR/2013/WD-html-imports-20130514/
  - **Shadow DOM** - http://www.w3.org/TR/shadow-dom/
  - **Templates** - http://www.w3.org/TR/components-intro/#template-section

Adicionalmente, foi feito uso das mais novas técnicas para se garantir uma melhor estabilidade do componente:

- **Promise/A+** - https://promisesaplus.com/ com Polyfill para IE9+
- **Geolocation API** - http://dev.w3.org/geo/api/spec-source.html Obtendo a localização do mapa quando não for fornecido nem latitude e longitude e nem um endereço válido
  - **Geolocation FallBack** - Uso do JSONP com Promise/A+ para obtenção da latitude e longitude através da URL http://ip-api.com/json/, no caso do timeout da permissão ou da negação da permissão
- **Element Data Storage** - http://james.padolsey.com/javascript/element-datastorage/ para futuro armazenamento da configuração do mapa em tempo real

### Navegadores/Plataformas Suportadas

> Navegadores com * significa que são apenas os navegadores modernos;

| IE9+ | Edge12 | Chrome* | Firefox* | Safari 7+* | Opera* | Chrome Android* | Mobile Safari* |
|:----:|:------:|:-------:|:--------:|:----------:|:------:|:---------------:|:--------------:|
|  ✓   |    ✓   |    ✓    |     ✓    |      ✓    |    ✓   |        ✓        |        ✓       |

### Características
- Controles Adicionais
  - Possibilidade de seleção de idiomas em tempo real, com todos os 53 idiomas suportados pelo google maps - https://developers.google.com/maps/faq#languagesupport
  - Possibilidade de busca geo-reversa de localidade, através de endereço, com pesquisa instantanea e auto-complete - https://developers.google.com/maps/documentation/javascript/places-autocomplete
  - Além dos controles normais do google maps: como botões de zoom, rotação e tipos de mapas - https://developers.google.com/maps/documentation/javascript/controls
  - Menu de contexto para criação de rotas entre outras funcionalidades - http://googlemapsmania.blogspot.com.br/2012/04/create-google-maps-context-menu.html;
- Pino/Marcador Customizado
  - Possibilidade de customizar o pino/marcador que demarca a coordenada "0" da localidade encontrada, com uma imagem personalizada;
  - Possibilidade de anexar ao pino/marcador eventos de arrastar e soltar de forma que atualizem ou não através de flag booleana um tooltip e/ou um retorno;
- Melhor eficiência, qualidade, padronização, estrutura e consistência;
  - Utilização de Promises/A+ (then/catch) para obtenção da API de Mapas de Google e principamente na obtenção de arquivos externos;
  - Fallback Extremo, com possibilidade de uso do componente até para quando não for oferecido nem latitude e longitude e nem o endereço, assim o mapa tenta fazer uso do Geolocation API, e mesmo que não seja dada permissão para uso do Geolocation API, uma requisição remota é feita para obtenção da latitude e longitude da conexão com base no IP e dessa forma o mapa é gerada, porém não pôde ser testado satisfatóriamente;
- Retorno
  - Capacidade de retornar ou as coordenadas ou o endereço completo de acordo com a geolocalização do mapa ou tipo de entrada fornecida;
  - Também é dado o controle a alguns aspectos da estilização do retorno como bordas, dimensões e etc.
- Direção de escrita
  - Suporte total tanto à LTR quanto à RTL;
  - De acordo com o idioma escolhido o mapa se ajusta totalmente à direção de escrita;

### Limitações Conhecidas
- Street View
  - Constatei tarde demais que o Street View não funciona dentro de um Elemento do Shadow DOM, e infelizmente essa versão por utilizar Shadow DOM, acaba não dando suporte ao uso do Street View;
    - Com Shadow DOM - http://t-code.pl/blog/2015/02/declarative-ui/
    - Sem Shadow DOM - http://googlewebcomponents.github.io/google-map/components/google-map/demo/index.html

### Como Usar

&lt;google-map&gt;&lt;/google-map&gt;