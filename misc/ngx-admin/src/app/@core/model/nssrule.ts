import { TAI } from './tai';
import { Snssai } from './snssai';
import { NSSRuleBehavior } from './nssrulebehavior';

export class NSSRule {
    constructor(public name = '',
                public amfId = '',
                public salience = 1,
                public tai: TAI = new TAI(),
                public snssai: Snssai = new Snssai(),
                public behavior: NSSRuleBehavior = new NSSRuleBehavior()) {}
}
