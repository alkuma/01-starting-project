import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'


export default function Examples() {
    // userState() must be called inside the component function but not nested level
//    const stateArray = useState('Please click a button');
    const [ selectedTopic, setSelectedTopic ] = useState();

    let tabContent = 'Please click a button';
    function handleSelect(selectedButton) {

        // selectedButton is either 'components, 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
        tabContent = selectedButton;
        console.log(tabContent);
        console.log(selectedTopic);
    }
    let dynamicTabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        dynamicTabContent =
            (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
            </div>);
    }
    console.log("Examples got called")
    return (
    <Section id="examples" title="Examples">
        <Tabs //ButtonsContainer="menu"
              buttons={
            <>
        <TabButton isSelected={selectedTopic === 'components'}
                   onClick={() => handleSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'}
                   onClick={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'}
                   onClick={() => handleSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'}
                   onClick={() => handleSelect('state')}>State</TabButton>
        </>
        }
        > {dynamicTabContent} </Tabs>
        {!selectedTopic ? <p>Please select a topic.</p> :
            (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
            </div>)}
        {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic &&
            (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
            </div>)}
    </Section>
    );

}