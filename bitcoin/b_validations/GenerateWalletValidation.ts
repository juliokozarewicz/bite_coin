import { z } from 'zod'
import { Request } from 'express'

export const GenerateWalletValidation = (req: Request) => {
    return z.object({

        words: z.number()
            .int()
            .min(12, req.t("bad_request"))
            .max(24, req.t("bad_request"))
            .optional()

    })
}

export type GenerateWalletValidationType = z.infer<ReturnType<typeof GenerateWalletValidation>> 
