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
function sendEmail(){
  name = $('#contactName').val()
  phone = $('#contactPhone').val()
  email = $('#contactEmail').val()
  body = $('#contactMessage').val()
  if(validateFields())
    sendEmailAjax(name, phone, email, body)
}
function validateFields(){
  if($('#contactName').val() == ''  || $('#contactPhone').val() == ''  ||
    $('#contactEmail').val() == ''  || $('#contactMessage').val() == ''){
    $('#errorMsgEmail').removeClass('noDisplay')
    $('#errorMsgEmail').addClass('yesDisplay')
    return false
  }
  else{
    $('#errorMsgEmail').removeClass('yesDisplay')
    $('#errorMsgEmail').addClass('noDisplay')
    return true
  }
}
function clearFields(){
  $('#contactName').val('')
  $('#contactPhone').val('')
  $('#contactEmail').val('')
  $('#contactMessage').val('')
}
function sendEmailAjax(namePerson, phonePerson, emailPerson, bodyPerson){
  $.ajax({
    url: 'http://www.isidevelopment.com/0c83f57c786a0b4a39efab23731c7ebc.php',
    data: {
      action: '0c83f57c786a0b4a39efab23731c7ebc',
      name: namePerson,
      phone: phonePerson,
      email: emailPerson,
      body: bodyPerson
    },
    dataType: 'json',
    type: 'POST',
    success: function (output) {
      if(output == 'Done'){
        alert('Mensaje enviado corractamente')
        clearFields()
      }
      else{
        alert('Error al enviar mensaje')
      }
    },
    error: function(){
      alert('Error al enviar mensaje')
    }
  });
}
