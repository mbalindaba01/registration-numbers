describe('AddElements function', () => {
    describe('Set Values', () => {
        it('should set the registration number to CA000000', () => {
            let addElements = AddElements()
            addElements.setReg('CA000000')
            assert.equal('CA000000', addElements.getReg())
        });
        it('should set the registration number to CJ000000', () => {
            let addElements = AddElements()
            addElements.setReg('CJ000000')
            assert.equal('CJ000000', addElements.getReg())
        });
        it('should set the registration number to CY000000', () => {
            let addElements = AddElements()
            addElements.setReg('CY000000')
            assert.equal('CY000000', addElements.getReg())
        });

        it('ashould set the parent element to append the child element to', () => {
            let addElements = AddElements()
            addElements.setParent('div')
            assert.equal('div', addElements.getParent())
        });
        
    });

    describe('Error Messages', () => {
        it('should display error if there is no registration number provided', () => {
            let addElements = AddElements()

            addElements.setError('Registration number cannot be empty')
            assert.equal('Registration number cannot be empty', addElements.getError())
        });

        it('should display an error if the registration number provided is not valid', () => {
            let addElements = AddElements()

            addElements.setError('Please enter valid registration number')
            assert.equal('Please enter valid registration number', addElements.getError())
        });
        
        it('should return an error if the registration number entered is not from Cape Town, Bellville or Paarl', () => {
            let addElements = AddElements()

            addElements.setError('Please enter Cape Town, Bellvile or Paarl registration number')
            assert.equal('Please enter Cape Town, Bellvile or Paarl registration number', addElements.getError())
        });

        it('should return error if the registration number added has been entered before', () => {
            let addElements = AddElements()

            addElements.setError('Registration Number already added. Please add unique registration number')
            assert.equal('Registration Number already added. Please add unique registration number', addElements.getError())
        })
    })
})
