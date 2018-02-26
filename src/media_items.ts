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
    imagePath: "netflix.png"
  },
  {
    title: "Amazon Prime",
    imagePath: "amazon.ico"
  },
  {
    title: "Youtube",
    imagePath: "youtube.png"
  },
  {
    title: "Crunchy Roll",
    imagePath: "crunchyroll.png"
  },
  {
    title: "Pandora",
    imagePath: "pandora.jpg"
  },
  {
    title: "Spotify",
    imagePath: "spotify.png"
  },
  {
    title: "Wikipedia",
    imagePath: "wikipedia.jpg"
  },
  {
    title: "Google",
    imagePath: "google.png"
  }
];

export default mediaData;
