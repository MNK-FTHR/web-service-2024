"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml = require('xml2js');
function returnParser(isXML, data, res) {
    if (isXML) {
        const builder = new xml.Builder({
            renderOpts: { pretty: false },
        });
        res.status(200).send(builder.buildObject(data));
    }
    else {
        res.status(200).json(data);
    }
}
exports.default = returnParser;
