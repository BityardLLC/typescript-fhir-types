
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
resource: RTTI_Coding,
party: RTTI_Reference
        });
        

        export var RTTI_ExplanationOfBenefit_Payee:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Payee = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Payee>;
        
        