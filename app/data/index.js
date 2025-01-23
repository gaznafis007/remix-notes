import fs from 'fs/promises';
export const getNotes = async () =>{
    const noteStorage = await fs.readFile('notes.json', {encoding: 'utf-8'});
    const res = await JSON.parse(noteStorage);
    const data = res.notes ?? []
    return data;
}

export const updateNotes =  (notes) =>{
    return fs.writeFile('notes.json', JSON.stringify({notes: notes || []}));
}