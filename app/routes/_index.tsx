import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate()
  const handleLink = () =>{
    navigate('/notes');
  }
  return (
    <div className="mx-6 md:mx-8">
      <h2 className="text-6xl text-center text-purple-500 font-semibold">Remix Notes</h2>
      <p className="mt-4 text-white text-xl">This is an remix practice app where your all the notes will be taken care of
        and you can manage them efficiently. This app is built with Remix to provide a seamless experience for note-taking and organization. Enjoy using Remix Notes!
      </p>
      <button onClick={handleLink} className="mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-md">Go to notes</button>
    </div>
  );
}
