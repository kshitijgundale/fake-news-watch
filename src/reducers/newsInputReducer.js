import { v4 as uuidv4 } from 'uuid';

export const addNewsInput = () => {
    return {type: "ADD_NEWS_INPUT"}
}

export const modifyNewsText = (text, id) => {
    return {
        type: "MODIFY_NEWS_TEXT",
        text: text,
        id: id
    }
}

export const modifyNewsTag = (tag, id) => {
    return {
        type: "MODIFY_NEWS_TAG",
        tag: tag,
        id: id
    }
}

export const removeNews = (id) => {
    return {
        type: "REMOVE_NEWS",
        id: id
    }
}

const newsInputReducer = (state=[{text: "", id: uuidv4(), tag: "URL"}], action) => {
    switch(action.type){
        case "ADD_NEWS_INPUT":
            return [...state, {text: "", id: uuidv4(), tag: "URL"}]
        case "MODIFY_NEWS_TEXT":
            return state.map((elm)=>{
                if(action.id === elm.id){
                    elm.text = action.text
                }
                return elm
            })
        case "MODIFY_NEWS_TAG":
            return state.map((elm)=>{
                if(action.id === elm.id){
                    elm.tag = action.tag
                }
                return elm
            })
        case "REMOVE_NEWS":
            return state.filter(elm => elm.id !== action.id)
        default:
            return state
    }
}

export default newsInputReducer

