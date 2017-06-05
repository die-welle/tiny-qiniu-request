
var TinyQiniu = require('tiny-qiniu');

module.exports = function tinyQiniuRequest(options) {
	var tinyQiniu = new TinyQiniu(options);
	return function customRequest(ref) {
		var handleProgress = ref.onProgress;
		var onError = options.onError;
		var onSuccess = options.onSuccess;
		var file = ref.file;
		var config = {
			onProgress: function (ev) {
				handleProgress({
					percent: ev.loaded / ev.total
				});
			}
		};
		if (typeof options.key === 'function') {
			config.key = options.key(ref);
		}
		else if (typeof options.key === 'string') {
			config.key = options.key;
		}
		tinyQiniu.uploadFile(file, config)
			.then(function (body) {
				onSuccess ? onSuccess(body, ref) : ref.onSuccess(body);
			})
			.catch(function (err) {
				onError ? onError(err, ref) : ref.onError(err);
			})
		;
	};
};
