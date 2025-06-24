# 🎮 Tic Tac Toe - Angular

Una aplicación estática moderna de Tic Tac Toe desarrollada con **Angular 20**, perfecta como proyecto de demostración y aprendizaje.

![Angular](https://img.shields.io/badge/Angular-20.0.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=flat-square&logo=css3)

## ✨ Características

- 🎯 **Juego completo de Tic Tac Toe** con lógica de turnos inteligente
- 🏆 **Detección automática de ganador** y empates
- 🎨 **Interfaz moderna y responsiva** con gradientes y animaciones
- 📱 **Diseño adaptable** optimizado para móviles y escritorio
- 🔄 **Funcionalidad de reinicio** instantáneo
- 🎭 **Efectos visuales** y transiciones suaves
- ⚡ **Aplicación SPA** (Single Page Application) ultrarrápida
- 🚫 **Validación de movimientos** para prevenir jugadas inválidas

## 🚀 Inicio Rápido

### 📋 Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (versión 18.0 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js)

> **Nota:** Angular CLI se instalará automáticamente como dependencia del proyecto.

### 🔧 Instalación

1. **Clona o descarga este repositorio:**

```bash
git clone <repository-url>
cd angular-practice-2
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm start
# o alternativamente
npx ng serve
```

4. **Abre tu navegador en:**
   - `http://localhost:4200/` (puerto por defecto)
   - Si el puerto está ocupado, Angular automáticamente sugerirá otro puerto

## 🎯 Cómo Jugar

### Reglas del Juego

1. 🎮 **Inicio:** El juego comienza automáticamente con el jugador **X**
2. 🖱️ **Movimiento:** Haz clic en cualquier casilla vacía para hacer tu jugada
3. 🔄 **Turnos:** Los turnos alternan automáticamente entre **X** (rojo) y **O** (azul)
4. 🏆 **Victoria:** Gana el primer jugador que consiga **tres símbolos en línea**:
   - ➡️ Horizontal (filas)
   - ⬇️ Vertical (columnas)
   - ↘️ Diagonal (ambas direcciones)
5. 🤝 **Empate:** Si se llenan las 9 casillas sin ganador, es empate
6. 🔄 **Reiniciar:** Usa el botón "🔄 Nuevo Juego" para empezar una nueva partida

### Indicadores Visuales

- 🔴 **X:** Aparece en color rojo con fondo destacado
- 🔵 **O:** Aparece en color azul con fondo destacado
- ✅ **Turno actual:** Se muestra en la parte superior
- 🎉 **Resultado:** Mensaje claro cuando hay ganador o empate

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos

```
angular-practice-2/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 app.ts           # 🧠 Componente principal con lógica del juego
│   │   ├── 📄 app.html         # 🎨 Template HTML del tablero y UI
│   │   ├── 📄 app.css          # 💅 Estilos específicos del componente
│   │   ├── 📄 app.config.ts    # ⚙️ Configuración de la aplicación Angular
│   │   └── 📄 app.spec.ts      # 🧪 Tests unitarios del componente
│   ├── 📄 styles.css           # 🌐 Estilos globales de la aplicación
│   ├── 📄 main.ts             # 🚀 Punto de entrada y bootstrap de Angular
│   └── 📄 index.html          # 📋 Plantilla HTML base
├── 📄 package.json            # 📦 Dependencias y scripts del proyecto
├── 📄 angular.json            # ⚙️ Configuración del workspace Angular
├── 📄 tsconfig.json          # 🔧 Configuración de TypeScript
└── 📄 README.md              # 📖 Este archivo de documentación
```

### Componentes Técnicos

#### 🧠 Lógica del Juego (`app.ts`)

- **Estado del tablero:** Array de 9 elementos (`board: (string | null)[]`)
- **Control de turnos:** Alternancia automática entre 'X' y 'O'
- **Detección de victoria:** Algoritmo que verifica 8 patrones posibles de victoria
- **Gestión de empates:** Verificación cuando el tablero está lleno
- **Reinicio:** Método para resetear el estado completo del juego

#### 🎨 Interfaz de Usuario (`app.html`)

- **Tablero interactivo:** Grid CSS de 3x3 con botones clickeables
- **Indicadores de estado:** Muestra turno actual y resultados
- **Controles:** Botón de reinicio con iconografía moderna
- **Accessibility:** Elementos semánticamente correctos

#### 💅 Diseño Visual (`app.css`)

- **Gradientes modernos:** Fondo degradado atractivo
- **Animaciones CSS:** Transiciones suaves en hover y click
- **Responsive Design:** Adaptación automática a diferentes tamaños
- **Efectos visuales:** Sombras, blur effects y transformaciones

## 🛠️ Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
npx ng serve

# Iniciar en puerto específico
npx ng serve --port 4201

# Modo watch (recarga automática)
npm run watch
```

### Construcción

```bash
# Build de producción optimizado
npm run build
# o
npx ng build

# Build con configuración específica
npx ng build --configuration production
```

### Testing

```bash
# Ejecutar tests unitarios
npm test
# o
npx ng test

# Tests con coverage
npx ng test --code-coverage

# Tests en modo watch
npx ng test --watch
```

### Análisis y Utilidades

```bash
# Analizar bundle size
npx ng build --stats-json
npx webpack-bundle-analyzer dist/tic-tac-toe/stats.json

# Lint del código
npx ng lint

# Formatear código
npx prettier --write "src/**/*.{ts,html,css}"
```

## 🔧 Tecnologías Utilizadas

### Frontend Framework

- **Angular 20.0.0** - Framework principal
- **TypeScript 5.0+** - Lenguaje de programación
- **RxJS 7.8** - Programación reactiva

### Herramientas de Desarrollo

- **Angular CLI 20.0.3** - Herramientas de línea de comandos
- **Angular Build System** - Sistema de construcción optimizado
- **Karma + Jasmine** - Testing framework

### Estilos y UI

- **CSS3 Puro** - Estilos nativos sin librerías externas
- **CSS Grid & Flexbox** - Layout moderno y responsivo
- **CSS Animations** - Transiciones y efectos visuales

## 📱 Compatibilidad

### Navegadores Soportados

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+

### Dispositivos

- 💻 **Desktop:** Optimizado para pantallas grandes
- 📱 **Mobile:** Responsive design para móviles
- 📱 **Tablet:** Adaptación automática para tablets

## 🚀 Despliegue

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Los archivos se generarán en dist/tic-tac-toe/
# Servir archivos estáticos desde ese directorio
```

### Opciones de Hosting

- **GitHub Pages:** Perfecto para proyectos estáticos
- **Netlify:** Deploy automático desde repositorio
- **Vercel:** Optimizado para aplicaciones frontend
- **Firebase Hosting:** Hosting gratuito de Google

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### Ideas para Mejoras

- 🏆 **Sistema de puntuación** persistente
- 🎵 **Efectos de sonido** para movimientos y victorias
- 🤖 **Modo contra IA** con diferentes niveles
- 🎨 **Temas personalizables** (oscuro/claro)
- 📊 **Estadísticas de partidas** jugadas
- 🔄 **Historial de movimientos** con posibilidad de deshacer
- 🌐 **Multiplayer online** con WebSockets

## 📚 Recursos Adicionales

### Documentación Oficial

- [Angular Documentation](https://angular.dev/) - Documentación completa
- [Angular CLI Reference](https://angular.dev/tools/cli) - Referencia de comandos
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guía de TypeScript

### Tutoriales Relacionados

- [Angular Tour of Heroes](https://angular.dev/tutorial/tour-of-heroes) - Tutorial oficial
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Guía completa de CSS Grid
- [Responsive Design Patterns](https://web.dev/responsive-web-design-basics/) - Patrones de diseño responsivo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!**

---

_Desarrollado con ❤️ como proyecto de demostración Angular_
