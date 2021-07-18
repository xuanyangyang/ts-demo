/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import { TSObject2 } from "./TSObject2.js";
import { TSObject1 } from "./TSObject1.js";
export class TSObject3 {
    constructor(ts1, ts2) {
        this._ts1 = ts1;
        this._ts2 = ts2;
    }
    static valueOf() {
        let t1 = new TSObject1('1');
        let t2 = new TSObject2(2);
        return new TSObject3(t1, t2);
    }
    get ts1() {
        return this._ts1;
    }
    get ts2() {
        return this._ts2;
    }
    set ts1(value) {
        this._ts1 = value;
    }
    set ts2(value) {
        this._ts2 = value;
    }
}
