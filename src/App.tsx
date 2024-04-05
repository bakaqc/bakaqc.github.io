import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <RingLoader
            color={"#29d9f6"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="main">
            <Home />
            <About />
          </main>
        </>
      )}
    </>
  );
};

export default App;
