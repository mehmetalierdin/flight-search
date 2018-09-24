import React        from 'react';
import SimpleButton from '../common/simple-button';

const FlightBook = ({}) => {
    return (
        <div className="flight-book">
            <SimpleButton classNames="themebtn btn-cta-green" whenClicked={()=> { alert("Flight booked!") }}>
                Book this flight
            </SimpleButton>
        </div>
    );
};

export default FlightBook;
