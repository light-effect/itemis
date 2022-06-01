"use strict";

import FormatterInterface from "../../src/Formatter/FormatterInterface";
import ProductList from "../../src/Entity/ProductList";
import ProductInterface from "../../src/Entity/ProductInterface";

export default class MockFormatter implements FormatterInterface {

    private readonly callback;

    constructor(callback) {
        this.callback = callback;
    }

    print(list: ProductList<ProductInterface>): void {
        this.callback(list);
    }
}
