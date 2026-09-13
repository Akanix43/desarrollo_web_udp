CritiFilms

Descripción de proyecto

CritiFilms es una plataforma social de reseñas de películas, inspirada en letterboxd,desarrollada en la etapa 1 del curso de
desarrollo web sección 01, de la carrera de Ingenieria en informática y Telecomunicaciones de la Universidad Diego Portales.

El sitio permite explorar un catálogo de películas, ver una selección destacada en un carrusel con reseñas de ejemplo provisorias que también se puede ver al navegar al detalle de cada título.
Por el momento el sitio tiene cortas referencias JavaScript y no contiene una base de datos, dicho antes, las reseñas y datos de usuarios son utilizadas como prueba para representar el dominio original del proyecto (red social de críticas de cine) esperando ser conectado a backend en etapas posteriores.

Tecnologías utilizadas
HTML5 y CSS3
JavaScript (Sin frameworks)
Bootstrap 5.3.8 — grid, carrusel, dropdown, cards
Bootstrap Icons 1.11.3
Google Fonts — familia Urbanist
Despliegue en una instancia Amazon EC2 (AWS Academy Learner Lab) con IP elástica

Estructura general de carpetas
proyecto-web-aws/
├── index.html                  # Página de inicio: header, menú lateral, carrusel, catálogo destacado
├── diseno.css                  # Hoja de estilos principal del sitio
├── jscript/                    # Lógica de interacción en JavaScript
│   ├── script.js                   # Menú lateral, búsqueda
│   ├── loginJS.js                  # Lógica de la página de inicio de sesión
│   └── botonComentario.js          # botón para ingresar comentario
├── principalHTML/              # Páginas principales de navegación
│   ├── catalogo.html               # Catálogo completo de películas
│   └── login.html                  # Página de inicio de sesión
└── peliculasHTML/              # Una página de detalle por película
    ├── cars.html
    ├── coraline.html
    ├── donde-estan-las-rubias.html
    ├── el-silencio-de-los-inocentes.html
    ├── interestellar.html
    ├── lalaland.html
    ├── los-increibles-2.html
    ├── proyecto-fin-del-mundo.html
    ├── resplandor-de-una-mente-sin-recuerdos.html
    ├── rocky.html
    ├── supercool.html
    └── yo-robot.html
    
Funcionalidades principales
Encabezado responsivo: logo con animación al pasar el cursor, barra de búsqueda y menú de usuario (perfil, configuración, inicio de sesión).
Menú lateral desplegable: se abre con el botón de hamburguesa; incluye enlaces a Inicio de sesión y Catálogo.
Carrusel de películas destacadas: cada página del carrusel muestra el póster junto con el título y reseñas de ejemplo de distintos usuarios.
Catálogo de películas: plantilla de posters de las películas del sitio, incluye scroll horizontal en celular y distribución centrada en pantallas grandes; cada póster enlaza a su página de detalle.
Páginas de detalle por película: información y reseñas específicas de cada título.
Formulario de inicio de sesión: vista de acceso de usuario (sin autenticación real, sin backend por ahora).
Diseño adaptable: ajustado para teléfono, tablet y escritorio mediante media queries y clases de grid de Bootstrap.

Dirección IP de despliegue: 34.200.170.200
