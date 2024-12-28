/*
---
Games - Action
...
*/

		function games(url,nom,largeur,hauteur,options) {
var haut=(screen.height-hauteur)/2;
var Gauche=(screen.width-largeur)/2;
fencent=window.open(url,nom,"top="+haut+",left="+Gauche+",width="+largeur+",height="+hauteur+","+options);
}

