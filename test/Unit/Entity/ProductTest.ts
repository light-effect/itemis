"use strict";

import * as assert from "assert";
import Product from "../../../src/Entity/Product";
import {ProductType} from "../../../src/Enum/ProductType";

describe('Product entity test', function () {
    describe('Test calculations', function () {
        const product = new Product({
            "name": "Clean code: Robert Martin",
            "type": ProductType.Book,
            "price": 12.49,
            "quantity": 2,
            "tax": 0.7,
            "imported": false
        });

        it('should return correct price with tax', function () {
            assert.equal(product.getPriceWithTax(), 13.19);
        });

        it('should return correct total price', function () {
            assert.equal(product.getTotalWitTax(), 26.38);
        });
    });
});
