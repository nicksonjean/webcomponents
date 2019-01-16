<?php include_once '../include.php';?>

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-select-embutido" aria-expanded="false" aria-controls="collapse-select-embutido">
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-select-embutido">
                      <?php includeWithVariables('../inc/table_rule.php', array('chosen' => '<small class="table-typografy-xs">select</small>', 'select' => '<small class="table-typografy-xs">select</small>', 'select2' => '<small class="table-typografy-xs">select</small>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_rule_select">Rule State</label>
                    <select class="custom-select form-control"                     is="x-select" x-plugin="select" x-type="state"    x-connect=".cidades_rule_select"                                    x-selected="23"    name="estados_rule_select" id="estados_rule_select" x-dir="rtl" aria-describedby="estados_rule_selectHelpBlock"></select>
                    <small id="estados_rule_selectHelpBlock" class="form-control-feedback">Regra Encadeável dos Estados com Filtragem das Cidades</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_rule_select">Rule City</label>
                    <select class="custom-select form-control cidades_rule_select" is="x-select" x-plugin="select" x-type="city"     x-connect=".bairros_rule_select" x-reference="#estados_rule_select" x-selected="195"   name="cidades_rule_select" id="cidades_rule_select" x-dir="rtl" aria-describedby="cidades_rule_selectHelpBlock"></select>
                    <small id="cidades_rule_selectHelpBlock" class="form-control-feedback">Regra Encadeável das Cidades com Filtragem dos Bairros</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_rule_select">Rule District</label>
                    <select class="custom-select form-control bairros_rule_select" is="x-select" x-plugin="select" x-type="district"                                  x-reference="#cidades_rule_select" x-selected="26495" name="bairros_rule_select" id="bairros_rule_select" x-dir="rtl" aria-describedby="bairros_rule_selectHelpBlock"></select>
                    <small id="bairros_rule_selectHelpBlock" class="form-control-feedback">Regra Não Encadeável das Bairros</small>

                  </div>

                </div>

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-select-externo" aria-expanded="false" aria-controls="collapse-select-externo">
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-select-externo">
                      <?php includeWithVariables('../inc/table_custom.php', array('chosen' => '<small class="table-typografy-xs">select</small>', 'select' => '<small class="table-typografy-xs">select</small>', 'select2' => '<small class="table-typografy-xs">select</small>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_pair_select">Custom State With Pairs</label>
                    <select class="custom-select form-control"                     is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_pair_select" x-value="//ID"                   x-text="//Nome"                                                      x-default="Escolha um Estado"  x-filter="ID" x-selected="23"                      name="estados_pair_select" id="estados_pair_select" aria-describedby="estados_pair_selectHelpBlock"></select>
                    <small id="estados_pair_selectHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_pair_select">Custom City With Pairs</label>
                    <select class="custom-select form-control cidades_pair_select" is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_pair_select" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_pair_select" x-default="Escolha uma Cidade" x-filter="ID" x-selected="195"   x-loader="Estado" name="cidades_pair_select" id="cidades_pair_select" aria-describedby="cidades_pair_selectHelpBlock"></select>
                    <small id="cidades_pair_selectHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_pair_select">Custom District With Pairs</label>
                    <select class="custom-select form-control bairros_pair_select" is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                                  x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_pair_select" x-default="Escolha um Bairro"  x-filter="ID" x-selected="26495" x-loader="Cidade" name="bairros_pair_select" id="bairros_pair_select" aria-describedby="bairros_pair_selectHelpBlock"></select>
                    <small id="bairros_pair_selectHelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-select-externo-template" aria-expanded="false" aria-controls="collapse-select-externo-template">
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-select-externo-template">
                      <?php includeWithVariables('../inc/table_custom_template.php', array('chosen' => '<small class="table-typografy-xs">select</small>', 'select' => '<small class="table-typografy-xs">select</small>', 'select2' => '<small class="table-typografy-xs">select</small>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_template_select">Custom State With Template</label>
                    <select class="custom-select form-control"                         is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Estados_Compacted.json" x-connect=".cidades_template_select" x-value="//ID"                   x-text="//Nome"                                                         x-default="Escolha um Estado"   x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}/{{Sigla}}</option>" x-filter="ID" x-selected="20"                      name="estados_template_select" id="estados_template_select" aria-describedby="estados_template_selectHelpBlock"></select>
                    <small id="estados_template_selectHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_template_select">Custom City With Template</label>
                    <select class="custom-select form-control cidades_template_select" is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Cidades_Compacted.json" x-connect=".bairros_template_select" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_template_select" x-default="Escolha uma Cidade" x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="6068" x-loader="Estado"  name="cidades_template_select" id="cidades_template_select" aria-describedby="cidades_template_selectHelpBlock"></select>
                    <small id="cidades_template_selectHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_template_select">Custom District With Template</label>
                    <select class="custom-select form-control bairros_template_select" is="x-select" x-plugin="select" x-source="http://localhost/componentes_web/webcomponents/x-select/src/data/Bairros_Compacted.json"                                      x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_template_select" x-default="Escolha um Bairro"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="10840" x-loader="Cidade" name="bairros_template_select" id="bairros_template_select" aria-describedby="bairros_template_selectHelpBlock"></select>
                    <small id="bairros_template_selectHelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>