// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categories = {
  "EXTRATERRESTRE": "EXTRATERRESTRE",
  "DESPROFONDEURS": "DESPROFONDEURS",
  "THERMONUCLEAIRE": "THERMONUCLEAIRE",
  "VIRAL": "VIRAL"
};

const { PI, PIMedia, PIVideo, PIAudio, PICoordonnees } = initSchema(schema);

export {
  PI,
  PIMedia,
  PIVideo,
  PIAudio,
  PICoordonnees,
  Categories
};