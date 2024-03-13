import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import Templateliterals from "./string/Templateliterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants
  from "./variables/VariablesAndConstants";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <h2>Variables</h2>
         <VariablesAndConstants/>
         <BooleanVariables/>
         <VariableTypes/>
         <h2>
            Boolean Operators
         </h2>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <h2>JSON</h2>
         <JsonStringify></JsonStringify>
         <House></House>
         <Spreading></Spreading>
         <Destructing></Destructing>
         <h2>String</h2>
         <Templateliterals></Templateliterals>
      </div>
   );
}
export default JavaScript