const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configurar el motor de plantillas
app.set("view engine", "pug");
app.set("views", "./views");

// Ruta para renderizar la plantilla Pug
app.get("/pug", (req, res) => {
  res.render("index", { nombre: "Usuario Pug" });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine("ejs", require("ejs").renderFile);

// Ruta para renderizar la plantilla EJS
app.get("/ejs", (req, res) => {
  res.render("index.ejs", { nombre: "Usuario EJS" });
});

app.get("/perfil/:id", (req, res) => {
  const userId = req.params.id;
  // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
  const user = { id: userId, nombre: "Usuario " + userId };
  res.render("perfil", { user: user });
});
app.post("/procesar-formulario", (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const telefono = req.body.telefono;
  const mensaje = req.body.mensaje;

  // Realiza la lógica para procesar los datos del formulario aquí

  res.render("confirmacion.ejs", { nombre }); // Renderiza una página de confirmación
});
// Ruta para renderizar la plantilla Pug
app.get("/miplantilla-pug", (req, res) => {
  const mensaje = "¡Hola desde la plantilla Pug!";
  const titulo = "Calendario de Eventos Pug";
  const eventos = [
    {
      fecha: "2023-11-19",
      hora: "14:00",
      lugar: "Salón C",
      descripcion: "Taller de cocina",
      ruta: "images/imagen4.jpeg",
      descimg: "Descripción de la imagen 1",
    },
    {
      fecha: "2023-10-15",
      hora: "13:00",
      lugar: "Salón D",
      descripcion: "Taller de fotografia",
      ruta: "images/imagen3.jpeg",
      descimg: "Descripción de la imagen 2",
    },
  ];
  res.render("miplantilla", { mensaje, eventos, titulo });
});

// Ruta para renderizar la plantilla EJS
app.get("/miplantilla-ejs", (req, res) => {
  const eventos = [
    {
      fecha: "2023-12-10",
      hora: "10:00",
      lugar: "Salón A",
      descripcion: "Conferencia sobre Tecnologia Innovadora",
      ruta: "images/imagen.jpeg",
      descimg: "Descripción de la imagen 1",
    },
    {
      fecha: "2023-11-13",
      hora: "20:30",
      lugar: "Salón B",
      descripcion: "Concierto en vivo",
      ruta: "images/imagen2.jpeg",
      descimg: "Descripción de la imagen 2",
    },
  ];

  const mensaje = "¡Hola desde la plantilla EJS!";
  const titulo = "Calendario de Eventos EJS";

  res.render("miplantilla.ejs", { eventos, mensaje, titulo });
});

// Ruta para renderizar la plantilla de Empresa 01 EJS
const empresa01Data = {
  title: "eCommVerse",
  menuItems: [
    { text: "Inicio", link: "/index.ejs" },
    { text: "Nosotros", link: "/nosotros-empresa01" },
    { text: "Nuestros Servicios", link: "/servicios-empresa01" },
    { text: "Catálogo de Clientes", link: "/clientes-empresa01" },
    { text: "Contáctenos", link: "/contactanos-empresa01" },
  ],
  imagenFondo: "/images/header-bg.jpg",
  footer: "ECOMMEVERSE",
  servicios: [
    {
      imagen:
        "https://i.pinimg.com/564x/61/9c/cc/619ccc9ecce27342489ff7a761bd544c.jpg",
      titulo: "Diseño y Desarrollo de Tiendas en Línea",
      descripcion:
        "Creamos tiendas en línea atractivas y funcionales que convierten visitantes en clientes satisfechos. Cada tienda que diseñamos es una obra maestra única.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/3f/f6/fc/3ff6fc7ba92de9d8ce4e56d4df702986.jpg",
      titulo: "Gestión de Campañas en Línea",
      descripcion:
        "Creamos y administramos campañas publicitarias efectivas en línea que aumentan tu visibilidad y te ayudan a llegar a nuevos clientes. Cada anuncio está cuidadosamente diseñado para maximizar tus conversiones.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/97/ec/ae/97ecae908de36c57387b51150cbb3477.jpg",
      titulo: "Servicios de Contenido",
      descripcion:
        "Creamos contenido atractivo y de alta calidad que conecta con tu audiencia y mejora tus clasificaciones en línea. Desde descripciones de productos hasta blogs, tenemos todas tus necesidades de contenido cubiertas.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/c9/a5/fe/c9a5fe15668d7a3d42b0479e145d4620.jpg",
      titulo: "Integración de Pagos en Línea",
      descripcion:
        "Configuramos sistemas de pago seguros y eficientes para tus ventas en línea. Tu tranquilidad y la de tus clientes son nuestra prioridad.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/12/eb/b2/12ebb2c24b30d2f7fbaef2e1454a5212.jpg",
      titulo: "Asesoría en Comercio Electrónico",
      descripcion:
        " Nuestros expertos en comercio electrónico te brindarán orientación personalizada sobre cómo hacer crecer tu negocio en línea y alcanzar tus objetivos comerciales.",
    },
  ],
  portafolioItems: [
    {
      image:
        "https://i.pinimg.com/564x/12/ec/fb/12ecfbc50fd20a646b82711e220d8b9e.jpg",
      altText: "Descripción de la imagen 1",
      category: "Ilustración",
    },
    {
      image:
        "https://i.pinimg.com/564x/9a/86/11/9a8611368c710fec06691a012d6b7245.jpg",
      altText: "Descripción de la imagen 2",
      category: "Diseño gráfico",
    },
    {
      image:
        "https://i.pinimg.com/564x/5c/3e/76/5c3e76e500ab63ba0375d90ef655cceb.jpg",
      altText: "Descripción de la imagen 3",
      category: "Experiencia en Marketing digital",
    },
    {
      image:
        "https://i.pinimg.com/564x/39/34/2c/39342c65769e6e54884ef58d7fc91ced.jpg",
      altText: "Descripción de la imagen 4",
      category: "Marca",
    },
    {
      image:
        "https://i.pinimg.com/564x/da/88/0a/da880a0950249d45c9eca534b91f2025.jpg",
      altText: "Descripción de la imagen 5",
      category: "Diseño de páginas web",
    },
    {
      image:
        "https://i.pinimg.com/564x/32/37/8d/32378dcfb52f26cb01febd2b5110bf7c.jpg",
      altText: "Descripción de la imagen 6",
      category: "Experiencia en SEO",
    },
  ],
  nosotros: {
    mision: {
      title: "Nuestra Misión",
      text: "Nuestra misión es brindarte soluciones integrales de comercio electrónico que te ayuden a destacar en el mundo digital. Estamos aquí para hacer que tu negocio en línea sea un éxito.",
    },
    vision: {
      title: "Nuestra Visión",
      text: "Nuestra visión es ser líderes en la industria del comercio electrónico, brindando innovación y calidad a nuestros clientes en todo el mundo.",
    },
  },
  equipo: [
    {
      name: "Estefany Castro",
      role: "Desarrolladora principal",
      image:
        "https://i.pinimg.com/564x/f6/10/fe/f610feb7dda0168bb968a8830fd16b9c.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Diana Petersen",
      role: "Diseñadora encargada",
      image:
        " https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Josh Rivera",
      role: "Especialista en E-commerce",
      image:
        "https://images.unsplash.com/photo-1610088441520-4352457e7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Larry Parker",
      role: "Director de Marketing",
      image:
        "https://i.pinimg.com/474x/08/8c/53/088c5371283076cd63b270db4492280a.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
  ],
  clientes: [
    {
      name: "TiendaTech",
      description:
        "Una tienda de tecnología en línea que experimentó un aumento del 50% en sus ventas después de trabajar con nosotros en la optimización de su sitio web.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBe1BoCoFr0gwJYAYhPlADLi0diqsgqOrv_iuTX8orEwULvY9GQqVc67FGfvEh2acsXfg&usqp=CAU",
    },
    {
      name: "ModaElegante",
      description:
        "Una boutique de moda en línea que vio un aumento del 30% en sus conversiones después de que rediseñamos su tienda en línea.",
      image:
        "https://i.pinimg.com/564x/36/bc/a8/36bca83ff4a5e4c37bdef006f65c29d3.jpg",
    },
    {
      name: "ArteCreativo",
      description:
        "Una tienda de arte en línea que experimentó un aumento del 40% en el tráfico orgánico después de una estrategia personalizada.",
      image:
        "https://www.comfamiliar.com/independientes/wp-content/uploads/sites/12/2023/07/LOGO-ARTE-CREATIVO-JPG-BLANCO-scaled.jpg",
    },
    {
      name: "Biox Perú",
      description:
        "Una tienda de venta de productos de salud y belleza en línea que experimentó un aumento del 40% en sus ventas con el sitio web de comercio electrónico implementado.",
      image:
        "https://i.pinimg.com/564x/71/56/6d/71566d9c131734b22015559c95f4d696.jpg",
    },
  ],
};

// Ruta para renderizar la plantilla de Empresa 02 EJS
const empresa02Data = {
  title: "E-Shop Pro",
  menuItems: [
    { text: "Inicio", link: "/index.ejs" },
    { text: "Nosotros", link: "/nosotros-empresa02" },
    { text: "Nuestros Servicios", link: "/servicios-empresa02" },
    { text: "Catálogo de Clientes", link: "/clientes-empresa02" },
    { text: "Contáctenos", link: "/contactanos-empresa02" },
  ],
  imagenFondo: "/images/header2-bg.jpeg",
  footer: "E-SHOP PRO",
  servicios: [
    {
      imagen:
        "https://i.pinimg.com/564x/90/13/46/9013469d7c7a687cc4c7d8ae15d44268.jpg",
      titulo: "Optimización de Conversión",
      descripcion:
        "Aumentamos las tasas de conversión de tu tienda en línea mediante la optimización de la experiencia del usuario, la disposición de productos y las estrategias de venta. Obtén más ventas con los mismos visitantes.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/c5/88/95/c58895ef08aae3dc4ef9f7dfa6f0dc7a.jpg",
      titulo: "Marketing de Influencia",
      descripcion:
        "Colaboramos con influencers de tu nicho para promocionar tus productos y aumentar la visibilidad de tu marca. Conecta con tu audiencia de manera auténtica y genera confianza.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/f4/55/6f/f4556f2ddc6228a53e1b3dae873ded5d.jpg",
      titulo: "Gestión de Inventario",
      descripcion:
        "Optimizamos la gestión de tu inventario para evitar agotamientos y excedentes. Mantén siempre los productos adecuados en stock y mejora la eficiencia de tu negocio.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/62/c7/09/62c709c76650c2e902d16565a5b33657.jpg",
      titulo: "Automatización de Marketing",
      descripcion:
        "Implementamos soluciones de automatización de marketing que te permiten enviar mensajes personalizados a tus clientes en el momento adecuado. Aumenta la retención y fidelización de clientes.",
    },
    {
      imagen:
        "https://i.pinimg.com/564x/d0/af/0a/d0af0ad2fd157603e2c249e0476bb38d.jpg",
      titulo: "Análisis de Datos de Comportamiento del Usuario",
      descripcion:
        "Utilizamos análisis avanzados para comprender el comportamiento de tus usuarios en línea. Esto te permite tomar decisiones informadas sobre diseño de sitios web y estrategias de ventas.",
    },
  ],
  portafolioItems: [
    {
      image:
        "https://i.pinimg.com/564x/3c/fd/7f/3cfd7fa9981f9e8a3cca642812ded0c6.jpg",
      altText: "Descripción de la imagen 4",
      category: "Marca",
    },

    {
      image:
        "https://i.pinimg.com/564x/b1/f3/94/b1f3941096de39084f4af5e102df76c5.jpg",
      altText: "Descripción de la imagen 2",
      category: "Diseño gráfico",
    },
    {
      image:
        "https://i.pinimg.com/564x/62/c7/09/62c709c76650c2e902d16565a5b33657.jpg",
      altText: "Descripción de la imagen 3",
      category: "Experiencia en Marketing digital",
    },
    {
      image:
        "https://i.pinimg.com/564x/da/0d/d9/da0dd99f543d77c7daf56cc53960f7ac.jpg",
      altText: "Descripción de la imagen 5",
      category: "Diseño de páginas web",
    },
    {
      image:
        "https://i.pinimg.com/564x/7b/52/19/7b52197ad5474687f107fcaae4e9b49c.jpg",
      altText: "Descripción de la imagen 1",
      category: "Ilustración",
    },

    {
      image:
        "https://i.pinimg.com/564x/ab/d1/88/abd18833a4cccbead5e1a1a8810bba2b.jpg",
      altText: "Descripción de la imagen 6",
      category: "Experiencia en SEO",
    },
  ],
  nosotros: {
    mision: {
      title: "Nueva Misión",
      text: "Nuestra nueva misión es brindarte soluciones innovadoras para el comercio electrónico que te ayuden a crecer y prosperar en el mundo digital. Estamos comprometidos con tu éxito en línea.",
    },
    vision: {
      title: "Nueva Visión",
      text: "Nuestra visión es liderar el mercado global de soluciones de comercio electrónico, brindando calidad y excelencia a nuestros clientes en todo el mundo.",
    },
  },

  equipo: [
    {
      name: "Juan Pérez",
      role: "Desarrollador Senior",
      image:
        "https://i.pinimg.com/474x/95/67/cf/9567cf85230b5222fed3cf186e9f02d9.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Estefany Castro",
      role: "Diseñadora de Interfaz",
      image:
        "https://i.pinimg.com/474x/8c/26/d9/8c26d96a93954a2ea059388a54f9eab1.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Marketing",
      image:
        "https://i.pinimg.com/474x/31/4f/6b/314f6b21c0a3ae1f5aa31b9271b79aa9.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      name: "Laura Martínez",
      role: "Gerente de Proyectos",
      image:
        "https://i.pinimg.com/474x/3d/66/b3/3d66b3b6a700ecdea1f2ffd1a5c15cb0.jpg",
      socialMedia: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
  ],
  clientes: [
    {
      name: "Tech Innovators",
      description:
        "Una empresa  de tecnología en línea que experimentó un aumento del 50% en sus ventas después de trabajar con nosotros en la optimización de su sitio web.",
      image:
        "https://i.pinimg.com/474x/a8/a6/52/a8a652495c42b2f4e00d211d26c7df88.jpg",
    },
    {
      name: "Fashion Trends",
      description:
        "Una boutique de moda en línea  que vio un aumento del 30% en sus conversiones después de que rediseñamos su tienda en línea.",
      image:
        "https://i.pinimg.com/474x/77/44/c0/7744c06eb1c1d5851aae8cd07b7c3d1f.jpg",
    },
    {
      name: "Art Creations",
      description:
        "Una tienda de arte en línea  que experimentó un aumento del 40% en el tráfico orgánico después de una estrategia personalizada.",
      image:
        "https://i.pinimg.com/474x/23/a1/a1/23a1a1f9118196d95a7846c945d384f7.jpg",
    },
    {
      name: "Health & Beauty World",
      description:
        "Una tienda  de venta de productos de salud y belleza en línea que experimentó un aumento del 40% en sus ventas con el sitio web de comercio electrónico implementado.",
      image:
        "https://i.pinimg.com/474x/47/b2/9f/47b29f9acd907fd13ddcc8cef21659c4.jpg",
    },
  ],
};
// Establecer rutas para Empresa 01
app.get("/miempresa01", (req, res) => {
  res.render("index.ejs", empresa01Data);
});

// Establecer rutas para Empresa 02
app.get("/miempresa02", (req, res) => {
  res.render("index.ejs", empresa02Data);
});

// Ruta para renderizar la página de servicios según la empresa 01
app.get("/servicios-empresa01", (req, res) => {
  res.render("servicios.ejs", empresa01Data);
});

// Ruta para renderizar la página de servicios según la empresa 02
app.get("/servicios-empresa02", (req, res) => {
  res.render("servicios.ejs", empresa02Data);
});

// Ruta para renderizar la página de nosotros según la empresa 01
app.get("/nosotros-empresa01", (req, res) => {
  res.render("nosotros.ejs", empresa01Data);
});

// Ruta para renderizar la página de nosotros según la empresa 02
app.get("/nosotros-empresa02", (req, res) => {
  res.render("nosotros.ejs", empresa02Data);
});
// Ruta para renderizar la página de clientes según la empresa 01
app.get("/clientes-empresa01", (req, res) => {
  res.render("clientes.ejs", empresa01Data);
});

// Ruta para renderizar la página de clientes según la empresa 02
app.get("/clientes-empresa02", (req, res) => {
  res.render("clientes.ejs", empresa02Data);
});
// Ruta para renderizar la página de contactanos según la empresa 01
app.get("/contactanos-empresa01", (req, res) => {
  res.render("contactanos.ejs", empresa01Data);
});

// Ruta para renderizar la página de contactanos según la empresa 02
app.get("/contactanos-empresa02", (req, res) => {
  res.render("contactanos.ejs", empresa02Data);
});

// Ruta para renderizar la página de confirmacion según la empresa 01
app.get("/procesar-formulario", (req, res) => {
  res.render("confirmacion.ejs", empresa01Data);
});

// Ruta para renderizar la página de confirmacion según la empresa 02
app.get("/procesar-formulario", (req, res) => {
  res.render("confirmacion.ejs", empresa02Data);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Aplicación web dinámica ejecutándose en el puerto 3000");
});
