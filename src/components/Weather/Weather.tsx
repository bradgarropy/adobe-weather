import {Form, Grid, SearchField} from "@adobe/react-spectrum"
import {getWeather, Weather as WeatherType} from "api/weather"
import Temperature from "components/Temperature"
import {FC, useState} from "react"

const Weather: FC = () => {
    const [zipCode, setZipCode] = useState("")
    const [weather, setWeather] = useState<WeatherType>()

    const onChange = (newZipCode: string) => {
        setZipCode(newZipCode)
    }

    const onSubmit = async zipCode => {
        const newWeather = await getWeather(zipCode)
        setWeather(newWeather)
        setZipCode("")
    }

    return (
        <Grid justifyContent="center" marginTop="size-1000" rowGap="size-400">
            <Form>
                <SearchField
                    label="Zip Code"
                    value={zipCode}
                    autoComplete="postal-code"
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </Form>

            <Temperature weather={weather} />
        </Grid>
    )
}

export default Weather
