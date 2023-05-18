import './style.css';
import { todoFactory } from './todo';
import { projectFactory, setDefaultProject } from './project';
import { showProjects, loadPage } from './display';

setDefaultProject();
showProjects();
loadPage();
