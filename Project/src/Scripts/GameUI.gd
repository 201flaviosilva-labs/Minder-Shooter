extends CanvasLayer

export(PackedScene) var player_life_icon;

func _ready():
	GameManager.connect("dead", self, "_dead")
	GameManager.connect("player_lifes_changed", self, "_player_lifes_changed")
	GameManager.connect("score_changed", self, "_score_changed")
	update_player_lifes(GameManager.player_lives)
	pass
	
func update_player_lifes(current_lifes: int):
	for c in $HBoxContainer.get_children():
		$HBoxContainer.remove_child(c)
		c.queue_free()
	
	for texture in range(current_lifes):
		var new_select_minder_button = player_life_icon.instance()
		new_select_minder_button.texture = Minders.get_selected()
		$HBoxContainer.add_child(new_select_minder_button)
	
	pass

func upate_score_UI(current_score: int):
	$ScoreLabel.text = "Score: " + str(current_score)
	pass
	
func _player_lifes_changed(current_lifes: int):
	update_player_lifes(current_lifes)
	pass
	
func _score_changed(current_score: int):
	upate_score_UI(current_score)
	pass

func _dead():
	$Dead.show()
	get_tree().paused = true
	pass

func _on_ExitBTN_pressed():
	get_tree().paused = false
	get_tree().change_scene("res://src/Scenes/Main.tscn")
	pass # Replace with function body.
