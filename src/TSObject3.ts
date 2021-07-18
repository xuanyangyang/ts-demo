/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import {TSObject2} from "./TSObject2.js";
import {TSObject1} from "./TSObject1.js";

export class TSObject3{
    private _ts1:TSObject1;
    private _ts2:TSObject2;


    constructor(ts1: TSObject1, ts2: TSObject2) {
        this._ts1 = ts1;
        this._ts2 = ts2;
    }


    get ts1(): TSObject1 {
        return this._ts1;
    }

    get ts2(): TSObject2 {
        return this._ts2;
    }


    set ts1(value: TSObject1) {
        this._ts1 = value;
    }

    set ts2(value: TSObject2) {
        this._ts2 = value;
    }
}