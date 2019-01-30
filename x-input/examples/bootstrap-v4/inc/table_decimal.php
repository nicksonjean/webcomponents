                      <table class="table table-bordered table-sm">
                        <thead class="text-primary">
                          <tr>
                            <td class="text-center">Prop.&nbsp;</td>
                            <td class="text-center">Valor Min/Máx</td>
                            <td class="text-center" colspan="3">Decimais Permitidos</td>
                          </tr>
                          <tr>
                            <td class="text-center"><small class="table-typografy-sm">x-type</small></td>
                            <td class="text-center"><small class="table-typografy-sm">Padrão</small></td>
                            <td class="text-center"><small class="table-typografy-sm">Unsigned</small></td>
                            <td class="text-center"><small class="table-typografy-sm">Negative</small></td>
                            <td class="text-center"><small class="table-typografy-sm">Signed</small></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center" scope="row"><small class="table-typografy-xs">positivedec</small></td>
                            <td class="text-center"><small class="table-typografy-xs">0 à 18446744073709552000.00</small></td>
                            <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td class="text-center" scope="row"><small class="table-typografy-xs">negativedec</small></td>
                            <td class="text-center"><small class="table-typografy-xs">-9223372036854776000.00 à 0</small></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td class="text-center" scope="row"><small class="table-typografy-xs">percentdec</small></td>
                            <td class="text-center"><small class="table-typografy-xs">-100.00 à 100.00</small></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
                          </tr>
                          <tr>
                            <td class="text-center" scope="row"><small class="table-typografy-xs">zerofilldec</small></td>
                            <td class="text-center"><small class="table-typografy-xs">-9223372036854776000.00 à 9223372036854776000.00</small></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-minus" aria-hidden="true"></i></td>
                            <td class="text-center"><i class="fa fa-check" aria-hidden="true"></i></td>
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
