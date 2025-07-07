# Prueba Técnica Frontend ( Vue)

## Descripción

Aplicación desarrollada con AngularTS o Vue que implementa un CRUD de usuarios.

Al acceder, se muestra un listado de usuarios con las siguientes funcionalidades:

- Listado de usuarios con opciones para **ver**, **borrar** y **editar** cada usuario.
- Botón **Nuevo usuario** para crear un nuevo usuario.
- Filtro desplegable para filtrar por tipo de usuario: **Demandante** o **Empleado**.

## Detalle de usuarios

### Demandantes

- Datos personales:  
  - NIF o Pasaporte *  
  - Nombre *  
  - 1er Apellido *  
  - 2º Apellido  
  - Género  
  - Fecha de nacimiento

- Dirección:  
  - Calle  
  - Número  
  - Puerta  
  - Código postal  
  - Ciudad

- Estudios (múltiples registros):  
  - Nombre institución  
  - Titulación  
  - Fecha

### Empleados

- Datos personales:  
  - NIF o Pasaporte *  
  - Nombre *  
  - 1er Apellido *  
  - 2º Apellido  
  - Género  
  - Fecha de nacimiento

- Dirección:  
  - Calle  
  - Número  
  - Puerta  
  - Código postal  
  - Ciudad

- Experiencia laboral (múltiples registros):  
  - Nombre empresa  
  - Puesto de trabajo  
  - Fecha

\* Campos obligatorios

## Funcionalidades

- Listado inicial cargado desde un mock.
- Creación de nuevo usuario con validación de campos obligatorios y mensajes de error.
- Edición de usuario con datos precargados y validación.
- Visualización de detalle en modo solo lectura.
- Borrado de usuario con confirmación mediante popup.
- Filtrado del listado por tipo de usuario.
- Código estructurado y factorizado con separación clara de responsabilidades (controlador, servicio, factoría, vista).
- Función de resetear usuarios para inicializar el localStorage.

## Tecnologías usadas

- Vue
- JavaScript
- HTML5
- SCSS con unidades relativas (% o em)

---

Este proyecto cumple con los requisitos técnicos y funcionales de la prueba solicitada, priorizando la composición y posicionamiento sobre el diseño visual final.

Gracias por darme la oportunidad y ojalá que sea de vuestro agrado. Lo he hecho con todo mi cariño y esfuerzo. Un cordial saludo. Christian
