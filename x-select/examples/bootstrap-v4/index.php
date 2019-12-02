<?php include 'include.php';?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title> X-Select - Bootstrap v4 </title>
    <meta charset="utf-8">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="black">
    <meta name="description" content="X-Select é um Componente Web que ajuda na construção de formulários ricos adicionando suporte à obtenção de dados remotos ou locais no formato JSON através de Streams de alta velocidade, com filtragem de dados via XPath ou JSONPath, diretamente ao elemento select nativo do HTML, e por não trazer consigo uma interface pronta é compatível com qualquer framework CSS, não obstante, ainda é compatível com os seguintes plugins para jQuery: Chosen, Select2 e Bootstrap Select">
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
    <!-- Bootstrap Bootstrap 4C — Chosen -->
    <link rel="stylesheet" href="plugins/bootstrap4c-chosen/dist/css/component-chosen.min.css" />
    <!-- Bootstrap Bootstrap 4 — Select2 -->
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/dist/css/select2.min.css" />
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/dist/css/select2-bootstrap.css" />
    <!-- Bootstrap Bootstrap 4 — Bootstrap.Select -->
    <link rel="stylesheet" href="plugins/bootstrap-select-1.13.2/dist/css/bootstrap-select.min.css" />
  </head>
  <body>

    <div class="container py-5">

      <form action="../submit_form.php" method="post">
        <header><h1>Web Component</h1></header>
        <header><h3>&lt;select is="x-select" /&gt;</h3></header>
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
                    <td>format</td>
                    <td><code id="_format"></code></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>mode</td>
                    <td><code id="_mode"></code></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>cache</td>
                    <td><code id="_cache"></code></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>style</td>
                    <td><code id="_style"></code></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
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
                <a class="nav-link active" data-toggle="tab" href="#vanilla" id="nav-vanilla-tab" role="tab" aria-controls="vanilla" aria-selected="true"  tabindex="0">Vanilla</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#chosen"  id="nav-chosen-tab"  role="tab" aria-controls="chosen"  aria-selected="false" tabindex="0">Chosen</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#select2" id="nav-select2-tab" role="tab" aria-controls="select2" aria-selected="false" tabindex="0">Select2</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link"        data-toggle="tab" href="#select"  id="nav-select-tab"  role="tab" aria-controls="select"  aria-selected="false" tabindex="0">SelectPicker</a>
              </li>
            </ul>

            <?php } ?>

            <?php if( (!isset($_GET['load_format'])) || (isset($_GET['load_format']) && $_GET['load_format'] == 'modern') ) { ?>

            <!-- HTML4 Ajax Nav Tabs Responsive -->
            <ul id="tabs" class="nav nav-tabs responsive-tabs" role="tablist">
              <li role="presentation" class="nav-item">
                <a class="nav-link active ajax-tabs" data-toggle="tab" href="#vanilla" id="nav-vanilla-tab" data-href="<?php echo WEB_ROOT;?>/examples/bootstrap-v4/inc/select_vanilla.php" role="tab" aria-controls="vanilla" aria-selected="true"  tabindex="0">Vanilla</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#chosen"  id="nav-chosen-tab"  data-href="<?php echo WEB_ROOT;?>/examples/bootstrap-v4/inc/select_chosen.php"  role="tab" aria-controls="chosen"  aria-selected="false" tabindex="0">Chosen</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#select2" id="nav-select2-tab" data-href="<?php echo WEB_ROOT;?>/examples/bootstrap-v4/inc/select_select2.php" role="tab" aria-controls="select2" aria-selected="false" tabindex="0">Select2</a>
              </li>
              <li role="presentation" class="nav-item">
                <a class="nav-link ajax-tabs"        data-toggle="tab" href="#select"  id="nav-select-tab"  data-href="<?php echo WEB_ROOT;?>/examples/bootstrap-v4/inc/select_select.php"  role="tab" aria-controls="select"  aria-selected="false" tabindex="0">SelectPicker</a>
              </li>
            </ul>

            <?php } ?>

            <!-- Tab panes -->
            <div class="tab-content" id="nav-tabContent">

              <br />

              <div class="tab-pane active fade in" id="vanilla" role="tabpanel" aria-labelledby="nav-vanilla-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/select_all.php', array('type' => 'vanilla', 'rule' => 'rule', 'pair' => 'pair', 'template' => 'template', 'plugin' => '')); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="chosen" role="tabpanel" aria-labelledby="nav-chosen-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/select_all.php', array('type' => 'chosen', 'rule' => 'rule_chosen', 'pair' => 'pair_chosen', 'template' => 'template_chosen', 'plugin' => 'x-plugin="chosen"')); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="select2" role="tabpanel" aria-labelledby="nav-select2-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/select_all.php', array('type' => 'select2', 'rule' => 'rule_select2', 'pair' => 'pair_select2', 'template' => 'template_select2', 'plugin' => 'x-plugin="select2"')); ?>
                <?php } ?>
              </div>

              <div class="tab-pane fade" id="select" role="tabpanel" aria-labelledby="nav-select-tab">
                <?php if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') { ?>
                  <?php includeWithVariables(PATH_ROOT .'inc/select_all.php', array('type' => 'select', 'rule' => 'rule_select', 'pair' => 'pair_select', 'template' => 'template_select', 'plugin' => 'x-plugin="select"')); ?>
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

    <!-- jQuery 3.2.1 -->
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
    <!-- Bootstrap Bootstrap 4C — Chosen -->
    <script type="text/javascript" src="plugins/bootstrap4c-chosen/dist/js/chosen.jquery.load.js?mobile_fix=true&min=true"></script>
    <!-- Bootstrap Bootstrap 4 — Select2 -->
    <script type="text/javascript" src="plugins/select2-bootstrap4-theme/dist/js/select2.min.js"></script>
    <!-- Bootstrap Bootstrap 4 — Bootstrap.Select -->
    <script></script>
    <script type="text/javascript" src="plugins/bootstrap-select-1.13.2/dist/js/bootstrap-select.js"></script>
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
    <!--<link rel="import" href="../../dist/standalone/x-select.min.html?debug=true" />-->
    <script type="text/javascript" src="../../dist/standalone/x-select.min.js?debug=true"></script>

    <!-- Source Version -->
    <!--<link rel="import" href="../../src/x-select.html?debug=true" />-->
    <!--<script type="text/javascript" src="../../src/x-select-standalone.js?debug=true"></script>-->
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