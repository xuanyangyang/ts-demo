/**
 *
 *
 * @author xuanyangyang
 * @since 1.0
 */
export class TSObject1 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
