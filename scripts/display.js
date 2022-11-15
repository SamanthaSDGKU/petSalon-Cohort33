function displayCards(){
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the HTML tmp for card
        card+=` 
            <div class="pet">
                <h6>${pet.name}</h6>
                <p> Age: ${pet.age}</p>
            </div>
        `;
        
    }
    console.log(card);
    //append the tmp on the html
    document.getElementById("pets").innerHTML=card;
}