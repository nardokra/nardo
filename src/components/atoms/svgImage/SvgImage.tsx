import React from "react";

// Utils
import cx from "classnames";

// Components
import {
  Css3,
  Express,
  Github,
  Git,
  GraphQLLogo,
  Html5,
  JestLogo,
  LinkedIn,
  MongoDBLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
  StoryBookLogo,
  TailwindCssLogo,
  Typescript,
  VueLogo,
} from "./svgVariants";

export enum SvgImageVariants {
  CSS3 = "css3",
  EXPRESS = "express",
  GITHUB = "github",
  GIT = "git",
  GRAPHQL = "graphql",
  HTML5 = "html5",
  JEST = "jest",
  LINKEDIN = "linkedin",
  MONGODB = "mongodb",
  NEXT = "next",
  NODE = "node",
  REACT = "react",
  STORYBOOK = "storybook",
  TAILWIND = "tailwindcss",
  TYPESCRIPT = "typescript",
  VUE = "vue",
}

export const SvgElement: Record<
  SvgImageVariants,
  ({
    className,
    hexColorCode,
  }: {
    className?: string | undefined;
    hexColorCode?: string | undefined;
  }) => JSX.Element
> = {
  css3: Css3,
  express: Express,
  github: Github,
  git: Git,
  graphql: GraphQLLogo,
  html5: Html5,
  jest: JestLogo,
  linkedin: LinkedIn,
  mongodb: MongoDBLogo,
  next: NextLogo,
  node: NodeLogo,
  react: ReactLogo,
  storybook: StoryBookLogo,
  tailwindcss: TailwindCssLogo,
  typescript: Typescript,
  vue: VueLogo,
};

type svgImageType = {
  className?: string;
  hexColorCode?: string;
  variant?: keyof typeof SvgElement;
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
