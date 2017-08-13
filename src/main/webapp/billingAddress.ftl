[#ftl]
[#--
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
--]
[#import "macros.ftl" as m/]
<html>
  <head>
    <title>Rhino books - Checkout - Billing Address</title>
  </head>
  <body>
    <center>
    <h1>Rhino books - Checkout - Billing Address</h1>
    <p>Thank you for shopping at Rhino books. To complete your order, 
    please fill out the information on the next few pages. If you need 
    to go back, use your browser's back button.</p>
    <h2>Billing address</h2>
    <form method="POST" action="checkout.js">
      <input type="hidden" name="stateId" value="${stateId}">
      <table border="0">
        [@m.field "Name", "name"/]
        [@m.field "Street address", "street"/]
        [@m.field "City", "city"/]
        [@m.field "Zip code", "zip"/]
        [@m.field "State", "state"/]
        [@m.field "Country", "country"/]
        <tr><td colspan="3"><input type="submit" value="Next >"></td></tr>
    </form>
    </center>
  </body>
</html>
