"use strict";

import AbstractTaxStrategy from "./AbstractTaxStrategy";

export default class StandardTaxStrategy extends AbstractTaxStrategy {

    protected readonly tax = 10;
}
