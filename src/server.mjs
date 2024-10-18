import express from 'express';
import { Computers } from './database.mjs';
import { MainRouter } from './routes/index.mjs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl} ${req.socket.remoteAddress}`);
  next();
});

app.use("/", MainRouter);

app.get("/automated_wakeall", (req, res) => {
  setTimeout(() => {
    res.send("Test response");
  }, 60000);
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});
server.setTimeout(60000);