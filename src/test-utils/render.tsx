import {lightTheme, Provider, SSRProvider} from "@adobe/react-spectrum"
import {render, RenderOptions, RenderResult} from "@testing-library/react"
import {ReactElement} from "react"

const Providers = ({children}) => {
    return (
        <SSRProvider>
            <Provider theme={lightTheme}>{children}</Provider>
        </SSRProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: RenderOptions,
): RenderResult => render(ui, {wrapper: Providers, ...options})

export * from "@testing-library/react"
export {customRender as render}
