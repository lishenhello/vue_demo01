/**
 * 保存存储
 * @param  {[type]} id    [weiyiid]
 * @param  {[type]} key   [键值]
 * @param  {[type]} value [要保存的值]
 * @return {[type]}       [description]
 */
export function saveToLocal (id, key, value) {
	let seller = window.localStorage.__seller__
	if (!seller) {
		seller = {}
		seller[id] = {}
	} else {
		seller = JSON.parse(seller)[id]
		if (!seller[id]) {
			seller[id] = {}
		}
	}
	seller[id][key] = value
	window.localStorage.__seller__ = JSON.stringify(seller)
}
/**
 * 读取存储
 * @param  {[type]} id  [唯一ID]
 * @param  {[type]} key [键值]
 * @param  {[type]} def [查询不到显示的值]
 * @return {[type]}     [description]
 */
export function loadToLocal (id, key, def) {
	let seller = window.localStorage.__seller__
	if (!seller) {
		return def
	}
	seller = JSON.parse(seller)[id]
	if (!seller) {
		return def
	}
	let ret = seller[key]
	return ret || def   // 短路操作
}
