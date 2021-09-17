import {lightTheme, Provider, SSRProvider} from "@adobe/react-spectrum"
import {FC} from "react"

const Layout: FC = ({children}) => {
    return (
        <SSRProvider>
            <Provider theme={lightTheme}>{children}</Provider>
        </SSRProvider>
    )
}

export default Layout
