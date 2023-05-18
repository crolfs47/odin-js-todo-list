import './style.css';
import { todoFactory } from './todo';
import { projectFactory, setDefaultProject } from './project';
import { showProjects } from './display';

setDefaultProject();
showProjects();
