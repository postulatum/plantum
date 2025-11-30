import { Category } from "../model/category";

export class GLOBAL {

    public static TOTAL_CREDITS_GOAL: number = 120;

    public static GOALS: Map<Category, number> = new Map([
        [Category.ELECTIVE, 43],
        [Category.PROFILE, 10],
        [Category.SOFT_SKILLS, 6],
        [Category.IDP, 16],
        [Category.THESIS, 30],
        [Category.SEMINAR, 5],
        [Category.PRACTICAL, 10],
        [Category.MISC, 0],
    ]);
};

