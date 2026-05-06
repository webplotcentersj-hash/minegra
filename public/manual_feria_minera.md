---
pdf_options:
  format: A4
  margin: 20mm
  printBackground: true
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  
  :root {
    --brand-blue: #1883AB;
    --brand-green: #A1C04F;
    --dark-bg: #08161f;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  /* Portada */
  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    text-align: center;
    border-bottom: 5px solid var(--brand-blue);
    margin-bottom: 2rem;
  }
  
  .cover h1 {
    color: var(--brand-blue);
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .cover h2 {
    color: var(--brand-green);
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .page-break {
    page-break-before: always;
  }
  
  /* Secciones */
  h1 {
    color: var(--brand-blue);
    border-bottom: 2px solid var(--brand-green);
    padding-bottom: 0.5rem;
    margin-top: 2rem;
  }
  
  h2 {
    color: var(--dark-bg);
    margin-top: 1.5rem;
  }
  
  /* Cajas de Alerta */
  .alert {
    background-color: #f0f8ff;
    border-left: 4px solid var(--brand-blue);
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
  }
  
  .tip {
    background-color: #f9fdf2;
    border-left: 4px solid var(--brand-green);
    padding: 1rem;
    margin: 1rem 0;
  }
  
  /* Tablas */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  
  th {
    background-color: var(--brand-blue);
    color: white;
    padding: 12px;
    text-align: left;
  }
  
  td {
    border-bottom: 1px solid #ddd;
    padding: 12px;
  }
  
  tr:nth-child(even) {
    background-color: #f8f9fa;
  }
</style>

<div class="cover">
  <h1>Manual de Usuario</h1>
  <h2>Plataforma de Trivia Interactiva</h2>
  <p style="margin-top: 4rem; color: #666;">Preparado para:</p>
  <h3 style="color: #08161f; font-size: 2rem;">Feria Minera</h3>
  <p style="margin-top: auto; font-size: 0.9rem; color: #999;">Generado automáticamente para uso de administradores y operadores del evento.</p>
</div>

<div class="page-break"></div>

# 1. Introducción y Acceso a la Plataforma

La plataforma de Trivia ha sido diseñada como una herramienta interactiva para captar datos (Leads) de los asistentes a la Feria Minera, ofreciéndoles una experiencia lúdica gamificada.

### Aplicación Instalable (PWA)
La aplicación cuenta con soporte PWA (Progressive Web App). Esto significa que **no** requiere ser descargada desde la App Store o Google Play.

<div class="tip">
<b>Para instalar la app en las tablets/teléfonos del stand:</b><br>
1. Abre el enlace de la aplicación web en el navegador del dispositivo (Chrome o Safari).<br>
2. Selecciona la opción <b>"Añadir a la pantalla de inicio"</b> o <b>"Instalar Aplicación"</b> en el menú de opciones del navegador.<br>
3. Se creará un ícono en tu dispositivo, permitiendo ejecutar el juego en pantalla completa, como una app nativa, pero garantizando que siempre se consuma la versión en línea más actualizada.
</div>

---

# 2. Flujo de Jugadores

## Pantalla de Registro
Antes de jugar, cada participante debe llenar sus datos. La información solicitada incluye:
- **Nombre Completo**
- **Empresa / Institución**
- **Email**
- **Teléfono / WhatsApp**

*Nota: Todos los campos son obligatorios. Estos datos son los que luego se exportarán para gestión comercial.*

## Dinámica del Juego
Una vez registrado, el usuario accederá a la trivia:
1. **Temporizador**: El tiempo total se medirá desde que el participante presiona "Comenzar" hasta que responde la última pregunta. El tiempo se usa para desempatar si dos personas tienen los mismos puntos.
2. **Puntuación**: 
   - Las respuestas **correctas** suman puntos.
   - Las respuestas **incorrectas** pueden restar puntos (según la configuración de las preguntas).
3. **Retroalimentación inmediata**: Al seleccionar una opción, el sistema indica visualmente si fue un acierto o un error, avanzando luego a la siguiente pregunta.

<div class="alert">
<b>Importante:</b> Al finalizar el cuestionario, el jugador verá su puntuación final y, de forma transparente, sus datos serán enviados en tiempo real a la base de datos de administración y al panel del ranking.
</div>

<div class="page-break"></div>

# 3. Ranking Público (Dashboard)

El **Ranking Global** es una pantalla diseñada específicamente para ser proyectada en televisores grandes o pantallas LED en el stand.

**URL de acceso:** `/ranking`

### Características de la Pantalla:
- **Podio Iluminado**: Muestra a los 3 mejores jugadores actuales de la feria, representados con colores oro, plata y bronce con efectos de cristal brillante.
- **Lista de Posiciones**: A la derecha, muestra a los jugadores del puesto 4 al 10 en tiempo real.
- **Actualización en Tiempo Real**: No es necesario refrescar esta pantalla. Está conectada a la base de datos mediante *WebSockets* (Realtime), por lo que si un jugador finaliza su partida y entra al Top 10, la pantalla grande se animará y reordenará automáticamente de inmediato.

---

# 4. Panel de Administración y Leads

El panel de control es exclusivo para los administradores o encargados comerciales.

**URL de acceso:** `/admin`

## Ingreso al Sistema
Al acceder a la URL, se solicitará una contraseña de seguridad para proteger los datos personales de los participantes.
* **Contraseña por defecto:** `admin123`

## Gestión de Datos
El panel muestra una tabla detallada con todos los leads recolectados durante la feria, ordenados por puntuación (del mejor al peor). 

### Funcionalidades:
| Funcionalidad | Descripción |
|--------------|-------------|
| **Actualizar** | Fuerza una recarga de los datos en caso de pérdida de conexión. |
| **Integración WhatsApp** | Clickeando el ícono verde al lado de un número de teléfono, se abrirá directamente un chat de WhatsApp con el contacto. |
| **Exportar CSV** | Genera un archivo `.csv` (compatible con Excel y CRMs) con todos los registros capturados hasta el momento, ideal para el seguimiento post-feria. |

<div class="tip">
<b>Consejo para el Export:</b> Para abrir el CSV en Excel en español, recuerda ir a <i>Datos -> Desde texto/CSV</i> para asegurar que los acentos y las columnas se separen correctamente por comas.
</div>

---

**Soporte Técnico:** Para cualquier eventualidad o soporte respecto a este software, por favor póngase en contacto con el equipo de soporte de Greenworking.
