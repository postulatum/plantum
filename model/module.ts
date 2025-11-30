import { HasId } from "./hasId";
import { Area } from "./area";

export interface Module extends HasId {
    name: string;
    credits: number;
    area: Area;
    isTheoretical: boolean;
}
