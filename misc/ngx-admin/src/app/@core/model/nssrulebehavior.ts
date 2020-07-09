import { AppropriateNsiProfile } from './appropriatensiprofile';

export class NSSRuleBehavior {
    constructor(public grant = 'ALLOWED',
                public accessType = '3GPP_ACCESS',
                public nsiProfileList: AppropriateNsiProfile[] = []) {}
}
