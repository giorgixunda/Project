let happiness = 100;
let hunger = 100;
const happinessBar = document.getElementById("happiness-bar");
const hungerBar = document.getElementById("hunger-bar");
const petImage = document.getElementById("petimg");

function updateStatus() {
    document.getElementById("pet-status").innerText = `Happiness: ${happiness} | Hunger: ${hunger}`;
    let p = document.getElementById('p');
    let paragraph = document.getElementById('p0');

    if (hunger <= 40) {
        petImage.src = "https://i.pinimg.com/originals/09/0f/9a/090f9ad1fccfcf2e22ebad6e632df1f7.jpg";
        p.textContent = "You Need To Feed The Pet!🍖 He Is Hungry";
    } else {
        petImage.src = "https://i.pinimg.com/originals/fd/c6/cb/fdc6cb5c19f75ee85a64eaccd4a0f678.jpg";
        p.textContent = "Puppy Seems He Aint Hungry! 🐶";
    }

    if (hunger <= 0) {
        window.alert("GAME OVER YOU LOST. HUNGER REACHED 0.");
        return;
    }

    if (happiness <= 20) {
        petImage.src = "https://tse2.explicit.bing.net/th?id=OIP.Hqrw5VgS7BJqrWFNvKvuNgHaE8&pid=Api&P=0&h=220";
        paragraph.textContent = "Play With Puppy. He Looks So Sad😞";
    } else {
        paragraph.textContent = "Puppy Seems Happy! 🐶";
    }

    if (happiness <= 0) {
        window.alert("GAME OVER YOU LOST. Happiness REACHED 0.");
        return;
    }
}

document.getElementById('feed-button').addEventListener('click', function() {
    hunger = Math.min(hunger + 10, 100);
    updateStatus();
});

document.getElementById('play-button').addEventListener('click', function() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    updateStatus();
});

document.getElementById('sleep-button').addEventListener('click', function() {
    happiness = Math.max(happiness - 1, 0);
    hunger = Math.max(hunger - 6, 0);
    updateStatus();
});

const interval = setInterval(function() {
    happiness = Math.max(happiness - 2, 0);
    hunger = Math.max(hunger - 2, 0);
    updateStatus();
}, 1000);

updateStatus();