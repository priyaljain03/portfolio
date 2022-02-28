import React, { useState } from 'react';
import '../css/Experience.css'
import ExperienceItem from './ExperienceItem'

function Experience() {
    const [state, setState] = useState({ company: 'Infobeans', title: "Software Engineer", from: 'July 2019', to: 'September 2021', description: `2 years of experience as a Administration and
    Developer in Salesforce.com. Has good knowledge
    of the Technical and Functional aspects of
    Salesforce.com, on demand CRM package.Worked on the designing of custom objects, custom fields, role based page layouts, custom Tabs, custom reports, report folders, report extractions to various formats, design of Visual Force Pages, Dashboards and various other components as per the client and application requirements.` })

    const handleclick = (e) => {
        if (e.target.id === "InfoBeans") {
            setState({
                company: 'InfoBeans',
                title: "Software Engineer ",
                description: `2 years of experience as a Administration and Developer in Salesforce.com. Has good knowledge
                of the Technical and Functional aspects of
                Salesforce.com, on demand CRM package.Worked on the designing of custom objects, custom fields, role based page layouts, custom Tabs, custom reports, report folders, report extractions to various formats, design of Visual Force Pages, Dashboards and various other components as per the client and application requirements.`,
                from: 'July 2019',
                to: 'September 2021',
            })
        } 
    }

    return (
        <div id="experience" className="experience__wrapper">
            <div className="experience__header__wrapper">
                <h3 className="experience__header">Where I've Worked </h3>
            </div>
            <div className="experience__inner">
                <hr />
                <ul className="experience__tabs">
                    <li id="InfoBeans" className="tab" onClick={handleclick}>Infobeans</li>
                </ul>
                <div className="experience__content">
                    <ExperienceItem company={state.company} title={state.title} description={state.description} from={state.from} to={state.to} />
                </div>
            </div>
        </div>
    )
}

export default Experience;
