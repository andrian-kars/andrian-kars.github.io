import { AboutType } from "../Types"

const initialState = {
    aboutInfo: [
        { title: 'Name:', description: 'Andrian Karsanashvili' },
        { title: 'Age:', description: '20 years' },
        { title: 'Experience:', description: '2 years' },
        { title: 'Location:', description: 'L\'viv, Ukraine' },
        { title: 'LinkedIn & GitHub:', description: '/andrian-kars' },
    ] as Array<AboutType>,
    educationInfo: [
        { title: 'Ivan Franko University', time: '2020 - 2024', description: 'Software Engineering' },
        { title: 'EPAM Front-End Winter', time: '2021', description: 'Strong Junior Front-End Engineer' },
        { title: 'React Way Of Samurai', time: '2020 - 2021', description: 'Advanced React + Redux + TypeScript' },
        { title: 'JavaScript 30', time: '2021', description: 'JavaScript quirks and features' },
        { title: 'OSF Academy', time: '2020', description: 'Trainee Front-End Developer' },
        { title: 'WebCademy', time: '2019', description: 'HTML Coder' },
        { title: 'High School in Germany', time: '2016 - 2018', description: 'Associate Degree in Economics' },
    ] as Array<AboutType>,
    experienceInfo: [
        { title: 'Social', time: '600 hours', link: 'https://andrian-kars.github.io/social/', description: 'Social Network was a part of the React Way Of Samurai course, and I was polishing it after finishing the course. The core is React + Redux. I also transitioned the whole project from JS -> TypeScript. Mainly there is a Social Network API (Rest API) used. The project constantly develops, and new features are being pushed.' },
        { title: 'This Website', time: '100 hours', link: '#', description: 'The Personal Website was developed with TS, React & Redux. Lots of animation were developed and also used from open source. It contains a bunch of new features, and it is just great.' },
        { title: 'University Project', time: '4 months', link: 'https://andrian-kars.github.io/HTML-Coding/mavic-2/', description: 'We have got six months to finish a final project. I was the leader of our team. Our project was finished two months faster and end up the best. Technologies used: gulp, sass, jquery, plugins, git.' },
        { title: 'Old Website', time: '50 hours', link: 'https://andrian-kars.github.io/personal2020/', description: 'My old personal site was used as Web CV. Technologies used: react, sass, javascript, git.' },
        { title: 'OSF Academy', time: '2 months', link: 'https://andrian-kars.github.io/HTML-Coding/osf-academy', description: 'When I was attending a course at OSF Academy, I finished this project. It was my final project. I completed it 10 days earlier and better than others. In the end, I was offered a position at OSF Digital.' },
        { title: 'Other 70+ Works', time: '999+ hours', link: 'https://github.com/andrian-kars', description: 'There are many other smaller projects. They are my pet and also from finishing different courses.' },
    ] as Array<AboutType>,
}

export type InitialStateType = typeof initialState

const aboutReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default aboutReducer