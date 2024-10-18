import { Computers } from "../../../../database.mjs";
import { EnsureLocalConnection } from "../../../../lib/EnsureLocalConnection.mjs";
import { ParameterizedRouter } from "../../../../lib/ParameterizedRouter.mjs";

export const ComputerDeleteRouter = ParameterizedRouter();

ComputerDeleteRouter.delete("/", EnsureLocalConnection, (req, res) => {
  Computers.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({ success: false, error: err });
    }

    res.json({ success: true });
  });
});