function displayCards(){
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the HTML tmp for card
        card+=` 
            <div id="${pet.id}" class="pet">
                <h6>${pet.name}</h6>
                <p> Age: ${pet.age}</p>
                <button onclick="deletePet(${pet.id})">Delete</button>
            </div>
        `;
        
    }
    console.log(card);
    //append the tmp on the html
    document.getElementById("pets").innerHTML=card;
}
function displayTable(){
    console.log(" This is your table function ");
}