let lastShownInfoName;

function mapShowInfo(name) {
  if (lastShownInfoName != undefined) {
    document.getElementById(lastShownInfoName).style.display = "none";
  }
  document.getElementById(name).style.display = "flex";
  lastShownInfoName = name;
  window.location.href='#info';
}