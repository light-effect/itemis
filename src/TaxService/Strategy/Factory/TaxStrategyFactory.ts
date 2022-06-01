"use strict";

import TaxStrategyFactoryInterface from "./TaxStrategyFactoryInterface";
import {ProductType} from "../../../Enum/ProductType";
import TaxStrategyInterface from "../TaxStrategyInterface";
import NoTaxStrategy from "../NoTaxStrategy";
import StandardTaxStrategy from "../StandardTaxStrategy";
import ProductInterface from "../../../Entity/ProductInterface";

export default class TaxStrategyFactory implements TaxStrategyFactoryInterface {

    private readonly strategies: Map<ProductType, TaxStrategyInterface> =
        new Map<ProductType, TaxStrategyInterface>([
            [ProductType.Book, new NoTaxStrategy()],
            [ProductType.Medic, new NoTaxStrategy()],
            [ProductType.Food, new NoTaxStrategy()],
            [ProductType.Other, new StandardTaxStrategy()],
        ]);

    get(product: ProductInterface): TaxStrategyInterface {
        return this.strategies.get(product.type);
    }
}
