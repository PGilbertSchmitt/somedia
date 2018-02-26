/* This is a media array that will hold all of the data for each media link item until
 * I build a separate backend or easier way to add items. The images will be held
 * locally since I will not need to worry about bandwidth on a local webserver.
 * 
 * Image paths will really just be the filename, as they will have the correct path
 * appended to them.
 */
import { IMediaInfo } from "components/link_item";

const mediaData: IMediaInfo[] = [
  {
    title: "Netflix",
    imagePath: "netflix.png",
    href: "https://www.netflix.com/browse"
  },
  {
    title: "Amazon Prime",
    imagePath: "amazon.ico",
    href: "https://www.amazon.com/Amazon-Video/b?node=2858778011"
  },
  {
    title: "Youtube",
    imagePath: "youtube.png",
    href: "https://www.youtube.com/"
  },
  {
    title: "Crunchy Roll",
    imagePath: "crunchyroll.png",
    href: "http://www.crunchyroll.com/"
  },
  {
    title: "Pandora",
    imagePath: "pandora.jpg",
    href: "https://www.pandora.com/"
  },
  {
    title: "Spotify",
    imagePath: "spotify.png",
    href: "https://www.spotify.com/us/"
  },
  {
    title: "Wikipedia",
    imagePath: "wikipedia.jpg",
    href: "https://www.wikipedia.org/"
  },
  {
    title: "Google",
    imagePath: "google.png",
    href: "https://www.google.com/"
  }
];

export default mediaData;
