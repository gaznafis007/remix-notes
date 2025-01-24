import { useRouteError } from '@remix-run/react';
// import { getNotes } from '../data';

const NoteDetails = () => {
    // const note = useLoaderData()
    return (
        <div className='bg-gray-900 p-4 rounded-md space-y-3'>
           <h1 className="text-5xl text-center text-purple-500">Title:</h1> 
           <p className="text-xl text-center text-purple-500">-Author</p> 
            <p className="border border-white rounded-md p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid veritatis commodi, deserunt sequi voluptas laudantium iusto voluptatum eaque quis autem optio harum, aliquam totam pariatur recusandae repellat modi minima perferendis aut expedita aperiam enim! Sequi doloribus consequuntur saepe quo fugiat explicabo reiciendis iure esse non. Aliquam labore repellendus aliquid!</p>
           {/* <h1 className="text-5xl text-center text-purple-500">Title:{note?.title}</h1> 
           <p className="text-xl text-center text-purple-500">-{note?.author}</p> 
            <p className="border border-white rounded-md p-2">{note?.description}</p> */}
        </div>
    );
};

export default NoteDetails;

// export async function loader({params}){
//     const notes = await getNotes();
//     const noteId = params.noteId;
//     const selectedNote = notes.find(note => note.id === noteId);
//     return selectedNote;
// }

export function ErrorBoundary(){
    const error = useRouteError();
    console.log(error, "error")
    return (
        <div className="p-4 text-center text-red-500">
            <h1>Error</h1>
            <p>{error.message || "Something went wrong."}</p>
        </div>
    );
}