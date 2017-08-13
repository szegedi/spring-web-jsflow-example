/*
   Copyright Attila Szegedi

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var tape = new Array();
tape[0] = 0;
for(;;) {
    respondAndWait("calculator", { tape: tape });
    var operand1 = tape[tape.length - 1];
    try {
        var operation = 
            request.getParameter("operator") + " " + 
            request.getParameter("operand");
           
        tape[tape.length] = "&nbsp;&nbsp;" + operation;
        tape[tape.length] = eval(operand1 + " " + operation);
    } catch(e) {
        tape[tape.length] = "&nbsp;&nbsp;Error: " + e.message;
        tape[tape.length] = operand1;
    }
}
