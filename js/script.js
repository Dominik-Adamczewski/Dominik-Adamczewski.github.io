const projects = [
    { projectName: '1-qr-code-component', projectUrl: 'https://dominik-adamczewski.github.io/1-qr-code-component/' },
    { projectName: '2-irder-summary-component', projectUrl: 'https://dominik-adamczewski.github.io/2-order-summary-component/' },
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