namespace webcrypto.liner {

    export class LinerError extends WebCryptoError {
        code = 10;

        static MODULE_NOT_FOUND = "Module '%1' is not found. Download it from %2.\nOnly hash algorithms supported by the user agent will be supported.";
    }

    export class Crypto {

        subtle = new CryptoSubtle();
        getRandomValues = nativeCrypto.getRandomValues;

    }

}