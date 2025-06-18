import { ApiEndpoints } from "./config";

export const sendEmail = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  const response = await fetch(ApiEndpoints.email(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  console.log(response);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message ?? `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
};
