import styled from "styled-components";

const StartGame = ({toggle}) => {
     return (
          <div>
               <Container>
                    <div>
                         <img src="images/dices_1.svg"></img>
                    </div>
                    <div className="content">
                         <h1>Dice Game</h1>
                         <Button onClick={toggle}>Start</Button>
                    </div>
               </Container>
          </div>
     )
}    

export default StartGame;

const Container = styled.div`
     max-width: 1180px;
     height: 100vh;
     display: flex;
     margin: 0 auto;
     align-items: center;

     .content{
          h1{
               font-size: 96px;
               white-space: nowrap;
          }
     }

`

const Button = styled.button`
     min-width: 220px;
     padding: 10px 18px;
     border-radius: 5px;
     border: none;
     background: #000;
     color: white;
     font-size: 16px;
     border: 0.5px solid transparent;
     transition: 0.3s background ease-in;
     /* position: absolute;
     right: 0; */

     &:hover{
          background-color: white;
          border: 1px solid black;
          color: black;
          transition: 0.3s background ease-in;
          cursor: pointer;    
     }
`