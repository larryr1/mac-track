import { ParameterizedRouter } from "../../lib/ParameterizedRouter.mjs";
import { ComputersRouter } from "./ComputersRoute.mjs";

export const ApiRouter = ParameterizedRouter();

ApiRouter.use("/computer", ComputersRouter);
