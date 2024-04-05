import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="loading">
        <PuffLoader color={"#29d9f6"} loading={loading} />
      </div>
    </>
  );
};

export default Loading;
