import * as os from "os";

export function check_os_test(input: number): any {
    console.log(os.platform());
    return os.platform();
}