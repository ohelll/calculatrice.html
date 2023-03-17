
const touches = [...document.querySelectorAll('.num_ope')];
const listeKeycode = touchesmap(touche => touche.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
   const valeur = e.keyCode.toString();
   calculer(valeur)
})
document.addEventListener('click', (e) => {
   const valeur = e.tagert.dataset.key;
   calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
      switch(valeur){
         case'8':
         screen.textContent = "";
         break;
         case '13':
            const calcul = eval(screen.textContent);
            screen.textContent = calcul;
            break;
         default:
            const indexKeycode = listKeycode.indexOf(valeur);
            const touche = touches[indexKeycode]; 
            const touche2 = touchess[indexKeycode]; 
            screen.textContent += touche.innerHTML;
            screen.textContent += touche2.innerHTML;
      }     
    }  
}
window.addEventListener('error', (e) => {
   alert('Erreur syntax  : ' + e.message)}
)