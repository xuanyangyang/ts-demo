/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import { TSObject1 } from "./TSObject1.js";
export class TSObject5 {
    constructor(t1) {
        this._t1 = t1;
    }
    static create() {
        return new TSObject5(new TSObject1("1"));
    }
    get t1() {
        return this._t1;
    }
    set t1(value) {
        this._t1 = value;
    }
}
