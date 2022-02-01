import React from 'react';
import TaskList from 'Scenes/TaskList/TaskList';
import styled from 'styled-components';
import { ThemeContext } from 'HOC/GlobalThemeProvider';

const StyledMainLayout = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};

  .header,
  .footer {
    background-color: ${(props) => props.theme.navbarBackgroundColor};
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: ${(props) => props.theme.headerFontColor};
    text-align: left;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .heading,
  .footerText {
    padding-left: 20px;
  }
  .footerText {
    padding-top: 10px;
  }

  .themeSwitch {
    margin-right: 20px;
  }

  .content {
    width: 100%;
    height: calc(100vh - 100px);
  }
`;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let toggleTheme = this.context;
    return (
      <StyledMainLayout>
        <div className={'layout'}>
          <div className={'header'}>
            <div className={'heading'}>Header</div>
            <button
              className={'themeSwitch'}
              onClick={() => {
                toggleTheme();
              }}
            >
              Switch theme
            </button>
          </div>
          <div className={'content'}>
            <TaskList />
          </div>
          <div className={'footer'}>
            <div className={'footerText'}>Footer</div>
          </div>
        </div>
      </StyledMainLayout>
    );
  }
}

MainLayout.contextType = ThemeContext;

export default MainLayout;
