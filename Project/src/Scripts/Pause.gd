extends Popup

var is_paused = false

func _unhandled_input(event):
	if event.is_action_released("pause"):
		is_paused = !is_paused
		visible = is_paused
		get_tree().paused = is_paused

func _on_ResumeBTN_pressed():
	hide()
	is_paused = false
	get_tree().paused = is_paused
	pass # Replace with function body.

func _on_ExitBTN_pressed():
	get_tree().change_scene("res://src/Scenes/Main.tscn")
	pass # Replace with function body.
