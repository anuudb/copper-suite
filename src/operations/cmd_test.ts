var nrc = require("node-run-cmd");
// nrc.run("ls");

var dataCallback = function(data) {
    useData(data);
};

nrc.run('ls', { onData: dataCallback });
console.log(nrc);