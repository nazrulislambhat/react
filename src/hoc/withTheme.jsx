// src/hocs/withTheme.js
const withTheme = (WrappedComponent) => {
  const theme = {
    color: '#2a9d8f',
    fontFamily: 'monospace',
  };

  return function ThemedComponent(props) {
    return <WrappedComponent {...props} theme={theme} />;
  };
};

export default withTheme;
