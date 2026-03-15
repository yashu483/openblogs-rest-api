import { api } from "@/lib/api";
import type { RegisterData } from "../types/types";

export const registerUser = async (data: RegisterData) => {
  console.log(data);

  return api("http://localhost:6004/auth/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
