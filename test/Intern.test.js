const Intern = require('../classes/Intern');

describe('Intern', () => {
    it('should create an Intern object with a name, id, email, and school property', () => {
        const name = 'Greg Studen';
        const id = 3;
        const email = 'greg@greg.edu'
        const school = 'greg academy'

        const obj = new Intern(name, id, email, school);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.school).toEqual(school);
    })
    it('should return "Intern" when role called', () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual('Intern');
    })
})