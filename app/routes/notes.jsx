import { redirect } from "@remix-run/node";
import CreateNote from "../components/CreateNote";
import { getNotes, updateNotes } from "../data";


const NotesPage = () => {
    // const handleNoteSubmit = (event) =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const note = {
    //         name: form.name.value,
    //         author: form.author.value,
    //         date: form.date.value,
    //         description: form.description.value
    //     }
    //     console.log(note)
    // }
    return (
        <div>
            <h2 className="text-4xl text-purple-500 text-center">Create and access you notes</h2>
            <p className="mt-4 text-white">If you want to create a note please the fill up the form below and click create note to make a note</p>
            <CreateNote/>
        </div>
    );
};

export default NotesPage;

export async function action ({request}){
    const formData = await request.formData();
    console.log(formData)
    const noteData = Object.fromEntries(formData);
    // can add validation here
    const allNotes = await getNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = allNotes.concat(noteData);
    await updateNotes(updatedNotes);
    
    return redirect('/')
}
// export function links (){
//     return [...noteLinks()]
// }
