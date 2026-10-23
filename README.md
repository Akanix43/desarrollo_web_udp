CritiFilms

Descripción de proyecto

CritiFilms es una plataforma social de reseñas de películas, inspirada en letterboxd, desarrollada para el curso de desarrollo web sección 01, de la carrera de Ingenieria en informática y Telecomunicaciones de la Universidad Diego Portales.

El sitio permite explorar un catálogo de películas, ver una selección destacada en un carrusel con reseñas de ejemplo provisorias que también se puede ver al navegar al detalle de cada título. En la Tarea 1 el sitio tenía cortas referencias JavaScript y no contenía una base de datos; las reseñas y datos de usuarios se usan como prueba para representar el dominio original del proyecto (red social de críticas de cine), que posteriormente va a ser conectado a un backend en la etapa posterior. En la Tarea 2 se incorporó Alpine.js para manejar el estado y la interacción de la interfaz, y se separaron los datos de las películas en un archivo JSON cargado de forma asíncrona con fetch().

Tecnologías utilizadas
HTML5 y CSS3
JavaScript (vanilla y Alpine.js)
Alpine.js (vía CDN, https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js, cargado con defer): se incluyó el script en principalHTML/catalogo.html y en cada página de peliculasHTML/. Se usa para definir el estado de cada componente (x-data), enlazar campos de formulario (x-model), mostrar u ocultar contenido según una condición (x-show), listar registros dinámicamente (x-for con :key) y manejar el envío de formularios sin recargar la página (@submit.prevent).
Bootstrap 5.3.8 — grid, carrusel, dropdown, cards
Bootstrap Icons 1.11.3
Google Fonts — familia Urbanist
Despliegue en una instancia Amazon EC2 (AWS Academy Learner Lab) con IP elástica

Estructura general de carpetas
desarrollo_web_udp/
├── index.html                  # Página de inicio: header, menú lateral, carrusel, catálogo destacado
├── diseno.css                  # Hoja de estilos principal del sitio
├── datos/
│   └── peliculas.json              # Datos de las 12 películas del catálogo
├── jscript/                    # Lógica de interacción en JavaScript
│   ├── script.js                   # Menú lateral, búsqueda de la portada
│   ├── loginJS.js                  # Lógica de la página de inicio de sesión
│   └── botonComentario.js          # Componente Alpine del formulario de comentarios
├── principalHTML/               # Páginas principales de navegación
│   ├── catalogo.html               # Catálogo completo con búsqueda en vivo (Alpine)
│   └── login.html                  # Página de inicio de sesión
└── peliculasHTML/               # Una página de detalle por película
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
Catálogo de películas interactivo (Tarea 2): los registros se cargan desde datos/peliculas.json con fetch() y se muestran con x-for; incluye un buscador con x-model que filtra por título en memoria (sin pedir el JSON de nuevo), sin distinguir mayúsculas/minúsculas, y un botón que muestra u oculta una sección de ayuda con x-show.
Páginas de detalle por película: información y reseñas de ejemplo de cada título, más un formulario de comentarios interactivo (Alpine, x-model y @submit.prevent) que valida que el nombre y el comentario no estén vacíos y muestra un mensaje de éxito o error.
Formulario de inicio de sesión: vista de acceso de usuario (sin autenticación real, sin backend por ahora).
Diseño adaptable: ajustado para teléfono, tablet y escritorio mediante media queries y clases de grid de Bootstrap.

Ubicación y estructura del archivo JSON

El archivo está en datos/peliculas.json. Es un arreglo con 12 registros, cada uno con los campos: id (identificador único), titulo (usado para la búsqueda), genero, anio, director, calificacion (campo numérico de prueba), poster (URL de la imagen) y pagina (ruta relativa a la página de detalle de esa película). Ejemplo de un registro:
{ "id": 7, "titulo": "Rocky", "genero": "Drama", "anio": 1976, "director": "John G. Avildsen", "calificacion": 0, "poster": "https://...", "pagina": "../peliculasHTML/rocky.html" }

Flujo de carga y filtrado de los datos

Al entrar a catalogo.html, el componente catalogoApp() ejecuta fetch('../datos/peliculas.json') dentro de su método init(), que Alpine llama automáticamente al iniciar. Mientras la respuesta no llega, cargando queda en true y se muestra el mensaje "Cargando películas...". Si la respuesta falla, se activa error y se muestra el mensaje de error. Si la carga es exitosa, los datos se guardan en el arreglo peliculas (en memoria) y cargando pasa a false. La búsqueda no vuelve a pedir el archivo: busqueda está enlazado al input con x-model, y filtradas es una propiedad calculada (getter) que filtra peliculas en memoria cada vez que busqueda cambia, comparando en minúsculas. El x-for del catálogo recorre filtradas, así que la grilla se actualiza sola con cada letra que se escribe.

Instrucciones para probar

Listado: entrar a principalHTML/catalogo.html; deben aparecer las 12 películas sin recargar nada más.
Búsqueda: escribir en el campo de búsqueda (ej. "car"); la grilla debe filtrarse al instante, sin distinguir mayúsculas de minúsculas. Al borrar el texto, debe volver a mostrar las 12 películas. Si se escribe algo que no coincide con ningún título, debe aparecer el mensaje "No se encontraron películas con ese nombre."
Mostrar/ocultar ayuda: hacer clic en el botón "Mostrar ayuda" sobre el catálogo; debe aparecer un bloque con instrucciones, y el botón cambia a "Ocultar ayuda" para volver a esconderlo.
Formulario de comentarios: entrar a cualquier página de peliculasHTML/ y bajar hasta "Añadir un comentario". Si se intenta enviar con el nombre o el comentario vacíos, debe aparecer el mensaje de error. Completando ambos campos y enviando, debe aparecer el mensaje de éxito y limpiarse el formulario.

Instrucciones para comprobar el estado de error

Para forzar el error de carga del catálogo, renombrar temporalmente datos/peliculas.json (o cambiar la ruta del fetch en catalogo.html a un nombre inexistente) y volver a cargar principalHTML/catalogo.html: debe aparecer el mensaje "Ocurrió un error al cargar el catálogo." en vez del listado.

Dirección pública de despliegue: 54.86.217.12
Datos: http://54.86.217.12/datos/peliculas.json

Limitaciones conocidas

Los comentarios agregados desde el formulario de cada película no se guardan en ningún servidor ni base de datos: existen solo en memoria mientras la página está abierta, y se pierden al recargar.
El estado de la búsqueda y de la sección de ayuda (mostrar/ocultar) también se reinicia al recargar la página, ya que solo vive en el componente de Alpine.
El campo calificacion del JSON está presente en los 12 registros, pero por ahora es un valor de prueba (0) y no refleja una calificación real.
El inicio de sesión no implementa autenticación real: solo valida que el correo no esté vacío y que la contraseña tenga 6 o más caracteres.

Uso de localStorage

El formulario de inicio de sesión (jscript/loginJS.js) usa localStorage.setItem("usuarioLogeado", "true") al iniciar sesión correctamente. Esto guarda ese valor únicamente en el navegador del usuario que inició sesión, no en el servidor ni en una base de datos, y no implementa autenticación ni seguridad real: solo indica, localmente en ese navegador, que se completó el formulario de inicio de sesión.





message.txt                                                                        
