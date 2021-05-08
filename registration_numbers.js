//reference to the reg number iput field
const inputReg = document.querySelector('#reg-number')

//reference to the parent element of the reg numbers
const regParent = document.querySelector('.reg')

//reference to add button
const addButton = document.querySelector('#add')

//reference to remove button
const removeButton = document.querySelector('#remove')

//reference to the error div
const error = document.querySelector('.error')

//instance of factory function that creates and appends elements
const addElements = AddElements()

//instance of factory function that removes elements
const removeElements = RemoveElements()

//add the reg number to the DOM
const addReg = () => {
    addElements.setReg(inputReg.value)
    if(addElements.getReg().startsWith('CA') || addElements.getReg().startsWith('CY') || addElements.getReg().startsWith('CJ')){
        addElements.createRegElem('h2')
        addElements.setParent(regParent) 
        if(!addElements.getRegArray().includes(addElements.getReg())){
            addElements.appendChildToParent()  
        }
        addElements.setRegArray()    
        addElements.setElemArray()
    }
    else {
        error.innerHTML = "Please provide a Cape Town, Bellville or Paarl Registration Number"
        setTimeout(() => {
            error.innerHTML = ""
        }, 3000)
    }

}

//remove items that are not from the selected town
const removeReg = () => {
    //init variable to store reg code of the selected town
    let regCode

    //ref to radio button
    const radioRegBtn = document.querySelector('[name="town"]:checked')
    if(radioRegBtn) {
        var theTown = radioRegBtn.value
    } else {
        error.innerHTML = 'Please pick a town'

        setTimeout(() => {
            error.innerHTML = ""
        }, 3000)
    }

    //get registration code
    removeElements.setTownReg(theTown)
    if(removeElements.getTownReg() == 'Cape Town') {
        regCode = 'CA'
    }
    if(removeElements.getTownReg() == "Bellville") {
        regCode = 'CJ'
    }
    if(removeElements.getTownReg() == "Paarl") {
        regCode = 'CY'
    }

    //find all created elements whose text content does not start with the reg code and remove them
    for(let i = 0; i < addElements.getElemArray().length; i++){
        let town = addElements.getElemArray()[i]
        if(!town.textContent.startsWith(regCode) && theTown != undefined){
            regParent.removeChild(town)
        }else {
            console.log('Haibo Wenzani')
        }
    }

    //display error if the user presses show button while there are no added registration numbers
    if(addElements.getElemArray().length == 0){
        error.innerHTML = 'Please add registration numbers to filter'

        setTimeout(() => {
            error.innerHTML = ""
        }, 3000)
    }
}

//event listener to add button
addButton.addEventListener('click', () => {
    if(inputReg.value != '') {
        addReg()
    } else {
        let elem = document.createElement('p')
        regParent.appendChild(elem)
        elem.classList.add('error')
        elem.innerHTML = "Registration Number cannot be empty"

        setTimeout(() => {
            elem.innerHTML = ""
        }, 3000)
    }
    //clear input field
    inputReg.value = ''
})

//event listener to remove button
removeButton.addEventListener('click', removeReg)