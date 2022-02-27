import React, { useState } from 'react';
import '../css/Experience.css'
import ExperienceItem from './ExperienceItem'

function Experience() {
    const [state, setState] = useState({ company: 'Infobeans', title: "Software Engineer", from: 'July 2019', to: 'September 2021', description: 'Write modern, performant, maintainable code for a diverse array of client and internal projects.Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify' })

    const handleclick = (e) => {
        console.log(e.target.id)

        if (e.target.id === "InfoBeans") {
            setState({
                company: 'InfoBeans',
                title: "Software Engineer ",
                description: 'Write modern, performant, maintainable code for a diverse array of client and internal projects .Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
                from: 'July 2019',
                to: 'September 2021',
            })
        } else if (e.target.id === 'Apple') {
            setState({
                company: 'Apple',
                title: "Software Engineer",
                description: 'this is Apple',
                from: 'July 2019', to: 'September 2021'
            })
        }
        else if (e.target.id === 'Google') {
            setState({
                company: 'Google',
                title: "Software Engineer",
                description: 'this is Google',
                from: 'July 2019', to: 'September 2021',
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
                    {/* <li id="Apple" className="tab" onClick={handleclick}>Apple</li>
                    <li id="Google" className="tab" onClick={handleclick}>google</li> */}
                </ul>
                <div className="experience__content">
                    <ExperienceItem company={state.company} title={state.title} description={state.description} from={state.from} to={state.to} />
                </div>
            </div>
        </div>
    )
}

export default Experience;
