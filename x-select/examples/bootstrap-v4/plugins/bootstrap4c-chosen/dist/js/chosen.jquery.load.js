var mobile_fix = getParams('chosen.jquery.load.js').mobile_fix,
    min = getParams('chosen.jquery.load.js').min;

if(mobile_fix !== undefined) {
  if(min !== undefined) {
    loadScript(dirName(scriptURL()) + '/' + 'chosen.jquery.min.fix.js');
  }
  else {
    loadScript(dirName(scriptURL()) + '/' + 'chosen.jquery.fix.js');
  }
}
else {
  if(min !== undefined) {
    loadScript(dirName(scriptURL()) + '/' + 'chosen.jquery.min.js');
  }
  else {
    loadScript(dirName(scriptURL()) + '/' + 'chosen.jquery.js');
  }
}