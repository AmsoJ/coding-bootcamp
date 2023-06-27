import {useContext, createContext, useState} from "react";
import projectData from './../projectData/projectData';


// create
const AppContext = createContext();

// create provider
export const AppProvider = ({children}) => {
    let [review] = useState(projectData);
    let [index, setIndex] = useState(0);

    const nextOrPrev = (e) => {
        const limit = review.length - 1;
        let action = e.currentTarget.dataset.id;
        action === "next" ? setIndex(prevIndex => prevIndex >= limit ? 0 : ++prevIndex) : setIndex(prevIndex => prevIndex <= 0 ? limit : --prevIndex);
    }

    return <AppContext.Provider value={{
        review,
        index,
        nextOrPrev
    }}>{children}</AppContext.Provider>
}

// customization
export const useGlobalContext = () => {
    return useContext(AppContext);
}