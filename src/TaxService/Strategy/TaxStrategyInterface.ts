"use strict";

import Product from "../../Entity/Product";

export default interface TaxStrategyInterface {

    calculate(product: Product): number;
}
