const AddElements = () => {
    let regNum
    let createdElem
    let appendParent
    let regNames = []
    let elemArray = []

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
        getParent().insertBefore(getRegElem(), getParent().childNodes[0])
    }

    const setElemArray = () => {
        elemArray.push(createdElem)
    }

    const getElemArray = () => {
        return elemArray
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
        setElemArray,
        getElemArray,
        setRegArray, 
        getRegArray
    }
}