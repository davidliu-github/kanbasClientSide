import ArrowFunctions from "./ArrowFunctions"
import ES5Functions from "./ES5Functions"
import FunctionDestructing from "./FunctionDestructing";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    return (
        <div>
            <h2>
                Working with Functions
            </h2> <br/>
            <ES5Functions/>
            <ArrowFunctions/>
            <FunctionParenthesisAndParameters/>
            <ImpliedReturn/>
            <FunctionDestructing></FunctionDestructing>
        </div>
    );

}
export default WorkingWithFunctions