import React from 'react';

const List = ({usersList}) => {
    return (
        <div>
            {
                usersList.map(user => (
                    <div key={user.id}>
                        {user.name}
                    </div>

                ))
            }
        </div>
    );
};

export default List;