<?php include_once(__DIR__ . '/../include.php'); ?>

<div class="row">
  <div class="col-6">
    <h5>Legenda</h5>
  </div>
  <div class="col-6">
    <a class="pull-right" data-toggle="collapse" href="#collapse-integer" aria-expanded="false" aria-controls="collapse-example">
      Ver/Esconder <i class="fa fa-chevron-down" aria-hidden="true"></i>
    </a>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <div class="table table-responsive table-striped table-condensed table-hover collapse" id="collapse-integer">
      <?php includeWithVariables(PATH_ROOT . 'inc/table_integer.php'); ?>
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
    <label class="form-control-label" for="percentint"><small style="font-size:15px">Signed Percent (Negativo & Positivo)</small></label>
    <input class="form-control" is="x-input" x-type="percentint" type="text" name="percentint" id="percentint" aria-describedby="percentintHelpBlock" />
    <small id="percentintHelpBlock" class="form-control-feedback">De -100 à 100</small>
  </div>

  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
    <label class="form-control-label" for="zerofillint"><small style="font-size:15px">Signed ZeroFill (Negativo & Positivo)</small></label>
    <input class="form-control" is="x-input" x-type="zerofillint" type="text" name="zerofillint" id="zerofillint" aria-describedby="zerofillintHelpBlock" />
    <small id="zerofillintHelpBlock" class="form-control-feedback" style="font-size:9.5px">De -9223372036854776000 à 9223372036854776000</small>
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
    <small id="bigintHelpBlock" class="form-control-feedback" style="font-size:9.5px">De -9223372036854776000 à 9223372036854776000</small>
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