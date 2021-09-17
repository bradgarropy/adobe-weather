import Temperature from "components/Temperature"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Temperature />)
    expect(screen.getByText("Temperature"))
})
