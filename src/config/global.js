export default {
  global: {
    Name:
      'Maquinaria, herramientas y ajustes para la confección de ropa interior',
    Description:
      'La confección de ropa interior requiere de maquinaria especializada, componentes de alta calidad y técnicas precisas que garantizan comodidad, durabilidad y un acabado impecable. Desde las herramientas utilizadas en el proceso hasta las puntadas, costuras y ajustes, cada detalle es fundamental para obtener prendas funcionales y estéticamente atractivas. La selección adecuada de equipos y materiales, junto con el dominio de las técnicas de confección, permite la creación de diseños innovadores que se adaptan a las necesidades del mercado y a las exigencias de los consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Maquinaria y componentes para la confección de ropa interior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Maquinaria plana',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Máquina fileteadora',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Máquina collarín o recubridora',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Máquina presilladora',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La aguja de máquinas de coser',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de agujas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Influencia de la aguja en los procesos de costura',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Herramientas, puntadas, costuras y ajustes para la confección de ropa interior',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Herramientas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ajustes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Puntadas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Costura',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Pespunte',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Máquina plana',
      referencia:
        'Ecosistema de Recursos Digitales SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkg-t8atqD_zdbYU_5n2N3Tj',
    },
    {
      tema: 'Máquina recubridora',
      referencia:
        'Ecosistema de Recursos Digitales SENA. (2021). Puesta a punto de máquina recubridora.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkgXccn8uyniZH0pbZiYdvsw',
    },
    {
      tema: 'Máquina fileteadora',
      referencia:
        'Ecosistema de Recursos Digitales SENA. (2021). Puesta a punto de máquina fileteadora con puntada de seguridad',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste de puntada',
      significado:
        'configuración que determina el largo y ancho de cada puntada.',
    },
    {
      termino: 'Aguja',
      significado:
        'pieza metálica que transporta el hilo y perfora la tela para formar la puntada.',
    },
    {
      termino: 'Calibre de aguja',
      significado:
        'número que indica el grosor de la aguja; varía según el tipo de tela.',
    },
    {
      termino: 'Collarín',
      significado:
        'máquina que hace acabados decorativos y funcionales en prendas elásticas.',
    },
    {
      termino: 'Costura',
      significado: 'unión de dos o más piezas de tela con hilo.',
    },
    {
      termino: 'Elástico',
      significado: 'componente que da ajuste y confort a la ropa interior.',
    },
    {
      termino: 'Embebido',
      significado:
        'técnica que ajusta una parte de la tela sin fruncirla visiblemente.',
    },
    {
      termino: 'Fileteadora',
      significado:
        'máquina que corta y remata los bordes de la tela con puntadas en zigzag.',
    },
    {
      termino: 'Herramientas',
      significado:
        'elementos manuales como tijeras, reglas, alfileres y cinta métrica.',
    },
    {
      termino: 'Hilván',
      significado:
        'costura temporal hecha a mano o máquina para mantener piezas en su lugar.',
    },
    {
      termino: 'Maquinaria plana',
      significado:
        'máquina básica que realiza puntadas rectas para unir piezas de tela.',
    },
    {
      termino: 'Overlock',
      significado:
        'puntada usada en fileteadoras para rematar bordes y unir telas.',
    },
    {
      termino: 'Pespunte',
      significado: 'puntada visible que refuerza o decora una costura.',
    },
    {
      termino: 'Prensatelas',
      significado: 'pieza que sostiene la tela al momento de coser.',
    },
    {
      termino: 'Presilladora',
      significado:
        'máquina que refuerza puntos de tensión en la ropa, como uniones de tirantes.',
    },
    {
      termino: 'Recta',
      significado: 'puntada básica usada para unir piezas con precisión.',
    },
    {
      termino: 'Refugio',
      significado: 'puntada extra para dar mayor resistencia a una costura.',
    },
    {
      termino: 'Remate',
      significado: 'finalización de una costura para evitar que se deshaga.',
    },
    {
      termino: 'Tensión del hilo',
      significado:
        'ajuste que controla la fuerza con que se jala el hilo al coser.',
    },
    {
      termino: 'Zigzag',
      significado:
        'puntada que permite flexibilidad, ideal para telas elásticas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mundocostura.es (2018). Máquinas de coser: guía definitiva [Web log post] Recuperado de',
      link:
        'https://www.mundocosturas.es/maquinas-de-coser/maquinas-de-coser-guia-definitiva/',
    },
    {
      referencia:
        'SENA. (2013). Fundamentación de ropa interior y deportiva. Centro de Formación en Diseño, Confección y Moda. Regional Antioquia.',
    },
    {
      referencia:
        'SENA. (2013). Mecánica, trazo, corte y manejo de máquinas de confección de ropa interior y deportiva. Centro de Formación en Diseño, Confección y Moda. Regional Antioquia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez James',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Gissela del Carmen Alvis Ladino',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
