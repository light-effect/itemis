"use strict";

import ProductInterface from "../Entity/ProductInterface";
import TaxStrategyFactoryInterface from "./Strategy/Factory/TaxStrategyFactoryInterface";

export default class TaxService {

    private readonly taxFactories: TaxStrategyFactoryInterface[];

    constructor(taxFactories: TaxStrategyFactoryInterface[]) {
        this.taxFactories = taxFactories;
    }

    public calculate(product: ProductInterface): number {
        let tax = 0;

        this.taxFactories.forEach(factory => tax += factory.get(product).calculate(product))

        return tax;
    }
}
