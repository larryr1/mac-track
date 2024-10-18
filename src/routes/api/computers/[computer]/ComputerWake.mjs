import { Computers } from "../../../../database.mjs";
import { EnsureLocalConnection } from "../../../../lib/EnsureLocalConnection.mjs";
import { ParameterizedRouter } from "../../../../lib/ParameterizedRouter.mjs";
import { wake } from "wake_on_lan";
import { networkInterfaces } from "os";
import broadcastAddress from "broadcast-address";

export const ComputerWakeRouter = ParameterizedRouter();

// Get all local interfaces below
console.log(networkInterfaces());

const bdcast = broadcastAddress("vEthernet (Default Switch)");

ComputerWakeRouter.get("/", (req, res) => {
  Computers.findOne({ _id: req.params.id }, (err, doc) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    try {
      wake(doc.address, { address: bdcast }, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }

        console.log(`Sent wake packet to ${doc.hostname} at ${doc.address}`);

        res.json({ success: true });
      });
    } catch (error) {
      console.log(`Error waking computer ${doc.hostname} at ${doc.address}`);
    }
    
  });
});