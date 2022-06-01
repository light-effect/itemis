"use strict";

import {ProductType} from "../Enum/ProductType";

export default interface ProductInterface {

    name: string;

    type: ProductType;

    quantity: number;

    price: number;

    tax: number;

    imported: Boolean;

    getTotalWitTax(): number;

    getPriceWithTax(): number;
}
