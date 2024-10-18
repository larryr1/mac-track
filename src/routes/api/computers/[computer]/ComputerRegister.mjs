import { ParameterizedRouter } from "../../../../lib/ParameterizedRouter.mjs";
import { Computers } from "../../../../database.mjs";

export const ComputerRegisterRouter = ParameterizedRouter();

ComputerRegisterRouter.post("/", (req, res) => {
  console.log(req.body);

  Computers.update({ _id: req.body.id }, {
    $set: {
      hostname: req.body.hostname,
      power: true,
      address: req.body.address,
      ipAddress: req.body.ipAddress,
      isRegistered: (req.body.isRegistered === "True"),
      lastContact: new Date().toISOString()
    }
  }, { upsert: true });

  res.send("Received your request");
});