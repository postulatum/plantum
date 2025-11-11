export enum Category {
    ELECTIVE = 'Informatik Wahlmodule',
    PROFILE = 'Profilbildung',
    SOFT_SKILLS = 'Überfachliche Grundlagen',
    THESIS = 'Master-Arbeit',
    IDP = 'Interdisciplinary Project (IDP)',
    SEMINAR = 'Master-Seminar',
    PRACTICAL = 'Advanced Practical Course',
    MISC = 'Sonstiges',
}


export class Semester {
    id: string;
    name: string;
    modules: Module[];

    constructor(name: string, modules: Module[] = []) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.modules = modules;
    }
}

type Term = 'WiSe' | 'SoSe';

export class Slot {
    year: number;
    term: Term;
    semesters: Semester[];

    constructor(year: number, term: Term, semesters: Semester[] = []) {
        this.year = year;
        this.term = term;
        this.semesters = semesters;
    }
}

export enum Area {
    ALG = 'ALG - Algorithms',
    CGV = 'CGV - Computer Graphics and Vision',
    DBI = 'DBI - Databases and Information Systems',
    DBM = 'DBM - Digital Biology and Digital Medicine',
    SE = 'SE - Engineering Software-intensive Systems',
    FMA = 'FMA - Formal Methods and their Applications',
    MLA = 'MLA - Machine Learning and Analytics',
    RRV = 'RRV - Computer Architecture, Computer Networks, and Distributed Systems',
    ROB = 'ROB - Robotics',
    SP = 'SP - Security and Privacy',
    HPC = 'HPC - Scientific Computing and High Performance Computing',
    SEMINAR = 'Master-Seminar',
    PRACTICAL = 'Advanced Practical Course',
    SOFT_SKILLS = 'Überfachliche Grundlagen',
    IDP = 'Interdisciplinary Project',
    THESIS = 'Master-Arbeit',
    GUIDED = 'Guided Research',
    MISC = 'Anderes (z.B. Bachelor-Anerkennung)',
}


export class Module {
    id: string;
    name: string;
    credits: number;
    area: Area;
    isTheoretical: boolean = false;

    constructor(name: string, credits: number, area: Area, isTheoretical: boolean = false) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.credits = credits;
        this.area = area;
        this.isTheoretical = isTheoretical;
    }
}
