// TODO:
// 1. Dynamically selecting screenshots at page start
// 2. Playing guideLink animations when they enter scroll (Done)
// 3. Light mode?

const guideBackgrounds = {
    silos: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/silos1.jpg", highContrast: false, alt: "Screenshot of deep storage silo"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/silos2.jpg", highContrast: true, alt: "Screenshot of deep storage silo"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/silos3.jpg", highContrast: false, alt: "Screenshot of air exchange silo"},
    ],
    pipeworks: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/pipeworks1.png", highContrast: false, alt: "Screenshot of pipeworks drainage system"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/pipeworks2.png", highContrast: false, alt: "Screenshot of pipeworks pipe organ"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/pipeworks3.png", highContrast: false, alt: "Screenshot of pipeworks waste heap room"},
    ],
    habitation: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/habitation1.png", highContrast: false, alt: "Screenshot of habitation forlorn gateway entrance"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/habitation2.png", highContrast: true, alt: "Screenshot of habitation haunted pier"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/habitation3.png", highContrast: false, alt: "Screenshot of habitation delta labs"},
    ],
    abyss: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/abyss1.png", highContrast: false, alt: "Screenshot of abyss transit scaffolds"},
    ],
    nest: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/nest1.jpg", highContrast: false, alt: "Screenshot of nest entrance, currently ingame"},
    ],

    challenges: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/challenges1.jpg", highContrast: true, alt: "Screenshot of shuttered rift entrance"},
    ],
    events: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/events1.png", highContrast: false, alt: "Screenshot of the halloween parasite map"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/events2.png", highContrast: false, alt: "Screenshot of the christmas chimney map"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/events3.png", highContrast: false, alt: "Screenshot of the halloween parasite map"},
    ],
    achievements: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/achievements1.jpg", highContrast: true, alt: "Screenshot of ingame recycler"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/achievements2.jpg", highContrast: true, alt: "Screenshot of the first interlude: lockdown"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/achievements3.jpg", highContrast: false, alt: "Screenshot of rho monolith in endless interlute: pipeworks to habitation"},
    ],
    speedrunning: [
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/speedrunning1.png", highContrast: false, alt: "Screenshot of expulsion chute shortcut"},
        {url: "https://raw.githubusercontent.com/Krystian-Wysocki-WSEI/HTMenel-zaliczenie/10dac218f4bea95835b2ce3e860bd1e4e303b4cd/assets/speedrunning2.png", highContrast: false, alt: "Screenshot of tangled silk shortcut"},
    ],
};

const links = document.getElementsByClassName("guideLink");

const silosBg = document.querySelector("#silos .guideBg");
const pipeworksBg = document.querySelector("#pipeworks .guideBg");
const habitationBg = document.querySelector("#habitation .guideBg");
const abyssBg = document.querySelector("#abyss .guideBg");
const nestBg = document.querySelector("#nest .guideBg");

const challengesBg = document.querySelector("#challenges .guideBg");
const eventsBg = document.querySelector("#events .guideBg");
const achievementsBg = document.querySelector("#achievements .guideBg");
const speedrunningBg = document.querySelector("#speedrunning .guideBg");

function SetRandomBG(bgElement, listObject)
{
    let selectedBg;

    if(listObject.length === 0)
    {
        return;
    }
    if(listObject.length === 1)
    {
        selectedBg = listObject[0];
    }
    else
    {
        const rng = Math.floor(Math.random() * listObject.length);
        selectedBg = listObject[rng];
    }

    bgElement.src = selectedBg.url;
    bgElement.alt = selectedBg.alt;

    if(selectedBg.highContrast)
        bgElement.classList.add("highContrast");
    else
        bgElement.classList.remove("highContrast");
}

function OnLoad()
{
    const observer = new IntersectionObserver((entities, obs) => {
        for(e of entities)
        {
            if(e.isIntersecting)
            {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
            }
        }
    }, {threshold: 0.2});

    for(element of links)
    {
        observer.observe(element);
    }

    SetRandomBG(silosBg, guideBackgrounds.silos);
    SetRandomBG(pipeworksBg, guideBackgrounds.pipeworks);
    SetRandomBG(habitationBg, guideBackgrounds.habitation);
    SetRandomBG(abyssBg, guideBackgrounds.abyss);
    SetRandomBG(nestBg, guideBackgrounds.nest);

    SetRandomBG(challengesBg, guideBackgrounds.challenges);
    SetRandomBG(eventsBg, guideBackgrounds.events);
    SetRandomBG(achievementsBg, guideBackgrounds.achievements);
    SetRandomBG(speedrunningBg, guideBackgrounds.speedrunning);
}

document.onload += OnLoad();