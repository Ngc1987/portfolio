import React, {useReducer, FC, useContext, createContext, ReactNode} from 'react';

import fr from "../i18n/fr.json";
import en from "../i18n/en.json";


// Types
enum LangActionType {
	SET_LANGUAGE = "SET_LANGUAGE"
}
interface LangStateType {
	language: string;
}
interface LangStateProps {
	children: ReactNode;
}
interface SetLanguageAction {
	type: typeof LangActionType.SET_LANGUAGE;
	payload: string;
}
interface ContextProps {
	state: LangStateType;
	dispatch: {
		setLanguage: (lang: string) => void;
		translate: (key: string) => void;
	}
}
// Create the reducer
const langreducer = (state: LangStateType, action: SetLanguageAction): LangStateType => {
	switch (action.type) {
		case LangActionType.SET_LANGUAGE:
			return {
				...state,
				language: action.payload
			};
		default:
			return state;
	}
}
// Checking if the language is set on the local storage
const localStorageLang: string | null = localStorage.getItem("language");
const initialState:LangStateType = {
	language: localStorageLang ? localStorageLang : "fr"
}

export const LangContext:React.Context<ContextProps> = createContext({} as ContextProps);

const LangState: FC<LangStateProps> = ({children}) => {
	const [state, dispatch] = useReducer(langreducer, initialState);

	const setLanguage = (lang: string) => {
		localStorage.setItem("language", lang);
		dispatch({
			type: LangActionType.SET_LANGUAGE,
			payload: lang
		})
	}

	const translate = (key: string): string => {
		const {language} = state;
		let langData: { [key: string]: string } = {};

		if(language === "en") {
			langData = en;
		}else if(language === "fr") {
			langData = fr;
		}else if(language !== "en" && language !== "fr") {
			langData = fr;
		}

		return langData[key]
	}

	return(
		<LangContext.Provider value={{state, dispatch:{ setLanguage, translate}}}>
			{children}
		</LangContext.Provider>
	)
}

export default LangState;