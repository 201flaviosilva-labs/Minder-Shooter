extends Node

var ALIEN_MINDER = preload("res://src/Assets/Sprites/Minders/AlienMinder.png");
var AUTUMN_MINDER = preload("res://src/Assets/Sprites/Minders/AutumnMinder.png");
var BAR_MINDER = preload("res://src/Assets/Sprites/Minders/BatMinder.png");
var BIGODES = preload("res://src/Assets/Sprites/Minders/Bigodes.png");
var BIG_WALL_MINDER = preload("res://src/Assets/Sprites/Minders/BigWallyMinder.png");
var BLCK_CAT_WHITE_CAR = preload("res://src/Assets/Sprites/Minders/BlackCatWhiteCat.png");
var BLACK_MINDER = preload("res://src/Assets/Sprites/Minders/BlackMinder.png");
var CALIFORNIA = preload("res://src/Assets/Sprites/Minders/California.png");
var COW_MINDER = preload("res://src/Assets/Sprites/Minders/CowMinder.png");
var FEMALE_MINDER = preload("res://src/Assets/Sprites/Minders/FemaleMinder.png");
var FEMALE_MINDER_2 = preload("res://src/Assets/Sprites/Minders/FemaleMinder2.png");
var FIZZY_MINDER = preload("res://src/Assets/Sprites/Minders/FuzzyMinder.png");
var GENTLEMAN_MINDER = preload("res://src/Assets/Sprites/Minders/GentlemanMinder.png");
var HALLOWEEN_MINDER = preload("res://src/Assets/Sprites/Minders/HalloweenMinder.png");
var MINDER = preload("res://src/Assets/Sprites/Minders/Minder.png");
var MINDERA = preload("res://src/Assets/Sprites/Minders/Mindera.png");
var MINDER_BIKER = preload("res://src/Assets/Sprites/Minders/MinderBiker.png");
var MINDER_GAMER = preload("res://src/Assets/Sprites/Minders/MinderGamer.png");
var MINDER_PALHACO = preload("res://src/Assets/Sprites/Minders/MinderPalhaco.png");
var MINDER_PLAY = preload("res://src/Assets/Sprites/Minders/MinderPlay.png");
var MINDER_RODINHAS_NATAL = preload("res://src/Assets/Sprites/Minders/MinderRodinhasNatal.png");
var MONST_MINDER = preload("res://src/Assets/Sprites/Minders/MonstMinder.png");
var MR_MINDER_STICKER = preload("res://src/Assets/Sprites/Minders/MRMinderSticker.png");
var NERD = preload("res://src/Assets/Sprites/Minders/Nerd.png");
var OWL_MINDER = preload("res://src/Assets/Sprites/Minders/OwlMinder.png");
var PIRATE_MINDER = preload("res://src/Assets/Sprites/Minders/PirateMinder.png");
var PIXEL_MINDER = preload("res://src/Assets/Sprites/Minders/PixelMinder.png");
var POLVO = preload("res://src/Assets/Sprites/Minders/Polvo.png");
var PUMPKIN_MINDER = preload("res://src/Assets/Sprites/Minders/PumpkinMinder.png");
var ROCKET_MINDER = preload("res://src/Assets/Sprites/Minders/RocketMinder.png");
var RODINHAS = preload("res://src/Assets/Sprites/Minders/Rodinhas.png");
var SLIME_MINDER = preload("res://src/Assets/Sprites/Minders/SlimeMinder.png");
var SOUTH_PARK = preload("res://src/Assets/Sprites/Minders/SouthPark.png");
var THE_HATEFUL_EIGHT = preload("res://src/Assets/Sprites/Minders/TheHatefulEight.png");
var VAPM_MINDER = preload("res://src/Assets/Sprites/Minders/VampMinder.png");
var WINE_MINDER = preload("res://src/Assets/Sprites/Minders/WineMinder.png");

var selected_texture = MINDER;

var textures = [
	ALIEN_MINDER, AUTUMN_MINDER, BAR_MINDER, BIGODES, BIG_WALL_MINDER, BLCK_CAT_WHITE_CAR, BLACK_MINDER, CALIFORNIA, COW_MINDER,
	FEMALE_MINDER, FEMALE_MINDER_2, FIZZY_MINDER, GENTLEMAN_MINDER, HALLOWEEN_MINDER, MINDER, MINDERA, MINDER_BIKER, MINDER_GAMER,
	MINDER_PALHACO, MINDER_PLAY, MINDER_RODINHAS_NATAL, MONST_MINDER, MR_MINDER_STICKER, NERD, OWL_MINDER, PIRATE_MINDER, PIXEL_MINDER,
	PUMPKIN_MINDER, ROCKET_MINDER, RODINHAS, SLIME_MINDER, THE_HATEFUL_EIGHT, VAPM_MINDER, WINE_MINDER
]
# SOUTH_PARK

func get_selected():
	return selected_texture
	pass

func set_texture(texture):
	selected_texture = texture
	pass

func set_texture_index(index):
	selected_texture = get_textures()[index]
	pass

func get_texture(name):
	pass
	
func get_texture_index(index):
	return get_textures()[index]
	pass

func get_textures():
	return textures
	pass
