import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    console.log("CoreConcepts got called")
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                <CoreConcept {...CORE_CONCEPTS[0]}
                />
                <MoreConcept {...CORE_CONCEPTS[1]}
                />
                <CoreConcept {...CORE_CONCEPTS[2]}
                />
                <CoreConcept title={CORE_CONCEPTS[3].title}
                             description={CORE_CONCEPTS[3].description}
                             image={CORE_CONCEPTS[3].image}
                />
            </ul>
        </section>

    );
}
function MoreConcept({image, title="my title", description}) {
    return (
        <li>
            <img src={image} alt="..." />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
