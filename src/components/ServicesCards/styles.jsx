import styled from "styled-components";

export const ContainerCards = styled.section`
        display: flex;
        gap: 20px;
        justify-content: center;
        padding: 20px;

        .box1 {
            width: 300px;
            height: 400px;
        };

        .boxCard1 {
            width: 100%;
            height: 70%;
        };

        .boxCard1 img {
            width: 100%;
            height: 100%;
        };

        #textPrev {
            font-size: 12px;
            text-align: start;
            margin: 20px;
        };

        #textBold {
            font-weight: bolder;
        };

        #textRed {
            color: red;
            font-weight: bolder;
        };
`;