import './style.css';
import { todoFactory } from './todo';
import { getCurrentProject, projectFactory, setDefaultProject } from './project';
import { showProjects, loadPage } from './display';

setDefaultProject();
showProjects();
