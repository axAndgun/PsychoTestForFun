import Homepage from "pages"
import { createContext, useState, useMemo } from "react"

export const GlobalContext = createContext({
    values: null,
    setValues: () => null,
})

function GlobalProvider({children}){
    const [values, setValues] = useState(0)

    const Gvalue = useMemo(
        ()=>({
            values,
            setValues
        }),
        [values]
    )

    return <GlobalContext.Provider value={Gvalue}>{children}</GlobalContext.Provider>
}

function PsychoTestForFun({Component, pageProps}){
    return(
        <>
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
        </>
    )
}

export default PsychoTestForFun