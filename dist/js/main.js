!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.r(t);var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=this.generationData(t)}var t,r,n;return t=e,(r=[{key:"generationData",value:function(e){var t=this,r={};return e.forEach(function(e){"radio"===e.type?document.querySelectorAll('input[name="gender"]').forEach(function(a,n){a.addEventListener("click",t.getValidateFields(e.validate).bind(t)),0===n&&(r[e.name]={value:"мужчина",valid:!0})}):"checkBox"===e.type?(document.getElementById(e.id).addEventListener("click",t.getValidateFields(e.validate).bind(t)),r[e.id]={value:"",valid:!1}):(document.getElementById(e.id).addEventListener("blur",t.getValidateFields(e.validate).bind(t)),r[e.id]={value:"",valid:!1})}),r}},{key:"getValidateFields",value:function(e){switch(e){case"onlyLetters":return this.onlyLetters;case"radio":return this.radio;case"date":return this.date;case"number":return this.number;case"email":return this.email;case"password":return this.password;case"repeatPassword":return this.repeatPassword;case"code":return this.code;case"checkBox":return this.checkBox}}},{key:"setNewValue",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.data[e].value=t,this.data[e].valid=r}},{key:"onlyLetters",value:function(e){var t=/^[a-zа-яё]+$/i,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"code",value:function(e){var t=/^\d{1,4}$/,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"radio",value:function(e){this.setNewValue(e.target.getAttribute("name"),e.target.value,!0)}},{key:"checkBox",value:function(e){e.target.checked&&e.target.parentNode.classList.remove("error"),this.setNewValue(e.target.getAttribute("id"),e.target.value,e.target.checked)}},{key:"date",value:function(e){var t=/([1-9]|[12][0-9]|3[01])[- \/.]([1-9]|1[012])[- \/.](19|20)\d\d/,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"number",value:function(e){var t=/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"email",value:function(e){var t=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"password",value:function(e){var t=/^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,r=e.target.value;t.test(r)?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),r,t.test(r))}},{key:"repeatPassword",value:function(e){var t=e.target.value;this.data.password.value===t?e.target.parentNode.classList.remove("error"):e.target.parentNode.classList.add("error"),this.setNewValue(e.target.getAttribute("id"),t,!0)}}])&&a(t.prototype,r),n&&a(t,n),e}();function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,s(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,n),t}(),c=[[{id:"name",validate:"onlyLetters",type:"text"},{id:"surname",validate:"onlyLetters",type:"text"},{id:"patronymic",validate:"onlyLetters",type:"text"},{name:"gender",validate:"radio",type:"radio"},{id:"dateBirth",validate:"date",type:"text"},{id:"licenseAgreement",validate:"checkBox",type:"checkBox"}],[{id:"number",validate:"number",type:"text"},{id:"email",validate:"email",type:"text"},{id:"password",validate:"password",type:"password"},{id:"repeatPassword",validate:"repeatPassword",type:"password"}],[{id:"code",validate:"code",type:"text"}]],d=["#FF6E20","#D77B00","#E93A29"];function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.steps=c.map(function(e){return new l(e)}),this.positionFormStep=0,this.positionInfoStepsSlider=0,this.step=0,this.stepsPassed=0,this.maxSteps=this.steps.length,this.setEventButton()}var t,r,a;return t=e,(r=[{key:"setEventButton",value:function(){var e=this;next.addEventListener("click",function(){var t=e.validStep(e.steps[e.step].data);e.changeStepForm(e.step+1,t),e.changeSwitchStepForm()}),document.querySelectorAll(".switchStep").forEach(function(t){t.addEventListener("click",function(t){var r=+t.target.innerHTML-1;r<=e.stepsPassed&&r!==e.step&&(e.changeStepForm(r,!0),e.changeSwitchStepForm())})})}},{key:"validStep",value:function(e){var t=!0;for(var r in e)e[r].valid||(document.getElementById(r).parentNode.classList.add("error"),t=!1);return t}},{key:"changeSwitchStepForm",value:function(){var e=this;document.querySelectorAll(".switchStep").forEach(function(t,r){var a=d[e.step];form.style.borderColor=a,next.className="nextButton".concat(e.step),e.step===r?(t.style.border="2px solid ".concat(a),t.style.borderBottom="2px solid #fff"):(t.style.border="1px solid ".concat(a),t.style.borderBottom="0")})}},{key:"changeStepForm",value:function(e,t){this.maxSteps>e&&t?(e===this.maxSteps-1?(lastStepTextNumber.innerHTML=this.steps[1].data.number.value,nextText.innerHTML="Присоединиться"):nextText.innerHTML="Продолжить",this.step=e,this.stepsPassed=e>this.stepsPassed?e:this.stepsPassed,formSteps.style.left="-".concat(form.getBoundingClientRect().width*this.step,"px"),infoStepsSlider.style.top="-".concat(infoSteps.getBoundingClientRect().height*this.step,"px")):this.maxSteps===e&&t&&alert("Умница")}}])&&p(t.prototype,r),a&&p(t,a),e}();r(1),new f},function(e,t){}]);
//# sourceMappingURL=main.js.map