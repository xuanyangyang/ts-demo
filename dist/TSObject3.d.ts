/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import { TSObject2 } from "./TSObject2.js";
import { TSObject1 } from "./TSObject1.js";
export declare class TSObject3 {
    private _ts1;
    private _ts2;
    constructor(ts1: TSObject1, ts2: TSObject2);
    get ts1(): TSObject1;
    get ts2(): TSObject2;
    set ts1(value: TSObject1);
    set ts2(value: TSObject2);
}
