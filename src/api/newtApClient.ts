import { createClient } from 'newt-client-js';

export const newtApClient = (isPreview = false) => createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: isPreview ? import.meta.env.NEWT_PREVIEW_API_TOKEN : import.meta.env.NEWT_API_TOKEN,
  apiType: isPreview ? "api" : "cdn",
});