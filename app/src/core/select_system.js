const execute = require('../handlers/execute');

async function runChecks() {
    let podman;
    let docker;
    try {
        podman = await execute('podman --version');
        console.log("Podman".magenta, "detected");
    } catch (err) { }
    try {
        docker = await execute('docker --version');
        console.log("Docker".blue, "detected");
    } catch (err) { }
    return { podman, docker };
}

module.exports = async _ => {
    let systems = await runChecks();
    let system;
    if (systems.podman && systems.docker) {
        console.log("Docker and Podman were detected. I'm not sure why you'd do that to yourself...".yellow);
        console.log("Podman selected as runner".green);
        system = 'podman';
    } else if (systems.podman) {
        console.log("Podman selected as runner".green);
        system = 'podman';
    } else if (systems.docker) {
        console.log("Docker selected as runner".green);
        system = 'docker';
    } else {
        console.log("No runner detected. Please install Docker or Podman to proceede".red);
        system = false;
    }
    return system;
}