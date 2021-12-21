import React from 'react'
import db from "./firebase";
import { useEffect, useState } from 'react';
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore';
import Dot from './Dot';
import { handleNew, handleEdit, handleDelete, handleQueryDelete } from './utils';
import styled from 'styled-components';

function ContentSection() {
  const [colors, setColors] = useState([])
  useEffect(
    () => onSnapshot(collection(db, 'colors'), (snapshot) =>
      setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ), []);

  return (
    <Container>
      <h1>Color Plattes Pro</h1>
      <h3>Developed using React And Firebase</h3>
      <buttonSection>
        <Newbutton onClick={handleNew} >New</Newbutton>
        <QueryDeletebutton onClick={handleQueryDelete}>Query Delete </QueryDeletebutton>
      </buttonSection>
      <ul>
        {colors.map((colors) => (
          <li key={colors.id}>
            <button onClick={() => handleEdit(colors.id)}>Edit</button>
            <button onClick={() => handleDelete(colors.id)}>Delete</button>
            <Dot color={colors.value} />
            {colors.name}</li>
        ))}
      </ul>
    </Container>
  )
}

export default ContentSection

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  text-transform: uppercase;
  position: absolute;
  
  &:before {
    background : url("/images/background3.jpg") center center / cover 
    no-repeat fixed;
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index -1;
}
  button{
    margin-right: 5px;
    border-style: none;
    // background-color: transparent;
    border-radius: 10px;
    
    &:hover {
      background: #707070;
      color: white;
      border-style: none;
    }
  }

  ul{
    display: flex;
    flex-direction: column;
    li{
      margin: 10px;
      justify-content: space-between;
      text-align: start;
    }
  }

  h1{
    color: black;
    font-size: 30px;
    margin-bottom: 5px;
  }

  h6{
    margin-bottom: 20px;
    font-weight: lighter;
    font-size: 20px
  }
`

const Newbutton = styled.button`
  color: white;
  text-transform: uppercase;
  font-weight: lighter;
  height: 25px;
  width: 150px;
  border-radius: 10px;
  border-style: none;
  background-color: grey;
  cursor: pointer;

  &:hover{
    background: black;
  }
 `

const QueryDeletebutton = styled(Newbutton)``