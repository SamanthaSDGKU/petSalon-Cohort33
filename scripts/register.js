//object literal notation
let petSalon = {
    //properties
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"262",
        zip:"22400"
    },
    pets:[]
}

//create the constructor
//<----------parameters (local vars)---------> 
function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;//**** 
    this.contactPhone=phone;//****
}
//create pets
let pet1 = new Pet("Scooby",60," Male","Dane","Grooming","Shaggy","555-5555-555");
let pet2 = new Pet("Scrappy",50,"Male","Mixed","Vaccine","Shaggy","555-5555-555");
petSalon.pets.push(pet1,pet2);
//register function
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function register(){
    //get the values
    
    //create the obj
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    //display the obj
    console.log(thePet);
    //push obj into the array
    petSalon.pets.push(thePet);
    //display the petSalon.pets array
    console.log(petSalon.pets);
}

