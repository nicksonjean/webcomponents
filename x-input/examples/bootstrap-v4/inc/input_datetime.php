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