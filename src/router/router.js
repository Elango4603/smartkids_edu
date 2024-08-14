import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Spinner from '../components/Spinner';


const Layout = lazy(() => import('../layout'));
const MainPage = lazy(() => import("../pages/mainpage/MainPage"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Careers = lazy(() => import("../pages/careers/Careers"));
const Courses = lazy(() => import("../pages/courses/Courses"));
const ErrorPage = lazy(() => import("../pages/404page/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div> <Spinner /> </div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<div><Spinner /></div>}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<div><Spinner /></div>}>
            <Courses />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div><Spinner /></div>}>
            <Contact />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/careers",
        element: (
          <Suspense fallback={<div><Spinner /></div>}>
            <Careers />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <Navigate to="/errorpage" />,
      },
      {
        path: "/errorpage",
        element: (
          <Suspense fallback={<div><Spinner /></div>}>
            <ErrorPage />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);


// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }


// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./pages/layout";
// import Home from "./pages/home";
// import Career from "./pages/career";
// import Contact from "./pages/contact";
// import Skills from "./pages/skills";
// import Projects from "./pages/projects";

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/career",
//           element: <Career />,
//         },
//         {
//           path: "/skills",
//           element: <Skills />,
//         },
//         {
//           path: "/projects",
//           element: <Projects />,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//         },
//       ],
//     },
//   ]);
