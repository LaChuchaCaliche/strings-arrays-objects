
// Ejercicio 1

// let users = {}

// while(true){
//     menu = prompt("1. Añadir persona 3. Salir")
   
//     if (menu == 1){
//         let nombre = prompt("Ingrese nombre y apellido separados por un espacio");
//         let nameLower = nombre.toLowerCase()
//         let arrayUserName = nameLower.split(" ")
//         let userName = arrayUserName[0].split("",3) + arrayUserName[1].split("",3)
//         let user =  userName.replace(/,/g,"")
//         let email =user+"@myDomain.com"
//         if (Object.keys(users).includes(user)){
//             new_user = user + "1"
//             users[new_user] = new_user +"@myDomain.com"
           
//         }
//         else{users[user]=email}    
//     }
//     else{console.log(users)
//         break}
// }

// Ejercicio 2
// const numbers = /(?=.*?[0-9])/
// const characters = /(?=.*?[#?!@$ %^&*-])/
// const letters = /[a-zA-Z]+/
// let password = prompt("Ingrese la contraseña: ")
//     if (password.length >= 8 && numbers.test(password) && characters.test(password) &&  letters.test(password)){
//         console.log("The password has the necessary characters")

//     }
//     else{alert("Contraseña invalida")}
    
// Ejercicio 3
// const emailRev = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
// let email = prompt("Ingrese su email")
// if (emailRev.test(email)){
//     console.log("Correo valido")
// }
// else{console.log("Correo invalido")}
// Ejercicio 4
i = 1
let events = []
while(true){
    eventsMenu = prompt("Ingrese 1. Para agregar evento 2. Para buscar un evento y acualizarlo 3. Para ver todos los eventos 4. Para eliminar evento 5. Salir")
    if (eventsMenu ==1){
        let eventName = (prompt("Ingrese el nombre del evento").toLowerCase())
        let eventDate = (prompt("Ingrese fecha AAAA-MM-DD"))
        let eventDescription = (prompt("Ingrese descripcion del evento"))
        let objectEvent = {
            id : i,
            name : eventName,
            date : eventDate,
            description : eventDescription,
        }

        alert("RECUERDA el ID de tu evento es: "+i)
        i +=1
        events.push(objectEvent)
        console.log(objectEvent)
    }
    else if (eventsMenu==2){
        searchEvent = prompt("Ingresa nombre o id del evento ")
        events.forEach(function(i){
            console.log(i.name)
                if (i.id== searchEvent){
                    change= prompt("Ingrese 1. para modificar, 2. para salir")
                    if (change == 1){
                        let menuModification = prompt("Ingrese el cambio que desea hacer 1. Para fecha 2. Para descripcion 3. Para nombre")
                        if (menuModification == 1)
                            {
                                let modification = prompt("Ingrese la nueva fecha AAAA-MM-DD ")
                                i.date = modification
                            console.log(i)}
                        else if (menuModification==2){
                            let modification = prompt("Ingrese la nueva descripcion")
                            i.description = modification
                            console.log(i)
                        
                        }
                        else if (menuModification ==3){
                            let modification = prompt("Ingrese nombre")
                            i.name = modification
                            console.log(i)
                        }
                        }
                    } 

                
                
            else if(i.name == searchEvent){
                if (i.id== searchEvent){
                    console.log(i)
                    change= prompt("Ingrese 1. para modificar, 2. para salir")
                    if (change == 1){
                        let menuModification = prompt("Ingrese el cambio que desea hacer 1. Para fecha 2. Para descripcion 3. Para nombre")
                        if (menuModification == 1)
                            {
                                let modification = prompt("Ingrese la nueva fecha AAAA-MM-DD ")
                                i.date = modification}
                        else if (menuModification==2){
                            let modification = prompt("Ingrese la nueva descripcion")
                            i.description = modification
                        
                        }
                        else if (menuModification ==3){
                            let modification = prompt("Ingrese nombre")
                            i.name = modification
                        }
                        }
                    }

            }})}
            
        
    else if(eventsMenu == 3){
        console.log(events)
    }  
    else if(eventsMenu == 4){
        deleteEvent = prompt("Ingrese nombre o ID de su evento")
        if (deleteEvent == i.name || deleteEvent == i.id){
            deleteEvents = events.filter(i => i!= deleteEvent)
            events.length = 0
            events.push(deleteEvents)
        }}
    else{
        break}
     }
   
  

// Ejercicio 5
// let calificaciones =    (prompt("Ingrese las calificaciones del alumno de 1 a 5 con punto y separados por comas"))
// let promediateArray = calificaciones.split(",")
// let promediate = promediateArray.reduce((suma,Nota)=>Number(suma)+Number(Nota))/(promediateArray.length)
// console.log(promediate)
// Ejercicio 6
// let calificaciones =    (prompt("Ingrese las calificaciones del alumno de 1 a 5 con punto y separados por comas"))
// let promediateArray = calificaciones.split(",")
// let promediate = promediateArray.reduce((suma,Nota)=>Number(suma)+Number(Nota))/(promediateArray.length)
// console.log(promediate)
// let min = promediateArray.reduce((start,next)=> Number(start)<= Number(next) ? start:next)
// let max = promediateArray.reduce((start1,next1)=>start1>= next1 ? start1:next1)
// let aprobados = promediateArray.filter((element)=> element>= 3.5)
// let reprobados = promediateArray.filter((element)=> element<= 3.5)
// let arraySort = promediateArray.sort((a,b)=>Number(a)-Number(b))
// console.log("Calificacion minima: "+min)
// console.log("Calificacion maxima: "+max)
// console.log("Alumnos aprobados: "+aprobados)
// console.log("Alumnos reprobados: "+reprobados)
// console.log("Notas ordenadas: "+ arraySort)