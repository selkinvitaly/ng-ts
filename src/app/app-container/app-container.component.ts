"use strict";

/**
 * можно предложить такое решение , т.к. template это не модуль, но webpack коректно обработает это через loaders
 * */
let template = require("./app-container.component.html");

export default {
  template: template
};
