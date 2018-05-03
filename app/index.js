import * as $ from 'jquery';
import { getmail } from './mail';
import { initnav } from './nav';


$(document).ready(() => {
    const protectedEmailLinks = $('[data-fill-email]');
    const email = window.emailc || '';
    if (
        email.indexOf(':') >= 0 &&
        email.replace(':', '').length > 0 &&
        protectedEmailLinks.length > 0
    ) {
        const ct = email.split(':')[0];
        const key = email.split(':')[1];
        protectedEmailLinks.attr('href', 'mailto:' + getmail(ct, key) + '');
    }

    initnav('body', 'a[href^="/"]');
});
