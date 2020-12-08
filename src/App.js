  import {useState} from 'react';
 
 import { createGlobalStyle } from 'styled-components';
 
 import {Container, Nav, HeroDiv, LeftContainer, RightContainer} from  './Components'

 import { FaBars, FaTimes, FaPushed } from "react-icons/fa";



const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  list-style: none;
  text-decoration: none;
}

html{
  background-color: #f9a826;
}
 
`;

function App() {

  const [Icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!Icon)
  }

  return (
    <Container>
      <Global></Global>
      <Nav Icon={Icon} >
        <div>
          SEND <FaPushed />
        </div>

        <div onClick={handleClick}> {Icon ? <FaBars /> : <FaTimes />} </div>

        <ul>
          {console.log(Icon)}
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </Nav>

      <HeroDiv>
        <LeftContainer>
          <h1>Send Unlimited Messages</h1>
          <p>
            No contracts or unwanted fees. Exclusive offer for new customers
            only.
          </p>
          <button> Get Started</button>
        </LeftContainer>

        <RightContainer>
          <img src="images/img.svg" alt="" />
        </RightContainer>
      </HeroDiv>
    </Container>
  );
}

export default App;
