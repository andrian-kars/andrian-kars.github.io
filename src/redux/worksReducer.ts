import social from './../images/projects/social.jpg'
import oldPersonal from './../images/projects/old-personal.jpg'
import osfAcademy from './../images/projects/osf-academy.jpg'
import pojects from './../images/projects/projects.jpg'
import { WorksType } from '../Types'

const initialState = {
    works: [
        { name: 'Social', description: 'Social Network, huge project, I spent over 400 hours on it.', technologies: 'React & TypeScript & SASS', photo: social, link: 'https://andrian-kars.github.io/social/' },
        { name: 'Old Website', description: 'My second project with React. It has a unique design.', technologies: 'React & SASS', photo: oldPersonal, link: 'https://andrian-kars.github.io/personal2020/' },
        { name: 'OSF Academy', description: 'A website with lots of features. I finished it during OSF Academy course.', technologies: 'Gulp & SASS & jQuery', photo: osfAcademy, link: 'https://andrian-kars.github.io/HTML-Coding/osf-academy/index.html' },
        { name: 'Other 70+ projects', description: 'I have completed more than 70 projects. You can find them grouped on my GitHub.', technologies: 'Gulp | SASS | LESS | jQuery', photo: pojects, link: 'https://github.com/andrian-kars' },
    ] as Array<WorksType>
}

export type InitialStateType = typeof initialState

const worksReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default worksReducer