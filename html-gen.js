// This will be what the Inquirer data is passed into and assembled.

// Each card object will be built on a boilerplate object that will be extended depending on the criteria entered.
const team = [];

addMember = (emp) => {
    team.push(emp);
}

makeCard = (emp) => {
    return `
    <h1>${emp.name}</h1>
    `
}

genMarkdown = (team) => {
   return // The bulk of the actual HTML doc goes here
}

applyMD = () => {
    console.log(`Markdown Applied`);
}

module.exports = HtmlGen;