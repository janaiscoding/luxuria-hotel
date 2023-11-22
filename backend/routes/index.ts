import express, { Request, Response } from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.status(200).json({ message: "This works" });
});

// signup
// login
// create reservation
// verify reservation 
// delete reservation

export default router;
