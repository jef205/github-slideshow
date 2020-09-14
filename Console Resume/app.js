let myName = "Justin"+"\n"+"Fordham"
console.log(myName)
let myCareerField = "Software Development"
console.log(myCareerField)
let myDescription = {
    myself: "A modern day 29 year old man living in the 21st Century"
}
console.log(myDescription)
let myinterests = [
    "coding", "software development", "employment", "self improvement", "entrepreneurship",
    "travel", "home ownership", "marriage", "family", "early retirement"
]
console.log(myinterests)

let myWorkHistory = [
    {
        company: "Porsche",
        title: "Formula 1 Driver",
        duties: "Winning racing tournaments for the Motor Company",
    },
    {
        company: "NASA",
        title: "Astronaut",
        duties: "Operating spacecraft while in orbit",
    },
    {
        company: "Warner Brothers",
        title: "Actor",
        duties: "Protraying different characters in feature films"

        
    }
]
console.log(myWorkHistory)

let mySkills = ["hand to hand combat", "high octane speed racing", "performing in big budget feature films",
"operating spacecrafts", "entertaining beautiful women"]

function displayPosition(companyName, title, description) {
    console.log(companyName + title + description);
}

// displayPosition("Innovate Birmingham", "Insturctor", "do stuff");
displayPosition(myWorkHistory[0].company, myWorkHistory[0].title, myWorkHistory[0].duties);

function displaySkills(){
    
    if (skillsAreCool) {
        console.log(BAM: + myskills)
    } else{
        console.log(mySkills)
    }
}

