import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`
    body{
        background-color: ${props=>props.theme.background};
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-box-sizing:border-box !important       ;
        -moz-box-sizing:border-box  !important         ;
        -ms-box-sizing:border-box !important;
    }

    *{
        /* reset css */
        margin:0;
        padding:0;
        box-sizing:border-box;

    }
`;