import { Badge } from "primereact/badge";

export function AnalyzedInstructions(props) {

    function makeStep(step) {
        return (
            <div>
                <Badge value={step.number}/>
                {step.step}
                <hr />
            </div>
        )
    }

    return props.instructions?.length > 0 && props.instructions[0].steps.map((step) => makeStep(step));
}