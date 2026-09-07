/*
 * Cumnor Hurst GPS -> image coordinate conversion.
 *
 * This reproduces the approach used by the
 * original Android application:
 *
 *     GPS latitude/longitude
 *          ↓
 *     local Cartesian coordinates
 *          ↓
 *     two-point similarity transformation
 *          ↓
 *     image pixels
 *
 * Image coordinates:
 *
 *     0,0 = top left
 *     X increases to the right
 *     Y increases downward
 */

const HURST_MAP = false;


/*
 * GPS reference points.
 */
/* 
if (HURST_MAP)
{
  const ref1 = 
  {
      x: 281,
      y: 450,
      latitude: 51.73533848,
      longitude: -1.317214914
  };

  const ref2 = 
  {
      x: 1468,
      y: 27,
      latitude: 51.737295052,
      longitude: -1.30823373537
  };
}
else if SPURR_MAP
{
*/
  const ref1 = 
  {
      x: 80,
      y: 24,
      latitude: 51.267216,
      longitude: -0.55369174
  };

  const ref2 = 
  {
      x: 1615,
      y: 1047,
      latitude: 51.248699,
      longitude: -0.51128712
  };
/*
}
else
{
  const ref1 = 
  {
      x: 382,
      y: 2006,
      latitude: 51.724002,
      longitude: -1.3643989
  };

  const ref2 = 
  {
      x: 1320,
      y: 126,
      latitude: 51.759804,
      longitude: -1.3349187
  };
}
*/



/*
 * Earth circumference.
 *
 * The old Android application used yards.
 *
 * The actual unit doesn't matter as long as
 * both reference points and the GPS position
 * use the same unit.
 *
 * We use metres here.
 */
const EARTH_CIRCUMFERENCE = 40075016.686;


/*
 * Convert GPS latitude/longitude to local
 * Cartesian coordinates.
 *
 * X = east/west
 * Y = north/south
 *
 * Y is deliberately negative for increasing
 * latitude, matching the original Android code.
 */
function gpsToLocal(latitude, longitude) {

    const latitudeRadians =
        ref1.latitude * Math.PI / 180;

    const metresPerDegreeLongitude =
        EARTH_CIRCUMFERENCE *
        Math.cos(latitudeRadians) / 360;

    const metresPerDegreeLatitude =
        EARTH_CIRCUMFERENCE / 360;


    const x =
        longitude *
        metresPerDegreeLongitude;

    const y =
        -latitude *
        metresPerDegreeLatitude;


    return {
        x: x,
        y: y
    };
}


/*
 * Convert GPS coordinates to image pixels.
 *
 * This is the equivalent of the Android:
 *
 *     matrix.setPolyToPoly(
 *         geo, 0,
 *         image, 0,
 *         2
 *     );
 *
 * for a two-point similarity transform.
 */
function gpsToPixel(latitude, longitude) {

    const g1 =
        gpsToLocal(
            ref1.latitude,
            ref1.longitude
        );

    const g2 =
        gpsToLocal(
            ref2.latitude,
            ref2.longitude
        );

    const gp =
        gpsToLocal(
            latitude,
            longitude
        );


    /*
     * Geographic vector between the
     * two reference points.
     */
    const gx =
        g2.x - g1.x;

    const gy =
        g2.y - g1.y;


    /*
     * Image vector between the two
     * reference points.
     */
    const ix =
        ref2.x - ref1.x;

    const iy =
        ref2.y - ref1.y;


    /*
     * Lengths of the two vectors.
     */
    const geographicLength =
        Math.sqrt(
            gx * gx +
            gy * gy
        );

    const imageLength =
        Math.sqrt(
            ix * ix +
            iy * iy
        );


    /*
     * Uniform scale.
     */
    const scale =
        imageLength /
        geographicLength;


    /*
     * Unit vector along the geographic
     * reference line.
     */
    const ux =
        gx / geographicLength;

    const uy =
        gy / geographicLength;


    /*
     * Unit vector perpendicular to it.
     */
    const vx = -uy;
    const vy = ux;


    /*
     * Position of the GPS point relative
     * to reference point 1.
     */
    const dx =
        gp.x - g1.x;

    const dy =
        gp.y - g1.y;


    /*
     * Coordinates in the rotated system.
     */
    const along =
        dx * ux +
        dy * uy;

    const across =
        dx * vx +
        dy * vy;


    /*
     * Convert to image coordinates.
     *
     * The image reference vector is:
     *
     *     (ix, iy)
     *
     * so we use its direction rather than
     * assuming that image X is geographic east.
     */
    const imageUx =
        ix / imageLength;

    const imageUy =
        iy / imageLength;


    /*
     * Perpendicular image direction.
     */
    const imageVx =
        -imageUy;

    const imageVy =
        imageUx;


    const x =
        ref1.x +
        along * scale * imageUx +
        across * scale * imageVx;

    const y =
        ref1.y +
        along * scale * imageUy +
        across * scale * imageVy;


    return {
        x: x,
        y: y
    };
}


const MapProjection = {

    ref1: ref1,
    ref2: ref2,

    gpsToLocal: gpsToLocal,
    gpsToPixel: gpsToPixel
};
