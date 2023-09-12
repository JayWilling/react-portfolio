type QueueItem = () => Promise<void>;

export default class Typewriter {
	private element: HTMLElement;
	private loop: boolean;
	private typingSpeed: number;
	private deletingSpeed: number;
	private stringQueue: QueueItem[] = [];

	constructor(
		parent: HTMLElement,
		{ loop = false, typingSpeed = 50, deletingSpeed = 50 }
	) {
		this.element = document.createElement("div");
		parent.append(this.element);
		this.loop = loop;
		this.typingSpeed = typingSpeed;
		this.deletingSpeed = deletingSpeed;
	}

	public typeString(string: string) {
		this.stringQueue.push(() => {
			return new Promise((resolve, reject) => {
				let i = 0;
				const interval = setInterval(() => {
					this.element.append(string[i]);
					i++;
					if (i >= string.length) {
						resolve();
						clearInterval(interval);
					}
				}, this.typingSpeed);
			});
		});
		return this;
	}

	public pauseFor(duration: number) {
		this.stringQueue.push(() => {
			return new Promise((resolve, reject) => {
				const interval = setInterval(resolve, duration);
			});
		});
		return this;
	}

	public addFunction(func: () => void) {
		this.stringQueue.push(() => {
			return new Promise((resolve, reject) => {
				func();
				resolve();
			});
		});
		return this;
	}

	public deleteChars(count: number) {
		return this;
	}

	public deleteAll(deleteSpeed = this.deletingSpeed) {
		return this;
	}

	public updateStyle(styleObject: { [key: string]: string }) {
		this.stringQueue.push(() => {
			return new Promise((resolve, reject) => {
				const interval = setInterval(() => {
					for (const [key, value] of Object.entries(styleObject)) {
						this.element.style.setProperty(key, value);
					}
				});
			});
		});
	}

	public async start() {
		for (const item of this.stringQueue) {
			await item();
		}
		return Promise;
	}
}
