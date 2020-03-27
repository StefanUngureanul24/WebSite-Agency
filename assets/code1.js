
    /* Fonction pour la touche qui affiche */  
    $("#button-annonce").click(function(){
      
        if ($(".table-form").css("display") == "none") {
        /* On détérmine la date du système */
        var d = new Date();
        var mois = d.getMonth() + 1;
        var jour = d.getDate();
        var ajd = d.getFullYear() + '-' + (mois<10 ? '0' : '') + mois + '-' + (jour<10 ? '0' : '') + jour;
        
        $(".table-form").fadeIn(500);
        $("#button-event").html("Submit");
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
