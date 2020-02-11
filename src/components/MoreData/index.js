import React from 'react';

const MoreData = ({name, age, location}) => {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {age}
            </div>
            <div>
                {location}
            </div>
        </div>
    )
}

export default MoreData