import React from 'react';

const Data = ({name, age, location}) => {
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

export default Data;