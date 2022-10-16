import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './style.css';

function modosit(){
    let url  = document.getElementById('urlMezo').value;

    let szovegBetuMeret = document.getElementById('szovegBetuMeret').value;
    let sorkozMeret = document.getElementById('sorkozMeret').value;
    let betuSzin = document.getElementById('betuSzin').value;


    let img = document.getElementById('kep');
    img.src = url;    
    

    let szoveg = document.getElementById('szoveg');
    szoveg.style.fontSize = szovegBetuMeret + 'pt';
    szoveg.style.lineHeight = sorkozMeret + 'em';
    szoveg.style.color = betuSzin;
    
}

function kep_mozgat_bal(){
    let img = document.getElementById('kep');
    img.classList.toggle = 'left';

}

function kep_mozgat_jobb(){
    let img = document.getElementById('kep');
    img.classList.toggle = 'right';

}

function init(){
    document.getElementById('urlMezo').addEventListener('change', modosit);

    document.getElementById('szovegBetuMeret').addEventListener('input',modosit);
    document.getElementById('sorkozMeret').addEventListener('input',modosit);
    document.getElementById('betuSzin').addEventListener('input',modosit);

    document.getElementById('bal_Gomb').addEventListener('click', kep_mozgat_bal);
    document.getElementById('jobb_Gomb').addEventListener('click', kep_mozgat_jobb);
}

document.addEventListener('DOMContentLoaded', init);