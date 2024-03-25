"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xlsx = require("xlsx");
var fs = require("fs");
var filePath = "./pbm.xlsx";
var jsonFilePath = "./pbm.json";
var file = xlsx.readFile(filePath);
var worksheet = file.Sheets[file.SheetNames[0]];
var jsonData = xlsx.utils.sheet_to_json(worksheet);
var jsonConvertDataString = [];
jsonData.forEach(function (i) {
    jsonConvertDataString.push({
        ean: i.ean.toString(),
        medicamento: i.medicamento,
        industria: i.industria,
        plataforma: i.plataforma,
        desc_paciente: i.desc_paciente.toString(),
        obs_desconto: i.obs_desconto || "",
        programa: i.programa,
        tel_cadastro: i.tel_cadastro,
        link_cadastro: i.link_cadastro,
    });
});
console.log(jsonConvertDataString);
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonConvertDataString));
console.log("Convert Successfully!!!");
