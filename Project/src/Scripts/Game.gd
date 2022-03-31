extends Node

export(PackedScene) var DUKE: PackedScene;

onready var BulletsContainer = $BulletsContainer;
onready var Player = $Player;

func _ready():
	randomize()
	Player.connect("fired", self, "_fired");
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
	
	var direction = new_duke_loc.rotation + PI / 2;
	print(new_duke_loc.offset)
	
	var new_duke = DUKE.instance()
	add_child(new_duke)
	
	new_duke.position = new_duke_loc.position
	
	direction += rand_range(-PI / 4, PI / 4)
	new_duke.rotation = direction
	
	var velocity = Vector2(rand_range(150.0, 250.0), 0.0)
	new_duke.linear_velocity = velocity.rotated(direction)
	pass
