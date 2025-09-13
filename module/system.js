export class CbrSettings {
	static register() {
		game.settings.register("CBRPNK", "wiedModule", {
			name: "Wierd",
			hint: "Setting to add Wierd options to character sheets.",
			scope: "world",
			config: true,
			type: Boolean,
			default: false,
			requiresReload: true
		});

		game.settings.register("CBRPNK", "resetDice", {
			name: "Reset of additional dice",
			hint: "If this option is enabled, the extra dice will automatically switch to 0 after each throw.",
			scope: "world",
			config: true,
			type: Boolean,
			default: false,
			requiresReload: true
		});

		game.settings.register("CBRPNK", "AugGlitchedCheck", {
			name: `Glitched Augmentations work only if "active".`,
			hint: "If this option is enabled Glitched Augmentations only considers Glitched status as Augmentations is checked.",
			scope: "world",
			config: true,
			type: Boolean,
			default: false,
			requiresReload: true
		});
	}
}