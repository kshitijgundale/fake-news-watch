import React from "react";
import { Button } from 'react-bootstrap'
import { useDispatch, useStore } from "react-redux";

import { changePage } from "../reducers/currentPageReducer";

const PredictNavButtons = ({next, previous}) => {

    const dispatch = useDispatch()
    const store = useStore()

    const handlePredictNav = (page) => {
        if(page!=="") dispatch(changePage(page))
    }

    const isDisabled = (value, button) => {
        const similarNews = store.getState().similarNews
        const graph = store.getState().graph
        const page = store.getState().page
        if(page === "PredictChoice" && similarNews === 0 && graph === 0 && button === "next"){
            return true
        }
        else if(value === ""){
            return true
        }
        return false
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Button onClick={() => handlePredictNav(previous)} variant="light" className="m-3" disabled={isDisabled(previous, "previous")}>
                Back
            </Button>
            <Button onClick={() => handlePredictNav(next)} variant="light" className="m-3" disabled={isDisabled(next, "next")}>
                Next
            </Button>
        </div>
    )
}

export default PredictNavButtons