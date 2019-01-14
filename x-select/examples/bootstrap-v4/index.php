<!DOCTYPE html>
<html>
  <head>
    <title> X-Select - Bootstrap v4 </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
    <!-- Bootstrap Bootstrap 4C — Chosen -->
    <link rel="stylesheet" href="plugins/bootstrap4c-chosen/dist/css/component-chosen.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap4c-chosen/dist/css/component-chosen-fix.css" />
    <!-- Bootstrap Bootstrap 4 — Select2 -->
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/dist/css/select2.min.css" />
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/dist/css/select2-bootstrap.css" />
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/dist/css/select2-bootstrap.fix.css" />
    <!-- Bootstrap Bootstrap 4 — Bootstrap.Select -->
    <link rel="stylesheet" href="plugins/bootstrap-select-1.13.2/dist/css/bootstrap-select.min.css" />
    <link rel="stylesheet" href="plugins/bootstrap-select-1.13.2/dist/css/bootstrap-select.fix.css" />
  </head>
  <body>

    <div class="container py-5">

      <form action="../submit_form.php" method="post">
        <header><h1>Web Component</h1></header>
        <header><h3>&lt;select is="x-select" /&gt;</h3></header><br />
        <hr /><br />

        <div class="row">
          <div class="col-12">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs responsive-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#vanilla_select" role="tab">Vanilla</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#chosen" role="tab">Chosen</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#select2" role="tab">Select2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#bootstrap_select" role="tab">Bootstrap</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <br />

              <div class="tab-pane active" id="vanilla_select" role="tabpanel">

                <div class="row">
                  <div class="col-6"><h5>Legenda</h5></div>
                  <div class="col-6">
                    <a class="pull-right" data-toggle="collapse" href="#collapse-integer" aria-expanded="false" aria-controls="collapse-example">
                      <i class="fa fa-chevron-down" aria-hidden="true"></i>
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

                      <?php include 'inc/select_vanilla.php'; ?>
              </div>

              <div class="tab-pane" id="chosen" role="tabpanel">
                      <?php include 'inc/select_chosen.php'; ?>
              </div>

              <div class="tab-pane" id="select2" role="tabpanel">
                      <?php include 'inc/select_select2.php'; ?>
              </div>

              <div class="tab-pane" id="bootstrap_select" role="tabpanel">
                      <?php include 'inc/select_bootstrap.php'; ?>
              </div>

            </div>

            <button type="submit" class="btn btn-primary">Submeter</button>

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
    <script type="text/javascript" src="plugins/bootstrap-select-1.13.2/dist/js/bootstrap-select.js"></script>
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
    <!-- X-Select WebComponent v0.5a-->
    <link rel="import" href="../../src/x-select.html">
    <!--<link rel="import" href="../../dist/standalone/x-select.min.html">-->
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