import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Categories {
  EXTRATERRESTRE = "EXTRATERRESTRE",
  DESPROFONDEURS = "DESPROFONDEURS",
  THERMONUCLEAIRE = "THERMONUCLEAIRE",
  VIRAL = "VIRAL"
}



type PIMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PIMediaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PIVideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PIAudioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PICoordonneesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PI {
  readonly id: string;
  readonly titre?: string | null;
  readonly description?: string | null;
  readonly adresse?: string | null;
  readonly categorie?: Categories | keyof typeof Categories | null;
  readonly actif?: boolean | null;
  readonly PIMedias?: (PIMedia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PI, PIMetaData>);
  static copyOf(source: PI, mutator: (draft: MutableModel<PI, PIMetaData>) => MutableModel<PI, PIMetaData> | void): PI;
}

export declare class PIMedia {
  readonly id: string;
  readonly l?: number | null;
  readonly type?: string | null;
  readonly cles?: string | null;
  readonly source?: string | null;
  readonly timestamp?: string | null;
  readonly titre?: string | null;
  readonly description?: string | null;
  readonly piID: string;
  readonly PIVideo?: PIVideo | null;
  readonly PIAudio?: (PIAudio | null)[] | null;
  readonly h?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly piMediaPiVideoId?: string | null;
  constructor(init: ModelInit<PIMedia, PIMediaMetaData>);
  static copyOf(source: PIMedia, mutator: (draft: MutableModel<PIMedia, PIMediaMetaData>) => MutableModel<PIMedia, PIMediaMetaData> | void): PIMedia;
}

export declare class PIVideo {
  readonly id: string;
  readonly bitrate?: string | null;
  readonly imagesCles?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PIVideo, PIVideoMetaData>);
  static copyOf(source: PIVideo, mutator: (draft: MutableModel<PIVideo, PIVideoMetaData>) => MutableModel<PIVideo, PIVideoMetaData> | void): PIVideo;
}

export declare class PIAudio {
  readonly id: string;
  readonly bitrate?: string | null;
  readonly frequences?: string | null;
  readonly pimediaID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PIAudio, PIAudioMetaData>);
  static copyOf(source: PIAudio, mutator: (draft: MutableModel<PIAudio, PIAudioMetaData>) => MutableModel<PIAudio, PIAudioMetaData> | void): PIAudio;
}

export declare class PICoordonnees {
  readonly id: string;
  readonly latitude?: number | null;
  readonly longitude?: number | null;
  readonly titre?: string | null;
  readonly infos?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PICoordonnees, PICoordonneesMetaData>);
  static copyOf(source: PICoordonnees, mutator: (draft: MutableModel<PICoordonnees, PICoordonneesMetaData>) => MutableModel<PICoordonnees, PICoordonneesMetaData> | void): PICoordonnees;
}