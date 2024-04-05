import React, { Suspense } from "react";
import "./Home.scss";
import Loading from "../common/Loading";

const Social = React.lazy(() => import("./Social"));
const Data = React.lazy(() => import("./Data"));
const ScrollDown = React.lazy(() => import("./ScrollDown"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {" "}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social />
              <div className="home__img"></div>
              <Data />
            </div>
            <ScrollDown />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Home;
