const projects = [
    { projectName: 'Test-Project-1', projectUrl: 'https://dominik-adamczewski.github.io/Project-Test-1/' },
    { projectName: 'Test-Project-2', projectUrl: 'https://dominik-adamczewski.github.io/Project-Test-2/' },
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