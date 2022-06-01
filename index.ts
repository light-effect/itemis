#!/usr/bin/node

"use strict";

import App from "./src/App";
import TaxService from "./src/TaxService/TaxService";
import ConsoleOutput from "./src/Formatter/ConsoleOutput";
import ProductList from "./src/Entity/ProductList";
import ProductInterface from "./src/Entity/ProductInterface";
import Product from "./src/Entity/Product";
import TaxStrategyFactory from "./src/TaxService/Strategy/Factory/TaxStrategyFactory";
import ImportTaxStrategyFactory from "./src/TaxService/Strategy/Factory/ImportTaxStrategyFactory";

const inputData: ProductList<ProductInterface> = new ProductList();

require('./InputData/inputData3.json').forEach(rawProduct => inputData.add(new Product(rawProduct)))

const main = () => {
    const taxService = new TaxService([
        new ImportTaxStrategyFactory(),
        new TaxStrategyFactory(),
    ]);

    const formatter = new ConsoleOutput();
    const app = new App(taxService, formatter);

    app.run(inputData);
};

main();
