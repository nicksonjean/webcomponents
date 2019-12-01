<?php include 'include.php';?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title> X-Input - Bootstrap v4 </title>
    <meta charset="utf-8">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="black">
    <meta name="description" content="X-Select é um Componente Web para Criação de Campos de Formulário Inteligentes e com Comportamento e Máscara, Util para Criação de Formulários Ricos">
    <!-- Bootstrap v4.2.1 -->
    <link rel="stylesheet" href="plugins/bootstrap-v4/dist/css/bootstrap-4.2.1.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap-v4/dist/css/bootstrap-4.2.1.fix.css" />
    <!-- Datatables for Bootstrap v4-->
    <link rel="stylesheet" href="plugins/bootstrap-responsive-datatables/dist/css/dataTables.bootstrap4.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap-responsive-datatables/dist/css/responsive.bootstrap4.min.css" />
    <!-- Bootstrap Responsive Tabs v2.0.1 -->
    <link rel="stylesheet" href="plugins/bootstrap-responsive-tabs/dist/css/bootstrap-responsive-tabs.css" />
    <!--[if IE 9]>
    <link href="plugins/bootstrap-ie8/css/bootstrap-ie9.min.css" rel="stylesheet">
    <link href="plugins/bootstrap-ie8/css/bootstrap-ie9.fix.css" rel="stylesheet">
    <![endif]-->
    <!-- Font Awesome 4.6.1 -->
    <link rel="stylesheet" href="plugins/font-awesome/dist/css/font-awesome.min.css" />
  </head>
  <body>

    <div class="container py-5">

      <form action="../submit_form.php" method="post">
        <header><h1>Web Component</h1></header>
        <header><h3>&lt;input is="x-input" /&gt;</h3></header>
        <hr />

        <?php if(isset($_GET['debug']) && $_GET['debug'] == 'true') { ?>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm table-hover table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col" colspan="3" class="text-center">QueryStrings</th>
                  </tr>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pamâmetro</th>
                    <th scope="col">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>style</td>
                    <td><code id="_style"></code></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>debug</td>
                    <td><code id="_debug"></code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <?php } ?>

        <div class="row">
          <div class="col-12">

            <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>

            <!-- HTML4 Static Nav Tabs Responsive -->
            <ul id="tabs" class="nav nav-tabs responsive-tabs" role="tablist">
              <li role="presentation" class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#numeric"  id="nav-numeric-tab"  role="tab" aria-controls="numeric"  aria-selected="true" tabindex="0">Numérico</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#decimal"  id="nav-decimal-tab"  role="tab" aria-controls="decimal"  aria-selected="false" tabindex="0">Decimal</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#masks"    id="nav-masks-tab"    role="tab" aria-controls="masks"    aria-selected="false" tabindex="0">Máscaras</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#datetime" id="nav-datetime-tab" role="tab" aria-controls="datetime" aria-selected="false" tabindex="0">Data/Hora</a>
              </li>
            </ul>

            <?php } ?>

            <?php if( (!isset($_GET['load_format'])) || (isset($_GET['load_format']) && $_GET['load_format'] == 'modern') ) { ?>

            <!-- HTML4 Ajax Nav Tabs Responsive -->
            <ul id="tabs" class="nav nav-tabs responsive-tabs" role="tablist">
              <li role="presentation" class="nav-item">
                <a class="nav-link active ajax-tabs" data-toggle="tab" href="#numeric"  id="nav-numeric-tab"  data-href="inc/input_numeric.php"  role="tab" aria-controls="numeric"  aria-selected="true"  tabindex="0">Numérico</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#decimal"  id="nav-decimal-tab"  data-href="inc/input_decimal.php"  role="tab" aria-controls="decimal"  aria-selected="false" tabindex="0">Decimal</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#masks"    id="nav-masks-tab"    data-href="inc/input_masks.php"    role="tab" aria-controls="masks"    aria-selected="false" tabindex="0">Máscaras</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#datetime" id="nav-datetime-tab" data-href="inc/input_datetime.php" role="tab" aria-controls="datetime" aria-selected="false" tabindex="0">Data/Hora</a>
              </li>
            </ul>

            <?php } ?>

            <!-- Tab panes -->
            <div class="tab-content" id="nav-tabContent">

              <br />

              <div class="tab-pane active fade in" id="numeric" role="tabpanel" aria-labelledby="nav-numeric-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/input_numeric.php'); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="decimal" role="tabpanel" aria-labelledby="nav-decimal-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/input_decimal.php'); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="masks" role="tabpanel" aria-labelledby="nav-masks-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/input_masks.php'); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="datetime" role="tabpanel" aria-labelledby="nav-datetime-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/input_datetime.php'); ?>
                <?php } ?>
              </div>

            </div>

            <div class="row">
              <div class="col-12">
                <br />
                <button type="submit" class="btn btn-primary new-btn-blue-color">Submeter</button>
              </div>
            </div>

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
    <!-- Scripts -->
    <script type="text/javascript" src="plugins/scripts/scripts.js"></script>
    <!-- Datatables for Bootstrap v4-->
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.responsive.min.js"></script>
    <script type="text/javascript" src="plugins/bootstrap-responsive-datatables/dist/js/responsive.bootstrap4.min.js"></script>
    <!-- Bootstrap Responsive Tabs v2.0.1 -->
    <script type="text/javascript" src="plugins/bootstrap-responsive-tabs/dist/js/jquery.bootstrap-responsive-tabs.js"></script>
    <!--[if IE 9]>
    <script src="plugins/bootstrap-ie8/js/bootstrap-ie9.min.js"></script>
    <![endif]-->
    <!-- Web Components + MutationObserver & Custom Elements + HTML Imports para IE/Edge & Firefox -->
    <script type="text/javascript">
      var isIE10Less = /*@cc_on!@*/false,
          isIE9More = document.all && document.addEventListener && !window.atob || window.navigator.msPointerEnabled,
          isEdge = /(edge)\/((\d+)?[\w\.]+)/i.exec(navigator.userAgent),
          isFF = !!navigator.userAgent.match(/firefox/i),
          isIEVersion = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();

      if (isIE9More) {
        document.write('<script type="text/javascript" src="../../../bower_components/webcomponentsjs/v0/webcomponents-lite.min.js"><\/script>'); // ie9+
        if (isIE10Less) document.write('<script type="text/javascript" src="../../../bower_components/webcomponentsjs/v0/MutationObserver.min.js"><\/script>'); // ie10-
      }
      if (isIEVersion >= 8 || isEdge || isFF) {
        document.write('<script type="text/javascript" src="../../../bower_components/webcomponentsjs/v1/build/document-register-element.js"><\/script>'); // ie8+ || edge || ff
        document.write('<script type="text/javascript" src="../../../bower_components/webcomponentsjs/v1/html-imports.min.js"><\/script>'); // ie8+ || edge || ff
      }
    </script>

    <!-- Distribution Version -->
    <!--<link rel="import" href="../../dist/standalone/x-input.min.html" />-->
    <!--<script type="text/javascript" src="../../dist/standalone/x-input.min.js"></script>-->

    <!-- Source Version -->
    <!--<link rel="import" href="../../src/x-input.html" />-->
    <script type="text/javascript" src="../../src/x-input-standalone.js"></script>

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

        // Responsive Tabs
        $('.responsive-tabs').responsiveTabs({
          accordionOn: ['xs', 'sm'] // xs, sm, md, lg
        });

        // Popover
        $('[data-toggle="popover"]').popover();

        // Carrega a Primeira
        $('.nav-link.active:first').trigger('click');

      });
    </script>
  </body>
</html>