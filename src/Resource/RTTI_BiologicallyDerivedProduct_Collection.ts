
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
collector: RTTI_Reference,
source: RTTI_Reference,
collectedDateTime: t.string,
_collectedDateTime: RTTI_Element,
collectedPeriod: RTTI_Period
        });
        

        export var RTTI_BiologicallyDerivedProduct_Collection:any = t.intersection([mandatory, partial]);
        

export type IBiologicallyDerivedProduct_Collection = t.TypeOf<typeof RTTI_BiologicallyDerivedProduct_Collection>;
        
        