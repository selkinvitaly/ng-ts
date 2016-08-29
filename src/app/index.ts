"use strict";

/**
 * если посмотреть на исходник (types) то мы должны использовать as синтаксис
 * */
import * as angular from "angular";
//import * as router from "angular-ui-router/commonjs/core";

// config, run
import { config as configFunction, run as runFunction } from "./router";

// components
import appContainerComponent from "./app-container/app-container.component";

/**
 *
 * насколько я помню тут надо обьявить так ui-router (по названию) , так как сам ui-router будут в vendor bundle
 */

const app = angular.module("app",['ui-router']);
app.component("appContainer", appContainerComponent);

app.config(configFunction);
app.run(runFunction);

export default app;
