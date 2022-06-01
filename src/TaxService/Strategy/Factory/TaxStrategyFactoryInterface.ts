"use strict";

import TaxStrategyInterface from "../TaxStrategyInterface";
import ProductInterface from "../../../Entity/ProductInterface";

export default interface TaxStrategyFactoryInterface {

    get(product: ProductInterface): TaxStrategyInterface;
}
