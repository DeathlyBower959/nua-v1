import { z } from 'zod';

export const settingsSchema = z.object({
  sidebar: z.boolean(),
});
export type ISettings = z.infer<typeof settingsSchema>;
