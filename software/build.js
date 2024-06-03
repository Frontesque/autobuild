const fs = require('fs');
const scripts = fs.readdirSync('./scripts');

let repo = new Array();

for (const i in scripts) {
    const program = scripts[i];
    const install = fs.readFileSync('./scripts/'+program).toString();
    repo.push({ program: program.split('.sh')[0], install });
    console.log(`Added '${program}' to repo. ${install.split('\n').length} lines.`);
}

fs.writeFileSync('autobuild-repo.js', `module.exports = ${JSON.stringify(repo)};`);