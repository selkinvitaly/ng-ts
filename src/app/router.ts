"use strict";

export function config($locationProvider, $stateProvider, $urlRouterProvider) {
  "ngInject";

  $urlRouterProvider.otherwise("404");
  $locationProvider.html5Mode(true);

  $stateProvider
    .state("404", {
      url: "/404",
      template: "404"
    })
    .state("login", {
      url: "/login",
      template: `<view-login class="g-view-state" />`
    })
    .state("root", {
      url: "/app",
      abstract: true,
      template: "<ui-view />"
    })
    .state("root.contact", {
      url: "/contact",
      template: "contact"
    })
    .state("root.settings", {
      url: "/settings",
      template: "settings"
    })
    .state("root.my", {
      url: "/my",
      template: "my"
    })
    .state("root.joint", {
      url: "/joint",
      template: "joint"
    })
    .state("root.fav", {
      url: "/favorites",
      template: "favorites"
    })
    .state("root.project", {
      url: "/p/:projectId",
      template: "view_project"
    })
    .state("root.snaphot", {
      url: "/s/:snapshotId",
      template: "view_snapshot"
    });

};

export function run($transitions) {
  "ngInject";

  $transitions.onError({}, ($error$) => {
    "ngInject";

    console.error($error$);
  });

};
