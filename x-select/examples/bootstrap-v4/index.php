<!DOCTYPE html>
<html>
  <head>
    <title> X-Select - Bootstrap v4 </title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap 4.0.0-alpha.6 -->
    <link rel="stylesheet" href="plugins/bootstrap-v4/dist/css/bootstrap.min.css" />
    <!-- Datatables for Bootstrap 4-->
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
        <header><h3>&lt;select is="x-select" /&gt;</h3></header><br />
        <hr /><br />

        <div class="row">
          <div class="col-12">

            <div class="form-group row">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 has-default">

                <label class="form-control-label" for="positiveint">Estados & Cidades do Brasil</label>
                <select class="custom-select form-control" is="x-select" x-source="https://servicodados.ibge.gov.br/api/v1/localidades/estados" x-value="descendant::*[1]/*/./child::*[2]/." x-text="descendant::*[1]/*/./child::*[3]/text()" x-default="Escolha um Estado" x-selected="RN" name="countries" id="countries" aria-describedby="countriesHelpBlock"></select>
                <small id="countriesHelpBlock" class="form-control-feedback"></small>

              </div>
            </div>

            <button type="submit" class="btn btn-primary">Submeter</button>

          </div>
        </div>

      </form>

    </div>

    <!-- jQuery 3.2.1 -->
    <!--[if gte IE 9]><!-->
      <script src="plugins/jquery/dist/js/jquery-3.2.1.min.js"></script>
      <script>window.jQuery || document.write('<script src="plugins/jquery/dist/js/jquery-3.2.1.min.js"><\/script>')</script>
    <!--<![endif]-->
    <!--[if lt IE 9]>
      <script src="plugins/jquery/dist/js/jquery-1.12.4.min.js"></script>
      <script>window.jQuery || document.write('<script src="plugins/jquery/dist/js/jquery-1.12.4.min.js"><\/script>')</script>
    <![endif]-->
    <script src="plugins/bootstrap-v4/dist/js/popper.min.js"></script>
    <script src="plugins/bootstrap-v4/dist/js/bootstrap.min.js"></script>
    <!-- Datatables for Bootstrap 4-->
    <script src="plugins/bootstrap-responsive-datatables/dist/js/jquery.dataTables.min.js"></script>
    <script src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.bootstrap4.min.js"></script>
    <script src="plugins/bootstrap-responsive-datatables/dist/js/dataTables.responsive.min.js"></script>
    <script src="plugins/bootstrap-responsive-datatables/dist/js/responsive.bootstrap4.min.js"></script>
    <!-- Bootstrap Responsive Tabs v2.0.1 -->
    <script src="plugins/bootstrap-responsive-tabs/dist/js/jquery.bootstrap-responsive-tabs.js"></script>
    <!-- Polyfill classList 0.0.20130621 https://github.com/remy/polyfills -->
    <!-- Polyfill html5shiv 3.7.3 https://cdn.jsdelivr.net/g/html5shiv@3.7.3 -->
    <!--[if IE 9]>
      <link href="../../polyfills/bootstrap-ie9.css" rel="stylesheet">
      <script src="../../polyfills/classList.js">
      <script src="../../polyfills/html5shiv.js"></script>
    <![endif]-->
    <!--[if IE 8]>
      <link href="../../polyfills/bootstrap-ie8.css" rel="stylesheet">
    <![endif]-->
    <!-- WebComponents Polyfill 0.7.24 -->
    <script src="../../../bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <!-- X-Select WebComponent v0.5a-->
    <link rel="import" href="../../src/x-select.html">
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
            search: '<div class="input-group"><span class="input-group-addon" style="background-color:white; color:#0275d8"><i class="fa fa-search"></i></span></div>',
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

            // Remove o Label do Filtro de Páginas
            $(".dataTables_length").find('select').removeAttr('name').end().find('label').replaceWith($(".dataTables_length").find('select').removeClass('input-sm')).end().parent().removeClass('col-sm-12 col-md-6').addClass('col-2 col-lg-3');

            // Remove o Label do Filtro de Buscas
            $(".dataTables_filter").find('label').replaceWith($(".dataTables_filter").find('label').children().removeClass('input-sm')).end().find('input[type="search"]').prependTo('.dataTables_filter .input-group').parent().parent().parent().removeClass('col-sm-12 col-md-6').addClass('col-lg-3 push-lg-6 col-10');

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