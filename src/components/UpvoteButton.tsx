import React, { FC, useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Props {
  contestant: Contestant;
  onSuccess: (votes: number) => void;
}

const UpvoteButton: FC<Props> = ({ contestant, onSuccess }: Props) => {
  const { votes, id } = contestant;
  const { api } = useContext(AppContext);

  const handleClick = () => {
    console.log("clicked");
    api
      .upvote(id)
      .then(({ votes }: any) => onSuccess(votes))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <span>{votes}</span>
      <button onClick={handleClick}>▲</button>
    </div>
  );
};

export { UpvoteButton };
