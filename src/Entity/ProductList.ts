"use strict";

export default class ProductList<Product> extends Set {

    public getTaxes(): number {
        let taxes = 0;

        this.forEach(product => taxes += product.tax);

        return this.roundTaxes(taxes);
    }

    private roundTaxes(taxes: number): number {
        return parseFloat( (Math.ceil(taxes * 20) / 20).toFixed(2))
    }

    public getTotal(): number {
        let total = 0;

        this.forEach(product => total += product.price);

        return total;
    }

    public getTotalWithTax(): number {
        return this.getTotal() + this.roundTaxes(this.getTaxes());
    }
}
