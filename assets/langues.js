var arrLang = {
    'en' : {
        'langues' : 'Languages &uarr;',
        'connexion' : 'Log In/Sign Up',
        'contacte' : 'Contact',
        'rens' : 'Practical Information',
        'annonces' : 'Announcements',
        'evenms' : 'Events',
        'evenms-title' : 'Events',
        'evenms-add' : 'Add an event',
        'evenms-close' : 'Close',
        'evenms-name' : 'Name of the event',
        'evenms-link' : 'Link',
        'evenms-day' : 'Day of the event',
        'evenms-time' : 'Time',
        'evenms-place' : 'Venue',
        'annonces-surname' : 'First name',
        'annonces-name' : 'Last name',
        'annonces-sing' : 'Announcement',
        'annonces-day' : 'Day',
        'annonces-add' : 'Add an announcement',
        'university' : 'University of Strasbourg &rarr;',
        'demarches' : 'Administrative procedures &rarr;',
        'logement' : 'Find an accommodation &rarr;',
        'transport' : 'Transport &rarr;',
        'etud' : 'Student life &rarr;',
        'follow' : 'Follow us on',

        'log' : 'Log in',
        'conn' : 'Sign up',
        'mail' : 'Mail address',
        'nrtel' : 'Phone number',
        'motpasse' : 'Password',
        'confmotpasse' : 'Confirm password',
        'mainpage' : 'Main page'
    },

    'fr' : {
        'langues' : 'Langues &uarr;',
        'connexion' : 'Connexion/Inscription',
        'contacte' : 'Contact',
        'rens' : 'Renseignements pratiques',
        'annonces' : 'Annonces',
        'evenms' : 'Événements',
        'evenms-title' : 'Événements',
        'evenms-add' : 'Ajoutez un événement',
        'evenms-close' : 'Fermez',
        'evenms-name' : 'Nom d\'événement',
        'evenms-link' : 'Lien',
        'evenms-day' : 'Jour d\'événement',
        'evenms-time' : 'Heure',
        'evenms-place' : 'Lieu',
        'annonces-surname' : 'Prénom',
        'annonces-name' : 'NOM',
        'annonces-sing' : 'Annonce',
        'annonces-day' : 'Jour',
        'annonces-add' : 'Ajoutez une annonce',
        'university' : 'Université de Strasbourg &rarr;',
        'demarches' : 'Démarches administratives &rarr;',
        'logement' : 'Trouvez un logement &rarr;',
        'transport' : 'Transport &rarr;',
        'etud' : 'Vie étudiante &rarr;',
        'follow' : 'Suivez nous sur',
        
        'log' : 'S\'inscrire',
        'conn' : 'Connexion',
        'mail' : 'Adresse mail',
        'nrtel' : 'Numéro de téléphone',
        'motpasse' : 'Mot de passe',
        'confmotpasse' : 'Confirmation du mot de passe',
        'mainpage' : 'Page principale'
    }
};

$(function() {
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).html(arrLang[lang][$(this).attr('key')]);
        });
    });
});