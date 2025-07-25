export let async_mode_flag = false;
export let legacy_mode_flag = false;
export let tracing_mode_flag = false;

export function enable_async_mode_flag() {
	async_mode_flag = true;
}

/** ONLY USE THIS DURING TESTING */
export function disable_async_mode_flag() {
	async_mode_flag = false;
}

export function enable_legacy_mode_flag() {
	legacy_mode_flag = true;
}

export function enable_tracing_mode_flag() {
	tracing_mode_flag = true;
}
