import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserTemplate = () => {
  const [allCardStyles, setAllCardStyles] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchTemplateStyle = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/template/get/${id}`
        );
        console.log("esponse.data.template", response.data.template);
        setAllCardStyles(response.data.template);
      } catch (error) {
        console.error("Error fetching template style:", error);
      }
    };

    if (id) {
      fetchTemplateStyle();
    }
  }, [id]);

  const htmlCode = ` <section class="plans__container" style="font-family: ${
    allCardStyles?.fontStyle
  }">
        <style>
                @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
          :root {
            --baseColor: #656c7c;
            --baseSize: 16px;
            --baseLineHeight: 1.5;
            --fontFamily: Inter, sans-serif;
            --pink: #ea4c89;
            --pinkLight: #ffecf0;
            --blue: #1769ff;
            --redTick: url("data:image/svg+xml,%3Csvg width='18' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.552.134 5.717 10.97 1.448 6.701 0 8.149l5.717 5.717L18 1.583 16.552.134Z' fill='%23EA455F'/%3E%3C/svg%3E%0A");
            --whiteTick: url("data:image/svg+xml,%3Csvg width='18' height='14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.552.134 5.717 10.97 1.448 6.701 0 8.149l5.717 5.717L18 1.583 16.552.134Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A");
            --close: url("data:image/svg+xml,%3Csvg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 1.414 16.586 0 9 7.586 1.414 0 0 1.414 7.586 9 0 16.586 1.414 18 9 10.414 16.586 18 18 16.586 10.414 9 18 1.414Z' fill='%23B1B8C9'/%3E%3C/svg%3E");
            --entpIcon: url("data:image/svg+xml,%3Csvg width='42' height='42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.813 11.077 21 1.155l17.187 9.922v19.846L21 40.845 3.813 30.923V11.077Z' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='21' cy='21' r='8' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
          }

          * {
            box-sizing: border-box;
          }

          html {
            color: var(--baseColor);
            font-family: var(--fontFamily);
            font-size: var(--baseSize);
            line-height: var(--baseLineHeight);
          }

          body {
            margin: 0;
          }

          .plans {
            max-width: 1128px;
            margin: 0 auto;
          }

          .plansHero {
            text-align: center;
            padding: 5rem 0 4.5rem;
            line-height: 1.21;
          }
          .plansHero__title {
            font-weight: 700;
            font-size: 2rem;
            margin: 0 0 1rem 0;
            color: #000;
          }
          .plansHero__subtitle {
            margin: 0;
          }

          .planItem {
            --border: 1px solid #e6e6e6;
            --bgColor: #fff;
            --boxShadow: none;
            background-color: var(--bgColor);
            border: var(--border);
            border-radius: 1rem;
            box-shadow: var(--boxShadow);
            padding: 2rem 1.5rem;
            display: inline-flex;
            flex-direction: column;
          }
          .planItem__container {
            --direction: column;
            display: grid;
            grid-auto-flow: var(--direction);
            grid-auto-columns: 1fr;
            gap: 1.5rem;
          }
          .planItem .price {
            --priceMargin: 2rem 0;
          }
          .planItem--pro {
            --border: 0;
            --boxShadow: 0px 14px 30px rgba(204, 204, 204, 0.32);
          }
          .planItem--pro .label {
            --labelBg: #fdb72e;
            --labelColor: #fff;
          }
          .planItem--entp {
            --bgColor: var(--blue);
          }
          .planItem--entp .card {
            --titleColor: #fff;
            --descColor: rgb(255 255 255 / 80%);
          }
          .planItem--entp .card__icon {
            background-image: var(--entpIcon);
            background-size: cover;
          }
          .planItem--entp .price,
          .planItem--entp .featureList {
            --color: #fff;
          }
          .planItem--entp .featureList {
            --icon: var(--whiteTick);
          }
          .planItem .button {
            margin-top: auto;
          }

          .button {
            --bgColor: var(--pinkLight);
            --color: var(--pink);
            --shadowColor: rgb(234 76 137 / 30%);
            --outline: var(--pink);
            border-radius: 0.5rem;
            display: block;
            width: 100%;
            padding: 1rem 1.5rem;
            border: 0;
            line-height: inherit;
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            background-color: var(--bgColor);
            color: var(--color);
            cursor: pointer;
            transition: all 0.1s ease-in-out;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .button--pink {
            --bgColor: var(--pink);
            --color: #fff;
            --shadowColor: rgb(234 76 137 / 50%);
          }
          .button--white {
            --bgColor: #fff;
            --shadowColor: rgb(255 255 255 / 30%);
            --outline: #fff;
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 6px 10px var(--shadowColor);
          }
          .button:focus-visible {
            outline-offset: 2px;
            outline: 2px solid var(--outline);
          }

          .card {
            --titleColor: #000;
            --descColor: var(--baseColor);
          }
          .card__header {
            display: flex;
            gap: 1rem;
            align-items: center;
          }
          .card__icon {
            width: 2.625rem;
            height: 2.625rem;
          }
          .card h2 {
            color: var(--titleColor);
            font-size: 1.5rem;
            line-height: 1.2;
            font-weight: 400;
            margin: 0;
            flex-grow: 1;
          }
          .card__desc {
            margin: 1.5rem 0 0;
            color: var(--descColor);
          }

          .label {
            --labelColor: var(--baseColor);
            --labelBg: #e5e5e5;
            font-weight: 600;
            line-height: 1.25;
            font-size: 1rem;
            text-align: center;
            padding: 0.625rem 1.125rem;
            border-radius: 2rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: var(--labelBg);
            color: var(--labelColor);
          }

          .price {
            --color: #000;
            --priceMargin: 0;
            display: flex;
            color: var(--color);
            align-items: center;
            gap: 0.5625rem;
            font-weight: 600;
            font-size: 2rem;
            margin: var(--priceMargin);
          }
          .price span {
            font-size: 1rem;
            font-weight: 400;
            color: var(--baseColor);
          }

          .featureList {
            --color: #000;
            --icon: var(--redTick);
            --height: 0.875rem;
            margin: 0 0 2.75rem;
            padding: 0;
            font-weight: 500;
          }
          .featureList li {
            color: var(--color);
            margin-bottom:0.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .featureList li:before {
            content: "";
            background-image: var(--icon);
            background-size: cover;
            display: block;
            width: 1.125rem;
            height: var(--height);
          }
          .featureList li:last-child {
            margin-bottom: 0;
          }
          .featureList li.disabled {
            --color: #b1b8c9;
            --height: 1.125rem;
            --icon: var(--close);
          }

          .symbol {
            --big: 2.625rem;
            --small: 1.5rem;
            --radius: 0.25rem;
            border: 2px solid var(--blue);
            width: var(--big);
            height: var(--big);
            border-radius: var(--radius);
            position: relative;
          }
          .symbol--rounded {
            --radius: 2rem;
          }
          .symbol:after {
            content: "";
            box-sizing: border-box;
            display: block;
            position: absolute;
            border: 2px solid var(--pink);
            width: var(--small);
            height: var(--small);
            border-radius: var(--radius);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          @media screen and (max-width: 640px) {
            .plans {
              max-width: 480px;
              width: 90%;
            }

            .planItem__container {
              --direction: row;
            }
          }
          @media screen and (min-width: 641px) and (max-width: 768px) {
            :root {
              --baseSize: 12px;
            }
          }
          @media screen and (min-width: 769px) and (max-width: 1080px) {
            :root {
              --baseSize: 14px;
            }
          }

      </style>
       <div class="plans">
          <div class="planItem__container">
            <div
              class="planItem planItem--free"
              style="
                background-color: ${allCardStyles?.first?.bgColor};
              "
            >
              <div class="card">
                <div class="card__header">
                  <div class="card__icon symbol symbol--rounded"></div>
                  <h2 style="font-size: ${allCardStyles?.headerTitleSize};">
                    ${allCardStyles?.first?.title}
                  </h2>
                </div>
                <div class="card__desc">
                  ${allCardStyles?.first?.description}
                </div>
              </div>
              <div class="price">
                ${allCardStyles?.currency}
                ${allCardStyles?.first?.price}
                <span>/ ${allCardStyles?.subscribtionType}</span>
              </div>
              <ul class="featureList">
                ${allCardStyles?.first?.services
                  .map((d) =>
                    d.included
                      ? `<li>${d.title}</li>`
                      : `<li class="disabled">${d.title}</li>`
                  )
                  .join("")}
              </ul>
              <a
                href=${allCardStyles?.first?.btnLink}
                class="button button--white"
                style="
                  background-color: ${allCardStyles?.first?.btnColor};
                  color: white;
                "
              >
                ${allCardStyles?.first?.btnText}
              </a>
            </div>
            <div
              class="planItem planItem--free"
              style="
                background-color: ${allCardStyles?.second?.bgColor};
              "
            >
              <div class="card">
                <div class="card__header">
                  <div class="card__icon symbol"></div>
                  <h2 style="font-size: ${allCardStyles?.headerTitleSize};">
                    ${allCardStyles?.second?.title}
                  </h2>
                </div>
                <div class="card__desc">
                  ${allCardStyles?.second?.description}
                </div>
              </div>
              <div class="price">
                ${allCardStyles?.currency}
                ${allCardStyles?.second?.price}
                <span>/ ${allCardStyles?.subscribtionType}</span>
              </div>
              <ul class="featureList">
                ${allCardStyles?.second?.services
                  .map((d) =>
                    d.included
                      ? `<li>${d.title}</li>`
                      : `<li class="disabled">${d.title}</li>`
                  )
                  .join("")}
              </ul>
              <a
                href="${allCardStyles?.second?.btnLink}"
                class="button button--white"
                style="
                  background-color: ${allCardStyles?.second?.btnColor};
                  color: white;
                "
              >
                ${allCardStyles?.second?.btnText}
              </a>
            </div>
            <div
              class="planItem planItem--free"
              style="
                background-color: ${allCardStyles?.third?.bgColor};
              "
            >
              <div class="card">
                <div class="card__header">
                  <div class="card__icon symbol"></div>
                  <h2 style="font-size: ${allCardStyles?.headerTitleSize};">
                    ${allCardStyles?.third?.title}
                  </h2>
                </div>
                <div class="card__desc">
                  ${allCardStyles?.third?.description}
                </div>
              </div>
              <div class="price">
                ${allCardStyles?.currency}
                ${allCardStyles?.third?.price}
                <span>/ ${allCardStyles?.subscribtionType}</span>
              </div>
              <ul class="featureList">
                ${allCardStyles?.third?.services
                  .map((d) =>
                    d.included
                      ? `<li>${d.title}</li>`
                      : `<li class="disabled">${d.title}</li>`
                  )
                  .join("")}
              </ul>
              <a
                href="${allCardStyles?.third?.btnLink}"
                class="button button--white"
                style="
                  background-color: ${allCardStyles?.third?.btnColor};
                  color: white;
                "
              >
                ${allCardStyles?.third?.btnText}
              </a>
            </div>
          </div>
        </div>
    </section>`;

  return (
    <div
      style={{ width: "100%", height: "600px", background: "white" }}
      dangerouslySetInnerHTML={{ __html: htmlCode }}
    />
  );
};
