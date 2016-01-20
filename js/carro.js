/** Fórmula para permutação caótica
	Dn = n!.[1 - 1/1! + 1/2! - 1/3! + 1/4! - ...+(-1)^n.1/n!]**/

/* Funcoes que controlam a atividade do carrinho*/

/********** Funcoes para carro5.htm e carro6.htm **/

function desafiocarro1(form) {
  resposta=form.resposta.value;
  if(resposta == "44") {
    alert("Parabens, voce acertou!");
    carro6();
  }
  else{
    alert("Tente novamente!");
    carro5();
  }  
}

function desafiocarro2(form) {
  resposta=form.resposta.value;
  if(resposta == "certo") {
    alert("Parabens, voce acertou!");
    carro7();
  }
  else
    alert("Tente novamente!");
    carro6();
}


/********** Funcoes para carro1.htm **/
var localMenino1 = new Object();
var localMenina1 = new Object();
var localMenina2 = new Object();

var minhaCombinacao = new Array();
var quantos = 0;

/* todas as combinacoes possiveis de alunos */
var combinacoes3 = [
  [["a2", "o1", "a1"], false],
  [["o1", "a1", "a2"], false],
];

/********** Funcoes para carro3.htm **/
var local2Menino1 = new Object();
var local2Menino2 = new Object();
var local2Menina2 = new Object();
var local2Menina3 = new Object();

/* todas as combinacoes possiveis de alunos */
var combinacoes4 = [
  [["a2", "o1", "a3", "o2"], false],
  [["a2", "o2", "a3", "o1"], false],
  [["a2", "a3", "o1", "o2"], false],
  [["o2", "o1", "a3", "a2"], false],
  [["o2", "a3", "a2", "o1"], false],
  [["o2", "a3", "o1", "a2"], false],
  [["a3", "o1", "a2", "o2"], false],
  [["a3", "o2", "a2", "o1"], false],
  [["a3", "o2", "o1", "a2"], false],
];


/* compara duas arrays contendo combinacoes de alunos
 * devolve true se forem iguais, false c.c.
 */

function compara1(a, b) {
  function ordem(a, b) {
  if (a.charAt(0) == b.charAt(0))
    return Number(a.charAt(1)) - Number(b.charAt(1));
  else
    if (a.charAt(0) == 'o') return -1;
    else return 1;
  }

  return ((a[0] == b[0]) && (a[1] == b[1]) && (a[2] == b[2]));
}

function compara2(a, b) {
  function ordem(a, b) {
  if (a.charAt(0) == b.charAt(0))
    return Number(a.charAt(1)) - Number(b.charAt(1));
  else
    if (a.charAt(0) == 'o') return -1;
    else return 1;
  }

  return ((a[0] == b[0]) && (a[1] == b[1]) && (a[2] == b[2]));
}

jQuery.prototype.paraDentro1 = function(recipiente) {
  this.animate({top: recipiente.position().top, left: recipiente.position().left}).draggable("disable").draggable("option", "revert", false);
}

jQuery.prototype.paraDentro2 = function(recipiente) {
  this.animate({top: recipiente.position().top, left: recipiente.position().left}).draggable("disable").draggable("option", "revert", false);
}

function depositar1(event, ui, caixa) {
  var estaCaixa = $("#caixa_carro" + (caixa+1));

  estaCaixa.addClass("realcarDentro");
  ui.draggable.paraDentro1(estaCaixa);
  minhaCombinacao[caixa] = ui.draggable.attr("id").substr(ui.draggable.attr("id").length - 2);
  quantos++;

  if (quantos == 3) {
    for (var i = 0; i < combinacoes3.length && !compara1(minhaCombinacao, combinacoes3[i][0]); i++);
      if (i == combinacoes3.length)                          /* nenhuma das combinacoes */
        dialog('#feedback1');
      else {
        if (combinacoes3[i][1])                              /* combinacao encontrada anteriormente */
          dialog('#feedback2');
        else {                                              /* nova combinacao valida encontrada */
          combinacoes3[i][1] = true;
          $("#comb" + i).fadeIn();
          for (i = 0; i < combinacoes3.length && combinacoes3[i][1]; i++);
            if (i == combinacoes3.length) {                  /* checa se terminou */
              dialog('#feedback3');
              carro2();
            }
            else {
              dialog('#feedback4');
            }
        }
      }

  reverter1();
  }
}

function depositar2(event, ui, caixa) {
  var estaCaixa = $("#caixa2_carro" + (caixa+1));

  estaCaixa.addClass("realcarDentro");
  ui.draggable.paraDentro2(estaCaixa);
  minhaCombinacao[caixa] = ui.draggable.attr("id").substr(ui.draggable.attr("id").length - 2);
  quantos++;

  if (quantos == 4) {
    for (var i = 0; i < combinacoes4.length && !compara2(minhaCombinacao, combinacoes4[i][0]); i++);
      if (i == combinacoes4.length)                          /* nenhuma das combinacoes */
        dialog('#feedback1');
      else {
        if (combinacoes4[i][1])                              /* combinacao encontrada anteriormente */
          dialog('#feedback2');
        else {                                              /* nova combinacao valida encontrada */
          combinacoes4[i][1] = true;
          $("#comb" + i).fadeIn();
          for (i = 0; i < combinacoes4.length && combinacoes4[i][1]; i++);
            if (i == combinacoes4.length) {                  /* checa se terminou */
              dialog('#feedback3');
              carro4();
            }
            else {
              dialog('#feedback4');
            }
        }
      }

  reverter2();
  }
}

function reverter1() {
  $("#cmenino1").animate({top: localMenino1.top, left: localMenino1.left}).draggable("enable").draggable("option", "revert", true);
  $("#cmenina1").animate({top: localMenina1.top, left: localMenina1.left}).draggable("enable").draggable("option", "revert", true);
  $("#cmenina2").animate({top: localMenina2.top, left: localMenina2.left}).draggable("enable").draggable("option", "revert", true);
  $("#caixa_carro1").removeClass("realcarDentro");
  $("#caixa_carro2").removeClass("realcarDentro");
  $("#caixa_carro3").removeClass("realcarDentro");
  quantos = 0;
  minhaCombinacao = [];
}

function reverter2() {
  $("#c2menino1").animate({top: local2Menino1.top, left: local2Menino1.left}).draggable("enable").draggable("option", "revert", true);
  $("#c2menino2").animate({top: local2Menino2.top, left: local2Menino2.left}).draggable("enable").draggable("option", "revert", true);
  $("#c2menina2").animate({top: local2Menina2.top, left: local2Menina2.left}).draggable("enable").draggable("option", "revert", true);
  $("#c2menina3").animate({top: local2Menina3.top, left: local2Menina3.left}).draggable("enable").draggable("option", "revert", true);
  $("#caixa2_carro1").removeClass("realcarDentro");
  $("#caixa2_carro2").removeClass("realcarDentro");
  $("#caixa2_carro3").removeClass("realcarDentro");
  $("#caixa2_carro4").removeClass("realcarDentro");
  quantos = 0;
  minhaCombinacao = [];
}

function atividade_carrinho() {
  localMenino1 = $("#cmenino1").draggable({revert: true}).position();
  localMenina1 = $("#cmenina1").draggable({revert: true}).position();
  localMenina2 = $("#cmenina2").draggable({revert: true}).position();

  $("#caixa_carro1").droppable({
    drop: function(event, ui){depositar1(event, ui, 0)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_carro2").droppable({
    drop: function(event, ui){depositar1(event, ui, 1)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_carro3").droppable({
    drop: function(event, ui){depositar1(event, ui, 2)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
}

function atividade_carrinho2() {
  local2Menino1 = $("#c2menino1").draggable({revert: true}).position();
  local2Menino2 = $("#c2menino2").draggable({revert: true}).position();
  local2Menina2 = $("#c2menina2").draggable({revert: true}).position();
  local2Menina3 = $("#c2menina3").draggable({revert: true}).position();

  $("#caixa2_carro1").droppable({
    drop: function(event, ui){depositar2(event, ui, 0)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa2_carro2").droppable({
    drop: function(event, ui){depositar2(event, ui, 1)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa2_carro3").droppable({
    drop: function(event, ui){depositar2(event, ui, 2)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa2_carro4").droppable({
    drop: function(event, ui){depositar2(event, ui, 3)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
}

// TODOS OS NOMES INTERFEREM  EM TODOS OS ARQUIVOS JS, FAÇA NOMES DIFERENTES!!!!