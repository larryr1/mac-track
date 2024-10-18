import { Computers } from "../../../../database.mjs";
import { ParameterizedRouter } from "../../../../lib/ParameterizedRouter.mjs";
import { ComputerDeleteRouter } from "./ComputerDelete.mjs";
import { ComputerRegisterRouter } from "./ComputerRegister.mjs";
import { ComputerShutdownRouter } from "./ComputerShutdown.mjs";
import { ComputerWakeRouter } from "./ComputerWake.mjs";

export const ComputerParamRouter = ParameterizedRouter();

ComputerParamRouter.use("/wake", ComputerWakeRouter);
ComputerParamRouter.use("/", ComputerDeleteRouter);
ComputerParamRouter.use("/register", ComputerRegisterRouter);
ComputerParamRouter.use("/shutdown", ComputerShutdownRouter);

ComputerParamRouter.get("/", (req, res) => {
  Computers.findOne({ _id: req.params.id }, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(docs);
  });
});
