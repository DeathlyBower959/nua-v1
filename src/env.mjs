import { createEnv } from '@t3-oss/env-nextjs';
// import { z } from 'zod';

export const env = createEnv({
  server: {
    // SERVER_VAR: z.string(),
  },
  client: {
    // NEXT_PUBLIC_CLIENT_VAR: z.coerce.number(),
  },
  runtimeEnv: {
    // SERVER_VAR: process.env.SERVER_VAR,
    // NEXT_PUBLIC_CLIENT_VAR: process.env.CLIENT_VAR,
  },
});
