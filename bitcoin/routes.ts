import { Router } from 'express'
<<<<<<< HEAD
import { HelloWorldController } from './d_controllers/HelloWorldController'
=======
import { GenerateWalletController } from './d_controllers/GenerateWalletController'
>>>>>>> 68dbf44 ([FEATURE]: Create wallet)

const routes = Router()

// instances
<<<<<<< HEAD
const helloWorldController = new HelloWorldController()

// routes
routes.get('/helloworld', helloWorldController.handle.bind(helloWorldController))
=======
const generateWalletController = new GenerateWalletController()

// routes
routes.get('/generate-wallet', generateWalletController.handle.bind(generateWalletController))
>>>>>>> 68dbf44 ([FEATURE]: Create wallet)

export default routes