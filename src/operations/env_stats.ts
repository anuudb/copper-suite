import { Docker, Options } from "docker-cli-js";
import path from "path";
var nrc = require('node-run-cmd');

let dockerCLI = require("docker-cli-js");
// let DockerOptions = dockerCLI.Options;
// let D_ocker = dockerCLI.Docker;

// let options = new Options(
//     null,
//     path.join(__dirname, "..", "test", "nginx")
//     // "nginx"
// );
const options = new Options(
    /* machineName */ null
    // /* currentWorkingDirectory */ path.join(__dirname, '..', 'test', 'nginx')
);

let docker = new Docker(options);

// docker.command("build -t nginximg .").then(function (data) {
//     console.log("data = ", data);
// });

export function d_ps(input: number, req: Request, res: Response) {
    // docker.command("ps").then(function (data: any) {
    //     console.log("data = ", data);
    //     return data;
    // });
    console.log("logging path " + __dirname);
    // console.log("passed param name value is : " + req.query.name);

    docker.command("ps", function (err, data) {
        console.log("data = ", data.raw);

        // return data;
        res.send(data.raw);
        
        var dataCallback = function(data) {
            useData(data);
        };
        nrc.run('ls', { onData: dataCallback });
        console.log(dataCallback);


    });

    // docker.command("start emailserver", function (err, data) {
    //     console.log("data = ", data;

    //     // return data;
    //     res.send(data);
    // });
}