import express from 'express';
import health from "./routes/health-router.js";
import createPessoa from "./routes/create-pessoa-route.js";
import readPessoas from "./routes/read-pessoas-route.js";
import putPessoa from "./routes/update-pessoa-route.js"
import delPessoa from "./routes/delete-pessoa-route.js"
import { startDB } from "./utilities/dbConnection.js";

console.clear();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
	console.log('-- Server ON --');
	startDB();
	app.use("/api", createPessoa);
	app.use("/api", health);
	app.use("/api", readPessoas);
	app.use("/api", putPessoa)
	app.use("/api", delPessoa)
});

  