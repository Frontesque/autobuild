//---   Imports   ---//
require('colors');
const container = require('./core/container');

//---   Main   ---//
async function main() {
    //---   Determine Package To Install   ---//
    const package = require('./core/program')(process.argv[2]);
    if (package === false) return;

    //---   Determine Runner   ---//
    const system = await require('./core/select_system')();
    if (system === false) return;

    //---   Start Container   ---//
    const ct = await container.start(system);
    if (ct === false) return;
}
main();