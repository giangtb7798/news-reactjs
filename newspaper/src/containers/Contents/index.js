import React from 'react';
import Articles from '../../components/Articles';
import Relation from '../../components/Relation';
const Content = (props) => {
    return (
        <div>
            <Articles {...props}/>
            <Relation {...props}/>
        </div>
    );
};

export default Content;