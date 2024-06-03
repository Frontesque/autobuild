const execute = require('../handlers/execute');

async function start(system) {
    //---   Pull Container   ---//
    try {
        console.log("Pulling container...".green);
        await execute(`${system} pull fedora:latest`);
    } catch (err) {
        console.log(err);
    }

    //---   Start Container   ---//
    console.log("Starting container...".green);
    try {
        await execute(`${system} run -d -i -t --rm --replace --name autobuild fedora:latest /bin/sleep infinity`);
    } catch (err) {
        console.log(err);
    }

    //---   Check Running   ---//
    let running = false;
    try {
        const output = await execute(`${system} exec -it autobuild /bin/echo Running`);
        if (output.trim() == 'Running') running = true;
    } catch (err) {
        console.log(err);
    }
    
    if (running === true) {
        console.log("Container running...".green);
        return true;
    } else {
        console.log("Container failed to start.".red);
        return false;
    }
}

module.exports = {
    start
}