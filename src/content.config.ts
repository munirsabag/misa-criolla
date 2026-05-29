import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const agenda = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/agenda' }),
  schema: z.object({
    cidade: z.string(),
    estado: z.string(),
    data: z.coerce.date(),
    hora: z.string(),
    local: z.string(),
    endereco: z.string(),
    coro: z.string(),
    ingressos: z.string().optional(),
    ingressoTipo: z.string().default('Gratuito'),
    mostrarIngresso: z.boolean().default(true),
    feed: z.string().optional(),
    ordem: z.number().default(0),
    tipo: z.enum(['show', 'workshop']).default('show'),
  }),
});

export const collections = { agenda };
