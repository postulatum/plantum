import { HasId } from "./hasId";
import { Term } from "./term";

export interface Slot extends HasId {
    year: number;
    term: Term;
    semesterIds: ID[];
}
