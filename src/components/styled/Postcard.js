import styled from 'styled-components';

export const Postcard = styled.div`
    background-color: #EDCA4E;
    border-radius: 8px;
    width: 100%;
    margin: 16px;
    flex-direction: row;
    @media (max-width: 950px) {
        flex-direction: column;
        padding: 20px;
    }
    /* box-shadow: 1px 1px 9px 1px rgba(237,202,78,0.63);
    -webkit-box-shadow: 1px 1px 9px 1px rgba(237,202,78,0.63);
    -moz-box-shadow: 1px 1px 9px 1px rgba(237,202,78,0.63); */
    h4 > .links {
            color: #EDCA4E;
        }
    :nth-of-type(2) {
        background-color: #4CBCE2;
        /* box-shadow: 1px 1px 9px 1px rgba(76,188,226,0.63);
        -webkit-box-shadow: 1px 1px 9px 1px rgba(76,188,226,0.63);
        -moz-box-shadow: 1px 1px 9px 1px rgba(76,188,226,0.63); */
        h4 > .links {
            color: #4CBCE2;
        }
    }
    :nth-of-type(3) {
        background-color: #D07E55;
        /* box-shadow: 1px 1px 9px 1px rgba(208,126,85,0.63);
        -webkit-box-shadow: 1px 1px 9px 1px rgba(208,126,85,0.63);
        -moz-box-shadow: 1px 1px 9px 1px rgba(208,126,85,0.63); */
        h4 > .links {
            color: #D07E55;
        }
    }
    :nth-of-type(4) {
        background-color: #81C49E;
        /* box-shadow: 1px 1px 9px 1px rgba(129,196,158,0.63);
        -webkit-box-shadow: 1px 1px 9px 1px rgba(129,196,158,0.63);
        -moz-box-shadow: 1px 1px 9px 1px rgba(129,196,158,0.63); */
        h4 > .links {
            color: #81C49E;
        }
    }
    :nth-of-type(5) {
        background-color: #DF454F;
        /* box-shadow: 1px 1px 9px 1px rgba(223,69,79,0.63);
        -webkit-box-shadow: 1px 1px 9px 1px rgba(223,69,79,0.63);
        -moz-box-shadow: 1px 1px 9px 1px rgba(223,69,79,0.63); */
        h4 > .links {
            color: #DF454F;
        }
    }
`;

export const PostDescription = styled.p`
    font-size: 20px;
    margin: 0;
`;