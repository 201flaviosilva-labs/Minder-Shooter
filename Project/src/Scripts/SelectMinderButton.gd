extends TextureButton


func _ready():
	pass


func _on_SelectMinderButton_pressed():
	Minders.set_texture(texture_normal)
	print(Minders.get_selected())
	get_tree().change_scene("res://src/Scenes/Game.tscn")
	pass # Replace with function body.
