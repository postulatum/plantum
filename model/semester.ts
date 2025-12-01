import { HasId } from "./hasId";

export interface Semester extends HasId {
    name: string;
    moduleIds: string[];
}
