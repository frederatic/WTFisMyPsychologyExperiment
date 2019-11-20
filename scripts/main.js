
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "Why don't you fucking research",
            "Your next fucking experiment should look at",
            "How about you fucking investigate",
            "Go fucking study"
        ],
        response: [
            "➜ Already fucking done",
            "➜ Give me a-fucking-nother one",
            "➜ Next fucking experiment",
            "➜ Nobody fucking cares",
            "➜ That's fucking unethical",
            "➜ Not fucking possible",
            "➜ Too fucking difficult",
            "➜ No fucking money in this area"
        ],
        template: [
            "The difference in @depvar between @group",
            "The impact of @invar on @depvar",
            "The effects of @invar on @depvar",
            "The influence of @invar on @depvar",
            "The correlation between @invar and @depvar",
            "The association between @invar and @depvar",
            "The relation between @invar and @depvar",
            "The relationship between @invar and @depvar"
        ],
        invar: [
            "alcohol consumption",
            "LSD",
            "rabbit"
        ],
        depvar: [
            "social development",
            "intelligence",
            "emotional intelligence",
            "spatial perception"
        ],
        group: [
            "children",
            "teens",
            "elderly",
            "men and women",
            "students",
            "clinically depressed people",
            "adults"
        ],
        population: [
            "Western and Eastern people",
            "humans and monkeys",
            "dogs and cats",
        ]
    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

}); 
