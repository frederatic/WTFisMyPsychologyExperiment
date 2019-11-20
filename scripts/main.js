
$(function() {

    // Populate using an object literal
    WTF.init({
    "heading": [
        "Why don't you fucking research",
        "Your next fucking experiment should look at",
        "How about you fucking investigate",
        "Go fucking study"
    ],

    "response": [
        "Already fucking done",
        "Give me a-fucking-nother one",
        "Next fucking experiment",
        "Nobody fucking cares",
        "No fucking money in this area"
    ],

    "template": [
        "The difference in @depvar between @group",
        "The impact of @invar on @depvar",
        "The effects of @invar on @depvar",
        "The influence of @invar on @depvar",
        "The correlation between @invar and @depvar",
        "The association between @invar and @depvar",
        "The relation between @invar and @depvar",
        "The relationship between @invar and @depvar"
    ],

    "invar": [
        "alcohol consumption",
        "LSD",
        "rabbit"
    ],

    "depvar": [
        "social development",
        "intelligence",
        "emotional intelligence",
        "spatial perception"
    ]
    
    "group": [
        "children",
        "teens",
        "elderly",
        "men and women",
        "students",
        "clinically depressed people",
        "adults"
    ]    
});

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
