function hideDiv(item){
  $('#' + item).click(function() {
    $('#' + item).slideToggle('slow')
  });
}
//local = http://192.168.0.6/isdeveloper/
//github = https://isidevelopment.github.io/isdeveloper/
//production = http://www.isidevelopment.com/
var environment = 'https://isidevelopment.github.io/isdeveloper/'
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
