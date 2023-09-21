import { z } from 'zod';

export const settingsSchema = z.object({});
export type ISettings = z.infer<typeof settingsSchema>;
