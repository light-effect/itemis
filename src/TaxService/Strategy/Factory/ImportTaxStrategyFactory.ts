"use strict";

import TaxStrategyFactoryInterface from "./TaxStrategyFactoryInterface";
import TaxStrategyInterface from "../TaxStrategyInterface";
import NoTaxStrategy from "../NoTaxStrategy";
import ImportTaxStrategy from "../ImportTaxStrategy";
import ProductInterface from "../../../Entity/ProductInterface";

export default class ImportTaxStrategyFactory implements TaxStrategyFactoryInterface {

    private readonly strategies: Map<Boolean, TaxStrategyInterface> =
        new Map<Boolean, TaxStrategyInterface>([
            [false, new NoTaxStrategy()],
            [true, new ImportTaxStrategy()],
        ]);

    get(product: ProductInterface): TaxStrategyInterface {
        return this.strategies.get(product.imported);
    }
}
