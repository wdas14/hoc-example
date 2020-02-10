import React from 'react';

const hocExample = Component => {
    return class Func extends React.Component {
        static componentName = `hocExample(${Component.displayName || Component.name || 'Component'})`;

        render() {
            console.log(Func.componentName);
            return <Component {...this.props} />
        }
    }
}

export default hocExample;