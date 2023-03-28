import styled from "styled-components";

export const ModalBack = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.5);
`

export const ModalCon = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
min-height: 300px;
min-width: 600px;
width: 50%;
padding: 12px;
border-radius: 3px;
display: flex;
justify-content: center;
/* box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.1) */
;
`