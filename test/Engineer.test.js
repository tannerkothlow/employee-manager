const Engineer = require('../classes/Engineer');

describe('Engineer', () => {
    it('should create an Engineer object with a name, id, email, and github property', () => {
        const name = 'Gregineer';
        const id = 6;
        const email = 'greg@engineer.com'
        const github = 'greghub';

        const obj = new Engineer(name, id, email, github);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.github).toEqual(github);
    })
    it('should return "Engineer" when role called', () => {
        const obj = new Engineer();

        expect(obj.getRole()).toEqual('Engineer');
    })
})