import {z} from 'zod'; export const analysisSchema=z.object({targetRole:z.string().trim().min(2).max(100).default('Software Developer')});
