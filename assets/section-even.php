<div id="events">
  <form action="assets/ajax-reqs.php" method="post">
    <h1 class="lang" key="evenms-title">Événements</h1>
    <button class="lang" key="evenms-add" id="button-event">Ajoutez un événement</button>
    <button key="evenms-close" id="button-event" class="button-fermer lang">Fermez</button>

    <table class="table1 table-form">
      <tr class="nohover">
        <th class="lang" key="evenms-name">Nom d'événement</th>
        <th class="lang" key="evenms-link">Lien</th>
        <th class="lang" key="evenms-day">Jour d'événement</th>
        <th class="lang" key="evenms-time">Heure</th>
        <th class="lang" key="evenms-place">Lieu</th>
      </tr>
      <tr>
        <td><input class="input-form" id="nom-ev" type="text" placeholder="Nom d'événement..."></td>
        <td><input class="input-form" id="lien-ev" type="text" placeholder="Lien..."></td>
        <td><input class="input-form" id="date-ev" type="date" name="" value=></td>
        <td><input class="input-form" id="time-ev" type="time"></td>
        <td><input class="input-form" id="place-ev" type="text" placeholder="Lieu d'événement..."></td> 
      </tr>
    </table>
  </form>
    <table id="table-form1" class="table1">
      <tr class="nohover">
        <th class="lang" key="evenms-name">Nom d'événement</th>
        <th class="lang" key="evenms-day">Jour d'événement</th>
        <th class="lang" key="evenms-time">Heure</th>
        <th class="lang" key="evenms-place">Lieu</th>
      </tr>
      <tr>
        <td><a href="#">The Green</a></td>
        <td>Friday | 20/03/2020</td>
        <td>19:00</td>
        <td>Théâtre de Hautepierre</td>
      </tr>
      <tr>
        <td><a href="#">Alma le Cozy Festival</a></td>
        <td>Friday | 20/03/2020</td>
        <td>19:00</td>
        <td>La Maison du Mouvement</td>
      </tr>
    </table>
</div>

