export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error) {
    return (message = error.message);
  }
  if (error && typeof error === "object" && "message" in error) {
    return (message = String(error.message));
  }
  if (typeof error === "string") {
    return (message = error);
  }
  return (message = "Something went wrong");
};
