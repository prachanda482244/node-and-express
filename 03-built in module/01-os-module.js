const os = require('os');

// info about current user
const user = os.userInfo();
// console.log(user);

// methods returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    hostname:os.hostname(),
    homedir:os.homedir(),
    machine:os.machine(),
    arch:os.arch()
}
console.log(currentOS);