import { resizeCanvasAndImage, resizeCanvas } from './uploadFile/uploadImage';
import { resizeAllObjects } from '../../../../canvas/objects/objectsProperties/changeProperties';
import labelProperies from '../../../../canvas/objects/label/properties';
import zoomCanvas from '../facadeWorkers/zoomWorker';
import { getCurrentZoomState } from './stateManager';

let canvas = null;

window.windowResize = () => {
  if (getCurrentZoomState() > 1) {
    resizeCanvas();
    zoomCanvas(canvas, null, true);
  } else {
    // fix here, when zoom in, stretch out, then zoom out to original
    // solution - set to original dimensions in zoom worker
    const newFileSizeRatio = resizeCanvasAndImage();
    labelProperies.updatePolygonOffsetProperties(newFileSizeRatio);
    resizeAllObjects(canvas, newFileSizeRatio);
  }
};

function assignCanvasForResizeWhenWindowResize(canvasObj) {
  canvas = canvasObj;
}

export { assignCanvasForResizeWhenWindowResize as default };
