function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let theUsers = [];
function generateRandomUser(count) {
    const firstNames = ["Arjun", "Meera", "Rahul", "Priya", "Vikram", "Sneha", "Karan", "Anjali", "Rohit", "Pooja"];
    const lastNames = ["Sharma", "Verma", "Singh", "Patel", "Iyer", "Nair", "Das", "Gupta", "Kapoor", "Joshi"];
    const states = ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Punjab", "Rajasthan", "Bihar", "West Bengal", "Kerala", "Uttar Pradesh"];
    const skillsPool = [" JavaScript", " Python", " Java", " C++", " SQL", " Node.js", " React", " Angular", " Django", " Flask", " HTML", " CSS", " AWS", " Docker", " Kubernetes"];


    // const profileImageURL = "https://picsum.photos/id/237/200/300";
    for (let i = 0; i < count; i++) {
        const fullname = `${getRandomItem(firstNames)} ${getRandomItem(lastNames)}`;
        const age = getRandomNumber(18, 50);
        const skills = [...skillsPool].sort(() => 0.5 - Math.random()).slice(0, 5);
        const state = getRandomItem(states);
        const isAvailable = Math.random() < 0.5;
        const profileImageID = `https://picsum.photos/id/${getRandomNumber(9, 100)}/150/150`

        theUsers.push({
            fullname,
            profileImageID,
            age,
            skills,
            state,
            isAvailable
        });

    }
    return theUsers;
}

generateRandomUser(4);
// generateRandomUser(10);


let cardContainer = document.getElementById('cards-container');
function heroFuntion() {
    let allCardDiv = '';

    theUsers.forEach(function (elem, idx) {
        allCardDiv = allCardDiv + `<div class="card contract">
                <div class="part1">
                    <img src="${elem.profileImageID}" alt="Profile photo">
                    <h3>${elem.fullname}, ${elem.age}</h3>
                    <h4>${elem.isAvailable ? "available" : "not available"}</h4>
                    <button id=${idx}>View more</button>
                </div>
                <div class="part2">
                    <h3><p>From:</p> ${elem.state}</h3>
                    <h3><p>Skilled at:</p> ${elem.skills}</h3>
                </div>                
            </div>`;
    });
    cardContainer.innerHTML = allCardDiv;
}
heroFuntion();




cardContainer.addEventListener('click', function (dets) {

    // let goldenValues = theUsers[dets.target.id];
    // console.log(goldenValues);

    let button = dets.target;

    if (dets.target.tagName === 'BUTTON') {

        const parentCard = dets.target.closest('.card');
        parentCard.classList.toggle('expand');

        if (parentCard.classList.contains('expand')) {
            button.innerText = "Close";
        }
        else {
            button.innerText = "View More";

        }
    }
    

})


