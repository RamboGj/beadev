import { z } from "zod";

const _env = z.object({
	NEXT_PUBLIC_GA_ID: z.string(),
});

const safeEnv = _env.safeParse({
	NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
});

if (!safeEnv.success) throw new Error("Envs failed");

export const env = safeEnv.data;
