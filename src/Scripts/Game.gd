extends Node

onready var BulletsContainer = $BulletsContainer;
onready var Player = $Player;

func _ready():
	Player.connect("fired", self, "_fired");
	pass

func _fired(new_bullet: Bullet, start_position, direction):
	BulletsContainer.add_child(new_bullet);
	new_bullet.global_position = start_position;
	new_bullet.set_direction(direction);
	pass;
