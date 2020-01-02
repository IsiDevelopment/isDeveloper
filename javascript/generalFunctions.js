function hideDiv(item){
  $('#' + item).click(function() {
    $('#' + item).slideToggle('slow')
  });
}
//var environment = 'http://192.168.0.6/isdeveloper/' //local
var environment = 'https://isidevelopment.github.io/isdeveloper/' //github
//var environment = 'http://www.isidevelopment.com/' //production
function gotoHome(){
  location.href = environment
}
function gotoPDV(){
  location.href = environment + 'pdv'
}
function gotoWebSites(){
  location.href = environment + 'websites'
}
function gotoCustomized(){
  location.href = environment + 'customized'
}
function gotoAboutUs(){
  location.href = environment + 'aboutus'
}
function gotoContact(){
  location.href = environment + '#contact'
}
