const initialState = {
    hard: [
        { skill: 'React.js + Redux', level: 4, description: 'Advanced' },
        { skill: 'JavaScript', level: 5, description: 'Expert' },
        { skill: 'TypeScript', level: 4, description: 'Advanced' },
        { skill: 'Git', level: 5, description: 'Expert' },
        { skill: 'Node.js', level: 3, description: 'Intermediate' },
        { skill: 'Rest APIs', level: 4, description: 'Advanced' },
        { skill: 'HTML & CSS', level: 5, description: 'Expert' },
        { skill: 'SASS, LESS & PostCSS', level: 5, description: 'Expert' },
        { skill: 'BEM. CSS Modules', level: 5, description: 'Expert' },
        { skill: 'Bootstrap', level: 5, description: 'Expert' },
        { skill: 'jQuery', level: 3, description: 'Intermediate' },
        { skill: 'Webpack & Gulp', level: 4, description: 'Advanced' },
        { skill: 'GitHub & Gitlab', level: 5, description: 'Expert' },
    ] as Array<{
        skill: string
        level: number
        description: string
    }>,
    soft: [
        { skill: 'Adaptability' },
        { skill: 'Ability to fast-learning' },
        { skill: 'Analytical Understanding' },
        { skill: 'Attention to details' },
        { skill: 'Critical Thinking' },
        { skill: 'Good Communication & Teamwork' },
        { skill: 'Self-Confidence & Self-Motivation' },
        { skill: 'Stress Management & Patience' },
        { skill: 'Flexibility' },
    ] as Array<{
        skill: string
    }>,
    languages: [
        { skill: 'English', level: 5, description: 'C1' },
        { skill: 'German', level: 4, description: 'B2' },
        { skill: 'Japanese', level: 1, description: 'A1' },
    ] as Array<{
        skill: string
        level: number
        description: string
    }>,
}

export type InitialStateType = typeof initialState

const skillsReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default skillsReducer