export interface Menu {
  name: VideoMenuSelected;
  icon: string;
}

export enum VideoMenu {
  Trending = 'trending',
  Subscription = 'subscription',
  Channels = 'channels',
  Playlist = 'playlist',
  History = 'history',
}

export type VideoMenuSelected =
  | VideoMenu.Trending
  | VideoMenu.Subscription
  | VideoMenu.Channels
  | VideoMenu.Playlist
  | VideoMenu.History;
