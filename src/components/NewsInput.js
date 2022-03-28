import {React, useState} from "react";
import { Row } from "react-bootstrap";
import news from "../../src/news.jpeg"
import NewsChoice from "./NewsChoice";
import NewsForm from "./NewsForm";
import NewsFeedback from "./NewsFeedback";
import Result from "./Result";

const NewsInput = () => {

    const [id, setId] = useState(0)
    const [inputFields, setInputFields] = useState([{id:id, text:""}])
    const [currentPage, setCurrentPage] = useState("NewsForm")
    
    return (
        <Row
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%"}}
        >
            {
                ((currentPage)=>{
                    if(currentPage === "NewsForm"){
                        return (<NewsForm
                            inputFields={inputFields}
                            setInputFields={setInputFields}
                            setCurrentPage={setCurrentPage}
                            id={id}
                            setId={setId}
                        >
                        </NewsForm>)
                    }
                    else if(currentPage === "NewsChoice"){
                        return <NewsChoice setCurrentPage={setCurrentPage}></NewsChoice>
                    }
                    else if(currentPage === "Result"){
                        return <Result></Result>
                    }
                    else{
                        return <NewsFeedback setCurrentPage={setCurrentPage}></NewsFeedback>
                    }
                })(currentPage)
            }
        </Row>
    )
}

export default NewsInput