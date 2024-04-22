import { Response } from 'express';
const xml = require('xml2js');

export default function returnParser(isXML: boolean, data: any, res: Response) {
  if (isXML) {
    const builder = new xml.Builder({
      renderOpts: { pretty: false },
    });

    res.status(200).send(builder.buildObject(data));
  } else {
    res.status(200).json(data);
  }
}
