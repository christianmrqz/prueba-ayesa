export const TIPO_DEMANDANTE = 'Demandante'
export const TIPO_EMPLEADO = 'Empleado'

export function nuevoUsuario(tipo) {
  return {
    id: null,
    tipo,
    nifPasaporte: '',
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    genero: '',
    fechaNacimiento: '',
    direccion: {
      calle: '',
      numero: '',
      puerta: '',
      codigoPostal: '',
      ciudad: '',
    },
    estudios: tipo === TIPO_DEMANDANTE ? [] : undefined,
    experienciaLaboral: tipo === TIPO_EMPLEADO ? [] : undefined,
  }
}
