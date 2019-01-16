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
?>