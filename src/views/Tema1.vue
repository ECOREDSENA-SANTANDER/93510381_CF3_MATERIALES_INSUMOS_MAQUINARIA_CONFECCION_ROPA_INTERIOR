<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Maquinaria y componentes para la confección de ropa interior

      p.mb-5 La confección de ropa interior requiere maquinaria especializada que asegure precisión, calidad y eficiencia. El uso adecuado de estos equipos y sus componentes optimiza los procesos y garantiza acabados de alto nivel.
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 La máquina de coser moderna

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-sm-12.col-md-6.col-lg-4
          img.w-15.mb-2(src='@/assets/curso/temas/t1/3.svg', alt='')
          p.mb-0 La máquina de coser es uno de los inventos más representativos de la historia, cuya evolución ha sido significativa gracias a la incorporación de electricidad, rodamientos, metales y otros suministros que han mejorado su eficiencia y velocidad. Hasta hace 25 años, los equipos de esa época difícilmente podían considerarse verdaderas máquinas de coser, ya que su rendimiento apenas alcanzaba el 12 % del tiempo total de costura, mientras que el 88 % restante correspondía a movimientos manuales. Debido a su bajo nivel de automatización, estos dispositivos eran más bien herramientas de costura que máquinas propiamente dichas.
        .col-sm-12.col-md-6.col-lg-4
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.] Máquina de coser 
          figure
            img(src='@/assets/curso/temas/t1/2.png', alt='')
            figcaption.mb-0 Fuente: SENA, (2014).


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Visión futurista de la máquina de coser
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-11
            p.mb-0 Actualmente, se están desarrollando máquinas de coser por ultrasonido, las cuales incorporan un sonotrodo que emite ondas ultrasónicas de 60.000 ciclos contra una rueda transportadora con forma de puntada. Este sistema permite soldar las telas en lugar de coserlas y, al cambiar el disco, puede imitar diferentes tipos de costuras, como las de máquina plana, fileteadora, recubridora e incluso ojales con corte central. Para un óptimo resultado, el material a unir debe contener al menos un 60 % de poliéster, garantizando una soldadura resistente y de alta calidad.
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.svg', alt='Máquina de coser industrial de diseño clásico, presenta una estructura metálica robusta con una aguja en la parte frontal, un carrete de hilo en la parte superior y una rueda de mano en el lateral derecho.')

      .titulo-sexto.color-acento-contenido
        p.mb-0 #[b Figura 2.] Clasificación de las máquinas de coser según su tecnología
          
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-10
          figure
            img(src='@/assets/curso/temas/t1/5.svg', alt='Compara tres generaciones de maquinaria en confección según su automatización y participación del operario.')
            figcaption.mb-0 Fuente: SENA, (2017).




      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-sm-12.col-md-6.col-lg-4
          p.mb-0 En la primera generación (tecnología convencional), el operario realiza el 83 % de las tareas manualmente. En la segunda generación (tecnología programable), la intervención manual se reduce al 60 %, mejorando la automatización. En la tercera generación (tecnología robótica), la automatización es máxima, mejorando la apariencia de las prendas y permitiendo que un solo operario supervise hasta tres máquinas, aumentando la eficiencia y reduciendo la carga de trabajo manual. 
        .col-sm-12.col-md-6.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.svg', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de maquinaria en confección
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.png', alt='')
        .col-sm-12.col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-2")
            div(titulo='Tecnología convencional')
              .row.mb-0
                .col-12
                  p.mb-0 Requiere una alta intervención del operario, quien realiza el 83 % de los movimientos. La velocidad y producción dependen de su habilidad. Ejemplos: máquina plana sencilla, cadeneta doble, recubridora y cerradora de codo.
            div(titulo='Tecnología programable o electrónica')
              .row.mb-0
                .col-12
                  p.mb-4 Integra sistemas electroneumáticos que reducen el esfuerzo del operario al 60 %. A través de un tablero de control, se programan la velocidad y ciertos movimientos, optimizando el consumo de hilo y reduciendo la fatiga. Ejemplo: máquina pegadora de bolsillos en jeans.
                  p.mb-3 #[b Funciones automatizadas:]
                  ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-check-circle.bg-color-1
                        p.mb-0 Posicionamiento de la aguja (arriba/abajo).
                      li.d-flex
                          i.fas.fa-check-circle.bg-color-1
                          p.mb-0 Levantamiento de las prensatelas y corte automático de hilo.
                      li.d-flex
                          i.fas.fa-check-circle.bg-color-1
                          p.mb-0 Programación de ciclos de costura (ej. pegar marquilla o bolsillo).
                  p.mb-0 Los sistemas neumáticos son activados por el aire a presión conducido a través de mangueras,logrando complementar los movimientos de los sistemas electrónicos como el corte de hilo o succión de residuos, entre otros.
            div(titulo='Tecnología robótica')
              .row.mb-0
                .col-12
                  p.mb-3 La tecnología robótica en confección comprende máquinas diseñadas para realizar todo el ciclo de una operación de manera automática. Ejemplos de estas máquinas incluyen la dobladilladora de ruedos (recubridora), la presilladora para cajas de perilla y la dobladora de camisetas. Su uso reduce hasta un 30 % los movimientos del operario.
                  p.mb-0 Este tipo de tecnología se emplea en procesos como el pegado de marquillas en pantalones, la ojaladora, la pretinadora, la presilladora y la fileteadora industrial, disminuyendo el esfuerzo del trabajador en un 60% y mejorando la eficiencia en la producción.
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Maquinaria plana
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png', alt='')
        .col-sm-12.col-md-6.col-lg-4.bg-color-3.d-flex.justify-content-center.align-items-center
          p.mb-0.px-4 Es una de las máquinas más utilizadas en la confección debido a las múltiples operaciones que se pueden realizar con ella. Esta máquina, de tecnología convencional, requiere una sola aguja y funciona con pedal y rodillera. La puntada se forma gracias a la acción conjunta de la aguja y el gancho giratorio. Se caracteriza por producir una puntada resistente, lo que la convierte en la máquina básica para confección.
        .col-sm-12.col-md-6.col-lg-4
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.] Máquina plana
          figure
            img(src='@/assets/curso/temas/t1/10.png', alt='Máquina de coser industrial de la primera generación, caracterizada por tener una estructura robusta con una mesa de trabajo amplia y un sistema de operación manual. El operario debe realizar varias tareas manualmente, como levantar la prensatelas, cortar el hilo y rematar las costuras, lo cual es típico de la tecnología ')
            figcaption.mb-0 Fuente: SENA, (2014).

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Partes y funciones de la máquina plana

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.] Partes de la máquina plana
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/11.png', alt='Máquina de coser con etiquetas que identifican sus partes principales. Entre los componentes señalados se encuentran el tornillo prensa tela, la palanca tira - hilo, el tensor del hilo, la barra de la aguja, la aguja, la planchuela corrediza, el pie prénsatelas, la planchuela de la aguja, la guía hilos, el visor de aceite, el volante, el regulador de puntada y la palanca de retroceso. ')
                figcaption.mb-0 Fuente: SENA, (2014).
            .tarjeta.bg-color-4.p-3(x="29%" y="60%" numero="")
              .h5.mb-2 Aguja
              p.mb-0 Conduce el hilo a través de la tela y junto con el hilo de la bobina forman la puntada.

            .tarjeta.bg-color-4.p-3(x="29%" y="54%" numero="")
              .h5.mb-2 Barra de la aguja
              p.mb-0 Es la que sostiene la aguja y permite el movimiento.

            .tarjeta.bg-color-4.p-3(x="36%" y="62.5%" numero="")
              .h5.mb-2 Devanador
              p.mb-0 Sirve para enrollar el hilo que necesita la bobina.

            .tarjeta.bg-color-4.p-3(x="35%" y="18%" numero="")
              .h5.mb-2 Guía hilos
              p.mb-0 Son pequeños alambres que dirigen el hilo.

            .tarjeta.bg-color-4.p-3(x="31%" y="30%" numero="")
              .h5.mb-2 Palanca tira-hilo
              p.mb-0 Tira el hilo procedente de la porta hilos para suministrarlo a la aguja.

            .tarjeta.bg-color-4.p-3(x="73%" y="45%" numero="")
              .h5.mb-2 Palanca de retroceso
              p.mb-0 Al activarlo puede hacer puntadas en reversa.

            .tarjeta.bg-color-4.p-3(x="22%" y="65%" numero="")
              .h5.mb-2 Planchuela corrediza
              p.mb-0 Está situada debajo del pie prensatelas y se puede mover para cambiar la bobina.

            .tarjeta.bg-color-4.p-3(x="29.5%" y="65%" numero="")
              .h5.mb-2 Pie prensatela
              p.mb-0 La función es hacer presión y sostener la tela contra la planchuela para que no se mueva.

            .tarjeta.bg-color-4.p-3(x="32%" y="62.5%" numero="")
              .h5.mb-2 Planchuela de la aguja
              p.mb-0 Situada debajo del pie prensatelas y tiene un orificio que permite el paso de la aguja.

            .tarjeta.bg-color-4.p-3(x="75%" y="35%" numero="")
              .h5.mb-2 Regulador de puntada
              p.mb-0 Se utiliza para seleccionar el largo de la puntada. Si se ubica en cero la máquina no cose.

            .tarjeta.bg-color-4.p-3(x="35%" y="39%" numero="")
              .h5.mb-2 Tensor del hilo de la aguja
              p.mb-0 Tensiona el hilo para que la puntada sea correcta.

            .tarjeta.bg-color-4.p-3(x="28%" y="12%" numero="")
              .h5.mb-2 Tornillo presión del prensatelas
              p.mb-0 Al girar el tornillo que tiene un resorte se produce la graduación y además amortigua la fuerza que hace la palanca tira-hilo.

            .tarjeta.bg-color-4.p-3(x="63%" y="15%" numero="")
              .h5.mb-2 Visor del aceite
              p.mb-0 Indica el nivel de aceite que tiene la máquina.

            .tarjeta.bg-color-4.p-3(x="80%" y="25%" numero="")
              .h5.mb-2 Volante
              p.mb-0 Es la rueda que recibe el movimiento de la correa y lo transmite a los mecanismos interiores del cabezote. También puede ser movido por la mano cuando se va a levantar la aguja.

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 5.] Máquina de coser 
          figure
            img(src='@/assets/curso/temas/t1/12.png', alt='Máquina de coser con etiquetas que identifican sus partes principales. Entre los componentes señalados se encuentran el tornillo prensa tela, la palanca tira - hilo, el tensor del hilo, la barra de la aguja, la aguja, la planchuela corrediza, el pie prénsatelas, la planchuela de la aguja, la guía hilos, el visor de aceite, el volante, el regulador de puntada y la palanca de retroceso. ')
            figcaption.mb-0 Fuente: SENA, (2014).
        .col-sm-12.col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-2")
            div(titulo='1. Barra de la aguja')
              .row.mb-0
                .col-12
                  p.mb-0 Sostiene la aguja en su extremo y permite su movimiento ascendente y descendente. Posee un tornillo que facilita la instalación de la aguja y la asegura en su lugar. En algunas máquinas, el orificio donde se instala la aguja no es completamente circular, sino que tiene una parte plana que debe coincidir con la parte plana de la aguja.

            div(titulo='2. Palanca tira-hilo')
              .row.mb-0
                .col-12
                  p.mb-0 Como su nombre lo indica, es la palanca que tira del hilo proveniente del carrete para suministrarlo a la aguja.

            div(titulo='3. Devanador de bobina')
              .row.mb-0
                .col-12
                  p.mb-0 Pequeño mecanismo diseñado para enrollar rápidamente el hilo en la bobina o carrete. Puede estar ubicado en la parte frontal o superior de la máquina.

            div(titulo='4. Tensor superior')
              .row.mb-0
                .col-12
                  p.mb-0 Compuesto por dos discos entre los cuales pasa el hilo, permitiendo graduar su tensión. La regulación se realiza mediante un tornillo de mano que, además, cuenta con un resorte que amortigua la fuerza ejercida por la palanca tira-hilo.

            div(titulo='5. Cigüeñal')
              .row.mb-0
                .col-12
                  p.mb-0 Eje interno con codos que transforma el movimiento rectilíneo en circular.

            div(titulo='6. Volante y tornillo aislador')
              .row.mb-0
                .col-sm-12.col-lg-7
                  p.mb-4 #[b Volante:] es la rueda que recibe el movimiento de la correa y lo transmite a los mecanismos internos del cabezote. También puede girarse manualmente para levantar la aguja.
                  p.mb-0 #[b Tornillo aislador:] permite inmovilizar la aguja mientras el volante sigue en movimiento. Esto es útil, por ejemplo, al devanado de la bobina.
                .col-sm-12.col-lg-5
                  .titulo-sexto.color-primario
                    p.mb-0 #[b Figura 6.]  Volante y tornillo  aislador
                  figure
                    img(src='@/assets/curso/temas/t1/13.png', alt='Ejemplo de cuando se va a desvanar, se presenta el volante, el tornillo y la correa.')
                    figcaption.mb-0 Fuente: SENA, (2014).
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-2")
            div(titulo='7. Bielas')
              .row.mb-0
                .col-12
                  p.mb-0 Barra que transforma un movimiento de vaivén en uno de rotación.

            div(titulo='8. Correa')
              .row.mb-0
                .col-12
                  p.mb-0 Transmite el movimiento rotativo entre ruedas o poleas.

            div(titulo='9. Mecanismo vertical')
              .row.mb-0
                .col-12
                  p.mb-0 Permite el movimiento vertical del arrastratela.

            div(titulo='10. Mecanismo horizontal')
              .row.mb-0
                .col-12
                  p.mb-0 Permite el movimiento horizontal del arrastratela.

            div(titulo='11. Barra de la aguja')
              .row.mb-0
                .col-12
                  p.mb-0 Es la que sostiene la aguja en su extremo y permite que la aguja suba y baje. Posee un tornillo que permite el ingreso de la aguja y la asegura. En algunas máquinas el orificio dentro del cual se instala la aguja no es circular, sino que tiene una parte plana que debe coincidir con la parte plana de la aguja.
            div(titulo='12. Dientes arrastradores')
              .row.mb-0
                .col-12
                  .row.justify-content-center.mb-5
                    .col-sm-12.col-lg-7
                        p.mb-0 Desplazan la tela hacia atrás conforme la aguja y la caja bobina realizan la puntada. La caja bobina y la lanzadera son responsables de entrelazar el hilo interno con el de la aguja.
                    .col-sm-12.col-lg-5
                      .titulo-sexto.color-primario
                        p.mb-0 #[b Figura 7.] Caja bobina y lanzadera 
                      figure
                        img(src='@/assets/curso/temas/t1/15.png', alt='')
                        figcaption.mb-0 Fuente: SENA, (2014).
            div(titulo='13. Barra prensatelas')
              .row.mb-0
                .col-12
                  .row.justify-content-center.mb-5
                    .col-sm-12.col-lg-7
                        p.mb-3 Su función es sostener la tela contra la planchuela durante la costura. Se acciona manualmente mediante una palanca ubicada detrás del cabezote, la cual, al elevarse, levanta las prensatelas. La presión de las prensatelas puede ajustarse según el grosor de la tela mediante un tornillo ubicado en la parte superior del cabezote.
                        p.mb-0 Para telas delgadas, se recomienda aplicar poca presión, mientras que para telas más gruesas es necesario aumentarla. Si el pie prensatela no está correctamente orientado, la aguja puede golpearlo, doblarse o romperse, lo que podría causar lesiones.
                    .col-sm-12.col-lg-5
                      .titulo-sexto.color-primario
                        p.mb-0 #[b Figura 8.] Barra de prensatelas  
                      figure
                        img(src='@/assets/curso/temas/t1/16.png', alt='')
                        figcaption.mb-0 Fuente: SENA, (2014).     
        .col-sm-12.col-lg-3
          img(src='@/assets/curso/temas/t1/14.png', alt='')


      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de maquinaria plana
      
      p.mb-5 La máquina plana es la más utilizada y cuenta con una amplia variedad de proveedores y referencias en el mercado, tanto en versiones de 1 como de 2 agujas.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-6
          .bg-color-5.py-5.px-4.justify-content-center.align-items-center.br-1.hcard-1
            h4.text-center Máquina plana de 2 agujas
            p.mb-4.text-center Esta máquina duplica la puntada de la plana de una aguja, lo que permite ahorrar tiempo en ciertas operaciones. Es ampliamente utilizado en la confección de ropa interior, especialmente en la fabricación de brasieres.
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 9.] Máquina plana de 2 agujas  
            figure.mb-4
              img(src='@/assets/curso/temas/t1/17.png', alt='Máquina de coser industrial en funcionamiento, utilizada para confección de prendas. La imagen muestra una costura con doble aguja sobre tela blanca, guiada manualmente por una persona.')
              figcaption.mb-0 Fuente: SENA, (2014).    
            p.mb-0.text-center Se puede utilizar con un folder o guía para poner el caucho en los brasieres y pantys, además para sesgar las copas de los brasieres y asentarlas.
        .col-sm-12.col-lg-6
          .bg-color-4.py-5.px-4.justify-content-center.align-items-center.br-1.hcard-1
            h4.text-center Máquina plana de coser y cortar
            p.mb-4.text-center Es una máquina de 1 aguja equipada con una cuchilla que permite coser y recortar los bordes de la tela al mismo tiempo. Su cuchilla puede ajustarse para manejar distintos márgenes de recorte.
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 10.] Máquina plana de coser y cortar 
            figure.mb-0
              img(src='@/assets/curso/temas/t1/18.png', alt='')
              figcaption.mb-0 Fuente: SENA, (2014).    
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-12 
          .bg-color-4.py-5.px-4.justify-content-center.align-items-center.br-1
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-6
                h4.text-center.mb-5 Máquina zigzag
                p.mb-4 Este tipo de máquina es ampliamente utilizado en la confección de ropa interior debido a la elasticidad de su punta y su versatilidad en diversas operaciones. Se emplea tanto en entornos familiares como industriales.
                p.mb-4 A diferencia de la máquina plana, la máquina en zigzag cuenta con un mecanismo que permite a la aguja moverse de izquierda a derecha en cada punta, generando el característico movimiento en zigzag.
                p.mb-4 Existen varios tipos de zigzag, siendo los más utilizados el Z1 (zigzag sencillo) y el Z3 (zigzag triple). Es ideal para trabajar con tejidos ligeros y medianos.
                p.mb-0 Se utiliza en la colocación de resortes en lencería, bordados y diversas aplicaciones, como la instalación de cierres, la unión de copas de guata, la fijación de elásticos y abrochaduras, el asentado de base elástica, la unión de copas base y la confección de acabados tipo rollito.
              .col-sm-12.col-lg-6
                .titulo-sexto.color-primario
                  p.mb-0 #[b Figura 11.] Máquina de coser con puntada zigzag
                figure.mb-0
                  img(src='@/assets/curso/temas/t1/19.png', alt='')
                  figcaption.mb-0 Fuente: SENA, (2014).     
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Enhebrados de la máquina plana  
      p.mb-4 Aprender a enhebrar la máquina, es la operación más importante para lograr un proceso de confección eficiente, algunas recomendaciones.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/20.png', alt='')
        .col-sm-12.col-lg-4
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 12.] Máquina enhebrada
          figure.mb-0
            img.w-95.m-auto(src='@/assets/curso/temas/t1/21.png', alt='')
            figcaption.mb-0 Fuente: SENA, (2014). 

        .col-sm-12.col-lg-4
          .bg-color-3.p-5.justify-content-center.align-items-center
            img.w-15.mb-2(src='@/assets/curso/temas/t1/22.svg', alt='Diagrama técnico de una máquina de coser industrial, ilustrando el recorrido del hilo para el enhebrado. Se señalan los puntos clave por donde debe pasar el hilo, incluyendo guías, tensores y la aguja, asegurando un enhebrado correcto para un óptimo funcionamiento.')
            p.mb-0 Diagrama técnico de una máquina de coser industrial que presenta el proceso de enhebrado. Se indican los puntos clave por donde debe pasar el hilo, incluyendo el portacarrete, las guías, el tensor de hilo, la palanca tira-hilo y la aguja. Este recorrido es esencial para garantizar una tensión adecuada del hilo y obtener una costura uniforme y precisa. Un enhebrado correcto evita enredos, roturas de hilo y fallos en la puntada.
      
      
      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Elementos mecánicos para formar la puntada
      
      .bg-full-width.bg-fondo-1.mb-0.pt-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-8
                .row.justify-content-center.mb-5.align-items-center
                  .col-sm-12.col-lg-2.d-none.d-lg-block
                    img.w-75.m-auto(src='@/assets/curso/temas/t1/23.svg', alt='')
                  .col-sm-12.col-lg-10
                      p.mb-0 Las puntadas están formadas por el entrelazamiento de dos hilos para unir telas entre sí. El hilo de arriba lo suministra la aguja que atraviesa las telas para enlazarse con el hilo de abajo, enrollado en un carretel o bobina.
                .bg-color-6.mb-4
                  h3.px-3.py-1 Tipo de puntada
                p.mb-4 Pertenece a la serie 300 específicamente es la 301, doble pespunte a dos hilos.
                .row.justify-content-center.mb-5
                  .col-sm-12.col-lg-8
                    .titulo-sexto.color-primario
                      p.mb-0 #[b Figura 13.] Esquema de la puntada
                    figure.mb-0
                      img.w-95.m-auto(src='@/assets/curso/temas/t1/25.png', alt='Proceso de formación de la puntada en una máquina de coser. Se muestra cómo la aguja atraviesa las telas, mientras el hilo superior se entrelaza con el hilo de la bobina para formar una costura uniforme.')
                      figcaption.mb-0 Fuente: SENA, (2014). 
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/24.png', alt='')
      
      
      .bg-color-6.mb-4(data-aos="fade-left")
        h3.px-3.py-1 Regulación de la tensión del hilo de la aguja
      
      p.mb-3 Es fundamental que la tensión del hilo de la aguja sea adecuada para garantizar una puntada precisa. En este sentido, pueden presentarse los casos:
      .bg-full-width.bg-fondo-1.mb-0.pt-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/26.png', alt='')
              .col-sm-12.col-lg-8
                TabsA.color-acento-botones
                  .tarjeta.color-acento-botones.p-4(titulo="Exceso de tensión")
                    h4 Exceso de tensión
                    p.mb-4 Ocurre cuando el hilo de la aguja está demasiado ajustado, lo que provoca que quede completamente visible en la parte superior de la tela, ya que ejerce más fuerza que el hilo de la bobina.
                    .row.mb-0
                      .col-sm-12.col-lg-8
                        .titulo-sexto.color-primario
                          p.mb-0 #[b Figura 14.] Exceso de tensión  del hilo 
                        figure.mb-0
                          img.w-95.m-auto(src='@/assets/curso/temas/t1/27.png', alt='Ilustración que presenta una puntada con tensión desequilibrada en una máquina de coser. El hilo superior ejerce demasiada presión, lo que hace que el hilo de la bobina quede visible en la parte inferior de la tela, indicando un exceso de tensión en el hilo de la aguja.')
                          figcaption.mb-0 Fuente: SENA, (2014). 

                  .tarjeta.color-acento-botones.p-4(titulo="Poca tensión")
                    h4 Poca tensión
                    p.mb-4 Cuando la tensión del hilo de la aguja es muy débil, no logra halar el hilo de la bobina hacia el centro del material. Por lo tanto, el hilo de la bobina se verá completamente por la parte inferior de la tela.
                    .row.mb-0
                      .col-sm-12.col-lg-8
                        .titulo-sexto.color-primario
                          p.mb-0 #[b Figura 15.] Poca tensión  del hilo
                        figure.mb-0
                          img.w-95.m-auto(src='@/assets/curso/temas/t1/28.png', alt='Ilustración que presenta una puntada con poca tensión en el hilo de la aguja. Se observa que el hilo de la bobina predomina en la superficie de la tela, formando lazos sueltos y una costura deficiente que puede deshacerse fácilmente.')
                          figcaption.mb-0 Fuente: SENA, (2014).

                  .tarjeta.color-acento-botones.p-4(titulo="Tensión correcta")
                    h4 Tensión correcta
                    p.mb-4 Cuando la tensión del hilo de la aguja es la adecuada, el entrelazamiento de los hilos queda en la mitad de la tela.
                    .row.mb-0
                      .col-sm-12.col-lg-8
                        .titulo-sexto.color-primario
                          p.mb-0 #[b Figura 16.] Tensión correcta  del hilo
                        figure.mb-0
                          img.w-95.m-auto(src='@/assets/curso/temas/t1/29.png', alt='Ilustración que representa una punta con tensión equilibrada en una máquina de coser. El hilo de la aguja y el hilo de la bobina se entrelazan correctamente en el interior de la tela, logrando una costura uniforme y resistente.')
                          figcaption.mb-0 Fuente: SENA, (2014).  

      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de lubricación y sistema de alimentación

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-6
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Lubricación")
              .col-12
                p.mb-0 Manual y automática.
            .row(numero="2" titulo="Sistemas de alimentación")
              .col-12
                p.mb-0 El transporte del material puede ser oscilante sencillo de cuatro tiempos o pasos, o una combinación de oscilante sencillo con diferencial.
            .row(numero="3" titulo="Hilo utilizado")
              .col-12
                p.mb-0 Se emplean hilos de fibras naturales, sintéticas y artificiales en los calibres adecuados para el material a confeccionar. Se recomienda el uso de hilos con núcleo de poliéster, ya que ofrecen una elongación del 17 % al 20 %, lo que proporciona mayor elasticidad y tolerancia en la costura. Además, es fundamental considerar que los hilos lubricados mantengan una tensión constante, reduciendo la cantidad de estiramiento necesario durante la costura.
            .row(numero="4" titulo="Sistemas de aguja")
              .col-12
                p.mb-0 Se recomienda el uso de agujas de bola, ya que su diseño permite un deslizamiento suave entre las telas, evitando daños como perforaciones o roturas.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/30.png', alt='')


      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Sistema de accionamiento

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/31.svg', alt='')
        .col-sm-12.col-lg-4
          .bg-color-7.p-4.justify-content-center.align-items-center
            p.mb-3 Para una mejor comprensión, se tomará como referencia el movimiento del gancho, el cual gira en sentido contrario a las manecillas del reloj, y su punta será el punto de orientación.
            p.mb-0 El proceso comienza cuando la aguja desciende desde su punto muerto superior, llevando el hilo a través del material hasta alcanzar su punto más bajo. En ese instante, la punta del gancho se ubica aproximadamente a las 2 en punto. Mientras tanto, la palanca tira-hilos desciende para suministrar hilo a la aguja, y los dientes de arrastre se encuentran en la parte inferior de la planchuela, moviéndose en dirección hacia el operario.
        .col-sm-12.col-lg-4
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 17.] Mecanismo de formación de la puntada
          figure.mb-0
            img.w-80.m-auto(src='@/assets/curso/temas/t1/32.png', alt='')
            figcaption.mb-0 Fuente: SENA, (2014). 

      .row.justify-content-center.mb-5.bg-color-8.p-4
        .col-sm-12.col-lg-3
          p.mb-0 La punta del gancho captura la lazada y la posición en el talón del gancho o en la ranura de alojamiento de la lazada. A partir de este punto, la referencia será la lazada ubicada en el talón del gancho. Cuando esta alcanza aproximadamente la posición de las 11 en el reloj, el desviador de hilo o deflector comienza a abrir la lazada, impidiendo que se enrede con la caja de la bobina. Mientras tanto, la aguja se retira del material, la palanca sigue descendiendo y el diente empieza a emerger de la planchuela, invirtiendo su movimiento.
        .col-sm-12.col-lg-4
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 18.] Formación de la puntada (etapas del ciclo de la costura)
          figure.mb-0
            img.w-80.m-auto(src='@/assets/curso/temas/t1/33.png', alt='')
            figcaption.mb-0 Fuente: SENA, (2014). 
        .col-sm-12.col-lg-5
          p.mb-3 Se dispone a ascender tirando el hilo de la lazada para comenzar a sacarla del gancho, la aguja continúa ascendiendo y el diente comienza a transportar el material.
          p.mb-3 Algunas de las operaciones que se hace en esta máquina son:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Unir copas.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Pegar encajes.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Realizar pespuntes.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Pegar caucho y adornos.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Pegar marquillas.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Hacer terminados del brasier.



      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Máquina fileteadora
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Máquina collarín o recubridora
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Máquina presilladora
      
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
