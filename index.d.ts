declare module 'load-async-script-with-export' {
	export type TOptions = {
		globalName?: string
	}

	function loadAsyncScriptWithExport<T = any>(url: string, options?: TOptions): Promise<T>;

	export default loadAsyncScriptWithExport;
}