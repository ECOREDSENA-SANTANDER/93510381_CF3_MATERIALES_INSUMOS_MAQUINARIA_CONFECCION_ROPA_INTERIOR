<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-4.align-items-end
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-sm-12.col-lg-10
        p.mb-0 Las máquinas de coser son herramientas fundamentales en la industria del vestuario, consideradas uno de los inventos más productivos de la historia. A lo largo del tiempo, han evolucionado y se han perfeccionado, permitiendo su clasificación según las diferentes líneas de vestir. Dentro de la fabricación de ropa interior, su uso es imprescindible, por lo que es esencial conocer su clasificación, características, beneficios y enhebrado, garantizando así su correcta aplicación en cada proceso de confección.
    p.mb-5 La selección de la máquina adecuada según el tipo de operación influye directamente en la calidad de la prenda, asegurando no solo un buen diseño y comodidad, sino también acabados óptimos. Además, el uso correcto de herramientas y ajustes resulta clave en la confección, ya que estos factores impactan en el resultado final del producto. Del mismo modo, la correcta identificación y aplicación de costuras y puntadas permite desarrollar prendas de alta calidad, cumpliendo con los estándares internacionales de producción y garantizando un producto competitivo en el mercado.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
