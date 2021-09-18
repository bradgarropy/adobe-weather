import {Grid, Text} from "@adobe/react-spectrum"
import {Weather} from "api/weather"
import {FC} from "react"

import styles from "./Temperature.module.css"

type TemperatureProps = {
    weather: Weather
}

const Temperature: FC<TemperatureProps> = ({weather}) => {
    return (
        <>
            {weather ? (
                <Grid justifyItems="center" rowGap="size-100">
                    <Text UNSAFE_className={styles.temperature}>
                        {`${weather.temp}°`}
                    </Text>

                    <Text UNSAFE_className={styles.feelsLike}>
                        {`Feels like ${weather.feels_like}°`}
                    </Text>

                    <Text UNSAFE_className={styles.minMax}>
                        {`High ${weather.temp_max}° / Low ${weather.temp_min}°`}
                    </Text>
                </Grid>
            ) : null}
        </>
    )
}

export default Temperature
