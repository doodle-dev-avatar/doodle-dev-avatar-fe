import { GoodsType } from '@/types/selectType';

export const goodsIconType = {
  none: <div></div>,
  monster: (
    <svg
      width="71"
      height="76"
      viewBox="0 0 71 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="16.7642"
        y="0.61084"
        width="28.5972"
        height="56.2083"
        fill="url(#pattern0_67_1076)"
      />
      <rect
        x="71"
        y="40.0557"
        width="29.5833"
        height="56.2083"
        transform="rotate(90 71 40.0557)"
        fill="url(#pattern1_67_1076)"
      />
      <rect
        y="19.3467"
        width="28.5972"
        height="56.2083"
        fill="url(#pattern2_67_1076)"
      />
      <defs>
        <pattern
          id="pattern0_67_1076"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_67_1076"
            transform="matrix(0.0116995 0 0 0.00595238 -0.00307879 0)"
          />
        </pattern>
        <pattern
          id="pattern1_67_1076"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_67_1076"
            transform="matrix(0.0116279 0 0 0.00611995 0 -0.0140759)"
          />
        </pattern>
        <pattern
          id="pattern2_67_1076"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_67_1076"
            transform="matrix(0.0116995 0 0 0.00595238 -0.00307879 0)"
          />
        </pattern>
        <image
          id="image0_67_1076"
          width="86"
          height="168"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  ),
  plant: (
    <svg
      width="47"
      height="77"
      viewBox="0 0 47 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="47" height="77" fill="url(#pattern0_140_746)" />
      <defs>
        <pattern
          id="pattern0_140_746"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_140_746"
            transform="matrix(0.00704225 0 0 0.00429852 0 -0.00507591)"
          />
        </pattern>
        <image
          id="image0_140_746"
          width="142"
          height="235"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  ),
  coffee: (
    <svg
      width="70"
      height="53"
      viewBox="0 0 70 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.0276 18.1448L58.0289 18.1764L58.0321 18.2079L59.0268 18.1053C58.0321 18.2079 58.0321 18.208 58.0321 18.2081L58.0322 18.2084L58.0323 18.2097L58.0328 18.2149L58.0349 18.235L58.043 18.313L58.0743 18.6106C58.1014 18.8678 58.1408 19.2376 58.1897 19.6884C58.2875 20.5898 58.4235 21.8161 58.5765 23.1143C58.8787 25.6774 59.2576 28.6199 59.5436 29.8297C59.7956 30.8958 60.0485 32.926 60.2441 34.8608C60.4385 36.7842 60.5664 38.5107 60.5804 38.9354C60.6174 40.0537 60.8773 42.1568 61.1183 43.9284C61.2403 44.8255 61.3601 45.6557 61.4494 46.2614C61.494 46.5644 61.531 46.8114 61.5569 46.9829L61.587 47.1811L61.5949 47.2331L61.5953 47.2351C61.8852 49.665 60.0073 51.7902 57.6019 51.7965L57.5907 51.7963L57.5208 51.795C57.4594 51.794 57.3679 51.7927 57.2443 51.7918C56.9971 51.7899 56.6217 51.7891 56.1024 51.7933C55.064 51.8018 53.4497 51.8305 51.1351 51.911C46.8973 52.0583 44.9106 51.9912 43.2152 51.9339C43.078 51.9292 42.9427 51.9247 42.8082 51.9203C42.4099 51.9073 41.8638 51.8836 41.2089 51.8553C38.153 51.723 32.7265 51.4881 28.8719 51.7523C26.6007 51.908 24.9808 51.9075 23.7094 51.8743C23.2954 51.8635 22.9049 51.8485 22.5337 51.8342C21.7965 51.8059 21.1357 51.7804 20.5194 51.7969C19.806 51.8159 18.9442 51.803 17.9681 51.7883C17.6388 51.7833 17.2964 51.7782 16.9424 51.774C15.5581 51.7577 14.0271 51.7571 12.5209 51.8504C11.0977 51.9386 9.24589 51.9266 7.73087 51.891C6.97741 51.8733 6.31466 51.8499 5.84046 51.831C5.60345 51.8216 5.41377 51.8132 5.28367 51.8073L5.1348 51.8003L5.09679 51.7984L5.0874 51.798L5.08517 51.7979L5.08468 51.7978L5.08461 51.7978L5.05931 51.7965H5.03399C2.59589 51.7965 0.702052 49.6216 1.03901 47.1635L1.04244 47.1384L1.0446 47.1133L1.04461 47.1132L1.04465 47.1127L1.04484 47.1106L1.04561 47.1017L1.04872 47.066L1.06104 46.9273C1.07189 46.8064 1.08788 46.631 1.10839 46.4137C1.14943 45.9789 1.20847 45.3775 1.28047 44.711C1.4258 43.3654 1.61951 41.7971 1.81953 40.7883C2.03701 39.6914 2.27713 37.8727 2.48888 36.2633L2.50131 36.1689C2.60386 35.3894 2.70006 34.6581 2.78561 34.0642C2.87885 33.4169 2.94894 33.0125 2.98896 32.8695C3.25598 31.9158 3.59717 29.4901 3.86438 27.4062C4.00086 26.3418 4.12204 25.3325 4.20907 24.5895C4.25259 24.218 4.28761 23.9127 4.31176 23.7002L4.33956 23.4543L4.34679 23.3897L4.34865 23.373L4.34913 23.3687L4.34925 23.3676L4.34928 23.3673C4.34929 23.3672 4.3493 23.3672 3.3554 23.2569L4.3493 23.3672L4.35077 23.3539L4.35188 23.3407C4.44928 22.1825 5.30912 15.8761 5.59503 14.1143L5.59827 14.0943L5.6007 14.0742C6.08642 10.0587 9.00122 6.72644 13.8924 4.11655C18.6966 1.55304 23.7976 1 31.2716 1C35.9556 1 40.7187 1.92862 44.6954 3.22368C48.7076 4.53026 51.7851 6.16569 53.1881 7.49226C54.7262 8.94652 55.7228 10.0962 56.3825 11.196C57.0303 12.2759 57.3761 13.3461 57.5513 14.6747L57.5553 14.7051L57.5612 14.7351C57.841 16.1714 57.9936 17.2836 58.0276 18.1448Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M52.8475 13.5313C53.2669 18.6055 44.1094 22.4112 32.2956 22.4112C20.4819 22.4112 9.22726 19.0283 10.0661 13.5313C10.841 8.45324 19.643 4.22852 31.4568 4.22852C43.2705 4.22852 52.428 8.45704 52.8475 13.5313Z"
        fill="black"
      />
      <path
        d="M21.6341 9.3277C22.0327 10.171 20.7547 10.9242 18.4545 12.0293C16.1542 13.1344 14.1737 15.1691 13.3042 13.3296C12.9056 12.4864 14.4472 10.9069 16.7475 9.80177C19.0477 8.69666 21.2355 8.48441 21.6341 9.3277Z"
        fill="white"
      />
      <path
        d="M23.8309 9.08916C23.3671 9.50355 22.9654 9.1856 22.5544 8.71795C22.1434 8.2503 22.2296 7.80056 22.4749 7.49211C22.9387 7.07772 23.5156 7.02444 23.9266 7.49209C24.4718 8.11242 24.2948 8.67477 23.8309 9.08916Z"
        fill="white"
      />
      <path
        d="M10.9053 21.1006C23.0686 27.4856 39.8456 28.3313 52.4152 20.2971"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M61.2358 37.6324L60.8164 33.4039C65.8495 31.7125 63.9302 21.2939 59.1387 22.9041L58.7192 18.6756C62.0746 18.2294 67.4433 19.1129 68.7854 26.2168C70.1276 33.3208 64.8708 36.7872 61.2358 37.6324Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  ),
  books: (
    <svg
      width="90"
      height="50"
      viewBox="0 0 207 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 33.5L88.5 91L87 103L7.5 46.5V33.5Z" fill="white" />
      <path
        d="M7.5 47L86.5 103.5V120L6.5 65.5C6.5 65.5 6 57.75 6 56.5C6 55.25 7.5 47 7.5 47Z"
        fill="white"
      />
      <rect x="88.5" y="91.5" width="98" height="12" fill="white" />
      <rect x="87.5" y="103.5" width="99" height="19" fill="white" />
      <path
        d="M9.43054 30H100.088C100.484 30 100.872 30.1179 101.201 30.3386L186.249 87.3386C187.89 88.4389 187.112 91 185.135 91H90.5906C89.7627 91 88.9552 90.7431 88.2795 90.2648L8.27501 33.6324C6.68338 32.5057 7.4805 30 9.43054 30Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M7.5 31.5C6.22508 38.1388 6.10951 39.8611 7.5 46.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M88.5 91.5C87.5131 96.6068 87.0366 98.3931 88.113 103.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 46.5L87.5 103.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M187.5 104.5C188.052 104.5 188.5 104.052 188.5 103.5C188.5 102.948 188.052 102.5 187.5 102.5V104.5ZM87.5 104.5H187.5V102.5H87.5V104.5Z"
        fill="black"
      />
      <path
        d="M187.539 89.5C186.199 95.1233 186.109 98.2008 187.539 103.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M188 88C189 89.5 188.5 90.1209 187.756 90.2336C187.345 90.4237 186.673 89.8461 186.256 88.9435C185.838 88.0409 186.589 87.6901 187 87.5C187.637 87.2056 187.961 87.941 188 88Z"
        fill="black"
      />
      <path
        d="M7.5 46.5C4.54282 54.3109 5.14054 58.6892 7.5 66.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 66.5L87.5964 121.775"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M87.5 103.5C86.1223 110.952 86.2117 114.865 87.5 121.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M88.5 122.5L187.5 122.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M187.5 103.5C186.016 110.995 186.195 115.146 187.5 122.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M88.4562 123.213C88.2708 123.418 88 123.5 87.5 123C87.0908 122.629 86.3146 122.205 86.5 122C86.6854 121.795 87.6417 121.801 88.051 122.171C88.4602 122.542 88.6416 123.009 88.4562 123.213Z"
        fill="black"
      />
      <line
        x1="91"
        y1="94"
        x2="184"
        y2="94"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="92"
        y1="97"
        x2="182"
        y2="97"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="90"
        y1="100"
        x2="184"
        y2="100"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="91"
        y1="109"
        x2="181"
        y2="109"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="93"
        y1="112"
        x2="183"
        y2="112"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="90"
        y1="115"
        x2="180"
        y2="115"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="93"
        y1="118"
        x2="183"
        y2="118"
        stroke="black"
        strokeLinecap="round"
      />
      <path d="M19.5 4.5L100.5 62L99 74L19.5 17.5V4.5Z" fill="white" />
      <path
        d="M19.5 18L98.5 74.5V91L18.5 36.5C18.5 36.5 18 28.75 18 27.5C18 26.25 19.5 18 19.5 18Z"
        fill="white"
      />
      <rect x="100.5" y="62.5" width="98" height="12" fill="white" />
      <rect x="99.5" y="74.5" width="99" height="19" fill="white" />
      <path
        d="M21.4305 1H112.088C112.484 1 112.872 1.11786 113.201 1.33862L198.249 58.3386C199.89 59.4389 199.112 62 197.135 62H102.591C101.763 62 100.955 61.7431 100.28 61.2648L20.275 4.63241C18.6834 3.50575 19.4805 1 21.4305 1Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M19.5 2.5C18.2251 9.1388 18.1095 10.8611 19.5 17.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100.5 62.5C99.5131 67.6068 99.0366 69.3931 100.113 74.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.5 17.5L99.5 74.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M199.5 75.5C200.052 75.5 200.5 75.0523 200.5 74.5C200.5 73.9477 200.052 73.5 199.5 73.5V75.5ZM99.5 75.5H199.5V73.5H99.5V75.5Z"
        fill="black"
      />
      <path
        d="M199.539 60.5C198.199 66.1233 198.109 69.2008 199.539 74.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 59C201 60.5 200.5 61.1209 199.756 61.2336C199.345 61.4237 198.673 60.8461 198.256 59.9435C197.838 59.0409 198.589 58.6901 199 58.5C199.637 58.2056 199.961 58.941 200 59Z"
        fill="black"
      />
      <path
        d="M19.5 17.5C16.5428 25.3109 17.1405 29.6892 19.5 37.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.5 37.5L99.5964 92.7754"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M99.5 74.5C98.1223 81.9521 98.2117 85.8648 99.5 92.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100.5 93.5L199.5 93.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M199.5 74.5C198.016 81.9946 198.195 86.1462 199.5 93.5"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100.456 94.2135C100.271 94.4181 100 94.5 99.5 94C99.0908 93.6291 98.3146 93.2046 98.5 93C98.6854 92.7954 99.6417 92.8006 100.051 93.1715C100.46 93.5423 100.642 94.0088 100.456 94.2135Z"
        fill="black"
      />
      <line
        x1="103"
        y1="65"
        x2="196"
        y2="65"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="104"
        y1="68"
        x2="194"
        y2="68"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="102"
        y1="71"
        x2="196"
        y2="71"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="103"
        y1="80"
        x2="193"
        y2="80"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="105"
        y1="83"
        x2="195"
        y2="83"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="102"
        y1="86"
        x2="192"
        y2="86"
        stroke="black"
        strokeLinecap="round"
      />
      <line
        x1="105"
        y1="89"
        x2="195"
        y2="89"
        stroke="black"
        strokeLinecap="round"
      />
    </svg>
  ),
  phone: (
    <svg
      width="33"
      height="48"
      viewBox="0 0 33 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2714 42.3417C29.2714 42.9599 29.2926 46.3573 27.8958 46.9192C25.9992 47.6821 25.2441 47.468 24.2373 47.6821C21.8461 48.1907 22.8442 47.9364 20.3359 47.9364C18.0751 47.9364 16.1783 47.6821 13.9175 47.6821C11.6567 47.6821 10.515 47.9364 8.25417 47.9364C6.05557 47.9364 5.05908 47.9364 4.60448 47.9364C3.89601 47.9364 1.45818 47.9364 0.700909 46.9192C-0.415425 45.4197 0.115412 42.8791 0.199673 42.0874C0.243364 41.6769 0.786311 37.4319 0.954781 35.7298C1.20648 33.1868 1.35552 29.1179 1.83574 25.4305C2.44649 20.7408 2.0888 18.3226 2.59085 13.6053C2.92144 10.499 3.66112 6.39561 3.89957 5.10848C3.94978 4.83745 3.98685 4.56787 4.00944 4.29316C4.079 3.44723 4.25735 1.87783 5.19367 1.14438C6.49225 0.127154 8.81273 0 9.51268 0C10.7986 0 11.3888 0.127161 13.2882 0.254305C15.1877 0.381449 16.3927 0.127152 18.6998 0.127152C21.5596 0.127152 23.2654 0.254305 26.1251 0.254305C27.8796 0.254305 29.3972 0.254305 29.3972 0.254305C29.3972 0.254305 29.3972 0.254305 29.3972 0.254305C30.1057 0.254305 31.1591 0.254305 32.2918 1.39868C33.0761 2.19107 33.056 4.73758 32.9415 6.49195C32.8702 7.58425 32.6317 8.6726 32.4701 9.75523C32.3823 10.3439 32.2796 11.1385 32.166 12.2066C31.6851 16.7253 31.1832 19.2397 30.9345 23.7775C30.6557 28.8636 29.8339 31.8166 29.5271 37.0013C29.2714 41.3245 29.2714 39.0386 29.2714 42.3417Z"
        fill="#18181B"
      />
      <path
        d="M25.7474 43.2319C24.3631 44.2491 20.6249 43.2319 18.6998 43.2319C16.617 43.2319 15.3166 43.3521 13.9174 43.3591C12.4419 43.3664 10.8566 43.2688 8.12824 43.6134C6.11461 43.8677 4.47854 44.6306 3.47173 43.2319C2.50944 41.8951 3.00513 40.6807 3.47173 37.5101C3.7972 35.2983 4.10098 34.1186 4.10098 32.1697C4.10098 25.6849 5.48536 19.2001 5.48536 16.2756C5.48536 14.1693 5.58963 11.4462 5.92918 9.4094C6.16104 8.01862 6.61802 6.86636 7.62483 6.4849C8.67878 6.08558 10.016 6.23059 12.0296 5.97629C14.2253 5.699 16.1443 5.98886 18.0705 5.97629C20.5264 5.96027 22.9942 5.73177 26.0626 6.23059C27.7804 6.50984 28.2678 6.57372 29.0196 7.50212C30.1523 8.90079 29.3184 12.5273 29.0196 15.2584C28.4057 20.8695 28.2491 21.4724 27.6352 27.0835C27.3582 29.616 27.1318 31.0205 27.1318 33.5683C27.1318 37.2558 26.7953 42.4619 25.7474 43.2319Z"
        fill="white"
      />
      <rect
        x="19.3291"
        y="45.9019"
        width="10.0681"
        height="0.762917"
        rx="0.381458"
        transform="rotate(-180 19.3291 45.9019)"
        fill="#F4F4F5"
      />
      <path
        d="M16.5601 3.17876C16.5601 2.33607 17.488 1.65293 18.3221 1.65293C19.1561 1.65293 19.5806 2.33607 19.5806 3.17876C19.5806 4.02145 18.6527 4.70459 17.8186 4.70459C16.9846 4.70459 16.5601 4.02145 16.5601 3.17876Z"
        fill="white"
      />
    </svg>
  ),
} as Record<GoodsType[number], JSX.Element>;
