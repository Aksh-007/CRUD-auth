import app from "./app.js";
const Port = process.env.Port || 4000;

app.listen(Port, () => {
    console.log(`app is listening on local http://localhost:${Port}/`);
});