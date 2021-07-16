// .loginScreen {
//     padding: 16px;
//     max-width: 1110px;
//     display: grid;
//     --gap: 12px;
//     --gutter: 16px;
//     grid-gap: var(--gap);
//     grid-template-areas: 
//       "logoArea"
//       "formArea"
//       "footerArea";
//     @media(min-width: 860px) {
//       grid-template-columns: 2fr 1fr;
//       grid-template-areas: 
//               "logoArea formArea"
//               "logoArea formArea"
//               "footerArea footerArea";
//     }
//     .logoArea {
//       grid-area: logoArea;
//       background-color: var(--backgroundTertiary);
//       border-radius: var(--commonRadius);
//       padding: var(--gutter);
//       text-align: center;
//       display: flex;
//       flex-direction: column;
//       flex-wrap: wrap;
//       justify-content: center;
//       align-items: center;
//       min-height: 263px;
//       @media(min-width: 860px) {
//         min-height: 368px;
//       }
//       p {
//         font-size: 12px;
//         line-height: 1.2;
//         &:not(:last-child) {
//           margin-bottom: 12px;
//         }
//         strong {
//           color: var(--colorQuarternary);
//         }
//       }
//       img {
//         max-height: 45px;
//         margin-bottom: 36px;
//       }
//     }
//     .formArea {
//       grid-area: formArea;
//       display: flex;
//       flex-wrap: wrap;
//       flex-direction: column;
//       .box {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         padding: var(--gutter);
//         padding-left: 50px;
//         padding-right: 50px;
//         background-color: var(--backgroundSecondary);
//         border-radius: var(--commonRadius);
//         flex: 1;
//         &:not(:last-child) {
//           margin-bottom: var(--gap);
//         }
//         &:first-child {
//           min-height: 224px;
//           @media(min-width: 860px) {
//             min-height: 282px;
//           }
//         }
//         p {
//           font-size: 14px;
//         }
//         a {
//           text-decoration: none;
//           color: var(--colorPrimary);
//         }
//         input {
//           width: 100%;
//           display: block;
//           border: 1px solid var(--textQuarternaryColor);
//           padding: 12px;
//           background-color: var(--backgroundTertiary);
//           border-radius: var(--commonRadius);
//           margin-top: 24px;
//           margin-bottom: 16px;
//         }
//         button {
//           width: 100%;
//           display: block;
//           border: 0;
//           padding: 12px;
//           border-radius: var(--commonRadius);
//           background-color: var(--colorPrimary);
//           color: var(--textSecondaryColor);
//         }
//       }
//     }
//     .footerArea {
//       grid-area: footerArea;
//       background-color: var(--backgroundQuarternary);
//       border-radius: var(--commonRadius);
//       padding: 8px;
//       p {
//         font-size: 12px;
//         text-align: center;
//         a {
//           text-decoration: none;
//           color: var(--colorPrimary);
//         }
//       }
//     }
//   }
// `;