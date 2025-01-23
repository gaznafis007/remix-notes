import { redirect } from "@remix-run/node";
import CreateNote from "../components/CreateNote";
import { getNotes, updateNotes } from "../data";
import { useLoaderData } from "@remix-run/react";
import NoteCard from "../components/NoteCard";


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
    const notes = useLoaderData();
    // console.log(notes)
    return (
        <div>
            <h2 className="text-4xl text-purple-500 text-center">Create and access you notes</h2>
            <p className="mt-4 text-white">If you want to create a note please the fill up the form below and click create note to make a note</p>
            <CreateNote/>
            <div className="mt-8 md:mt-12">
                <h2 className="text-purple-500 text-4xl text-center">All Notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 md:my-8 items-center">
                    {
                        notes.map(note =>(<NoteCard key={note?.id} note={note}></NoteCard>))
                    }
                </div>
            </div>
        </div>
    );
};

export default NotesPage;

export async function loader(){
    const notes = await getNotes();
    // return json({notes})
    // return new Response(JSON.stringify(notes))
    return notes;
}
export async function action ({request}){
    const formData = await request.formData();
    console.log(formData)
    const noteData = Object.fromEntries(formData);
    // can add validation here
    const allNotes = await getNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = allNotes.concat(noteData);
    await updateNotes(updatedNotes);
    
    return redirect('/notes')
}
// export function links (){
//     return [...noteLinks()]
// }
