<!DOCTYPE html>
<html lang="fr">
<head>
    <title>L'Association pour les Etudiants Etrangeres Strasbourg</title>
    <meta charset="UTF-8">
    <meta name="description" content="AEE - annonces pour étudiants étrangers">
    <meta name="author" content="Stefan UNGUREANU">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/aees-icon.png" />

    <!-- Le(s) fichier(s) CSS -->
    <link rel="stylesheet" type="text/css" href="assets/annonce.css">    
    <link rel="stylesheet" type="text/css" href="assets/annonce-mediaq.css">

    <!-- Le bootstrap pour les logos média -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- La bibliothèque jQuery et le(s) script(s) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/code.js"></script>
    <script type="text/javascript" src="assets/code1.js"></script>
    <script type="text/javascript" src="assets/formulaire.js"></script>
</head>

<body>
  <?php include 'assets/nav-form.php';?>
  
  <button id="button-top" title="Go to top"></button>
  
  <div class="button-area">
    <button id="inscript">S'inscrire</button>
    <button id="connex">Connexion</button>
  </div>

  <div class="wrap wrap-inscription">
    <form class="login-form" action="">
      <div class="form-header">
        <h3>S'inscrire</h3>
      </div>

      <div class="form-group">
        <p>Adresse email</p>
        <input id="mail1" type="text" class="form-input mail1" placeholder="example@email.com">
      </div>

      <div class="form-group">
        <p>Numéro de téléphone</p>
        <input id="nr-tel" type="tel" class="form-input nr-tel" placeholder="0XXXXXXXXX"> 
      </div>
    
      <div class="form-group">
        <p>Mot de passe</p>
        <input id="mot-pass1" type="password" class="form-input mot-pass1" placeholder="Veuillez saisir un mot de passe....">
      </div>
    
      <div class="form-group">
        <p>Confirmation du mot de passe</p>
        <input id="mot-pass-conf" type="password" class="form-input mot-pass-conf" placeholder="Veuillez confirmer le mot de passe"> 
      </div>
    
      <div class="form-group">
        <button id="inscrire" class="form-button" type="button">S'inscrire</button>
      </div>
    </form>
  </div>

  <div class="wrap wrap-connexion">
    <form class="login-form" action="">
      <div class="form-header">
        <h3>Connexion</h3>
      </div>
      
      <div class="form-group">
        <p>Adresse email</p>
        <input type="text" class="form-input" placeholder="email@example.com">
      </div>

      <div class="form-group">
        <p>Mot de passe</p>
        <input type="password" class="form-input" placeholder="Mot de passe...">
      </div>
      
      <div class="form-group">
        <button id="connexion" class="form-button" type="button">Se connecter</button>
      </div>
    </form>
  </div>

</body>
</html>