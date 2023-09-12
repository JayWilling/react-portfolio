import P5 from "p5";

export class Star {
	// Star coords in 3D
	x: number;
	px: number;
	y: number;
	py: number;
	z: number;
	col: number[];
	p: P5;

	constructor(p: P5) {
		this.p = p;

		this.x = Math.random() * 10000 - 5000;
		this.y = Math.random() * 10000 - 5000;
		this.z = Math.random() * 2000;
		this.col = [Math.random() * 41, Math.random() * 79, 96];

		this.px = this.x;
		this.py = this.y;
	}

	update(multiplier: number) {
		this.z -= multiplier;
		if (this.z <= 0.0) this.reset();
	}

	reset() {
		this.x = Math.random() * 10000 - 5000;
		this.y = Math.random() * 10000 - 5000;
		this.z = 2000;

		this.col = [Math.random() * 41, Math.random() * 79, 96];
	}

	draw() {
		// Project star only viewport
		const offsetX = 100.0 * (this.x / this.z);
		const offsetY = 100.0 * (this.y / this.z);
		const scaleZ = 0.0001 * (2000.0 - this.z);

		this.p.push();
		this.p.fill(this.col[0], this.col[1], this.col[2]);
		this.p.translate(offsetX, offsetY);
		this.p.scale(scaleZ);
		this.p.line(this.x, this.y, this.px, this.py);
		this.p.ellipse(0, 0, 20, 20);
		this.p.pop();
		this.px = this.x;
		this.py = this.y;
	}
}
