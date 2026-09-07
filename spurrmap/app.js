
/*
 * Cumnor Hurst Map
 *
 * GPS behaviour:
 *
 *   - GPS is OFF when the app starts.
 *   - "Show location" starts GPS.
 *   - "Hide location" stops GPS.
 *   - GPS position is shown only when it falls within
 *     the area covered by the map image.
 *   - If the user moves outside the map area, GPS is
 *     automatically stopped.
 *   - The marker is removed when GPS stops.
 *   - "Outside map area" is shown temporarily when
 *     the user leaves the map.
 *
 * Map controls:
 *
 *   - One-finger pan
 *   - Pinch-to-zoom
 *   - Zoom +/- buttons
 *
 * mapProjection.js provides gpsToPixel().
 */


/* ============================================================
 * SETTINGS
 * ============================================================ */

const MIN_ZOOM = 1.0;
const MAX_ZOOM = 15.0;
const BUTTON_ZOOM_STEP = 0.5;
const RICHARD_DEBUG = false;
const ALLOW_OUTSIDE_MAP = false;

/*
 * GPS deliberately starts OFF.
 */
const START_GPS_ON_LOAD = false;

/*
 * When GPS starts, centre the map on the user's position.
 */
const CENTER_ON_GPS_START = true;

/*
 * Keep following the user's GPS position until the
 * user manually moves the map.
 */
const FOLLOW_GPS = true;

/*
 * How long temporary GPS messages remain visible.
 */
const GPS_MESSAGE_TIME = 3500;


/* ============================================================
 * ELEMENTS
 * ============================================================ */

const mapContainer =
    document.getElementById("map-container");

const mapImage =
    document.getElementById("map-image");

const marker =
    document.getElementById("position-marker");

const accuracyCircle =
    document.getElementById("accuracy-circle");

const gpsButton =
    document.getElementById("gps-button");

const gpsStatus =
    document.getElementById("gps-status");


/* ============================================================
 * MAP STATE
 * ============================================================ */

let fitScale = 1;
let zoom = 1;
let mapScale = 1;
let mapOffsetX = 0;
let mapOffsetY = 0;


/* ============================================================
 * GPS STATE
 * ============================================================ */

let latitude = null;
let longitude = null;
let gpsAccuracy = null;


/*
 * ID returned by watchPosition().
 *
 * null = GPS not running.
 */
let watchId = null;

/*
 * True while GPS is running.
 */
let gpsActive = false;

/*
 * True while the map should follow GPS.
 */
let followGPS = false;

/*
 * Used to cancel an old temporary message.
 */
let gpsMessageTimer = null;


/* ============================================================
 * POINTER STATE
 * ============================================================ */

const pointers = new Map();

/*
 * One-finger pan.
 */
let panStartX = 0;
let panStartY = 0;
let panStartOffsetX = 0;
let panStartOffsetY = 0;

/*
 * Pinch zoom.
 */
let pinchStartDistance = 0;
let pinchStartZoom = 1;
let pinchMapX = 0;
let pinchMapY = 0;


/* ============================================================
 * UTILITY
 * ============================================================ */

function clamp(value, minimum, maximum) 
{
    return Math.max(minimum, Math.min(maximum, value));
}


function pointerDistance(
    p1,
    p2
) 
{

    const dx =
        p2.x - p1.x;

    const dy =
        p2.y - p1.y;

    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


function pointerMidpoint(
    p1,
    p2
) 
{

    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2
    };
}


/* ============================================================
 * TEMPORARY GPS MESSAGE
 * ============================================================ */

function showGPSMessage(message) {

    /*
     * Cancel any previous timer.
     */
    if (gpsMessageTimer !== null) 
    {
        clearTimeout(gpsMessageTimer);
        gpsMessageTimer = null;
    }

    /*
     * Hide the GPS button while the message
     * is being displayed.
     */
    gpsButton.style.display = "none";


    gpsStatus.textContent =
        message;


    /*
     * Restore the button after a few seconds.
     */
    gpsMessageTimer =
        setTimeout(
            function() {

                gpsStatus.textContent =
                    "";

                gpsButton.style.display =
                    "";

                gpsMessageTimer =
                    null;

            },
            GPS_MESSAGE_TIME
        );
}


/* ============================================================
 * CLEAR GPS MESSAGE
 * ============================================================ */

function clearGPSMessage() 
{
    if (gpsMessageTimer !== null) 
    {
        clearTimeout(gpsMessageTimer);
        gpsMessageTimer = null;
    }

    gpsStatus.textContent = "";
}


/* ============================================================
 * MAP SCALE
 * ============================================================ */

function calculateMapScale() {

    mapScale =
        fitScale * zoom;
}


/* ============================================================
 * APPLY MAP TRANSFORM
 * ============================================================ */

function applyMapTransform() {

    mapImage.style.transform =
        "translate(" +
        mapOffsetX +
        "px, " +
        mapOffsetY +
        "px) scale(" +
        mapScale +
        ")";
}


/* ============================================================
 * DISPLAY MAP
 * ============================================================ */

function displayMap() {

    const width =
        mapContainer.clientWidth;

    const height =
        mapContainer.clientHeight;

    const imageWidth =
        mapImage.naturalWidth;

    const imageHeight =
        mapImage.naturalHeight;


    if (
        !imageWidth ||
        !imageHeight
    ) {

        return;
    }


    /*
     * Scale required to fit the complete image.
     */
    fitScale =
        Math.min(
            width / imageWidth,
            height / imageHeight
        );


    zoom =
        clamp(
            zoom,
            MIN_ZOOM,
            MAX_ZOOM
        );


    calculateMapScale();


    /*
     * Centre the map.
     */
    mapOffsetX =
        (
            width -
            imageWidth * mapScale
        ) / 2;

    mapOffsetY =
        (
            height -
            imageHeight * mapScale
        ) / 2;


    /*
     * Keep image at natural size.
     */
    mapImage.style.width =
        imageWidth + "px";

    mapImage.style.height =
        imageHeight + "px";


    applyMapTransform();

    updateMarker();
}


/* ============================================================
 * IMAGE -> SCREEN
 * ============================================================ */

function imageToScreen(
    x,
    y
) {

    return {

        x:
            mapOffsetX +
            x * mapScale,

        y:
            mapOffsetY +
            y * mapScale
    };
}


/* ============================================================
 * TEST WHETHER GPS POSITION IS ON MAP
 * ============================================================ */

function isPositionInsideMap(
    imageX,
    imageY
) {

    return (

        imageX >= 0 &&

        imageX <= mapImage.naturalWidth &&

        imageY >= 0 &&

        imageY <= mapImage.naturalHeight
    );
}


/* ============================================================
 * UPDATE MARKER
 * ============================================================ */

function updateMarker() {

    /*
     * No GPS position.
     */
    if (
        latitude === null ||
        longitude === null
    ) {

        marker.style.display =
            "none";

        accuracyCircle.style.display =
            "none";

        return;
    }


    /*
     * Convert GPS to image coordinates.
     */
    const p =
        MapProjection.gpsToPixel(
            latitude,
            longitude
        );

	if (RICHARD_DEBUG)
	{
		showGPSMessage("lat=" + latitude + ", long=" + longitude + 
			", x=" + p.x + ", y=" + p.y + 
			", inMap=" + isPositionInsideMap(p.x, p.y)); /*richard*/
	}

    /*
     * Don't display a position which isn't represented
     * by the map.
     */
    if (!ALLOW_OUTSIDE_MAP && !isPositionInsideMap(p.x, p.y)) 
    {

        marker.style.display =
            "none";

        accuracyCircle.style.display =
            "none";

        return;
    }


    /*
     * Convert image position to screen position.
     */
    const screen =
        imageToScreen(
            p.x,
            p.y
        );


    /*
     * Position marker.
     */
    marker.style.left =
        screen.x + "px";

    marker.style.top =
        screen.y + "px";

    marker.style.display =
        "block";


    /*
     * Accuracy circle.
     */
    if (
        gpsAccuracy !== null &&
        gpsAccuracy > 0
    ) {

        const radiusPixels =
            metresToImagePixels(
                gpsAccuracy,
                latitude
            );


        const diameter =
            radiusPixels *
            2 *
            mapScale;


        accuracyCircle.style.width =
            diameter + "px";

        accuracyCircle.style.height =
            diameter + "px";

        accuracyCircle.style.left =
            screen.x + "px";

        accuracyCircle.style.top =
            screen.y + "px";

        accuracyCircle.style.display =
            "block";

    } else {

        accuracyCircle.style.display =
            "none";
    }
}


/* ============================================================
 * METRES -> IMAGE PIXELS
 * ============================================================ */

function metresToImagePixels(
    metres,
    lat
) {

    const earthCircumference =
        40075016.686;


    const metresPerDegreeLongitude =
        earthCircumference *
        Math.cos(
            lat * Math.PI / 180
        ) /
        360;


    const degreesLongitude =
        metres /
        metresPerDegreeLongitude;


    const p1 =
        MapProjection.gpsToPixel(
            lat,
            longitude
        );


    const p2 =
        MapProjection.gpsToPixel(
            lat,
            longitude +
            degreesLongitude
        );


    const dx =
        p2.x - p1.x;

    const dy =
        p2.y - p1.y;


    return Math.sqrt(
        dx * dx +
        dy * dy
    );
}


/* ============================================================
 * CENTRE MAP ON IMAGE POINT
 * ============================================================ */

function centreMapOnImagePoint(
    x,
    y
) {

    const width =
        mapContainer.clientWidth;

    const height =
        mapContainer.clientHeight;


    mapOffsetX =
        width / 2 -
        x * mapScale;

    mapOffsetY =
        height / 2 -
        y * mapScale;


    applyMapTransform();

    updateMarker();
}


/* ============================================================
 * CENTRE MAP ON GPS
 * ============================================================ */

function centreMapOnGPS() {

    if (
        latitude === null ||
        longitude === null
    ) {

        return;
    }


    const p =
        MapProjection.gpsToPixel(
            latitude,
            longitude
        );

    /*
     * Never centre on a position outside the map.
     */
    if (!ALLOW_OUTSIDE_MAP && !isPositionInsideMap(p.x, p.y)) 
    {
        return;
    }

    centreMapOnImagePoint(p.x, p.y);
}


/* ============================================================
 * ZOOM AT SCREEN POSITION
 * ============================================================ */

function setZoomAt(
    newZoom,
    screenX,
    screenY
) {

    newZoom =
        clamp(
            newZoom,
            MIN_ZOOM,
            MAX_ZOOM
        );


    if (
        newZoom === zoom
    ) {

        return;
    }


    /*
     * Find image coordinate under the pointer.
     */
    const imageX =
        (
            screenX -
            mapOffsetX
        ) /
        mapScale;

    const imageY =
        (
            screenY -
            mapOffsetY
        ) /
        mapScale;


    zoom =
        newZoom;


    calculateMapScale();


    /*
     * Keep that image coordinate under the pointer.
     */
    mapOffsetX =
        screenX -
        imageX * mapScale;

    mapOffsetY =
        screenY -
        imageY * mapScale;


    applyMapTransform();

    updateMarker();
}


/* ============================================================
 * ZOOM BUTTONS
 * ============================================================ */

function createZoomButtons() {

    const zoomControls =
        document.createElement("div");

    zoomControls.id =
        "zoom-controls";


    const zoomIn =
        document.createElement("button");

    zoomIn.textContent =
        "+";

    zoomIn.title =
        "Zoom in";


    const zoomOut =
        document.createElement("button");

    zoomOut.textContent =
        "−";

    zoomOut.title =
        "Zoom out";


    zoomControls.appendChild(
        zoomIn
    );

    zoomControls.appendChild(
        zoomOut
    );


    mapContainer.appendChild(
        zoomControls
    );


    zoomIn.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            setZoomAt(

                zoom +
                BUTTON_ZOOM_STEP,

                mapContainer.clientWidth / 2,

                mapContainer.clientHeight / 2
            );
        }
    );


    zoomOut.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();


            setZoomAt(

                zoom -
                BUTTON_ZOOM_STEP,

                mapContainer.clientWidth / 2,

                mapContainer.clientHeight / 2
            );
        }
    );
}


/* ============================================================
 * POINTER DOWN
 * ============================================================ */

mapContainer.addEventListener(
    "pointerdown",
    function(event) {

        /*
         * Ignore zoom controls.
         */
        if (
            event.target.closest &&
            event.target.closest(
                "#zoom-controls"
            )
        ) {

            return;
        }


        mapContainer.setPointerCapture(
            event.pointerId
        );


        const rect =
            mapContainer.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;

        const y =
            event.clientY -
            rect.top;


        pointers.set(
            event.pointerId,
            {
                x: x,
                y: y
            }
        );


        /*
         * Manual map movement stops automatic following.
         */
        if (
            gpsActive
        ) {

            followGPS =
                false;
        }


        /*
         * One finger = pan.
         */
        if (
            pointers.size === 1
        ) {

            panStartX =
                x;

            panStartY =
                y;

            panStartOffsetX =
                mapOffsetX;

            panStartOffsetY =
                mapOffsetY;
        }


        /*
         * Two fingers = pinch.
         */
        if (
            pointers.size === 2
        ) {

            const points =
                Array.from(
                    pointers.values()
                );


            const p1 =
                points[0];

            const p2 =
                points[1];


            pinchStartDistance =
                pointerDistance(
                    p1,
                    p2
                );


            const centre =
                pointerMidpoint(
                    p1,
                    p2
                );


            pinchMapX =
                (
                    centre.x -
                    mapOffsetX
                ) /
                mapScale;

            pinchMapY =
                (
                    centre.y -
                    mapOffsetY
                ) /
                mapScale;


            pinchStartZoom =
                zoom;
        }


        event.preventDefault();
    },
    {
        passive: false
    }
);


/* ============================================================
 * POINTER MOVE
 * ============================================================ */

mapContainer.addEventListener(
    "pointermove",
    function(event) {

        if (
            !pointers.has(
                event.pointerId
            )
        ) {

            return;
        }


        const rect =
            mapContainer.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left;

        const y =
            event.clientY -
            rect.top;


        pointers.set(
            event.pointerId,
            {
                x: x,
                y: y
            }
        );


        /*
         * ONE FINGER = PAN
         */
        if (
            pointers.size === 1
        ) {

            const dx =
                x -
                panStartX;

            const dy =
                y -
                panStartY;


            mapOffsetX =
                panStartOffsetX +
                dx;

            mapOffsetY =
                panStartOffsetY +
                dy;


            applyMapTransform();

            updateMarker();


            event.preventDefault();

            return;
        }


        /*
         * TWO FINGERS = PINCH ZOOM
         */
        if (
            pointers.size === 2
        ) {

            const points =
                Array.from(
                    pointers.values()
                );


            const p1 =
                points[0];

            const p2 =
                points[1];


            const distance =
                pointerDistance(
                    p1,
                    p2
                );


            if (
                pinchStartDistance <= 0
            ) {

                return;
            }


            const scaleFactor =
                distance /
                pinchStartDistance;


            let newZoom =
                pinchStartZoom *
                scaleFactor;


            newZoom =
                clamp(
                    newZoom,
                    MIN_ZOOM,
                    MAX_ZOOM
                );


            const centre =
                pointerMidpoint(
                    p1,
                    p2
                );


            const newMapScale =
                fitScale *
                newZoom;


            /*
             * Keep the original image point under
             * the pinch centre.
             */
            mapOffsetX =
                centre.x -
                pinchMapX *
                newMapScale;

            mapOffsetY =
                centre.y -
                pinchMapY *
                newMapScale;


            zoom =
                newZoom;

            mapScale =
                newMapScale;


            applyMapTransform();

            updateMarker();


            event.preventDefault();
        }
    },
    {
        passive: false
    }
);


/* ============================================================
 * POINTER UP / CANCEL
 * ============================================================ */

function pointerFinished(
    event
) {

    pointers.delete(
        event.pointerId
    );


    /*
     * If one finger remains after a pinch,
     * initialise a new pan operation.
     */
    if (
        pointers.size === 1
    ) {

        const entry =
            Array.from(
                pointers.entries()
            )[0];


        const point =
            entry[1];


        panStartX =
            point.x;

        panStartY =
            point.y;

        panStartOffsetX =
            mapOffsetX;

        panStartOffsetY =
            mapOffsetY;
    }


    event.preventDefault();
}


mapContainer.addEventListener(
    "pointerup",
    pointerFinished,
    {
        passive: false
    }
);


mapContainer.addEventListener(
    "pointercancel",
    pointerFinished,
    {
        passive: false
    }
);


/* ============================================================
 * GPS POSITION RECEIVED
 * ============================================================ */

function processGPSPosition(
    position
) {

    latitude =
        position.coords.latitude;

    longitude =
        position.coords.longitude;

    gpsAccuracy =
        position.coords.accuracy;


    /*
     * Convert GPS position to image coordinates.
     */
    const p =
        MapProjection.gpsToPixel(
            latitude,
            longitude
        );

    /*
     * Check whether the position is represented
     * by the map.
     */
    const insideMap =
        isPositionInsideMap(
            p.x,
            p.y
        );


    /*
     * User has left the mapped area.
     */
    if (!ALLOW_OUTSIDE_MAP && !insideMap) 
    {

        /*
         * Remove marker immediately.
         */
        marker.style.display =
            "none";

        accuracyCircle.style.display =
            "none";


        /*
         * Stop GPS.
         */
        stopGPS();


        /*
         * Tell the user what happened.
         */
		showGPSMessage(
			"You are not within the map area"
		);

        return;
    }


    /*
     * User is inside the map.
     */
    updateMarker();


    /*
     * Automatically centre while following GPS.
     */
    if (
        gpsActive &&
        followGPS
    ) {

        centreMapOnGPS();
    }
}


/* ============================================================
 * GPS ERROR
 * ============================================================ */

function gpsError(
    error
) {

    console.log(
        "GPS error:",
        error
    );


    /*
     * Do not stop GPS merely because one reading
     * failed. watchPosition() will normally continue
     * trying to obtain another fix.
     */
}


/* ============================================================
 * START GPS
 * ============================================================ */

function startGPS() {

    /*
     * Already running.
     */
    if (
        gpsActive
    ) {

        return;
    }


    if (
        !navigator.geolocation
    ) {

        showGPSMessage(
            "GPS location is not available"
        );

        return;
    }


    /*
     * A new attempt clears any previous temporary
     * message.
     */
    clearGPSMessage();


    /*
     * Start continuous GPS updates.
     */
    watchId =
        navigator.geolocation.watchPosition(

            function(position) {

                processGPSPosition(
                    position
                );
            },

            function(error) {

                gpsError(
                    error
                );
            },

            {

                enableHighAccuracy:
                    true,

                timeout:
                    20000,

                maximumAge:
                    2000
            }
        );


	GPSstarted();

    /*
     * If a previous position is available, centre
     * immediately.
     */
    if (CENTER_ON_GPS_START && latitude !== null) 
    {

        const p =
            MapProjection.gpsToPixel(
                latitude,
                longitude
            );


        if (ALLOW_OUTSIDE_MAP || isPositionInsideMap(p.x, p.y)) 
        {
            centreMapOnGPS();
        }
    }
}


function GPSstarted() 
{
    gpsActive = true;
    followGPS = FOLLOW_GPS;

    /* 
     * Update button.
     */
    gpsButton.textContent = "Hide location";
}


/* ============================================================
 * STOP GPS
 * ============================================================ */

function stopGPS() {

    /*
     * Stop continuous GPS updates.
     */
    if (
        watchId !== null
    ) {

        navigator.geolocation.clearWatch(
            watchId
        );

        watchId =
            null;
    }


    gpsActive =
        false;

    followGPS =
        false;


    /*
     * Forget the current GPS position.
     *
     * This prevents an old position being displayed
     * after GPS has stopped.
     */
    latitude =
        null;

    longitude =
        null;

    gpsAccuracy =
        null;


    /*
     * Hide marker.
     */
    marker.style.display =
        "none";

    accuracyCircle.style.display =
        "none";


    /*
     * Button returns to the action available
     * when GPS is off.
     */
    gpsButton.textContent =
        "Show location";
}


/* ============================================================
 * GPS BUTTON
 * ============================================================ */

gpsButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        if (
            gpsActive
        ) {

            stopGPS();

        } else {

            startGPS();
        }
    }
);


/* ============================================================
 * MAP IMAGE LOAD
 * ============================================================ */

mapImage.addEventListener(
    "load",
    function() {

        displayMap();


        /*
         * GPS deliberately does not start here.
         */
        if (
            START_GPS_ON_LOAD
        ) {

            startGPS();
        }
    }
);


/* ============================================================
 * WINDOW RESIZE
 * ============================================================ */

window.addEventListener(
    "resize",
    function() {

        displayMap();


        /*
         * Restore GPS centring after a resize if
         * following is active.
         */
        if (
            gpsActive &&
            followGPS
        ) {

            centreMapOnGPS();
        }
    }
);


/* ============================================================
 * INITIALISE
 * ============================================================ */

createZoomButtons();


/*
 * If image has already loaded, initialise it.
 */
if (
    mapImage.complete
) {

    displayMap();


    /*
     * Normally false.
     */
    if (
        START_GPS_ON_LOAD
    ) {

        startGPS();
    }
}

