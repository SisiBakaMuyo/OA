/** Fórmula para permutação caótica
	Dn = n!.[1 - 1/1! + 1/2! - 1/3! + 1/4! - ...+(-1)^n.1/n!]**/

/* Funcoes que controlam a atividade do carrinho*/

/********** Funcoes para carro5.htm e carro6.htm **/

function desafiocarro1(form) {
  resposta=form.resposta.value;
  if(resposta == "44") {
    dialog('#feedback1');
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
  [["a2", "a1", "o1"], false],
  [["o1", "a2", "a1"], false],
];

/* compara duas arrays contendo combinacoes de alunos
 * devolve true se forem iguais, false c.c.
 */

function compara(a, b) {
  function ordem(a, b) {
  if (a.charAt(0) == b.charAt(0))
    return Number(a.charAt(1)) - Number(b.charAt(1));
  else
    if (a.charAt(0) == 'o') return -1;
    else return 1;
  }

  c = a.sort(ordem);
  d = b.sort(ordem);

  return ((a[0] == b[0]) && (a[1] == b[1]) && (a[2] == b[2]));
}

jQuery.prototype.paraDentro = function(recipiente) {
  this.animate({top: recipiente.position().top, left: recipiente.position().left}).draggable("disable").draggable("option", "revert", false);
}

function depositar(event, ui, caixa) {
  var estaCaixa = $("#caixa" + (caixa+1));

  estaCaixa.addClass("realcarDentro");
  ui.draggable.paraDentro(estaCaixa);
  minhaCombinacao[caixa] = ui.draggable.attr("id").substr(ui.draggable.attr("id").length - 2);
  quantos++;

  if (quantos == 3) {
    for (var i = 0; i < combinacoes.length && !compara(minhaCombinacao, combinacoes[i][0]); i++);
      if (i == combinacoes.length)                          /* nenhuma das combinacoes */
        dialog('#feedback1');
      else {
        if (combinacoes[i][1])                              /* combinacao encontrada anteriormente */
          dialog('#feedback2');
        else {                                              /* nova combinacao valida encontrada */
          combinacoes[i][1] = true;
          $("#comb" + i).fadeIn();
          for (i = 0; i < combinacoes.length && combinacoes[i][1]; i++);
            if (i == combinacoes.length) {                  /* checa se terminou */
              dialog('#feedback3');
              teatro2();
            }
            else {
              dialog('#feedback4');
            }
        }
      }

  reverter();
  }
}

function reverter() {
  $("#menino1").animate({top: localMenino1.top, left: localMenino1.left}).draggable("enable").draggable("option", "revert", true);
  $("#menina1").animate({top: localMenina1.top, left: localMenina1.left}).draggable("enable").draggable("option", "revert", true);
  $("#menina2").animate({top: localMenina2.top, left: localMenina2.left}).draggable("enable").draggable("option", "revert", true);
  $("#caixa1").removeClass("realcarDentro");
  $("#caixa2").removeClass("realcarDentro");
  $("#caixa3").removeClass("realcarDentro");
  quantos = 0;
  minhaCombinacao = [];
}

function atividade_teatro() {
  localMenino1 = $("#menino1").draggable({revert: true}).position();
  localMenina1 = $("#menina1").draggable({revert: true}).position();
  localMenina2 = $("#menina2").draggable({revert: true}).position();

  $("#caixa1").droppable({
    drop: function(event, ui){depositar(event, ui, 0)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa2").droppable({
    drop: function(event, ui){depositar(event, ui, 1)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa3").droppable({
    drop: function(event, ui){depositar(event, ui, 2)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
}
