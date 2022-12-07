import { Request, Response, Router } from "express";
import { Readable } from 'stream';
import readline from 'readline';
import multer from 'multer';
import { client } from "./database/client";


const multerConfig = multer();

const router = Router();

type ExamesProps = {
  paciente: string;
  protocolo: string;
  medico: string;
  exame: string;
  tipo_exame: string

}

router.post("/exames", multerConfig.single('file'), async (request: Request, response: Response) => {

  const { file } = request;
  const { buffer } = file as any;

  const archiveRow = buffer.toString().split("\n");
  const archiveRowConcatenate = archiveRow.toString().split("\r").join("")


  const readableFile = new Readable();
  readableFile.push(archiveRowConcatenate);
  readableFile.push(null);

  const rl = readline.createInterface({
    input: readableFile,
  });

  const exames: ExamesProps[] = [];

  for await (let line of rl) {
    const lineSplit = line.toString().split(',')
    exames.push({
      paciente: lineSplit[0],
      protocolo: lineSplit[1],
      medico: lineSplit[2],
      exame: lineSplit[3],
      tipo_exame: lineSplit[4]

    })
  }
       
  for await (let {paciente, protocolo, medico, exame, tipo_exame} of exames) {

    await client.exames.create({
      data: {
        paciente,
        protocolo,
        medico,
        exame,
        tipo_exame
      }
    })
  }

  return response.json(exames);
})


export { router };