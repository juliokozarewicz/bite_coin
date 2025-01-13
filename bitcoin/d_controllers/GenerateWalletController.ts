import { NextFunction, Request, Response } from 'express';
import { GenerateWalletService } from '../c_services/GenerateWalletService';
import { GenerateWalletValidation } from '../b_validations/GenerateWalletValidation';

export class GenerateWalletController {

  async handle(

    req: Request,
    res: Response,
    next: NextFunction

  ): 

  Promise<void> 

  {

    try {

      // validation
      const wordsCap = {
        "words": parseFloat(req.query['words'] as string) || 12
      }

      const validatingData =  GenerateWalletValidation(req).parse(wordsCap)

      // data object
      const validatedData = {
        words: validatingData.words
      }

      // call execute
      const callExecute = new GenerateWalletService(req.t);
      const response = await callExecute.execute(validatedData)

      //response
      res.status(response.code).json(response)

    } catch (error) {

      next(error)

    }

  }
}