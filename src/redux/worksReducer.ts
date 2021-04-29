import social from './../images/projects/social.jpg'
import oldPersonal from './../images/projects/old-personal.jpg'
import osfAcademy from './../images/projects/osf-academy.jpg'
import pojects from './../images/projects/github.png'
import htmlCoding from './../images/projects/html-coding.jpg'
import movie from './../images/projects/movie.jpg'
import { WorksType } from '../Types'

const initialState = {
    works: [
        { name: 'Social', description: 'Social Network, huge project, I spent over 600 hours on it.',
            technologies: 'React | TypeScript | API...', photo: social, link: 'https://andrian-kars.github.io/social/' },

        { name: 'Old Website', description: 'My second project with React. It has a unique design.',
            technologies: 'React | SASS', photo: oldPersonal, link: 'https://andrian-kars.github.io/personal2020/' },

        {
            name: 'Movies', description: 'Search by movie name, movies rating, saving a movie to favorites, detailed information about a movie...',
            technologies: 'React | TypeScript | API...', photo: movie, link: 'https://andrian-kars.github.io/movies/' },

        { name: 'OSF Academy', description: 'A website with lots of features. I finished it during OSF Academy course.',
            technologies: 'Gulp | SASS | jQuery', photo: osfAcademy, link: 'https://andrian-kars.github.io/HTML-Coding/osf-academy/index.html' },

        { name: 'HTML Coding', description: 'Lots of HTML Coding works.',
            technologies: 'HTML | CSS | SASS | LESS...', photo: htmlCoding, link: 'https://andrian-kars.github.io/HTML-Coding/' },

        { name: 'Other 70+ projects', description: 'I have completed more than 70 projects. You can find them grouped on my GitHub.',
            technologies: 'Gulp | SASS | LESS | jQuery', photo: pojects, link: 'https://github.com/andrian-kars?tab=repositories' },
    ] as Array<WorksType>
}

export type InitialStateType = typeof initialState

const worksReducer = ( state = initialState ): InitialStateType => {
    return state
}

export default worksReducer