import AboutSectionTitle from "./AboutSectionTitle";
const AboutCards = () => {
  return (
    <div className="mt-8">
      <AboutSectionTitle title="Essences" subTitle="Why Us?" />
      <div className="mx-[3%] p-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-[1fr] gap-x-6 gap-y-6 content-around justify-center">
        <div className="group/card h-full p-8 flex flex-col bg-secondary rounded-lg shadow-2xl">
          <div className="flex itemx-center justify-center mb-[.85rem]">
            <svg
              className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] transform group-hover/card:scale-[1.1] transition"
              viewBox="0 0 400.000000 400.000000"
            >
              <g
                transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M1610 3704 c-75 -35 -105 -66 -151 -156 -21 -42 -44 -80 -51 -85 -7
-4 -62 -8 -123 -8 -94 -1 -116 -4 -152 -23 -66 -35 -110 -78 -140 -140 -25
-52 -28 -66 -25 -155 1 -54 -3 -107 -8 -118 -6 -10 -44 -35 -84 -54 -108 -51
-171 -132 -183 -235 -8 -68 11 -133 63 -214 24 -38 44 -82 44 -96 0 -15 -13
-45 -29 -67 -62 -85 -76 -123 -75 -203 1 -124 56 -207 181 -269 85 -42 93 -56
91 -171 -2 -111 18 -169 80 -234 63 -66 120 -86 243 -86 122 0 123 0 169 -98
33 -70 81 -121 141 -149 104 -49 197 -39 306 33 37 24 79 44 94 44 14 0 56
-20 93 -44 110 -72 205 -83 303 -34 63 31 104 75 146 155 20 39 44 76 52 83
11 10 46 13 116 11 87 -2 106 1 153 22 65 30 116 79 147 143 20 43 23 62 22
149 -2 121 4 133 90 174 113 54 175 135 184 243 7 75 -10 135 -59 204 -58 84
-59 100 -4 186 25 39 51 90 57 113 25 92 -13 220 -84 282 -19 17 -64 45 -100
62 -37 17 -70 39 -76 49 -5 10 -9 65 -8 122 1 99 0 108 -28 158 -32 60 -75
101 -138 134 -36 19 -58 22 -152 23 -60 0 -116 4 -124 9 -7 5 -26 37 -42 72
-39 85 -82 132 -154 166 -46 21 -75 28 -123 28 -72 0 -114 -15 -185 -67 -68
-50 -104 -50 -173 0 -101 73 -205 87 -304 41z m185 -93 c22 -10 65 -35 95 -56
51 -35 59 -37 116 -33 52 3 71 10 125 46 85 57 127 69 187 53 59 -15 96 -50
134 -126 62 -123 98 -145 243 -145 119 0 144 -8 193 -64 38 -43 46 -80 37
-171 -11 -117 27 -180 140 -237 115 -58 140 -98 136 -214 -1 -20 -18 -57 -48
-100 -43 -62 -48 -75 -51 -134 -2 -54 1 -71 20 -102 80 -128 81 -129 81 -182
0 -88 -41 -140 -149 -186 -103 -43 -139 -109 -128 -231 10 -123 -21 -187 -111
-225 -31 -13 -56 -15 -121 -9 -131 11 -182 -20 -241 -143 -49 -102 -84 -127
-177 -127 -67 0 -75 2 -131 41 -117 80 -175 80 -289 1 -51 -37 -66 -42 -125
-45 -60 -3 -69 -1 -107 26 -29 21 -51 51 -78 105 -60 123 -115 153 -249 141
-107 -10 -168 19 -209 101 -18 34 -20 51 -14 120 10 140 -20 194 -140 252 -40
19 -84 48 -98 64 -25 29 -46 86 -46 122 0 27 27 87 67 144 64 93 61 163 -10
267 -25 36 -48 81 -51 100 -16 86 38 169 138 215 69 31 120 83 135 138 6 20 8
69 4 109 -7 89 -1 114 39 159 50 58 75 66 192 63 99 -3 105 -2 151 27 41 25
55 43 86 105 42 85 70 116 126 135 52 19 81 18 128 -4z"
                />
                <path
                  d="M1795 3271 c-223 -59 -398 -182 -524 -370 -105 -158 -148 -322 -138
-529 18 -378 268 -686 644 -794 113 -33 333 -32 448 0 248 71 446 233 555 457
65 133 81 195 87 350 4 99 2 149 -11 209 -69 335 -323 596 -659 676 -110 27
-302 27 -402 1z m420 -111 c267 -85 452 -274 527 -537 28 -98 30 -281 5 -385
-91 -373 -455 -625 -835 -579 -321 39 -574 261 -658 577 -24 91 -25 283 -1
374 9 36 38 108 64 160 39 81 60 109 142 191 86 86 108 102 201 147 138 67
212 83 365 78 88 -3 139 -10 190 -26z"
                />
                <path
                  fill="#151f34"
                  d="M2385 2685 c-16 -9 -131 -117 -255 -240 -123 -124 -227 -225 -229
-225 -3 0 -66 61 -141 135 -137 135 -137 135 -184 135 -36 0 -52 -5 -71 -24
-29 -29 -40 -66 -30 -103 7 -31 332 -365 377 -389 15 -8 42 -14 60 -14 29 0
61 29 325 292 195 195 294 301 298 319 10 43 -19 97 -59 114 -44 18 -53 18
-91 0z"
                />
                <path
                  d="M1121 1198 c-15 -35 -76 -165 -135 -290 -58 -126 -106 -241 -106
-257 0 -38 32 -77 70 -84 28 -6 108 19 375 117 38 14 77 26 86 26 12 0 35 -51
88 -197 40 -108 79 -209 87 -225 17 -32 42 -48 79 -48 61 0 60 -1 235 375 57
121 122 262 146 312 l43 93 -37 25 c-20 14 -41 25 -47 25 -6 0 -23 -28 -38
-62 -97 -221 -294 -630 -302 -627 -5 1 -42 93 -82 203 -73 205 -97 246 -142
246 -10 0 -112 -34 -226 -76 -114 -41 -209 -73 -212 -70 -3 3 53 130 125 283
72 152 128 281 126 285 -3 4 -28 8 -55 8 l-50 0 -28 -62z"
                />
                <path
                  d="M2738 1255 c-3 -4 32 -88 79 -188 171 -363 183 -392 170 -395 -12 -2
-170 51 -330 112 -133 51 -146 40 -232 -194 -93 -256 -84 -236 -100 -219 -7 8
-48 90 -89 182 -42 93 -84 184 -94 204 l-19 35 -27 -64 -27 -64 91 -194 c51
-107 99 -203 108 -214 41 -45 120 -39 146 12 7 15 46 115 85 222 40 107 74
198 77 202 3 4 69 -16 147 -44 337 -120 303 -110 341 -94 43 18 59 47 53 95
-2 20 -65 164 -139 321 l-135 285 -49 3 c-28 2 -53 0 -56 -3z"
                />
              </g>
            </svg>
          </div>
          <div className="mb-1rem">
            <h2 className="text-center text-primary font-bold text-2xl">
              Quality Product
            </h2>
          </div>
          <div className="mx-2 sm:mx-[1.5rem]">
            <p className="text-base text-center text-[#ffffff98] leading-relaxed">
              Unleash your potential with our premium, high-quality products.
            </p>
          </div>
        </div>
        <div className="group/card h-full p-8 flex flex-col bg-primary rounded-lg shadow-2xl">
          <div className="flex itemx-center justify-center mb-[.85rem]">
            <svg
              viewBox="0 0 248.000000 246.000000"
              className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] transform group-hover/card:scale-[1.1] transition"
            >
              <g
                transform="translate(0.000000,246.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M80 2351 c-16 -31 -14 -1322 3 -1344 11 -14 63 -16 492 -21 264 -3
481 -5 483 -6 6 -1 1 -130 -6 -130 -4 0 -28 20 -52 45 -44 45 -75 56 -98 33
-28 -28 -12 -59 73 -147 l85 -88 0 -93 c0 -84 -2 -91 -17 -85 -69 29 -103 37
-149 32 -130 -13 -218 -109 -218 -237 0 -78 24 -131 84 -182 121 -105 315 -59
377 89 9 22 13 80 13 185 l0 153 90 0 90 0 0 -153 c0 -105 4 -163 13 -185 68
-161 283 -197 401 -66 134 149 44 376 -158 396 -46 5 -80 -3 -148 -32 -16 -6
-18 1 -18 85 l0 92 109 114 c61 63 118 128 128 144 l17 30 186 2 c102 2 260 3
351 3 126 0 170 3 182 14 16 12 17 71 17 673 0 435 -4 666 -10 679 -10 19 -34
19 -1160 19 -1126 0 -1150 0 -1160 -19z m2230 -671 l0 -600 -290 0 c-159 0
-290 2 -290 3 0 2 9 39 20 82 12 47 20 111 20 160 0 140 -24 205 -191 533 -84
164 -159 305 -167 315 -18 20 -55 22 -71 4 -7 -10 -12 -175 -13 -553 l-3 -539
-577 -3 -578 -2 0 600 0 600 1070 0 1070 0 0 -600z m-774 53 c119 -228 135
-277 137 -403 1 -161 -47 -279 -166 -406 -38 -41 -73 -74 -78 -74 -5 0 -9 226
-9 541 0 342 4 538 10 534 5 -3 53 -89 106 -192z m-222 -749 c11 -4 16 -19 16
-43 l0 -37 -87 2 -88 1 -3 27 c-6 50 2 56 77 56 38 0 76 -3 85 -6z m-40 -178
c100 -42 38 -190 -65 -154 -67 23 -71 125 -5 154 38 16 31 16 70 0z m-287
-376 c68 -41 88 -112 54 -184 -68 -139 -271 -91 -271 65 0 49 30 103 68 124
39 21 111 19 149 -5z m659 1 c37 -22 64 -76 64 -126 0 -150 -205 -195 -271
-59 -34 72 -14 143 54 184 41 26 112 26 153 1z"
                />
                <path
                  fill="#04AA82"
                  d="M476 2144 c-9 -8 -16 -27 -16 -42 -1 -66 -77 -142 -142 -142 -56 0
-58 -8 -58 -280 0 -278 -1 -272 71 -284 58 -9 116 -67 125 -125 12 -74 -6 -71
389 -71 349 0 354 0 369 21 15 22 11 48 -8 61 -6 4 -154 8 -328 8 l-317 0 -26
54 c-28 60 -79 110 -134 133 -20 9 -39 20 -43 27 -10 14 -10 337 0 353 4 6 26
19 50 28 49 20 116 91 132 141 l12 34 96 1 c53 0 192 0 308 -1 235 -1 264 4
264 48 0 15 -5 33 -12 40 -9 9 -104 12 -364 12 -307 0 -355 -2 -368 -16z"
                />
                <path
                  fill="#04AA82"
                  d="M1557 2142 c-37 -41 -11 -74 61 -78 26 -1 106 -3 178 -3 l131 -1 17
-44 c20 -52 87 -118 139 -137 l37 -13 0 -187 0 -187 -34 -12 c-52 -17 -112
-75 -141 -135 -25 -53 -27 -55 -66 -55 -32 0 -41 -4 -51 -25 -9 -21 -8 -28 7
-45 15 -17 31 -20 92 -20 81 0 78 -3 102 87 14 53 67 101 122 109 70 12 69 7
69 284 0 272 -2 280 -58 280 -65 0 -141 76 -142 142 0 55 -12 58 -239 58 -189
0 -209 -2 -224 -18z"
                />
                <path
                  fill="#04AA82"
                  d="M1135 1958 c-176 -63 -248 -289 -142 -445 37 -55 113 -109 164 -119
30 -6 40 -3 54 15 26 32 13 58 -40 82 -59 26 -89 54 -112 104 -33 72 -19 166
34 224 12 13 46 34 75 47 46 21 52 27 52 54 0 19 -7 33 -19 40 -23 12 -27 12
-66 -2z"
                />
                <path
                  d="M571 1802 c-99 -50 -105 -177 -11 -240 28 -19 44 -23 84 -19 41 4 55
11 83 40 18 20 35 48 39 62 15 62 -22 136 -82 161 -44 18 -72 18 -113 -4z m87
-94 c34 -34 -6 -90 -48 -68 -35 19 -20 80 20 80 9 0 21 -5 28 -12z"
                />
                <path
                  d="M1790 1803 c-73 -38 -100 -124 -60 -191 57 -94 183 -94 240 0 68 112
-63 252 -180 191z m88 -95 c7 -7 12 -22 12 -35 0 -28 -36 -46 -62 -31 -34 17
-16 78 22 78 9 0 21 -5 28 -12z"
                />
              </g>
            </svg>
          </div>
          <div className="mb-1rem">
            <h2 className="text-center text-secondary font-bold text-2xl">
              Fair price
            </h2>
          </div>
          <div className="mx-2 sm:mx-[1.5rem]">
            <p className="text-base text-center text-[#ffffff98] leading-relaxed">
              You will be more happy by our relatively low price.
            </p>
          </div>
        </div>
        <div className="group/card h-full p-8 flex flex-col bg-secondary rounded-lg shadow-xl">
          <div className="flex itemx-center justify-center mb-[.85rem]">
            <svg
              viewBox="0 0 350.000000 308.000000"
              className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] transform group-hover/card:scale-[1.1] transition"
            >
              <g
                transform="translate(0.000000,308.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  fill="#151f34"
                  d="M2162 2868 l3 -73 143 -3 142 -3 0 76 0 75 -145 0 -146 0 3 -72z"
                />
                <path d="M2232 2703 l3 -58 73 -3 72 -3 0 61 0 60 -75 0 -76 0 3 -57z" />
                <path d="M2298 2615 c-2 -1 -266 -13 -588 -26 -638 -26 -652 -30 -165 -49 165 6 301 -13 303 -14 1 -2 -32 -21 -74 -42 -41 -21 -115 -69 -163 -105 l-87 -66 -219 -12 c-121 -7 -221 -14 -223 -15 -1 -2 73 -6 165 -10 92 -4 180 -9 196 -12 l27 -6 -32 -40 c-18 -22 -56 -72 -84 -111 l-50 -72 -208 -12 c-114 -6 -212 -13 -219 -16 -7 -2 62 -7 153 -11 91 -4 184 -9 207 -12 l42 -6 -16 -32 c-9 -17 -29 -67 -44 -111 l-27 -80 -78 -7 c-44 -3 -142 -10 -219 -14 l-140 -8 130 -8 c298 -18 297 -18 291 -41 -3 -12 -9 -59 -12 -103 l-7 -81 -71 -6 c-39 -4 -204 -12 -366 -19 -338 -14 -324 -19 110 -37 157 -7 294 -14 306 -16 18 -4 22 -17 32 -94 7 -50 15 -96 18 -104 6 -17 -71 -23 -446 -34 -135 -4 -232 -9 -217 -11 15 -2 174 -9 353 -15 l326 -12 27 -75 c16 -41 36 -90 45 -108 10 -19 16 -35 14 -37 -4 -3 -226 -13 -486 -21 -122 -4 -221 -8 -220 -9 2 -2 170 -8 373 -15 l370 -13 47 -66 c26 -36 63 -84 83 -107 l35 -41 -192 -6 c-106 -4 -336 -10 -511 -14 -174 -3 -316 -7 -314 -9 1 -1 198 -7 437 -13 239 -6 484 -13 543 -16 107 -5 109 -6 162 -45 30 -22 80 -56 111 -74 l55 -34 -148 -6 c-81 -4 -447 -16 -813 -27 -365 -11 -666 -21 -667 -23 -2 -2 111 -6 249 -10 139 -3 606 -18 1038 -32 829 -27 1000 -27 1118 1 73 17 83 27 60 57 -12 15 -24 15 -107 5 -70 -8 -120 -8 -202 1 -398 45 -726 267 -895 607 -87 176 -120 355 -103 550 22 237 122 442 304 620 136 134 291 217 489 262 112 25 348 23 458 -5 165 -41 290 -106 399 -209 l69 -66 57 36 c32 19 59 39 61 45 4 14 -138 136 -220 189 -161 104 -344 161 -565 177 -34 2 -63 3 -65 1z" />
                <path
                  fill="#151f34"
                  d="M2290 2335 c0 -42 3 -55 15 -55 12 0 15 13 15 55 0 42 -3 55 -15 55 -12 0 -15 -13 -15 -55z"
                />
                <path d="M1837 2264 c-12 -12 44 -103 59 -97 18 7 18 11 -8 61 -22 40 -36 50 -51 36z" />
                <path d="M2742 2258 c-10 -14 -42 -74 -42 -81 0 -3 6 -7 14 -10 17 -7 71 77 61 93 -8 14 -21 13 -33 -2z" />
                <path
                  fill="#151f34"
                  d="M2645 1860 l-250 -219 -61 6 c-45 4 -68 1 -92 -11 -71 -37 -107 -110 -91 -186 8 -33 5 -38 -46 -90 -30 -31 -55 -60 -55 -65 0 -5 14 -24 32 -42 l32 -33 61 60 60 60 37 -12 c68 -21 160 24 188 92 8 19 11 53 7 89 l-5 59 219 252 c193 221 227 263 217 259 -2 0 -115 -99 -253 -219z m-291 -321 c51 -40 22 -122 -44 -122 -66 0 -95 82 -44 122 15 12 34 21 44 21 10 0 29 -9 44 -21z"
                />
                <path
                  fill="#151f34"
                  d="M1507 1933 c-14 -13 -6 -23 36 -48 51 -29 53 -30 60 -11 4 10 -9 24 -38 40 -48 29 -49 29 -58 19z"
                />
                <path d="M1380 1465 c0 -12 13 -15 55 -15 42 0 55 3 55 15 0 12 -13 15 -55 15 -42 0 -55 -3 -55 -15z" />
                <path
                  fill="#151f34"
                  d="M1538 1044 c-38 -24 -46 -38 -29 -48 13 -8 103 44 98 58 -6 19 -31 16 -69 -10z"
                />
                <path d="M1856 723 c-25 -44 -23 -75 3 -58 17 10 53 84 46 95 -12 19 -23 10 -49 -37z" />
                <path
                  fill="#151f34"
                  d="M2290 595 c0 -42 3 -55 15 -55 12 0 15 13 15 55 0 42 -3 55 -15 55 -12 0 -15 -13 -15 -55z"
                />
              </g>
            </svg>
          </div>
          <div className="mb-1rem">
            <h2 className="text-center text-primary font-bold text-2xl">
              On Time Delivery
            </h2>
          </div>
          <div className="mx-2 sm:mx-[1.5rem]">
            <p className="text-base text-center text-[#ffffff98] leading-relaxed">
              We will deliver your orders on time. Just leave the shipment for
              us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
