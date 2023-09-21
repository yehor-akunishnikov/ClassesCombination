// Import stylesheets
import './style.css';

import { DomManipulator } from './classes/dom-manipulator.js';
import { ListController } from './classes/list.controller.js';

const loadOneForm = document.getElementById('load-one-form');
const updateForm = document.getElementById('update-form');
const removeForm = document.getElementById('remove-form');
const loadAllBtn = document.getElementById('load-all-btn');

const listController = new ListController(
  new DomManipulator({ attachTo: 'app' }),
  {
    loadOneForm,
    updateForm,
    removeForm,
    loadAllBtn,
  }
);

listController.init();
