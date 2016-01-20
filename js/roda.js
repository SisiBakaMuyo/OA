/* Funcoes que controlam a atividade do teatro
*/

/********** Funcoes para teatro3.htm e teatro4.htm **/

function desafioroda1(form) {
  resposta=form.resposta.value;
  if(resposta == "40320") {
    alert("Parabens, voce acertou!");
    roda4();
  }
  else{
    alert("Tente novamente!");
    roda3();
  }  
}

function desafioroda2(form) {
  resposta=form.resposta.value;
  if(resposta == "5") {
    alert("Parabens, voce acertou!");
    roda5();
  }
  else
    alert("Tente novamente!");
    roda4();
}

/********** Funcoes para teatro1.htm **/
var localMeninor1 = new Object();
var localMeninar1 = new Object();
var localMeninar2 = new Object();
var localMeninar3 = new Object();

var minhaCombinacaor = new Array();
var quantos = 0;

// /* todas as combinacoes possiveis de alunos */
var combinacoesr = [
  [["o1", "a1", "a2", "a3"], false],
  [["o1", "a1", "a3", "a2"], false],
  [["o1", "a2", "a1", "a3"], false],
  [["o1", "a2", "a3", "a1"], false],
  [["o1", "a3", "a2", "a1"], false],
  [["o1", "a3", "a1", "a2"], false],
  [["a1", "o1", "a2", "a3"], false],
  [["a1", "o1", "a3", "a2"], false],
  [["a1", "a2", "o1", "a3"], false],
  [["a1", "a2", "a3", "o1"], false],
  [["a1", "a3", "a2", "o1"], false],
  [["a1", "a3", "o1", "a2"], false],
  [["a2", "o1", "a1", "a3"], false],
  [["a2", "o1", "a3", "a1"], false],
  [["a2", "a3", "a1", "o1"], false],
  [["a2", "a3", "o1", "a1"], false],
  [["a2", "a1", "o1", "a3"], false],
  [["a2", "a1", "a3", "o1"], false],
  [["a3", "o1", "a2", "a1"], false],
  [["a3", "o1", "a1", "a2"], false],
  [["a3", "a1", "o1", "a2"], false],
  [["a3", "a1", "a2", "o1"], false],
  [["a3", "a2", "o1", "a1"], false],
  [["a3", "a2", "a1", "o1"], false],
];

/* compara duas arrays contendo combinacoes de alunos
 * devolve true se forem iguais, false c.c.
 */
function comparar(a, b) {
  function ordem(a, b) {
  if (a.charAt(0) == b.charAt(0))
    return Number(a.charAt(1)) - Number(b.charAt(1));
  else
    if (a.charAt(0) == 'o') return -1;
    else return 1;
  }

  return ((a[0] == b[0]) && (a[1] == b[1]) && (a[2] == b[2]));
}

jQuery.prototype.paraDentror = function(recipiente) {
  this.animate({top: recipiente.position().top, left: recipiente.position().left}).draggable("disable").draggable("option", "revert", false);
}

function depositarr(event, ui, caixa) {
  var estaCaixa = $("#caixa_roda" + (caixa+1));


  if ((caixa + 1) == 1 || (caixa + 1) == 2 || (caixa + 1) == 3 || (caixa + 1) == 4) {
    estaCaixa.addClass("realcarDentro");
    ui.draggable.paraDentror(estaCaixa);
    minhaCombinacaor[caixa] = ui.draggable.attr("id").substr(ui.draggable.attr("id").length - 2);
    quantos++;

    if (quantos == 4) {
      for (var i = 0; i < combinacoesr.length && !comparar(minhaCombinacaor, combinacoesr[i][0]); i++);
        if (i == combinacoesr.length)                          /* nenhuma das combinacoes */
          dialog('#feedback1');
        else {
          if (combinacoesr[i][1])                              /* combinacao encontrada anteriormente */
            dialog('#feedback2');
          else {                                              /* nova combinacao valida encontrada */ 
            combinacoesr[i][1] = true;
            $("#comb" + i).fadeIn();
            for (i = 0; i < combinacoesr.length && combinacoesr[i][1]; i++);
              if (i == combinacoesr.length) {                  /* checa se terminou */
                dialog('#feedback3');
                roda2();
              }
              else {
                dialog('#feedback4');
              }
          }
        }

        reverterr();

    }
  }
  else {
    dialog('#feedback6');
    reverterr();

  }
}

function reverterr() {
  $("#rmenino1").animate({top: localMeninor1.top, left: localMeninor1.left}).draggable("enable").draggable("option", "revert", true);
  $("#rmenina1").animate({top: localMeninar1.top, left: localMeninar1.left}).draggable("enable").draggable("option", "revert", true);
  $("#rmenina2").animate({top: localMeninar2.top, left: localMeninar2.left}).draggable("enable").draggable("option", "revert", true);
  $("#rmenina3").animate({top: localMeninar3.top, left: localMeninar3.left}).draggable("enable").draggable("option", "revert", true);
  $("#caixa_roda1").removeClass("realcarDentro");
  $("#caixa_roda2").removeClass("realcarDentro");
  $("#caixa_roda3").removeClass("realcarDentro");
  $("#caixa_roda4").removeClass("realcarDentro");
  $("#caixa_roda5").removeClass("realcarDentro");
  $("#caixa_roda6").removeClass("realcarDentro");
  $("#caixa_roda7").removeClass("realcarDentro");
  $("#caixa_roda8").removeClass("realcarDentro");

  quantos = 0;
  minhaCombinacaor = [];
}

function atividade_roda() {
  localMeninor1 = $("#rmenino1").draggable({revert: true}).position();
  localMeninar1 = $("#rmenina1").draggable({revert: true}).position();
  localMeninar2 = $("#rmenina2").draggable({revert: true}).position();
  localMeninar3 = $("#rmenina3").draggable({revert: true}).position();

  $("#caixa_roda1").droppable({
    drop: function(event, ui){depositarr(event, ui, 0)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda2").droppable({
    drop: function(event, ui){depositarr(event, ui, 1)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda3").droppable({
    drop: function(event, ui){depositarr(event, ui, 2)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda4").droppable({
    drop: function(event, ui){depositarr(event, ui, 3)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda5").droppable({
    drop: function(event, ui){depositarr(event, ui, 4)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda6").droppable({
    drop: function(event, ui){depositarr(event, ui, 5)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda7").droppable({
    drop: function(event, ui){depositarr(event, ui, 6)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
  $("#caixa_roda8").droppable({
    drop: function(event, ui){depositarr(event, ui, 7)},
    hoverClass: "realcarSobre",
    tolerance: "intersect"
  });
}
