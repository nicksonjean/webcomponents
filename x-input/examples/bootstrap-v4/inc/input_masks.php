<?php include_once '../include.php';?>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="fones_regex has-default"><small style="font-size:10.5px;">Telefone/Celular (DDI + DDD + Telefone/Celular)</small></label>
                    <input class="form-control" is="x-input" x-type="fones_regex" type="tel" name="fones_regex" id="fones_regex" aria-describedby="fones_regexHelpBlock" />
                    <small id="fones_regexHelpBlock" class="form-control-feedback">Pesquisa de Operadora via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="fone has-default"><small style="font-size:11.5px;">Telefone Fixo/Celular (DDD + Telefone/Celular)</small></label>
                    <input class="form-control" is="x-input" x-type="fone" type="tel" name="fone" id="fone" aria-describedby="foneHelpBlock" />
                    <small id="foneHelpBlock" class="form-control-feedback">Pesquisa de Operadora via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="fone_fixo"><small style="font-size:11.5px;">Linha Fixa (0300, 0500, 0800, 0900)</small></label>
                    <input class="form-control" is="x-input" x-type="fone_fixo" type="tel" name="fone_fixo" id="fone_fixo" aria-describedby="fone_fixoHelpBlock" />
                    <small id="fone_fixoHelpBlock" class="form-control-feedback">Pesquisa de Operadora via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="fones"><small style="font-size:11.5px;">Telefones (Telefone Fixo/Celular/Linha Fixa)</small></label>
                    <input class="form-control" is="x-input" x-type="fones" type="tel" name="fones" id="fones" aria-describedby="fonesHelpBlock" />
                    <small id="fonesHelpBlock" class="form-control-feedback">Pesquisa de Operadora via WS</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="placa_veicular">Placa Veicular</label>
                    <input class="form-control" is="x-input" x-type="placa_veicular" type="text" name="placa_veicular" id="placa_veicular" />
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="chassi_veicular">Chassi Veicular</label>
                    <input class="form-control" is="x-input" x-type="chassi_veicular" type="text" name="chassi_veicular" id="chassi_veicular" />
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="isbn">ISBN</label>
                    <input class="form-control" is="x-input" x-type="isbn" type="text" name="isbn" id="isbn" aria-describedby="isbnHelpBlock" />
                    <small id="isbnHelpBlock" class="form-control-feedback">Pesquisa de ISBN via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-default">
                    <label class="form-control-label" for="cep">CEP</label>
                    <input class="form-control" is="x-input" x-type="cep" type="text" name="cep" id="cep" aria-describedby="cepHelpBlock" />
                    <small id="cepHelpBlock" class="form-control-feedback">Pesquisa de Endreço via WS</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="cpf">CPF (Valida o Algorítmo ao Concluir)</label>
                    <input class="form-control" is="x-input" x-type="cpf" x-valid="true" type="text" name="cpf" id="cpf" aria-describedby="cpfHelpBlock" />
                    <small id="cpfHelpBlock" class="form-control-feedback">Pesquisa de Situação Cadastral via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="cnpj">CNPJ (Valida o Algorítmo ao Concluir)</label>
                    <input class="form-control" is="x-input" x-type="cnpj" x-valid="true" type="text" name="cnpj" id="cnpj" aria-describedby="cnpjHelpBlock" />
                    <small id="cnpjHelpBlock" class="form-control-feedback">Pesquisa de Situação Cadastral via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="cpf_cnpj">CPF/CNPJ (Valida o Algorítmo ao Sair)</label>
                    <input class="form-control" is="x-input" x-type="cpf_cnpj" x-valid="true" type="text" name="cpf_cnpj" id="cpf_cnpj" aria-describedby="cpf_cnpjHelpBlock" />
                    <small id="cpf_cnpjHelpBlock" class="form-control-feedback">Pesquisa de Situação Cadastral via WS</small>
                  </div>
                </div>