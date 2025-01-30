import { GoodsType } from '@/types/selectType';

export const goodsIconType = {
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
      width="71"
      height="118"
      viewBox="0 0 71 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.05295 80.4132C8.76727 78.2142 8.90764 76.2934 10.1995 74.3317C10.8027 73.6083 11.394 73.2366 12.0036 73.0444C12.6462 72.8417 13.387 72.8135 14.322 72.9007C14.9689 72.961 15.6427 73.0679 16.4041 73.1886C16.7698 73.2467 17.1557 73.3079 17.5685 73.3687C18.8089 73.5513 20.2092 73.715 21.7838 73.715C26.7026 73.715 29.946 73.9633 33.2437 74.2158L33.3266 74.2222C36.6651 74.4778 40.0704 74.7352 45.2838 74.7352C46.3996 74.7352 47.3508 74.6831 48.1813 74.6376C48.2596 74.6333 48.3367 74.629 48.4128 74.6249C49.3082 74.5764 50.0388 74.5445 50.7424 74.5897C52.084 74.6759 53.4003 75.0466 55.41 76.3381C55.586 76.4512 55.6952 76.5461 55.762 76.6307L56.5468 76.0109L55.762 76.6307C56.1356 77.1037 56.3784 77.769 56.4878 78.6384C56.5968 79.5059 56.5648 80.5109 56.4443 81.5973C56.2871 83.0133 56.0027 84.4257 55.7302 85.779C55.5732 86.559 55.4201 87.3194 55.2976 88.0495C54.7391 91.3775 54.8345 93.5231 54.9535 95.8936L54.9602 96.0256C55.0758 98.3255 55.2049 100.891 54.7886 105.117C54.6798 106.221 54.6813 107.487 54.6911 108.725C54.6921 108.852 54.6932 108.979 54.6943 109.105C54.704 110.232 54.7135 111.333 54.6577 112.343C54.595 113.48 54.4533 114.394 54.1934 115.032C53.9457 115.64 53.6588 115.854 53.332 115.917C51.3623 116.296 50.0873 116.17 48.8576 115.934C48.5709 115.879 48.2754 115.815 47.9666 115.748C46.9486 115.526 45.7868 115.273 44.323 115.216C40.4765 115.065 36.6666 115.15 34.2736 115.204C34.0949 115.208 33.9242 115.212 33.7619 115.215C31.6871 115.26 29.6148 115.245 27.5296 115.23C26.2857 115.221 25.0373 115.211 23.7809 115.215C22.5339 115.219 21.2898 115.264 20.112 115.31C19.9932 115.315 19.875 115.319 19.7577 115.324C18.7056 115.366 17.7164 115.405 16.8094 115.414C15.7982 115.425 14.9294 115.397 14.2278 115.303C13.5029 115.206 13.0785 115.052 12.8619 114.899C12.3475 114.535 11.9268 113.762 11.6616 112.434C11.4026 111.137 11.3309 109.516 11.3309 107.715C11.3309 106.401 11.1914 105.001 11.0076 103.448C10.9565 103.017 10.9021 102.573 10.8458 102.115C10.6973 100.907 10.5359 99.5942 10.3903 98.1169C10.2162 96.3492 10.3019 94.8486 10.3935 93.273L10.3948 93.2505C10.4856 91.6879 10.5807 90.0499 10.3903 88.1169C10.2457 86.648 9.9793 85.2742 9.71795 83.999C9.68321 83.8295 9.64866 83.6621 9.61452 83.4968C9.38854 82.4023 9.18042 81.3944 9.05295 80.4132Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M9.72119 84.0486C9.72119 84.0486 15.138 83.354 18.9293 83.354C22.0535 83.354 28.8051 84.854 31.9293 84.854C36.6965 84.854 37.3141 84.0486 44.9293 84.0486C48.2487 84.0486 55.4293 84.0486 55.4293 84.0486"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M33.6352 73.8655C32.538 60.4802 33.8954 53.1522 40.7904 40.4748"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M59.494 28.3263C58.4513 30.3293 57.4317 31.3764 56.1583 32.4909C55.9118 32.7066 55.6536 32.9265 55.3828 33.1571C54.2279 34.1405 52.8456 35.3174 51.1817 37.1894C49.7327 38.8194 47.8005 39.6218 45.8394 39.9212C43.8707 40.2218 41.9336 40.0037 40.5912 39.6508C40.1921 39.5459 39.7643 39.2266 39.3381 38.5708C38.9135 37.9175 38.5499 37.0177 38.2579 35.9382C37.6748 33.7831 37.4291 31.1109 37.4291 28.788C37.4291 25.1167 38.8785 22.5417 41.0051 18.7637C41.2617 18.3078 41.5282 17.8344 41.8032 17.3394C43.0235 15.1428 44.4778 13.0436 46.0655 11.344C47.6606 9.63643 49.342 8.38384 51.0069 7.79686C55.2623 6.29658 58.336 5.47508 61.8991 7.7018C64.0464 9.04372 64.822 10.5567 64.9846 12.3111C65.1585 14.1885 64.6401 16.3865 63.9589 19.1112C63.2247 22.0482 62.6325 23.3172 62.011 24.318C61.8254 24.6169 61.6127 24.9243 61.3768 25.2653C60.8506 26.0256 60.2089 26.9529 59.494 28.3263Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M12.5522 58.175C13.3598 58.9379 13.9825 59.2679 14.7533 59.6054C14.9031 59.671 15.0608 59.7377 15.2276 59.8082C15.951 60.1139 16.8446 60.4915 17.9946 61.1641C19.7461 62.1885 21.8243 61.5446 22.9115 60.8579L22.9116 60.8578C22.9141 60.8563 22.932 60.8451 22.9595 60.7986C22.9901 60.7468 23.0285 60.657 23.0597 60.5139C23.1239 60.2194 23.136 59.8002 23.08 59.2705C22.9685 58.2174 22.6128 56.951 22.1988 55.8654C21.573 54.224 20.508 53.2759 18.8062 51.7608C18.6058 51.5824 18.3966 51.3962 18.1783 51.2C17.223 50.3419 16.1838 49.5681 15.1633 49.0022C14.1317 48.4301 13.1834 48.1063 12.3946 48.0673C10.0941 47.9534 8.77001 48.034 7.69078 49.3637C7.34589 49.7887 7.18322 50.1549 7.11794 50.4763C7.05277 50.7973 7.07214 51.1354 7.18155 51.5232C7.41625 52.3552 8.00986 53.265 8.83836 54.4864C9.7024 55.7602 10.1846 56.2458 10.6166 56.6002C10.735 56.6974 10.8773 56.8038 11.0408 56.926C11.4331 57.2193 11.9481 57.6043 12.5522 58.175Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M41.1646 39.7684C44.0741 31.2098 47.7261 23.2342 54.6513 16.9831"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20.4574 44.3764C27.997 55.134 29.6847 61.6665 30.8559 73.6812"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.5349 29.3013C20.3909 31.0131 20.9743 32.6572 21.4592 34.5966C22.1518 37.3672 22.3897 38.8732 21.9627 40.4847C21.8682 40.8413 21.787 41.1675 21.7119 41.4686C21.5476 42.1284 21.4131 42.6682 21.2347 43.1456C20.9896 43.8014 20.7425 44.0929 20.4426 44.2429C19.5881 44.6702 18.0939 45.1931 16.4139 44.2625C15.8876 43.971 15.2685 43.3614 14.5425 42.5343C14.3094 42.2688 14.0621 41.9768 13.8088 41.6776C13.3345 41.1174 12.839 40.5322 12.3756 40.0488C11.9085 39.5616 11.5889 39.0687 11.2033 38.4742C11.1174 38.3417 11.0282 38.2041 10.9334 38.0604C10.4232 37.2876 9.80661 36.4394 8.77417 35.5841C7.6478 34.651 6.45367 33.2634 5.83648 31.9332C5.61788 31.462 5.48414 30.994 5.35359 30.4473C5.32164 30.3135 5.28922 30.1716 5.25526 30.0231C5.15528 29.5856 5.042 29.0899 4.88824 28.5703C4.42302 26.9982 4.09935 25.7712 4.136 24.5874C4.17015 23.4846 4.52312 22.3534 5.56029 21.0155C6.90451 19.9712 7.91428 19.7328 8.79915 19.7837C9.70453 19.8357 10.5672 20.183 11.7102 20.6431C11.7993 20.679 11.8902 20.7156 11.9829 20.7527C13.1741 21.4694 13.8189 21.9096 14.3577 22.3462C14.8049 22.7085 15.185 23.0716 15.7558 23.617C15.9033 23.7579 16.0635 23.911 16.2409 24.0794C16.7419 24.5549 17.3371 25.3871 17.9418 26.3825C18.5347 27.3588 19.0948 28.4211 19.5349 29.3013Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M14.2548 32.3117C17.7993 36.6316 19.2515 39.2588 20.7397 44.355"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.7883 57.3798C24.3611 62.5314 26.1771 66.5313 27.4266 73.0357"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M38.8404 73.202C38.4568 68.3055 38.7197 63.9194 41.9234 59.0397"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M56.6932 50.8397C57.1706 51.3586 57.2178 52.0124 56.8251 53.0443C56.6304 53.5562 56.3483 54.0968 56.025 54.6682C55.9117 54.8685 55.7884 55.0808 55.6631 55.2965C55.451 55.6618 55.2332 56.0368 55.0485 56.3801C54.0585 58.2202 52.5682 59.281 50.862 60.4557C49.054 61.7006 47.2527 62.3539 44.9291 62.3539C43.5459 62.3539 42.9048 62.0955 42.5569 61.8541C42.2456 61.638 42.0849 61.3981 41.8236 61.0077C41.7633 60.9177 41.6978 60.8198 41.6237 60.7123C41.3981 60.3846 41.254 59.6966 41.4248 58.7403C41.5891 57.8206 42.0206 56.817 42.7015 55.989C43.622 54.8697 45.3369 53.4758 46.4962 52.6776C47.3154 52.1136 48.0668 51.8012 48.9212 51.4831C49.041 51.4385 49.1636 51.3935 49.2889 51.3476C50.0528 51.0675 50.919 50.7498 51.893 50.2399C52.9916 49.6647 53.9078 49.5358 54.6563 49.661C55.4045 49.7862 56.0883 50.1822 56.6932 50.8397Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
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
      width="80"
      height="61"
      viewBox="0 0 80 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="-33" width="113" height="61" fill="url(#pattern0_64_1263)" />
      <defs>
        <pattern
          id="pattern0_64_1263"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_64_1263"
            transform="matrix(0.00249918 0 0 0.00462963 -0.00358489 0)"
          />
        </pattern>
        <image
          id="image0_64_1263"
          width="403"
          height="216"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
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
