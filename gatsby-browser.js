import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const wrapRootElement = ({ element }) => {
    return (  
        <Auth0Provider
            domain={process.env.GATSBY_AUTH0_DOMAIN}
            clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
        >
            {element}
        </Auth0Provider>
  
    )
}