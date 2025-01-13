import { z } from 'zod'
import { Request } from 'express'

export const HelloWorldValidation = (req: Request) => {
    return z.object({

<<<<<<< HEAD
        message: z.string()
            .regex(/^[^<>&'"/]+$/, req.t("contains_disallowed_characters"))
            .max(255, req.t("contains_too_many_characters"))
            .default(req.t("helloworld")),
=======
>>>>>>> 68dbf44 ([FEATURE]: Create wallet)

    })
}

export type HelloWorldValidationType = z.infer<ReturnType<typeof HelloWorldValidation>> 
