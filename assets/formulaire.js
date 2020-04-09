$(document).ready(function() {
    /* une fonction qui vérifie si le numéro de téléphone saisi est valide */
    function verifie_numerotel(telephoneValue) {
        var regex = new RegExp(/^(01|02|03|04|05|06|08)[0-9]{8}/gi);
        
	    if(regex.test(telephoneValue))
	        return true;
        
        return false;
    }
    
    /* Fonction qui vérifie la validité d'une adresse mail */
    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
  
    /* Lorsqu'on click sur le button #inscript, il fait apparaitre le formulaire pour l'inscription */
    $("#inscript").click(function() {
        $(".wrap-inscription").toggle(450);
        $(".wrap-inscription").css("display", "flex");
        $(".wrap-connexion").css("display", "none");
    });

    /* Lorsqu'on click sur le button #connex, il fait apparaitre le formulaire pour la connexion */
    $("#connex").click(function() {
        $(".wrap-connexion").toggle(450);
        $(".wrap-inscription").css("display", "none");
        $(".wrap-connexion").css("display", "flex");
    });

    
    /* Lorsqu'on click le button #inscrie, dans le form d'inscription */
    $("#inscrire").click(function() {
        var mail = $("#mail1").val();
        var nr_tel = $("#nr-tel").val();
        var mot_pass = $("#mot-pass1").val();
        var mot_pass_conf = $("#mot-pass-conf").val();
        
        /* fonction au cas où l'un des champs est vide */
        if ((mail == '') || (nr_tel == '') || (mot_pass == '') || (mot_pass_conf == '')) {
            if (mail == '') {
                alert("Veuillez saisir une adresse mail");
                $(".mail1").css("border", "1px solid red");
            }
            
            if (nr_tel == '') {
                alert("Veuillez saisir un numero de téléphone");
                $(".nr-tel").css("border", "1px solid red");
            }
            
            if (mot_pass == '') {
                alert("Veuillez saisir un mot de passe");
                $(".mot-pass1").css("border", "1px solid red");
            }
            
            if (mot_pass_conf == '') {
                alert("Veuillez saisir la confirmation du mot de passe");
                $(".mot-pass-conf").css("border", "1px solid red");
            }
        }  
        else {
            $(".mail1").css("border", "1px solid #eeeeee");
            $(".nr-tel").css("border", "1px solid #eeeeee");
            $(".mot-pass1").css("border", "1px solid #eeeeee");
            $(".mot-pass-conf").css("border", "1px solid #eeeeee");
        }
        
        /* fonction au cas où le mot de passe dans le champ de confirmation
            ne correspond pas au mot de passe saisie 
        */
        if (mot_pass !== mot_pass_conf) {
            alert("La confirmation du mot de passe ne correspond pas au mot de passe saisi");
            $(".mot-pass-conf").css("border", "1px solid red");
        }

        if (mot_pass === mot_pass_conf) {
            $(".mot-pass-conf").css("border", "1px solid #eeeeee");
        }

        /* fonction qui vérifie la validité d'une adresse mail */    
        if (!emailIsValid(mail)) {
            alert("L'adresse mail saisie n'est pas valide");
            $(".mail1").css("border", "1px solid red");
        }  
        
        if (!verifie_numerotel(nr_tel)) {
            alert("Le numéro de téléphone saisi n'est pas valide");
            $(".nr-tel").css("border", "1px solid red");
        }
    }); 
});