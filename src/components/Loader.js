import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Loader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(() => {
        if (dots.length === 3) return '';
        else return dots + '.';
      })
    }, 300);
    return () => clearInterval(interval);
  }, [dots]);
  return <Wrapper className="loader">
            <Title>Loading{dots}</Title>
          </Wrapper>;
};

const Title = styled.p`
  font-size: 50px;
  color: red;
`;

const Wrapper = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
`

export default Loader