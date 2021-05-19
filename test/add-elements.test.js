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
        
        it('should create an element to store the registration number', () => {
            let addElements = AddElements()
            addElements.createRegElem('h2')
            assert.deepEqual('<h2></h2>', addElements.getRegElem())
        });

        it('ashould set the parent element to append the child element to', () => {
            let addElements = AddElements()
            addElements.setParent('div')
            assert.equal('div', addElements.getParent())
        });
        
        
    });
    
});
