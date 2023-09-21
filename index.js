// Import stylesheets
import './style.css';

import { DomManipulator } from './classes/dom-manipulator.js';
import { ListController } from './classes/list.controller.js';

const listController = new ListController(
  new DomManipulator({ attachTo: 'app' })
);

listController.init();
