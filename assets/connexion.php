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
if (isset($_POST['mail_connex']) && isset($_POST['mot_connex'])) {
  $new_member = $bdd->query('SELECT * FROM membre');

  while ($var = $new_member->fetch()) {
    if ($var['mail']==$_POST['mail_connex'] && $var['mot']==$_POST['mot_connex']) {
      $_SESSION['test'] = 1;
    }
  }

  header('Location: index.php');
}
else {
  header('Location: formulaire.php');
}
?>
