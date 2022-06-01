"use strict";

import ProductList from "../Entity/ProductList";
import ProductInterface from "../Entity/ProductInterface";

export default interface FormatterInterface {

    print(list: ProductList<ProductInterface>): void;
}
