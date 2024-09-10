import React from "react";
import { Routes, Route } from "react-router-dom";
import {
Pets
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                            <Route path="/" element={<Pets {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/products" element={<Pets {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;