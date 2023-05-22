console.log ("bonjour")



// je créer le tableau

const board = document.querySelector (".game")

function creaboard(){
    for (let i = 0; i < nb_guess; i++){
        let row = documentcreateElement ("div")
        row.className = "letter-row"

    for (let j = 0; j< 5; j++){
        let box = document.createElement ("div") 
        box.className = "letter-box"  
        row.appenChild(box)
     }
    }
}

console.log (creaboard())

