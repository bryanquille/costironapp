# 🏗️ CostIron App: Sistema Integral de Gestión para Metalúrgica

**CostIron App** es una solución profesional diseñada específicamente para herreros, talleres de estructuras metálicas y contratistas. El objetivo principal es eliminar el margen de error en la elaboración de presupuestos de perfilería de acero, gestionando desde el inventario de insumos hasta la rentabilidad final del proyecto.

## 🌟 Propuesta de Valor

A diferencia de las calculadoras genéricas, **CostIron** desglosa cada centavo:
* **Perfilería:** Cálculo por metros lineales con gestión de desperdicio (retal).
* **Consumibles:** Prorrateo de costos de discos de corte, electrodos y gas.
* **Mano de Obra:** Costeo por hora-hombre según la complejidad del trabajo.
* **Logística:** Control de viáticos, fletes y alimentación.
* **Rentabilidad:** Cálculo de margen de utilidad neta tras gastos operativos.

## 🛠️ Stack Tecnológico Global

| Capa | Tecnología | Descripción |
| :--- | :--- | :--- |
| **Frontend** | React + TypeScript | Interfaz dinámica, tipada y responsiva con TailwindCSS. |
| **Backend** | Python + FastAPI | API de alto rendimiento y lógica de cálculo compleja. |
| **Base de Datos** | MongoDB | Almacenamiento flexible para catálogos y proyectos. |
| **DevOps** | Docker | Contenedores para asegurar un entorno de ejecución idéntico. |

## 📂 Estructura del Repositorio

```text
costiron-app/
├── backend/          # API en FastAPI (Python)
│   └── README.md     # Documentación específica del servidor
├── frontend/         # Cliente en React (Vite)
│   └── README.md     # Documentación específica de la interfaz
└── docker-compose.yml # Orquestación para desarrollo local
```

## 🚀 Inicio Rápido (Desarrollo)
### Requisitos Previos
- Python 3.10+
- Node.js 18+
- MongoDB (Local o Atlas)

### Pasos para levantar el entorno:
1. Configurar el Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate # o venv\Scripts\activate en Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```
2. Configurar el Frontend:
```bash
cd ../frontend
npm install
npm run dev
```
3. Acceso:
- App Web: http://localhost:5173
- Documentación API: http://localhost:8000/docs

## 📈 Roadmap del Proyecto
- [ ] Fase 1: MVP de calculadora de materiales y perfiles.
- [ ] Fase 2: Módulo de insumos detallado (discos, soldadura, pintura).
- [ ] Fase 3: Generación de cotizaciones profesionales en PDF.
- [ ] Fase 4: Optimización PWA para uso offline en talleres.
- [ ] Fase 5: Algoritmo avanzado de optimización de corte (Cutting Stock).

## 👥 Contribución y Autoría
Proyecto desarrollado para la modernización de la industria del acero.
Desarrolladores: Bryan Quille y Jonathan López