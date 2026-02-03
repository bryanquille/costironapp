# 🏗️ CostIron Backend - API de Gestión de Costos

Este es el motor de cálculo y gestión de datos de **CostIron App**, construido con **FastAPI**. Se encarga de procesar la lógica de costos de perfilería, gestión de inventarios, optimización de corte y generación de presupuestos con margen de error mínimo.

## 🚀 Stack Tecnológico

* **Lenguaje:** Python 3.10+
* **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Asíncrono y de alto rendimiento)
* **Base de Datos:** [MongoDB](https://www.mongodb.com/) (NoSQL para flexibilidad de materiales)
* **Validación de Datos:** [Pydantic](https://docs.pydantic.dev/)
* **Autenticación:** JWT (JSON Web Tokens)

## 📋 Características Implementadas

* **Motor de Costos:** Cálculos precisos usando aritmética decimal para evitar errores de redondeo en materiales y mano de obra.
* **Gestión de Insumos:** Control de consumibles (discos, soldadura, pintura) con ratios de desgaste.
* **Optimización de Corte:** Algoritmo básico para aprovechamiento de perfiles de 6m.
* **Exportación:** Generación de presupuestos en formato JSON listos para ser convertidos a PDF por el frontend.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/costiron-backend.git](https://github.com/tu-usuario/costiron-backend.git)
    cd costiron-backend
    ```

2.  **Crear y activar entorno virtual:**
    ```bash
    python -m venv venv
    # En Windows:
    venv\Scripts\activate
    # En Linux/Mac:
    source venv/bin/activate
    ```

3.  **Instalar dependencias:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Variables de Entorno:**
    Crea un archivo `.env` en la raíz con lo siguiente:
    ```env
    MONGO_URI=mongodb://localhost:27017
    DATABASE_NAME=costiron_db
    SECRET_KEY=tu_llave_secreta_para_jwt
    ```

## 📉 Estructura del Proyecto

```text
app/
├── api/                # Rutas (Endpoints)
├── core/               # Configuración global y seguridad
├── models/             # Esquemas de Pydantic y Modelos de MongoDB
├── services/           # Lógica de negocio (Cálculos de costos)
├── database/           # Conexión y gestión de la BD
└── main.py             # Punto de entrada de la aplicación
```

## 🔌 API Endpoints Principales

| Método | Endpoint            | Descripción                                    |
|--------|---------------------|------------------------------------------------|
| GET    | /api/proyectos      | Lista todos los proyectos activos.             |
| POST   | /api/calculadora    | Recibe medidas y devuelve desglose de costos.  |
| GET    | /api/inventario     | Consulta stock de perfiles e insumos.          |
| PATCH  | /api/proyectos/{id} | Actualiza estado o costos de un proyecto.      |

## 🧪 Ejecución

Para iniciar el servidor de desarrollo:

```bash
uvicorn app.main:app --reload
```
La documentación interactiva estará disponible en:
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

Desarrollado con ❤️ para la industria metalúrgica.