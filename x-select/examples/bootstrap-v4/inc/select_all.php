                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" id="<?php echo $type;?>-embutido" href="#collapse-<?php echo $type;?>-embutido" aria-expanded="false" aria-controls="collapse-<?php echo $type;?>-embutido">
                      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-<?php echo $type;?>-embutido">
                      <?php includeWithVariables('inc/table_rule.php', array('chosen' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select2' => '<i class="fa fa-minus" aria-hidden="true"></i>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_<?php echo $rule;?>">Rule State</label>
                    <select class="custom-select form-control"              is="x-select" <?php echo $plugin;?> x-type="state"    x-connect=".cidades_<?php echo $rule;?>"                             x-selected="23"    name="estados_<?php echo $rule;?>" id="estados_<?php echo $rule;?>" x-dir="rtl" aria-describedby="estados_<?php echo $rule;?>HelpBlock"></select>
                    <small id="estados_<?php echo $rule;?>HelpBlock" class="form-control-feedback">Regra Encadeável dos Estados com Filtragem das Cidades</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_<?php echo $rule;?>">Rule City</label>
                    <select class="custom-select form-control cidades_<?php echo $rule;?>" is="x-select" <?php echo $plugin;?> x-type="city"     x-connect=".bairros_<?php echo $rule;?>" x-reference="#estados_<?php echo $rule;?>" x-selected="195"   name="cidades_<?php echo $rule;?>" id="cidades_<?php echo $rule;?>" x-dir="rtl" aria-describedby="cidades_<?php echo $rule;?>HelpBlock"></select>
                    <small id="cidades_<?php echo $rule;?>HelpBlock" class="form-control-feedback">Regra Encadeável das Cidades com Filtragem dos Bairros</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_<?php echo $rule;?>">Rule District</label>
                    <select class="custom-select form-control bairros_<?php echo $rule;?>" is="x-select" <?php echo $plugin;?> x-type="district"                           x-reference="#cidades_<?php echo $rule;?>" x-selected="26495" name="bairros_<?php echo $rule;?>" id="bairros_<?php echo $rule;?>" x-dir="rtl" aria-describedby="bairros_<?php echo $rule;?>HelpBlock"></select>
                    <small id="bairros_<?php echo $rule;?>HelpBlock" class="form-control-feedback">Regra Não Encadeável das Bairros</small>

                  </div>

                </div>

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" id="<?php echo $type;?>-externo" href="#collapse-<?php echo $type;?>-externo" aria-expanded="false" aria-controls="collapse-<?php echo $type;?>-externo">
                      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-<?php echo $type;?>-externo">
                      <?php includeWithVariables('inc/table_custom.php', array('chosen' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select2' => '<i class="fa fa-minus" aria-hidden="true"></i>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_<?php echo $pair;?>">Custom State With Pairs</label>
                    <select class="custom-select form-control"              is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Estados_Compacted.json" x-connect=".cidades_<?php echo $pair;?>" x-value="//ID"                   x-text="//Nome"                                               x-default="Escolha um Estado"  x-filter="ID" x-selected="23"                      name="estados_<?php echo $pair;?>" id="estados_<?php echo $pair;?>" aria-describedby="estados_<?php echo $pair;?>HelpBlock"></select>
                    <small id="estados_<?php echo $pair;?>HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_<?php echo $pair;?>">Custom City With Pairs</label>
                    <select class="custom-select form-control cidades_<?php echo $pair;?>" is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Cidades_Compacted.json" x-connect=".bairros_<?php echo $pair;?>" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_<?php echo $pair;?>" x-default="Escolha uma Cidade" x-filter="ID" x-selected="195"   x-loader="Estado" name="cidades_<?php echo $pair;?>" id="cidades_<?php echo $pair;?>" aria-describedby="cidades_<?php echo $pair;?>HelpBlock"></select>
                    <small id="cidades_<?php echo $pair;?>HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_<?php echo $pair;?>">Custom District With Pairs</label>
                    <select class="custom-select form-control bairros_<?php echo $pair;?>" is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Bairros_Compacted.json"                           x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_<?php echo $pair;?>" x-default="Escolha um Bairro"  x-filter="ID" x-selected="26495" x-loader="Cidade" name="bairros_<?php echo $pair;?>" id="bairros_<?php echo $pair;?>" aria-describedby="bairros_<?php echo $pair;?>HelpBlock"></select>
                    <small id="bairros_<?php echo $pair;?>HelpBlock" class="form-control-feedback">JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" id="<?php echo $type;?>-externo-template" href="#collapse-<?php echo $type;?>-externo-template" aria-expanded="false" aria-controls="collapse-<?php echo $type;?>-externo-template">
                      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-<?php echo $type;?>-externo-template">
                      <?php includeWithVariables('inc/table_custom_template.php', array('chosen' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select' => '<i class="fa fa-minus" aria-hidden="true"></i>', 'select2' => '<i class="fa fa-minus" aria-hidden="true"></i>')); ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="estados_<?php echo $template;?>">Custom State With Template</label>
                    <select class="custom-select form-control"                  is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Estados_Compacted.json" x-connect=".cidades_<?php echo $template;?>" x-value="//ID"                   x-text="//Nome"                                                   x-default="Escolha um Estado"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}/{{Sigla}}</option>" x-filter="ID" x-selected="20"                     name="estados_<?php echo $template;?>" id="estados_<?php echo $template;?>" aria-describedby="estados_<?php echo $template;?>HelpBlock"></select>
                    <small id="estados_<?php echo $template;?>HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="cidades_<?php echo $template;?>">Custom City With Template</label>
                    <select class="custom-select form-control cidades_<?php echo $template;?>" is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Cidades_Compacted.json" x-connect=".bairros_<?php echo $template;?>" x-value='//*[Estado="{$ID}"]/ID' x-text='//*[Estado="{$ID}"]/Nome' x-reference="#estados_<?php echo $template;?>" x-default="Escolha uma Cidade" x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="6068" x-loader="Estado" name="cidades_<?php echo $template;?>" id="cidades_<?php echo $template;?>" aria-describedby="cidades_<?php echo $template;?>HelpBlock"></select>
                    <small id="cidades_<?php echo $template;?>HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">

                    <label class="form-control-label" for="bairros_<?php echo $template;?>">Custom District With Template</label>
                    <select class="custom-select form-control bairros_<?php echo $template;?>" is="x-select" <?php echo $plugin;?> x-source="<?php echo WEB_ROOT;?>/src/data/Bairros_Compacted.json"                               x-value='//*[Cidade="{$ID}"]/ID' x-text='//*[Cidade="{$ID}"]/Nome' x-reference="#cidades_<?php echo $template;?>" x-default="Escolha um Bairro"  x-template="<option value='{{ID}}'>{{Codigo_IBGE}} - {{Nome}}</option>"           x-filter="ID" x-selected="10840" x-loader="Cidade" name="bairros_<?php echo $template;?>" id="bairros_<?php echo $template;?>" aria-describedby="bairros_<?php echo $template;?>HelpBlock"></select>
                    <small id="bairros_<?php echo $template;?>HelpBlock" class="form-control-feedback">Custom Template, JSON Dinâmico, Pré-Seleção, Encadeável</small>

                  </div>

                </div>