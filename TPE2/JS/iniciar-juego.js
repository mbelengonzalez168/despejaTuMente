"use strict";

document.addEventListener("DOMContentLoaded", iniciarJuego);

function iniciarJuego() {
    const TIEMPO_JUEGO = 300;
    const CANVAS_WIDTH = 1000;
    const CANVAS_HEIGHT = 600;
    const CANVAS_IMG_BACKGROUND = "./CSS/IMG/FondoCanva20.png";
    const CANVAS_IMG_TABLERO = "./CSS/IMG/ficha-juego.jpg";
    let fondoCanvas = new Image();
    let imagenFicha1 = new Image();
    let imagenFicha2 = new Image();
    let imagenTablero = new Image();
    fondoCanvas.src = CANVAS_IMG_BACKGROUND;
    imagenTablero.src = CANVAS_IMG_TABLERO;
    let tipoTablero;
    let columnas;
    let filas;
    let turno_jugador_1;
    let color = 'blue';
    let jugador1;
    let ficha1;
    let jugador2;
    let ficha2;
    let finJuego;
    let timer = TIEMPO_JUEGO;
    let tiempo;
    let arregloFichasJugador1 = [];
    let ficha_j1_seleccionada = null;
    let arregloFichasJugador2 = [];
    let ficha_j2_seleccionada = null;
    let matriz_box = [];
    let boxSeleccionado = null;
    let inicioTableroX;
    let inicioTableroY;
    let ficha;

    let sectionJuego= document.querySelector(".juego-compartir");
        sectionJuego.style.display = 'block';

    let contentCanvas = document.querySelector(".content-canvas");
        contentCanvas.style.display = 'none';

    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');
        canvas.style.display = 'none';

    let sectionJuegoOpciones = document.getElementById("section-juego-opciones");
        sectionJuegoOpciones.style.display = 'none';

    //Boton jugar de la imagen previa del juego
    let btnPlay = document.getElementById('play');
        btnPlay.addEventListener("click", function () {
            sectionJuego.style.visibility = 'hidden';
            sectionJuego.style.height =  '600px';
            sectionJuegoOpciones.style.display = 'block';
    });

    let btnSalir = document.getElementById('btn-salir');
        btnSalir.addEventListener("click", function () {
            sectionJuego.style.visibility = 'visible';
            sectionJuego.style.height =  '750px';
            sectionJuegoOpciones.style.display = 'none';
    });
     
     //Muestra a que Jugador le toca jugar. Al inicio jugador 1 por defecto.
    let turnoCanvas = document.querySelector(".turno-juego");
    let turnoCanvas1 = document.querySelector(".turno-juego1");
     
     //Resultado final del juego. Ganador o empate.
    let resultadoCanvas = document.querySelector(".resultado-canvas");

     //Inicializa variables al reiniciar o salir del juego.
    function initVariables() {
        resultadoCanvas.style.display = 'none';
        turno_jugador_1 = true;
        turnoCanvas.style.display = 'flex';
        turnoCanvas.innerHTML = 'Turno: ' + jugador1 ;
        turnoCanvas1.style.display = 'none';
        turnoCanvas1.innerHTML = 'Turno: ' + jugador1;

        arregloFichasJugador1 = [];
        arregloFichasJugador2 = [];
        matriz_box = [];
        ficha_j1_seleccionada = null;
        ficha_j2_seleccionada = null;
        boxSeleccionado = null;
        finJuego = false;
        canvasDraw();
        timer = TIEMPO_JUEGO;
        clearTimeout(tiempo);
        decreaseTimer();
    }

    //Se inicia el juego. Boton jugar de las opciones disponibles
    let btnPlayJuego = document.querySelector("#btn-play-juego");
        btnPlayJuego.addEventListener("click", function () {
    //Display solo canvas
            sectionJuego.style.display = 'none';
            sectionJuegoOpciones.style.display = 'none';
            contentCanvas.style.display = 'block';
            canvas.style.display = 'block';
            canvas.width = CANVAS_WIDTH;
            canvas.height = CANVAS_HEIGHT;

    //Opciones seleccionadas de tipo de tablero
    let opcionesTablero = document.getElementsByName('tipoTablero');
        for (let d of opcionesTablero) {
            if (d.checked) {
                tipoTablero = Number(d.value);
                columnas = tipoTablero + 2;
                filas = tipoTablero + 1;
            }
        }
        //Jugador 1
        jugador1= document.getElementById('text-jugador1').textContent;
        let fichas1 = document.getElementsByName('targetgroup1');
        for (let ficha of fichas1) {
            if (ficha.checked) {
                ficha1 = ficha.value;
            }
        }
        imagenFicha1.src = "./CSS/IMG/" + ficha1 + ".png";
        //Jugador 2
        jugador2= document.getElementById('text-jugador2').textContent;
        let fichas2 = document.getElementsByName('targetgroup2');
        for (let ficha of fichas2) {
            if (ficha.checked) {
                ficha2 = ficha.value;
                }
        }
        imagenFicha2.src = "./CSS/IMG/" + ficha2 + ".png";

        initVariables();
    });

    //Funcion que dibuja la pantalla de inicio de juego    
    function canvasDraw() {
        //Primero dibujo primero el fondo
        ctx.drawImage(fondoCanvas, 0, 0, canvas.width, canvas.height);
        //Segundo las fichas
        let fichas_totales = (((filas + 1) * (columnas + 1)) / 2);
        for (let i = 0; i < fichas_totales; i++) {
            let f1 = new canvas_ficha(jugador1, 'f1' + i + 1 , ctx , 103 , 490 - (i * 8), imagenFicha1, color);
            f1.draw();
            arregloFichasJugador1[i] = f1;
        }
        for (let i = 0; i < fichas_totales; i++) {
            let f2 = new canvas_ficha(jugador2, 'f2' + i + 1, ctx, 897, 490 - (i * 8), imagenFicha2, color);
            f2.draw();
            arregloFichasJugador2[i] = f2;
        }
        //Tercero el tablero
        switch (tipoTablero) {
            case 4:
                inicioTableroX = 290;
                inicioTableroY = 160;
                break;
            case 5:
                inicioTableroX = 265;
                inicioTableroY = 130;
                break;
            case 6:
                inicioTableroX = 235;
                inicioTableroY = 100;
                break;
            case 7:
                inicioTableroX = 208;
                inicioTableroY = 70;
                break;              
        }
        for (let col = columnas; col >= 0; col--) {
            matriz_box[col] = [];
            for (let fil = filas; fil >= 0; fil--) {
                let tablero = new canvas_tablero("", ctx, inicioTableroX + (col * 58), inicioTableroY + (fil * 58), imagenTablero, 60, 60);
                tablero.draw();
                matriz_box[col][fil] = tablero;
            }
        }
    }
    //Boton salir del juego
    let btnGameOut = document.querySelector("#btn-game-out");
        btnGameOut.addEventListener("click", function (event) {
            contentCanvas.style.display = 'none';
            canvas.style.display = 'none';
            sectionJuego.style.visibility = 'hidden';
            sectionJuego.style.display = 'block';
            sectionJuego.style.height =  '650px';
            sectionJuegoOpciones.style.display = 'block';
            initVariables();
    });
     //Boton reiniciar juego. Reinicia la partida
    let btnReiniciar = document.getElementById('btn-reiniciar');
        btnReiniciar.addEventListener("click", function (event) {
            initVariables();
    });
    //Eventos del mouse sobre el canvas
    canvas.addEventListener('mousedown', function (event) {
        if (!finJuego) {
            let mousePos = getMousePos(event);
            if (turno_jugador_1) {
                for (let i = 0; i < arregloFichasJugador1.length; i++) {
                    let x = mousePos.x;
                    let y = mousePos.y;
                    let dx = Math.abs(x - arregloFichasJugador1[i].getPosCanvasX());//valor absoluto de la diferencia entre dos números.distancia entre dos puntos sin preocuparte por la dirección (izquierda o derecha en este caso).
                    let dy = Math.abs(y - arregloFichasJugador1[i].getPosCanvasY());
                    let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));//distancia euclidiana entre dos puntos en un espacio bidimensional.conecta dos puntos en un plano.
                    if (distancia <= arregloFichasJugador1[i].getRadio() && arregloFichasJugador1[i].estaLibre()) {
                        ficha_j1_seleccionada = arregloFichasJugador1[i];
                        break;
                    }
                }
                ficha_j1_seleccionada.setClickeada(true);
            } else {//Juega jugador dos.
                for (let i = 0; i < arregloFichasJugador2.length; i++) {
                    let x = mousePos.x;
                    let y = mousePos.y;
                    let dx = Math.abs(x - arregloFichasJugador2[i].getPosCanvasX());
                    let dy = Math.abs(y - arregloFichasJugador2[i].getPosCanvasY());
                    let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    if (distancia <= arregloFichasJugador2[i].getRadio() && arregloFichasJugador2[i].estaLibre()) {
                        ficha_j2_seleccionada = arregloFichasJugador2[i];
                        break;
                    }
                }
                ficha_j2_seleccionada.setClickeada(true);
            }
        }
    });

    //Movimiento del mouse con el click apretado
    canvas.addEventListener('mousemove', function (event) {
        let mousePos = getMousePos(event);
        if (turno_jugador_1) {
            if (ficha_j1_seleccionada != null) {////si tengo una ficha clickeada seteo la posicion durante todo el recorrido
                ficha_j1_seleccionada.setPosicionCanvas(
                    mousePos.x,
                    mousePos.y
                )
            }
        } else {
            if (ficha_j2_seleccionada != null) {
                ficha_j2_seleccionada.setPosicionCanvas(
                    mousePos.x,
                    mousePos.y
                )
            }
        }
        canvasActualizar();
    });
    //Click del mouse levanta----larga la ficha----primero controlo donde--valido POS
    canvas.addEventListener('mouseup', function (event) {
        let anchoColumnaInvisible = 60; // Ajusta el ancho de la columna invisible según tus necesidades
        let altoColumnaInvisible = 60;
        let columnasInvisibles = [];
        let posicionYInvisible=  inicioTableroY - altoColumnaInvisible;
        let posicionXInvisible=  inicioTableroX;
        let numeroColumnas = columnas ; // Utiliza la cantidad de columnas de la matriz
        let validarPosX = -1;
       let validarPosY = -1;
        // Llena el arreglo con las posiciones de las columnas invisibles
        for (let i = 0; i <= numeroColumnas; i++) {
                let x = posicionXInvisible + ( i) *anchoColumnaInvisible;
                let y = posicionYInvisible; 
                columnasInvisibles.push({ x, y });
        }
        if (ficha_j1_seleccionada != null || ficha_j2_seleccionada != null) {
            let mousePos = getMousePos(event);     
            for (let col = 0; col < columnasInvisibles.length; col++) {
                let columnaInvisible = columnasInvisibles[col];
                if (mousePos.x >= columnaInvisible.x &&
                    mousePos.x <= columnaInvisible.x + anchoColumnaInvisible &&
                    mousePos.y >= columnaInvisible.y &&
                    mousePos.y <= columnaInvisible.y + altoColumnaInvisible
                )                                          
                    //Si se suelta la ficha en un box
                    for (let fil = filas; fil >= 0 && !boxSeleccionado; fil--) {
                        if (!matriz_box[col][fil].isOcupado()) {
                            matriz_box[col][fil].setOcupado(true);
                                if (ficha_j1_seleccionada != null) {
                                    matriz_box[col][fil].setJugador(ficha_j1_seleccionada.getJugador());
                                    matriz_box[col][fil].setFicha(ficha_j1_seleccionada);
                                    ficha= matriz_box[col][fil].getFicha();    
                                } else {
                                    if (ficha_j2_seleccionada != null) {
                                    matriz_box[col][fil].setJugador(ficha_j2_seleccionada.getJugador());
                                    matriz_box[col][fil].setFicha(ficha_j2_seleccionada);
                                    ficha= matriz_box[col][fil].getFicha();
                                    }
                                }
                        boxSeleccionado = matriz_box[col][fil];
                        validarPosX = col; 
                        validarPosY = fil;              
                    }
                }
            }
        }
        if (turno_jugador_1 && ficha_j1_seleccionada != null) {
            ficha_j1_seleccionada.setClickeada(false);
            for (let y = 0; y < arregloFichasJugador1.length; y++) {
                if (ficha_j1_seleccionada.getId() === arregloFichasJugador1[y].getId()) {
                    if (boxSeleccionado != null) {                       
                        let posNueva = {
                            x: boxSeleccionado.getPosCanvasX() + (boxSeleccionado.getLongitudX() / 2),
                            y: boxSeleccionado.getPosCanvasY() - 1 + ((boxSeleccionado.getLongitudY() - arregloFichasJugador1[y].getRadio()))
                        }//Si hay que colocar la ficha
                        //Valida si haya un ganador
                        validarJugada(boxSeleccionado.getJugador(), validarPosX, validarPosY);
                                 
                        arregloFichasJugador1[y].setEstaLibre(false);
                        arregloFichasJugador1[y].setPosicionFinal(posNueva.x, posNueva.y);
                        //Habilita la siguinte ficha
                        arregloFichasJugador1[y - 1].setEstaLibre(true);
                        //Si coloca la ficha cambia de turno
                        turno_jugador_1 = !turno_jugador_1;

                         if (!finJuego){
                            turnoCanvas.innerHTML = 'Turno: ' + jugador2;
                            turnoCanvas.style.display = 'none';
                            turnoCanvas1.innerHTML = 'Turno: ' + jugador2;
                            turnoCanvas1.style.display = 'flex';
                        }
                                       
                    } else {
                        //Vuelve al origen
                        if (boxSeleccionado == null
                            && ficha_j1_seleccionada.getId() === arregloFichasJugador1[y].getId()) {
                                arregloFichasJugador1[y].setPosicionInicial();
                        }
                    }
                    break;
                }
            }
            ficha_j1_seleccionada = null;
        } else {
            if (!turno_jugador_1 && ficha_j2_seleccionada != null) {
                ficha_j2_seleccionada.setClickeada(false);
                for (let y = 0; y < arregloFichasJugador2.length; y++) {
                    if (ficha_j2_seleccionada.getId() === arregloFichasJugador2[y].getId()) {
                        if (boxSeleccionado != null) {
                            let posNueva = {
                                x: boxSeleccionado.getPosCanvasX() + (boxSeleccionado.getLongitudX() / 2),
                                y: boxSeleccionado.getPosCanvasY() - 1 + ((boxSeleccionado.getLongitudY() - arregloFichasJugador2[y].getRadio()))
                            }//Si hay que colocar la ficha
                            //Valida si hya un ganador
                            validarJugada(boxSeleccionado.getJugador(), validarPosX, validarPosY);
                            arregloFichasJugador2[y].setEstaLibre(false);
                            arregloFichasJugador2[y].setPosicionFinal(posNueva.x, posNueva.y);
                            //Habilita la siguinte ficha
                            arregloFichasJugador2[y - 1].setEstaLibre(true);
                            //Si coloca la ficha cambia de turno
                            if (!finJuego){
                                turno_jugador_1 = !turno_jugador_1;
                                turnoCanvas.innerHTML = 'Turno: ' + jugador1;
                                turnoCanvas.style.display = 'flex';    
                                turnoCanvas1.innerHTML = 'Turno: ' + jugador1;
                                turnoCanvas1.style.display = 'none';  
                            }        
                        } else {
                            //Vuelve al origen
                            if (boxSeleccionado == null
                                && ficha_j2_seleccionada.getId() === arregloFichasJugador2[y].getId()) {
                                    arregloFichasJugador2[y].setPosicionInicial();
                            }
                        }
                        break;
                    }
                }
                ficha_j2_seleccionada = null;
            }
        }
        boxSeleccionado = null;
        canvasActualizar();
    });
   
    //Luego de insertar una ficha valida si hay un ganador.
    function validarJugada(jugador, cInicial, fInicial) {
        let contador = 0;
        let fichasGanadoras = [];
        //Valido por columnad desde una posicion inicial hacia la izq y luego hacia la derecha
        for (let col = cInicial; col >= 0 && !finJuego; col--) {
            if (matriz_box[col][fInicial].getJugador() === jugador) {
                fichasGanadoras.push(matriz_box[col][fInicial].getFicha());
                contador++;
                if (contador == tipoTablero) {
                    for (let i=0; i < fichasGanadoras.length; i++){
                        fichasGanadoras[i].setGanadora(true);
                    }
                    
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }
        for (let col = cInicial + 1; col <= columnas && !finJuego; col++) {
            if (matriz_box[col][fInicial].getJugador() === jugador) {
                fichasGanadoras.push(matriz_box[col][fInicial].getFicha());
                contador++;
                if (contador == tipoTablero) {
                    for (let i=0; i < fichasGanadoras.length; i++){
                        fichasGanadoras[i].setGanadora(true);
                    }
                    
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }

        //Valido por filas hacia abajo y luego hacia arriba
        contador = 0;
        fichasGanadoras = [];
        for (let fil = fInicial; fil >= 0 && !finJuego; fil--) {
            if (matriz_box[cInicial][fil].getJugador() === jugador) {
                fichasGanadoras.push(matriz_box[cInicial][fil].getFicha());
                contador++;
                if (contador == tipoTablero) {
                    for (let i=0; i < fichasGanadoras.length; i++){
                        fichasGanadoras[i].setGanadora(true);
                    }
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }
        for (let fil = fInicial + 1; fil <= filas && !finJuego; fil++) {
            if (matriz_box[cInicial][fil].getJugador() === jugador) {
                fichasGanadoras.push(matriz_box[cInicial][fil].getFicha());
                contador++;
                if (contador == tipoTablero) {
                    for (let i=0; i < fichasGanadoras.length; i++){
                        fichasGanadoras[i].setGanadora(true);
                    }
                    finalizarJuego(jugador);
                }
            } else {
                break;
            }
        }

        //Valido diagonal 1
            fichasGanadoras = [];
            contador = 0;
            let cDiagonal = cInicial;
            let fDiagonal = fInicial;
            while (cDiagonal <= columnas && fDiagonal >= 0 && !finJuego) {
                if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                    fichasGanadoras.push(matriz_box[cDiagonal][fDiagonal].getFicha());
                    contador++;
                    if (contador == tipoTablero) {
                        for (let i=0; i < fichasGanadoras.length; i++){
                            fichasGanadoras[i].setGanadora(true);
                        }
                        finalizarJuego(jugador);
                    }
                    cDiagonal++;
                    fDiagonal--;
                } else {
                    break;
                }
            }

            cDiagonal = cInicial - 1;
            fDiagonal = fInicial + 1;
            while (cDiagonal >= 0 && fDiagonal <= filas && !finJuego) {
                if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                    fichasGanadoras.push(matriz_box[cDiagonal][fDiagonal].getFicha());
                    contador++;
                    if (contador == tipoTablero) {
                        for (let i=0; i < fichasGanadoras.length; i++){
                            fichasGanadoras[i].setGanadora(true);
                        }
                        finalizarJuego(jugador);
                    
                    }
                    cDiagonal--;
                    fDiagonal++;
                } else {
                    break;
                }
            }

            //Valido diagonal 2
            contador = 0;
            fichasGanadoras = [];
            cDiagonal = cInicial;
            fDiagonal = fInicial;
            while (cDiagonal >= 0 && fDiagonal >= 0 && !finJuego) {
                if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                    fichasGanadoras.push(matriz_box[cDiagonal][fDiagonal].getFicha());
                    contador++;
                    if (contador == tipoTablero) {
                        for (let i=0; i < fichasGanadoras.length; i++){
                            fichasGanadoras[i].setGanadora(true);
                        }
                        finalizarJuego(jugador);
                    
                    }
                    cDiagonal--;
                    fDiagonal--;
                } else {
                    break;
                }
            }
            cDiagonal = cInicial + 1;
            fDiagonal = fInicial + 1;
            while (cDiagonal <= columnas && fDiagonal <= filas && !finJuego) {
                if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
                    fichasGanadoras.push(matriz_box[cDiagonal][fDiagonal].getFicha());
                    contador++;
                    if (contador == tipoTablero) {
                        for (let i=0; i < fichasGanadoras.length; i++){
                            fichasGanadoras[i].setGanadora(true);
                        }
                        finalizarJuego(jugador);
                    }
                    cDiagonal++;
                    fDiagonal++;
                } else {
                    break;
                        }
                    }
                }

    //Acciones finales del juego.
    function finalizarJuego(jugador) {
        clearTimeout(tiempo);
        resultadoCanvas.style.display = 'flex';
        turnoCanvas.style.display = 'none';
        turnoCanvas1.style.display = 'none';
        resultadoCanvas.innerHTML = 'Ganador ' + jugador;
        finJuego = true;
         
    }

    //Actualiza el canvas
    function canvasActualizar() {
        //Fondo
        ctx.drawImage(fondoCanvas, 0, 0, canvas.width, canvas.height);

        //Tablero
        for (let i = columnas; i >= 0; i--) {
            for (let j = filas; j >= 0; j--) {
                matriz_box[i][j].draw();
            }
        }

        //Fichas del jugador 1
        for (let i = 0; i < arregloFichasJugador1.length; i++) {
            arregloFichasJugador1[i].draw();
        }

        //Fichas del jugador 2
        for (let i = 0; i < arregloFichasJugador2.length; i++) {
            arregloFichasJugador2[i].draw();
        }
    }

    //Funcion encargada de controlar el tiempo de partida
    function decreaseTimer() {
        if (timer > 0) {
            tiempo = setTimeout(decreaseTimer, 1000);
            timer--;
            let minutes = Math.floor(timer / 60);
            let segundos = timer % 60;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            segundos = segundos < 10 ? "0" + segundos : segundos;
            document.querySelector(".timer-juego").innerHTML = minutes + ' : ' + segundos;
        }

        if (timer === 0) {
            clearTimeout(tiempo);
            resultadoCanvas.style.display = 'flex';
            resultadoCanvas.innerHTML = 'Empate';
            finJuego = true;
        }
    }

    //Detectar posicion del mouse
    function getMousePos(event) {
        let ClientRect = canvas.getBoundingClientRect();
        return { //objeto
            x: Math.round(event.clientX - ClientRect.left),
            y: Math.round(event.clientY - ClientRect.top)
        }
    }
}