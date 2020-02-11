import React from 'react';

const loading = data => Component => {
    return class Func extends React.Component {

        static componentName = `hocExample(${Component.displayName || Component.name || 'Component'})`;

        render() {
            console.log(Func.componentName);
            return data !== null ? (
                data.map(item => <Component key={Math.random()} {...item} />)
            ) : (
                <div>Loading...</div>
            )
        }
    }
}

export default loading;