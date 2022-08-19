import { IFuel } from "./types";
import { Api } from "../../services/api";

export const getFuel = async () => {
  const request = await Api.get("fuel");

  return request.data;
};

export const updateFuel = async (fuel: IFuel) => {
  //ex fuel/1  ou fuel/2
  const request = await Api.put(`fuel/${fuel.id}`, fuel);

  return request.data;
};
