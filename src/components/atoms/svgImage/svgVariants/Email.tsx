import { colors } from "@/constants/colorConstants";
import type { SvgImageType } from "../SvgImage";

export const Email = ({ className, hexColorCode }: SvgImageType) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    y="0"
    x="0"
    width="128px"
    height="128px"
  >
    <g>
      <path
        fill={hexColorCode || colors.theme.primary}
        d="M46.6 59.7L15 40.1v34.8c0 1 .8 1.8 1.8 1.8h66.4c1 0 1.8-.8 1.8-1.8V40.1L53.4 59.7c-2.1 1.3-4.7 1.3-6.8 0z"
      />
      <path
        fill={hexColorCode || colors.theme.primary}
        d="M83.2 23.3H16.8c-1 0-1.8.8-1.8 1.8v3.5c0 3.4 1.8 6.6 4.7 8.5l26.9 16.7c2.1 1.3 4.7 1.3 6.8 0l26.9-16.7c2.9-1.8 4.7-5 4.7-8.5v-3.5c0-1-.8-1.8-1.8-1.8z"
      />
      <path
        fill="#FFF"
        d="M85 18.3H15c-2.8 0-5 2.2-5 5v53c0 2.9 2.4 5.3 5.3 5.3h69.4c2.9 0 5.3-2.4 5.3-5.3v-53c0-2.7-2.2-5-5-5zm0 56.6c0 1-.8 1.8-1.8 1.8H16.8c-1 0-1.8-.8-1.8-1.8V40.1l31.6 19.7c2.1 1.3 4.7 1.3 6.8 0L85 40.1v34.8zm0-46.3c0 3.4-1.8 6.6-4.7 8.5L53.4 53.8c-2.1 1.3-4.7 1.3-6.8 0L19.7 37.1c-2.9-1.8-4.7-5-4.7-8.5v-3.5c0-1 .8-1.8 1.8-1.8h66.4c1 0 1.8.8 1.8 1.8v3.5z"
      />
    </g>
  </svg>
);
