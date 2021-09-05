import React from 'react';
import { useParams} from "react-router-dom";

function Project() {
    const { handle } = useParams();

    return(
        <div>
            <h2>{handle}</h2>
        </div>
    )
}

export default Project;