import { request, Request, Response, Router } from "express";
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

router.get("/exames", multerConfig.single('file'), async(req: Request, res: Response) => {

  const dataExams = await client.exames.findMany();

  return res.json(dataExams);
})

router.post("/exames", multerConfig.single('file'), async (req: Request, res: Response) => {

  const { file } = req;
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
      tipo_exame: lineSplit[5]

    })
    console.log(lineSplit)
  }

       
  //for await (let {paciente, protocolo, medico, exame, tipo_exame} of exames) {

  //   await client.exames.create({
  //     data: {
  //       paciente,
  //       protocolo,
  //       medico,
  //       exame,
  //       tipo_exame
  //     }
  //   })
  //}

  return res.json(exames);
})


export { router };