import { createContext, useContext } from "react";

export const BaseColourGlobalDataContext = createContext("#000000")
export const BaseColourGlobalDataContext = createContext(null);

export function useBaseColourGlobalData(){
    return useContext (BaseColourGlobalDataContext);
}

export function useBaseColourGlobalDispatch(){
    return useContext(BaseColourGlobalDispatchContext);
}

export function BaseColourProvider({children}){
    let [baseColour, setBaseColour] = useState("000000");
    

    return (
        <BaseColourGlobalDataContext.Provider value={baseColour}>
            <BaseColourGlobalDataContext.Provider value={setBaseColour}>
                {children}
            </BaseColourGlobalDataContext.Provider>
        </BaseColourGlobalDataContext.Provider>
    )
}
