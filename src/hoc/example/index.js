import React from 'react';

const hocExample = Component => {
    return class Func extends React.Component {

        static componentName = `hocExample(${Component.displayName || Component.name || 'Component'})`;

        render() {
            console.log(Func.componentName);
            return <Component />
        }
    }
}

export default hocExample;