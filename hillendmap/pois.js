const mapOverlays = [
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

mapOverlays.push(
{
  id: "manholes",
  title: "Manholes",
  data: manholes,
  markerStyle: { background: "#1677d2" },
  visible: false
});


/*
const manholes1 = [

    ///memory.guess.ledge       
    {
        id: "manhole1",
        title: "Manhole 1",
        x: 931.533333333333,
        y: 802.666666666667,
        image: "",
        text: "1 ///memory.guess.ledge"
    },
    ///pops.email.basin       
    {
        id: "manhole2",
        title: "Manhole 2",
        x: 936.866666666667,
        y: 777,
        image: "",
        text: "2 ///pops.email.basin"
    },
    ///delay.skill.sound       
    {
        id: "manhole3",
        title: "Manhole 3",
        x: 942.6,
        y: 745.6,
        image: "",
        text: "3 ///delay.skill.sound"
    },
    ///rents.glitz.cared       
    {
        id: "manhole4",
        title: "Manhole 4",
        x: 948.333333333333,
        y: 716.933333333333,
        image: "",
        text: "4 ///rents.glitz.cared"
    },
    ///encounter.retail.atom       
    {
        id: "manhole5",
        title: "Manhole 5",
        x: 954.666666666667,
        y: 686.866666666667,
        image: "",
        text: "5 ///encounter.retail.atom"
    },
    ///peanut.nature.began       
    {
        id: "manhole6",
        title: "Manhole 6",
        x: 959.266666666667,
        y: 663.933333333333,
        image: "",
        text: "6 ///peanut.nature.began"
    },
    ///spite.dots.food       
    {
        id: "manhole7",
        title: "Manhole 7",
        x: 963.266666666667,
        y: 643.466666666667,
        image: "",
        text: "7 ///spite.dots.food"
    },
    ///wink.laws.churn       
    {
        id: "manhole8",
        title: "Manhole 8",
        x: 966.733333333333,
        y: 623.933333333333,
        image: "",
        text: "8 ///wink.laws.churn"
    },
    ///alarm.silly.price       
    {
        id: "manhole9",
        title: "Manhole 9",
        x: 963.666666666667,
        y: 740.266666666667,
        image: "",
        text: "9 ///alarm.silly.price"
    },
    ///shield.flying.shin       
    {
        id: "manhole10",
        title: "Manhole 10",
        x: 992,
        y: 732.8,
        image: "",
        text: "10 ///shield.flying.shin"
    },
    ///unique.sound.lawn       
    {
        id: "manhole11",
        title: "Manhole 11",
        x: 1014.4,
        y: 727.266666666667,
        image: "",
        text: "11 ///unique.sound.lawn"
    },
    ///editor.pillow.excuse       
    {
        id: "manhole12",
        title: "Manhole 12",
        x: 1033.53333333333,
        y: 722.133333333333,
        image: "",
        text: "12 ///editor.pillow.excuse"
    },
    ///issue.doors.plots       
    {
        id: "manhole13",
        title: "Manhole 13",
        x: 1054,
        y: 717.533333333333,
        image: "",
        text: "13 ///issue.doors.plots"
    },
    ///agenda.design.answer       
    {
        id: "manhole14",
        title: "Manhole 14",
        x: 1069.46666666667,
        y: 712.533333333333,
        image: "",
        text: "14 ///agenda.design.answer"
    },

];

mapOverlays.push(
{

    id: "manholes1",
    title: "Manholes1",
    data: manholes1,
    markerStyle: { background: "#0" },
    visible: false
});
*/

const orienteering = [

    //1 ///       
    {
        id: "orienteering37",
        title: "Orienteering 37",
        x: 915,
        y: 1050,
        image: "",
        text: "1 ///output.puddles.supper"
    },
    //2 ///ranks.hungry.bath       
    {
        id: "orienteering38",
        title: "Orienteering 38",
        latitude: 51.755862,
        longitude: -1.326643,
        image: "",
        text: "2 ///ranks.hungry.bath"
    },
    //       
    {
        id: "orienteering39",
        title: "Orienteering 39",
        x: 1003,
        y: 897,
        image: "",
        text: "3"
    },
    //4 ///energy.brief.case       
    {
        id: "orienteering40",
        title: "Orienteering 40",
        latitude: 51.756347,
        longitude: -1.325292,
        image: "",
        text: "4 ///energy.brief.case"
    },
    //       
    {
        id: "orienteering41",
        title: "Orienteering 41",
        x: 1190,
        y: 899,
        image: "",
        text: "5"
    },
    //6 ///urban.damp.fuel       
    {
        id: "orienteering42",
        title: "Orienteering 42",
        latitude: 51.755592,
        longitude: -1.324943,
        image: "",
        text: "6 ///urban.damp.fuel"
    },
    //7 ///foster.arena.pipe       
    {
        id: "orienteering43",
        title: "Orienteering 43",
        latitude: 51.755404,
        longitude: -1.324725,
        image: "",
        text: "7 ///foster.arena.pipe"
    },
    //8 ///
    {
        id: "orienteering44",
        title: "Orienteering 44",
        x: 1172,
        y: 1095,
        image: "",
        text: "8 ///allow.shop.decide"
    },
    //9 ///yours.fails.notes       
    {
        id: "orienteering45",
        title: "Orienteering 45",
        latitude: 51.755107,
        longitude: -1.325423,
        image: "",
        text: "9 ///yours.fails.notes"
    },
    //10 ///nature.sake.staple       
    {
        id: "orienteering46",
        title: "Orienteering 46",
        latitude: 51.754865,
        longitude: -1.32673,
        image: "",
        text: "10 ///nature.sake.staple"
    },
    //11 ///grid.lamps.nurse✓       
    {
        id: "orienteering47",
        title: "Orienteering 47",
        latitude: 51.754703,
        longitude: -1.327689,
        image: "",
        text: "11 ///grid.lamps.nurse✓"
    },
    //12 ///chair.flat.values✓       
    {
        id: "orienteering48",
        title: "Orienteering 48",
        latitude: 51.754137,
        longitude: -1.327951,
        image: "",
        text: "12 ///chair.flat.values✓"
    },
    //13 ///foods.mason.about✓       
    {
        id: "orienteering49",
        title: "Orienteering 49",
        latitude: 51.753868,
        longitude: -1.327515,
        image: "",
        text: "13 ///foods.mason.about✓"
    },
    //14 ///badge.rocket.finely✓       
    {
        id: "orienteering50",
        title: "Orienteering 50",
        latitude: 51.753086,
        longitude: -1.3266,
        image: "",
        text: "14 ///badge.rocket.finely✓"
    },
    //15 ///gains.tiles.knots✓       
    {
        id: "orienteering51",
        title: "Orienteering 51",
        latitude: 51.753409,
        longitude: -1.326338,
        image: "",
        text: "15 ///gains.tiles.knots✓"
    },
    //16 ///buddy.reply.fires✓       
    {
        id: "orienteering52",
        title: "Orienteering 52",
        latitude: 51.753868,
        longitude: -1.325946,
        image: "",
        text: "16 ///buddy.reply.fires✓"
    },
    //17 tree✓       
    {
        id: "orienteering53",
        title: "Orienteering 53",
        x: 1153,
        y: 1316,
        image: "",
        text: "17 tree✓"
    },
    //18 ///living.dame.stow✓       
    {
        id: "orienteering54",
        title: "Orienteering 54",
        latitude: 51.754622,
        longitude: -1.324943,
        image: "",
        text: "18 ///living.dame.stow✓"
    },
    //19 ///spine.medium.mining       
    {
        id: "orienteering55",
        title: "Orienteering 55",
        latitude: 51.754622,
        longitude: -1.325771,
        image: "",
        text: "19 ///spine.medium.mining"
    },
    //20 ///skin.chimp.kept✓       
    {
        id: "orienteering56",
        title: "Orienteering 56",
        latitude: 51.755619,
        longitude: -1.323418,
        image: "",
        text: "20 ///skin.chimp.kept✓"
    },
    //21 ///needed.wishes.spice✓       
    {
        id: "orienteering57",
        title: "Orienteering 57",
        latitude: 51.755485,
        longitude: -1.32259,
        image: "",
        text: "21 ///needed.wishes.spice✓"
    },
    //22 ///grin.timing.youth✓       
    {
        id: "orienteering58",
        title: "Orienteering 58",
        latitude: 51.756158,
        longitude: -1.323113,
        image: "",
        text: "22 ///grin.timing.youth✓"
    },
    //23 ///plays.wedge.ruled ✓       
    {
        id: "orienteering59",
        title: "Orienteering 59",
        latitude: 51.75659,
        longitude: -1.323592,
        image: "",
        text: "23 ///plays.wedge.ruled ✓"
    },
    //24 ///hers.broken.pizza✓       
    {
        id: "orienteering60",
        title: "Orienteering 60",
        latitude: 51.756994,
        longitude: -1.323287,
        image: "",
        text: "24 ///hers.broken.pizza✓"
    },
    //25 ///racks.tunes.bake ✓       
    {
        id: "orienteering61",
        title: "Orienteering 61",
        latitude: 51.757587,
        longitude: -1.323418,
        image: "",
        text: "25 ///racks.tunes.bake ✓"
    },
    //26 ///bleat.deflection.junior✓       
    {
        id: "orienteering62",
        title: "Orienteering 62",
        latitude: 51.757533,
        longitude: -1.323984,
        image: "",
        text: "26 ///bleat.deflection.junior✓"
    },
    //27 ///duck.eager.pack✓       
    {
        id: "orienteering63",
        title: "Orienteering 63",
        latitude: 51.758719,
        longitude: -1.322372,
        image: "",
        text: "27 ///duck.eager.pack✓"
    },
    //28 ///dock.worth.spin ✓       
    {
        id: "orienteering64",
        title: "Orienteering 64",
        latitude: 51.759393,
        longitude: -1.321457,
        image: "",
        text: "28 ///dock.worth.spin ✓"
    },
    //29 ///stones.allows.dose✓       
    {
        id: "orienteering65",
        title: "Orienteering 65",
        latitude: 51.760039,
        longitude: -1.323723,
        image: "",
        text: "29 ///stones.allows.dose✓"
    },
    //30 ///legs.knots.split ✓       
    {
        id: "orienteering66",
        title: "Orienteering 66",
        latitude: 51.759985,
        longitude: -1.325379,
        image: "",
        text: "30 ///legs.knots.split ✓"
    },
    //31 ///weedy.spaces.doing✓       
    {
        id: "orienteering67",
        title: "Orienteering 67",
        latitude: 51.759473,
        longitude: -1.325859,
        image: "",
        text: "31 ///weedy.spaces.doing✓"
    },
    //32 ///proven.charm.leap✓       
    {
        id: "orienteering68",
        title: "Orienteering 68",
        latitude: 51.758476,
        longitude: -1.324856,
        image: "",
        text: "32 ///proven.charm.leap✓"
    },
    //33       
    {
        id: "orienteering69",
        title: "Orienteering 69",
        x: 1073,
        y: 515,
        image: "",
        text: "33"
    },
    //34 ✓       
    {
        id: "orienteering70",
        title: "Orienteering 70",
        x: 1092,
        y: 740,
        image: "",
        text: "34 ✓"
    },
    //35 ///shiny.strain.vibes       
    {
        id: "orienteering71",
        title: "Orienteering 71",
        latitude: 51.757183,
        longitude: -1.326948,
        image: "",
        text: "35 ///shiny.strain.vibes"
    },
    //36///wished.apple.dishes✓       
    {
        id: "orienteering72",
        title: "Orienteering 72",
        latitude: 51.757452, 
        longitude: -1.327428,
        image: "",
        text: "36///wished.apple.dishes✓"
    },
    //37 ///secret.gloves.extra       
    {
        id: "orienteering73",
        title: "Orienteering 73",
        latitude: 51.757263,
        longitude: -1.327602,
        image: "",
        text: "37 ///secret.gloves.extra"
    },
    //38 ///parade.upset.palms       
    {
        id: "orienteering74",
        title: "Orienteering 74",
        latitude: 51.756131,
        longitude: -1.327994,
        image: "",
        text: "38 ///parade.upset.palms"
    },
    //39 ///arts.reply.claims✓       
    {
        id: "orienteering75",
        title: "Orienteering 75",
        latitude: 51.760444,
        longitude: -1.327646,
        image: "",
        text: "39 ///arts.reply.claims✓"
    },


];

mapOverlays.push(
{

    id: "orienteering",
    title: "Orienteering",
    data: orienteering,
    markerStyle: { background: "#BF1E8F" },
    visible: false
});


const naturetrail = [

    /////cars.knots.ranked owl       
    {
        id: "naturetrail 1",
        title: "Nature Trail  1",
        latitude: 51.758988,
        longitude: -1.324028,
        image: "",
        text: "///cars.knots.ranked owl"
    },
    /////spark.cheat.shirts leaf       
    {
        id: "naturetrail 2",
        title: "Nature Trail  2",
        latitude: 51.755727,
        longitude: -1.324769,
        image: "",
        text: "///spark.cheat.shirts leaf"
    },
    /////globe.money.quest newt       
    {
        id: "naturetrail 3",
        title: "Nature Trail  3",
        latitude: 51.754838,
        longitude: -1.326338,
        image: "",
        text: "///globe.money.quest newt"
    },
    /////chair.dimes.horses beetle       
    {
        id: "naturetrail 4",
        title: "Nature Trail  4",
        latitude: 51.758449,
        longitude: -1.324769,
        image: "",
        text: "///chair.dimes.horses beetle"
    },
    /////vibes.linked.record rabbit       
    {
        id: "naturetrail 5",
        title: "Nature Trail  5",
        latitude: 51.757614,
        longitude: -1.32782,
        image: "",
        text: "///vibes.linked.record rabbit"
    },
    /////owners.scales.reason oak leaf       
    {
        id: "naturetrail 6",
        title: "Nature Trail  6",
        latitude: 51.755565,
        longitude: -1.323287,
        image: "",
        text: "///owners.scales.reason oak leaf"
    },
    /////points.amused.swing dragonfly       
    {
        id: "naturetrail 7",
        title: "Nature Trail  7",
        latitude: 51.756724,
        longitude: -1.325248,
        image: "",
        text: "///points.amused.swing dragonfly"
    },
    /////laptop.speak.nearly squirrel        
    {
        id: "naturetrail 8",
        title: "Nature Trail  8",
        latitude: 51.754838,
        longitude: -1.325466,
        image: "",
        text: "///laptop.speak.nearly squirrel "
    },
    /////codes.trees.gates woodlouse       
    {
        id: "naturetrail 9",
        title: "Nature Trail  9",
        latitude: 51.755188,
        longitude: -1.324464,
        image: "",
        text: "///codes.trees.gates woodlouse"
    },
    /////vote.crest.panels kingfisher       
    {
        id: "naturetrail 10",
        title: "Nature Trail  10",
        latitude: 51.756104,
        longitude: -1.328081,
        image: "",
        text: "///vote.crest.panels kingfisher"
    },


];

mapOverlays.push(
{

    id: "naturetrail",
    title: "Nature Trail",
    data: naturetrail,
    markerStyle: { background: "#2F7E8F" },
    visible: false
});

const willows = [

    /////smoke.fairly.juror A       
    {
        id: "willows1",
        title: "Willows 1",
        latitude: 51.75535,
        longitude: -1.324507,
        image: "",
        text: "///smoke.fairly.juror A"
    },
    /////swept.actor.tooth B       
    {
        id: "willows2",
        title: "Willows 2",
        latitude: 51.755835,
        longitude: -1.323636,
        image: "",
        text: "///swept.actor.tooth B"
    },
    /////chats.undulation.scare D       
    {
        id: "willows3",
        title: "Willows 3",
        latitude: 51.755458,
        longitude: -1.32259,
        image: "",
        text: "///chats.undulation.scare D"
    },
    /////gather.blur.limp E       
    {
        id: "willows4",
        title: "Willows 4",
        latitude: 51.754676,
        longitude: -1.325161,
        image: "",
        text: "///gather.blur.limp E"
    },
    /////alone.agent.cage E       
    {
        id: "willows5",
        title: "Willows 5",
        latitude: 51.756104,
        longitude: -1.323897,
        image: "",
        text: "///alone.agent.cage E"
    },
    /////secure.limbs.market G       
    {
        id: "willows6",
        title: "Willows 6",
        latitude: 51.755026,
        longitude: -1.32442,
        image: "",
        text: "///secure.limbs.market G"
    },
    /////frost.rinse.margin L       
    {
        id: "willows7",
        title: "Willows 7",
        latitude: 51.755053,
        longitude: -1.322938,
        image: "",
        text: "///frost.rinse.margin L"
    },
    /////coast.soap.zips N       
    {
        id: "willows8",
        title: "Willows 8",
        latitude: 51.755377,
        longitude: -1.324072,
        image: "",
        text: "///coast.soap.zips N"
    },
    /////edits.winks.flute R       
    {
        id: "willows9",
        title: "Willows 9",
        latitude: 51.754407,
        longitude: -1.323854,
        image: "",
        text: "///edits.winks.flute R"
    },
    /////newly.bricks.among T       
    {
        id: "willows10",
        title: "Willows 10",
        latitude: 51.754541,
        longitude: -1.324856,
        image: "",
        text: "///newly.bricks.among T"
    },
    /////vibrates.tooth.extra W       
    {
        id: "willows11",
        title: "Willows 11",
        latitude: 51.756131,
        longitude: -1.322633,
        image: "",
        text: "///vibrates.tooth.extra W"
    },
    /////today.field.transit W       
    {
        id: "willows12",
        title: "Willows 12",
        latitude: 51.755619,
        longitude: -1.323941,
        image: "",
        text: "///today.field.transit W"
    },
    /////O       
    {
        id: "willows13",
        title: "Willows 13",
        x: 1344,
        y: 1033,
        image: "",
        text: "O 1344, 1033"
    },

];

mapOverlays.push(
{

    id: "willows",
    title: "Willows Code Breaker",
    data: willows,
    markerStyle: { background: "#4F2EcF" },
    visible: false
});


const butterfly = [

    /////still.exist.fines bA       
    {
        id: "orienteering95",
        title: "Butterfly 1",
        latitude: 51.755242,
        longitude: -1.326774,
        image: "",
        text: "///still.exist.fines bA"
    },
    /////loans.cried.piper bD       
    {
        id: "orienteering96",
        title: "Butterfly 2",
        latitude: 51.756266,
        longitude: -1.325118,
        image: "",
        text: "///loans.cried.piper bD"
    },
    /////visual.precautions.chair bR       
    {
        id: "orienteering97",
        title: "Butterfly 3",
        latitude: 51.755107,
        longitude: -1.32442,
        image: "",
        text: "///visual.precautions.chair bR"
    },
    /////brands.rang.gross bZ       
    {
        id: "orienteering98",
        title: "Butterfly 4",
        latitude: 51.755242,
        longitude: -1.325248,
        image: "",
        text: "///brands.rang.gross bZ"
    },
    /////thanks.loads.region bZ       
    {
        id: "orienteering99",
        title: "Butterfly 5",
        latitude: 51.754892,
        longitude: -1.326774,
        image: "",
        text: "///thanks.loads.region bZ"
    },
    //
    {
        id: "butterfly6",
        title: "Butterfly 6",
        x: 927,
        y: 992,
        image: "",
        text: "927, 992"
    },
    //
    {
        id: "butterfly7",
        title: "Butterfly 7",
        x: 1126,
        y: 979,
        image: "",
        text: "1126, 979,"
    },

];

mapOverlays.push(
{

    id: "butterfly",
    title: "Butterfly Trail",
    data: butterfly,
    markerStyle: { background: "#567E2F" },
    visible: false
});




const other = [

    /////oiled.artist.limp sL       
    {
        id: "other1",
        title: "Other 1",
        latitude: 51.754838,
        longitude: -1.326033,
        image: "",
        text: "///oiled.artist.limp sL"
    },

];

mapOverlays.push(
{
    id: "other",
    title: "Other",
    data: other,
    markerStyle: { background: "#89c8E5" },
    visible: false
});

