# Primero que nada...

### ...muchas gracias por la oportunidad, realmente fue muy interesante ya pueden haber visto en mi CV que no he trabajado mucho con Ruby, le encontré a Rails similitudes con Django y está muy bien documentado. Me gustaría seguir desarrollando con RoR a futuro.

### Espero que el resultado sea de su agrado.

## Setup:

- Backend: utilicé las últimas versiones LTS de Ruby y Rails

  - una vez en la carpeta raíz ejecutar `bundle install`
  - y levantar el server con `bin/rails server`

- Frontend: está ejecutado con la última versión LTS de Node y React(Vite)

  - dentro de la carpeta **./react_client** ejecutar `npm install`
  - y levantar el front con `npm run dev`

## Tasks:

- el comando `bin/rake features:get_features` descargará las features del endpoint provisto y solo agregará a la db aquellos eventos que no están ya guardados y que cumplan con las validaciones de campos provistas. Al final mostrará un resumen con la cantidad de records creados.

- adicionalmente el comando `bin/rake features:clear_db` borrará todas las features de la db.

## Endpoints:

- `GET /api/features` devolverá un listado de features con el formato solicitado. Los mismos están por default paginados en 15 items por página.
- `GET /api/features?page=1&per_page=20&mag_type=ml,mb,me` el endpoint de features acepta por query los siguientes campos:

  - page= numero de página
  - per_page= resultados por pagina
  - mag_types= una string con los valores separados por ","

- `POST /api/features/<feature_id>/comments` crea un comment asociado al feature_id con el body provisto.

---

### muchas gracias de nuevo y saludos !!

## Bruno.
