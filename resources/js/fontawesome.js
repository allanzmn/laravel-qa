import { config, library, dom } from '@fortawesome/fontawesome-svg-core';
config.autoReplaceSvg = 'nest';
 
 
import {faCaretUp,
        faCaretDown,
        faStar,
        faCheck }from '@fortawesome/free-solid-svg-icons';
 
library.add(faCaretUp,
            faCaretDown, 
            faStar, 
            faCheck);
 
// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()

/* OLD
import fontawesome from '@fortawesome/fontawesome-free';
import faCaretUp from '@fortawesome/free-solid-svg-icons/faCaretUp';
import faCaretDown from '@fortawesome/free-solid-svg-icons/faCaretDown';
import faStar from '@fortawesome/free-solid-svg-icons/faStar';
import faCheck from '@fortawesome/free-solid-svg-icons/faCheck';

fontawesome.library.add([faCaretUp, faCaretDown, faStar, faCheck]);
*/