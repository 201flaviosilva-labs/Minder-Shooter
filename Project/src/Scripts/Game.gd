extends Node

export(PackedScene) var DUKE: PackedScene;
export(PackedScene) var AMMO: PackedScene;

onready var BulletsContainer = $BulletsContainer;
onready var Player = $Player;

func _ready():
	randomize()
	Player.connect("fired", self, "_fired");
	GameManager.reset()
	pass

func _fired(new_bullet: Bullet, start_position, direction):
	BulletsContainer.add_child(new_bullet);
	new_bullet.global_position = start_position;
	new_bullet.set_direction(direction);
	pass

func _on_DukeGeneratorTimer_timeout():
	_create_new_duke()
	pass # Replace with function body.
	
func _create_new_duke():
	var new_duke_loc = get_node("Path2D/PathFollow2D")
	new_duke_loc.offset = randi()
	
	var new_duke = DUKE.instance()
	add_child(new_duke)
	new_duke.fix_direction(new_duke_loc.rotation + PI / 2, new_duke_loc.position)
	pass


func _on_NewAmmoTimer_timeout():
	GameManager.add_player_ammo()
	pass
