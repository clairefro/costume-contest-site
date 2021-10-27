import React from "react";

import Api from "../utils/Api";

interface IAppContext {
  api: Api;
}

export const api = new Api();

const AppContext = React.createContext<IAppContext>({ api });

export { AppContext };
