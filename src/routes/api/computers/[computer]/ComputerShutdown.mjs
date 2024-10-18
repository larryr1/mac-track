import { Computers } from "../../../../database.mjs";
import { ParameterizedRouter } from "../../../../lib/ParameterizedRouter.mjs";

export const ComputerShutdownRouter = ParameterizedRouter();

ComputerShutdownRouter.post("/", (req, res) => {
  console.log(req.body);

  Computers.update({ _id: req.params.id }, {
    $set: {
      power: false,
    }
  }, { upsert: true });

  res.send("Received your request");
});