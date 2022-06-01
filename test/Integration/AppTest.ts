"use strict";

import ProductList from "../../src/Entity/ProductList";
import Product from "../../src/Entity/Product";
import * as assert from "assert";
import TaxService from "../../src/TaxService/TaxService";
import MockFormatter from "../stub/MockFormatter";
import App from "../../src/App";

describe('App test', function () {
    describe('Test output', function () {
        it('should return 1 item in list', function () {
            const list = new ProductList([
                new Product({})
            ]);

            const taxService = new TaxService([]);
            const formatter = new MockFormatter((list) => {
                assert.equal(list.size, 1);
            });

            const app = new App(taxService, formatter);

            app.run(list);
        });
    });
});
