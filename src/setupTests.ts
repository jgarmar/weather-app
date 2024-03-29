// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('./hooks/useWeather', () => ({
  useWeather: () => ({
    currentLocation: {
      distance: 295617,
      title: 'Madrid',
      locationType: 'City',
      woeid: 766273,
      lattLong: '40.420300,-3.705770',
    },
    locations: [],
    weatherInfo: {
      consolidatedWeather: [
        {
          id: 5303570145476608,
          weatherStateName: 'Light Cloud',
          weatherStateAbbr: 'lc',
          windDirectionCompass: 'NE',
          created: '2022-04-01T19:16:01.162354Z',
          applicableDate: '2022-04-03',
          minTemp: -0.63,
          maxTemp: 11.5,
          theTemp: 10.07,
          windSpeed: 6.491140367530953,
          windDirection: 46.66670428043918,
          airPressure: 1016.5,
          humidity: 42,
          visibility: 13.754672711365625,
          predictability: 70,
        },
        {
          id: 5963031168155648,
          weatherStateName: 'Heavy Cloud',
          weatherStateAbbr: 'hc',
          windDirectionCompass: 'NE',
          created: '2022-04-01T19:16:03.957222Z',
          applicableDate: '2022-04-04',
          minTemp: 0.47,
          maxTemp: 12.69,
          theTemp: 10.195,
          windSpeed: 9.532294723415255,
          windDirection: 49.667721056836534,
          airPressure: 1016.5,
          humidity: 42,
          visibility: 13.719254553408096,
          predictability: 71,
        },
        {
          id: 6641056985645056,
          weatherStateName: 'Heavy Cloud',
          weatherStateAbbr: 'hc',
          windDirectionCompass: 'NE',
          created: '2022-04-01T19:16:06.852297Z',
          applicableDate: '2022-04-05',
          minTemp: 1.9300000000000002,
          maxTemp: 13.79,
          theTemp: 11.780000000000001,
          windSpeed: 5.392293093870463,
          windDirection: 49.33387178440327,
          airPressure: 1016.5,
          humidity: 40,
          visibility: 14.740478107850155,
          predictability: 71,
        },
        {
          id: 5157240811028480,
          weatherStateName: 'Heavy Cloud',
          weatherStateAbbr: 'hc',
          windDirectionCompass: 'NW',
          created: '2022-04-01T19:16:09.849337Z',
          applicableDate: '2022-04-06',
          minTemp: 2.4549999999999996,
          maxTemp: 16.85,
          theTemp: 13.62,
          windSpeed: 3.3669641294838146,
          windDirection: 310,
          airPressure: 1015,
          humidity: 43,
          visibility: 9.999726596675416,
          predictability: 71,
        },
        {
          id: 4631161809666048,
          weatherStateName: 'Light Cloud',
          weatherStateAbbr: 'lc',
          windDirectionCompass: 'WSW',
          created: '2022-04-01T19:16:13.043212Z',
          applicableDate: '2022-04-07',
          minTemp: 5.43,
          maxTemp: 19.689999999999998,
          theTemp: 16.81,
          windSpeed: 5.013678119780482,
          windDirection: 258.5,
          airPressure: 1019,
          humidity: 43,
          visibility: 9.999726596675416,
          predictability: 70,
        },
      ],
      time: '2022-04-02T00:15:25.167802+02:00',
      sunRise: '2022-04-02T07:57:12.929591+02:00',
      sunSet: '2022-04-02T20:40:17.619426+02:00',
      timezoneName: 'LMT',
      parent: {
        title: 'Spain',
        locationType: 'Country',
        woeid: 23424950,
        lattLong: '39.894890,-2.988310',
      },
      sources: [
        {
          title: 'BBC',
          slug: 'bbc',
          url: 'http://www.bbc.co.uk/weather/',
          crawlRate: 360,
        },
        {
          title: 'Forecast.io',
          slug: 'forecast-io',
          url: 'http://forecast.io/',
          crawlRate: 480,
        },
        {
          title: 'HAMweather',
          slug: 'hamweather',
          url: 'http://www.hamweather.com/',
          crawlRate: 360,
        },
        {
          title: 'Met Office',
          slug: 'met-office',
          url: 'http://www.metoffice.gov.uk/',
          crawlRate: 180,
        },
        {
          title: 'OpenWeatherMap',
          slug: 'openweathermap',
          url: 'http://openweathermap.org/',
          crawlRate: 360,
        },
        {
          title: 'Weather Underground',
          slug: 'wunderground',
          url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
          crawlRate: 720,
        },
        {
          title: 'World Weather Online',
          slug: 'world-weather-online',
          url: 'http://www.worldweatheronline.com/',
          crawlRate: 360,
        },
      ],
      title: 'Madrid',
      locationType: 'City',
      woeid: 766273,
      lattLong: '40.420300,-3.705770',
      timezone: 'Europe/Madrid',
    },
    weatherStateImage: {
      sn: '/assets/svg/sn.svg',
      sl: '/assets/svg/sl.svg',
      h: '/assets/svg/h.svg',
      t: '/assets/svg/t.svg',
      hr: '/assets/svg/hr.svg',
      lr: '/assets/svg/lr.svg',
      s: '/assets/svg/s.svg',
      hc: '/assets/svg/hc.svg',
      lc: '/assets/svg/lc.svg',
      c: '/assets/svg/c.svg',
    },
    currentWeather: {
      id: 4887517166829568,
      weatherStateName: 'Light Cloud',
      weatherStateAbbr: 'lc',
      windDirectionCompass: 'N',
      created: '2022-04-01T19:15:59.046382Z',
      applicableDate: '2022-04-02',
      minTemp: 0.20499999999999996,
      maxTemp: 11.18,
      theTemp: 9.035,
      windSpeed: 6.802470334844508,
      windDirection: 6,
      airPressure: 1020,
      humidity: 40,
      visibility: 11.289382506164003,
      predictability: 70,
    },
    forecastWeather: [
      {
        id: 5303570145476608,
        weatherStateName: 'Light Cloud',
        weatherStateAbbr: 'lc',
        windDirectionCompass: 'NE',
        created: '2022-04-01T19:16:01.162354Z',
        applicableDate: '2022-04-03',
        minTemp: -0.63,
        maxTemp: 11.5,
        theTemp: 10.07,
        windSpeed: 6.491140367530953,
        windDirection: 46.66670428043918,
        airPressure: 1016.5,
        humidity: 42,
        visibility: 13.754672711365625,
        predictability: 70,
      },
      {
        id: 5963031168155648,
        weatherStateName: 'Heavy Cloud',
        weatherStateAbbr: 'hc',
        windDirectionCompass: 'NE',
        created: '2022-04-01T19:16:03.957222Z',
        applicableDate: '2022-04-04',
        minTemp: 0.47,
        maxTemp: 12.69,
        theTemp: 10.195,
        windSpeed: 9.532294723415255,
        windDirection: 49.667721056836534,
        airPressure: 1016.5,
        humidity: 42,
        visibility: 13.719254553408096,
        predictability: 71,
      },
      {
        id: 6641056985645056,
        weatherStateName: 'Heavy Cloud',
        weatherStateAbbr: 'hc',
        windDirectionCompass: 'NE',
        created: '2022-04-01T19:16:06.852297Z',
        applicableDate: '2022-04-05',
        minTemp: 1.9300000000000002,
        maxTemp: 13.79,
        theTemp: 11.780000000000001,
        windSpeed: 5.392293093870463,
        windDirection: 49.33387178440327,
        airPressure: 1016.5,
        humidity: 40,
        visibility: 14.740478107850155,
        predictability: 71,
      },
      {
        id: 5157240811028480,
        weatherStateName: 'Heavy Cloud',
        weatherStateAbbr: 'hc',
        windDirectionCompass: 'NW',
        created: '2022-04-01T19:16:09.849337Z',
        applicableDate: '2022-04-06',
        minTemp: 2.4549999999999996,
        maxTemp: 16.85,
        theTemp: 13.62,
        windSpeed: 3.3669641294838146,
        windDirection: 310,
        airPressure: 1015,
        humidity: 43,
        visibility: 9.999726596675416,
        predictability: 71,
      },
      {
        id: 4631161809666048,
        weatherStateName: 'Light Cloud',
        weatherStateAbbr: 'lc',
        windDirectionCompass: 'WSW',
        created: '2022-04-01T19:16:13.043212Z',
        applicableDate: '2022-04-07',
        minTemp: 5.43,
        maxTemp: 19.689999999999998,
        theTemp: 16.81,
        windSpeed: 5.013678119780482,
        windDirection: 258.5,
        airPressure: 1019,
        humidity: 43,
        visibility: 9.999726596675416,
        predictability: 70,
      },
    ],
    showLocationSearch: false,
    tempUnit: 'C',
    setCurrentLocation: jest.fn(),
    setShowLocationSearch: jest.fn(),
    setCurrentDefaultLocation: jest.fn(),
    setTempUnit: jest.fn(),
    parseTemp: jest.fn(),
  }),
}));

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

global.navigator.geolocation = mockGeolocation;
