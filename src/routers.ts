import { Router, Request, Response } from "express";
import { check_os_test} from "./operations/check_environment";
import { Agent_connector } from "./operations/Agent_connector";
import { d_ps } from "./operations/env_stats";
import { rainloop } from "./operations/rainloop_apache";
import { dovecot_status } from "./operations/dovecot";
import { dovecot_stop } from "./operations/dovecot_stop";
import { dovecot_start } from "./operations/dovecot_start";
import { postfix_status } from "./operations/postfix";
// import { postfix_status } from "./operations/postfix";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Client running ...");
});

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Server Test ...");
});

router.get("/testview", (req: Request, res: Response) => {
    // let os = check_os_test(1);
    let stats = d_ps(1, req, res);
    console.log(stats);
    // res.render("index", {title : "Copper-Suite", val : [1, 2, 3, 33, 10 ], osss: os});
    // res.status(200).send("Server Test ...");
});

router.get("/rainloop_apache", (req: Request, res: Response) => {
    let stats = rainloop(1, req, res);
    console.log(stats);
});

router.get("/dovecot_status", (req: Request, res: Response) => {
    let stats = dovecot_status(1, req, res);
    console.log(stats);
});

router.get("/dovecot_stop", (req: Request, res: Response) => {
    let stats = dovecot_stop(1, req, res);
    console.log(stats);
});

router.get("/dovecot_start", (req: Request, res: Response) => {
    let stats = dovecot_start(1, req, res);
    console.log(stats);
});

router.get("/postfix_status", (req: Request, res: Response) => {
    let stats = postfix_status(1, req, res);
    console.log(stats);
});

router.get("/ui_link_module", (req: Request, res: Response) => {
    let os = check_os_test(1);
    res.render("ui_link_module", {title: "Copper-suite", osss: os});
});

router.get("/agents", (req: Request, res: Response) => {
    let Agents = Agent_connector("hi");
    res.status(200).send("Agent connected....");
    // res.status(200).send("Server Test ...");
});

router.get("/cmd_test", (req: Request, res: Response) => {
    let stats = dovecot_start(1, req, res);
    console.log(stats);
});

export const initController: Router = router;