import { GenerateWalletValidationType } from "../b_validations/GenerateWalletValidation";
import { StandardResponse } from "../f_utils/StandardResponse"
import * as bip39 from 'bip39'

export class GenerateWalletService {

    private t: (key: string) => string;
    constructor(t: (key: string) => string) {
        this.t = t;
    }

    async execute(
        validatedData: GenerateWalletValidationType
    ): Promise<StandardResponse> {

        // generate seeds
        let mnemonic: string

        if (validatedData.words === 24) {

            mnemonic = bip39.generateMnemonic(256)

        } else {

            mnemonic = bip39.generateMnemonic()

        }

        return {
            "status": 'success',
            "code": 200,
            "message": `${this.t('generate_wallet_ok')}`,
            "data": [{
                "seeds": mnemonic,
            }],
            "links": {
                "self": '/bitcoin/generate-wallet',
            }
        }

    }
}