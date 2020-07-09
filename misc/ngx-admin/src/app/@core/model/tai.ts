import { PlmnId } from './plmnid';

export class TAI {
    constructor(public plmnId: PlmnId = new PlmnId(),
                public tac = '') {}
}
