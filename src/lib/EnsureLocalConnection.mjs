export const EnsureLocalConnection = (req, res, next) => {
  if (req.socket.remoteAddress !== "127.0.0.1" && req.socket.remoteAddress !== "::1" && req.socket.remoteAddress !== "::ffff:127.0.0.1") {
    res.status(403).send("Forbidden! This route is only accessible from localhost.");
    return;
  } else {
    next();
  }
};