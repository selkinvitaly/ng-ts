"use strict";

import angular from "angular";
import router from "angular-ui-router";

// config, run
import { config as configFunction, run as runFunction } from "./router";

// components
import appContainerComponent from "./app-container/app-container.component";

const app = angular.module("app", [router]);

app.component("appContainer", appContainerComponent);

app.config(configFunction);
app.run(runFunction);

export default app;
