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
import { useStateIfMounted } from "../utils/useStateIfMounted";

const Home: FC = () => {
  const [contestants, setContestants] = useStateIfMounted<Contestant[]>([]);
  const { api } = useContext(AppContext);

  useEffect(() => {
    const getContestants = async (): Promise<void> => {
      try {
        const res = await api.getContestants();

        setContestants(res);
      } catch (err) {
        console.error(err);
      }
    };

    getContestants();
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
