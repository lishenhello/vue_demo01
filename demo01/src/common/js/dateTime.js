exports.objectDate = (date) => {
	if (date && typeof date === 'string') {
		date = new Date(date)
		let option = {
			'y': date.getFullYear(),
			'm': date.getMonth() + 1,
			'd': date.getDate()
		}
		return option
	}
	return date
}

exports.formatDate = (date, fmt) => {
	if (/(y)+/.test(fmt)) {
	  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSconds()
	}
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + ''
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero)
		}
	}
}

function padLeftZero (str) {
		return ('00' + str).substr(str.length)
	}
