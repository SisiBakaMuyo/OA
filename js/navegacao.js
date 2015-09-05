/* Funcoes de controle da navegacao
 */

function feedback(id) {
  $('div, img').not('#principal, #background, .combinacao').fadeOut('fast');
  $('#fechar_feedback, ' + id.data.param1).fadeIn();
  $('#fechar_feedback').click(fechar_feedback);
}

function fechar_feedback() {
  $('.feedback , #fechar_feedback').fadeOut('fast');
  $('div, img').not('.feedback , #fechar_feedback, .combinacao').fadeIn();
}

function dialog(id) {
  $('div, img').not('#principal, #background, .combinacao').fadeOut('fast');
  $('#fechar_feedback, ' + id).fadeIn();
  $('#fechar_feedback').click(fechar_feedback);
}

/********** BRINQUEDOS ********************************************************/

function teatro0() { 
  $('#principal').load('teatro0.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(parque);
    $('#ajuda').click({param1: '#feedback0'}, feedback);
    $('#comecar').click(teatro1);
  });
}

function teatro1() {
  $('#principal').load('teatro1.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro0);
    $('#ajuda').click({param1: '#feedback0'}, feedback);
    $('#avancar').click(teatro2);

    atividade_teatro();
  });
}

function teatro2() {
  $('#principal').load('teatro2.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro0);
    $('#seguir').click(teatro3);
  });
}

function teatro3() {
  $('#principal').load('teatro3.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro2);
  });
}

function teatro4() {
  $('#principal').load('teatro4.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro3);
  });
}

function teatro5() {
  $('#principal').load('teatro5.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro4);
    $('#avancar').click(teatro6);
  });
}

function teatro6() {
  $('#principal').load('teatro6.htm', function() {
    $('#inicio').click(parque);
    $('#voltar').click(teatro5);
    $('#seguir').click(parque);
  });
}

/******************************************************************************/

$(document).ready(home);

function home() {
  $('#principal').load('home.htm', function() {
    $('#inicio').click(parque);
    $('#avancar').click(parque);
  });
}

function parque() {
  $('#principal').load('parque.htm', function() {
    $('#voltar').click(home);
    $('#ajuda').click({param1: '#feedback0'}, feedback);

    /* lista dos brinquedos e as chamadas para as respectivas telas */
    $('#teatro').click(teatro0);
  });
}
