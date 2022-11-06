const Manager = require('../classes/Manager');

describe('Manager', () => {
    xit('should create a Manager object with a name, id, email, and office number property', () => {
        const name = 'Gregager';
        const id = 100;
        const email = 'greg@greg.gov'
        const officeNumber = 105;

        const obj = new Manager(name, id, email, officeNumber);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.officeNumber).toEqual(officeNumber);

        expect(obj.getName()).toEqual(name);
    })
    xit('should return "Manager" when role called', () => {
        const obj = new Manager();

        expect(obj.getRole()).toEqual('Manager');
    })
})