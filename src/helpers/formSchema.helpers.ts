import { z } from "zod";

// List of regex and errors
const required = {
  regex: /(^$|^.*@.*\..*$)/,
  errorMsg: "This field is required"
};
const gitHubUsernameRegex = {
  regex: /^(?!.*--)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/,
  errorMsg: "As GitHub username, only alphanumeric characters or hyphens are allowed, but no multiple consecutive hyphens."
};
const maxUsernameLength = {
  errorMsg: "Max length allowed is 39 characters"
};

// Zod Schema
// source: https://zod.dev/
export const formSchema = z.object({
  username: z
    .string()
    .min(1, required.errorMsg)
    .max(39, maxUsernameLength.errorMsg)
    .refine((value) => gitHubUsernameRegex.regex.test(value), {
      message: gitHubUsernameRegex.errorMsg
    })
});