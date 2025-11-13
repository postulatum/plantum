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

type Term = 'WiSe' | 'SoSe';

export interface Slot {
    id: string
    year: number;
    term: Term;
    semesters: Semester[];
}

export interface Semester {
    id: string;
    name: string;
    modules: Module[];
}

export interface Module {
    id: string;
    name: string;
    credits: number;
    area: Area;
    isTheoretical: boolean;
}
