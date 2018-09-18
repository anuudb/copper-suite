import { Router, Request, Response } from "express";
import { check_os_test} from "./operations/check_environment";
import { Agent_connector } from "./operations/Agent_connector";
import { d_ps } from "./operations/env_stats";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send("Client running ...");
});

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Server Test ...");
});

router.get("/testview", (req: Request, res: Response) => {
    let os = check_os_test(1);
    // let stats = d_ps(1);
    console.log(os);
    res.render("index", {title : "Copper-Suite", val : [1, 2, 3, 33, 10 ], osss: os});
    // res.status(200).send("Server Test ...");
});

router.get("/ui_link_module", (req: Request, res: Response) => {
    res.render("ui_link_module", {title: "Copper-suite"});
});

router.get("/agents", (req: Request, res: Response) => {
    let Agents = Agent_connector("hi");
    res.status(200).send("Agent connected....");
    // res.status(200).send("Server Test ...");
});

export const initController: Router = router;