import { TargetAmfSet } from './targetamfset';

export class NSIProfile {
    constructor(public name = '',
                public nrfUri = 'nnrf-disc',
                public nsiId = '0001',
                public targetAmfSet: TargetAmfSet[] = []) {}
}
