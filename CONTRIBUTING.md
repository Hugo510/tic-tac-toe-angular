# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto Tic Tac Toe Angular! Esta guía te ayudará a empezar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo contribuir?](#cómo-contribuir)
- [Configuración del entorno](#configuración-del-entorno)
- [Proceso de desarrollo](#proceso-de-desarrollo)
- [Estándares de código](#estándares-de-código)
- [Envío de cambios](#envío-de-cambios)
- [Reportar problemas](#reportar-problemas)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

### Nuestros valores

- **Respeto**: Tratar a todos con respeto y cortesía
- **Inclusividad**: Crear un ambiente acogedor para todos
- **Colaboración**: Trabajar juntos de manera constructiva
- **Aprendizaje**: Fomentar el crecimiento y el conocimiento compartido

## 🚀 ¿Cómo contribuir?

### Tipos de contribución que valoramos:

- 🐛 **Reportar bugs**: Ayuda a identificar y documentar problemas
- ✨ **Sugerir mejoras**: Proponer nuevas funcionalidades
- 📖 **Mejorar documentación**: Hacer la documentación más clara
- 💻 **Contribuir código**: Implementar fixes o nuevas características
- 🎨 **Mejorar diseño**: Sugerir mejoras visuales o de UX
- 🧪 **Escribir tests**: Aumentar la cobertura de testing

## 🔧 Configuración del Entorno

### Prerrequisitos

- Node.js 18.0+
- npm (incluido con Node.js)
- Git

### Pasos de configuración

1. **Fork el repositorio**

   ```bash
   # Haz fork desde GitHub UI, luego clona tu fork
   git clone https://github.com/tu-usuario/angular-practice-2.git
   cd angular-practice-2
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Verificar que todo funciona**

   ```bash
   npm start
   # Debe abrir la aplicación en http://localhost:4200
   ```

4. **Ejecutar tests**
   ```bash
   npm test
   ```

## 🔄 Proceso de Desarrollo

### 1. Crear una rama

```bash
# Actualizar main
git checkout main
git pull upstream main

# Crear nueva rama
git checkout -b tipo/descripcion-breve

# Ejemplos de nombres de rama:
# feature/sistema-puntuacion
# bugfix/reinicio-tablero
# docs/actualizar-readme
```

### 2. Realizar cambios

- Mantén los commits pequeños y enfocados
- Escribe mensajes de commit claros
- Sigue las convenciones de código del proyecto

### 3. Testing

```bash
# Ejecutar todos los tests
npm test

# Verificar build de producción
npm run build

# Verificar linting (si está configurado)
npm run lint
```

## 📝 Estándares de Código

### TypeScript

- Usar tipos explícitos cuando sea necesario
- Seguir las convenciones de nomenclatura de Angular
- Mantener funciones pequeñas y enfocadas
- Usar arrow functions para callbacks simples

### HTML

- Usar elementos semánticos apropiados
- Mantener la estructura limpia y indentada
- Usar nombres de clases descriptivos

### CSS

- Usar nombres de clases BEM cuando sea aplicable
- Mantener estilos organizados y comentados
- Usar variables CSS para valores repetidos
- Considerar el diseño responsivo en todos los cambios

### Convenciones de Angular

- Usar standalone components
- Seguir la guía de estilo oficial de Angular
- Implementar OnPush change detection cuando sea apropiado
- Usar los ciclos de vida de componentes correctamente

## 📤 Envío de Cambios

### 1. Preparar el Pull Request

```bash
# Asegurar que tu rama está actualizada
git fetch upstream
git rebase upstream/main

# Push de tu rama
git push origin tu-rama-feature
```

### 2. Crear Pull Request

- **Título descriptivo**: Resumen claro del cambio
- **Descripción detallada**: Explicar qué y por qué
- **Screenshots**: Incluir capturas si hay cambios visuales
- **Testing**: Describir cómo se probaron los cambios

### 3. Template de Pull Request

```markdown
## 📋 Descripción

Breve descripción del cambio y su motivación.

## 🔄 Tipo de cambio

- [ ] Bug fix (cambio no-breaking que arregla un problema)
- [ ] Nueva característica (cambio no-breaking que agrega funcionalidad)
- [ ] Breaking change (fix o feature que causaría que funcionalidad existente no funcione)
- [ ] Actualización de documentación

## 🧪 ¿Cómo se ha probado?

Describe las pruebas que realizaste para verificar tus cambios.

## 📸 Screenshots (si es aplicable)

Agrega screenshots para cambios visuales.

## ✅ Checklist

- [ ] Mi código sigue las guías de estilo del proyecto
- [ ] He revisado mi propio código
- [ ] He comentado mi código, particularmente en áreas difíciles
- [ ] He realizado cambios correspondientes en la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He agregado tests que prueban que mi fix es efectivo o que mi feature funciona
- [ ] Tests unitarios nuevos y existentes pasan localmente
```

## 🐛 Reportar Problemas

### Antes de reportar

1. Busca en issues existentes para evitar duplicados
2. Asegúrate de tener la última versión
3. Verifica que el problema es reproducible

### Template de Issue

```markdown
## 🐛 Descripción del Bug

Descripción clara y concisa del problema.

## 🔄 Pasos para Reproducir

1. Ve a '...'
2. Haz clic en '...'
3. Observa el error

## ✅ Comportamiento Esperado

Descripción clara de lo que debería suceder.

## 📱 Entorno

- OS: [ej. Windows 11, macOS 13]
- Navegador: [ej. Chrome 120, Firefox 119]
- Versión de Node: [ej. 18.17.0]
- Versión de Angular: [ej. 20.0.0]

## 📸 Screenshots

Si es aplicable, agrega screenshots del problema.

## ℹ️ Información Adicional

Cualquier otro contexto sobre el problema.
```

## 🌟 Ideas para Contribuir

### Features Sugeridas

- 🏆 Sistema de puntuación persistente
- 🤖 Modo de juego contra IA con diferentes niveles
- 🎵 Efectos de sonido y música
- 🎨 Temas personalizables (modo oscuro/claro)
- 📊 Estadísticas de partidas y análisis
- 🔄 Historial de movimientos con deshacer/rehacer
- 🌐 Modo multijugador online
- 📱 Progressive Web App (PWA)
- 🌍 Internacionalización (i18n)
- ♿ Mejoras de accesibilidad

### Mejoras Técnicas

- 📋 Implementar tests end-to-end
- 🔧 Configurar CI/CD pipeline
- 📊 Agregar análisis de rendimiento
- 🛡️ Implementar Content Security Policy
- 📦 Optimizar bundle size
- 🚀 Implementar lazy loading

## 💬 ¿Necesitas ayuda?

- 📝 Revisa la documentación en el README
- 🔍 Busca en issues existentes
- 💡 Abre un issue con la etiqueta "question"
- 🗨️ Inicia una discusión para ideas generales

## 🙏 Reconocimientos

Todos los contribuidores serán reconocidos en el proyecto. ¡Tu ayuda es valiosa y apreciada!

---

**¡Gracias por contribuir al proyecto Tic Tac Toe Angular! 🎉**
