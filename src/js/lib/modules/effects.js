import $ from '../core';

$.prototype.animateOverTime = function (dur, cb, fin) {
	let timeStart;

	function _animateOverTime(time) {
		if (!timeStart) {
			timeStart = time;
		}

		let timeElapsed = time - timeStart;
		let complection = Math.min(timeElapsed / dur, 1);

		cb(complection);

		if (timeElapsed < dur) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof cb === 'function') {
				fin();
			}
		}
	}

	return _animateOverTime;
};

$.prototype.fadeIn = function (dur, display, fin) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.display = display || 'block';

		const _fadeIn = (complection) => {
			this[i].style.options = complection;
		};

		const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
	}

    return this;
};
