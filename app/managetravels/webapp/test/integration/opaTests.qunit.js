sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/cap/managetravels/test/integration/FirstJourney',
		'sap/fe/cap/managetravels/test/integration/pages/TravelList',
		'sap/fe/cap/managetravels/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/cap/managetravels') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);