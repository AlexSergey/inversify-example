import 'reflect-metadata';

import { DiContainer } from './di.container';
import { App } from './app';

const container = new DiContainer();
container.configure();
const app = container.diContainer.get(App);

app.init();

const container2 = new DiContainer();
container2.configure(true);
const mockedApp = container2.diContainer.get(App);

mockedApp.init();
