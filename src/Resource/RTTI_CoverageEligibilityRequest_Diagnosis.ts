
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
diagnosisCodeableConcept: RTTI_CodeableConcept,
diagnosisReference: RTTI_Reference
        });
        

        export var RTTI_CoverageEligibilityRequest_Diagnosis:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityRequest_Diagnosis = t.TypeOf<typeof RTTI_CoverageEligibilityRequest_Diagnosis>;
        
        