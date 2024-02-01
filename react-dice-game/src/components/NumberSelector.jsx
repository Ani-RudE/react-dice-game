import React from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
     return (
          <div>
               <NumberSelectorContainer>
                    <box>1</box>
                    <box></box>
                    <box></box>
                    <box></box>
                    <box></box>
                    <box></box>
               </NumberSelectorContainer>
          </div>
     )
}

export default NumberSelector;

// const NumberSelectorContainer = styled.div`
//      max-width: 100%;
//      text-align: right;
//      padding-right: 2.5%;
// `

const Box=styled.div`
     height: 72px;
     width: 72px;
     border: 1px solid black;
`