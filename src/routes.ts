// src/routes.ts

// pages
import NewGames from "./pages/NewGames";
import Slots from "./pages/Slots";
import TopGames from "./pages/TopGames";

// other
import { FC } from "react";

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "new-Games",
    title: "New Games",
    path: "/",
    enabled: true,
    component: NewGames,
  },
  {
    key: "-route",
    title: "Top Games",
    path: "/topgames",
    enabled: true,
    component: TopGames,
  },
  {
    key: "slots-route",
    title: "Slots",
    path: "/slots",
    enabled: true,
    component: Slots,
  },
];
