import { Docker, Options } from "docker-cli-js";
import path from "path";

let dockerCLI = require("docker-cli-js");

const options = new Options(
    /* machineName */ null
    // /* currentWorkingDirectory */ path.join(__dirname, '..', 'test', 'nginx')
);

let docker = new Docker(options);

export function dovecot_status(input: number, req: Request, res: Response) {
    console.log("logging path " + __dirname);
    docker.command("exec emailserver service dovecot status", function (err, data) {
        console.log("data = ", data);
        res.send(data);
    });
}