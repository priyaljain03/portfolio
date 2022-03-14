import React from 'react';

function ExperienceItem(props) {

    return (
        <div className="experience__inner">
            <div className="experience__content">
                <h5 style={{ fontSize: '20px', margin: '0px' }}>{props.title} <strong style={{ color: 'yellowgreen', fontSize: '15px' }}>@{props.company}</strong></h5>
                <strong style={{ color: 'yellowgreen', fontSize: '13px', marginBottom: '40px' }}>{props.from} - {props.to}</strong><br />
                {props.description}
            </div>
        </div>
    )
}

export default ExperienceItem;
