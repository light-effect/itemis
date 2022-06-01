"use strict";

import ProductInterface from "./ProductInterface";
import {ProductType} from "../Enum/ProductType";

export default class Product implements ProductInterface {

    name: string;

    price: number;

    quantity: number;

    tax: number;

    type: ProductType;

    imported: Boolean;

    constructor(payload: Partial<Product>) {
        this.name = payload. name || '';
        this.price = payload.price;
        this.quantity = payload.quantity;
        this.type = ProductType[payload.type] || ProductType.Other;
        this.tax = payload.tax || 0;
        this.imported = payload.imported;
    }

    getPriceWithTax(): number {
        return this.price + this.tax;
    }

    getTotalWitTax(): number {
        return this.getPriceWithTax() * this.quantity;
    }
}