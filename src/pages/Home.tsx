import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { CostumeCard } from "../components/CostumeCard";
import { AppContext } from "../context/AppContext";

interface Contestant {
  id: string;
  name: string;
  costumeTitle: string;
  costumeImgUrl: string;
  city: string;
  country: string;
  votes: number;
}

const Home: FC = () => {
  const unmounted = useRef(false);
  const [contestants, setContestants] = useState<Contestant[]>([]);
  const { api } = useContext(AppContext);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    const getContestants = async (): Promise<void> => {
      const res = (await api.getContestants()) as Contestant[];
      // TODO: Fix memory leak
      // for preventing memory leak
      if (!unmounted.current) {
        setContestants(res);
      }
    };

    getContestants();

    return () => {
      setContestants([]);
    };
  }, []);

  useEffect(() => {
    console.log(contestants);
  }, [contestants]);

  return (
    <div>
      <p className="text-red-300 font-bold">This is the homepage</p>
      {contestants.map((c) => (
        <CostumeCard contestant={c} />
      ))}
    </div>
  );
};

export default Home;
