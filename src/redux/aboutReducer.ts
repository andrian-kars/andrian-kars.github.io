import { AboutType } from "../Types"

const initialState = {
    aboutInfo: [
        { title: 'Name:', description: 'Andrian Karsanashvili' },
        { title: 'Age:', description: '20 years' },
        { title: 'Experience in Web:', description: '2 years' },
        { title: 'Location:', description: 'L\'viv, Ukraine' },
        { title: 'LinkedIn & GitHub:', description: '/andrian-kars' },
    ] as Array<AboutType>,
    educationInfo: [
        { title: 'Ivan Franko University, 2020-2024', description: 'Software Engineering' },
        { title: 'EPAM Front-End Winter & School (L\'viv), 2021', description: 'Strong Junior Front-End Engineer' },
        { title: 'React Way of Samurai 1.0 & 2.0, 2020-2021', description: 'Advanced React + Redux + TypeScript' },
        { title: 'JavaScript 30, 2021', description: 'JavaScript quirks and features' },
        { title: 'OSF Academy, 2020', description: 'Trainee Front-End Developer' },
        { title: 'WebCademy, 2019', description: 'HTML Coder' },
        { title: 'High School in Germany, 2018', description: 'Associate Degree in Economics' },
    ] as Array<AboutType>,
    experienceInfo: [
        { title: 'Social', description: 'aaaaa' },
        { title: 'This Website', description: 'aaaaa' },
        { title: 'University Project', description: 'aaaaa' },
        { title: 'Old Website', description: 'aaaaa' },
        { title: 'OSF Academy', description: 'aaaaa' },
        { title: 'School in Germany, 2018', description: 'aaaaa' },
    ] as Array<AboutType>,
}

export type InitialStateType = typeof initialState

const aboutReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default aboutReducer