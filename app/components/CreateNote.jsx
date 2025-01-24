import { Form, useActionData, useNavigation } from "@remix-run/react";
import Button from "./Button";
const CreateNote = () => {
  const navigation = useNavigation();
//   console.log(navigation.state)
  const isLoading = navigation.state === "submitting";
  const data = useActionData();
  return (
    <Form
      method="post"
      className="md:w-1/2 md:mx-auto p-4 rounded-md bg-gray-900 mt-6 flex flex-col space-y-4"
    >
      <h2 className="text-3xl text-white text-center">Create Your Note</h2>
      { data?.message && <p className="text-red-500 text-lg">{data.message}</p>}
      <div className="flex flex-col space-y-3">
        <label className="text-purple-500" htmlFor="title">
          Note Title
        </label>
        <input
          type="text"
          name="title"
          className="p-2 rounded-md bg-gray-950"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-purple-500" htmlFor="author">
          Creator name
        </label>
        <input
          type="text"
          name="author"
          className="p-2 rounded-md bg-gray-950"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-purple-500" htmlFor="date">
          Date
        </label>
        <input type="date" name="date" className="p-2 rounded-md bg-gray-950" />
      </div>
      <div className="flex flex-col space-y-3">
        <label className="text-purple-500" htmlFor="description">
          Write the Note
        </label>
        <textarea
          type="text"
          name="description"
          className="p-4 rounded-md bg-gray-950"
        ></textarea>
      </div>
      <Button>{isLoading ? "Submitting" : "Create Note"}</Button>
    </Form>
  );
};

export default CreateNote;

// export function noteLinks(){
//     return [...btnLinks()]
// }
