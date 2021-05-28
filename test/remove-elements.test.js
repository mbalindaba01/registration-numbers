
describe('RemoveElemets Function', () => {
    describe('set values', () => {
        it('should set the town registration number to Cape Town', () => {
            let removeElements = RemoveElements()

            removeElements.setTownReg('Cape Town')
            assert.equal('Cape Town', removeElements.getTownReg())
        });

        it('should set the town registration number to Bellville', () => {
            let removeElements = RemoveElements()

            removeElements.setTownReg('Bellville')
            assert.equal('Bellville', removeElements.getTownReg())
        });

        it('should set the town registration number to Paarl', () => {
            let removeElements = RemoveElements()

            removeElements.setTownReg('Paarl')
            assert.equal('Paarl', removeElements.getTownReg())
        });

        it('should set the registration code to CA if the registration number is from Cape Town', () => {
            let removeElements = RemoveElements()

            removeElements.setRegCode('Cape Town')
            assert.equal('CA', removeElements.getRegCode())
        });

        it('should set the registration code to CJ if the registration number is from Bellville', () => {
            let removeElements = RemoveElements()

            removeElements.setRegCode('Bellville')
            assert.equal('CJ', removeElements.getRegCode())
        });

        it('should set the registration code to CY if the registration number is from Paarl', () => {
            let removeElements = RemoveElements()

            removeElements.setRegCode('Paarl')
            assert.equal('CY', removeElements.getRegCode())
        });

        it('should set the registration code to All if all the registration numbers are selected', () => {
            let removeElements = RemoveElements()

            removeElements.setRegCode('All')
            assert.equal('All', removeElements.getRegCode())
        }); 
    });
    describe('Error Messages', () => {
        it('should return an error the town to filter is not selected', () => {
            let removeElements2 = RemoveElements()

            removeElements2.setError('Please pick a town')
            assert.equal('Please pick a town', removeElements2.getError())

        });

        it('should return an error if no town is from the selected town to filter', () => {
            let removeElements3 = RemoveElements()
            removeElements3.setTownReg('Cape Town')

            removeElements3.setError('None of the registration numbers are from ' + removeElements3.getTownReg())
            assert.equal('None of the registration numbers are from Cape Town', removeElements3.getError())

        });
        
        it('should return an error if all the regostration numbers displayed are from one town and that town is selected', () => {
            let removeElements3 = RemoveElements()
            removeElements3.setTownReg('Cape Town')

            removeElements3.setError('Only ' + removeElements3.getTownReg() + ' registration numbers are present')
            assert.equal('Only Cape Town registration numbers are present', removeElements3.getError())

        });
    });
    
    
});
