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

function getAddress(inputViewName, address) {
    var fields = [ 
        { name: "name" },
        { name: "street" },
        { name: "city" },
        { name: "zip" },
        { name: "state", optional: true },
        { name: "country" }
    ];

    for(;;) {
        respondAndWait(inputViewName, address);
        address = {};
        var inputOkay = true;
        for(var i in fields) {
            var field = fields[i];
            var fieldName = field.name;
            var fieldValue = request.getParameter(fieldName);
            if(!field.optional && (fieldValue == null || fieldValue == "")) {
                if(address.errors == null) {
                    address.errors = {};
                }
                address.errors[fieldName] = "requiredField";
            }
            address[fieldName] = fieldValue;
        }
        if(address.errors == null) {
            return address;
        }
    }
}

var addresses = {};
addresses.shippingAddress = getAddress("index", {});
addresses.billingAddress  = getAddress("billingAddress", addresses.shippingAddress);
respondAndWait("confirm", addresses);
respond("thankyou");
