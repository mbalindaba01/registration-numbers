const RemoveElements = () => {
    let selectedTowns
    let townReg 
    let removedReg = []

    const setTownList = (towns) => {
        selectedTowns = towns
    }

    const getTownList = () => {
        return selectedTowns
    }

    const setTownReg = (reg) => {
        townReg = reg
    }

    const getTownReg = () => {
        return townReg
    }

    const removeReg = (elem) => {
        removedReg = document.removeChild(elem)
    }

    return {
        setTownList,
        getTownList,
        setTownReg,
        getTownReg,
        removeReg
    }
}