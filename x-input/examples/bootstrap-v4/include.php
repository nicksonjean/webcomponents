<?php
function includeWithVariables($filePath, $variables = array(), $print = true)
{
  $output = NULL;
  if(file_exists($filePath)){
    extract($variables);
    ob_start();
    include $filePath;
    $output = ob_get_clean();
  }
  if ($print) {
    print $output;
  }
  return $output;
}
function urlOrigin( $s, $use_forwarded_host = false )
{
  $ssl = ( ! empty( $s['HTTPS'] ) && $s['HTTPS'] == 'on' );
  $sp = strtolower( $s['SERVER_PROTOCOL'] );
  $protocol = substr( $sp, 0, strpos( $sp, '/' ) ) . ( ( $ssl ) ? 's' : '' );
  $port = $s['SERVER_PORT'];
  $port = ( ( ! $ssl && $port=='80' ) || ( $ssl && $port=='443' ) ) ? '' : ':'.$port;
  $host = ( $use_forwarded_host && isset( $s['HTTP_X_FORWARDED_HOST'] ) ) ? $s['HTTP_X_FORWARDED_HOST'] : ( isset( $s['HTTP_HOST'] ) ? $s['HTTP_HOST'] : null );
  $host = isset( $host ) ? $host : $s['SERVER_NAME'] . $port;
  return $protocol . '://' . $host;
}

function fetchUrl( $s, $use_forwarded_host = false )
{
  return urlOrigin( $s, $use_forwarded_host ) . $s['REQUEST_URI'];
}

if(isset($_GET['load_format']) && $_GET['load_format'] == 'static') {
  define("WEB_ROOT", (dirname(dirname(dirname(fetchUrl( $_SERVER ))))));
}
else {
  define("WEB_ROOT", dirname(dirname(dirname(dirname(fetchUrl( $_SERVER ))))));
}
?>