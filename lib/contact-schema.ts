import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên"),
  contact: z.string().min(1, "Vui lòng nhập email hoặc Zalo"),
  message: z.string().min(1, "Vui lòng mô tả ngắn dự án"),
});

export type ContactValues = z.infer<typeof contactSchema>;
