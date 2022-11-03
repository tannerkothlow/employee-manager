const GenTest = require('../html-gen');
const Manager = require('../classes/Manager');

// TO RUN: Uncomment the GenTest class and module exports for GenTest in html-gen.js
describe('htmlGen', () => {
    it('should return a manager card if getRole returns Manager', () => {
        const team = [];
        const dummy = new Manager('Greg', 100, 'greg@email.com', 105);
        team.push(dummy);

        const obj = new GenTest;

        expect(obj.makeCard(team)).toEqual('Manager emp card');
    })
    xit('should return and engineer card if getRole returns Engineer', () => {

    })
    xit('should return an intern card if getRole returns Intern', () => {

    })
})