// TODO:
// 1. Dynamically selecting screenshots at page start
// 2. Playing guideLink animations when they enter scroll (Done)
// 3. Light mode?

const guideBackgrounds = {
    silos: [
        {url: "", highContrast: false, alt: "Screenshot of deep storage silo"},
        {url: "", highContrast: true, alt: "Screenshot of deep storage silo"},
        {url: "", highContrast: false, alt: "Screenshot of air exchange silo"},
    ],
    pipeworks: [
        {url: "", highContrast: false, alt: "Screenshot of pipeworks drainage system"},
        {url: "", highContrast: false, alt: "Screenshot of pipeworks pipe organ"},
        {url: "", highContrast: false, alt: "Screenshot of pipeworks waste heap room"},
    ],
    habitation: [
        {url: "", highContrast: false, alt: "Screenshot of habitation forlorn gateway entrance"},
        {url: "", highContrast: true, alt: "Screenshot of habitation haunted pier"},
        {url: "", highContrast: false, alt: "Screenshot of habitation delta labs"},
    ],
    abyss: [
        {url: "", highContrast: false, alt: "Screenshot of abyss transit scaffolds"},
    ],
    nest: [
        {url: "", highContrast: false, alt: "Screenshot of nest entrance, currently ingame"},
    ],

    challenges: [
        {url: "", highContrast: true, alt: "Screenshot of shuttered rift entrance"},
    ],
    events: [
        {url: "", highContrast: false, alt: "Screenshot of the halloween parasite map"},
        {url: "", highContrast: false, alt: "Screenshot of the christmas chimney map"},
        {url: "", highContrast: false, alt: "Screenshot of the halloween parasite map"},
    ],
    achievements: [
        {url: "", highContrast: true, alt: "Screenshot of ingame recycler"},
        {url: "", highContrast: true, alt: "Screenshot of the first interlude: lockdown"},
        {url: "", highContrast: false, alt: "Screenshot of rho monolith in endless interlute: pipeworks to habitation"},
    ]
};

const links = document.getElementsByClassName("guideLink");

function OnLoad()
{
    const observer = new IntersectionObserver((entities, observer) => {
        for(e of entities)
        {
            if(e.isIntersecting)
            {
                e.target.classList.add("visible");
            }
        }
    }, {threshold: 0.2});

    for(element of links)
    {
        observer.observe(element);
    }
}

document.onload += OnLoad();