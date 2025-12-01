import { HasId } from "./hasId";
import { Id } from "./id";
import { Term } from "./term";

export interface Slot extends HasId {
    year: number;
    term: Term;
    semesterIds: Id[];
}
