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

//reference to the radio buttons
const radioBtns = document.querySelectorAll('input[name ="town"]')

//instance of factory function that creates and appends elements
const addElements = AddElements()

//instance of factory function that removes elements
const removeElements = RemoveElements()

//set parent globally so it does not get set everytime you call a function
addElements.setParent(regParent)

//function to display error
const displayError = (errorMsg) => {
    error.innerHTML = errorMsg
    error.style.height = '40px'
    setTimeout(() => {
        error.innerHTML = ''
        error.style.height = '0'

    }, 3000);
}

//load items in the local storage
const localStorageItems = () => {
    let storageList = [].concat(localStorage.getItem('regs').split(','))
    let uniqueStorageList = [... new Set(storageList)]
    for(let i = 1; i < uniqueStorageList.length; i++){
        if(uniqueStorageList.length != 0){
            addElements.createRegElem('h2')
            addElements.getParent()
            addElements.appendChildToParent(uniqueStorageList[i])
            addElements.setElemArray()
        }
    }
}

//initiate regs array to an empty array
if(localStorage.getItem('regs') == null) {
    localStorage.setItem('regs', [])
}

//add the reg number to the DOM
const addReg = () => {  
    addElements.setReg(inputReg.value)
    //error when reg number is invalid
    let digits = addElements.getReg().slice(2, addElements.getReg().length)
    if (!digits.match("^[0-9]+$") || addElements.getReg().length > 10) {
        displayError('Please enter valid registration number')
    } else {
        //runs when provided reg number is valid
        if (addElements.getReg().startsWith('CA') || addElements.getReg().startsWith('CY') || addElements.getReg().startsWith('CJ')) {
            if (!localStorage.getItem('regs').split(',').includes(addElements.getReg())) {
                let regNames = [].concat(localStorage.getItem('regs').split(','))
                addElements.setRegArray(regNames)
                localStorage.setItem('regs', addElements.getRegArray())
                addElements.createRegElem('h2')
                addElements.getParent()
                addElements.appendChildToParent(addElements.getReg())
                addElements.setElemArray()
            }else {
                displayError("Registration number already added. Please add unique registration number")
                return
            }        
        } else {
            //error when reg number is not from Cape Town, Bellville or Paarl
            displayError("Please provide a Cape Town, Bellville or Paarl registration number")
            return
        }
    }
}

//remove items that are not from the selected town
const removeReg = () => {

    //display error if the user presses show button while there are no added registration numbers
    if (localStorage.getItem('regs').split(',').length != 0) {
        //ref to radio button
        const radioRegBtn = document.querySelector('[name="town"]:checked')
        if (radioRegBtn) {
            var theTown = radioRegBtn.value
        } else {
            displayError('Please pick a town')
            return
        }

        //get registration code
        removeElements.setTownReg(theTown)
        removeElements.setRegCode(removeElements.getTownReg())

        //filter out elements that should be removed from the DOM
        let toBeRemoved = addElements.getElemArray().filter(elem => !elem.textContent.startsWith(removeElements.getRegCode()))
        for(let i = 0; i < toBeRemoved.length; i++){
            let town = toBeRemoved[i]
            const index = addElements.getElemArray().indexOf(town)
            const index2 = addElements.getRegArray().indexOf(town.textContent)
            if(index > -1) {
                addElements.getElemArray().splice(index, 1)
                addElements.getRegArray().splice(index2, 1)
                removeElements.removeElements(addElements.getParent(), town)
                localStorage.setItem('regs', addElements.getRegArray())
            }
            //error if none of the reg numbers on the DOM are from the selected town
            if(addElements.getElemArray().length == 0){
                displayError('None of the registration numbers are from ' + removeElements.getTownReg())
            }
        }
    } else {
        //error when no registration numbers have been added
        displayError('Please add registration number(s) first')
    }
    addElements.setRegArray(localStorage.getItem('regs'))
    localStorage.setItem('regs', removeElements.getRegArray())

}

//event listener to make reg numbers persistent on reload
window.addEventListener('load', localStorageItems)

//event listener to add button
addButton.addEventListener('click', () => {
    if (inputReg.value != '') {
        addReg()
    } else {
        displayError('Registration Number Cannot Be Empty')
    }
    //clear input field
    inputReg.value = ''
})

//event listener to remove button
removeButton.addEventListener('click', () => {
    removeReg()

    //clear selected radio button
    for (let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].checked = false
    }
})


