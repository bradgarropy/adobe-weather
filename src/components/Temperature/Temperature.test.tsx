import Temperature from "components/Temperature"
import {mockWeather} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows temperatures", () => {
    render(<Temperature weather={mockWeather} />)

    expect(screen.getByText("83°"))
    expect(screen.getByText("Feels like 86°"))
    expect(screen.getByText("High 86° / Low 79°"))
})

test("shows nothing", () => {
    render(<Temperature weather={null} />)

    expect(screen.queryByText("83°")).not
    expect(screen.queryByText("Feels like 86°")).not
    expect(screen.queryByText("High 86° / Low 79°")).not
})
