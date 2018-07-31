import { Router, Request, Response } from "express";
import {check_os_test} from "./operations/check_environment";

const router: Router = Router();

    router.get("/", (req: Request, res: Response) => {
        res.status(200).send("Server running ...");
    });
    router.get("/test", (req: Request, res: Response) => {
        res.status(200).send("Server Test ...");
    });
    router.get("/testview", (req: Request, res: Response) => {
        let os = check_os_test(1);
        res.render("index", {title : "Copper-Suite", os: os } );
        // res.status(200).send("Server Test ...");
    });
    router.get("/ui_link_module", (req: Request, res: Response) => {
        res.render("ui_link_module", {title: "Copper-suite"});
    });

export const initController: Router = router;