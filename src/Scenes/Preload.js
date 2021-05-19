import ProgressBar from "../Components/ProgressBar";

// ---- Assets
import Background from "../Assets/Sprites/Background.png";
import Sprite from "../Assets/Sprites/Sprite.png";
import Minder from "../Assets/Sprites/Minder.png";
import Duke from "../Assets/Sprites/Duke/Duke.png";

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
			// this.scene.start("Play");
		});
	}

	importSprites() {
		this.load.image("Background", Background);
		this.load.image("Sprite", Sprite);
		this.load.image("Minder", Minder);
		this.load.image("Duke", Duke);
	}

	importSounds() { }
}
