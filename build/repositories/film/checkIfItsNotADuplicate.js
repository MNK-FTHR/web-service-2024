"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIfItsNotADuplicate(film, films) {
    let lastID = films[films.length - 1].id;
    let filmToCheck = { id: ++lastID, ...film };
    for (let x in films) {
        if (films.hasOwnProperty(x) && films[x].nom === filmToCheck.nom) {
            if (films.hasOwnProperty(x) && films[x].description === filmToCheck.description) {
                return null;
            }
        }
    }
    return filmToCheck;
}
exports.default = checkIfItsNotADuplicate;
