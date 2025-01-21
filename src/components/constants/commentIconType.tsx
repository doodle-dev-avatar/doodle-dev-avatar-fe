import { CommentType } from '@/types/selectType';

export const commentIconType = {
  lgtm: (
    <div className="flex text-black">
      LGTM
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_36_252)">
          <path
            d="M13.4181 5.64151C13.4098 5.1639 13.4966 4.68941 13.6737 4.24573C13.8507 3.80205 14.1143 3.39807 14.4491 3.05736C14.7839 2.71665 15.1832 2.44604 15.6238 2.26131C16.0643 2.07658 16.5372 1.98145 17.0149 1.98145C17.4926 1.98145 17.9655 2.07658 18.406 2.26131C18.8465 2.44604 19.2459 2.71665 19.5807 3.05736C19.9155 3.39807 20.1791 3.80205 20.3561 4.24573C20.5331 4.68941 20.62 5.1639 20.6117 5.64151V9.78136C20.6124 10.1335 20.5858 10.4857 20.5318 10.8379C20.5107 10.9663 20.4936 11.0946 20.4804 11.2229C20.4411 11.6276 20.4892 12.157 20.7648 12.5135L20.1064 13.1479C21.7819 14.0064 23.1875 15.3111 24.1682 16.9181C25.1489 18.5251 25.6664 20.3719 25.6637 22.2545C25.6646 23.3025 25.5053 24.3445 25.1912 25.3443L24.1007 32.4614H15.2403V32.4581C9.76824 32.34 5.37793 28.7721 5.37793 22.2534C5.37793 18.4231 7.21215 15.3387 9.98699 13.5996L9.98043 13.5942C10.1696 13.4629 10.3928 13.3284 10.6312 13.1851H10.6334C11.4209 12.7126 12.3834 12.1351 12.8898 11.1923C13.3306 10.3753 13.4148 9.04854 13.4148 8.43276H13.4181V5.64151Z"
            fill="url(#paint0_linear_36_252)"
          />
        </g>
        <path
          d="M13.4181 5.64151C13.4098 5.1639 13.4966 4.68941 13.6737 4.24573C13.8507 3.80205 14.1143 3.39807 14.4491 3.05736C14.7839 2.71665 15.1832 2.44604 15.6238 2.26131C16.0643 2.07658 16.5372 1.98145 17.0149 1.98145C17.4926 1.98145 17.9655 2.07658 18.406 2.26131C18.8465 2.44604 19.2459 2.71665 19.5807 3.05736C19.9155 3.39807 20.1791 3.80205 20.3561 4.24573C20.5331 4.68941 20.62 5.1639 20.6117 5.64151V9.78136C20.6124 10.1335 20.5858 10.4857 20.5318 10.8379C20.5107 10.9663 20.4936 11.0946 20.4804 11.2229C20.4411 11.6276 20.4892 12.157 20.7648 12.5135L20.1064 13.1479C21.7819 14.0064 23.1875 15.3111 24.1682 16.9181C25.1489 18.5251 25.6664 20.3719 25.6637 22.2545C25.6646 23.3025 25.5053 24.3445 25.1912 25.3443L24.1007 32.4614H15.2403V32.4581C9.76824 32.34 5.37793 28.7721 5.37793 22.2534C5.37793 18.4231 7.21215 15.3387 9.98699 13.5996L9.98043 13.5942C10.1696 13.4629 10.3928 13.3284 10.6312 13.1851H10.6334C11.4209 12.7126 12.3834 12.1351 12.8898 11.1923C13.3306 10.3753 13.4148 9.04854 13.4148 8.43276H13.4181V5.64151Z"
          fill="url(#paint1_radial_36_252)"
        />
        <path
          d="M13.4181 5.64151C13.4098 5.1639 13.4966 4.68941 13.6737 4.24573C13.8507 3.80205 14.1143 3.39807 14.4491 3.05736C14.7839 2.71665 15.1832 2.44604 15.6238 2.26131C16.0643 2.07658 16.5372 1.98145 17.0149 1.98145C17.4926 1.98145 17.9655 2.07658 18.406 2.26131C18.8465 2.44604 19.2459 2.71665 19.5807 3.05736C19.9155 3.39807 20.1791 3.80205 20.3561 4.24573C20.5331 4.68941 20.62 5.1639 20.6117 5.64151V9.78136C20.6124 10.1335 20.5858 10.4857 20.5318 10.8379C20.5107 10.9663 20.4936 11.0946 20.4804 11.2229C20.4411 11.6276 20.4892 12.157 20.7648 12.5135L20.1064 13.1479C21.7819 14.0064 23.1875 15.3111 24.1682 16.9181C25.1489 18.5251 25.6664 20.3719 25.6637 22.2545C25.6646 23.3025 25.5053 24.3445 25.1912 25.3443L24.1007 32.4614H15.2403V32.4581C9.76824 32.34 5.37793 28.7721 5.37793 22.2534C5.37793 18.4231 7.21215 15.3387 9.98699 13.5996L9.98043 13.5942C10.1696 13.4629 10.3928 13.3284 10.6312 13.1851H10.6334C11.4209 12.7126 12.3834 12.1351 12.8898 11.1923C13.3306 10.3753 13.4148 9.04854 13.4148 8.43276H13.4181V5.64151Z"
          fill="url(#paint2_radial_36_252)"
        />
        <path
          d="M13.4181 5.64151C13.4098 5.1639 13.4966 4.68941 13.6737 4.24573C13.8507 3.80205 14.1143 3.39807 14.4491 3.05736C14.7839 2.71665 15.1832 2.44604 15.6238 2.26131C16.0643 2.07658 16.5372 1.98145 17.0149 1.98145C17.4926 1.98145 17.9655 2.07658 18.406 2.26131C18.8465 2.44604 19.2459 2.71665 19.5807 3.05736C19.9155 3.39807 20.1791 3.80205 20.3561 4.24573C20.5331 4.68941 20.62 5.1639 20.6117 5.64151V9.78136C20.6124 10.1335 20.5858 10.4857 20.5318 10.8379C20.5107 10.9663 20.4936 11.0946 20.4804 11.2229C20.4411 11.6276 20.4892 12.157 20.7648 12.5135L20.1064 13.1479C21.7819 14.0064 23.1875 15.3111 24.1682 16.9181C25.1489 18.5251 25.6664 20.3719 25.6637 22.2545C25.6646 23.3025 25.5053 24.3445 25.1912 25.3443L24.1007 32.4614H15.2403V32.4581C9.76824 32.34 5.37793 28.7721 5.37793 22.2534C5.37793 18.4231 7.21215 15.3387 9.98699 13.5996L9.98043 13.5942C10.1696 13.4629 10.3928 13.3284 10.6312 13.1851H10.6334C11.4209 12.7126 12.3834 12.1351 12.8898 11.1923C13.3306 10.3753 13.4148 9.04854 13.4148 8.43276H13.4181V5.64151Z"
          fill="url(#paint3_radial_36_252)"
        />
        <path
          d="M13.4181 5.64151C13.4098 5.1639 13.4966 4.68941 13.6737 4.24573C13.8507 3.80205 14.1143 3.39807 14.4491 3.05736C14.7839 2.71665 15.1832 2.44604 15.6238 2.26131C16.0643 2.07658 16.5372 1.98145 17.0149 1.98145C17.4926 1.98145 17.9655 2.07658 18.406 2.26131C18.8465 2.44604 19.2459 2.71665 19.5807 3.05736C19.9155 3.39807 20.1791 3.80205 20.3561 4.24573C20.5331 4.68941 20.62 5.1639 20.6117 5.64151V9.78136C20.6124 10.1335 20.5858 10.4857 20.5318 10.8379C20.5107 10.9663 20.4936 11.0946 20.4804 11.2229C20.4411 11.6276 20.4892 12.157 20.7648 12.5135L20.1064 13.1479C21.7819 14.0064 23.1875 15.3111 24.1682 16.9181C25.1489 18.5251 25.6664 20.3719 25.6637 22.2545C25.6646 23.3025 25.5053 24.3445 25.1912 25.3443L24.1007 32.4614H15.2403V32.4581C9.76824 32.34 5.37793 28.7721 5.37793 22.2534C5.37793 18.4231 7.21215 15.3387 9.98699 13.5996L9.98043 13.5942C10.1696 13.4629 10.3928 13.3284 10.6312 13.1851H10.6334C11.4209 12.7126 12.3834 12.1351 12.8898 11.1923C13.3306 10.3753 13.4148 9.04854 13.4148 8.43276H13.4181V5.64151Z"
          fill="url(#paint4_linear_36_252)"
        />
        <g filter="url(#filter1_f_36_252)">
          <path
            d="M25.8989 16.0881C25.8991 15.7215 25.8271 15.3584 25.687 15.0196C25.5468 14.6808 25.3412 14.373 25.082 14.1138C24.8227 13.8545 24.5149 13.6489 24.1761 13.5088C23.8373 13.3686 23.4742 13.2966 23.1076 13.2969H20.0167C19.4435 13.2969 18.8843 13.4733 18.4149 13.8021C17.9456 14.131 17.5888 14.5964 17.3931 15.1351C17.1974 15.6738 17.1723 16.2596 17.3211 16.8131C17.47 17.3665 17.7856 17.8607 18.2251 18.2286C17.8901 18.481 17.6161 18.8055 17.4234 19.1781C17.2308 19.5507 17.1244 19.9619 17.1123 20.3812C17.1001 20.8005 17.1824 21.2172 17.353 21.6004C17.5237 21.9835 17.7784 22.3234 18.0982 22.5948C17.7891 22.8569 17.5408 23.1832 17.3706 23.5509C17.2005 23.9187 17.1125 24.3191 17.1128 24.7244V24.8611C17.1128 25.6267 17.419 26.3191 17.9178 26.8233C17.5351 27.2019 17.2736 27.6857 17.1665 28.2133C17.0593 28.7408 17.1114 29.2883 17.316 29.7862C17.5207 30.2841 17.8687 30.7099 18.3158 31.0096C18.763 31.3094 19.2891 31.4694 19.8274 31.4695H22.8943C23.3716 31.4699 23.8405 31.3444 24.2538 31.1058C24.6671 30.8672 25.0103 30.5239 25.2487 30.1105C25.4872 29.6971 25.6124 29.2281 25.6119 28.7509C25.6114 28.2736 25.4852 27.805 25.2459 27.392C25.7275 27.1674 26.1349 26.8098 26.4201 26.3614C26.7053 25.913 26.8565 25.3925 26.8559 24.8611V24.7244C26.8559 23.8603 26.4643 23.0881 25.8474 22.5763C26.1993 22.2708 26.4693 21.8825 26.6331 21.4464C26.7969 21.0102 26.8493 20.5401 26.7856 20.0786C26.7218 19.6171 26.5439 19.1788 26.268 18.8035C25.9921 18.4281 25.6269 18.1275 25.2054 17.9289C25.6533 17.4204 25.8999 16.7658 25.8989 16.0881Z"
            fill="url(#paint5_linear_36_252)"
          />
        </g>
        <g filter="url(#filter2_i_36_252)">
          <path
            d="M25.2076 18.1015C26.9654 18.1015 28.3904 16.6765 28.3904 14.9187C28.3904 13.1608 26.9654 11.7358 25.2076 11.7358H21.6824C19.9246 11.7358 18.4996 13.1608 18.4996 14.9187C18.4996 16.6765 19.9246 18.1015 21.6824 18.1015H25.2076Z"
            fill="url(#paint6_linear_36_252)"
          />
          <path
            d="M25.2076 18.1015C26.9654 18.1015 28.3904 16.6765 28.3904 14.9187C28.3904 13.1608 26.9654 11.7358 25.2076 11.7358H21.6824C19.9246 11.7358 18.4996 13.1608 18.4996 14.9187C18.4996 16.6765 19.9246 18.1015 21.6824 18.1015H25.2076Z"
            fill="url(#paint7_radial_36_252)"
          />
        </g>
        <g filter="url(#filter3_i_36_252)">
          <path
            d="M24.9649 32.4611C26.6756 32.4611 28.0624 31.0743 28.0624 29.3636C28.0624 27.6529 26.6756 26.2661 24.9649 26.2661H21.4682C19.7575 26.2661 18.3707 27.6529 18.3707 29.3636C18.3707 31.0743 19.7575 32.4611 21.4682 32.4611H24.9649Z"
            fill="url(#paint8_linear_36_252)"
          />
          <path
            d="M24.9649 32.4611C26.6756 32.4611 28.0624 31.0743 28.0624 29.3636C28.0624 27.6529 26.6756 26.2661 24.9649 26.2661H21.4682C19.7575 26.2661 18.3707 27.6529 18.3707 29.3636C18.3707 31.0743 19.7575 32.4611 21.4682 32.4611H24.9649Z"
            fill="url(#paint9_radial_36_252)"
          />
          <path
            d="M24.9649 32.4611C26.6756 32.4611 28.0624 31.0743 28.0624 29.3636C28.0624 27.6529 26.6756 26.2661 24.9649 26.2661H21.4682C19.7575 26.2661 18.3707 27.6529 18.3707 29.3636C18.3707 31.0743 19.7575 32.4611 21.4682 32.4611H24.9649Z"
            fill="url(#paint10_radial_36_252)"
          />
        </g>
        <path
          d="M24.9648 32.4611C26.6755 32.4611 28.0623 31.0743 28.0623 29.3636C28.0623 27.6529 26.6755 26.2661 24.9648 26.2661H21.468C19.7573 26.2661 18.3705 27.6529 18.3705 29.3636C18.3705 31.0743 19.7573 32.4611 21.468 32.4611H24.9648Z"
          fill="url(#paint11_linear_36_252)"
        />
        <path
          d="M24.9648 32.4611C26.6755 32.4611 28.0623 31.0743 28.0623 29.3636C28.0623 27.6529 26.6755 26.2661 24.9648 26.2661H21.468C19.7573 26.2661 18.3705 27.6529 18.3705 29.3636C18.3705 31.0743 19.7573 32.4611 21.468 32.4611H24.9648Z"
          fill="url(#paint12_radial_36_252)"
        />
        <g filter="url(#filter4_f_36_252)">
          <path
            d="M26.5278 28.1084H22.2687C21.8229 28.1084 21.4615 28.4698 21.4615 28.9156C21.4615 29.3614 21.8229 29.7228 22.2687 29.7228H26.5278C26.9736 29.7228 27.335 29.3614 27.335 28.9156C27.335 28.4698 26.9736 28.1084 26.5278 28.1084Z"
            fill="url(#paint13_linear_36_252)"
          />
        </g>
        <path
          d="M26.2204 28.1081C28.0217 28.1081 29.4819 26.6478 29.4819 24.8465C29.4819 23.0452 28.0217 21.585 26.2204 21.585H21.6321C19.8308 21.585 18.3705 23.0452 18.3705 24.8465C18.3705 26.6478 19.8308 28.1081 21.6321 28.1081H26.2204Z"
          fill="#C4C4C4"
          fill-opacity="0.66"
        />
        <g filter="url(#filter5_i_36_252)">
          <path
            d="M29.4821 24.9253V24.7678C29.4821 23.01 28.0571 21.585 26.2992 21.585H21.5535C19.7956 21.585 18.3707 23.01 18.3707 24.7678V24.9253C18.3707 26.6831 19.7956 28.1081 21.5535 28.1081H26.2992C28.0571 28.1081 29.4821 26.6831 29.4821 24.9253Z"
            fill="url(#paint14_linear_36_252)"
          />
          <path
            d="M29.4821 24.9253V24.7678C29.4821 23.01 28.0571 21.585 26.2992 21.585H21.5535C19.7956 21.585 18.3707 23.01 18.3707 24.7678V24.9253C18.3707 26.6831 19.7956 28.1081 21.5535 28.1081H26.2992C28.0571 28.1081 29.4821 26.6831 29.4821 24.9253Z"
            fill="url(#paint15_radial_36_252)"
          />
          <path
            d="M29.4821 24.9253V24.7678C29.4821 23.01 28.0571 21.585 26.2992 21.585H21.5535C19.7956 21.585 18.3707 23.01 18.3707 24.7678V24.9253C18.3707 26.6831 19.7956 28.1081 21.5535 28.1081H26.2992C28.0571 28.1081 29.4821 26.6831 29.4821 24.9253Z"
            fill="url(#paint16_radial_36_252)"
          />
        </g>
        <g filter="url(#filter6_f_36_252)">
          <path
            d="M27.5832 23.8755H21.8421C21.3963 23.8755 21.0349 24.2369 21.0349 24.6827C21.0349 25.1285 21.3963 25.4899 21.8421 25.4899H27.5832C28.029 25.4899 28.3904 25.1285 28.3904 24.6827C28.3904 24.2369 28.029 23.8755 27.5832 23.8755Z"
            fill="url(#paint17_linear_36_252)"
          />
        </g>
        <g filter="url(#filter7_i_36_252)">
          <path
            d="M29.4327 19.9138V19.8996C29.4327 18.1418 28.0077 16.7168 26.2499 16.7168H21.5534C19.7955 16.7168 18.3706 18.1418 18.3706 19.8996V19.9138C18.3706 21.6716 19.7955 23.0966 21.5534 23.0966H26.2499C28.0077 23.0966 29.4327 21.6716 29.4327 19.9138Z"
            fill="url(#paint18_linear_36_252)"
          />
          <path
            d="M29.4327 19.9138V19.8996C29.4327 18.1418 28.0077 16.7168 26.2499 16.7168H21.5534C19.7955 16.7168 18.3706 18.1418 18.3706 19.8996V19.9138C18.3706 21.6716 19.7955 23.0966 21.5534 23.0966H26.2499C28.0077 23.0966 29.4327 21.6716 29.4327 19.9138Z"
            fill="url(#paint19_radial_36_252)"
          />
        </g>
        <path
          d="M17.0144 2.04541C16.0608 2.04599 15.1464 2.42507 14.4721 3.09937C13.7978 3.77367 13.4187 4.68805 13.4181 5.64166V8.434L13.4159 8.43291C13.4159 9.0476 13.3306 10.3754 12.8909 11.1924C12.3823 12.1363 11.4209 12.7128 10.6334 13.1842C10.3928 13.3285 10.1697 13.462 9.98047 13.5932C11.0687 14.4649 13.2967 16.2073 13.3514 16.1657C14.6179 15.4807 15.8881 14.8026 17.162 14.1313L17.1095 13.3767C18.0465 13.3516 18.9368 12.9619 19.5909 12.2904C20.2449 11.619 20.6112 10.7189 20.6117 9.7815V5.64166C20.6111 4.68786 20.2319 3.77331 19.5574 3.09898C18.8828 2.42465 17.9682 2.0457 17.0144 2.04541Z"
          fill="url(#paint20_radial_36_252)"
        />
        <path
          d="M17.0144 2.04541C16.0608 2.04599 15.1464 2.42507 14.4721 3.09937C13.7978 3.77367 13.4187 4.68805 13.4181 5.64166V8.434L13.4159 8.43291C13.4159 9.0476 13.3306 10.3754 12.8909 11.1924C12.3823 12.1363 11.4209 12.7128 10.6334 13.1842C10.3928 13.3285 10.1697 13.462 9.98047 13.5932C11.0687 14.4649 13.2967 16.2073 13.3514 16.1657C14.6179 15.4807 15.8881 14.8026 17.162 14.1313L17.1095 13.3767C18.0465 13.3516 18.9368 12.9619 19.5909 12.2904C20.2449 11.619 20.6112 10.7189 20.6117 9.7815V5.64166C20.6111 4.68786 20.2319 3.77331 19.5574 3.09898C18.8828 2.42465 17.9682 2.0457 17.0144 2.04541Z"
          fill="url(#paint21_radial_36_252)"
        />
        <path
          d="M14.7393 2.85596C14.3259 3.19288 13.9927 3.61776 13.7642 4.09967C13.5356 4.58157 13.4174 5.10838 13.4181 5.64174V5.85174H15.0434C15.0498 5.43122 15.0184 5.01098 14.9493 4.59611L14.9307 4.49658C14.8411 4.00658 14.7382 3.44658 14.7393 2.85596Z"
          fill="#FFBF71"
        />
        <path
          d="M14.7393 2.85596C14.3259 3.19288 13.9927 3.61776 13.7642 4.09967C13.5356 4.58157 13.4174 5.10838 13.4181 5.64174V5.85174H15.0434C15.0498 5.43122 15.0184 5.01098 14.9493 4.59611L14.9307 4.49658C14.8411 4.00658 14.7382 3.44658 14.7393 2.85596Z"
          fill="url(#paint22_radial_36_252)"
        />
        <g filter="url(#filter8_f_36_252)">
          <path
            d="M25.959 12.6045H21.9996C21.2397 12.6045 20.6237 13.2205 20.6237 13.9804C20.6237 14.7403 21.2397 15.3564 21.9996 15.3564H25.959C26.7189 15.3564 27.3349 14.7403 27.3349 13.9804C27.3349 13.2205 26.7189 12.6045 25.959 12.6045Z"
            fill="url(#paint23_linear_36_252)"
          />
        </g>
        <g filter="url(#filter9_f_36_252)">
          <path
            d="M27.0145 17.5H21.922C21.162 17.5 20.546 18.116 20.546 18.8759C20.546 19.6358 21.162 20.2519 21.922 20.2519H27.0145C27.7744 20.2519 28.3904 19.6358 28.3904 18.8759C28.3904 18.116 27.7744 17.5 27.0145 17.5Z"
            fill="url(#paint24_linear_36_252)"
          />
        </g>
        <g filter="url(#filter10_f_36_252)">
          <path
            d="M19.7039 4.97115C19.7039 4.10553 19.0024 3.40381 18.1371 3.40381C17.2718 3.40381 16.5703 4.10553 16.5703 4.97115V10.5832C16.5703 11.4488 17.2718 12.1505 18.1371 12.1505C19.0024 12.1505 19.7039 11.4488 19.7039 10.5832V4.97115Z"
            fill="url(#paint25_linear_36_252)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_36_252"
            x="5.37793"
            y="1.98145"
            width="20.5358"
            height="30.48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.25" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.847059 0 0 0 0 0.458824 0 0 0 0 0.360784 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_36_252"
            />
          </filter>
          <filter
            id="filter1_f_36_252"
            x="16.1111"
            y="12.2969"
            width="11.7448"
            height="20.1729"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <filter
            id="filter2_i_36_252"
            x="18.4996"
            y="11.7358"
            width="10.1407"
            height="6.36572"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.25" />
            <feGaussianBlur stdDeviation="0.375" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.878431 0 0 0 0 0.541176 0 0 0 0 0.0627451 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_36_252"
            />
          </filter>
          <filter
            id="filter3_i_36_252"
            x="18.3706"
            y="26.0161"
            width="9.94177"
            height="6.44482"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.25" dy="-0.25" />
            <feGaussianBlur stdDeviation="0.375" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_36_252"
            />
          </filter>
          <filter
            id="filter4_f_36_252"
            x="20.8365"
            y="27.4834"
            width="7.12341"
            height="2.86426"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.3125"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <filter
            id="filter5_i_36_252"
            x="18.3706"
            y="21.335"
            width="11.3615"
            height="6.77295"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.25" dy="-0.25" />
            <feGaussianBlur stdDeviation="0.375" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_36_252"
            />
          </filter>
          <filter
            id="filter6_f_36_252"
            x="20.4099"
            y="23.2505"
            width="8.60547"
            height="2.86426"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.3125"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <filter
            id="filter7_i_36_252"
            x="18.3706"
            y="16.4668"
            width="11.3121"
            height="6.62988"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.25" dy="-0.25" />
            <feGaussianBlur stdDeviation="0.375" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_36_252"
            />
          </filter>
          <filter
            id="filter8_f_36_252"
            x="19.9987"
            y="11.9795"
            width="7.9613"
            height="4.00195"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.3125"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <filter
            id="filter9_f_36_252"
            x="19.921"
            y="16.875"
            width="9.09436"
            height="4.00195"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.3125"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <filter
            id="filter10_f_36_252"
            x="15.9453"
            y="2.77881"
            width="4.38354"
            height="9.99658"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.3125"
              result="effect1_foregroundBlur_36_252"
            />
          </filter>
          <linearGradient
            id="paint0_linear_36_252"
            x1="21.059"
            y1="7.26136"
            x2="10.0526"
            y2="30.4357"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFCA44" />
            <stop offset="1" stop-color="#F8A528" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(22.3564 5.2992) rotate(141.116) scale(5.48586 16.1912)"
          >
            <stop stop-color="#FFE34C" />
            <stop offset="1" stop-color="#FFE34C" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12.3687 17.2539) rotate(125.191) scale(8.12679 5.88718)"
          >
            <stop stop-color="#FFCA2E" />
            <stop offset="1" stop-color="#FFCA2E" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(21.1859 19.8307) rotate(146.743) scale(17.7086 30.9906)"
          >
            <stop offset="0.681" stop-color="#E18E3F" stop-opacity="0" />
            <stop offset="1" stop-color="#E18E3F" />
          </radialGradient>
          <linearGradient
            id="paint4_linear_36_252"
            x1="15.5203"
            y1="27.9584"
            x2="15.5203"
            y2="33.5376"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D8796F" stop-opacity="0" />
            <stop offset="1" stop-color="#D8796F" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_36_252"
            x1="21.9843"
            y1="13.2969"
            x2="21.9843"
            y2="27.8306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D1730B" />
            <stop offset="1" stop-color="#E27D47" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_36_252"
            x1="28.3904"
            y1="14.9187"
            x2="18.4985"
            y2="14.9187"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDB44" />
            <stop offset="1" stop-color="#F9A928" />
          </linearGradient>
          <radialGradient
            id="paint7_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.1074 17.7405) rotate(-142.633) scale(2.53871 1.69933)"
          >
            <stop stop-color="#D98320" />
            <stop offset="1" stop-color="#D98320" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint8_linear_36_252"
            x1="27.2136"
            y1="29.3625"
            x2="18.3707"
            y2="29.3625"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDB44" />
            <stop offset="1" stop-color="#F9A928" />
          </linearGradient>
          <radialGradient
            id="paint9_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.3339 32.46) scale(7.99911 3.04305)"
          >
            <stop stop-color="#F29545" />
            <stop offset="1" stop-color="#F29545" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(19.95 27.3522) scale(8.11223 2.17761)"
          >
            <stop stop-color="#DA810B" />
            <stop offset="1" stop-color="#FFB610" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint11_linear_36_252"
            x1="23.2158"
            y1="33.0988"
            x2="23.2158"
            y2="31.095"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DC7C6A" />
            <stop offset="1" stop-color="#DC7C6A" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint12_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.0876 29.3625) scale(6.12854 9.21233)"
          >
            <stop stop-color="#E38811" />
            <stop offset="1" stop-color="#E38811" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint13_linear_36_252"
            x1="27.0298"
            y1="28.5503"
            x2="20.6981"
            y2="28.5503"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF166" />
            <stop offset="1" stop-color="#FFF166" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_36_252"
            x1="28.5086"
            y1="24.8465"
            x2="18.3707"
            y2="24.8465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDB44" />
            <stop offset="1" stop-color="#F9A928" />
          </linearGradient>
          <radialGradient
            id="paint15_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.6216 28.1081) scale(9.17128 3.20433)"
          >
            <stop stop-color="#F29545" />
            <stop offset="1" stop-color="#F29545" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint16_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.1808 22.7301) scale(9.30099 2.29302)"
          >
            <stop stop-color="#DA810B" />
            <stop offset="1" stop-color="#FFB610" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint17_linear_36_252"
            x1="28.0076"
            y1="24.3174"
            x2="20.0801"
            y2="24.3174"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF166" />
            <stop offset="1" stop-color="#FFF166" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_36_252"
            x1="29.4327"
            y1="19.9073"
            x2="18.3716"
            y2="19.9073"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDB44" />
            <stop offset="1" stop-color="#F9A928" />
          </linearGradient>
          <radialGradient
            id="paint19_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.6587 22.3255) scale(6.01636 2.67801)"
          >
            <stop stop-color="#F29545" />
            <stop offset="1" stop-color="#F29545" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint20_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.7123 5.29822) rotate(90) scale(6.95639 2.58281)"
          >
            <stop stop-color="#F3A52A" />
            <stop offset="1" stop-color="#F3A52A" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint21_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.6812 9.87885) rotate(42.9975) scale(3.48433 5.27237)"
          >
            <stop stop-color="#CDA25E" />
            <stop offset="1" stop-color="#CDA25E" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint22_radial_36_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(15.2978 4.86834) rotate(-168.366) scale(1.79316 3.91397)"
          >
            <stop offset="0.55" stop-color="#CCB28B" stop-opacity="0" />
            <stop offset="1" stop-color="#CCB28B" />
          </radialGradient>
          <linearGradient
            id="paint23_linear_36_252"
            x1="26.986"
            y1="13.3592"
            x2="19.7519"
            y2="13.3592"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF166" />
            <stop offset="1" stop-color="#FFF166" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint24_linear_36_252"
            x1="27.9824"
            y1="18.2547"
            x2="19.5266"
            y2="18.2547"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF166" />
            <stop offset="1" stop-color="#FFF166" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint25_linear_36_252"
            x1="19.542"
            y1="5.8024"
            x2="16.1634"
            y2="5.8024"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFF166" />
            <stop offset="1" stop-color="#FFF166" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ),
  merge: <div className="text-black">머지했어요</div>,
  pr: <div className="text-black">PR 올렸어요</div>,
  review: (
    <div className="text-black">
      코드리뷰
      <br />
      해주세요
    </div>
  ),
  why: <div className="text-black">왜 되지?</div>,
  none: <div className="text-black">...</div>,
} as Record<CommentType[number], JSX.Element>;
