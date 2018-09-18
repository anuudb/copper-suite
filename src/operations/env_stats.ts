import { Docker, Options } from "docker-cli-js";

let dockerCLI = require("docker-cli-js");
let DockerOptions = dockerCLI.Options;
let D_ocker = dockerCLI.Docker;

let options = new Options(
    /* machineName */ null,
    // /* currentWorkingDirectory */ path.join(__dirname, "..", "test", "nginx")
    "nginx"
);

let docker = new Docker(options);

docker.command("build -t nginximg .").then(function (data) {
    console.log("data = ", data);
});
export function d_ps(input: number) {
    docker.command("ps").then(function (data: any) {
        console.log("data = ", data);
        return data;
    });
}