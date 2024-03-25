import * as xlsx from "xlsx";
import * as fs from "fs";

interface PBM {
  ean: string | number;
  medicamento: string;
  industria: string;
  plataforma: string;
  desc_paciente: string | number;
  obs_desconto?: string | null;
  programa: string;
  tel_cadastro: string;
  link_cadastro: string;
}

const filePath = "./pbm.xlsx";
const jsonFilePath = "./pbm.json";

const file = xlsx.readFile(filePath);

const worksheet = file.Sheets[file.SheetNames[0]];
const jsonData: PBM[] = xlsx.utils.sheet_to_json(worksheet);

const jsonConvertDataString: PBM[] = [];

jsonData.forEach((i: PBM) => {
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
