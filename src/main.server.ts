import 'zone.js/node';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { appConfig } from './config/app.config';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, appConfig, context);
}