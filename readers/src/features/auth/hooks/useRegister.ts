import { registerUser } from "../api/register";
import type { FormEvent } from "react";
import type { RegisterData } from "../types/types";

export function useRegister() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const username = form.get("username");
    const fullName = form.get("fullName");
    const password = form.get("password");
    const confirmPass = form.get("confirmPass");

    if (
      typeof username !== "string" ||
      typeof fullName !== "string" ||
      typeof password !== "string" ||
      typeof confirmPass !== "string"
    ) {
      throw new Error("Invalid form submission");
    }

    const requiredData: RegisterData = {
      username,
      fullName,
      password,
      confirmPass,
    };
    await registerUser(requiredData);
  };

  return { handleSubmit };
}
