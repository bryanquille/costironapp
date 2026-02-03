# 🎨 CostIron Frontend - Interfaz de Gestión Metalúrgica

Este es el cliente web de **CostIron App**, una plataforma diseñada para que profesionales de la herrería y construcción en acero puedan presupuestar con precisión quirúrgica. Construido con **React** y **TypeScript** para garantizar una experiencia de usuario fluida y robusta.

## 🚀 Stack Tecnológico

* **Framework:** [React 18](https://reactjs.org/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto para evitar errores en cálculos)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y moderno)
* **Gestión de Estado:** [Zustand](https://github.com/pmndrs/zustand) o Context API.
* **Consumo de API:** [Axios](https://axios-http.com/) / [React Query](https://tanstack.com/query/latest)
* **Formularios:** [React Hook Form](https://react-hook-form.com/) (Validación eficiente de medidas e insumos)
* **Iconos:** [Lucide React](https://lucide.dev/)

## 📱 Características de la Interfaz

* **Panel de Control (Dashboard):** Visualización de márgenes de ganancia y proyectos en curso.
* **Calculadora Dinámica:** Formulario inteligente que desglosa costos de materiales, insumos (discos, soldadura) y mano de obra en tiempo real.
* **Gestor de Inventario:** Interfaz para actualizar precios de perfiles de acero y stock de consumibles.
* **Generador de Cotizaciones:** Vista previa profesional de presupuestos lista para exportar a PDF o enviar al cliente.
* **Modo Mobile-First:** Optimizado para ser consultado desde el taller o la obra.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/costiron-frontend.git](https://github.com/tu-usuario/costiron-frontend.git)
    cd costiron-frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas pnpm
    pnpm install
    ```

3.  **Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto:
    ```env
    VITE_API_URL=http://localhost:8000/api
    ```

## 📂 Estructura de Carpetas

```text
src/
├── assets/         # Imágenes, logos y fuentes
├── components/     # Componentes reutilizables (Botones, Inputs, Cards)
├── hooks/          # Hooks personalizados para lógica y API
├── layouts/        # Estructuras de página (Navbar, Sidebar)
├── pages/          # Vistas principales (Dashboard, NuevaCotizacion, Inventario)
├── services/       # Configuraciones de Axios y llamadas al Backend
├── store/          # Estado global de la aplicación
├── types/          # Interfaces y tipos de TypeScript
└── utils/          # Funciones auxiliares (Formateo de moneda, cálculos)
```

## 🧪 Ejecución

Para iniciar el servidor de desarrollo con Vite:

```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:5173

## 🏗️ Guía de Estilos
Para mantener la consistencia en el diseño, utilizamos la paleta de colores de Tailwind:

- Primario: Slate-900 (Representa la solidez del acero)
- Acento: Orange-500 o Amber-500 (Representa la chispa/soldadura)
- Fondo: Gray-50 para máxima legibilidad.

Desarrollado con ❤️ para la industria metalúrgica.