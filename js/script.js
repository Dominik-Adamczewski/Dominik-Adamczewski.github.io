const projects = [
    { projectName: '1-qr-code-component', projectUrl: 'https://dominik-adamczewski.github.io/1-qr-code-component/' },
    { projectName: '2-order-summary-component', projectUrl: 'https://dominik-adamczewski.github.io/2-order-summary-component/' },
    { projectName: '3-three-column-component', projectUrl: 'https://dominik-adamczewski.github.io/3-three-column-component/' },
    { projectName: '4-single-price-grid-component', projectUrl: 'https://dominik-adamczewski.github.io/4-single-price-grid-component/' },
    { projectName: '5-Component-with-sign-up-form', projectUrl: 'https://dominik-adamczewski.github.io/5-Component-with-sign-up-form/' },
    { projectName: '6-Interactive-rating-component', projectUrl: 'https://dominik-adamczewski.github.io/6-Interactive-rating-component/' },
];

const projectsList = document.querySelector('div.projects-list');

function displayProjectsOnTheList(arrayOfProjects) {
    arrayOfProjects.forEach(project => {
        const projectLink = document.createElement('a');
        projectLink.textContent = `${project.projectName}`;
        projectLink.setAttribute('href', `${project.projectUrl}`);
        projectsList.append(projectLink);    
    });
}

displayProjectsOnTheList(projects);