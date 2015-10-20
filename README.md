# Google-Map (Custom Web Element AllInOne)

> Minha própria versão do Custom Web Component para o Google Maps.

Sei que já existe um Web Component criado pela própria Google, 
desenvolvido com Polymer para o Google Maps, porém, este é 
bastante descentralizado, por possuir componentes separados para 
cada aspecto do uso dos Mapas do Google em geral, além de considerar
seu uso um tanto quanto dificil em sistemas web automatizados e alem
do mais acho o polymer bastante pesado, e foi por isso que tomei essa
iniciativa de criar um outro Custom Web Component para o Google Maps.

## Tecnologias usadas:

Utilizo o seguinte conjunto de tecnologias para criação desse componente:

- **WebComponents** - https://github.com/webcomponents/webcomponentsjs
  - **Custom Elements** - http://www.w3.org/TR/custom-elements/
  - **HTML Imports** - http://www.w3.org/TR/2013/WD-html-imports-20130514/
  - **Shadow DOM** - http://www.w3.org/TR/shadow-dom/
  - **Templates** - http://www.w3.org/TR/components-intro/#template-section

Adicionalmente:

- **Promises/A+** - https://promisesaplus.com/
- **Geolocation API** - http://dev.w3.org/geo/api/spec-source.html
- **Element Data Storage** - http://james.padolsey.com/javascript/element-datastorage/


## Pre-requisitos

| Supporte   | IE9+ | Edge12 | Chrome* | Firefox* | Safari 7+* | Opera* | Chrome Android* | Mobile Safari* |
| ---------- |:----:|:------:|:-------:|:--------:|:----------:|:------:|:---------------:|:--------------:|
|            |  ✓   |    ✓   |    ✓    |     ✓    |      ✓    |    ✓   |        ✓        |        ✓       |


## Características
- Controles Adicionais
  - Possibilidade de seletor customizado de idiomas em tempo real, com todos os 53 idiomas suportados pelo google maps;
  - Possibilidade de busca geo-reversa de localidade, através de endereço, com pesquisa instantanea;
  - Além dos controles normais do google maps: como botões de zoom, rotação e tipos de mapas;
  - Menu de contexto para criação de rotas entre outras funcionalidades;
- Pin/Marcador Customizado
  - Possibilidade de customizar o pin/marcador que demarca a coordenada "0" da localidade encontrada, com uma imagem personalizada;
  - Possibilidade de anexar ao marcador eventos de arrastar e soltar de forma que atualizem ou não através de flag o tooltip e o retorno;
- Melhora da eficiência, qualidade, padronização, estrutura, Escalabilidade e consistência;
  - Utilização de Promises/A+ (then/catch) para obtenção da API de Mapas de Google e principamente na obtenção de arquivos externos;
  - Fallback Extremo, com possibilidade de uso do componente até para quando não for oferecido nem latitude e longitude e nem o endereço, assim o mapa tenta fazer uso do Geolocation API, e mesmo que não seja dada permissão para uso do Geolocation API, uma requisição remota é feita para obtenção da latitude e longitude da conexão com base no IP e dessa forma o mapa é gerada, porém não pôde ser testado satisfatóriamente;
- Retorno
  - É dado a capacidade de retornar ou as coordenadas ou o endereço completo de acordo com a geolocalização do mapa;
  - Também é dado o controle a alguns aspectos da estilização do retorno como bordas, dimensões e etc.
- LTR/RTL
  - De acordo com o idioma escolhido o mapa se ajusta totalmente à direção de escrita;


## Limitações Conhecidas
- Street View
  - Descobri que o Street View não funciona dentro de um shadow element muito tarde, e infelizmente essa versão por utilizar Shadow DOM, acaba não dando suporte ao uso do Street View;


## Como Usar

