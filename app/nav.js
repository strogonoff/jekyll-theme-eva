import * as $ from 'jquery';


export const initnav = (containerSelector, navLinkSelector) => {
    $(navLinkSelector).on('click', (e) => {
        // On navigation link click,
        // adds .out class to container
        // and .selected class to triggering link
        const $triggeredBy = $(e.target).closest(navLinkSelector);
        $triggeredBy.addClass('selected');
        $(containerSelector).addClass('out');
    });
};
