                      <table class="table table-bordered table-sm">
                         <thead class="text-primary">
                            <tr>
                               <td class="text-center" width="10%">Atributo</td>
                               <td class="text-center" width="30%">Tipo</td>
                               <td class="text-center" width="60%" colspan="3">Valores</td>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                               <td class="text-center" scope="row" width="10%"><small class="table-typografy-xs"><i>x-type</i></small></td>
                               <td class="text-center" width="30%"><small class="table-typografy-xs"><i>('state','city','district')</i></small></td>
                               <td class="text-center" width="20%"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center" width="20%"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center" width="20%"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs"><i>id</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>string</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>estados_pair</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>cidades_pair</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>bairros_pair</i></small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs"><i>class</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>string</i></small></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>.cidades_pair</i></small></td>
                               <td class="text-center"><small class="table-typografy-xs"><i>.bairros_pair</i></small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-connect</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">.cidades_pair</small></td>
                               <td class="text-center"><small class="table-typografy-xs">.bairros_pair</small></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-reference</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center"><small class="table-typografy-xs">#estados_pair</small></td>
                               <td class="text-center"><small class="table-typografy-xs">#cidades_pair</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-selected</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">23</small></td>
                               <td class="text-center"><small class="table-typografy-xs">195</small></td>
                               <td class="text-center"><small class="table-typografy-xs">26495</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-dir</small></td>
                               <td class="text-center"><small class="table-typografy-xs">('ltr','rtl')</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ltr</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ltr</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ltr</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-source</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Estados.json</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Cidades.json</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Bairros.json</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-value</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//ID</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//*[Estado="{$ID}"]/ID</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//*[Cidade="{$ID}"]/ID</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-text</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//Nome</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//*[Estado="{$ID}"]/Nome</small></td>
                               <td class="text-center"><small class="table-typografy-xs">//*[Cidade="{$ID}"]/Nome</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-filter</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ID</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ID</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ID</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-default</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Escolha um Estado</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Escolha uma Cidade</small></td>
                               <td class="text-center"><small class="table-typografy-xs">Escolha um Bairro</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-loader</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center"><small class="table-typografy-xs">ID</small></td>
                               <td class="text-center"><small class="table-typografy-xs">ID</small></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-plugin</small></td>
                               <td class="text-center"><small class="table-typografy-xs">('chosen','select','select2')</small></td>
                               <td class="text-center"><?php echo $chosen; ?></td>
                               <td class="text-center"><?php echo $select; ?></td>
                               <td class="text-center"><?php echo $select2; ?></td>
                            </tr>
                            <tr>
                               <td class="text-center" scope="row"><small class="table-typografy-xs">x-template</small></td>
                               <td class="text-center"><small class="table-typografy-xs">string</small></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                               <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            </tr>
                         </tbody>
                      </table>
                      <style>
                        .table-typografy-sm{
                          font-size:16px;
                        }
                        .table-typografy-xs {
                          font-size:14px;
                        }
                        @media screen and (max-width: 767px) {
                          div.dataTables_wrapper div.dataTables_paginate ul.pagination {
                            justify-content: center;
                            margin-right: 15px;
                          }
                          div.dataTables_wrapper div.push-1.col-9 {
                            margin-left:-5px;
                          }
                          ul.pagination {
                            text-align: center;
                          }
                          .table-typografy-sm{
                            font-size:10px;
                          }
                          .table-typografy-xs {
                            font-size:9px;
                          }
                        }
                      </style>