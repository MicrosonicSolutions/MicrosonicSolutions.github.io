const pointsOfInterest = [
    {
        id: "poi1",
        title: "Community Orchard",
        x: 147,
        y: 495,
        image: "https://gordonstokes.co.uk/temp/Orchard.jpg",
        text: "The Cumnor Community orchard was planted by volunteers in late 2025.\n" + 
          "You can 'adopt a tree' to look after if you want to. Contact Cumnor Conservation Group if you're interested."
    },

    {
        id: "poi2",
        title: "Triangulation point",
        x: 1112,
        y: 782,
        image: "https://gordonstokes.co.uk/temp/TrigPoint.jpg",
        text: "Triangulation (or 'Trig') points were used from the start of the 19th century for Ordnance Survey mapping.\n" +
          "From 1936 they put up new concrete ones for updated mapping. " +
          "The Cumnor Hurst one was moved 100 metres south from the Folly, probably because it had a better view to other trig points.\n" + 
          "After 90 years the woods have grown up and the only view of any distance is towards the Viewpoint to the South West."
    },

    {
        id: "poi3",
        title: "Folly",
        x: 1088,
        y: 652,
        image: "https://gordonstokes.co.uk/temp/Folly.jpg",
        text: "The history of the folly is unclear.\n" +
          "For some time, it was believed that it simply indicated a clump of trees " + 
          "(tall trees which were used as landmarks for ancient tracks and roads were sometimes called follies " + 
          "and Hurst Lane was part of the main road from Faringdon to Oxford).\n" +
          "However recent work has revealed stonework that looks to have been intentionally placed there.\n"
    },
    
    {
        id: "poi4",
        title: "Rhino",
        x: 223,
        y: 504,
        image: "https://gordonstokes.co.uk/temp/Rhino.jpg",
        text: "See if you can spot the rhinocerous here. It isn't dangerous and doesn't move much."
    },

    {
        id: "poi5",
        title: "Shovel",
        x: 1005,
        y: 650,
        image: "https://gordonstokes.co.uk/temp/Shovel.jpg",
        text: "It's hard to spot but it's been hanging in the tree for a long time. Nobody knows why, or how it got there."
    },
    
    {
        id: "poi6",
        title: "Viewpoint",
        x: 976,
        y: 922,
        image: "https://gordonstokes.co.uk/temp/Viewpoint.jpg",
        text: "You can see much of the Vale of the White Horse from here, including Uffington White Horse, and even Swindon on a clear day."
    }

    
];


const manholes = [
    //memory.guess.ledge       
    {
        id: "manhole1",
        title: "Manhole 1",
        latitude: 51.758395,
        longitude: -1.324072,
        image: "",
        text: ""
    },
    //pops.email.basin       
    {
        id: "manhole2",
        title: "Manhole 2",
        latitude: 51.757722,
        longitude: -1.324813,
        image: "",
        text: ""
    },
    //delay.skill.sound       
    {
        id: "manhole3",
        title: "Manhole 3",
        latitude: 51.757722,
        longitude: -1.326425,
        image: "",
        text: ""
    },
    //rents.glitz.cared       
    {
        id: "manhole4",
        title: "Manhole 4",
        latitude: 51.757479,
        longitude: -1.326512,
        image: "",
        text: ""
    },
    //encounter.retail.atom       
    {
        id: "manhole5",
        title: "Manhole 5",
        latitude: 51.757371,
        longitude: -1.326556,
        image: "",
        text: ""
    },
    //peanut.nature.began       
    {
        id: "manhole6",
        title: "Manhole 6",
        latitude: 51.757209,
        longitude: -1.3266,
        image: "",
        text: ""
    },
    //spite.dots.food       
    {
        id: "manhole7",
        title: "Manhole 7",
        latitude: 51.757048,
        longitude: -1.326643,
        image: "",
        text: ""
    },
    //wink.laws.churn       
    {
        id: "manhole8",
        title: "Manhole 8",
        latitude: 51.756886,
        longitude: -1.326687,
        image: "",
        text: ""
    },
    //alarm.silly.price       
    {
        id: "manhole9",
        title: "Manhole 9",
        latitude: 51.756751,
        longitude: -1.32673,
        image: "",
        text: ""
    },
    //shield.flying.shin       
    {
        id: "manhole10",
        title: "Manhole 10",
        latitude: 51.756617,
        longitude: -1.326774,
        image: "",
        text: ""
    },
    //unique.sound.lawn       
    {
        id: "manhole11",
        title: "Manhole 11",
        latitude: 51.757075,
        longitude: -1.326469,
        image: "",
        text: ""
    },
    //editor.pillow.excuse       
    {
        id: "manhole12",
        title: "Manhole 12",
        latitude: 51.757129,
        longitude: -1.326207,
        image: "",
        text: ""
    },
    //issue.doors.plots       
    {
        id: "manhole13",
        title: "Manhole 13",
        latitude: 51.757156,
        longitude: -1.326033,
        image: "",
        text: ""
    },
    //agenda.design.answer       
    {
        id: "manhole14",
        title: "Manhole 14",
        latitude: 51.757183,
        longitude: -1.325859,
        image: "",
        text: ""
    },
    //powder.peanut.zest       
    {
        id: "manhole15",
        title: "Manhole 15",
        latitude: 51.757209,
        longitude: -1.325684,
        image: "",
        text: ""
    },
    //cases.brain.gifts       
    {
        id: "manhole16",
        title: "Manhole 16",
        latitude: 51.757236,
        longitude: -1.325554,
        image: "",
        text: ""
    },
    //shuts.club.laser       
    {
        id: "manhole17",
        title: "Manhole 17",
        latitude: 51.757263,
        longitude: -1.325423,
        image: "",
        text: ""
    },
    //books.plenty.speaks       
    {
        id: "manhole18",
        title: "Manhole 18",
        latitude: 51.757317,
        longitude: -1.325161,
        image: "",
        text: ""
    },
    //wizard.able.given       
    {
        id: "manhole19",
        title: "Manhole 19",
        latitude: 51.757425,
        longitude: -1.324943,
        image: "",
        text: ""
    },

    //adopt.danger.cooks       
    {
        id: "manhole20",
        title: "Manhole 20",
        latitude: 51.757614,
        longitude: -1.326469,
        image: "",
        text: ""
    }

];

