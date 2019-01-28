<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title> X-Input - Bootstrap v4 </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="black">
    <meta name="description" content="X-Select é um Componente para Criação de Campos de Formulário Inteligentes e com Comportamento e Máscara, Util para Criação de Formulários Ricos">
    <!-- Bootstrap v4.2.1 -->
    <link rel="stylesheet" href="plugins/bootstrap-v4/dist/css/bootstrap-4.2.1.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap-v4/dist/css/bootstrap-4.2.1.fix.css" />
    <!-- Datatables for Bootstrap v4-->
    <link rel="stylesheet" href="plugins/bootstrap-responsive-datatables/dist/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap-responsive-datatables/dist/css/responsive.bootstrap4.min.css" />
    <!-- Bootstrap Responsive Tabs v2.0.1 -->
    <link rel="stylesheet" href="plugins/bootstrap-responsive-tabs/dist/css/bootstrap-responsive-tabs.css" />
    <!-- Font Awesome 4.6.1 -->
    <link rel="stylesheet" href="plugins/font-awesome/dist/css/font-awesome.min.css" />
  </head>
  <body>

    <div class="container py-5">

      <form action="../submit_form.php" method="post">
        <header><h1>Web Component</h1></header>
        <header><h3>&lt;input is="x-input" /&gt;</h3></header><br />
        <hr /><br />

        <div class="row">
          <div class="col-12">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs responsive-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#numeric" role="tab">Numérico</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#decimal" role="tab">Decimal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#masks" role="tab">Máscaras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#datetime" role="tab">Data/Hora</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <br />

              <div class="tab-pane active" id="numeric" role="tabpanel">

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-integer" aria-expanded="false" aria-controls="collapse-example">
                      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-integer">
                      <?php include 'inc/table_integer.php'; ?>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="positiveint">Unsigned Int (Positivo Apenas)</label>
                    <input class="form-control" is="x-input" x-type="positiveint" type="text" name="positiveint" id="positiveint" aria-describedby="positiveintHelpBlock" />
                    <small id="positiveintHelpBlock" class="form-control-feedback">De 0 à 18446744073709552000</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="negativeint">Negative Int (Negativo Apenas)</label>
                    <input class="form-control" is="x-input" x-type="negativeint" type="text" name="negativeint" id="negativeint" aria-describedby="negativeintHelpBlock" />
                    <small id="negativeintHelpBlock" class="form-control-feedback">De -9223372036854776000 à 0</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="percentint" style="font-size:15px;">Signed Percent (Negativo & Positivo)</label>
                    <input class="form-control" is="x-input" x-type="percentint" type="text" name="percentint" id="percentint" aria-describedby="percentintHelpBlock" />
                    <small id="percentintHelpBlock" class="form-control-feedback">De -100 à 100</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="zerofillint" style="font-size:15px;">Signed ZeroFill (Negativo & Positivo)</label>
                    <input class="form-control" is="x-input" x-type="zerofillint" type="text" name="zerofillint" id="zerofillint" aria-describedby="zerofillintHelpBlock" />
                    <small id="zerofillintHelpBlock" class="form-control-feedback" style="font-size:10.5px">De -9223372036854776000 à 9223372036854776000</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="smallint">Signed SmallInt</label>
                    <input class="form-control" is="x-input" x-type="smallint" type="text" name="smallint" id="smallint" aria-describedby="smallintHelpBlock" />
                    <small id="smallintHelpBlock" class="form-control-feedback">De -32767 à 32767</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="mediumint">Signed MediumInt</label>
                    <input class="form-control" is="x-input" x-type="mediumint" type="text" name="mediumint" id="mediumint" aria-describedby="mediumintHelpBlock" />
                    <small id="mediumintHelpBlock" class="form-control-feedback">De -8388607 à 8388607</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="integer">Signed Int</label>
                    <input class="form-control" is="x-input" x-type="integer" type="text" name="integer" id="integer" aria-describedby="integerHelpBlock" />
                    <small id="integerHelpBlock" class="form-control-feedback">De –2147483647 à 2147483647</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="bigint">Signed BigInt</label>
                    <input class="form-control" is="x-input" x-type="bigint" type="text" name="bigint" id="bigint" aria-describedby="bigintHelpBlock" />
                    <small id="bigintHelpBlock" class="form-control-feedback" style="font-size:10.5px">De -9223372036854776000 à 9223372036854776000</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_bigint_prefixo_negativo"><small style="font-size:15.5px">Custom Signed BigInt (Com Prefixo)</small></label>
                    <input class="form-control" is="x-input" x-type="bigint" x-case="signed" x-negative="true" x-affinity="-" x-dir="ltr" x-prefix="≈ " x-min="0" x-max="10000000000" type="text" name="custom_bigint_prefixo_negativo" id="custom_bigint_prefixo_negativo" aria-describedby="custom_bigint_prefixo_negativoHelpBlock" />
                    <small id="custom_bigint_prefixo_negativoHelpBlock" class="form-control-feedback">De -10000000000 à 10000000000</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_bigint_prefixo"><small style="font-size:14.5px">Custom Unsigned BigInt (Com Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="bigint" x-case="unsigned" x-negative="false" x-dir="ltr" x-sufix=" °K" x-min="0" x-max="10000000000" type="text" name="custom_bigint_prefixo" id="custom_bigint_prefixo" aria-describedby="custom_bigint_prefixoHelpBlock" />
                    <small id="custom_bigint_prefixoHelpBlock" class="form-control-feedback">De 0 à 10000000000</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_bigint_sufixo"><small style="font-size:14.5px">Custom Unsigned BigInt (Com Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="bigint" x-case="unsigned" x-negative="false" x-dir="ltr" x-sufix=" °C" x-min="0" x-max="10000000000" type="text" name="custom_bigint_sufixo" id="custom_bigint_sufixo" aria-describedby="custom_bigint_sufixoHelpBlock" />
                    <small id="custom_bigint_sufixoHelpBlock" class="form-control-feedback">De 0 à 10000000000</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_bigint_negativo"><small style="font-size:12px">Custom Signed BigInt (Com Prefixo & Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="bigint" x-affinity="+" x-dir="ltr" x-prefix="± " x-sufix=" °F" x-min="0" x-max="10000000000" type="text" name="custom_bigint_negativo" id="custom_bigint_negativo" aria-describedby="custom_bigint_negativoHelpBlock" />
                    <small id="custom_bigint_negativoHelpBlock" class="form-control-feedback">De -10000000000 à 10000000000</small>
                  </div>
                </div>

              </div>

              <div class="tab-pane" id="decimal" role="tabpanel">

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-decimal" aria-expanded="false" aria-controls="collapse-example">
                      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">

                    <div class="collapse" id="collapse-decimal">

                      <div class="table table-responsive table-striped table-condensed table-hover">
                        <?php include 'inc/table_decimal.php'; ?>
                        <?php include 'inc/table_currency.php'; ?>
                      </div>
                      <?php include 'inc/input_iso_4217.php'; ?>

                      <br />
                    </div>

                  </div>
                </div>

                <div class="form-group row">

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="positivedec"><small style="font-size:15.5px">Unsigned Decimal (Positivo Apenas)</small></label>
                    <input class="form-control" is="x-input" x-type="positivedec" type="text" name="positivedec" id="positivedec" aria-describedby="positivedecHelpBlock" />
                    <small id="positiveintHelpBlock" class="form-control-feedback">De 0.00 à 18446744073709552000.00</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="negativedec"><small style="font-size:15.5px">Negative Decimal (Negativo Apenas)</small></label>
                    <input class="form-control" is="x-input" x-type="negativedec" type="text" name="negativedec" id="negativedec" aria-describedby="negativedecHelpBlock" />
                    <small id="negativedecHelpBlock" class="form-control-feedback">De –9223372036854776000.00 à 0.00</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="percentdec" style="font-size:15px;">Signed Percent (Negativo & Positivo)</label>
                    <input class="form-control" is="x-input" x-type="percentdec" type="text" name="percentdec" id="percentdec" aria-describedby="percentdecHelpBlock" />
                    <small id="percentdecHelpBlock" class="form-control-feedback">De -100.00 à 100.00</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="zerofilldec" style="font-size:15px;">Signed ZeroFill (Negativo & Positivo)</label>
                    <input class="form-control" is="x-input" x-type="zerofilldec" type="text" name="zerofilldec" id="zerofilldec" aria-describedby="zerofilldecHelpBlock" />
                    <small id="zerofilldecHelpBlock" class="form-control-feedback" style="font-size:9.5px">De -9223372036854776000.00 à 9223372036854776000.00</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="smalldec">Signed SmallDecimal</label>
                    <input class="form-control" is="x-input" x-type="decimal" x-min="-32767" x-max="32767" type="text" name="smalldec" id="smalldec" aria-describedby="smalldecHelpBlock" />
                    <small id="smalldecHelpBlock" class="form-control-feedback">De -32767.00 à 32767.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="mediumdec">Signed MediumDecimal</label>
                    <input class="form-control" is="x-input" x-type="decimal" x-min="-8388607" x-max="8388607" type="text" name="mediumdec" id="mediumdec" aria-describedby="mediumdecHelpBlock" />
                    <small id="mediumdecHelpBlock" class="form-control-feedback">De -8388607.00 à 8388607.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="decimal">Signed Decimal</label>
                    <input class="form-control" is="x-input" x-type="decimal" x-min="-2147483647" x-max="2147483647" type="text" name="decimal" id="decimal" aria-describedby="decimalHelpBlock" />
                    <small id="decimalHelpBlock" class="form-control-feedback">De –2147483647.00 à 2147483647.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="bigdec">Big Decimal</label>
                    <input class="form-control" is="x-input" x-type="decimal" x-min="-9223372036854776000" x-max="9223372036854776000"  type="text" name="decimal_custom_4decimals" id="decimal_custom_4decimals" aria-describedby="bigdecHelpBlock" />
                    <small id="bigdecHelpBlock" class="form-control-feedback" style="font-size:9.5px">De -9223372036854776000.00 à 9223372036854776000.00</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_decimal_prefixo_negativo"><small style="font-size:14.5px">Custom Signed Decimal (Com Prefixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-case="signed" x-negative="true" x-affinity="-" x-dir="ltr" x-prefix="≈ " x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="3" x-max="10000000000" type="text" name="custom_decimal_prefixo_negativo" id="custom_decimal_prefixo_negativo" aria-describedby="custom_decimal_prefixo_negativoHelpBlock" />
                    <small id="custom_decimal_prefixo_negativoHelpBlock" class="form-control-feedback">De -10000000000.00 à 10000000000.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_decimal_prefixo"><small style="font-size:14px">Custom Unsigned Decimal (Com Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-case="unsigned" x-negative="false" x-dir="ltr" x-sufix=" °K" x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="4" x-max="10000000000" type="text" name="custom_decimal_prefixo" id="custom_decimal_prefixo" aria-describedby="custom_decimal_prefixoHelpBlock" />
                    <small id="custom_decimal_prefixoHelpBlock" class="form-control-feedback">De 0 à 10000000000.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_decimal_sufixo"><small style="font-size:14.5px">Custom Unsigned Decimal (Com Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-case="unsigned" x-negative="false" x-dir="ltr" x-sufix=" °C" x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="6" x-max="10000000000" type="text" name="custom_decimal_sufixo" id="custom_decimal_sufixo" aria-describedby="custom_decimal_sufixoHelpBlock" />
                    <small id="custom_decimal_sufixoHelpBlock" class="form-control-feedback">De 0 à 10000000000.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_decimal_negativo"><small style="font-size:12px">Custom Signed Decimal (Com Prefixo & Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-affinity="+" x-dir="ltr" x-prefix="± " x-sufix=" °F" x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="6" x-max="10000000000" type="text" name="custom_decimal_negativo" id="custom_decimal_negativo" aria-describedby="custom_decimal_negativoHelpBlock" />
                    <small id="custom_decimal_negativoHelpBlock" class="form-control-feedback">De -10000000000.00 à 10000000000.00</small>
                  </div>
                </div>

              </div>

              <div class="tab-pane" id="masks" role="tabpanel">

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

              </div>

              <div class="tab-pane" id="datetime" role="tabpanel">

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 has-default">
                    <label class="form-control-label" for="data_br">Data [BR] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="data_br" type="text" name="data_br" id="data_br" aria-describedby="data_br" />
                    <small id="data_brHelpBlock" class="form-control-feedback">Pesquisa de Feriados Nacionais via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 has-default">
                    <label class="form-control-label" for="data_iso">Data [ISO] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="data_iso" type="text" name="data_iso" id="data_iso" aria-describedby="data_isoHelpBlock" />
                    <small id="data_isoHelpBlock" class="form-control-feedback">Pesquisa de Feriados Nacionais via WS</small>
                  </div>
                </div>

                <div class="form-group row d-none">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-warning">
                    <label class="form-control-label" for="data_br_regex">Data [BR Regex] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="data_br_regex" type="text" name="data_br_regex" id="data_br_regex" aria-describedby="data_br_regexHelpBlock" />
                    <small id="data_br_regexHelpBlock" class="form-control-feedback">Pesquisa de Feriados Nacionais via WS</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3has-warning">
                    <label class="form-control-label" for="data_iso_regex">Data [ISO Regex] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="data_iso_regex" type="text" name="data_iso_regex" id="data_iso_regex" aria-describedby="data_iso_regexHelpBlock" />
                    <small id="data_iso_regexHelpBlock" class="form-control-feedback">Pesquisa de Feriados Nacionais via WS</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora">Hora (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora" type="text" name="hora" id="hora" aria-describedby="hora" />
                    <small id="horaHelpBlock" class="form-control-feedback">Formato Padrão de 24h</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora_12">Hora (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora" x-format="12h" type="text" name="hora_12" id="hora_12" aria-describedby="hora_12" />
                    <small id="hora_12HelpBlock" class="form-control-feedback">Formato de 12h sem Meridians</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora_24">Hora (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora" x-format="24h" type="text" name="hora_24" id="hora_24" aria-describedby="hora_24" />
                    <small id="hora_24HelpBlock" class="form-control-feedback">Formato de 24h sem Meridians</small>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora_regex">Hora [Regex] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora_regex" type="text" name="hora_regex" id="hora_regex" aria-describedby="hora_regex" />
                    <small id="hora_regexHelpBlock" class="form-control-feedback">Formato Padrão de 24h</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora_regex_12">Hora [Regex] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora_regex" x-format="12h" type="text" name="hora_regex_12" id="hora_regex_12" aria-describedby="hora_regex_12" />
                    <small id="hora_regex_12HelpBlock" class="form-control-feedback">Formato de 12h sem Meridians</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 has-default">
                    <label class="form-control-label" for="hora_regex_24">Hora [Regex] (Valida ao Digitar)</label>
                    <input class="form-control" is="x-input" x-type="hora_regex" x-format="24h" type="text" name="hora_regex_24" id="hora_regex_24" aria-describedby="hora_regex_24" />
                    <small id="hora_regex_24HelpBlock" class="form-control-feedback">Formato de 24h sem Meridians</small>
                  </div>
                </div>

                <div class="form-group row ">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 has-default">
                    <label class="form-control-label" for="data_hora_br">Data/Hora [BR]</label>
                    <input class="form-control" is="x-input" x-type="data_hora_br" type="text" name="data_hora_br" id="data_hora_br" aria-describedby="data_hora_br" />
                    <small id="data_hora_brHelpBlock" class="form-control-feedback">Formato Padrão de 24h</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 has-default">
                    <label class="form-control-label" for="data_hora_iso">Data/Hora [ISO]</label>
                    <input class="form-control" is="x-input" x-type="data_hora_iso" type="text" name="data_hora_iso" id="data_hora_iso" aria-describedby="data_hora_iso" />
                    <small id="data_hora_isoHelpBlock" class="form-control-feedback">Formato de 24h sem Meridians</small>
                  </div>
                </div>

              </div>

            </div>

            <button type="submit" class="btn btn-primary new-btn-blue-color">Submeter</button>

          </div>
        </div>

      </form>

    </div>

    <!-- jQuery 3.3.1 -->
    <!--[if gte IE 9]><!-->
      <script type="text/javascript" src="plugins/jquery/dist/js/jquery-3.3.1.min.js"></script>
      <script>window.jQuery || document.write('<script type="text/javascript" src="plugins/jquery/dist/js/jquery-3.3.1.min.js"><\/script>')</script>
    <!--<![endif]-->
    <!--[if lt IE 9]>
      <script type="text/javascript" src="plugins/jquery/dist/js/jquery-1.12.4.min.js"></script>
      <script>window.jQuery || document.write('<script type="text/javascript" src="plugins/jquery/dist/js/jquery-1.12.4.min.js"><\/script>')</script>
    <![endif]-->
    <!-- Popper 1.14.6 -->
    <script type="text/javascript" src="plugins/bootstrap-v4/dist/js/popper-1.14.6.min.js"></script>
    <!-- Bootstrap v4.2.1 -->
    <script type="text/javascript" src="plugins/bootstrap-v4/dist/js/bootstrap-4.2.1.min.js"></script>
    <!-- Datatables for Bootstrap v4-->
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.responsive.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/responsive.bootstrap4.min.js"></script>
    <!-- Bootstrap Responsive Tabs v2.0.1 -->
    <script type="text/javascript" src="plugins/bootstrap-responsive-tabs/dist/js/jquery.bootstrap-responsive-tabs.js"></script>
    <!-- Polyfill classList 0.0.20130621 https://github.com/remy/polyfills -->
    <!-- Polyfill html5shiv 3.7.3 https://cdn.jsdelivr.net/g/html5shiv@3.7.3 -->
    <!--[if IE 9]>
      <link href="../../polyfills/bootstrap-ie9.css" rel="stylesheet">
      <script type="text/javascript" src="../../polyfills/classList.js">
      <script type="text/javascript" src="../../polyfills/html5shiv.js"></script>
    <![endif]-->
    <!--[if IE 8]>
      <link href="../../polyfills/bootstrap-ie8.css" rel="stylesheet">
    <![endif]-->
    <!-- WebComponents Polyfill 0.7.24 -->
    <script type="text/javascript" src="../../../bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <!-- X-Input WebComponent v0.5a-->
    <!--<link rel="import" href="../../src/x-input.html">-->
    <link rel="import" href="../../dist/standalone/x-input.min.html">
    <script>
      $(function(){

        $('.collapse')
            .on('shown.bs.collapse', function() {
                $(this)
                    .closest(".row")
                    .parent()
                    .find(".fa-chevron-down")
                    .removeClass("fa-chevron-down")
                    .addClass("fa-chevron-up");
            })
            .on('hidden.bs.collapse', function() {
                $(this)
                    .closest(".row")
                    .parent()
                    .find(".fa-chevron-up")
                    .removeClass("fa-chevron-up")
                    .addClass("fa-chevron-down");
            });

        $('.responsive-datatable').DataTable({
          language: {
            processing: "Processando...",
            lengthMenu: "_MENU_",
            zeroRecords: "Não foram encontrados resultados",
            info: "<div style='font-size:0.8em; margin-top: -0.85em !important;'>Registros&nbsp;de&nbsp;_START_&nbsp;à&nbsp;_END_&nbsp;de&nbsp;_TOTAL_</div>",
            infoEmpty: "Registros&nbsp;de&nbsp;0&nbsp;à&nbsp;0&nbsp;de&nbsp;0",
            infoFiltered: "(Filtrado de _MAX_ Registros)",
            infoPostFix: "",
            searchText: "Filtrar",
            url: "",
            //search: '<div class="input-group"><span class="input-group-addon" style="background-color:white; color:#0275d8"><i class="fa fa-search"></i></span></div>', //Bootstrap v4.0.0-beta.2
            search: '<div class="input-group"><div class="input-group-append"><span class="input-group-text" style="background-color:white; color:#007bff"><i class="fa fa-search"></i></span></div></div>', //Bootstrap v4.2.1
            paginate: {
              first: "<i class='fa fa-angle-double-left'></i>",
              previous: "<i class='fa fa-angle-left'></i>",
              next: "<i class='fa fa-angle-right'></i>",
              last: "<i class='fa fa-angle-double-right'></i>"
            },
            aria: {
              sortAscending: ": Ordenar colunas de forma ascendente",
              sortDescending: ": Ordenar colunas de forma descendente"
            }
          },
          stateSave: false,
          sorting: [],
          lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Tudo"]],
          pagingType: "full_numbers",
          select: false,
          responsive: true,
          initComplete: function () {
            // Ajusta a Responsividade do Contador de Páginas
            $('.dataTables_info').parent().removeClass('col-md-5').addClass('col-md-2');

            // Ajusta a Responsividade da Páginação
            $('.dataTables_paginate').parent().removeClass('col-md-7').addClass('col-md-10');

            /*
            // Bootstrap v4.0.0-beta.2
            // Remove o Label do Filtro de Páginas
            $(".dataTables_length").find('select').removeAttr('name').end().find('label').replaceWith($(".dataTables_length").find('select').removeClass('input-sm')).end().parent().removeClass('col-sm-12 col-md-6').addClass('col-2 col-lg-3');

            // Remove o Label do Filtro de Buscas
            $(".dataTables_filter").find('label').replaceWith($(".dataTables_filter").find('label').children().removeClass('input-sm')).end().find('input[type="search"]').prependTo('.dataTables_filter .input-group').parent().parent().parent().removeClass('col-sm-12 col-md-6').addClass('col-lg-3 push-lg-6 col-10');
            */

            // Bootstrap v4.2.1
            // Remove o Label do Filtro de Páginas
            $(".dataTables_length").find('select').removeAttr('name').end().find('label').replaceWith($(".dataTables_length").find('select').removeClass('input-sm')).end().parent().removeClass('col-sm-12 col-md-6').addClass('col-2 col-lg-9');

            // Remove o Label do Filtro de Buscas
            $(".dataTables_filter").find('label').replaceWith($(".dataTables_filter").find('label').children().removeClass('input-sm')).end().find('input[type="search"]').prependTo('.dataTables_filter .input-group').parent().parent().parent().removeClass('col-sm-12 col-md-6').addClass('col-lg-3 push-6 col-10');

            // Ajusta a Altura do Filtro de Buscas
            $('.form-control-sm').css('height', 'calc(1.8125rem + 5px)');

            // Remove Inline Form
            $('.dt-bootstrap').removeClass('dataTables_wrapper').removeClass('form-inline');
          }
        });

        $('.responsive-tabs').responsiveTabs({
          accordionOn: ['xs', 'sm'] // xs, sm, md, lg
        });

      });
    </script>
  </body>
</html>