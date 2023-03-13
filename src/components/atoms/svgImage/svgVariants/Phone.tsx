import type { SvgImageType } from "../SvgImage";

export const Phone = ({ className }: SvgImageType) => (
  <svg className={className} viewBox="0 0 100 100" width="128px" height="128px">
    <g>
      <path d="M25.696 23.671h48.608v50.662H25.696z" fill="#e0e0e0"></path>
      <g>
        <path
          fill="#323232"
          d="M64.986 10H35.014a9.318 9.318 0 0 0-9.318 9.318v4.353h48.608v-4.353A9.318 9.318 0 0 0 64.986 10z"
        ></path>
      </g>
      <path
        d="M41.122 17.595h17.756"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#666"
        fill="none"
      ></path>
    </g>
    <g>
      <path
        fill="#323232"
        d="M25.696 80.682A9.318 9.318 0 0 0 35.014 90h29.972a9.318 9.318 0 0 0 9.318-9.318v-6.35H25.696v6.35z"
      ></path>
      <circle fill="#666" r="4.543" cy="82.419" cx="50"></circle>
    </g>
  </svg>
);
