"use strict";

import FormatterInterface from "./FormatterInterface";
import ProductList from "../Entity/ProductList";
import ProductInterface from "../Entity/ProductInterface";

export default class ConsoleOutput implements FormatterInterface {

    print(list: ProductList<ProductInterface>): void {
        console.log('--- Receipt ---');

        list.forEach(
            product => {
                console.log(
                    `${product.name} - ${product.quantity} X ${product.getPriceWithTax().toFixed(2)} = ${product.getTotalWitTax().toFixed(2)}`
                )
            }
        )

        console.log('---');
        console.log(`Sales taxes: ${list.getTaxes().toFixed(2)}`);
        console.log('---');
        console.log(`Total: ${list.getTotalWithTax().toFixed(2)}`);
        console.log('--- end ---');
    }
}
