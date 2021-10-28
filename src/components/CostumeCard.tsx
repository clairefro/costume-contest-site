import React, { FC } from "react";
import { UpvoteButton } from "./UpvoteButton";

interface Props {
  contestant: Contestant;
}

const CostumeCard: FC<Props> = ({ contestant }: Props) => {
  const { costumeImgUrl, costumeTitle, votes } = contestant;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${costumeImgUrl})` }}
        className="h-32 w-24 bg-center bg-cover"
      ></div>
      <div>
        <p>{costumeTitle}</p>
        <UpvoteButton
          contestant={contestant}
          onSuccess={() => console.log("success")}
        />
      </div>
    </div>
  );
};

export { CostumeCard };
