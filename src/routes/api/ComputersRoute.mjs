import { Computers } from "../../database.mjs";
import { ParameterizedRouter } from "../../lib/ParameterizedRouter.mjs";
import { ComputerParamRouter } from "./computers/[computer]/index.mjs";

export const ComputersRouter = ParameterizedRouter();

ComputersRouter.use("/:id", ComputerParamRouter);

ComputersRouter.get("/", (req, res) => {
  Computers.find({}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(docs);
  });
});
