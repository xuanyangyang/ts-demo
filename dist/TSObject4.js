/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
export class TSObject4 {
    constructor(num, jkl) {
        this._num = num;
        this._jkl = jkl;
    }
    get num() {
        return this._num;
    }
    set num(value) {
        this._num = value;
    }
    get jkl() {
        return this._jkl;
    }
    set jkl(value) {
        this._jkl = value;
    }
}
