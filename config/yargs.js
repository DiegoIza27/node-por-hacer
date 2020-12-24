   const comandos = {
       descripcion: {
           demand: true,
           alias: 'd',
           desc: 'Descripcion de la tarea por hacer'
       }
   }


   const argv = require('yargs')
       .command('crear', 'Crea un elemento por hacer  ', comandos)
       .command('actualizar', 'actualiza el estado completado de una tarea ', {
           comandos,
           completado: {
               default: true,
               alias: 'c',
               desc: 'marca como completado o pendiete la tarea'
           }
       })
       .command('borrar', 'borra una tarea', comandos)

   .help()
       .argv; // regresa el argv
   //    para exportarlo 
   module.exports = {
       argv
   }