const { Schema, model } =require ("mongoose");
 

const TaskSchema = new Schema(
  {
    titulo: { 
      type: String, 
      required: true, 
      trim: true, 
      //unique: true //unico sin repetir
    },
    descripcion: {
      type: String,
      required: true, 
      trim: true, //quita los espacios inecesarios del string
    },
    done: { type: Boolean, default: false,},
<<<<<<< HEAD
  },
  {
=======
    
    user: {
      type: String,
      required:true
    },
  },{
>>>>>>> acbf042b8c8d659b93d72138e440d96020815cd9
    timestamps: true,
  
  }
);

//export.defaultmodel("Task", TaskSchema);
module.exports=model ("Task",TaskSchema, "actividades");