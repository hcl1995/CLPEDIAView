// TODO: stripe called in both server & client, client side have to redirect, any better method?
import { loadStripe } from '@stripe/stripe-js';

export class APIClient {
    _key: any;

    public init(callback: (result: any) => void) {
        fetch('/init', {
            method: 'GET'
        })
            .then(res => {
                res.json().then(result => {
                    Object.keys(result).forEach((e: any) => {
                        console.log('bruh: ' + result[e].image[0]);
                        const imageArr = new Uint8Array(result[e].image[0].data);
                        const blob = new Blob([imageArr], { type: 'image/png' });
                        result[e].image[0] = URL.createObjectURL(blob);
                    });

                    // console.log('init: ' + JSON.stringify(result));
                    callback(result);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    public stripePublishKey() {
        if (!this._key) {
            fetch('/stripe', {
                method: 'GET'
            })
                .then(res => {
                    res.text().then(result => {
                        this._key = result;
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    public async stripePayment() {
        try {
            const response = await fetch('/stripe_payment', {
                method: 'POST'
            });
            const session = await response.json();

            // NOTE: browser can't read environment variable.
            const stripe = (await loadStripe(this._key)) as any;
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) alert(result.error.message);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

let CLPEDIAAPIClient = new APIClient();
export { CLPEDIAAPIClient };
