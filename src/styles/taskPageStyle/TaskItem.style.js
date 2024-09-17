import styled from "styled-components";

export const TaskListContainer = styled.div`
border-radius: 8px;
width: 754px;
background: var(--neutral-white);
padding: 16px;
`

export const MainText = styled.h1`
font-family: var(--font-family);
font-weight: 700;
font-size: 32px;
line-height: 110%;
color: var(--neutral-title);
`

export const ListItems = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
`

export const StatusContainer = styled.div`
display: flex;
gap: 16px;
justify-content: center;
margin-top: 16px;
margin-bottom: 16px;
`

export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border: 1px ;
border-radius: 8px;
height: 69px;
background: var(--secondary-light);
padding-left: 16px;
padding-right: 16px;
gap: 16px;
`

export const ItemText = styled.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 16px;
line-height: 144%;
color: var(--neutral-title);
margin-right: auto;
`
export const ItemButton = styled.button`
border: 1px solid var(--neutral-title);
border-radius: 10px;
padding: 8px;
height: 40px;

`