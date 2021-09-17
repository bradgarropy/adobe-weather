import Weather from "components/Weather"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Weather />)
    expect(screen.getByText("Weather"))
})
