1. 
A. //Refrigerator
B. Air conditioning

2.
		
3.
Class Air conditioning
	State
		_name: name // <-- !!!
		_status: Boolean (true, false)
		_temperature: number
		//_temperatureMode: string
		
		
      // добавь работу с режимами
			
	Behavior	
		getStatus(): string
		on(): void
		off(): void
		increaseTemperature(): void
		decreaseTemperature(): void
		getTemperatureMode(): string
		setTemperatureMode(string);// где парамтер? почему возвращается string?
		setTemperature(number);
		heatMode (string)
		coolMode (string)
		dryMode (string)
		
/*Class Refrigerator
	State
		_name: String // <-- !!!
      _status: Boolean (true, false)
		_temperature: number
		_temperatureMode: string
		_productsLoadLevel: string
		
	Behavior	
      getName(): string
		getStatus(): string
		on(): void
		off(): void
		increaseTemperature(): void
		decreaseTemperature(): void
		getTemperatureMode(): string
		setTemperatureMode(): string // где парамтер? почему возвращается string?
		orderProducts(): string*/		
		
		
		
		
		