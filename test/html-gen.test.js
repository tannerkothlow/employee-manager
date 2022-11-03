const GenTest = require('../html-gen');
const Manager = require('../classes/Manager');
const Engineer = require('../classes/Engineer');
const Intern = require('../classes/Intern')

// TO RUN: Uncomment the GenTest class and module exports for GenTest in html-gen.js
describe('htmlGen', () => {
    it('should return a manager card if getRole returns Manager', () => {
        const team = [];
        const dummy = new Manager('Greg', 100, 'greg@email.com', 105);
        team.push(dummy);

        const obj = new GenTest;

        expect(obj.makeCard(team)).toEqual('Manager emp card');
    })
    it('should return and engineer card if getRole returns Engineer', () => {
        const team = [];
        const dummy = new Engineer('Greg', 100, 'greg@email.com', 'greghub');
        team.push(dummy);

        const obj = new GenTest;

        expect(obj.makeCard(team)).toEqual('Engineer emp card');
    })
    it('should return an intern card if getRole returns Intern', () => {
        const team = [];
        const dummy = new Intern('Greg', 100, 'greg@email.com', 'Gregcademy');
        team.push(dummy);

        const obj = new GenTest;

        expect(obj.makeCard(team)).toEqual('Intern emp card');
    })
})