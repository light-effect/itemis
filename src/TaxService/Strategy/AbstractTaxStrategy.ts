"use strict";

import Product from "../../Entity/Product";
import TaxStrategyInterface from "./TaxStrategyInterface";

export default class AbstractTaxStrategy implements TaxStrategyInterface {

    protected readonly tax: number;

    calculate(product: Product): number {
        return product.getPriceWithTax() / 100 * this.tax;
    }
}
