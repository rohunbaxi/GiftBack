const person = {
    name: 'Mahbod',
    job: 'Web Developer',
    city: 'MissingIcon',
    bio: 'WOW IM SO COOL!'
}

const markup = `
 <div class="person">
    <h2>
        ${person.name}
    </h2>
    <p class="location">${person.city}
    <p class="bio">${person.bio}
 </div>
`;

document.body.innerHTML = markup;