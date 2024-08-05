import z from 'zod';


const environment = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']),
    URL_SHORTENER_API: z.string().url(),
});

export type Environment = z.infer<typeof environment>;

const processEnv = {
    NODE_ENV: import.meta.env.VITE_NODE_ENV,
    URL_SHORTENER_API: import.meta.env.VITE_URL_SHORTENER_API,
};

const parsed = environment.safeParse(processEnv);

if (!parsed.success) {
    console.error(parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
}

export const config = new Proxy(parsed.data, {
    get(target, prop) {
        if (typeof prop !== 'string') {
            return undefined;
        }

        return target[prop as keyof typeof target];
    },
});