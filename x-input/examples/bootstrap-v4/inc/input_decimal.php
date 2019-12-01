<?php include_once(__DIR__ . '/../include.php');?>

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
                        <?php includeWithVariables(PATH_ROOT . 'inc/table_decimal.php'); ?>
                        <?php includeWithVariables(PATH_ROOT . 'inc/table_currency.php'); ?>
                      </div>
                      <?php includeWithVariables(PATH_ROOT . 'inc/input_iso_4217.php'); ?>

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
                    <label class="form-control-label" for="percentdec"><small style="font-size:15px">Signed Percent (Negativo & Positivo)</small></label>
                    <input class="form-control" is="x-input" x-type="percentdec" type="text" name="percentdec" id="percentdec" aria-describedby="percentdecHelpBlock" />
                    <small id="percentdecHelpBlock" class="form-control-feedback">De -100.00 à 100.00</small>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="zerofilldec"><small style="font-size:15px">Signed ZeroFill (Negativo & Positivo)</small></label>
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
                    <label class="form-control-label" for="custom_decimal_sufixo"><small style="font-size:13.5px">Custom Unsigned Decimal (Com Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-case="unsigned" x-negative="false" x-dir="ltr" x-sufix=" °C" x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="6" x-max="10000000000" type="text" name="custom_decimal_sufixo" id="custom_decimal_sufixo" aria-describedby="custom_decimal_sufixoHelpBlock" />
                    <small id="custom_decimal_sufixoHelpBlock" class="form-control-feedback">De 0 à 10000000000.00</small>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">
                    <label class="form-control-label" for="custom_decimal_negativo"><small style="font-size:12px">Custom Signed Decimal (Com Prefixo & Sufixo)</small></label>
                    <input class="form-control" is="x-input" x-type="decimal" x-affinity="+" x-dir="ltr" x-prefix="± " x-sufix=" °F" x-min="0" x-thousands-char="." x-decimal-char="," x-decimal-digits="6" x-max="10000000000" type="text" name="custom_decimal_negativo" id="custom_decimal_negativo" aria-describedby="custom_decimal_negativoHelpBlock" />
                    <small id="custom_decimal_negativoHelpBlock" class="form-control-feedback">De -10000000000.00 à 10000000000.00</small>
                  </div>
                </div>