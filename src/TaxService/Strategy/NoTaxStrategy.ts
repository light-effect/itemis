"use strict";

import AbstractTaxStrategy from "./AbstractTaxStrategy";

export default class NoTaxStrategy extends AbstractTaxStrategy {

    protected readonly tax = 0;
}
