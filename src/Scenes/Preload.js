import ProgressBar from "../Components/ProgressBar";

// ---- Assets
import Sprite from "../Assets/Sprites/Sprite.png";
import Minder from "../Assets/Sprites/Minder.png";

export default class Preload extends Phaser.Scene {
	constructor() {
		super({ key: "Preload" });
	}

	preload() {
		const progressBar = new ProgressBar(this);

		this.importSprites();
		this.importSounds();

		this.load.on('progress', (p) => progressBar.updateBar(p));
		this.load.on("fileprogress", (f) => progressBar.fileLoad(f));

		this.load.on('complete', () => {
			progressBar.complete();

			this.scene.start("Home");
		});
	}

	importSprites() {
		this.load.image("Sprite", Sprite);
		this.load.image("Minder", Minder);
	}

	importSounds() { }
}
