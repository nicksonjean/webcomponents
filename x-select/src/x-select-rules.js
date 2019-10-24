var Rules = Rules || {};
Rules = 
{
  "DEFAULT": {
    "PLACES": {
      "PATTERN": {
        "RULE": {
          "loading": "Carregando...",
          "default": "Escolha uma Opção",
          "source" : function(){ return "source" },
          "value" : function(){ return "value" },
          "text" : function(){ return "text" },
          "filter" : function(){ return "filter" },
          "rightAlign": function(){ return "rightAlign" }
        }
      }
    }
  },
  "PATTERN": {
    "PLACES" : {
      "STATE" : {
        "RULE" : {
          "default" : "Escolha um Estado",
          "source" : "{$__ROOT__}/src/data/Estados_Compacted.json",
          "value" : "//ID",
          "text" : "//Nome",
          "filter" : "ID",
          "rightAlign" : false
        }
      },
      "CITY" : {
        "RULE" : {
          "default" : "Escolha uma Cidade",
          "source" : "{$__ROOT__}/src/data/Cidades_Compacted.json",
          "value" : '//*[Estado="{$ID}"]/ID',
          "text" : '//*[Estado="{$ID}"]/Nome',
          "filter" : "ID",
          "loader" : "Estado",
          "rightAlign" : false
        }
      },
      "DISTRICT" : {
        "RULE" : {
          "default" : "Escolha um Bairro",
          "source" : "{$__ROOT__}/src/data/Bairros_Compacted.json",
          "value" : '//*[Cidade="{$ID}"]/ID',
          "text" : '//*[Cidade="{$ID}"]/Nome',
          "loader" : "Cidade",
          "rightAlign" : false
        }
      }
    }
  }
}