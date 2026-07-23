import { z } from "zod";

export function createContactSchema(errors: {
  name: string;
  contact: string;
  message: string;
}) {
  return z.object({
    name: z.string().min(1, errors.name),
    contact: z.string().min(1, errors.contact),
    message: z.string().min(1, errors.message),
  });
}

export type ContactValues = {
  name: string;
  contact: string;
  message: string;
};
