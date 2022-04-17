export const setGraph = (graph) => {
    return {
        type: "SET_GRAPH",
        graph: graph
    }
}

const graphReducer = (state=0, action) => {
    switch(action.type){
        case "SET_GRAPH":
            return action.graph
        default:
            return state
    }
}

export default graphReducer