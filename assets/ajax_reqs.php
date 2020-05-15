let count = 0;

const eventTitle;
const eventDate;
const eventDescription;

const fetchArticles = () => {
  count++;
  let formData = new FormData();
  formData.append("count", count);

  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      res = req.responseText;
      document.querySelector(".table1").innerHTML = req;
    }
  };
  req.open("GET", "get-articles.php");
  req.send(formData);
};


const uploadEventToDatabase = () => {
  let formData = new FormData();

  evenTitle = document.querySelector(".eventTitleInput") etc.
  formData.append("event_title", eventTitle);
  formData.append("event_date", eventDate);
  formData.append("event_desc", eventDescription);

  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
            console.log("SUCCESSFULLY UPLOADED!\n");
    }
  };
  
  req.open("POST", "post-article.php");
  req.send(formData);
}
