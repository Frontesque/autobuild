const repo = require('../autobuild-repo');

module.exports = (search) => {
    search = search.toLowerCase();

    for (i in repo) {
        const entry = repo[i];
        if (entry.program.toLowerCase() === search) {
            return entry;
        }
    }

    console.log(`No program '${search}' found.`.red);
    return false;
}