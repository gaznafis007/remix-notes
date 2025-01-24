import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Remix Note</title>
      </head>
      <body>
        <Navbar />

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return (
    <div className="mx-6 md:mx-8">
      <Outlet />
    </div>
  );
}
export function ErrorBoundary() {
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
      <p className="text-purple-600 text-center mt-4">{String(error) || 'An error occurred'}</p>
      <Link className="text-white mt-4 text-center block text-xl hover:underline" to='/'>Go back</Link>
    </section>
  );
}
