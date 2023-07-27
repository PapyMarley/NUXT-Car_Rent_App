import { PluginFunction } from 'vue';
import LibrarySettings from './types/LibrarySettings';
export { default as BaseComponent } from './base/Component';
export interface InstallFunction extends PluginFunction<LibrarySettings> {
    installed?: boolean;
}
declare const plugin: {
    install: InstallFunction;
};
export default plugin;
