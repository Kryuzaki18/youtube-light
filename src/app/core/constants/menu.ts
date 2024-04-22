import { Menu, VideoMenu } from "@models/menu";

export const MenuList: Menu[] = [
  {
    name: VideoMenu.Trending,
    icon: 'local_fire_department',
  },
  {
    name: VideoMenu.Subscription,
    icon: 'subscriptions',
  },
  {
    name: VideoMenu.Channels,
    icon: 'account_box',
  },
  {
    name: VideoMenu.Playlist,
    icon: 'playlist_play',
  },
  {
    name: VideoMenu.History,
    icon: 'history',
  }
] 