export class TSObject3 {
    constructor(ts1, ts2) {
        this._ts1 = ts1;
        this._ts2 = ts2;
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
