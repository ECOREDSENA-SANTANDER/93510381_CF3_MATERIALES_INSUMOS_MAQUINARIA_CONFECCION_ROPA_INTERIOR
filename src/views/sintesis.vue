<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La confección de ropa interior es un proceso técnico y especializado que combina el uso de maquinaria adecuada, componentes de calidad y técnicas precisas para lograr prendas cómodas, duraderas y con acabados impecables. A diferencia de otras áreas de la confección, este tipo de producción requiere herramientas específicas como máquinas planas, fileteadoras, recubridoras, zigzag, así como elementos de corte y prensado que aseguran precisión en cada etapa.

    p Los materiales utilizados como tejidos elásticos, microfibras, encajes, refuerzos y elásticos decorativos o funcionales se seleccionan cuidadosamente según el tipo de prenda, su uso y las preferencias del mercado. Las puntadas y costuras juegan un papel fundamental: desde pespuntes rectos (301), zigzag (304, 308, 315) y recubrimientos (406), hasta fileteados de 3 o 4 hilos (504 y 514), cada una responde a funciones técnicas y estéticas específicas.

    p Se emplean diferentes tipos de costuras, como las superpuestas (SS), engarzadas o traslapadas (LS), y las de canto a canto o tope (FS), que aportan resistencia, flexibilidad o discreción según su ubicación en la prenda. Además, los ajustes son esenciales para asegurar que la prenda se adapte correctamente al cuerpo, mantenga su forma y brinde el confort necesario en el uso diario.

    p El uso cuidadoso de la maquinaria, los materiales y las técnicas no solo permite responder a las exigencias del mercado, sino que también impulsa la creación de diseños innovadores que combinan funcionalidad, estética y calidad. Este componente formativo ofrece una mirada completa al mundo de la ropa interior, preparando al aprendiz para dominar cada detalle del proceso de confección.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se divide en tres ramas principales: 1) Maquinaria y componentes, que incluye maquinaria plana, fileteadora, collarín o recubridora, y presilladora; 2) La aguja de máquinas de coser, con identificación de agujas e influencia en la costura; 3) Herramientas, puntadas, costuras y ajustes, que abarca herramientas, ajustes, puntadas, costura y pespunte.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
