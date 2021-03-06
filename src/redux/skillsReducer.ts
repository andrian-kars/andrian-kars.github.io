import { HardType, LanguagesType, SoftType } from "../Types"

const initialState = {
    hard: [
        { skill: 'React.js + Redux', level: 4, description: 'Advanced' },
        { skill: 'JavaScript', level: 5, description: 'Expert' },
        { skill: 'TypeScript', level: 4, description: 'Advanced' },
        { skill: 'Git', level: 5, description: 'Expert' },
        { skill: 'Node.js', level: 3, description: 'Intermediate' },
        { skill: 'Rest APIs', level: 4, description: 'Advanced' },
        { skill: 'HTML & CSS', level: 5, description: 'Expert' },
        { skill: 'SASS, LESS', level: 5, description: 'Expert' },
        { skill: 'Bootstrap', level: 5, description: 'Expert' },
        { skill: 'jQuery', level: 3, description: 'Intermediate' },
        { skill: 'Webpack & Gulp', level: 4, description: 'Advanced' },
        { skill: 'GitHub & Gitlab', level: 5, description: 'Expert' },
    ] as Array<HardType>,
    soft: [
        { description: 'Adaptability' },
        { description: 'Ability to fast-learning' },
        { description: 'Analytical Understanding' },
        { description: 'Attention to details' },
        { description: 'Critical Thinking' },
        { description: 'Good Communication & Teamwork' },
        { description: 'Self-Confidence & Self-Motivation' },
        { description: 'Stress Management & Patience' },
        { description: 'Flexibility' },
    ] as Array<SoftType>,
    languages: [
        { skill: 'English', level: 3, description: 'C1. Speaking as well' },
        { skill: 'German', level: 2, description: 'B2. Lived in Germany for 4 years' },
        { skill: 'Japanese', level: 1, description: 'A1. Currenty improving' },
    ] as Array<LanguagesType>,
}

export type InitialStateType = typeof initialState

const skillsReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default skillsReducer