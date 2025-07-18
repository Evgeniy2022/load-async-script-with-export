declare module 'load-async-script-with-script' {
	export type TOptions = {
		globalName?: string
	}

	function loadAsyncScriptWithScript<T = any>(url: string, options?: TOptions): Promise<T>;

	export default loadAsyncScriptWithScript;
}