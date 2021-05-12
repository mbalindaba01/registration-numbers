const RemoveElements = () => {
    let townReg
    let regCode

    const setTownReg = (reg) => {
        townReg = reg
    }

    const getTownReg = () => {
        return townReg
    }

    const setRegCode = (town) => {
        if(town == "Cape Town") {
            regCode = "CA"
        }else if(town == "Bellville"){
            regCode = "CJ"
        } else if(town = "Paarl") {
            regCode = "CY"
        }
    }

    const getRegCode = () => {
        return regCode
    }

    const removeElements = (appendParent, child) => {
        appendParent.removeChild(child)
    }

    return {
        setTownReg,
        getTownReg,
        setRegCode,
        getRegCode,
        removeElements,
    }
}