extends Node

var minders = [
	[preload("res://src/Assets/Sprites/Minders/AlienMinder.png"), "Alien Minder"],
	[preload("res://src/Assets/Sprites/Minders/AutumnMinder.png"), "Autumn Minder"],
	[preload("res://src/Assets/Sprites/Minders/BatMinder.png"), "Bat Minder"],
	[preload("res://src/Assets/Sprites/Minders/Bigodes.png"), "Bigodes"],
	[preload("res://src/Assets/Sprites/Minders/BigWallyMinder.png"), "Big Wally Minder"],
	[preload("res://src/Assets/Sprites/Minders/BlackCatWhiteCat.png"), "Black Cat White Cat"],
	[preload("res://src/Assets/Sprites/Minders/BlackMinder.png"), "Black Minder"],
	[preload("res://src/Assets/Sprites/Minders/California.png"), "California"],
	[preload("res://src/Assets/Sprites/Minders/CowMinder.png"), "Cow Minder"],

	[preload("res://src/Assets/Sprites/Minders/FemaleMinder.png"), "Female Minder"],
	[preload("res://src/Assets/Sprites/Minders/FemaleMinder2.png"), "Female Minder 2"],
	[preload("res://src/Assets/Sprites/Minders/FuzzyMinder.png"), "Fuzzy Minder"],
	[preload("res://src/Assets/Sprites/Minders/GentlemanMinder.png"), "Gentleman Minder"],
	[preload("res://src/Assets/Sprites/Minders/HalloweenMinder.png"), "Halloween Minder"],
	[preload("res://src/Assets/Sprites/Minders/Minder.png"), "Minder"],
	[preload("res://src/Assets/Sprites/Minders/Mindera.png"), "Mindera"],
	[preload("res://src/Assets/Sprites/Minders/MinderBiker.png"), "Minder Biker"],
	[preload("res://src/Assets/Sprites/Minders/MinderGamer.png"), "Minder Gamer"],

	[preload("res://src/Assets/Sprites/Minders/MinderPalhaco.png"), "Minder Palhaco"],
	[preload("res://src/Assets/Sprites/Minders/MinderPlay.png"), "Minder Play"],
	[preload("res://src/Assets/Sprites/Minders/MinderRodinhasNatal.png"), "Minder Rodinhas Natal"],
	[preload("res://src/Assets/Sprites/Minders/MonstMinder.png"), "Mons tMinder"],
	[preload("res://src/Assets/Sprites/Minders/MRMinderSticker.png"), "MRMinder Sticker"],
	[preload("res://src/Assets/Sprites/Minders/Nerd.png"), "Nerd"],
	[preload("res://src/Assets/Sprites/Minders/OwlMinder.png"), "Owl Minder"],
	[preload("res://src/Assets/Sprites/Minders/PirateMinder.png"), "Pirate Minder"],
	[preload("res://src/Assets/Sprites/Minders/PixelMinder.png"), "Pixel Minder"],

	[preload("res://src/Assets/Sprites/Minders/Polvo.png"), "Polvo"],
	[preload("res://src/Assets/Sprites/Minders/PumpkinMinder.png"), "Pumpkin Minder"],
	[preload("res://src/Assets/Sprites/Minders/RocketMinder.png"), "Rocket Minder"],
	[preload("res://src/Assets/Sprites/Minders/Rodinhas.png"), "Rodinhas"],
	[preload("res://src/Assets/Sprites/Minders/SlimeMinder.png"), "Slime Minder"],
	#[preload("res://src/Assets/Sprites/Minders/SouthPark.png"), "South Park"],
	[preload("res://src/Assets/Sprites/Minders/TheHatefulEight.png"), "The Hateful Eight"],
	[preload("res://src/Assets/Sprites/Minders/VampMinder.png"), "Vamp Minder"],
	[preload("res://src/Assets/Sprites/Minders/WineMinder.png"), "Wine Minder"]
]

var selected_texture = get_texture_by_name("Minder");

func get_minders():
	return minders
	pass

func get_textures():
	var textures = []
	for i in range(len(minders)):
		minders.append(minders[i][0])
	return textures
	pass

func get_names(texture):
	for i in range(len(minders)):
		if minders[i][0] == texture:
			return minders[i][1]
		pass
	return null
	pass

# --

func get_selected():
	return selected_texture
	pass

func set_texture(texture):
	selected_texture = texture
	pass

func set_texture_index(index):
	selected_texture = get_textures()[index]
	pass

func set_texture_name(name):
	for i in range(len(minders)):
		if minders[i][1] == name:
			selected_texture = minders[i][0]
			break
	pass

func get_texture_by_name(name):
	for texture in get_minders():
		if texture[1] == name:
			return texture[0]
		pass
	pass
	
func get_texture_index(index):
	return get_textures()[index]
	pass
