import Button, {btnLinks} from "../components/Button";

const NotesPage = () => {
    const handleNoteSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const note = {
            name: form.name.value,
            author: form.author.value,
            date: form.date.value,
            description: form.description.value
        }
        console.log(note)
    }
    return (
        <div>
            <h2 className="text-4xl text-purple-500 text-center">Create and access you notes</h2>
            <p className="mt-4 text-white">If you want to create a note please the fill up the form below and click create note to make a note</p>
            <form action="" onSubmit={handleNoteSubmit} className="md:w-1/2 md:mx-auto p-4 rounded-md bg-gray-900 mt-6 flex flex-col space-y-4">
            <h2 className="text-3xl text-white text-center">Create Your Note</h2>
            <div className="flex flex-col space-y-3">
                <label className="text-purple-500" htmlFor="name">Name the note</label>
                <input type="text" name="name" className="p-2 rounded-md bg-gray-950" />
            </div>
            <div className="flex flex-col space-y-3">
                <label className="text-purple-500" htmlFor="name">Creator name</label>
                <input type="text" name="author" className="p-2 rounded-md bg-gray-950" />
            </div>
            <div className="flex flex-col space-y-3">
                <label className="text-purple-500" htmlFor="name">Date</label>
                <input type="date" name="date" className="p-2 rounded-md bg-gray-950" />
            </div>
            <div className="flex flex-col space-y-3">
                <label className="text-purple-500" htmlFor="name">Write the Note</label>
                <textarea type="text" name="description" className="p-4 rounded-md bg-gray-950"></textarea>
            </div>
            <Button>Create Note</Button>
            </form>
        </div>
    );
};

export default NotesPage;
export function links(){
    return [...btnLinks()]
}