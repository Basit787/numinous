import ENV from "@/lib/env";

const Base_Url = ENV.BaseUrl;

export const ApiEndpoints = {
  email: () => `${Base_Url}/api/email`,
};
