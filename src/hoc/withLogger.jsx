import React from 'react';
const withLogger = (WrappedComponent) => {
  return function LoggerComponent(props) {
    React.useEffect(() => {
      console.log(`[Logger] ${WrappedComponent.name} mounted`);
    }, []);
    return <WrappedComponent {...props} />;
  };
};
export default withLogger;
