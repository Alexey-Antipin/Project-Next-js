import { SpriteProps } from "../ts";

export const Sprite = ({ id, colour, height, width }: SpriteProps) => {
  switch (id) {
    case "heart":
      return (
        <svg
          width="16"
          height="14"
          viewBox="0 0 480 450"
          fill="#8291A3"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"
            stroke="#8291A3"
            strokeWidth="25"
          />
        </svg>
      );
    case "sign":
      return (
        <svg
          height={height || "10"}
          width={width || "9"}
          viewBox="0 0 9 10"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z"
            fill={colour || "#1E2123"}
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.8055 6.56142C8.4803 6.56142 5.7967 9.24501 5.7967 12.5702C5.7967 15.8954 8.4803 18.579 11.8055 18.579C15.1307 18.579 17.8143 15.8954 17.8143 12.5702C17.8143 9.24501 15.1307 6.56142 11.8055 6.56142ZM11.8055 16.4755C9.6551 16.4755 7.90022 14.7206 7.90022 12.5702C7.90022 10.4198 9.6551 8.66494 11.8055 8.66494C13.9559 8.66494 15.7108 10.4198 15.7108 12.5702C15.7108 14.7206 13.9559 16.4755 11.8055 16.4755ZM18.0604 4.91493C17.284 4.91493 16.6571 5.54189 16.6571 6.31825C16.6571 7.09462 17.284 7.72158 18.0604 7.72158C18.8367 7.72158 19.4637 7.09755 19.4637 6.31825C19.4639 6.1339 19.4278 5.95132 19.3573 5.78095C19.2869 5.61059 19.1835 5.4558 19.0532 5.32544C18.9228 5.19509 18.768 5.09173 18.5977 5.02128C18.4273 4.95084 18.2447 4.9147 18.0604 4.91493ZM23.5184 12.5702C23.5184 10.953 23.533 9.35048 23.4422 7.73622C23.3514 5.86122 22.9237 4.19716 21.5526 2.82607C20.1785 1.45204 18.5174 1.02724 16.6424 0.936418C15.0252 0.845598 13.4227 0.860246 11.8084 0.860246C10.1912 0.860246 8.5887 0.845598 6.97444 0.936418C5.09944 1.02724 3.43538 1.45497 2.06428 2.82607C0.69026 4.20009 0.265455 5.86122 0.174635 7.73622C0.0838143 9.35341 0.0984628 10.956 0.0984628 12.5702C0.0984628 14.1845 0.0838143 15.7899 0.174635 17.4042C0.265455 19.2792 0.693189 20.9433 2.06428 22.3144C3.43831 23.6884 5.09944 24.1132 6.97444 24.204C8.59163 24.2948 10.1942 24.2802 11.8084 24.2802C13.4256 24.2802 15.0281 24.2948 16.6424 24.204C18.5174 24.1132 20.1815 23.6854 21.5526 22.3144C22.9266 20.9403 23.3514 19.2792 23.4422 17.4042C23.536 15.7899 23.5184 14.1874 23.5184 12.5702ZM20.9403 19.4784C20.7264 20.0116 20.4686 20.4101 20.0555 20.8202C19.6424 21.2333 19.2469 21.4911 18.7137 21.705C17.1727 22.3173 13.5135 22.1796 11.8055 22.1796C10.0975 22.1796 6.43538 22.3173 4.89436 21.7079C4.36116 21.494 3.96272 21.2362 3.55256 20.8231C3.13948 20.4101 2.88167 20.0145 2.6678 19.4813C2.05842 17.9374 2.19612 14.2782 2.19612 12.5702C2.19612 10.8622 2.05842 7.20009 2.6678 5.65908C2.88167 5.12587 3.13948 4.72743 3.55256 4.31728C3.96565 3.90712 4.36116 3.64638 4.89436 3.43251C6.43538 2.82314 10.0975 2.96083 11.8055 2.96083C13.5135 2.96083 17.1756 2.82314 18.7166 3.43251C19.2498 3.64638 19.6483 3.90419 20.0584 4.31728C20.4715 4.73036 20.7293 5.12587 20.9432 5.65908C21.5526 7.20009 21.4149 10.8622 21.4149 12.5702C21.4149 14.2782 21.5526 17.9374 20.9403 19.4784Z"
            fill={colour || "#1E2123"}
          />
        </svg>
      );
    case "vk":
      return (
        <svg
          width={width || "25"}
          height={height || "15"}
          viewBox="0 0 25 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.2554 1.26839C24.4231 0.721422 24.2554 0.320312 23.4625 0.320312H20.836C20.1676 0.320312 19.8622 0.667314 19.6946 1.04843C19.6946 1.04843 18.3591 4.24671 16.4668 6.32048C15.8559 6.92391 15.5769 7.11446 15.2439 7.11446C15.0774 7.11446 14.8355 6.92391 14.8355 6.37694V1.26839C14.8355 0.612028 14.6427 0.320312 14.0857 0.320312H9.95847C9.54167 0.320312 9.29015 0.623791 9.29015 0.913154C9.29015 1.53423 10.2363 1.67773 10.3333 3.42803V7.22503C10.3333 8.05666 10.1812 8.2084 9.84589 8.2084C8.956 8.2084 6.79056 4.99835 5.50543 1.32367C5.25511 0.609676 5.0024 0.321489 4.33169 0.321489H1.70633C0.955376 0.321489 0.805664 0.66849 0.805664 1.0496C0.805664 1.73419 1.69555 5.12186 4.9509 9.60228C7.12112 12.6618 10.1765 14.3203 12.9599 14.3203C14.6283 14.3203 14.8343 13.9521 14.8343 13.317V11.0044C14.8343 10.2681 14.9936 10.1198 15.5218 10.1198C15.9098 10.1198 16.5781 10.3128 18.1364 11.7866C19.9161 13.5346 20.2108 14.3191 21.2108 14.3191H23.8362C24.586 14.3191 24.9608 13.951 24.7452 13.224C24.5093 12.5006 23.6589 11.4479 22.5307 10.2022C21.9175 9.49171 21.0012 8.72714 20.7222 8.34485C20.3329 7.85199 20.4455 7.63438 20.7222 7.1968C20.7234 7.19798 23.9224 2.77284 24.2554 1.26839Z"
            fill={colour || "#1E2123"}
          />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8047 0.320312C5.28266 0.320312 0.805664 4.79731 0.805664 10.3193C0.805664 15.3093 4.46166 19.4453 9.24266 20.1983V13.2103H6.70266V10.3193H9.24266V8.11631C9.24266 5.60831 10.7357 4.22531 13.0187 4.22531C14.1127 4.22531 15.2587 4.42031 15.2587 4.42031V6.87931H13.9947C12.7547 6.87931 12.3667 7.65131 12.3667 8.44231V10.3173H15.1377L14.6947 13.2083H12.3667V20.1963C17.1477 19.4473 20.8037 15.3103 20.8037 10.3193C20.8037 4.79731 16.3267 0.320312 10.8047 0.320312Z"
            fill={colour || "#1E2123"}
          />
        </svg>
      );
    case "facebook-2":
      return (
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.88397 3.79773H9.44259V1.08311C9.17369 1.04612 8.2489 0.962891 7.17188 0.962891C4.92464 0.962891 3.38522 2.3764 3.38522 4.97434V7.36528H0.905365V10.4H3.38522V18.0359H6.42565V10.4007H8.8052L9.18294 7.36599H6.42493V5.27525C6.42565 4.39813 6.66182 3.79773 7.88397 3.79773Z"
            fill="#664EF9"
          />
        </svg>
      );
    case "viber":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.76714 0.477981C7.36994 0.496852 4.3636 0.726211 2.68188 2.26712C1.43347 3.50827 0.997255 5.33806 0.946447 7.60407C0.902898 9.86136 0.852091 14.1001 4.93845 15.2549V17.0114C4.93845 17.0114 4.91087 17.7154 5.37539 17.8606C5.94879 18.0421 6.27541 17.4984 6.81977 16.9178L7.83592 15.771C10.6303 16.0032 12.7715 15.4669 13.0183 15.387C13.5844 15.2056 16.7787 14.7984 17.3013 10.5589C17.8384 6.18146 17.04 3.42335 15.6029 2.17495L15.5956 2.17349C15.1602 1.77429 13.4182 0.504111 9.52054 0.489594C9.52054 0.489594 9.23312 0.471449 8.76714 0.477981ZM8.81577 1.7097C9.21134 1.70752 9.45449 1.72421 9.45449 1.72421C12.7497 1.73147 14.3255 2.72584 14.6956 3.05972C15.9077 4.09691 16.5305 6.58429 16.0747 10.2395C15.6392 13.7815 13.048 14.0065 12.569 14.1589C12.3658 14.2243 10.4786 14.6888 8.10374 14.5364C8.10374 14.5364 6.33347 16.671 5.78185 17.2226C5.69475 17.317 5.59314 17.346 5.52781 17.3315C5.43346 17.3097 5.40443 17.1936 5.41168 17.0339L5.4262 14.1168C1.96332 13.1588 2.16655 9.54273 2.20284 7.6556C2.24639 5.76847 2.60204 4.22103 3.65448 3.17585C5.0749 1.89115 7.62833 1.71695 8.81505 1.7097H8.81577ZM9.07707 3.59682C9.04851 3.59673 9.02021 3.60227 8.99379 3.61313C8.96738 3.624 8.94337 3.63997 8.92314 3.66013C8.90291 3.68029 8.88686 3.70425 8.87591 3.73063C8.86496 3.757 8.85932 3.78528 8.85932 3.81384C8.85932 3.87159 8.88226 3.92698 8.9231 3.96781C8.96393 4.00865 9.01932 4.03159 9.07707 4.03159C9.61667 4.02129 10.153 4.11798 10.655 4.31605C11.1571 4.51413 11.6149 4.80968 12.0021 5.18564C12.7933 5.95501 13.1787 6.98567 13.1932 8.33569C13.1932 8.36429 13.1988 8.3926 13.2098 8.41902C13.2207 8.44544 13.2367 8.46944 13.257 8.48966C13.2772 8.50988 13.3012 8.52592 13.3276 8.53686C13.354 8.54781 13.3823 8.55344 13.4109 8.55344V8.54691C13.4687 8.54691 13.5241 8.52397 13.5649 8.48313C13.6057 8.4423 13.6287 8.38691 13.6287 8.32916C13.6556 7.69428 13.553 7.06056 13.3272 6.46659C13.1013 5.87263 12.7569 5.33086 12.3149 4.87426C11.4512 4.03232 10.361 3.59682 9.07634 3.59682H9.07707ZM6.20718 4.09764C6.05283 4.07564 5.89556 4.10633 5.7608 4.18474H5.75209C5.45451 4.35893 5.18015 4.57668 4.91885 4.86701C4.72288 5.09927 4.61328 5.3308 4.58425 5.55581C4.56717 5.68777 4.57957 5.82188 4.62054 5.94848L4.63506 5.95573C4.85878 6.61343 5.15069 7.24592 5.50604 7.84286C5.96665 8.67888 6.53257 9.45237 7.18994 10.1444L7.21171 10.1735L7.24075 10.1952L7.26252 10.217L7.2843 10.2388C7.97907 10.8978 8.75462 11.4661 9.5924 11.9299C10.5505 12.4525 11.1326 12.6993 11.481 12.8009V12.8082C11.5826 12.8372 11.6755 12.8517 11.7699 12.8517C12.0672 12.83 12.3488 12.7094 12.5697 12.5091C12.8528 12.2551 13.0778 11.9735 13.2447 11.6759V11.6687C13.4117 11.3566 13.3536 11.0582 13.1141 10.855C12.6314 10.4327 12.1087 10.0584 11.5536 9.73725C11.1834 9.53402 10.806 9.65741 10.6535 9.86064L10.3269 10.2736C10.16 10.4769 9.85514 10.4478 9.85514 10.4478L9.84643 10.4551C7.58188 9.87443 6.97945 7.58157 6.97945 7.58157C6.97945 7.58157 6.95042 7.26947 7.16091 7.10979L7.56736 6.78317C7.76334 6.62349 7.90124 6.24606 7.69075 5.87589C7.37005 5.32045 6.99567 4.79778 6.57299 4.31538C6.48105 4.20135 6.35125 4.12409 6.20718 4.09764ZM9.45377 4.74362C9.39602 4.74381 9.34071 4.76694 9.30001 4.80791C9.25931 4.84888 9.23656 4.90434 9.23675 4.96209C9.23694 5.01984 9.26007 5.07515 9.30104 5.11585C9.34201 5.15654 9.39747 5.1793 9.45522 5.17911C10.1816 5.19172 10.8733 5.49189 11.3786 6.0138C11.6066 6.26531 11.7819 6.55996 11.8941 6.88034C12.0063 7.20073 12.0531 7.54036 12.0319 7.87915C12.0321 7.93678 12.0551 7.99198 12.0959 8.03265C12.1367 8.07333 12.192 8.09617 12.2496 8.09617L12.2569 8.10488C12.2855 8.10488 12.3139 8.09923 12.3404 8.08824C12.3668 8.07725 12.3909 8.06115 12.4111 8.04085C12.4313 8.02055 12.4474 7.99646 12.4583 7.96996C12.4692 7.94346 12.4747 7.91507 12.4746 7.88641C12.4964 7.02269 12.2278 6.29687 11.698 5.71621C11.1681 5.13556 10.4278 4.80894 9.48425 4.74362C9.4741 4.74291 9.46392 4.74291 9.45377 4.74362ZM9.80942 5.91872C9.7803 5.91786 9.7513 5.92275 9.72407 5.9331C9.69683 5.94345 9.67191 5.95906 9.65071 5.97904C9.62952 5.99903 9.61246 6.02299 9.60053 6.04956C9.58859 6.07614 9.58201 6.1048 9.58115 6.13392C9.58029 6.16304 9.58518 6.19204 9.59553 6.21928C9.60588 6.24651 9.62149 6.27143 9.64147 6.29263C9.66146 6.31382 9.68542 6.33088 9.712 6.34281C9.73857 6.35475 9.76723 6.36133 9.79635 6.36219C10.5149 6.39848 10.8633 6.76139 10.9069 7.50899C10.9087 7.56547 10.9325 7.61901 10.9731 7.65828C11.0138 7.69756 11.0681 7.7195 11.1246 7.71947H11.1319C11.1611 7.71856 11.1899 7.71177 11.2164 7.6995C11.243 7.68723 11.2668 7.66973 11.2864 7.64805C11.3061 7.62637 11.3212 7.60096 11.3308 7.57332C11.3404 7.54569 11.3443 7.5164 11.3423 7.48721C11.2915 6.51461 10.7617 5.96953 9.81813 5.91872C9.81522 5.91866 9.81232 5.91866 9.80942 5.91872Z"
            fill={colour || "#664EF9"}
          />
        </svg>
      );
    case "telegram":
      return (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.2089 0.997407L1.56595 6.644C0.566623 7.04538 0.572405 7.60286 1.3826 7.85145L5.14204 9.02421L13.8403 3.53619C14.2516 3.28594 14.6274 3.42056 14.3185 3.69476L7.27118 10.0549H7.26953L7.27118 10.0557L7.01185 13.9308C7.39176 13.9308 7.55941 13.7565 7.77249 13.5509L9.59853 11.7752L13.3968 14.5808C14.0971 14.9665 14.6001 14.7683 14.7744 13.9325L17.2677 2.18173C17.5229 1.15846 16.8771 0.695132 16.2089 0.997407Z"
            fill={colour || "#664EF9"}
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.1558 2.87929C14.3846 2.10244 13.4667 1.48655 12.4555 1.06738C11.4442 0.64821 10.3598 0.43412 9.26514 0.43754C4.67675 0.43754 0.942178 4.17211 0.942178 8.76365C0.942178 10.2308 1.32656 11.6654 2.05436 12.9257L0.872864 17.241L5.28692 16.0826C6.50723 16.7473 7.87449 17.0961 9.26409 17.0971H9.26724C13.8556 17.0971 17.5934 13.3625 17.5934 8.771C17.5961 7.67672 17.3821 6.59273 16.9635 5.58165C16.5449 4.57058 15.9302 3.65246 15.1548 2.88034L15.1558 2.87929ZM9.26724 15.6919C8.0271 15.6921 6.80973 15.3588 5.74272 14.7268L5.48961 14.5755L2.87038 15.2613L3.56982 12.7083L3.40599 12.4457C2.71049 11.3438 2.34295 10.0667 2.34632 8.76365C2.34854 6.92797 3.07897 5.16815 4.37729 3.87042C5.67561 2.57269 7.43576 1.84307 9.27144 1.84168C11.1188 1.84168 12.859 2.56423 14.1644 3.86965C14.8086 4.51152 15.3192 5.2747 15.6668 6.11507C16.0143 6.95544 16.1919 7.85636 16.1892 8.76575C16.1861 12.5854 13.0816 15.6909 9.26724 15.6909V15.6919ZM13.0617 10.507C12.8548 10.402 11.8308 9.89999 11.6407 9.83067C11.4506 9.76136 11.312 9.72565 11.1713 9.93569C11.0337 10.1426 10.6336 10.612 10.5117 10.7528C10.3899 10.8903 10.2691 10.9103 10.0623 10.8053C9.85536 10.7002 9.18218 10.4808 8.38821 9.77186C7.77068 9.2205 7.35165 8.53786 7.22982 8.33096C7.108 8.12407 7.21617 8.0096 7.32224 7.90773C7.41781 7.81531 7.52914 7.66513 7.63416 7.5433C7.73918 7.42148 7.77174 7.33641 7.84105 7.19568C7.91036 7.0581 7.87676 6.93628 7.82425 6.83125C7.77173 6.72623 7.3548 5.70227 7.18466 5.28534C7.01768 4.87785 6.84334 4.93457 6.71522 4.92721C6.59339 4.92091 6.45581 4.92091 6.31824 4.92091C6.18066 4.92091 5.95381 4.97342 5.76372 5.18032C5.57363 5.38721 5.03487 5.89236 5.03487 6.91632C5.03487 7.94028 5.77947 8.92854 5.8845 9.06927C5.98952 9.20684 7.35165 11.3104 9.43843 12.2105C9.93413 12.4237 10.3217 12.5518 10.6231 12.6505C11.1219 12.808 11.5746 12.7849 11.9327 12.7324C12.3328 12.6736 13.1635 12.2304 13.3379 11.7442C13.5122 11.2579 13.5122 10.842 13.4597 10.7559C13.4103 10.6635 13.2728 10.612 13.0627 10.506L13.0617 10.507Z"
            fill={colour || "#664EF9"}
          />
        </svg>
      );
    case "home":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.7984 5.36427L6.41443 0.458394C6.17811 0.243027 5.82174 0.243051 5.58551 0.458371L0.201486 5.3643C0.0121814 5.5368 -0.0503497 5.80258 0.0421345 6.04138C0.134642 6.28019 0.359876 6.43448 0.615977 6.43448H1.4759V11.3498C1.4759 11.5447 1.63391 11.7027 1.8288 11.7027H4.7799C4.97478 11.7027 5.1328 11.5447 5.1328 11.3498V8.36537H6.86721V11.3498C6.86721 11.5447 7.02523 11.7027 7.22011 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6401 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9877 5.5368 11.7984 5.36427Z"
            fill={colour || "#664EF9"}
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z"
            fill="white"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          width="613"
          height="273"
          viewBox="0 0 613 273"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3" filter="url(#filter0_d_552_2303)">
            <path
              d="M30 201.328H128.868V237.481H170.507V201.328H196.053V166.481H170.507V31.8119H115.994L30 167.083V201.328ZM129.672 166.481H73.8518V164.874L128.063 79.2122H129.672V166.481Z"
              fill="white"
            />
            <path
              d="M305.834 242C357.631 242 388.911 202.634 389.011 134.847C389.112 67.5629 357.43 29 305.834 29C254.137 29 222.757 67.4625 222.656 134.847C222.455 202.433 253.936 241.9 305.834 242ZM305.834 205.948C282.198 205.948 266.91 182.248 267.011 134.847C267.111 88.1499 282.299 64.6507 305.834 64.6507C329.268 64.6507 344.556 88.1499 344.556 134.847C344.657 182.248 329.369 205.948 305.834 205.948Z"
              fill="white"
            />
            <path
              d="M416.947 201.328H515.814V237.481H557.453V201.328H583V166.481H557.453V31.8119H502.94L416.947 167.083V201.328ZM516.619 166.481H460.798V164.874L515.01 79.2122H516.619V166.481Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_552_2303"
              x="0"
              y="0"
              width="613"
              height="273"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_552_2303"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_552_2303"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "email":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill={colour}
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_651)">
            <path d="M15.937 15.6252C16.3304 15.6252 16.6713 15.4953 16.961 15.2389L12.003 10.2806C11.8841 10.3658 11.7688 10.4486 11.6598 10.5274C11.2888 10.8008 10.9877 11.0141 10.7564 11.167C10.5252 11.3202 10.2176 11.4763 9.8336 11.6357C9.44935 11.7954 9.09137 11.8749 8.75928 11.8749H8.74956H8.73984C8.40773 11.8749 8.04975 11.7954 7.66552 11.6357C7.2813 11.4763 6.97368 11.3202 6.7427 11.167C6.51149 11.0141 6.21051 10.8008 5.83929 10.5274C5.73584 10.4516 5.62111 10.3684 5.49707 10.2793L0.538086 15.2389C0.827817 15.4953 1.16889 15.6252 1.56223 15.6252H15.937Z" />
            <path d="M0.986433 7.15831C0.615429 6.91096 0.286427 6.62768 0 6.30859V13.8521L4.36999 9.48213C3.49574 8.87179 2.36932 8.09807 0.986433 7.15831Z" />
            <path d="M16.524 7.15831C15.1939 8.05861 14.0633 8.83366 13.1323 9.48388L17.5005 13.8523V6.30859C17.2205 6.62126 16.895 6.90436 16.524 7.15831Z" />
            <path d="M15.9377 1.875H1.56289C1.0614 1.875 0.675839 2.04435 0.405743 2.38269C0.135425 2.72119 0.000488281 3.14452 0.000488281 3.65221C0.000488281 4.0623 0.179557 4.50663 0.537535 4.98535C0.895513 5.46387 1.27643 5.83973 1.6801 6.11313C1.90139 6.26948 2.56874 6.73342 3.68213 7.50479C4.28317 7.92129 4.80585 8.28432 5.25502 8.5976C5.63787 8.86436 5.96805 9.09537 6.24066 9.28709C6.27195 9.30904 6.32117 9.34424 6.38649 9.39095C6.45687 9.4415 6.54592 9.50565 6.65579 9.58498C6.86736 9.738 7.04313 9.86169 7.18312 9.95618C7.32291 10.0507 7.49229 10.1563 7.691 10.2735C7.88954 10.3906 8.07681 10.4786 8.25257 10.5372C8.42837 10.5957 8.5911 10.6251 8.74081 10.6251H8.75054H8.76026C8.90994 10.6251 9.07271 10.5957 9.24854 10.5372C9.42427 10.4786 9.61137 10.3908 9.81008 10.2735C10.0086 10.1563 10.1777 10.0505 10.318 9.95618C10.458 9.86169 10.6337 9.73803 10.8453 9.58498C10.955 9.50565 11.044 9.44147 11.1144 9.39111C11.1798 9.34421 11.229 9.30923 11.2604 9.28709C11.4728 9.13931 11.8038 8.90925 12.2487 8.6003C13.0583 8.03777 14.2507 7.20982 15.8308 6.11313C16.306 5.78121 16.703 5.38066 17.0221 4.91205C17.3406 4.44344 17.5003 3.95189 17.5003 3.43756C17.5003 3.00784 17.3455 2.64014 17.0365 2.33389C16.7272 2.02802 16.3609 1.875 15.9377 1.875Z" />
          </g>
          <defs>
            <clipPath id="clip0_305_651">
              <rect width="17.5" height="17.5" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "user":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill={colour}
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_305_638)">
            <path d="M10.0013 0C7.14418 0 4.80859 2.33559 4.80859 5.19275C4.80859 8.04991 7.14418 10.3855 10.0013 10.3855C12.8585 10.3855 15.1941 8.04991 15.1941 5.19275C15.1941 2.33559 12.8585 0 10.0013 0Z" />
            <path d="M18.913 14.535C18.7769 14.1949 18.5955 13.8774 18.3915 13.5826C17.3484 12.0407 15.7384 11.0203 13.9244 10.7708C13.6976 10.7482 13.4482 10.7935 13.2668 10.9296C12.3144 11.6325 11.1806 11.9953 10.0014 11.9953C8.82228 11.9953 7.68851 11.6325 6.73612 10.9296C6.5547 10.7935 6.30526 10.7255 6.07853 10.7708C4.26446 11.0203 2.63183 12.0407 1.61143 13.5826C1.40735 13.8774 1.22592 14.2176 1.0899 14.535C1.02189 14.6711 1.04454 14.8298 1.11256 14.9659C1.29398 15.2833 1.52071 15.6008 1.72479 15.8729C2.04224 16.3038 2.38239 16.6892 2.76789 17.052C3.08534 17.3695 3.44815 17.6643 3.81099 17.9591C5.60236 19.297 7.75657 19.9999 9.97879 19.9999C12.201 19.9999 14.3552 19.2969 16.1466 17.9591C16.5094 17.687 16.8722 17.3695 17.1897 17.052C17.5525 16.6892 17.9153 16.3037 18.2328 15.8729C18.4595 15.5781 18.6636 15.2833 18.845 14.9659C18.9583 14.8298 18.981 14.6711 18.913 14.535Z" />
          </g>
          <defs>
            <clipPath id="clip0_305_638">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "mobile":
      return (
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.22721 0L1.77265 0C0.831741 0 0.0681152 0.763626 0.0681152 1.70454L0.0681152 13.2955C0.0681152 14.2364 0.831741 15 1.77265 15H7.22721C8.16812 15 8.93175 14.2364 8.93175 13.2955V1.70454C8.93175 0.763626 8.16812 0 7.22721 0ZM4.49995 14.3182C3.93403 14.3182 3.47722 13.8614 3.47722 13.2955C3.47722 12.7295 3.93403 12.2727 4.49995 12.2727C5.06587 12.2727 5.52267 12.7295 5.52267 13.2955C5.52267 13.8614 5.06584 14.3182 4.49995 14.3182ZM7.56813 11.5909H1.43176V2.04546H7.56813V11.5909Z"
            fill="white"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 0C3.36443 0 0 3.36443 0 7.5C0 11.6356 3.36443 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36443 11.6356 0 7.5 0ZM7.5 13.3607C4.26835 13.3607 1.63934 10.7317 1.63934 7.5C1.63934 4.26851 4.26835 1.63934 7.5 1.63934C10.7317 1.63934 13.3607 4.26851 13.3607 7.5C13.3607 10.7317 10.7317 13.3607 7.5 13.3607Z"
            fill="white"
          />
          <path
            d="M8.14909 7.5093V4.36588C8.14909 4.01489 7.86467 3.73047 7.51382 3.73047C7.16286 3.73047 6.87842 4.01489 6.87842 4.36588V7.71229C6.87842 7.72228 6.88088 7.73166 6.88136 7.74165C6.87301 7.91443 6.93253 8.08985 7.06448 8.22183L9.43088 10.5881C9.67909 10.8363 10.0814 10.8363 10.3294 10.5881C10.5774 10.3399 10.5776 9.93757 10.3294 9.68953L8.14909 7.5093Z"
            fill="white"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          width={width || "35"}
          height={height || "35"}
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 0C7.875 0 0 7.875 0 17.5C0 27.125 7.875 35 17.5 35C27.125 35 35 27.125 35 17.5C35 7.875 27.125 0 17.5 0ZM17.5 3.5C19.425 3.5 20.825 5.075 20.65 7L19.25 21H15.75L15.05 14L14.35 7C14.175 5.075 15.575 3.5 17.5 3.5ZM17.5 31.5C15.575 31.5 14 29.925 14 28C14 26.075 15.575 24.5 17.5 24.5C19.425 24.5 21 26.075 21 28C21 29.925 19.425 31.5 17.5 31.5Z"
            fill={colour || "#5039BD"}
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill={colour}
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.625 7.5H13V5C13 2.2425 10.7575 0 7.99999 0C5.24249 0 2.99999 2.2425 2.99999 5V7.5H2.37499C1.34166 7.5 0.499992 8.34083 0.499992 9.375V18.125C0.499992 19.1592 1.34166 20 2.37499 20H13.625C14.6583 20 15.5 19.1592 15.5 18.125V9.375C15.5 8.34083 14.6583 7.5 13.625 7.5ZM4.66666 5C4.66666 3.16167 6.16166 1.66667 7.99999 1.66667C9.83833 1.66667 11.3333 3.16167 11.3333 5V7.5H4.66666V5ZM8.83333 13.935V15.8333C8.83333 16.2933 8.46083 16.6667 7.99999 16.6667C7.53916 16.6667 7.16666 16.2933 7.16666 15.8333V13.935C6.67083 13.6458 6.33333 13.1142 6.33333 12.5C6.33333 11.5808 7.08083 10.8333 7.99999 10.8333C8.91916 10.8333 9.66666 11.5808 9.66666 12.5C9.66666 13.1142 9.32916 13.6458 8.83333 13.935Z" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};