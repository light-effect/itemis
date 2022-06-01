"use strict";

import Product from "../../src/Entity/Product";
import TaxService from "../../src/TaxService/TaxService";
import TaxStrategyFactory from "../../src/TaxService/Strategy/Factory/TaxStrategyFactory";
import {ProductType} from "../../src/Enum/ProductType";
import * as assert from "assert";
import ImportTaxStrategyFactory from "../../src/TaxService/Strategy/Factory/ImportTaxStrategyFactory";

describe('Tax service test', function () {
    describe('Test tax calculation', function () {
        const taxService = new TaxService([
            new TaxStrategyFactory()
        ]);

        it('Test tax calculation for product with tax', function () {
            const product = new Product({
                "name": "Clean code: Robert Martin",
                "type": ProductType.Other,
                "price": 12.44,
                "quantity": 1,
                "tax": 0,
                "imported": false
            });

            assert.equal(taxService.calculate(product), 1.244);
        });

        it('Test tax calculation for product without tax', function () {
            const product = new Product({
                "name": "Clean code: Robert Martin",
                "type": ProductType.Book,
                "price": 12.44,
                "quantity": 1,
                "tax": 0,
                "imported": false
            });

            assert.equal(taxService.calculate(product), 0);
        });
    });

    describe('Test import calculation', function () {
        const taxService = new TaxService([
            new ImportTaxStrategyFactory()
        ]);

        it('Test tax calculation for import product', function () {
            const product = new Product({
                "name": "Clean code: Robert Martin",
                "type": ProductType.Other,
                "price": 12.44,
                "quantity": 1,
                "tax": 0,
                "imported": true
            });

            assert.equal(taxService.calculate(product), 0.622);
        });

        it('Test tax calculation for not import product', function () {
            const product = new Product({
                "name": "Clean code: Robert Martin",
                "type": ProductType.Book,
                "price": 12.44,
                "quantity": 1,
                "tax": 0,
                "imported": false
            });

            assert.equal(taxService.calculate(product), 0);
        });
    });
});
