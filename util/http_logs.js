const log = require("../logs/logger");

function httpLog(request, response) {
  response.on("finish", () => {
    const { rawHeaders, httpVersion, method, socket, url } = request;
    const { remoteAddress, remoteFamily } = socket;
    const { statusCode, statusMessage } = response;
    const headers = response.getHeaders();
    log.info({
      timestamp: Date(Date.now()).toString(),
      response: {
        statusCode,
        statusMessage,
        headers,
      },
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url,
    });
  });
}

module.exports = httpLog;
