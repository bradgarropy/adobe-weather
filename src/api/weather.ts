const OPEN_WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
const COUNTRY_CODE = "US"

type Weather = {
    temp: number
    temp_max: number
    temp_min: number
    feels_like: number
}

const getWeather = async (zipCode: string): Promise<Weather> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${COUNTRY_CODE}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`
    const response = await fetch(url)
    const json = await response.json()

    const weather = {
        temp: Math.round(json.main.temp),
        temp_max: Math.round(json.main.temp_max),
        temp_min: Math.round(json.main.temp_min),
        feels_like: Math.round(json.main.feels_like),
    }

    return weather
}

export {getWeather}
export type {Weather}
