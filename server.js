var server = require("./customServer")();

var server = server.listen(3000, function () {
    console.log("Servidor rodando");
});
