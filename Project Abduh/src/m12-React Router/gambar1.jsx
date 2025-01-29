import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createHashRouter,
} from "react-router-dom";
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around bg-gray-100 p-4">
      <Link
        to="/"
        className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-xl text-blue-500 hover:text-blue-700 hover:underline"
      >
        About
      </Link>
    </nav>
  );
}
function HomePage() {
  console.log("HomePage rendered");
  return (
    <>
      <Navigation />
      <div className="mt-16">
        <h1 className="text-3xl font-bold underline">Halaman Utama</h1>
        <p className="text-lg">
          Halaman ini adalah halaman utama yang berisi informasi tentang React
          Router.
        </p>
      </div>
    </>
  );
}
function Testing() {
  return (
    <>
      <h1>testing</h1>
    </>
  );
}
function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="mt-16">
        <h1 className="text-3xl font-bold underline">Halaman About</h1>
        <p className="text-lg">
          Halaman ini adalah halaman about yang berisi informasi tentang
          pengembang React Router.
        </p>
      </div>
    </>
  );
}
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">404 Not Found</h1>
      <p className="text-lg">Halaman tidak ditemukan</p>
      <Link to="/" className="text-blue-500 underline">
        Kembali ke halaman utama
      </Link>
    </div>
  );
}
export function App4() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // errorElement: <NotFoundPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/testing",
      element: <Testing />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
