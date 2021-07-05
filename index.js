const Hapi = require("@hapi/hapi");
const routes = require("./scripts/routes");

(async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    await server.register({
        plugin: require("hapi-mongodb"),
        options: {
            url: "mongodb+srv://andremaesha:andremaesha150@mongodbfirst.pdq0d.mongodb.net/SBJ?retryWrites=true&w=majority",
            settings: {
                useUnifiedTopology: true,
            },
            decorate: true,
        },
    });

    server.route(routes);

    await server.start();
})();
