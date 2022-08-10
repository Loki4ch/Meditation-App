import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: green;
  }
  
  .content {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
    background-color: aquamarine;
  }
  
  .footer {
    width: 100%;
    height: 20px;
    background-color: green;
  }  
`

const MainLayout = (props) => {
    return (
        <StyledMainLayout>
            <div className={'header'}></div>
            <div className={'content'}>
                {props.children}
            </div>
            <div className={"footer"}></div>
        </StyledMainLayout>
    );
}

export default MainLayout;