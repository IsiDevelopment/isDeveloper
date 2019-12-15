function hideDiv(item){
  $('#' + item).click(function() {
    $('#' + item).slideToggle('slow')
  });
}
function gotoPDV(){
  location.href = 'http://192.168.0.6/isdeveloper/pdv'
}
function gotoCustomized(){
  location.href = 'http://192.168.0.6/isdeveloper/customized'
}
