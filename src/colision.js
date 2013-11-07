function colision(userX, userZ, siguienteX, siguienteZ){
    var col = false;
    
    userX0 = userX - 0.5 + siguienteX+25;
    userX1 = userX + 0.5 + siguienteX+25;
    
    userZ0 = userZ - 0.5 + siguienteZ+25;
    userZ1 = userZ + 0.5 + siguienteZ+25;
    
    for(i=0;i<mapas[mapa].length;i++){
        if(userX0 > mapas[mapa][i][0] && userX0 < mapas[mapa][i][2]
           &&
           userZ0 > mapas[mapa][i][1] && userZ0 < mapas[mapa][i][3]) col = true;
           
        if(userZ0 > mapas[mapa][i][1] && userZ0 < mapas[mapa][i][3]
           &&
           userX1 > mapas[mapa][i][0] && userX1 < mapas[mapa][i][2]) col = true;
           
        if(userZ1 > mapas[mapa][i][1] && userZ1 < mapas[mapa][i][3]
           &&
           userX1 > mapas[mapa][i][0] && userX1 < mapas[mapa][i][2]) col = true;
           
        if(userZ1 > mapas[mapa][i][1] && userZ1 < mapas[mapa][i][3]
           &&
           userX0 > mapas[mapa][i][0] && userX0 < mapas[mapa][i][2]) col = true;
    }
    
    
    return col;
}