import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

import mypageRouter from "./mypageRouter";
import communityRouter from "./communityRouter";

const Main = lazy(() => import("../page/main"));

const Achievement = lazy(() => import("../page/achievement"));
const Community = lazy(() => import("../page/community"));
const Mypage = lazy(() => import("../page/mypage"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...mypageRouter,
      ...communityRouter,
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "achievement",
        element: (
          <Suspense fallback={<Loading />}>
            <Achievement />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<Loading />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: "mypage",
        element: (
          <Suspense fallback={<Loading />}>
            <Mypage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
