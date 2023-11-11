
// Import injected libraries here!

import { editMetadata } from "./functions/editMetadata";
import { extractPages } from "./functions/extractPages";
import { impose } from "./functions/impose";
import { mergePDFs } from './functions/mergePDFs';
import { organizePages } from './functions/organizePages';
import { removeBlankPages } from './functions/removeBlankPages';
import { rotatePages } from './functions/rotatePages';
import { scaleContent} from './functions/scaleContent';
import { scalePage } from './functions/scalePage';
import { splitOn } from './functions/splitOn';
import { splitPDF } from './functions/splitPDF';

export default {
    editMetadata,
    extractPages,
    impose,
    mergePDFs,
    organizePages,
    removeBlankPages,
    rotatePages,
    scaleContent,
    scalePage,
    splitOn,
    splitPDF,
}