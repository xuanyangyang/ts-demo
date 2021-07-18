/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import {TSObject2} from "./TSObject2.js";
import {TSObject1} from "./TSObject1.js";
import {TSObject3} from "./TSObject3.js";

let t1 = new TSObject1('1');
let t2 = new TSObject2(2);
console.log(t1);
console.log(t2);
let t3 = new TSObject3(t1, t2);
console.log(t3);