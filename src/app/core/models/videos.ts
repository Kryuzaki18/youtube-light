export interface Video {
  kind?: string;
  etag?: string;
  items?: Item[];
  nextPageToken?: string;
  pageInfo?: PageInfo;
}

export interface Item {
  kind?: Kind;
  etag?: string;
  id?: string;
  snippet?: Snippet;
  status?: Status;
  statistics?: Statistics;
  player?: Player;
}

export enum Kind {
  YoutubeVideo = 'youtube#video',
}

export interface Player {
  embedHtml?: string;
}

export interface Snippet {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: Thumbnails;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: LiveBroadcastContent;
  localized?: Localized;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Localized {
  title?: string;
  description?: string;
}

export interface Thumbnails {
  default?: Default;
  medium?: Default;
  high?: Default;
  standard?: Default;
  maxres?: Default;
}

export interface Default {
  url?: string;
  width?: number;
  height?: number;
}

export interface Statistics {
  viewCount?: number;
  likeCount?: number;
  favoriteCount?: number;
  commentCount?: number;
}

export interface Status {
  uploadStatus?: UploadStatus;
  privacyStatus?: PrivacyStatus;
  license?: License;
  embeddable?: boolean;
  publicStatsViewable?: boolean;
  madeForKids?: boolean;
}

export enum License {
  Youtube = 'youtube',
}

export enum PrivacyStatus {
  Public = 'public',
}

export enum UploadStatus {
  Processed = 'processed',
}

export interface PageInfo {
  totalResults?: number;
  resultsPerPage?: number;
}