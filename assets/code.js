$(document).ready(function() {
  /* Fonction qui ajoute les trois drapeux pour les langues à choisir */  
  $("#langues").click(function(){
      if ($(".drapeau").css("display") == "none") {
        $(".drapeau").css("display", "flex"); 
        $(".drapeau").after("<br /> <br /> <br />");
        $(".drapeau").hide();
        $(".drapeau").fadeIn();
      }
      else if ($(".drapeau").css("display") == "flex") {
        $(".drapeau").css("display", "none");
        $("br").remove();
      }
    });

  /* Fonction pour la touche qui affiche */  
  $("#button-event").click(function(){
    if ($(".table-form").css("display") == "none") {
      /* On détérmine la date du système */
      var d = new Date();
      var mois = d.getMonth() + 1;
      var jour = d.getDate();
      var ajd = d.getFullYear() + '-' + (mois<10 ? '0' : '') + mois + '-' + (jour<10 ? '0' : '') + jour;
      
      $(".table-form").fadeIn(500);
      $("#button-event").html("Ajoutez");
      $(".button-fermer").fadeIn(500);
      $("#date-ev").attr("min", ajd);
    }
    else {
      var nom_ev = $("#nom-ev").val();
      var lien_ev = $("#lien-ev").val();
      var date_ev = $("#date-ev").val();
      var time_ev = $("#time-ev").val();
      var place_ev = $("#place-ev").val();
        
      if ((nom_ev == '') || (lien_ev == '') || (date_ev == '') || (time_ev == '' ) || (place_ev == '')) {
      /* Le changement en rouge du countour de l'input et l'envoi d'une message d'erreur dans le cas où un champ n'a été pas complété */
      if (nom_ev == '') {
       $("#nom-ev").css("border", "2px solid red");
       alert("Veuillez ajouter le nom de l'événement");
     }
      if (lien_ev == '') {
       $("#lien-ev").css("border", "2px solid red");
       alert("Veuillez ajouter un lien vers l'événement");
      }
      if (date_ev == '') {
        $("#date-ev").css("border", "2px solid red");
        alert("Veuillez ajouter le jour de l'événement");
      }
      if (time_ev == '') {
        $("#time-ev").css("border", "2px solid red");
        alert("Veuillez ajouter l'heure de l'événement");
      }
      if (place_ev == '') {
        $("#place-ev").css("border", "2px solid red");
        alert("Veuillez ajouter le lieu de l'événement");
      }
    }      
    
    else {
      /* Pour changer le format du jour : de 'aaaa-mm-jj' à 'jj/mm/aaaa (choix personnel)' */
      var date_split = date_ev.split("-");
      var date_finale = date_split[2] + "/" + date_split[1] + "/" + date_split[0];
      var jour = getDayOfWeek(date_ev);
      
      /* Le changement de la couleur du conteur au cas où elle a été déjà changé en rouge */
      $(".input-form").css("border", "1px solid #f2f2f2");  
      $("#table-form1").append("<tr><td>" + nom_ev + "</td><td>" + jour + " | " + date_finale + "</td><td>" + time_ev + "</td><td>" + place_ev + "</td></tr>");
    }
  } 
});

    /* Une touche pour arrêter l'activité d'ajout d'un événement */
    $(".button-fermer").click(function(){
      $(".table-form").fadeOut(500);
      $(".button-fermer").fadeOut(10);
      $("#button-event").html("Ajoutez un événement");
    });

    /* La fonction qui détérmine le jour de la semaine à partir d'un jour calendrier */
    function getDayOfWeek(date) {
      const dayOfWeek = new Date(date).getDay();    
      return isNaN(dayOfWeek) ? null : 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
  
    /* Fonction pour le section d'annonces */
    $("#button-annonce").click(function() {
      var d = new Date();
      var mois = d.getMonth() + 1;
      var jour = d.getDate();
      var ajd = d.getFullYear() + '-' + (mois<10 ? '0' : '') + mois + '-' + (jour<10 ? '0' : '') + jour;
      if ($(".table-form-annonce").css("display") == "none") { 
        $(".table-form-annonce").fadeIn(500);
        $("#button-annonce").html("Ajoutez");
        $(".button-annonce-fermer").fadeIn(500);
      }
      else {
        var prenom_an = $("#prenom-an").val();
        var nom_an = $("#nom-an").val();
        var cont_an = $("#cont-an").val();
        // var ajd - pour la date d'aujourd'hui à ne pas oublier
      
        if ((prenom_an == '') || (nom_an == '') || (cont_an == '')) {
          if (prenom_an == '') {
            $("#prenom-an").css("border", "2px solid red");
            alert("Veuillez ajouter le prénom");
          }
          if (nom_an == '') {
            $("#nom-an").css("border", "2px solid red");
            alert("Veuillez ajouter le nom");
          }
          if (cont_an == '') {
            $("#cont-an").css("border", "2px solid red");
            alert("Veuillez ajouter une description");
          }
        } 
        else {
          var split_an = ajd.split("-");
          var date_finale_an = split_an[2] + "/" + split_an[1] + "/" + split_an[0];

          $(".input-form-annonce").css("border", "1px solid #f2f2f2");
          $("#table-form1-annonce").append("<tr><td>" + prenom_an + "</td><td>" + nom_an + "</td><td>" + getDayOfWeek(ajd) + " | " + date_finale_an + "</td><td>" + cont_an + "</td></tr>");
          /*
          var date_split = ajd.split("-");
          var date_finale = date_split[2] + "/" + date_split[1] + "/" + date_split[0];
          var jour = getDayOfWeek(date_ev);
          alert(date_finale);
          alert(jour);

          $(".input-form-annonce").css("border", "1px solid #f2f2f2");
          $("#table-form1-annonce").append("<tr><td>" + prenom_an + "</td><td>" + nom_an + "</td><td>" + jour + " | " + date_finale + "</td><td>" + cont_an + "</td></tr>");
        */
        }
      }
    });

    /* Une touche pour arrêter l'activité d'ajout d'une annonce */
    $(".button-annonce-fermer").click(function(){
      $(".table-form-annonce").fadeOut(500);
      $(".button-annonce-fermer").fadeOut(10);
      $("#button-annonce").html("Ajoutez une annonce");
    });


    /* Fonction pour le button qui nous amène au sommet de la page */
    var button_top = $("#button-top");

    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        button_top.css("display", "block");
      }
      else {
        button_top.css("display", "none");
      }
    });

    button_top.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '100');
    });

    /* Fonction pour afficher le text sur les images dans la section renseignements pratiques
       2 fonctions: 
        - afficher le block texte lorsque on le touche avec le souris
        - l'effacer lorsque le souris quitte l'image
    */
    $(".img-rens").mouseenter(function() {
      $(this).next().css("display", "block");
      $(this).next().css("transition", )
    });

    $(".img-rens").mouseleave(function() {
      $(this).next().css("display", "none");
    });

    /* Pour afficher le nav - responsive */
    $(".icon").click(function() {
      $(".resp").toggle(500);  
    });
  });
