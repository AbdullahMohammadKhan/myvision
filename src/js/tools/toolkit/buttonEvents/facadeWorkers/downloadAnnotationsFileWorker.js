import { downloadJSON } from '../facadeWorkersUtils/downloadFile/fileTypes/XML';

function downloadXMLFile(canvas) {
  canvas.discardActiveObject();
  // if (canvas.backgroundImage) {
  downloadJSON();
  //  }
}

export { downloadXMLFile as default };
