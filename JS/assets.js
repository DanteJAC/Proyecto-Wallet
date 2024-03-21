

    /*$("button").click(function(){
          $("p.texto").hide();
        });

   /*$("button").click(function(){
          $("p.texto").fadeIn();
          });*/

    $("p.texto").hide();

    /*$("button").click(function () {
      $("p.texto").show();
    });
    //Cuando el usuario haga click en el botón, se muestre un <p> con la clase .texto//


    //Cuando el usuario haga click en el botón, el <p> con la clase .texto aparezca con fade//

    /*  $("button").click(function(){
  $("p.texto").fadeOut(    2000
, function(){ alert('terminó la animación'); }  
  ); //al terminar, se ejecuta la función
}); */

    $("button").click(function () {
      $("p.texto").slideDown(1000, function () { alert('Holi'); });
    });
    //Cuando el usuario haga click en el botón, el <p> con la clase .texto aparezca desplazándose hacia abajo



