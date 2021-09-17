import {Form, SearchField} from "@adobe/react-spectrum"
import {getWeather, Weather as WeatherType} from "api/weather"
import Temperature from "components/Temperature"
import {FC, useState} from "react"

import styles from "./Weather.module.css"

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
        <div className={styles.weather}>
            <Form labelPosition="side">
                <SearchField
                    label="Zip Code"
                    value={zipCode}
                    autoComplete="postal-code"
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </Form>

            <Temperature weather={weather} />
        </div>
    )
}

export default Weather
