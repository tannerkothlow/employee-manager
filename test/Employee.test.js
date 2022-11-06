const Employee = require('../classes/Employee');

describe('Employee', () => {
    xit('should create an employee object with a name, id, and email property', () => {
        const name = 'Greg';
        const id = 1;
        const email = 'greg@greg.com'

        const obj = new Employee(name, id, email);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);

        expect(obj.getName()).toEqual(name);
    })
    xit('should return its "Employee" when role called', () => {
        const obj = new Employee();

        expect(obj.getRole()).toEqual('Employee');
    })
})