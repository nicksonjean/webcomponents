<?php
//https://stackoverflow.com/questions/11905140/php-pass-variable-to-include
function includeWithVariables($filePath, $variables = array(), $print = true) {
  $output = null;
  if(file_exists($filePath)) {
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
//https://stackoverflow.com/questions/1232097/php-include-a-php-file-and-also-send-query-parameters
function includeGet($phpinclude) {
  $pos_incl = strpos($phpinclude, '?');
  if ($pos_incl !== false) {
    $qry_string = substr($phpinclude, $pos_incl+1);
    $phpinclude = substr($phpinclude, 0, $pos_incl);
    $arr_qstr = explode('&',$qry_string);
    foreach ($arr_qstr as $param_value) {
      list($qstr_name, $qstr_value) = explode('=', $param_value);
      $$qstr_name = $qstr_value;
    }
  }
  include($phpinclude);
}

function urlOrigin($use_forwarded_host = false) {
  $ssl = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on');
  $sp = strtolower($_SERVER['SERVER_PROTOCOL']);
  $protocol = substr($sp, 0, strpos($sp, '/')) . (($ssl) ? 's' : '');
  $port = $_SERVER['SERVER_PORT'];
  $port = ((!$ssl && $port=='80') || ($ssl && $port=='443')) ? '' : ':' . $port;
  $host = ($use_forwarded_host && isset($_SERVER['HTTP_X_FORWARDED_HOST'])) ? $_SERVER['HTTP_X_FORWARDED_HOST'] : (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : null);
  $host = isset($host) ? $host : $_SERVER['SERVER_NAME'] . $port;
  return $protocol . '://' . $host;
}

function fetchUrl($use_forwarded_host = false) {
  return urlOrigin($use_forwarded_host) . $_SERVER['REQUEST_URI'];
}

// Constants
if(isset($_GET['load_format']) && isset($_GET['load_format']) == 'static') {
  define("WEB_ROOT", dirname(dirname(dirname(fetchUrl()))));
}
else {
  define("WEB_ROOT", dirname(dirname(fetchUrl())));
}
define("PATH_ROOT", __DIR__ . DIRECTORY_SEPARATOR);
?>