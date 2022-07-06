extends Control

export(PackedScene) var SelectMinderButton;

func _ready():
	var minders = Minders.get_minders()
	
	for minder in minders:
		var new_select_minder_button = SelectMinderButton.instance()
		new_select_minder_button.texture_normal = minder[0]
		new_select_minder_button.get_node("Label").text = minder[1]
		$GridContainer.add_child(new_select_minder_button)
	pass
