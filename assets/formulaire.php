<!DOCTYPE html>
<html lang="fr">
<head>
    <title>AEES</title>
    <meta charset="UTF-8">
    <meta name="description" content="AEE - annonces pour étudiants étrangers">
    <meta name="author" content="Stefan UNGUREANU">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Le(s) fichier(s) CSS -->
    <link rel="stylesheet" type="text/css" href="annonce.css">    
    <link rel="stylesheet" type="text/css" href="annonce-mediaq.css">

    <!-- Le bootstrap pour les logos média -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- La bibliothèque jQuery et le(s) script(s) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="code.js"></script>
    <script type="text/javascript" src="code1.js"></script>
    <script type="text/javascript" src="formulaire.js"></script>
  </head>

<body>
<!-- Les liens à modifier vers page.html -->
  
  <a href="index.php">Retour sur la page principale...</a>
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
        <input type="text" class="form-input" placeholder="example@email.com">
      </div>

      <div class="form-group">
        <input type="text" class="form-input" placeholder="Veuillez saisir numéro de téléphone..."> 
      </div>
    
      <div class="form-group">
        <input type="password" class="form-input" placeholder="Veuillez saisir un mot de passe....">
      </div>
    
      <div class="form-group">
        <input type="password" class="form-input" placeholder="Veuillez confirmer le mot de passe"> 
      </div>
    
      <div class="form-group">
        <button class="form-button" type="submit">S'inscrire</button>
      </div>
    </form>
  </div>

  <div class="wrap wrap-connexion">
    <form class="login-form" action="">
      <div class="form-header">
        <h3>Connexion</h3>
      </div>
      
      <div class="form-group">
        <input type="text" class="form-input" placeholder="email@example.com">
      </div>

      <div class="form-group">
        <input type="password" class="form-input" placeholder="Mot de passe...">
      </div>
      
      <div class="form-group">
        <button class="form-button" type="submit">Se connecter</button>
      </div>
    </form>
  </div>
  

</body>