import { Router } from 'express'
import { GenerateWalletController } from './d_controllers/GenerateWalletController'

const routes = Router()

// instances
const generateWalletController = new GenerateWalletController()

// routes
routes.get('/generate-wallet', generateWalletController.handle.bind(generateWalletController))

export default routes