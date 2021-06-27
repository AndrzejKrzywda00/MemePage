import React from "react";
import Layout from "../meta/Layout";

const Main =({location})=> {
    return (
        <Layout>
            <h1>Witaj na stronie o memach. Tutaj znajdziesz wyjaśnienia niemal każdego mema.<span>{location.pathname}</span></h1>
        </Layout>
    );
}

export default Main;