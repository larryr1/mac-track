import { EnsureLocalConnection } from "../../../lib/EnsureLocalConnection.mjs";
import { ParameterizedRouter } from "../../../lib/ParameterizedRouter.mjs";
import { ComputerParamRouter } from "./[computer]/index.mjs";

export const ComputersRouter = ParameterizedRouter();

ComputersRouter.use("/:id", ComputerParamRouter);

ComputersRouter.get("/", EnsureLocalConnection, (req, res) => {
  Computers.find({}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(docs);
  });
});