import { ServerController } from "./controllers/ServerController";
const main = async () => {
    const server = new ServerController();
    server.start();
}
main();