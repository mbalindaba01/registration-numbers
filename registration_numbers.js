//reference to the reg number iput field
const inputReg = document.querySelector('#reg-number')

//reference to the parent element of the reg numbers
const regParent = document.querySelector('.reg')

//reference to add button
const addButton = document.querySelector('#add')

//reference to remove button
const removeButton = document.querySelector('#remove')

//reference to button to remove all elements from DOM and localStorage 
const removeAll = document.querySelector('#removeAll')

//reference to the error div
const error = document.querySelector('.error')

//reference to the radio buttons
const radioBtns = document.querySelectorAll('input[name ="town"]')

//instance of factory function that creates and appends elements
const addElements = AddElements()

//instance of factory function that removes elements
const removeElements = RemoveElements()

//initiate local storage to an empty array 
if(localStorage.getItem('regs') == null) {
    localStorage.setItem('regs', [])
}

//reference to reg numbers saved in local storage
let regs = localStorage.getItem('regs').split(',')
//function to display error
const displayError = (errorMsg) => {
    addElements.setError(errorMsg)
    error.innerHTML = addElements.getError()
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
            let createdElem = document.createElement('h2')
            regParent.appendChild(createdElem)
            createdElem.innerHTML = uniqueStorageList[i]
            addElements.setElemArray('h2')
        }
    }
}

const displayRemoveButton = () => {
    if(regs.length > 1) {
        removeAll.style.display = 'block'
    }
}

//add the reg number to the DOM
const addReg = () => {  
    addElements.setReg(inputReg.value)
    let digits = addElements.getReg().slice(2, addElements.getReg().length)
    if(inputReg.value == '') {
        displayError('Registration number cannot be empty')
    }else if(!digits.match('^[0-9]+$') || addElements.getReg().length > 10) {
        displayError('Please enter valid registration number')
    }else if(!(addElements.getReg().startsWith('CA') || addElements.getReg().startsWith('CY') || addElements.getReg().startsWith('CJ'))) {
        displayError('Please enter Cape Town, Bellville or Paarl registration number')
    }else if(regs.includes(addElements.getReg())) {
        displayError('Registration number already added. Please add unique registration number')
    }else {
        let regNames = regs
        addElements.setRegArray(regNames)
        localStorage.setItem('regs', addElements.getRegArray())
        let createdElem = document.createElement('h2')
        createdElem.innerHTML = addElements.getReg()
        regParent.appendChild(createdElem)
        addElements.setElemArray(createdElem)
    }
}


//remove items that are not from the selected town
const removeReg = () => {
    if(addElements.getElemArray().length === 0) {
        displayError('Please add registration numbers first')
    } else {
        //get ref to radio buttons
        const radioRegBtn = document.querySelector('[name="town"]:checked')
        if(radioRegBtn) {
            var townName = radioRegBtn.value
            removeElements.setTownReg(townName)
            removeElements.setRegCode(removeElements.getTownReg())
            //array for elements to be removed
            console.log(addElements.getElemArray())
            let toBeRemoved = addElements.getElemArray().filter(elem => !elem.textContent.startsWith(removeElements.getRegCode()))
            //array for elements to be left behinf
            let toRemain = addElements.getElemArray().filter(elem => elem.textContent.startsWith(removeElements.getRegCode()))
            //error to run if only reg numbers from a specific town are present
            if(toBeRemoved.length === 0 && addElements.getElemArray().length !== 0){
                displayError('Only ' + removeElements.getTownReg() + ' registration numbers are present')
            }
            //add class to hide elements that do not fit the filter criteria
            for(let i = 0; i < toBeRemoved.length; i++){
                let townRemoved = toBeRemoved[i]
                if(removeElements.getTownReg() !== 'All'){
                    townRemoved.classList.add('hide')
                }
            }
            //remove hide class if the criteria for hiding them changes
            for(let i = 0; i < toRemain.length; i++){
                let elem = toRemain[i]
                if(elem.classList.contains('hide')){
                    elem.classList.remove('hide')
                }
            }
            //remove hide class from all elements when the all radio button is chosen
            if(removeElements.getRegCode() == 'All'){
                for(let i = 0; i < addElements.getElemArray().length; i++){
                    let elem = addElements.getElemArray()[i]
                    if(elem.classList.contains('hide')){
                        elem.classList.remove('hide')
                    }
                }
            }
            //if none of the registration numbers are from a specific town run this
            if(addElements.getElemArray().length == toBeRemoved.length && removeElements.getRegCode() !== 'All') {
                displayError('None of the registration numbers are from ' + removeElements.getTownReg())
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        }          
        else {
            displayError('Please pick a town')
        }
    }
/*
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
        //show all the registration numbers if all radio button is selected
        if(theTown == "All"){
            window.location.reload()
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
            }
            addElements.setRegArray(localStorage.getItem('regs').split(','))
            //error if none of the reg numbers on the DOM are from the selected town
            if(addElements.getElemArray().length == 0){
                displayError('None of the registration numbers are from ' + removeElements.getTownReg())
            }
        }

    } else {
        //error when no registration numbers have been added
        displayError('Please add registration number(s) first')
    }
    //reset local storage
    console.log(addElements.getRegArray())*/
}

//event listener to make reg numbers persistent on reload
window.addEventListener('load', () => {
    localStorageItems()
    displayRemoveButton()
})

//event listener to add button
addButton.addEventListener('click', () => {
    addReg() 
    displayRemoveButton()
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

//event listener to clear reg nums
removeAll.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})


