const AddElements = () => {
    let regNum
    let createdElem
    let appendParent
    let regNames = []

    const setReg = (num) => {
        regNum = num.toUpperCase().replace(/ /g,'')

    }

    const getReg = () => {
        return regNum
    }

    const createRegElem = (elem) => {
        createdElem = document.createElement(elem)
    }

    const getRegElem = () => {
        return createdElem
    }

    const setParent = (parent) => {
        appendParent = parent
    }

    const getParent = () => {
        return appendParent
    }

    const appendChildToParent = () => {
        appendParent.appendChild(createdElem)
        createdElem.innerHTML = getReg()
    }

    const setRegArray = () => {
        regNames.push(regNum)
    }

    const getRegArray = () => {
        return regNames
    }

    return {
        setReg,
        getReg,
        createRegElem,
        getRegElem,
        setParent,
        getParent,
        appendChildToParent, 
        setRegArray, 
        getRegArray
    }
}