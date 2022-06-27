/**
 * 有关 日志 的所有方法
 * @author ybw0014
 */

/* eslint "no-console": "off" */

module.exports = {
    debug,
    log,
    error,
    axiosError
}

/**
 * 封装调试输出
 * @param messages
 */
function debug (...messages) {
    if (process.env.DEBUG === '1') {
        console.log('[DEBUG] ', ...messages)
    }
}

/**
 * 封装日志输出
 * @param messages
 */
function log (...messages) {
    console.log(...messages)
}

/**
 * 封装错误输出
 * @param messages
 */
function error (...messages) {
    console.error(...messages)
}

/**
 * axios 错误输出
 * @param error
 */
function axiosError (error) {
    console.error('axios错误: ', error.data ? error.data.message : error.response ? error.response.statusText : '无响应')
}
