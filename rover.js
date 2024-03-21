class Rover {
   constructor (position) {

     this.position = position; 
     this.mode = "Normal";
     this.generatorWatts = 110;
   }

   receiveMessage(message){

     let response = { 
         "message": message.name, 
          results: []
          };

     for( let i=0; i< message.commands.length; i++) {
        this.position = message.commands[i].value
       if (message.commands[i] === "Move"){

         if(this.mode === "Low Power"){
           results.push({completed: false});

         } else { 
          
         this.position = commands.value
         results.push({ completed: true});
         }

       };
     }; 
   
 return response;
   }
}

module.exports = Rover;