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
[-- In real life example, this would be a localized resource --]
[#assign errorMsg = { "requiredField" : "This field is required" }/]

[#macro field fieldDescription, fieldName]
  <tr>
    <td>${fieldDescription}: </td>
    <td><input type="text" size="20" name="${fieldName}" value="${.vars[fieldName]?default("")}"></td>
    <td>
      [#if errors?exists && errors[fieldName]?exists]
        <font color="red">${errorMsg[errors[fieldName]]}</font>
      [#else]
        &nbsp;
      [/#if]
    </td>
  </tr>
[/#macro]
