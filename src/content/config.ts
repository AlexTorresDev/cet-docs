import { z, defineCollection } from "astro:content";

const docs = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
    })
});

export const collections = { docs }