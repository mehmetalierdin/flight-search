import React            from 'react';
import SearchPage       from './search/search-page';
import FlightPage       from './flight/flight-page';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
               <div id="fse_container">
                   <aside  id="sidebar">
                       <SearchPage />
                   </aside>
                    <section id="content">
                        <FlightPage />
                    </section>
               </div>
        );
    }
}
