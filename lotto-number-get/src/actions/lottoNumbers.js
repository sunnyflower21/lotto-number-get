export const CREATE_NEW_NUMBER = "CREATE_NEW_NUMBER";
import { getRandomSixNumber } from "../utils/utils";

export const createNewNumbers = () => {
  const numbers = getRandomSixNumber();

  return {
    type: CREATE_NEW_NUMBER,
    numbers,
  };
};
