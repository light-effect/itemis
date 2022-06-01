"use strict";

import * as assert from "assert";
import Product from "../../../src/Entity/Product";
import {ProductType} from "../../../src/Enum/ProductType";
import ProductList from "../../../src/Entity/ProductList";

describe('Product list entity test', function () {
    describe('Test calculations', function () {
        const productList = new ProductList([
            new Product({
                "name": "Clean code: Robert Martin",
                "type": ProductType.Book,
                "price": 12.49,
                "quantity": 2,
                "tax": 0.72,
                "imported": false
            }),
            new Product({
                "name": "Metallica: The Best",
                "type": ProductType.Other,
                "price": 14.99,
                "quantity": 1,
                "tax": 0.21,
                "imported": false
            })
        ]);

        it('Should return correct taxes', function () {
            assert.equal(productList.getTaxes(), 0.95);
        });

        it('Should return correct total', function () {
            assert.equal(productList.getTotal(), 27.48);
        });

        it('Should return correct total with taxes', function () {
            assert.equal(productList.getTotalWithTax(), 28.43);
        });
    });
});
