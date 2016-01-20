/* Funcoes que controlam a atividade do teatro
*/

/********** Funcoes para teatro3.htm e teatro4.htm **/

function desafioteatro1(form) {
  resposta=form.resposta.value;
  if(resposta == "6") {
    alert("Parabens, voce acertou!");
    teatro4();
  }
  else{
    alert("Tente novamente!");
    teatro3();
  }  
}

function desafioteatro2(form) {
  resposta=form.resposta.value;
  if(resposta == "3") {
    alert("Parabens, voce acertou!");
    teatro5();
  }
  else
    alert("Tente novamente!");
    teatro4();
}

/********** Funcoes para teatro1.htm **/
var localMenino1 = new Object();
var localMenino2 = new Object();
var localMenina1 = new Object();
var localMenina2 = new Object();
var localMenina3 = new Object();

var minhaCombinacao = new Array();
var quantos = 0;

// /* todas as combinacoes possiveis de alunos */
var combinacoes = [
  [["o1", "a1", "a2"], false],
  [["o1", "a1", "a3"], false],
  [["o1", "a2", "a3"], false],
  [["o2", "a1", "a2"], false],
  [["o2", "a1", "a3"], false],
  [["o2", "a2", "a3"], false],
  [["o1", "o2", "a1"], false],
  [["o1", "o2", "a2"], false],
  [["o1", "o2", "a3"], false]
];

//  compara duas arrays contendo combinacoes de alunos
//  * devolve true se forem iguais, false c.c.
 
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
  $("#menino2").animate({top: localMenino2.top, left: localMenino2.left}).draggable("enable").draggable("option", "revert", true);
  $("#menina1").animate({top: localMenina1.top, left: localMenina1.left}).draggable("enable").draggable("option", "revert", true);
  $("#menina2").animate({top: localMenina2.top, left: localMenina2.left}).draggable("enable").draggable("option", "revert", true);
  $("#menina3").animate({top: localMenina3.top, left: localMenina3.left}).draggable("enable").draggable("option", "revert", true);
  $("#caixa1").removeClass("realcarDentro");
  $("#caixa2").removeClass("realcarDentro");
  $("#caixa3").removeClass("realcarDentro");
  quantos = 0;
  minhaCombinacao = [];
}

function atividade_teatro() {
  localMenino1 = $("#menino1").draggable({revert: true}).position();
  localMenino2 = $("#menino2").draggable({revert: true}).position();
  localMenina1 = $("#menina1").draggable({revert: true}).position();
  localMenina2 = $("#menina2").draggable({revert: true}).position();
  localMenina3 = $("#menina3").draggable({revert: true}).position();

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
