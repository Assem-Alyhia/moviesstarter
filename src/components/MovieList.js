import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paagination from "./Paagination";

const MoviesList = ({movies,getPage,pageCounts}) => {
    return (
        <Row className="mt-3">
            {movies.length ? (movies.map((mov) => {
                return(  
                <CardMovie key={mov.id} mov={mov}/>
                )
            })) : <h1 className="text-center m-3"> لا يوجد افلام </h1>}
            {movies.length?(<Paagination getPage={getPage} pageCounts={pageCounts}/>):null}
        </Row>
    );
};

export default MoviesList;
