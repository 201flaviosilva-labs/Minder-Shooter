import ProgressBar from "../Components/ProgressBar";

// ---- Sprites
import Background from "../Assets/Sprites/Background.png";

// -- Minders
import BarMinder from "../Assets/Sprites/Minders/BarMinder.png";
import BatMinder from "../Assets/Sprites/Minders/BatMinder.png";
import Bigodes from "../Assets/Sprites/Minders/Bigodes.png";
import California from "../Assets/Sprites/Minders/California.png";
import CowMinder from "../Assets/Sprites/Minders/CowMinder.png";
import Minder from "../Assets/Sprites/Minders/Minder.png";
import Mindera from "../Assets/Sprites/Minders/Mindera.png";
import Nerd from "../Assets/Sprites/Minders/Nerd.png";
import PirateMinder from "../Assets/Sprites/Minders/PirateMinder.png";
import PixelMinder from "../Assets/Sprites/Minders/PixelMinder.png";
import Polvo from "../Assets/Sprites/Minders/Polvo.png";
import VampMinder from "../Assets/Sprites/Minders/VampMinder.png";

// -- Enemies
import Duke from "../Assets/Sprites/Duke/Duke.png";

// ---- UI

export default class Preload extends Phaser.Scene {
	constructor() {
		super({ key: "Preload" });
	}

	preload() {
		const progressBar = new ProgressBar(this);

		this.importSprites();
		this.importUI();
		this.importSounds();

		this.load.on("progress", (p) => progressBar.updateBar(p));
		this.load.on("fileprogress", (f) => progressBar.fileLoad(f));

		this.load.on("complete", () => {
			progressBar.complete();

			this.scene.start("Home");
			// this.scene.start("Dock");
			// this.scene.start("Settings");
			// this.scene.start("Play");
		});
	}

	importSprites() {
		this.load.image("Background", Background);

		// Minders
		this.load.image("BarMinder", BarMinder);
		this.load.image("BatMinder", BatMinder);
		this.load.image("Bigodes", Bigodes);
		this.load.image("California", California);
		this.load.image("CowMinder", CowMinder);
		this.load.image("Minder", Minder);
		this.load.image("Mindera", Mindera);
		this.load.image("Nerd", Nerd);
		this.load.image("PirateMinder", PirateMinder);
		this.load.image("PixelMinder", PixelMinder);
		this.load.image("Polvo", Polvo);
		this.load.image("VampMinder", VampMinder);

		// Enemy
		this.load.image("Duke", Duke);
	}

	importUI() { }

	importSounds() { }
}
