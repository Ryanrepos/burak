import { Request, Response} from "express";

import {T} from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {

    try {
        res.send("Home page");
    } catch(err) {
        console.log("Error, goHome:", err)
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {

    try {
        res.send("Login page");
    } catch(err) {
        console.log("Error, getLogin:", err)
    }
};


restaurantController.getSingup = (req: Request, res: Response) => {

    try {
        res.send("Signup page");
    } catch(err) {
        console.log("Error, getSignup:", err)
    }
};

export default restaurantController;