extends Control


func _ready():
	pass

func _on_StartBTN_pressed():
	get_tree().change_scene("res://src/Scenes/Game.tscn")
	pass # Replace with function body.

func _on_DockBTN_pressed():
	get_tree().change_scene("res://src/Scenes/Dock.tscn")
	pass # Replace with function body.

func _on_ExitBTN_pressed():
	get_tree().quit()
	pass # Replace with function body.
