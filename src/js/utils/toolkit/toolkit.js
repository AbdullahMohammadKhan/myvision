import { downloadXML } from './buttonEvents/eventWorkersUtils/downloadFile/fileTypes/XML';
import { labelShape } from '../labellerPopUp/buttonEvents';
import {
  createNewBndBoxBtnClick, createNewPolygonBtnClick,
  removeActiveShapeBtnClick, resetCanvasEventsToDefault,
  removePolygonPointBtnClick,
} from './buttonEvents/facade';
import {
  interruptAllCanvasEventsBeforeFunc, interruptAllCanvasEventsBeforeImageUpload,
  doNothingIfLabellingInProgress,
} from './buttonMiddleware/buttonMiddleware';

function assignButtonEvents() {
  window.createNewBndBox = interruptAllCanvasEventsBeforeFunc.bind(this, createNewBndBoxBtnClick);
  window.createNewPolygon = interruptAllCanvasEventsBeforeFunc.bind(this, createNewPolygonBtnClick);
  window.removePoint = doNothingIfLabellingInProgress.bind(this, removePolygonPointBtnClick);
  window.removeShape = interruptAllCanvasEventsBeforeFunc.bind(this, removeActiveShapeBtnClick);
  window.downloadXML = interruptAllCanvasEventsBeforeFunc.bind(this, downloadXML);
  window.cancel = interruptAllCanvasEventsBeforeFunc.bind(this, resetCanvasEventsToDefault);
  window.uploadImage = interruptAllCanvasEventsBeforeImageUpload;
  window.labelShape = labelShape;
}

export { assignButtonEvents as default };