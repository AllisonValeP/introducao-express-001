const express = require("express");
const app = express();
const port = 3000;

app.get("/",(request, response)=>{
   console.log(request);
    response.send("Helloworld!")
});
app.post("/frutas", (request, response)=>{
    response.send("Frutas");
})
app.listen(port,()=>{
    console.log("O servidoer esta rodando parceiro, na porta " + port)
});
