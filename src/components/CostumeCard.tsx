import React, { FC } from "react";

interface Props {
  contestant: Contestant;
}

const CostumeCard: FC<Props> = ({ contestant }: Props) => {
  const { costumeImgUrl, costumeTitle } = contestant;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${costumeImgUrl})` }}
        className="h-32 w-24 bg-center bg-cover"
      ></div>
      <div>{costumeTitle}</div>
    </div>
  );
};

export { CostumeCard };
