<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 La aguja de máquinas de coser
      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 En 1755 el alemán Charles Fredrick Wiesenthal creó una patente para una aguja diseñada para adaptar una máquina de coser que podía unir piezas de tela con gran velocidad.
      
      .row.justify-content-center.align-items-start.mb-5
        .col-sm-12.col-lg-5.mb-cus
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 32.] Aguja
          figure.mb-0
            img.ml-cus-2(src='@/assets/curso/temas/t2/2.png', alt='Aguja metálica alargada con punta afilada y ranura en su cuerpo, utilizada en máquinas de coser industriales para la formación de puntadas.')
            figcaption.m-0 Fuente: SENA, (2014). 
        .col-sm-12.col-lg-4
          .bg-color-10.p-4
            p.mb-3 Desde el siglo XVII, las agujas han experimentado diversas transformaciones, como la incorporación de una ranura doble, un ojo ovalado, una ranura en espiral y acabados térmicos, entre otros avances.
            p.mb-0 La aguja es un componente esencial para el óptimo funcionamiento de la máquina de coser, por lo que su elección debe basarse en factores como la velocidad de costura, la calidad de la tela y el tipo de puntada a realizar.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png', alt='')
      
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
        .col-sm-12.col-lg-8
           p.mb-3 Las agujas deben cumplir las siguientes funciones: 
           ol.lista-ol--cuadro.lista-ol--separador
                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span A
                      | Penetrar el material y crear un orificio para el paso del hilo. 
                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span B
                      | Transportar el hilo a través del material y formar una lazada o bucle que pueda ser recogido por el tomador de lazada.
                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span C
                      | Facilitar el paso del hilo a través de la lazada generada por el mecanismo de la máquina. Las agujas de las máquinas de coser se identifican principalmente por su sistema, tamaño (calibre) y tipo de punta.
      
      .row.align-items-center.mb-4.titulo-icono(data-aos="fade-left")
        .col-auto.titulo-icono-img
          img(src='@/assets/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Partes de la aguja: características físicas
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.mb-cus
          .titulo-sexto.color-primario
            p.mb-0 #[b Figura 33.] Partes de la aguja
          figure.mb-0
            img(src='@/assets/curso/temas/t2/5.png', alt='Partes de una aguja de máquina de coser, con etiquetas que identifican componentes como el tope, cabo, canal, ojo y punta.')
            figcaption.mt-1 Fuente: SENA, (2014). 
          .mt-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/6.png', alt='')

        .col-sm-12.col-lg-8
          p.mb-4 Las siguientes características son fundamentales para el correcto funcionamiento de las agujas en las máquinas de coser:
          AcordionA(tipo="a" clase-tarjeta="tarjeta  bg-color-2")
            div(titulo='Tope')
              .row.mb-0
                .col-12
                  p.mb-0 Extremo en forma de cono que facilita la inserción de la aguja en la barra correspondiente.
            div(titulo='Talón')
              .row.mb-0
                .col-12
                  p.mb-0 Parte superior de la aguja que se coloca en la barra o soporte. Puede ser cilíndrico o tener una o varias caras planas. Se sujeta con un tornillo o abrazadera y en él se imprime el número o calibre de la aguja.
            div(titulo='Cono')
              .row.mb-0
                .col-12
                  p.mb-0 Sección intermedia entre el tronco y la caña.
            div(titulo='Hoja')
              .row.mb-0
                .col-12
                  p.mb-0 Parte de la aguja que penetra el material en cada puntada. Algunas agujas tienen una sección superior más gruesa, mientras que otras presentan una forma cónica. El calibre de la aguja se refiere al grosor de esta sección.
            div(titulo='Ranura larga')
              .row.mb-0
                .col-12
                  p.mb-0 Canal ubicado a lo largo de la hoja que protege el hilo y facilita su conducción dentro y fuera del material. En las agujas diseñadas para máquinas de looper (cadeneta y fileteadoras), existe una segunda ranura en el lado opuesto, lo que permite un movimiento más fluido del hilo en ambos lados mientras la aguja atraviesa el material. Toda aguja debe enhebrarse por el lado de la ranura larga.
            div(titulo='Ojo')
              .row.mb-0
                .col-12
                  p.mb-0 Agujero por donde pasa el hilo a través de la aguja. La forma y el acabado del ojo son esenciales para evitar el desgaste del hilo y garantizar la formación adecuada de la lazada. Algunas agujas tienen el ojo ensanchado para reducir la fricción con la tela. Es importante elegir una aguja cuyo tamaño sea adecuado para el grosor del hilo, asegurando así un paso fluido y sin restricciones.
            div(titulo='Muesca o hendidura')
              .row.mb-0
                .col-12
                  p.mb-0 Rebaje en la cara de la aguja, ubicado encima del ojo. Su forma y longitud pueden variar, permitiendo un mejor ajuste del tomador de lazada (gancho, lanzadera o looper) en relación con la aguja. Esto facilita la recogida de la lazada y reduce los fallos en la puntada, especialmente en condiciones difíciles. La muesca se encuentra en el lado opuesto de la ranura larga.

            div(titulo='Punta')
              .row.mb-0
                .col-12
                  p.mb-0 Diseñada para optimizar la penetración en diferentes materiales, garantizando una apariencia uniforme en la costura y minimizando el deterioro del tejido. Existen distintos tipos de puntas, como la punta de lanza, la punta redonda y la punta excéntrica. Para materiales como cuero y sintéticos, se fabrican puntas cortantes con diversas geometrías, incluyendo triangular, diamante y de cuatro cortes, entre otras.
      


      .row.justify-content-center.mb-0
        .col-sm-12.col-lg-8
          p.mb-4 En la industria de la confección, el uso de autómatas de costura es cada vez más común, ya que permiten alcanzar una alta productividad, costuras precisas y una resistencia superior. Estas exigencias han llevado al desarrollo de agujas especializadas que superan las limitaciones de las agujas tradicionales. Algunas de estas innovaciones responden a:
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0  Condiciones extremas en tejidos y operaciones de alta exigencia.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0 Nuevas necesidades derivadas de fibras textiles avanzadas, que presentan comportamientos técnicos distintos en la costura

          .bg-color-3.px-5.py-4
            p.mb-0 Además, se fabrican agujas diseñadas específicamente para máquinas especializadas, como pegadoras de botones, cerradoras de codo, recubridoras y bordadoras. Estas agujas incorporan modificaciones en su geometría y tratamientos térmicos adaptados a cada operación y tipo de tejido.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')



      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Identificación de agujas
      p.mb-5 Las agujas de máquina se identifican de acuerdo con los siguientes parámetros:
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones.p-4(titulo="Sistema")
              h4 Sistema
              p.mb-0 Define la dimensión de la aguja ajustada a cada tipo de máquina, teniendo en cuenta tipo del ojo, la longitud del asta y el grosor del tronco.
            .tarjeta.color-acento-botones.p-4(titulo="Punta")
              h4 Punta
              p.mb-4 La aguja según la punta puede ser, de punta de bola que se utiliza en la mayoría de telas finas y la punta cortante que es muy afilada para entrar y romper la tela gruesa.
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 34.] Agujas de punta de bola
              figure.mb-5
                img(src='@/assets/curso/temas/t2/9.png', alt='Serie de agujas de máquina de coser con diferentes tipos de puntas. Cada aguja tiene una forma distinta en la zona de la punta, lo que permite su uso en diferentes materiales y tipos de costura.')
                figcaption.mt-1 Fuente: SENA, (2014). 
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 35.] Agujas de punta cortante
              figure.mb-0
                img(src='@/assets/curso/temas/t2/10.png', alt='Agujas de máquina de coser con diferentes tipos de puntas, cada una diseñada para usos específicos en distintos materiales y procesos de costura.')
                figcaption.mt-1 Fuente: SENA, (2014). 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.png', alt='')


      .bg-color-6.mb-4(data-aos="fade-left")
          h3.px-3.py-1 Tamaño o calibre

      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/11.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-3 Se refiere al grosor de la aguja que se debe utilizar según el grueso del material a coser.
            p.mb-0 Las agujas son producidas por varios fabricantes, los cuales, tienen su propio método de nomenclatura para presentar el calibre de las mismas. Los más comerciales y sus equivalencias son:

      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8.mb-cus
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 36.] Nomenclatura de las agujas
          figure.mb-0
            img(src='@/assets/curso/temas/t2/12.svg', alt='Selección de agujas para máquina de coser según el material.')
            figcaption.mt-1 Fuente: SENA, (2017). 
        .col-sm-12.col-lg-4
          img.w-18.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t2/13.svg', alt='')
          p.mb-3 En el mercado, es posible encontrar diferentes tipos de agujas:
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0  Agujas simples o de una punta.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0  Agujas de dos puntas o dobles.
            li.d-flex
              i.fas.fa-check-circle.bg-color-1
              p.mb-0  Agujas triples.
              
      Separador      
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Influencia de la aguja en los procesos de costura
      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 La aguja es un componente clave en la confección de prendas, ya que influye directamente en la calidad y eficiencia del proceso. Actualmente, quienes trabajan en el sector enfrentan constantes desafíos como variaciones en la calidad de los materiales, nuevos diseños, tipos de hilos y cambios en los procesos de producción. Estos factores obligan a realizar ajustes frecuentes en las máquinas y en la elección de las agujas, lo que incrementa los tiempos de producción, los costos y puede afectar la calidad del producto final.
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          p.mb-3 Durante la costura, la aguja alcanza velocidades extremadamente altas al penetrar el material. Para lograr una perforación eficiente, las fibras del tejido deben permitir su desplazamiento en un tiempo de apenas 0,00003 segundos. A mayor grosor de la aguja, mayor será el desplazamiento de las fibras, aumentando el riesgo de daño en el tejido. Por ello, se recomienda utilizar agujas lo más delgadas posible para minimizar el deterioro de la prenda. Sin embargo, las agujas delgadas pueden generar problemas como costuras irregulares, saltos de puntadas, roturas de hilo y mayor fragilidad de la aguja.
          .bg-color-13.p-4
            p.mb-4 El tipo de tejido también influye en el comportamiento de la aguja. Al coser denim o jean, pueden producirse cortes en las fibras que solo se evidencian después del lavado. En los tejidos de punto, es común encontrar mallas dañadas o fruncidas debido al desplazamiento de las microfibras.
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-11
                  p.mb-0 Además, el funcionamiento de la máquina de coser también afecta el desempeño de la aguja. En una máquina que opera a 5.000 revoluciones por minuto, un punto marcado en el hilo pasará por el ojo de la aguja aproximadamente 70 veces antes de ser fijado en el material, lo que demuestra la precisión y exigencia del proceso de costura.
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/16.svg', alt='') 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/15.png', alt='')
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/17.png', alt='')
        .col-sm-12.col-lg-9
          p.mb-3 A igual velocidad, el hilo de la aguja de coser es acelerado de 0 a 120 kilómetros por hora en menos de un milisegundo.
          p.mb-4 El impacto con la tela o material de costura, que puede generar desviación de la aguja. En las máquinas de cadeneta, cada vez que la aguja penetra, hace contacto con el looper, siendo necesario usar agujas con punta de bola.
          p.mb-0 Para reducir estos riesgos, se requiere utilizar agujas diseñadas de acuerdo con la exigencia y necesidades que tiene cada aplicación, con una mejor estabilidad y con ranura amplia para permita el paso del hilo hasta el ojo, permitiendo además la posibilidad de reducir el diámetro al inmediatamente menor.
      
      .bg-full-width.bg-fondo-1.mb-0.pt-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-6
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 37.] Referencia o sistema de aguja  según el tipo de máquina
              figure.mb-0.bg-color-11.px-1.py-1.px-lg-5.py-lg-4
                img(src='@/assets/curso/temas/t2/18.svg', alt='Referencias de agujas según el tipo de máquina de coser. Las máquinas planas convencionales, electrónicas y en zigzag usan agujas 135 x 5 / 16 x 231. La ojaladora usa 135 x 5, la fileteadora de aguja recta B 27 y la de aguja curva 154 GHS. La presilladora emplea 149 x 3 - 135 x 5, mientras que la pretinadora usa 62 x 57 - UY 113. La recubridora o collarín utiliza B 63, la botonadora 108 x 1 y la cerradora de codo UY 128 - 149 x 3.')
                figcaption.mt-1 Fuente: SENA, (2017). 
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
