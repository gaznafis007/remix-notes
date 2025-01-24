/* eslint-disable react/prop-types */
import { json, redirect } from "@remix-run/node";
import { getNotes, updateNotes } from "../data";
import { isRouteErrorResponse, Link, useLoaderData, useRouteError } from "@remix-run/react";
import CreateNote from "../components/CreateNote";
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
                        notes.map(note =>(<Link  key={note?.id} to={`/notes/${note.id}`}>
                            <NoteCard note={note}></NoteCard>
                        </Link>))
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
    const noteData = Object.fromEntries(formData);
    if(!noteData.title || !noteData.author || !noteData.date || !noteData.description){
        return json(
            {message: 'Please Fill all the fields.'}, 
            {status: 400, statusText: 'Bad Request'}
        )
    }
    if(noteData.title.length < 3){
        return {message: "Title must be atleast 3 characters long."}
    }
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

export function ErrorBoundary() {
    // console.log(error);
    const error = useRouteError()
    if(isRouteErrorResponse(error)){
        <section className="bg-gray-900 p-4 rounded-md w-96 mx-auto">
        <h1  className="text-4xl text-red-500 text-center">Error {error.status}: {error.statusText}</h1>
        <p className="text-purple-600 text-center mt-4">{error.data?.message || "Something went wrong."}</p>
        <Link className="text-white mt-4 text-center block text-xl hover:underline" to='/'>Go back</Link>
      </section>
    }
    return (
      <section className="bg-gray-900 p-4 rounded-md w-96 mx-auto">
        <h2 className="text-4xl text-red-500 text-center">Error 404!</h2>
        <p className="text-purple-600 text-center mt-4">{error?.message || 'An error occurred'}</p>
        <Link className="text-white mt-4 text-center block text-xl hover:underline" to='/'>Go back</Link>
      </section>
    );
  }
  