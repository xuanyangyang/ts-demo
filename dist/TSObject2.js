/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
export class TSObject2 {
    constructor(num) {
        this._num = num;
    }
    get num() {
        return this._num;
    }
    set num(value) {
        this._num = value;
    }
}
