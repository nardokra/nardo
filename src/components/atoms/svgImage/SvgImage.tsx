import React from "react";

// Utils
import cx from "classnames";

// Components
import {
  Css3,
  Express,
  Git,
  GraphQLLogo,
  Html5,
  JestLogo,
  MongoDBLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
  StoryBookLogo,
  TailwindCss,
  Typescript,
  VueLogo,
} from "./svgVariants";

export enum SvgImageVariants {
  CSS3 = "css3",
  EXPRESS = "express",
  GIT = "git",
  GRAPHQL = "graphql",
  HTML5 = "html5",
  JEST = "jest",
  MONGODB = "mongodb",
  NEXT = "next",
  NODE = "node",
  REACT = "react",
  STORYBOOK = "storybook",
  TAILWIND = "tailwindcss",
  TYPESCRIPT = "typescript",
  VUE = "vue",
}

type svgImageType = {
  className?: string;
  hexColorCode?: string;
  variant?: SvgImageVariants;
};

const SvgElement = {
  css3: Css3,
  express: Express,
  git: Git,
  graphql: GraphQLLogo,
  html5: Html5,
  jest: JestLogo,
  mongodb: MongoDBLogo,
  next: NextLogo,
  node: NodeLogo,
  react: ReactLogo,
  storybook: StoryBookLogo,
  tailwindcss: TailwindCss,
  typescript: Typescript,
  vue: VueLogo,
};

export const SvgImage = ({
  variant,
  hexColorCode,
  className,
}: svgImageType) => {
  const SelectedSvgImage = variant && SvgElement[variant];

  const classes = cx("max-h-full", className);

  return !SelectedSvgImage ? null : (
    <SelectedSvgImage className={classes} hexColorCode={hexColorCode} />
  );
};
