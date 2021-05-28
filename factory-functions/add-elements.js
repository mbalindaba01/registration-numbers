const AddElements = () => {
    let regNum
    let createdElem
    let appendParent
    let regNames = []
    let elemArray = []
    let errorText 

    //set and get reg numbers
    const setReg = (num) => {
        regNum = num.toUpperCase().replace(/ /g, '')
    }

    const getReg = () => {
        return regNum
    }

    //create and get created element
    const createRegElem = (elem) => {
        createdElem = document.createElement(elem)
    }

    const getRegElem = () => {
        return createdElem
    }

    //set and get parent element
    const setParent = (parent) => {
        appendParent = parent
    }

    const getParent = () => {
        return appendParent
    }

    //append created child to parent
    const appendChildToParent = (innerText) => {
        createdElem.innerHTML = innerText
        getParent().insertBefore(getRegElem(), getParent().childNodes[0])
    }

    //set and get array of existing elements before removal
    const setElemArray = (elem) => {
        elemArray.push(elem)
    }

    const getElemArray = () => {
        return elemArray
    }

    //set and get array of registration numbers entered by user
    const setRegArray = (regNums) => {
        regNames = regNums
        regNames.push(regNum)
    }

    const getRegArray = () => {
        return regNames
    }

    const setError = (error) => {
        errorText = error
    }

    const getError = () => {
        return errorText
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
        getRegArray,
        setError,
        getError
    }
}