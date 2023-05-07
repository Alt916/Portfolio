var toggle_btn = document.getElementById('theme-btn');
var body = document.getElementsByTagName('body')[0];
var dark_theme_class = 'dark';
var cadre1 = document.getElementById('cadre1'); // Ajoutez cette ligne

var toogle_title = document.querySelector('.h2');
var toogle_titleautre = document.querySelector('.h1');

var font_link = document.createElement('link');
font_link.href = 'https://fonts.googleapis.com/css2?family=Creepster&display=swap';
font_link.rel = 'stylesheet';
document.head.appendChild(font_link);

toggle_btn.addEventListener('click', function () {
  if (body.classList.contains(dark_theme_class)) {
    body.classList.remove(dark_theme_class);
    toogle_title.style.color = "";
    toogle_titleautre.style.color = "";
    toogle_titleautre.style.fontFamily = "";
    toogle_title.style.fontFamily = "";
    cadre1.style.backgroundImage = 'url("./photoDeProfil.png")'; // Ajoutez cette ligne
    document.documentElement.classList.remove('flashlight'); // Retirer la classe "flashlight"
  } else {
    body.classList.add(dark_theme_class);
    toogle_title.style.color = "rgb(255, 117, 24)";
    toogle_titleautre.style.color = "rgb(255, 117, 24)";
    toogle_title.style.fontFamily = "'Creepster', cursive";
    toogle_titleautre.style.fontFamily = "'Creepster', cursive";
    cadre1.style.backgroundImage = 'url("./photoDark.png")'; // Ajoutez cette ligne
    document.documentElement.classList.add('flashlight'); // Ajouter la classe "flashlight"
  }
});

function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)