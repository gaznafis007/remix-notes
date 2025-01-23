import Button from "./Button";
const CreateNote = () => {
    return (
        <form method="post" className="md:w-1/2 md:mx-auto p-4 rounded-md bg-gray-900 mt-6 flex flex-col space-y-4">
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
    );
};

export default CreateNote;


// export function noteLinks(){
//     return [...btnLinks()]
// }