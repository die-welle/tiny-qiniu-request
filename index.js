
var TinyQiniu = require('tiny-qiniu');

module.exports = function tinyQiniuRequest(qiniuConfig) {
	var tinyQiniu = new TinyQiniu(qiniuConfig);
	return function customRequest(ref) {
		var handleProgress = ref.onProgress;
		var onError = ref.onError;
		var onSuccess = ref.onSuccess;
		var filename = ref.filename;
		var file = ref.file;
		tinyQiniu.uploadFile(file, {
			key: filename,
			onProgress: function (ev) {
				handleProgress({
					percent: ev.loaded / ev.total
				});
			}
		}).then(onSuccess).catch(onError);
	};
};
