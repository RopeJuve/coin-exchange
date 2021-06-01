import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  border: 1px solid #cccccc;
  font-size: 2rem;
  text-align: left;
  padding:1rem 0 1.5rem 5rem;
  border-radius: 8px;
`;

const Button = styled.button`
font-size: 1.4rem;
margin: 2.1rem 0 1.5rem 3.5rem;
background-color: rgb(20, 56, 97);
color: #cccccc;
border: 1px solid #cccccc;
border-radius: 8px;
`;

export default function AccountBalance(props) {
    
    
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balance = props.showBalance ?
            <span>Balance: ${props.amount}</span>
            : 'Balance: *********';

        return (
            <Section>
             {balance}
             
               <Button onClick={props.hideBalance}>{buttonText}</Button> 
        
            </Section>
        )

}
AccountBalance.propTypes = {
   
    amount: PropTypes.number.isRequired
}