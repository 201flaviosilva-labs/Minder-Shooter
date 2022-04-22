extends Node

signal dead()
signal player_lifes_changed(current_lifes)

const DEFAULT_PLAYER_START_LIVES = 3

var player_lives = DEFAULT_PLAYER_START_LIVES
var is_player_alive = true

func set_player_lives(new_lives):
	player_lives = new_lives
	
	emit_signal("player_lifes_changed", player_lives)
	
	if player_lives <= 0: 
		emit_signal("dead")
		return false # dead
	else: return true
	pass

func add_player_life():
	return set_player_lives(player_lives + 1)
	pass
	
func remove_player_life():
	return set_player_lives(player_lives - 1)
	pass
	
func reset():
	set_player_lives(DEFAULT_PLAYER_START_LIVES)
	is_player_alive = true
	pass
