import userEvent from "@testing-library/user-event"
import {getWeather} from "api/weather"
import Weather from "components/Weather"
import {mockWeather} from "test-utils/mocks"
import {act, render, screen, waitFor} from "test-utils/render"

jest.mock("api/weather")

const getWeatherMock = getWeather as jest.MockedFunction<typeof getWeather>
getWeatherMock.mockResolvedValue(mockWeather)

test("shows search bar", () => {
    render(<Weather />)
    expect(screen.getByLabelText("Zip Code"))
})

test("fetches weather", () => {
    render(<Weather />)

    act(() => {
        userEvent.type(screen.getByLabelText("Zip Code"), "78660{enter}")
    })

    waitFor(() => {
        expect(getWeather).toHaveBeenCalledTimes(1)
        expect(getWeather).toHaveBeenCalledWith("78660")
    })
})
