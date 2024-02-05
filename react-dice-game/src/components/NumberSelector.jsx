import styled from "styled-components";

const NumberSelector = ({
     setError,
     error,
     selectedNumber,
     setSelectedNumber,
}) => {
     const arrNumber = [1, 2, 3, 4, 5, 6];

     const numberSelectorHandler = (value) => {
          setSelectedNumber(value);
          setError("");
     };

     return (
          <NumberSelectorContainer>
               <p className="error">{error}</p>
               <div className="flex">
                    {arrNumber.map((value, i) => (
                         <Box
                              isSelected={value === selectedNumber}
                              key={i}
                              onClick={() => numberSelectorHandler(value)}
                         >
                              {value}
                         </Box>
                    ))}
               </div>
               <p className="select-text">Select Number</p>
          </NumberSelectorContainer>
     );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;

	.flex {
		display: flex;
		gap: 24px;
	}
	p {
		font-size: 24px;
		font-weight: 700px;
	}
     .select-text{
          margin-top: 22px;
          font-weight: 700;
     }
	.error {
		color: red;
	}
`;

const Box = styled.div`
	height: 72px;
	width: 72px;
	border: 1px solid black;
	display: grid;
	place-items: center;
	font-size: 24px;
	font-weight: 700;
	background-color: ${(props) => (props.isSelected ? "black" : "white")};
	color: ${(props) => (!props.isSelected ? "black" : "white")};
`;




// import React, { useState } from 'react'
// import styled from 'styled-components'

// const NumberSelector = () => {

//      const arrNum = [1, 2, 3, 4, 5, 6];
//      const [selectedNumber, setSelecedNumber] = useState();

//      return (
//           <>
//                {
//                     arrNum.map((value, i) => (
//                          <Box
//                               isSelected={value===selectedNumber}
//                               key={i}
//                               onClick={() => setSelecedNumber(value)}
//                          >
//                               {value}
//                          </Box>
//                     ))
//                }
//           </>
//      )
// }

// export default NumberSelector;

// const NumberSelectorContainer = styled.div`
//      max-width: 100%;
//      text-align: right;
//      padding-right: 2.5%;
// `

// const Box = styled.div`
//      height: 72px;
//      width: 72px;
//      border: 1px solid black;
//      text-align: center;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      font-size: 26px;
//      font-weight: 700;
//      /*  */
//      background-color: ${(props) => props.isSelected ? "black":"white"};
//      /* color: ${!props.isSelected ? "black":"white"}; */
// `