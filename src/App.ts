"use strict";

import TaxService from "./TaxService/TaxService";
import FormatterInterface from "./Formatter/FormatterInterface";
import ProductList from "./Entity/ProductList";
import ProductInterface from "./Entity/ProductInterface";

export default class App {

    private readonly taxService: TaxService;

    private readonly formatter: FormatterInterface;

    constructor(taxService: TaxService, formatter: FormatterInterface) {
        this.taxService = taxService;
        this.formatter = formatter;
    }

    public run(list: ProductList<ProductInterface>): void {
        this.calculateTaxes(list);
        this.printRecipe(list);
    }

    private calculateTaxes(list: ProductList<ProductInterface>): void {
        list.forEach(
            product => product.tax = this.taxService.calculate(product)
        );
    }

    private printRecipe(list: ProductList<ProductInterface>): void {
        this.formatter.print(list)
    }
}
