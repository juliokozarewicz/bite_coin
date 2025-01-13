import { NextFunction, Request, Response } from 'express';
import { escape } from 'lodash'
import { HelloWorldValidation } from '../b_validations/HelloWorldValidation';
import { GenerateWalletService } from '../c_services/GenerateWalletService';

export class GenerateWalletController {

  async handle(

    req: Request,
    res: Response,
    next: NextFunction

  ): 
  
  Promise<void> 
  
  {

    try {

      // call execute
      const callExecute = new GenerateWalletService(req.t);
      const response = await callExecute.execute()

      //response
      res.status(response.code).json(response)

    } catch (error) {

      next(error)

    }

  }
}