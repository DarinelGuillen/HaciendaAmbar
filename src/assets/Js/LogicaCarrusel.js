var actual = 0;
 export function puntos(n){
  var ptn = document.getElementsByClassName("punto");
  for(i = 0; i<ptn.length; i++){
    if(ptn[i].className.includes("activo")){
      ptn[i].className = ptn[i].className.replace("activo", "");
      break;
    }
  }
  ptn[n].className += " activo";
}
export function mostrar(n){
  var imagenes = document.getElementsByClassName("imagen");
  for(i = 0; i< imagenes.length; i++){
    if(imagenes[i].className.includes("actual")){
      imagenes[i].className = imagenes[i].className.replace("actual", "");
      break;
    }
  }
  actual = n;
  imagenes[n].className += " actual";
  puntos(n);
}

export function siguiente(){
  actual++;
  if(actual > 3){
    actual = 0;
  }
  mostrar(actual);
}
export function anterior(){
  actual--;
  if(actual < 0){
    actual = 3;
  }
  mostrar(actual);
}

var velocidad = 2000;
var play = setInterval("siguiente()", velocidad);

export function playpause(){
  var boton = document.getElementById("btn");
  if(play == null){
    boton.src = "http://www.reciclay.com.ve/gio/pause.png";
    play = setInterval("siguiente()", velocidad);
  } else {
    clearInterval(play);
    play = null;
    boton.src = "http://www.reciclay.com.ve/gio/play.png";
  }
}

