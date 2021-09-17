import {Text} from "@react-spectrum/text"
import {Weather} from "api/weather"
import {FC} from "react"

import styles from "./Temperature.module.css"

type TemperatureProps = {
    weather: Weather
}

const Temperature: FC<TemperatureProps> = ({weather}) => {
    return (
        <div className={styles.temperature}>
            {weather ? (
                <div className="results">
                    <Text UNSAFE_className="">{weather.temp}</Text>

                    <Text>{`High ${weather.temp_max}`}</Text>
                    <Text>{`Low ${weather.temp_min}`}</Text>
                    <Text>{`Feels like ${weather.feels_like}`}</Text>
                </div>
            ) : null}
        </div>
    )
}

export default Temperature
