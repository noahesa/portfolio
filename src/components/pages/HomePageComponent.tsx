import React from 'react';
import BlueLineComponent from "../common/BlueLineComponent";
import ToolbarComponent from "../common/ToolbarComponent";
import HomeHeaderComponent from "../fragments/HomeHeaderComponent";
import {InfoManager, infoManager} from "../../info/InfoManager";
import {ServiceComponent} from "../fragments/ServiceComponent";
import TechnologiesComponent from "../fragments/TechnologiesComponent";
import {FooterComponent} from "../common/FooterComponent";

export default function HomePageComponent() {
    return (
        <div className="HomePageContainer">

            <BlueLineComponent />
            <ToolbarComponent />
            <HomeHeaderComponent />

            <div className="ProjectsSection" style={{
                marginBottom: "10em"
            }}>
                <h4 style={{
                    color: InfoManager.BLUE_COLOR,
                    marginLeft: "60px"
                }}>What Can I Do</h4>
                <div className="row" style={{
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    paddingBottom: "40px",
                    width: "80%"
                }}>
                    {
                        infoManager.getPersonalServices().map((item , index) => {
                            return <div className="col-md-3">
                                <ServiceComponent name={item.name} description={item.description} shortName={item.key} key={index}/>
                            </div>
                        })
                    }
                </div>
            </div>

            <TechnologiesComponent />

            <FooterComponent />
            <BlueLineComponent />

        </div>
    );
}
