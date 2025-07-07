import { ref } from 'vue'

const usuarios = ref([
  {
    id: 1,
    tipo: 'Demandante',
    nifPasaporte: '12345678A',
    nombre: 'Ana',
    primerApellido: 'Perez',
    segundoApellido: 'Lopez',
    genero: 'F',
    fechaNacimiento: '1990-05-10',
    direccion: {
      calle: 'Calle Falsa',
      numero: '123',
      puerta: '1A',
      codigoPostal: '28080',
      ciudad: 'Madrid',
    },
    estudios: [
      { nombreInstitucion: 'Universidad Complutense', titulacion: 'Ingeniería', fecha: '2012' },
    ],
  },
  {
    id: 2,
    tipo: 'Empleado',
    nifPasaporte: '98765432B',
    nombre: 'Carlos',
    primerApellido: 'Gomez',
    segundoApellido: 'Martinez',
    genero: 'M',
    fechaNacimiento: '1985-11-23',
    direccion: {
      calle: 'Av. Siempre Viva',
      numero: '742',
      puerta: '2B',
      codigoPostal: '08001',
      ciudad: 'Barcelona',
    },
    experienciaLaboral: [
      { nombreEmpresa: 'Empresa X', puestoTrabajo: 'Desarrollador', fecha: '2010-2015' },
    ],
  },
  {
    id: 3,
    tipo: 'Demandante',
    nifPasaporte: '11223344C',
    nombre: 'Laura',
    primerApellido: 'Sánchez',
    segundoApellido: 'Ruiz',
    genero: 'F',
    fechaNacimiento: '1992-03-15',
    direccion: {
      calle: 'Gran Vía',
      numero: '45',
      puerta: '3C',
      codigoPostal: '28013',
      ciudad: 'Madrid',
    },
    estudios: [
      { nombreInstitucion: 'UAM', titulacion: 'Psicología', fecha: '2015' },
    ],
  },
  {
    id: 4,
    tipo: 'Empleado',
    nifPasaporte: '55667788D',
    nombre: 'Miguel',
    primerApellido: 'Torres',
    segundoApellido: 'Navarro',
    genero: 'M',
    fechaNacimiento: '1988-07-22',
    direccion: {
      calle: 'Calle Luna',
      numero: '7',
      puerta: '4B',
      codigoPostal: '29001',
      ciudad: 'Málaga',
    },
    experienciaLaboral: [
      { nombreEmpresa: 'TechCorp', puestoTrabajo: 'Analista', fecha: '2013-2018' },
    ],
  },
  {
    id: 5,
    tipo: 'Demandante',
    nifPasaporte: '99887766E',
    nombre: 'Lucía',
    primerApellido: 'Romero',
    segundoApellido: 'García',
    genero: 'F',
    fechaNacimiento: '1995-12-30',
    direccion: {
      calle: 'Av. Andalucía',
      numero: '88',
      puerta: '1D',
      codigoPostal: '41001',
      ciudad: 'Sevilla',
    },
    estudios: [
      { nombreInstitucion: 'Universidad de Sevilla', titulacion: 'Derecho', fecha: '2017' },
    ],
  },
  {
    id: 6,
    tipo: 'Empleado',
    nifPasaporte: '66778899F',
    nombre: 'Javier',
    primerApellido: 'Fernández',
    segundoApellido: 'López',
    genero: 'M',
    fechaNacimiento: '1980-09-14',
    direccion: {
      calle: 'Paseo del Prado',
      numero: '10',
      puerta: 'Bajo A',
      codigoPostal: '28014',
      ciudad: 'Madrid',
    },
    experienciaLaboral: [
      { nombreEmpresa: 'Consulting SL', puestoTrabajo: 'Consultor', fecha: '2005-2010' },
    ],
  },
  {
    id: 7,
    tipo: 'Demandante',
    nifPasaporte: '33445566G',
    nombre: 'Elena',
    primerApellido: 'Martín',
    segundoApellido: 'Serrano',
    genero: 'F',
    fechaNacimiento: '1998-06-08',
    direccion: {
      calle: 'Ronda Sur',
      numero: '35',
      puerta: '5E',
      codigoPostal: '30010',
      ciudad: 'Murcia',
    },
    estudios: [
      { nombreInstitucion: 'Universidad de Murcia', titulacion: 'Biología', fecha: '2021' },
    ],
  },
  {
    id: 8,
    tipo: 'Empleado',
    nifPasaporte: '44556677H',
    nombre: 'Pedro',
    primerApellido: 'Moreno',
    segundoApellido: 'Vega',
    genero: 'M',
    fechaNacimiento: '1975-02-01',
    direccion: {
      calle: 'Camino Real',
      numero: '12',
      puerta: '6F',
      codigoPostal: '46001',
      ciudad: 'Valencia',
    },
    experienciaLaboral: [
      { nombreEmpresa: 'Empresa Y', puestoTrabajo: 'Jefe de Proyecto', fecha: '2000-2010' },
    ],
  },
  {
    id: 9,
    tipo: 'Demandante',
    nifPasaporte: '77889900I',
    nombre: 'Raúl',
    primerApellido: 'Blanco',
    segundoApellido: 'Gil',
    genero: 'M',
    fechaNacimiento: '1993-04-18',
    direccion: {
      calle: 'Calle Norte',
      numero: '20',
      puerta: '2A',
      codigoPostal: '15001',
      ciudad: 'A Coruña',
    },
    estudios: [
      { nombreInstitucion: 'Universidad de A Coruña', titulacion: 'Informática', fecha: '2016' },
    ],
  },
  {
    id: 10,
    tipo: 'Empleado',
    nifPasaporte: '22113344J',
    nombre: 'Isabel',
    primerApellido: 'Delgado',
    segundoApellido: 'Campos',
    genero: 'F',
    fechaNacimiento: '1983-11-11',
    direccion: {
      calle: 'Av. Libertad',
      numero: '99',
      puerta: '9C',
      codigoPostal: '03001',
      ciudad: 'Alicante',
    },
    experienciaLaboral: [
      { nombreEmpresa: 'Grupo Z', puestoTrabajo: 'Administrativa', fecha: '2008-2016' },
    ],
  }
])


function setUsuarios(nuevosUsuarios) {
  usuarios.value = nuevosUsuarios
}

function listar() {
  return usuarios.value
}

function obtenerPorId(id) {
  return usuarios.value.find(u => u.id === Number(id))
}

function crear(usuario) {
  usuario.id = usuarios.value.length ? Math.max(...usuarios.value.map(u => u.id)) + 1 : 1
  usuarios.value.push(usuario)
}

function editar(usuarioEditado) {
  const index = usuarios.value.findIndex(u => u.id === usuarioEditado.id)
  if (index !== -1) {
    usuarios.value[index] = usuarioEditado
  }
}

function borrar(id) {
  usuarios.value = usuarios.value.filter(u => u.id !== Number(id))
}

export function useUsuariosService() {
  return {
    listar,
    obtenerPorId,
    crear,
    editar,
    borrar,
    setUsuarios,
  }
}
