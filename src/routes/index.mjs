import { EnsureLocalConnection } from "../lib/EnsureLocalConnection.mjs";
import { ParameterizedRouter } from "../lib/ParameterizedRouter.mjs";
import { ApiRouter } from "./api/index.mjs";

export const MainRouter = ParameterizedRouter();

MainRouter.use("/api", ApiRouter);

MainRouter.get("/", (req, res) => {
  res.sendFile("src/views/index.html", { root: process.cwd() });
});