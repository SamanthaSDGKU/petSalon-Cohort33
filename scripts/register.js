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
let c=0; // this is a counter
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
    this.id=c++;//increase 1 by 1
}
//create pets
let pet1 = new Pet("Scooby",60," Male","Dane","Grooming","Shaggy","555-5555-555");
let pet2 = new Pet("Scrappy",50,"Male","Mixed","Vaccine","Shaggy","555-5555-555");

//register function
//getting the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function isValid(aPet){
    let valid=true;
    //clearing the input borders
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    //check the conditions
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error");
    }
    // ***** HW: add the validation for the phone

    return valid;
}

function register(){    
    //getting values and creating the obj
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    //validating thePet
    if(isValid(thePet)==true){
        //push obj into the array
        petSalon.pets.push(thePet);
        //display the pets
        displayCards();
        //displayTable();
        //display the petSalon.pets array
        console.log(petSalon.pets);
        clearForm();
    }
}

function clearForm(){
    //clear the text in the inputs
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

function deletePet(aPetID){
    console.log("Deleting the pet " + aPetID);
    document.getElementById(aPetID).remove();// delete the card from the HTML
    let deleteIndex;
    for(let i=0;i<petSalon.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(deleteIndex,1);
}

function init(){
    // this is the main function
    console.log("init");
    petSalon.pets.push(pet1,pet2);
    displayCards();
    //displayTable();
}

window.onload=init;