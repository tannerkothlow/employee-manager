const Intern = require('../classes/Intern');

describe('Intern', () => {
    xit('should create an Intern object with a name, id, email, and school property', () => {
        const name = 'Greg Studen';
        const id = 3;
        const email = 'greg@greg.edu'
        const school = 'greg academy'

        const obj = new Intern(name, id, email, school);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.school).toEqual(school);

        expect(obj.getName()).toEqual(name);
    })
    xit('should return "Intern" when role called', () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual('Intern');
    })
})