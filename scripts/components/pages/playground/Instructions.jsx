import * as React from "react";
import { ActionLink } from "../../blocks/Link";

const scriptBody = `
(function() {
    const qs = (query) => document.querySelector(query);
    const g = (search) => document.querySelectorAll(search);
    const gbt = (className, text) => Array.from(g(className)).filter(item => item.textContent === text)[0];

    const attachTip = (tipHolder, tip, callback = () => { }) => {
        tipHolder.appendChild(tip);
        tipHolder.addEventListener("click", () => {
            tip.remove();
            console.log('tip completed');
            callback();
        });
    };

    const createTip = (text) => {
        qs('#pro-tip') && qs('#pro-tip').remove();
        const tipContainer = document.createElement('div');
        tipContainer.id = 'pro-tip';
        tipContainer.style.position = 'relative';

        const tip = document.createElement('div');
        tip.innerHTML = text;
        tip.style.position = 'absolute';
        tip.style.top = '0';
        tip.style.left = '10px';
        tip.style['min-width'] = '180px';
        tip.style.padding = '5px';
        tip.style.background = '#fff';
        tip.style.color = '#333';
        tip.style.border = '1px grey solid';
        tip.style['border-radius'] = '5px';
        tip.style['font-fize'] = '10px';
        tip.style['white-space'] = 'normal';


        const arrow = document.createElement('span');
        arrow.style['display'] = 'inline-block';
        arrow.style['margin-right'] = '3px';
        arrow.style['border'] = 'solid black';
        arrow.style['border-width'] = '0 3px 3px 0';
        arrow.style['padding'] = '3px';
        arrow.style['transform'] = 'rotate(150deg)';
        arrow.style['-webkit-transform'] = 'rotate(150deg)';

        tip.prepend(arrow);
        tipContainer.appendChild(tip);
        return tipContainer;
    };


    const calendarLink = gbt('.NavigationLink', 'Calendar');
    const firstTip = createTip('Для начала работы перейдите в Календарь');

    attachTip(calendarLink, firstTip, () => {
        setTimeout(() => {
            const calendarToday = qs('.CalendarDay--today');
            const secondTip = createTip('Выберите день для задачи, просто кликните по нужному дню календаря');
            attachTip(calendarToday, secondTip);
        }, 3000);
    });
}());
`;

export const Instructions = () => (
  <div>
    <div>Добавьте эту ссылку на панель закладок браузера:</div>
    <div>
      <ActionLink href={`javascript:${scriptBody}`}>Добавить задачу в Asana</ActionLink>
    </div>
  </div>
);
