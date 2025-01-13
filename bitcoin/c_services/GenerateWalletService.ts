import { HelloWorldValidationType } from "../b_validations/HelloWorldValidation";
import { StandardResponse } from "../f_utils/StandardResponse"
import * as bip39 from 'bip39'

export class GenerateWalletService {

    private t: (key: string) => string;
    constructor(t: (key: string) => string) {
        this.t = t;
    }

    async execute(): Promise<StandardResponse> {

        // generate seeds (12)
        const mnemonic = bip39.generateMnemonic()

        return {
            "status": 'success',
            "code": 200,
            "message": `${this.t('generate_wallet_ok')}`,
            "data": [{
                "seeds": mnemonic,
                "pubAdress": `address`
            }],
            "links": {
                "self": '/helloworld/helloworld',
            }
        }

    }
}