                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_rule_select2">Rule State</label>
                    <select class="custom-select form-control"                     is="x-select" x-plugin="select2" x-type="state"    x-connect=".cidades_rule_select2"                                    x-selected="23"    name="estados_rule_select2" id="estados_rule_select2" x-dir="rtl" aria-describedby="estados_rule_select2HelpBlock"></select>
                    <small id="estados_rule_select2HelpBlock" class="form-control-feedback">Regra Encadeável dos Estados com Filtragem das Cidades</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_rule_select2">Rule City</label>
                    <select class="custom-select form-control cidades_rule_select2" is="x-select" x-plugin="select2" x-type="city"     x-connect=".bairros_rule_select2" x-reference="#estados_rule_select2" x-selected="195"   name="cidades_rule_select2" id="cidades_rule_select2" x-dir="rtl" aria-describedby="cidades_rule_select2HelpBlock"></select>
                    <small id="cidades_rule_select2HelpBlock" class="form-control-feedback">Regra Encadeável das Cidades com Filtragem dos Bairros</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_rule_select2">Rule District</label>
                    <select class="custom-select form-control bairros_rule_select2" is="x-select" x-plugin="select2" x-type="district"                                  x-reference="#cidades_rule_select2" x-selected="26495" name="bairros_rule_select2" id="bairros_rule_select2" x-dir="rtl" aria-describedby="bairros_rule_select2HelpBlock"></select>
                    <small id="bairros_rule_select2HelpBlock" class="form-control-feedback">Regra Não Encadeável das Bairros</small>

                  </div>

                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_pair_select2">Custom State With Pairs</label>
                    <select class="custom-select form-control"                     is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_pair_select2" x-value="//ID"                   x-text="//Nome"                                                      x-default="Escolha um Estado"  x-filter="ID" x-selected="23"                      name="estados_pair_select2" id="estados_pair_select2" aria-describedby="estados_pair_select2HelpBlock"></select>
                    <small id="estados_pair_select2HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_pair_select2">Custom City With Pairs</label>
                    <select class="custom-select form-control cidades_pair_select2" is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_pair_select2" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_pair_select2" x-default="Escolha uma Cidade" x-filter="ID" x-selected="195"   x-loader="Estado" name="cidades_pair_select2" id="cidades_pair_select2" aria-describedby="cidades_pair_select2HelpBlock"></select>
                    <small id="cidades_pair_select2HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_pair_select2">Custom District With Pairs</label>
                    <select class="custom-select form-control bairros_pair_select2" is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                                  x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_pair_select2" x-default="Escolha um Bairro"  x-filter="ID" x-selected="26495" x-loader="Cidade" name="bairros_pair_select2" id="bairros_pair_select2" aria-describedby="bairros_pair_select2HelpBlock"></select>
                    <small id="bairros_pair_select2HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_template_select2">Custom State With Template</label>
                    <select class="custom-select form-control"                         is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_template_select2" x-value="//ID"                   x-text="//Nome"                                                         x-default="Escolha um Estado"   x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}/{{Sigla}}</option>" x-filter="ID" x-selected="20"                      name="estados_template_select2" id="estados_template_select2" aria-describedby="estados_template_select2HelpBlock"></select>
                    <small id="estados_template_select2HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_template_select2">Custom City With Template</label>
                    <select class="custom-select form-control cidades_template_select2" is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_template_select2" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_template_select2" x-default="Escolha uma Cidade" x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="6068" x-loader="Estado"  name="cidades_template_select2" id="cidades_template_select2" aria-describedby="cidades_template_select2HelpBlock"></select>
                    <small id="cidades_template_select2HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_template_select2">Custom District With Template</label>
                    <select class="custom-select form-control bairros_template_select2" is="x-select" x-plugin="select2" x-source="http://192.168.1.2/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                                      x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_template_select2" x-default="Escolha um Bairro"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="10840" x-loader="Cidade" name="bairros_template_select2" id="bairros_template_select2" aria-describedby="bairros_template_select2HelpBlock"></select>
                    <small id="bairros_template_select2HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>