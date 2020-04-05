import * as React from "react";
import { Route, Redirect, Switch } from "react-router";

import { NAVIGATION_LINKS } from "../consts/navigation";

import { Home } from "./pages/home/Home";
import { Blog } from "./pages/blog/Blog.tsx";
import { Playground } from "./pages/playground/Playground.tsx";
import { Music } from "./pages/music/Music";

import { NoMatch } from "./pages/NoMatch";
import { Appearences } from "./pages/appearences/Appearences";
import { PrivacyPolicyTap } from "./pages/privacy-policy-tap/PrivacyPolicyTap";

export const Routes = () => (
  <Switch>
    <Route path={NAVIGATION_LINKS.home.to} exact component={Home} />
    <Route path={NAVIGATION_LINKS.blog.to} component={Blog} />

    <Redirect
      exact
      from={NAVIGATION_LINKS.playground.to}
      to={NAVIGATION_LINKS.playground.circleCanon.to}
    />
    <Route
      path={NAVIGATION_LINKS.playground.to}
      component={Playground}
    />

    <Route path={NAVIGATION_LINKS.music.to} component={Music} />

    <Route
      path={NAVIGATION_LINKS.privacyPolicyTap.to}
      component={PrivacyPolicyTap}
    />

    <Route
      path={NAVIGATION_LINKS.appearences.to}
      component={Appearences}
    />

    <Route path="*" component={NoMatch} />
  </Switch>
)
