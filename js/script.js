const projects = [
    { projectName: '1-qr-code-component', projectUrl: 'https://dominik-adamczewski.github.io/1-qr-code-component/' },
    { projectName: '2-order-summary-component', projectUrl: 'https://dominik-adamczewski.github.io/2-order-summary-component/' },
    { projectName: '3-three-column-component', projectUrl: 'https://dominik-adamczewski.github.io/3-three-column-component/' },
    { projectName: '4-single-price-grid-component', projectUrl: 'https://dominik-adamczewski.github.io/4-single-price-grid-component/' },
    { projectName: '5-Component-with-sign-up-form', projectUrl: 'https://dominik-adamczewski.github.io/5-Component-with-sign-up-form/' },
    { projectName: '6-Interactive-rating-component', projectUrl: 'https://dominik-adamczewski.github.io/6-Interactive-rating-component/' },
    { projectName: '7-faq-accordion-card-component', projectUrl: 'https://dominik-adamczewski.github.io/7-faq-accordion-card-component' },
    { projectName: '8-base-apparel-coming-soon-component', projectUrl: 'https://dominik-adamczewski.github.io/8-base-apparel-coming-soon-component' },
    { projectName: '9-article-preview-component', projectUrl: 'https://dominik-adamczewski.github.io/9-article-preview-component' },
    { projectName: '10-advice-generator-app', projectUrl: 'https://dominik-adamczewski.github.io/10-advice-generator-app' },
    { projectName: '11-fylo-landing-page-project', projectUrl: 'https://dominik-adamczewski.github.io/11-fylo-landing-page-project' },
    { projectName: '12-interactive-pricing-component', projectUrl: 'https://dominik-adamczewski.github.io/12-interactive-pricing-component' },
    { projectName: '13-tip-calculator-app', projectUrl: 'https://dominik-adamczewski.github.io/13-tip-calculator-app' },
    { projectName: '14-time-tracking-dashboard', projectUrl: 'https://dominik-adamczewski.github.io/14-time-tracking-dashboard/public' },
    { projectName: '15-contact-form-vue', projectUrl: 'https://15-contact-form-vue.surge.sh/' },
    { projectName: '16-tip-calculator-vue', projectUrl: 'https://16-tip-calculator-app-vue.surge.sh/' },
    { projectName: '17-product-list-with-cart-app-vue', projectUrl: 'https://17-product-list-with-cart-app-vue.surge.sh/' },
    { projectName: '18-static-job-listings-vue', projectUrl: 'https://18-static-job-listings-vue.surge.sh/' },
    { projectName: '19-conference-ticket-generator-app-vue', projectUrl: 'https://19-conference-ticket-generator-app-vue.surge.sh/' },
    { projectName: '20-to-do-app-vue', projectUrl: 'https://20-to-do-app-vue.surge.sh/' },
    { projectName: '21-url-shortening-api-vue', projectUrl: 'https://21-url-shortening-api-vue.surge.sh/' },
    { projectName: '22-ecommerce-product-page', projectUrl: 'https://22-ecommerce-product-page.surge.sh/' },
    { projectName: '23-calculator-app', projectUrl: 'https://23-calculator-app.surge.sh/' },
    { projectName: '24-ip-tracker-app', projectUrl: 'https://24-ip-tracker-vue.surge.sh/' },
    { projectName: '25-multi-step-form', projectUrl: 'https://25-multi-step-form.surge.sh/' },
    { projectName: '26-rock-paper-scissors', projectUrl: 'https://26-rock-paper-scissors-vue.surge.sh/' },
    { projectName: '27-rest-countries-api-vue', projectUrl: 'https://27-rest-countries-api-vue-dom.surge.sh/' },
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