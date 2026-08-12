import { z } from "zod";

export const JOB_IDS = [
  "frontend",
  "mobile",
  "backend",
  "design",
  "sales",
  "marketing",
  "ai-engineer",
  "intern-fullstack",
  "fresher-tester",
  "partner-automation-test",
] as const;
export type JobId = (typeof JOB_IDS)[number];

export function createCareersSchema(errors: {
  name: string;
  contact: string;
  portfolio: string;
  role: string;
  message: string;
}) {
  return z.object({
    name: z.string().min(1, errors.name),
    contact: z.string().min(1, errors.contact),
    portfolio: z.string().min(1, errors.portfolio),
    role: z.enum(JOB_IDS, { message: errors.role }),
    message: z.string().min(1, errors.message),
    honeypot: z.string().optional(),
  });
}

export type CareersValues = {
  name: string;
  contact: string;
  portfolio: string;
  role: JobId;
  message: string;
  honeypot?: string;
};
