class Footer {
    public draw(): void {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const githubLink = document.createElement('a');
        githubLink.setAttribute('href', 'https://github.com/v-yelina');
        githubLink.innerHTML = 'Github: v-yelina';
        const year = document.createElement('span');
        year.innerHTML = '2022';
        const schoolLink = document.createElement('a');
        schoolLink.setAttribute('href', 'https://rs.school/js/');
        schoolLink.classList.add('school-link');
        const schoolLinkImg = document.createElement('img');
        schoolLinkImg.setAttribute('src', 'https://rs.school/images/rs_school_js.svg');
        schoolLinkImg.setAttribute('alt', 'Rolling Scopes School');
        schoolLinkImg.classList.add('school-link__img');
        schoolLink.appendChild(schoolLinkImg);
        footer.appendChild(githubLink);
        footer.appendChild(year);
        footer.appendChild(schoolLink);
        const body = document.querySelector('body');
        if (body) {
            body.appendChild(footer);
        }
    }
}

export default Footer;
