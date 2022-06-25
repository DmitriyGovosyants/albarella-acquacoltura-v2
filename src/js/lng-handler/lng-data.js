import { en_header, it_header } from './data/header';
import { en_careers_vac, it_careers_vac } from './data/careers-vac';
import { en_footer, it_footer } from './data/footer';
import { en_careers_form, it_careers_form } from './data/careers-form';
import { en_other, it_other } from './data/other';

export const lngData = {
    "en": {
        ...en_header,

        ...en_careers_vac,

        ...en_footer,

        ...en_careers_form,
        ...en_other,
    },
    "it": {
        ...it_header,

        ...it_careers_vac,

        ...it_footer,

        ...it_careers_form,
        ...it_other,
    },
}