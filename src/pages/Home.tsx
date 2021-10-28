import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CostumeCard } from "../components/CostumeCard";
import { AppContext } from "../context/AppContext";

const Home: FC = () => {
  const mounted = useRef(true);
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const { api } = useContext(AppContext);

  useEffect(() => {
    return () => {
      mounted.current = false;
      console.log("unmounted");
    };
  }, []);

  const getContestants = useCallback(async (): Promise<void> => {
    try {
      console.log("1", mounted.current);
      const res = await api.getContestants();
      if (mounted.current) {
        setContestants(res);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    let didCancel = false;

    if (!didCancel) {
      getContestants();
    }

    return () => {
      didCancel = true;
    };
  }, []);

  useEffect(() => {
    console.log(contestants);
  }, [contestants]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-gap-2 p-4">
        {contestants.map((c) => (
          <CostumeCard contestant={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
