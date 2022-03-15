extends Control

export(PackedScene) var SelectMinderButton;

func _ready():
	var textures = Minders.get_textures()
	
	for texture in textures:
		var new_select_minder_button = SelectMinderButton.instance()
		new_select_minder_button.texture_normal = texture
		$GridContainer.add_child(new_select_minder_button)
	pass
