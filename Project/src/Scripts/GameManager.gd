extends Node

signal dead()
signal player_lifes_changed(current_lifes)
signal score_changed(current_score)

const DEFAULT_PLAYER_START_LIVES = 3
const DEFAULT_KILL_SCORE = 10

var player_lives = DEFAULT_PLAYER_START_LIVES
var score = 0
var is_player_alive = true

func set_player_lives(new_lives: int):
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
	
func set_score(new_score: int):
	score = new_score
	emit_signal("score_changed", score)
	pass

func add_score():
	set_score(score + DEFAULT_KILL_SCORE)
	
func remove_score():
	set_score(score - DEFAULT_KILL_SCORE * 10)

func reset():
	set_player_lives(DEFAULT_PLAYER_START_LIVES)
	set_score(0)
	is_player_alive = true
	pass
