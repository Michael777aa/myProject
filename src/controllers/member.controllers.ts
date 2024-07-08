import { T } from "../libs/types/common";
import { Request, Response } from "express";
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome successfull");
    res.render("home");
  } catch (err) {
    console.log("error on goHome", err);
  }
};

export default restaurantController;
