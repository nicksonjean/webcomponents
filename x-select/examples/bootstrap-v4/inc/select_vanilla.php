                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_rule">Rule State</label>
                    <select class="custom-select form-control"              is="x-select" x-type="state"    x-connect=".cidades_rule"                             x-selected="23"    name="estados_rule" id="estados_rule" x-dir="rtl" aria-describedby="estados_ruleHelpBlock"></select>
                    <small id="estados_ruleHelpBlock" class="form-control-feedback">Regra Encadeável dos Estados com Filtragem das Cidades</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_rule">Rule City</label>
                    <select class="custom-select form-control cidades_rule" is="x-select" x-type="city"     x-connect=".bairros_rule" x-reference="#estados_rule" x-selected="195"   name="cidades_rule" id="cidades_rule" x-dir="rtl" aria-describedby="cidades_ruleHelpBlock"></select>
                    <small id="cidades_ruleHelpBlock" class="form-control-feedback">Regra Encadeável das Cidades com Filtragem dos Bairros</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_rule">Rule District</label>
                    <select class="custom-select form-control bairros_rule" is="x-select" x-type="district"                           x-reference="#cidades_rule" x-selected="26495" name="bairros_rule" id="bairros_rule" x-dir="rtl" aria-describedby="bairros_ruleHelpBlock"></select>
                    <small id="bairros_ruleHelpBlock" class="form-control-feedback">Regra Não Encadeável das Bairros</small>

                  </div>

                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_pair">Custom State With Pairs</label>
                    <select class="custom-select form-control"              is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_pair" x-value="//ID"                   x-text="//Nome"                                               x-default="Escolha um Estado"  x-filter="ID" x-selected="23"                     name="estados_pair" id="estados_pair" aria-describedby="estados_pairHelpBlock"></select>
                    <small id="estados_pairHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_pair">Custom City With Pairs</label>
                    <select class="custom-select form-control cidades_pair" is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_pair" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_pair" x-default="Escolha uma Cidade" x-filter="ID" x-selected="195" x-loader="Estado" name="cidades_pair" id="cidades_pair" aria-describedby="cidades_pairHelpBlock"></select>
                    <small id="cidades_pairHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_pair">Custom District With Pairs</label>
                    <select class="custom-select form-control bairros_pair" is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                           x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_pair" x-default="Escolha um Bairro"  x-filter="ID" x-selected="26495" x-loader="Cidade" name="bairros_pair" id="bairros_pair" aria-describedby="bairros_pairHelpBlock"></select>
                    <small id="bairros_pairHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_template">Custom State With Template</label>
                    <select class="custom-select form-control"                  is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_template" x-value="//ID"                   x-text="//Nome"                                                   x-default="Escolha um Estado"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}/{{Sigla}}</option>" x-filter="ID" x-selected="20"                     name="estados_template" id="estados_template" aria-describedby="estados_templateHelpBlock"></select>
                    <small id="estados_templateHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_template">Custom City With Template</label>
                    <select class="custom-select form-control cidades_template" is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_template" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_template" x-default="Escolha uma Cidade" x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="6068" x-loader="Estado" name="cidades_template" id="cidades_template" aria-describedby="cidades_templateHelpBlock"></select>
                    <small id="cidades_templateHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_template">Custom District With Template</label>
                    <select class="custom-select form-control bairros_template" is="x-select" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                               x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_template" x-default="Escolha um Bairro"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="10840" x-loader="Cidade" name="bairros_template" id="bairros_template" aria-describedby="bairros_templateHelpBlock"></select>
                    <small id="bairros_templateHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>