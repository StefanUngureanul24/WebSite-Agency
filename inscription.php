<?php
try
{
    $bdd = new PDO('mysql:host=localhost;dbname=bdd;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
session_start();
if (isset($_POST['mail']) && isset($_POST['nr-tel']) && isset($_POST['mot-pass1']) && isset($_POST['mot-pass-conf']) ) {
  $new_member = $bdd->prepare('INSERT INTO membre (mail,nr_tel,mot) VALUES(:mail,:nr_tel,:mot_pass1)');
  $new_member->execute(array(
    'mail' => htmlspecialchars($_POST['mail']),
    'nr_tel' => htmlspecialchars($_POST['nr-tel']),
    'mot_pass1' => htmlspecialchars($_POST['mot-pass1'])
  ));
  header('Location: index.php');
}
else {
  header('Location: formulaire.php');
}
?>
