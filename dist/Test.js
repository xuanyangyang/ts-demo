/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
import { TSObject2, TSObject4 } from "./Index.js";
import { TSObject1 } from "./Index.js";
import { TSObject3 } from "./Index.js";
let t1 = new TSObject1('1');
let t2 = new TSObject2(2);
console.log(t1);
console.log(t2);
let t3 = new TSObject3(t1, t2);
console.log(t3);
let t4 = new TSObject4(4, "4");
console.log(t4);
