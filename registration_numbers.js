//reference to the reg number iput field
const inputReg = document.querySelector('#reg-number')

//reference to the parent element of the reg numbers
const regParent = document.querySelector('.reg')

//reference to add button
const addButton = document.querySelector('#add')

//make instance of factory function that creates and appends elements
const addElements = AddElements()

//add the reg number to the DOM
const addReg = () => {
    addElements.setReg(inputReg.value)
    addElements.createRegElem('h2')
    addElements.setParent(regParent) 
    if(!addElements.getRegArray().includes(addElements.getReg())){
        addElements.appendChildToParent()  
    }
    addElements.setRegArray()    
}

//event listener to add button
addButton.addEventListener('click', () => {
    if(inputReg.value != '') {
        addReg()
    }
    //clear input field
    inputReg.value = ''
})

